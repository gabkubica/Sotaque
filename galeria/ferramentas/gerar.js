/* =====================================================================
   Galeria · gerador das páginas de compartilhamento e do sitemap
   ---------------------------------------------------------------------
   Rode depois de mudar obras.js (precisa de Node e Playwright):
       node galeria/ferramentas/gerar.js
   O que ele faz:
   - img/og/*.jpg ......... a imagem que aparece ao compartilhar o link (WhatsApp, Facebook...)
   - obra/ID.html, serie/ID.html, artista/ID.html, agenda/ID.html, pagina/*.html
                            uma página por obra/série/artista/exposição/seção, com título,
                            descrição, imagem e dados para o Google. Quem abre vê o site normal.
   - index.html ........... atualiza os metadados, o menu e o rodapé
   - sitemap.xml .......... a lista de páginas para o Google
   - img/icone-180.png .... ícone para a tela inicial do celular
   ===================================================================== */
const fs=require('fs'), path=require('path'), http=require('http');
const {chromium}=require('playwright');
const GALDIR=path.resolve(__dirname,'..'), RAIZ=path.resolve(GALDIR,'..');
const TIPOS={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp'};
const escA=s=>String(s??'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');

const servidor=http.createServer((req,res)=>{
  const f=path.join(RAIZ,decodeURIComponent(req.url.split('?')[0]));
  if (!f.startsWith(RAIZ)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){ res.writeHead(404); return res.end(); }
  res.writeHead(200,{'Content-Type':TIPOS[path.extname(f)]||'application/octet-stream'}); fs.createReadStream(f).pipe(res);
});

(async()=>{
  await new Promise(r=>servidor.listen(0,r));
  const BASE=`http://localhost:${servidor.address().port}/galeria/index.html`;
  const nav=await chromium.launch(), pag=await nav.newPage({viewport:{width:1280,height:900}});
  await pag.goto(BASE); await pag.waitForFunction(()=>document.fonts.ready);
  const G=await pag.evaluate(()=>GAL), SITE=G.site, HOJE=new Date().toISOString().slice(0,10);
  const obra=id=>G.obras.find(o=>o.id===id), artista=id=>G.artistas.find(a=>a.id===id);
  fs.mkdirSync(path.join(GALDIR,'img/og'),{recursive:true});

  /* ---------- imagens de compartilhamento (1200 × 630) ---------- */
  async function og(nome,ids,legenda){
    await pag.evaluate(([ids,legenda])=>{
      const L=ids.map(id=>GAL.obras.find(o=>o.id===id)), H=legenda?440:500, gap=56;
      let ws=L.map(o=>H*o.medidas[1]/o.medidas[0]); const k=Math.min(1,(1200-120-gap*(L.length-1))/ws.reduce((a,b)=>a+b,0));
      document.body.innerHTML=`<div id="og" style="width:1200px;height:630px;background:#ebe7e0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:34px;font-family:Fraunces,serif;color:#1d1b19">
        <div style="display:flex;gap:${gap}px;align-items:center">${L.map((o,i)=>`<div style="width:${Math.round(ws[i]*k)}px;height:${Math.round(H*k)}px;line-height:0;outline:10px solid #fff;outline-offset:-1px;box-shadow:0 26px 40px -22px rgba(40,30,20,.55)">${art(o,800).replace('<svg','<svg style="width:100%;height:100%;display:block"').replace('<img','<img style="width:100%;height:100%;object-fit:cover;display:block"')}</div>`).join('')}</div>
        ${legenda? `<div style="font-size:40px;font-weight:600;letter-spacing:.01em">${legenda}</div>` : ''}</div>`;
      document.body.style.margin='0';
    },[ids,legenda]);
    await pag.waitForTimeout(150); await pag.evaluate(()=>Promise.all([...document.images].map(i=>i.decode().catch(()=>{}))));
    await pag.locator('#og').screenshot({path:path.join(GALDIR,'img/og',nome+'.jpg'),type:'jpeg',quality:84});
    return SITE+'img/og/'+nome+'.jpg';
  }
  const IMG={};
  for (const o of G.obras) IMG['obra-'+o.id]=await og(o.id,[o.id]);
  const capa=[...new Set([...G.obras.filter(o=>o.destaque&&o.status!=='vendida').map(o=>o.id)])].slice(0,3);
  IMG.galeria=await og('galeria',capa,escA(G.nome));
  await pag.setViewportSize({width:180,height:180}); await pag.goto(`http://localhost:${servidor.address().port}/galeria/img/icone.svg`);
  await pag.screenshot({path:path.join(GALDIR,'img/icone-180.png'),clip:{x:0,y:0,width:180,height:180}}).catch(()=>{});
  await pag.setViewportSize({width:1280,height:900});

  /* ---------- páginas ---------- */
  const rotas=[];
  const secoes={obras:'Obras',series:'Séries',artistas:'Artistas',atelie:'Ateliê',agenda:'Exposições e notícias',encomendas:'Encomendas',duvidas:'Perguntas frequentes',sobre:'Sobre'};
  for (const k in secoes) rotas.push({r:k,arq:`pagina/${k}.html`,img:IMG.galeria});
  for (const o of G.obras) rotas.push({r:'obra-'+o.id,arq:`obra/${o.id}.html`,img:IMG['obra-'+o.id],o});
  for (const s of G.series) rotas.push({r:'serie-'+s.id,arq:`serie/${s.id}.html`,img:IMG['obra-'+(s.capa||G.obras.find(o=>o.serie===s.id).id)],s});
  for (const a of G.artistas){ const d=G.obras.find(o=>o.artista===a.id&&o.destaque)||G.obras.find(o=>o.artista===a.id); rotas.push({r:'artista-'+a.id,arq:`artista/${a.id}.html`,img:d?IMG['obra-'+d.id]:IMG.galeria,a}); }
  for (const e of G.agenda) rotas.push({r:'agenda-'+e.id,arq:`agenda/${e.id}.html`,img:e.capa?IMG['obra-'+e.capa]:IMG.galeria,e});

  /* links internos em #rota viram links para as páginas estáticas (o Google segue esses) */
  const estatico=h=>{ const m=h.match(/^#(obra|serie|artista|agenda)-([\w-]+)$/); if (m) return `${m[1]}/${m[2]}.html`;
    const s=h.match(/^#([\w-]+)/); if (!s||s[1]==='inicio') return './'; return secoes[s[1]]? `pagina/${s[1]}.html` : s[1].startsWith('duvidas-')? 'pagina/duvidas.html'+h : s[1]==='duvidas'? 'pagina/duvidas.html' : './'+h; };
  const reLinks=html=>html.replace(/href="(#[^"]*)"/g,(_,h)=>`href="${estatico(h)}"`);

  function ld(x){
    const end={'@type':'PostalAddress',streetAddress:G.contato.endereco,addressCountry:'BR'};
    if (x.o){ const o=x.o, a=artista(o.artista);
      return {'@context':'https://schema.org','@type':'VisualArtwork',name:o.titulo,description:o.desc,image:x.img,url:SITE+x.arq,artform:'Pintura',artMedium:o.tecnica,dateCreated:String(o.ano),
        height:{'@type':'Distance',name:o.medidas[0]+' cm'},width:{'@type':'Distance',name:o.medidas[1]+' cm'},creator:{'@type':'Person',name:a.nome},
        ...(o.preco&&o.status!=='vendida'? {offers:{'@type':'Offer',price:o.preco,priceCurrency:'BRL',availability:o.status==='disponivel'?'https://schema.org/InStock':'https://schema.org/LimitedAvailability',url:SITE+x.arq,seller:{'@type':'Organization',name:G.nome}}} : {})}; }
    if (x.a) return {'@context':'https://schema.org','@type':'ProfilePage',mainEntity:{'@type':'Person',name:x.a.nome,description:x.a.bio,jobTitle:'Artista plástico',homeLocation:x.a.cidade}};
    if (x.s) return {'@context':'https://schema.org','@type':'CollectionPage',name:x.s.nome,description:x.s.texto,url:SITE+x.arq};
    if (x.e) return x.e.tipo==='exposicao'? {'@context':'https://schema.org','@type':'ExhibitionEvent',name:x.e.titulo,description:x.e.texto,startDate:x.e.inicio,endDate:x.e.fim,image:x.img,eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',eventStatus:'https://schema.org/EventScheduled',location:{'@type':'Place',name:x.e.local,address:x.e.local},organizer:{'@type':'Organization',name:G.nome,url:SITE}}
      : {'@context':'https://schema.org','@type':'NewsArticle',headline:x.e.titulo,datePublished:x.e.data,image:x.img,description:x.e.texto,publisher:{'@type':'Organization',name:G.nome}};
    if (x.r==='duvidas') return {'@context':'https://schema.org','@type':'FAQPage',mainEntity:G.faq.flatMap(g=>g.itens.map(([p,r])=>({'@type':'Question',name:p,acceptedAnswer:{'@type':'Answer',text:r.replace(/\{(\w+)\}/g,(_,k)=>G.pagamento[k])}})))};
    return {'@context':'https://schema.org','@type':'ArtGallery',name:G.nome,description:G.descricao,url:SITE,image:IMG.galeria,email:G.contato.email,telephone:'+'+G.contato.whatsapp,address:end,
      sameAs:[`https://instagram.com/${G.contato.instagram.replace('@','')}`]};
  }
  const meta=(t,d,url,img,x)=>`<!--meta-->
<title>${escA(t)}</title>
<meta name="description" content="${escA(d)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="${x&&x.o?'product':'website'}">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="${escA(G.nome)}">
<meta property="og:title" content="${escA(t)}">
<meta property="og:description" content="${escA(d)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
${x&&x.o&&x.o.preco&&x.o.status!=='vendida'? `<meta property="product:price:amount" content="${x.o.preco}"><meta property="product:price:currency" content="BRL">\n` : ''}<script type="application/ld+json">${JSON.stringify(ld(x||{r:'inicio'}))}</script>
<!--/meta-->`;

  const modelo=fs.readFileSync(path.join(GALDIR,'index.html'),'utf8');
  const troca=(html,{t,d,url,img,x,main,navH,foot})=>html
    .replace(/<!--meta-->[\s\S]*?<!--\/meta-->/,()=>meta(t,d,url,img,x))
    .replace(/(<nav class="nav" id="nav" aria-label="Principal">)[\s\S]*?(<\/nav>)/,(_,a,b)=>a+navH+b)
    .replace(/(<footer class="foot" id="foot">)[\s\S]*?(<\/footer>)/,(_,a,b)=>a+foot+b)
    .replace(/(<main id="main">)[\s\S]*?(<\/main>)/,(_,a,b)=>a+(main||'')+b);
  const captura=async r=>{
    await pag.goto(BASE+'#'+r); await pag.reload(); await pag.waitForTimeout(120);
    return pag.evaluate(()=>{ const sem=el=>{ const c=el.cloneNode(true); c.querySelectorAll('svg').forEach(s=>s.remove()); return c.innerHTML; };
      return {t:document.title,d:document.querySelector('meta[name=description]').content,main:sem(document.querySelector('#main')),navH:document.querySelector('#nav').innerHTML,foot:document.querySelector('#foot').innerHTML}; });
  };
  for (const x of rotas){
    const c=await captura(x.r), url=SITE+x.arq;
    let html=troca(modelo,{...c,main:reLinks(c.main),navH:reLinks(c.navH),foot:reLinks(c.foot),url,img:x.img,x});
    html=html.replace('<head>','<head>\n<base href="../">').replace('<body>',`<body data-rota="${x.r}">`);
    fs.mkdirSync(path.dirname(path.join(GALDIR,x.arq)),{recursive:true}); fs.writeFileSync(path.join(GALDIR,x.arq),html);
  }
  const ci=await captura('inicio');
  fs.writeFileSync(path.join(GALDIR,'index.html'),troca(modelo,{...ci,main:'',navH:reLinks(ci.navH),foot:reLinks(ci.foot),url:SITE,img:IMG.galeria}));

  /* ---------- sitemap ---------- */
  fs.writeFileSync(path.join(GALDIR,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[{arq:''},...rotas].map(x=>`  <url><loc>${SITE+x.arq}</loc><lastmod>${HOJE}</lastmod></url>`).join('\n')}
</urlset>
`);
  console.log(`Pronto: ${rotas.length} páginas, ${G.obras.length+1} imagens de compartilhamento, sitemap.xml`);
  await nav.close(); servidor.close();
})().catch(e=>{ console.error(e); process.exit(1); });
