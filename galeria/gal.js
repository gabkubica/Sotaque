/* =====================================================================
   Galeria · o site inteiro (páginas por hash). Os dados ficam em obras.js.
   #inicio  #obras  #obra-ID  #series  #serie-ID  #artistas  #artista-ID
   #atelie  #agenda  #agenda-ID  #encomendas  #duvidas  #duvidas-GRUPO  #sobre
   #selecao  #selecao=ID,ID (seleção compartilhada)
   Filtros podem ir no link:  #obras?cor=azul&tamanho=g
   ===================================================================== */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const obra=id=>GAL.obras.find(o=>o.id===id), artista=id=>GAL.artistas.find(a=>a.id===id), serie=id=>GAL.series.find(s=>s.id===id);
const HOJE=new Date().toISOString().slice(0,10);
const ST={disponivel:'Disponível',reservada:'Reservada',vendida:'Vendida'};
const COR={vermelho:['Vermelhos e rosas','#c8475f'],amarelo:['Amarelos e ocres','#d99a2b'],verde:['Verdes','#5f8f4a'],azul:['Azuis','#3f74b8'],roxo:['Roxos e lilases','#7a5cb3'],terroso:['Terrosos','#a8623a']};
const TAM={p:'Pequena (até 50 cm)',m:'Média (51 a 90 cm)',g:'Grande (acima de 90 cm)'};
const FAIXA={a:'Até R$ 3 mil',b:'R$ 3 mil a R$ 5 mil',c:'R$ 5 mil a R$ 8 mil',d:'Acima de R$ 8 mil',consulta:'Sob consulta'};
const FORMATO={vertical:'Vertical',horizontal:'Horizontal',quadrada:'Quadrada'};
const tamCat=o=>{const m=Math.max(...o.medidas); return m<=50?'p':m<=90?'m':'g';};
const faixa=o=>!o.preco?'consulta':o.preco<=3000?'a':o.preco<=5000?'b':o.preco<=8000?'c':'d';
const formato=o=>o.medidas[0]>o.medidas[1]?'vertical':o.medidas[0]<o.medidas[1]?'horizontal':'quadrada';
const med=o=>`${o.medidas[0]} × ${o.medidas[1]} cm`;
const cm=n=>(n/100).toLocaleString('pt-BR',{minimumFractionDigits:2})+' m';
const fmt=s=>String(s).replace(/\{(\w+)\}/g,(_,k)=>GAL.pagamento[k]??'');
const wpp=txt=>`https://wa.me/${GAL.contato.whatsapp}?text=${encodeURIComponent(txt)}`;
const linkObra=o=>GAL.site+'obra/'+o.id+'.html';
const ICO={
  heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 7.9 3.6 4.5 7 4.5c2 0 3.6 1.1 5 3 1.4-1.9 3-3 5-3 3.4 0 5.6 3.4 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2z"/></svg>',
  wa:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2s.2-1.1.2-1.2l-.4-.2z"/></svg>',
  share:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 16a3 3 0 0 0-2.4 1.2l-6.7-3.4a3 3 0 0 0 0-1.6l6.7-3.4A3 3 0 1 0 15 7l-6.7 3.4a3 3 0 1 0 0 3.2L15 17a3 3 0 1 0 3-1z"/></svg>',
  wall:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21V3h18v18H3zm2-2h14V5H5v14zm3-10h8v5H8V9zm-1 9v-1.5c0-.8.7-1.5 1.5-1.5h7c.8 0 1.5.7 1.5 1.5V18H7z"/></svg>',
  zoom:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 3a7 7 0 0 1 5.6 11.2l5.1 5.1-1.4 1.4-5.1-5.1A7 7 0 1 1 10 3zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-1 2h2v2h2v2h-2v2H9v-2H7V9h2V7z"/></svg>',
  pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zm6 0h4v14h-4z"/></svg>',
  play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
};

/* ---------- imagens ---------- */
/* x: obra (ou item com foto/arte). Sem foto, desenha a pintura de exemplo com a proporção real das medidas. */
function art(x,w,h){
  const [a,l]=x.medidas||[5,4]; h=h||Math.round(w*a/l);
  const nome=x.titulo||x.legenda||x.nome||'';
  if (x.foto) return `<img src="${esc(x.foto)}" alt="${esc(nome)}" loading="lazy" decoding="async">`;
  if (!x.arte) return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" role="img" aria-label="Tela em branco"><rect width="${w}" height="${h}" fill="#f5f1e9"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Figtree,sans-serif" font-size="${Math.min(w,h)*.09}" fill="#a39a8e">${esc(nome)}</text></svg>`;
  return quadro(x.arte[0],x.arte[1],hashStr(x.id||x.arte.join(''))%97,{w,h,frame:false}).replace(/aria-label="[^"]*"/,`aria-label="${esc(nome? nome+(x.artista? ', de '+artista(x.artista)?.nome : '') : 'Pintura')}"`);
}
/* a obra numa "parede" quadrada, com a proporção real e um tamanho que sugere a escala */
function stage(o){
  const [a,l]=o.medidas, k=.6+.26*Math.min(1,Math.max(0,(Math.max(a,l)-30)/90)), w=(l>=a? k : k*l/a)*100;
  return `<span class="stg"><span class="pt" style="width:${w.toFixed(1)}%;aspect-ratio:${l}/${a}">${art(o,400)}</span></span>`;
}

/* ---------- preço e parcelamento ---------- */
const brl=(v,c)=>'R$ '+v.toLocaleString('pt-BR',c?{minimumFractionDigits:2,maximumFractionDigits:2}:{maximumFractionDigits:0});
function parcela(v){ const P=GAL.pagamento, n=Math.max(1,Math.min(P.parcelas,Math.floor(v/P.parcelaMin))); return n>1? `${n}× de ${brl(v/n,true)} sem juros` : ''; }
function precoCard(o){
  if (o.status==='vendida') return '<span class="pr">Vendida</span>';
  if (!o.preco) return '<span class="pr">Sob consulta</span>';
  const p=parcela(o.preco); return `<span class="pr">${brl(o.preco)}</span>${p? `<span class="parc">ou ${p}</span>` : ''}`;
}
function precoObra(o){
  if (o.status==='vendida') return '<div class="price"><b>Vendida</b><span>Esta obra já tem dono, mas o artista pode pintar algo na mesma linha.</span></div>';
  if (!o.preco) return '<div class="price"><b>Sob consulta</b><span>Fale com a galeria para saber o valor e as condições.</span></div>';
  const P=GAL.pagamento, p=parcela(o.preco);
  return `<div class="price"><b>${brl(o.preco)}</b>${p? `<span>ou <strong>${p}</strong> no cartão</span>` : ''}${P.pix? `<span>${brl(o.preco*(1-P.pix/100))} no Pix (${P.pix}% de desconto)</span>` : ''}<a href="#duvidas-pagamento">Formas de pagamento</a></div>`;
}

/* ---------- minha seleção (favoritos, salvos no navegador) ---------- */
const FAVK='galeria-selecao';
let favs=(()=>{ try{ return (JSON.parse(localStorage.getItem(FAVK))||[]).filter(obra); }catch(e){ return []; } })();
const isFav=id=>favs.includes(id);
function salvaFavs(){ try{ localStorage.setItem(FAVK,JSON.stringify(favs)); }catch(e){} contaFavs(); }
function contaFavs(){ $$('[data-nfav]').forEach(e=>{ e.textContent=favs.length||''; e.hidden=!favs.length; }); }
function toggleFav(id){
  favs=isFav(id)? favs.filter(x=>x!==id) : [...favs,id]; salvaFavs();
  $$(`[data-fav="${id}"]`).forEach(b=>{ b.setAttribute('aria-pressed',isFav(id)); const t=b.querySelector('.ft'); if (t) t.textContent=isFav(id)?'Na sua seleção':'Salvar na seleção'; });
  toast(isFav(id)? `“${obra(id).titulo}” está na sua seleção` : 'Obra retirada da seleção', isFav(id)? ['Ver seleção','#selecao'] : null);
  if (rota().startsWith('selecao') && !rota().includes('=')) render(true);
}
const favBtn=(o,cls='fav')=>`<button class="${cls}" data-fav="${o.id}" aria-pressed="${isFav(o.id)}" aria-label="Salvar “${esc(o.titulo)}” na minha seleção" title="Salvar na minha seleção">${ICO.heart}</button>`;

/* ---------- peças ---------- */
function card(o){
  const a=artista(o.artista);
  return `<article class="card"><a class="cv" href="#obra-${o.id}" tabindex="-1" aria-hidden="true">${stage(o)}${o.status!=='disponivel'? `<i class="st ${o.status}">${ST[o.status]}</i>` : ''}</a>${favBtn(o)}
    <a class="ci" href="#obra-${o.id}"><b>${esc(o.titulo)}</b><small>${esc(a.nome)} · ${med(o)}</small></a><div class="cp">${precoCard(o)}</div></article>`;
}
const grade=L=>`<div class="grid">${L.map(card).join('')}</div>`;
const head=(eye,t,txt)=>`<header class="ph">${eye? `<p class="eye">${eye}</p>` : ''}<h1 tabindex="-1">${t}</h1>${txt? `<p class="lead">${txt}</p>` : ''}</header>`;
const exemplo=t=>`<p class="ex">${t||'Conteúdo de exemplo'}</p>`;
function serieCard(s){
  const L=GAL.obras.filter(o=>o.serie===s.id), c=obra(s.capa)||L[0];
  return `<a class="scard" href="#serie-${s.id}">${stage(c)}<span><small>${esc(artista(s.artista).nome)} · ${s.anos}</small><b>${esc(s.nome)}</b><em>${L.length} ${L.length===1?'obra':'obras'}</em></span></a>`;
}
function artCard(a){
  return `<a class="art" href="#artista-${a.id}"><span class="rt">${retrato(a,400)}</span><div><b>${esc(a.nome)}</b><small>${esc(a.cidade)} · pinta desde ${a.desde}</small><p>${esc(a.bio.slice(0,150))}…</p><em>Conhecer o trabalho →</em></div></a>`;
}
const retrato=(a,w)=>a.foto? `<img src="${esc(a.foto)}" alt="Retrato de ${esc(a.nome)}" loading="lazy">` : quadro(a.retrato[0],a.retrato[1],7,{w,h:Math.round(w*1.2),frame:false}).replace(/aria-label="[^"]*"/,`aria-label="Imagem de exemplo no lugar do retrato de ${esc(a.nome)}"`);

/* ---------- datas (agenda) ---------- */
const dia=s=>new Date(s+'T12:00:00');
const dataBR=(s,o)=>dia(s).toLocaleDateString('pt-BR',o||{day:'numeric',month:'long',year:'numeric'});
function periodo(e){
  if (e.tipo!=='exposicao') return dataBR(e.data);
  const mesmoAno=e.inicio.slice(0,4)===e.fim.slice(0,4);
  return `${dataBR(e.inicio,mesmoAno?{day:'numeric',month:'long'}:undefined)} a ${dataBR(e.fim)}`;
}
const situacao=e=>e.tipo!=='exposicao'? 'Notícia' : HOJE<e.inicio? 'Em breve' : HOJE>e.fim? 'Encerrada' : 'Em cartaz';
function agCard(e,grande){
  const c=obra(e.capa), s=situacao(e);
  return `<a class="ag${grande?' big':''}" href="#agenda-${e.id}">${c? stage(c) : ''}<span><i class="tag ${s==='Em cartaz'?'on':''}">${s}</i><b>${esc(e.titulo)}</b><small>${periodo(e)}${e.local? ' · '+esc(e.local) : ''}</small>${grande? `<p>${esc(e.texto)}</p>` : ''}</span></a>`;
}
function linkAgenda(e){ /* link para salvar a exposição no Google Agenda */
  const d=s=>s.replace(/-/g,''), fim=new Date(dia(e.fim).getTime()+864e5).toISOString().slice(0,10);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(e.titulo)}&dates=${d(e.inicio)}/${d(fim)}&location=${encodeURIComponent(e.local||'')}&details=${encodeURIComponent(e.texto)}`;
}

/* =====================================================================
   VER NA PAREDE · a obra (ou várias) numa sala desenhada em escala real.
   Tudo é medido em centímetros: o desenho tem RW cm de largura e 280 cm de altura.
   ===================================================================== */
const PV={amb:'sala', cor:'branca'};
const PAREDES={branca:['Branca','#eeebe6'],areia:['Areia','#e0d3bf'],salvia:['Sálvia','#aab49c'],grafite:['Grafite','#45433f']};
const AMB={sala:['Sala','Sofá de 2,20 m',85],aparador:['Aparador','Aparador de 1,60 m',80],quarto:['Quarto','Cama de casal de 1,60 m',112]};
function moveis(amb,cx,F,largo){
  const R=(x,y,w,h,c,rx=0)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${c}"/>`, wood='#8a6a4f';
  if (amb==='sala') return R(cx-100,F-9,4,9,'#4b3d31')+R(cx+96,F-9,4,9,'#4b3d31')+R(cx-101,F-85,202,46,'#8f877b',9)+R(cx-110,F-48,220,40,'#a39a8e',6)
    +R(cx-94,F-53,92,15,'#b3ab9f',6)+R(cx+2,F-53,92,15,'#b3ab9f',6)+R(cx-113,F-66,22,58,'#9a9185',9)+R(cx+91,F-66,22,58,'#9a9185',9)
    +`<rect x="${cx-86}" y="${F-78}" width="30" height="27" rx="7" fill="#c9a46a" transform="rotate(-8 ${cx-71} ${F-64})"/><rect x="${cx+56}" y="${F-78}" width="30" height="27" rx="7" fill="#7b8a72" transform="rotate(7 ${cx+71} ${F-64})"/>`
    +(largo? `<path d="M${cx+150} ${F-36}l-14-50 8-2 10 46zm0 0l4-62 8 1-6 61zm0 0l18-46 7 3-19 43z" fill="#5f7a55"/><ellipse cx="${cx+136}" cy="${F-88}" rx="9" ry="20" fill="#6f8c63" transform="rotate(-18 ${cx+136} ${F-88})"/><ellipse cx="${cx+156}" cy="${F-100}" rx="8" ry="22" fill="#5f7a55"/><ellipse cx="${cx+172}" cy="${F-80}" rx="8" ry="19" fill="#7b9a6c" transform="rotate(24 ${cx+172} ${F-80})"/>${R(cx+136,F-36,32,36,'#c8b8a2',3)}`
      +`<path d="M${cx-152} ${F}v-2h24v2z" fill="#3a332c"/><path d="M${cx-141} ${F-2}v-138h2v138z" fill="#3a332c"/><path d="M${cx-156} ${F-140}h34l-6-24h-22z" fill="#efe6d6"/>` : '');
  if (amb==='aparador') return R(cx-76,F-12,4,12,'#4b3d31')+R(cx+72,F-12,4,12,'#4b3d31')+R(cx-80,F-80,160,70,wood,2)+R(cx-80,F-80,160,4,'#735641')
    +`<path d="M${cx-27} ${F-74}v60M${cx+27} ${F-74}v60" stroke="#6d5240" stroke-width="1"/>`+R(cx-33,F-48,2,9,'#d8c3a0',1)+R(cx+31,F-48,2,9,'#d8c3a0',1)
    +R(cx-66,F-84,30,4,'#7a1f35',1)+R(cx-64,F-88,26,4,'#d7cfc2',1)+R(cx-67,F-92,28,4,'#3f5560',1)
    +`<path d="M${cx+50} ${F-80}c-9 0-10-8-7-16s4-10 7-10 4 2 7 10 2 16-7 16z" fill="#d8d2c8"/><path d="M${cx+50} ${F-104}q-6-30-22-46M${cx+50} ${F-104}q4-34 18-52M${cx+50} ${F-104}q-1-24 2-40" stroke="#6b5a43" stroke-width="1.2" fill="none"/>`
    +`<ellipse cx="${cx+10}" cy="${F-82}" rx="12" ry="3" fill="#bfae95"/>`;
  return R(cx-88,F-112,176,100,'#b7a58f',6)+R(cx-82,F-24,164,16,'#9c8a73',2)+R(cx-80,F-9,4,9,'#4b3d31')+R(cx+76,F-9,4,9,'#4b3d31')
    +R(cx-74,F-72,68,19,'#fbf8f3',8)+R(cx+6,F-72,68,19,'#fbf8f3',8)+R(cx-82,F-58,164,36,'#f1ece3',5)+R(cx-82,F-42,164,22,'#e3dacb',4)
    +R(cx-132,F-55,40,47,wood,2)+R(cx+92,F-55,40,47,wood,2)+R(cx-128,F-8,3,8,'#4b3d31')+R(cx+125,F-8,3,8,'#4b3d31')
    +`<path d="M${cx-115} ${F-55}v-18h6v18zM${cx+109} ${F-55}v-18h6v18z" fill="#cdbfa9"/><path d="M${cx-124} ${F-73}h24l-4-15h-16zM${cx+100} ${F-73}h24l-4-15h-16z" fill="#efe6d6"/>`;
}
/* L: lista de obras (uma ou várias). Retorna o HTML da sala. */
function sala(L,amb=PV.amb,cor=PV.cor,estreita){
  const gap=15, total=L.reduce((s,o)=>s+o.medidas[1],0)+gap*(L.length-1);
  const RW=Math.max(estreita?300:420,total+70), RH=280, F=250, cx=RW/2, alto=Math.max(...L.map(o=>o.medidas[0]));
  const topo=AMB[amb][2]+18;                                        // 18 cm acima do móvel
  let centro=Math.max(150,topo+alto/2); centro=Math.min(centro,F-12-alto/2);  // centro da obra ~1,50 m do chão
  const wall=PAREDES[cor][1], escura=cor==='grafite';
  let x=cx-total/2;
  const quadros=L.map(o=>{ const [a,l]=o.medidas, y=F-centro-a/2, h=`<span class="pq" style="left:${(x/RW*100).toFixed(2)}%;top:${(y/RH*100).toFixed(2)}%;width:${(l/RW*100).toFixed(2)}%;height:${(a/RH*100).toFixed(2)}%">${art(o,300)}</span>`; x+=l+gap; return h; }).join('');
  return `<span class="room" style="aspect-ratio:${RW}/${RH}"><svg viewBox="0 0 ${RW} ${RH}" aria-hidden="true" preserveAspectRatio="none">
    <defs><radialGradient id="luz" cx=".5" cy="0" r="1"><stop offset="0" stop-color="#fff" stop-opacity="${escura?.12:.35}"/><stop offset="1" stop-color="#000" stop-opacity="${escura?.25:.08}"/></radialGradient>
    <linearGradient id="chao" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a98460"/><stop offset="1" stop-color="#c4a07a"/></linearGradient></defs>
    <rect width="${RW}" height="${F}" fill="${wall}"/><rect width="${RW}" height="${F}" fill="url(#luz)"/>
    <rect y="${F}" width="${RW}" height="${RH-F}" fill="url(#chao)"/>${Array.from({length:Math.ceil(RW/40)},(_,i)=>`<path d="M${i*40+12} ${F}l-${18+i%3*4} ${RH-F}" stroke="#9a7756" stroke-width=".6"/>`).join('')}
    <rect y="${F-9}" width="${RW}" height="9" fill="${escura?'#3a3835':'#f7f5f1'}"/><rect y="${F-1}" width="${RW}" height="1.5" fill="#000" opacity=".12"/>
    ${moveis(amb,cx,F,RW>=400)}</svg>${quadros}</span>`;
}
function parede(L,titulo){
  const est=innerWidth<640;
  const desenha=()=>{
    $('#pv-sala').innerHTML=sala(L,PV.amb,PV.cor,est);
    $$('[data-amb]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.amb===PV.amb));
    $$('[data-cor]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.cor===PV.cor));
    $('#pv-leg').innerHTML=`${L.length===1? `A obra mede <b>${med(L[0])}</b> (altura × largura)` : `${L.length} obras lado a lado, com 15 cm entre elas`}. ${AMB[PV.amb][1]}, centro da obra a cerca de 1,50 m do chão. Simulação aproximada.`;
  };
  modal(`<div class="pv"><header><p class="eye">Ver na parede · escala real</p><h2>${esc(titulo||L[0].titulo)}</h2></header><div id="pv-sala"></div><p id="pv-leg" class="muted"></p>
    <div class="pvc"><div role="group" aria-label="Ambiente"><span>Ambiente</span>${Object.entries(AMB).map(([k,[n]])=>`<button class="chip" data-amb="${k}">${n}</button>`).join('')}</div>
    <div role="group" aria-label="Cor da parede"><span>Parede</span>${Object.entries(PAREDES).map(([k,[n,c]])=>`<button class="sw" data-cor="${k}" style="--c:${c}" aria-label="Parede ${n}" title="${n}"></button>`).join('')}</div></div></div>`,'Ver na parede',true);
  $('.md').addEventListener('click',e=>{ const b=e.target.closest('[data-amb],[data-cor]'); if (!b) return; if (b.dataset.amb) PV.amb=b.dataset.amb; else PV.cor=b.dataset.cor; desenha(); });
  desenha();
}

/* ---------- janela (modal), ampliação e aviso ---------- */
let voltaFoco=null;
function modal(html,rotulo,largo){
  fecha(); voltaFoco=document.activeElement;
  const d=document.createElement('div'); d.className='md'; d.setAttribute('role','dialog'); d.setAttribute('aria-modal','true'); d.setAttribute('aria-label',rotulo);
  d.innerHTML=`<div class="mdc${largo?' wide':''}"><button class="x" data-fecha aria-label="Fechar">×</button>${html}</div>`;
  d.addEventListener('click',e=>{ if (e.target===d||e.target.closest('[data-fecha]')) fecha(); });
  document.body.appendChild(d); document.body.classList.add('travado'); d.querySelector('.x').focus();
}
function fecha(){ const d=$('.md'); if (!d) return; d.remove(); document.body.classList.remove('travado'); if (voltaFoco&&voltaFoco.focus) voltaFoco.focus(); voltaFoco=null; }
function amplia(o){
  fecha(); voltaFoco=document.activeElement;
  const d=document.createElement('div'); d.className='lb'; d.setAttribute('role','dialog'); d.setAttribute('aria-modal','true'); d.setAttribute('aria-label','Obra ampliada');
  d.innerHTML=`<div class="lbi" style="aspect-ratio:${o.medidas[1]}/${o.medidas[0]};--r:${o.medidas[1]}/${o.medidas[0]}">${art(o,1400)}</div><button class="x" aria-label="Fechar">×</button>`;
  d.onclick=()=>{ d.remove(); document.body.classList.remove('travado'); voltaFoco?.focus(); };
  document.body.appendChild(d); document.body.classList.add('travado'); d.querySelector('.x').focus();
}
let toastT;
function toast(msg,acao){
  const t=$('#toast'); t.innerHTML=`<span>${esc(msg)}</span>${acao? `<a href="${acao[1]}">${acao[0]}</a>` : ''}`; t.classList.add('on');
  clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('on'),3800);
}
async function copia(txt,msg){ try{ await navigator.clipboard.writeText(txt); toast(msg||'Link copiado'); }catch(e){ prompt('Copie o link:',txt); } }

/* =====================================================================
   ABERTURA · slideshow das obras em tela cheia
   ===================================================================== */
let heroT=null, heroI=0, heroPausa=false;
const heroObras=()=>GAL.obras.filter(o=>o.destaque);
function vHero(){
  const L=heroObras(), W=1600, H=Math.round(W*Math.min(2.1,Math.max(.5,(innerHeight-60)/innerWidth)));
  return `<section class="hero" aria-roledescription="carrossel" aria-label="Obras em destaque">
    <div class="slides">${L.map((o,i)=>`<div class="sl${i===0?' on':''}" aria-hidden="${i!==0}"><div class="slx">${art(o,W,H)}</div></div>`).join('')}</div>
    <div class="hsh"></div>
    <div class="htx"><p class="eye">${esc(GAL.lema)}</p><h1 tabindex="-1">${esc(GAL.nome)}</h1><p>Obras originais de dois pintores da mesma família. Telas únicas, assinadas e com certificado.</p>
      <div class="bt"><a class="btn pri" href="#obras">Ver as obras</a><a class="btn ghost" href="#encomendas">Encomendar uma tela</a></div></div>
    <div class="hft"><a class="hcap" id="hcap" href="#obra-${L[0].id}" aria-live="polite"></a>
      <div class="hctl">${L.map((o,i)=>`<button class="dot" data-slide="${i}" aria-label="Mostrar “${esc(o.titulo)}”"></button>`).join('')}<button class="hp" data-hpausa aria-label="Pausar">${ICO.pause}</button></div></div></section>`;
}
function heroVai(i){
  const L=heroObras(), S=$$('.sl'); if (!S.length) return;
  heroI=(i+L.length)%L.length; const o=L[heroI];
  S.forEach((s,k)=>{ s.classList.toggle('on',k===heroI); s.setAttribute('aria-hidden',k!==heroI); });
  $$('.dot').forEach((d,k)=>d.setAttribute('aria-current',k===heroI));
  const c=$('#hcap'); c.href='#obra-'+o.id; c.innerHTML=`<b>${esc(o.titulo)}</b> · ${esc(artista(o.artista).nome)}, ${o.ano} <span>Ver a obra →</span>`;
}
function heroLiga(){
  heroI=0; heroVai(0); clearInterval(heroT);
  heroPausa=heroPausa||matchMedia('(prefers-reduced-motion: reduce)').matches;
  heroBotao(); if (!heroPausa) heroT=setInterval(()=>{ if (!document.hidden) heroVai(heroI+1); },7000);
}
function heroBotao(){ const b=$('[data-hpausa]'); if (b){ b.innerHTML=heroPausa?ICO.play:ICO.pause; b.setAttribute('aria-label',heroPausa?'Continuar a passagem das obras':'Pausar a passagem das obras'); } $('.hero')?.classList.toggle('parado',heroPausa); }

/* =====================================================================
   PÁGINAS · cada uma devolve {t: título, d: descrição, nav, html, hero}
   ===================================================================== */
function vInicio(){
  const rec=GAL.obras.filter(o=>o.status==='disponivel').sort((a,b)=>b.ano-a.ano).slice(0,8);
  const ag=GAL.agenda.filter(e=>e.tipo==='exposicao'&&e.fim>=HOJE).sort((a,b)=>a.inicio.localeCompare(b.inicio))[0];
  const nt=GAL.agenda.filter(e=>e.tipo==='noticia').sort((a,b)=>b.data.localeCompare(a.data))[0];
  const P=GAL.pagamento, demo=obra('o15')||rec[0];
  return {t:'', d:GAL.descricao, nav:'inicio', hero:vHero(), html:`
  <section class="selos" aria-label="Garantias"><div><b>Obras originais</b><span>Assinadas pelos artistas</span></div><div><b>Certificado</b><span>de autenticidade em cada tela</span></div><div><b>Até ${P.parcelas}× sem juros</b><span>ou ${P.pix}% de desconto no Pix</span></div><div><b>Envio com seguro</b><span>para todo o Brasil</span></div></section>
  <section class="intro"><p class="eye">A galeria</p><p class="lead big">Uma família, dois pintores e o mesmo amor pela cor. Aqui você conhece as telas, vê como ficam na sua parede e fala direto com quem pintou.</p>${exemplo('Texto de exemplo: a história real entra aqui')}</section>
  <section><div class="sh"><h2>Obras disponíveis</h2><a href="#obras">Ver todas as ${GAL.obras.length} →</a></div>${grade(rec)}</section>
  <section><div class="sh"><h2>Séries</h2><a href="#series">Todas as séries →</a></div><div class="srow">${GAL.series.map(serieCard).join('')}</div></section>
  <section class="vp"><div class="vpi">${sala([demo],'sala','areia')}</div><div><p class="eye">Ver na parede</p><h2>Veja o tamanho real antes de comprar</h2><p>Em cada obra, toque em <b>Ver na parede</b>: a tela aparece numa sala desenhada em escala, ao lado de um sofá, de um aparador ou de uma cama. Dá para trocar a cor da parede e comparar várias obras juntas.</p><a class="btn" href="#obra-${demo.id}">Experimentar com “${esc(demo.titulo)}”</a></div></section>
  <section><div class="sh"><h2>Os artistas</h2><a href="#artistas">Conhecer →</a></div><div class="arts">${GAL.artistas.map(artCard).join('')}</div></section>
  ${ag||nt? `<section><div class="sh"><h2>Exposições e notícias</h2><a href="#agenda">Agenda completa →</a></div><div class="agl">${ag? agCard(ag,true) : ''}${nt? agCard(nt,true) : ''}</div></section>` : ''}
  <section><h2>Escolha pela cor</h2><div class="cores grandes">${Object.entries(COR).map(([k,[n,c]])=>`<a class="cchip" href="#obras?cor=${k}" style="--c:${c}"><i></i>${n}</a>`).join('')}</div></section>
  <section class="band"><div><p class="eye">Sob encomenda</p><h2>Uma tela feita para a sua parede</h2><p>Escolha o tamanho, as cores e o tema. Os artistas pintam sob encomenda, com esboço antes e fotos do processo.</p></div><a class="btn pri" href="#encomendas">Como encomendar</a></section>`};
}

const F0={artista:'',serie:'',tecnica:'',tamanho:'',preco:'',formato:'',status:'',cor:'',ordem:'recentes'};
let F={...F0}, fAberto=false;
function filtra(){
  return GAL.obras.filter(o=>(!F.artista||o.artista===F.artista)&&(!F.serie||o.serie===F.serie)&&(!F.tecnica||o.tecnica===F.tecnica)&&(!F.tamanho||tamCat(o)===F.tamanho)
    &&(!F.preco||faixa(o)===F.preco)&&(!F.formato||formato(o)===F.formato)&&(!F.status||o.status===F.status)&&(!F.cor||(o.cores||[]).includes(F.cor)))
    .sort(F.ordem==='menor'? (a,b)=>(a.preco||1e9)-(b.preco||1e9) : F.ordem==='maior'? (a,b)=>(b.preco||0)-(a.preco||0) : F.ordem==='tamanho'? (a,b)=>b.medidas[0]*b.medidas[1]-a.medidas[0]*a.medidas[1] : (a,b)=>b.ano-a.ano);
}
const nFiltros=()=>Object.keys(F0).filter(k=>k!=='ordem'&&F[k]).length;
function vObras(q){
  F={...F0}; new URLSearchParams(q||'').forEach((v,k)=>{ if (k in F) F[k]=v; });
  const L=filtra(), n=nFiltros(), tec=[...new Set(GAL.obras.map(o=>o.tecnica))];
  const sel=(k,rot,todos,opts)=>`<label class="fs"><span>${rot}</span><select data-f="${k}"><option value="">${todos}</option>${opts.map(([v,l])=>`<option value="${esc(v)}" ${F[k]===v?'selected':''}>${esc(l)}</option>`).join('')}</select></label>`;
  return {t:'Obras', d:`${GAL.obras.length} pinturas originais de ${GAL.artistas.map(a=>a.nome).join(' e ')}. Filtre por tamanho, preço, cor, formato e série.`, nav:'obras', html:`
  ${head('Acervo','Obras',`Pinturas originais, uma de cada. Use os filtros para achar a tela certa para a sua parede.`)}
  <div class="fbar">
    <button class="btn sm fbtn" data-fabre aria-expanded="${fAberto}" aria-controls="fpanel">Filtros${n? ` (${n})` : ''}</button>
    <div class="fpanel${fAberto?' aberto':''}" id="fpanel">
      ${sel('artista','Artista','Todos',GAL.artistas.map(a=>[a.id,a.nome]))}
      ${sel('serie','Série','Todas',GAL.series.map(s=>[s.id,s.nome]))}
      ${sel('tamanho','Tamanho','Todos',Object.entries(TAM))}
      ${sel('preco','Preço','Todos',Object.entries(FAIXA))}
      ${sel('formato','Formato','Todos',Object.entries(FORMATO))}
      ${sel('tecnica','Técnica','Todas',tec.map(t=>[t,t]))}
      ${sel('status','Situação','Todas',Object.entries(ST))}
      <div class="fs fcor" role="group" aria-label="Cor predominante"><span>Cor</span><div class="cores">${Object.entries(COR).map(([k,[nm,c]])=>`<button class="cchip${F.cor===k?' on':''}" data-cor-f="${k}" aria-pressed="${F.cor===k}" style="--c:${c}" title="${nm}"><i></i><em>${nm}</em></button>`).join('')}</div></div>
    </div>
  </div>
  <div class="fres"><p aria-live="polite"><b>${L.length}</b> ${L.length===1?'obra':'obras'}${n? ` · <button class="lnk" data-limpa>Limpar filtros</button>` : ''}</p>${sel('ordem','Ordenar','Mais recentes',[['menor','Menor preço'],['maior','Maior preço'],['tamanho','Maiores primeiro']]).replace('<option value="">Mais recentes</option>',`<option value="recentes" ${F.ordem==='recentes'?'selected':''}>Mais recentes</option>`)}</div>
  ${L.length? grade(L) : `<div class="vazio"><p>Nenhuma obra com esses filtros.</p><button class="btn" data-limpa>Limpar filtros</button></div>`}`};
}
function hashFiltros(){ const p=new URLSearchParams(); Object.keys(F0).forEach(k=>{ if (F[k]&&F[k]!==F0[k]) p.set(k,F[k]); }); const s=p.toString(); history.replaceState(null,'','#obras'+(s?'?'+s:'')); }

function vObra(id){
  const o=obra(id); if (!o) return v404();
  const a=artista(o.artista), s=serie(o.serie), dispo=o.status!=='vendida';
  const mais=GAL.obras.filter(x=>x.id!==o.id&&(x.serie===o.serie)).slice(0,4), outras=GAL.obras.filter(x=>x.id!==o.id&&x.artista===o.artista&&x.serie!==o.serie).slice(0,4);
  const msg=dispo? `Olá! Tenho interesse na obra “${o.titulo}” (${a.nome}, ${med(o)}).\n${linkObra(o)}` : `Olá! Vi a obra “${o.titulo}” no site. Ela foi vendida, mas gostaria de algo parecido.\n${linkObra(o)}`;
  return {t:`${o.titulo}, de ${a.nome}`, d:`${o.titulo} (${o.ano}), ${o.tecnica.toLowerCase()}, ${med(o)}. ${o.desc}`, nav:'obras', html:`
  <nav class="trilha" aria-label="Caminho"><a href="#obras">Obras</a>${s? ` <span>/</span> <a href="#serie-${s.id}">${esc(s.nome)}</a>` : ''}</nav>
  <div class="obra">
    <div class="ov">
      <button class="zoom" data-amplia="${o.id}" aria-label="Ampliar a obra" style="aspect-ratio:${o.medidas[1]}/${o.medidas[0]}">${art(o,900)}</button>
      <div class="oacts"><button class="mini" data-parede="${o.id}"><span class="mr">${sala([o],'sala','branca',true)}</span><span><b>${ICO.wall} Ver na parede</b><small>Em escala real, numa sala</small></span></button><button class="ib" data-amplia="${o.id}">${ICO.zoom}<span>Ampliar</span></button></div>
    </div>
    <div class="info"><p class="eye"><a href="#artista-${a.id}">${esc(a.nome)}</a></p><h1 tabindex="-1">${esc(o.titulo)}</h1>${s? `<p class="ser">Da série <a href="#serie-${s.id}">${esc(s.nome)}</a></p>` : ''}
      ${precoObra(o)}
      <div class="ctas">${dispo? `<a class="btn pri wa" href="${wpp(msg)}" target="_blank" rel="noopener">${ICO.wa} Tenho interesse</a>` : `<a class="btn pri wa" href="${wpp(msg)}" target="_blank" rel="noopener">${ICO.wa} Quero uma parecida</a>`}
        <button class="btn favb" data-fav="${o.id}" aria-pressed="${isFav(o.id)}">${ICO.heart}<span class="ft">${isFav(o.id)?'Na sua seleção':'Salvar na seleção'}</span></button></div>
      <dl><dt>Situação</dt><dd><span class="pill ${o.status}">${ST[o.status]}</span></dd><dt>Técnica</dt><dd>${esc(o.tecnica)}</dd><dt>Medidas</dt><dd>${med(o)} <small>(altura × largura)</small></dd><dt>Formato</dt><dd>${FORMATO[formato(o)]}</dd><dt>Ano</dt><dd>${o.ano}</dd></dl>
      <p class="desc">${esc(o.desc)}</p>
      <div class="share"><span>Compartilhar</span><a class="ib" href="https://wa.me/?text=${encodeURIComponent(`Olha esta obra: “${o.titulo}”, de ${a.nome}\n${linkObra(o)}`)}" target="_blank" rel="noopener">${ICO.wa}<span>WhatsApp</span></a><button class="ib" data-copia="${linkObra(o)}">${ICO.share}<span>Copiar link</span></button></div>
      <ul class="ok"><li>Obra original e assinada</li><li><a href="#duvidas-certificado">Certificado de autenticidade</a></li><li><a href="#duvidas-frete">Embalagem protegida e envio com seguro</a> para todo o Brasil</li><li><a href="#duvidas-trocas">7 dias para desistir</a> da compra</li></ul>
    </div>
  </div>
  ${mais.length? `<section><div class="sh"><h2>Mais da série “${esc(s.nome)}”</h2><a href="#serie-${s.id}">Ver a série →</a></div>${grade(mais)}</section>` : ''}
  ${outras.length? `<section><div class="sh"><h2>Outras obras de ${esc(a.nome)}</h2><a href="#artista-${a.id}">Ver todas →</a></div>${grade(outras)}</section>` : ''}`};
}

function vSeries(){
  return {t:'Séries', d:'As séries de pinturas da galeria: '+GAL.series.map(s=>s.nome).join(', ')+'.', nav:'series', html:`
  ${head('Coleções','Séries','Cada artista trabalha em séries: conjuntos de telas sobre um mesmo tema, pintadas ao longo de meses ou anos.')}
  <div class="slist">${GAL.series.map(s=>{ const L=GAL.obras.filter(o=>o.serie===s.id), c=obra(s.capa)||L[0];
    return `<a class="srow1" href="#serie-${s.id}">${stage(c)}<div><small>${esc(artista(s.artista).nome)} · ${s.anos} · ${L.length} ${L.length===1?'obra':'obras'}</small><h2>${esc(s.nome)}</h2><p>${esc(s.texto)}</p><div class="thumbs">${L.slice(0,5).map(o=>`<span style="aspect-ratio:${o.medidas[1]}/${o.medidas[0]}">${art(o,160)}</span>`).join('')}</div><em>Ver a série →</em></div></a>`; }).join('')}</div>
  ${exemplo('Séries e textos de exemplo')}`};
}
function vSerie(id){
  const s=serie(id); if (!s) return v404(); const a=artista(s.artista), L=GAL.obras.filter(o=>o.serie===id);
  const disp=L.filter(o=>o.status!=='vendida');
  return {t:`Série ${s.nome}`, d:`${s.nome} (${s.anos}), série de ${a.nome}. ${s.texto}`, nav:'series', html:`
  <nav class="trilha" aria-label="Caminho"><a href="#series">Séries</a></nav>
  ${head(`<a href="#artista-${a.id}">${esc(a.nome)}</a> · ${s.anos}`,esc(s.nome),esc(s.texto))}
  <p class="muted">${L.length} ${L.length===1?'obra':'obras'} · ${disp.length} ${disp.length===1?'disponível':'disponíveis'}${disp.length>1? ` · <button class="lnk" data-parede-serie="${s.id}">Ver as disponíveis juntas na parede</button>` : ''}</p>
  ${grade(L)}
  <section><h2>Outras séries</h2><div class="srow">${GAL.series.filter(x=>x.id!==id).map(serieCard).join('')}</div></section>`};
}

function vArtistas(){
  return {t:'Artistas', d:'Conheça os artistas da galeria: '+GAL.artistas.map(a=>`${a.nome} (${a.cidade})`).join(' e ')+'.', nav:'artistas', html:`
  ${head('Quem pinta','Os artistas','Dois irmãos, duas cidades e dois jeitos de olhar a paisagem.')}<div class="arts">${GAL.artistas.map(artCard).join('')}</div>${exemplo('Nomes, retratos e biografias de exemplo')}`};
}
function vArtista(id){
  const a=artista(id); if (!a) return v404(); const S=GAL.series.filter(s=>s.artista===id), L=GAL.obras.filter(o=>o.artista===id);
  return {t:a.nome, d:`${a.nome}, ${a.cidade}. ${a.bio}`, nav:'artistas', html:`
  <nav class="trilha" aria-label="Caminho"><a href="#artistas">Artistas</a></nav>
  <div class="abio"><span class="rt">${retrato(a,500)}</span><div><p class="eye">${esc(a.cidade)} · pinta desde ${a.desde}</p><h1 tabindex="-1">${esc(a.nome)}</h1>${a.citacao? `<blockquote>“${esc(a.citacao)}”</blockquote>` : ''}<p>${esc(a.bio)}</p>
    <h3>Técnica</h3><p>${esc(a.tecnica)}</p><h3>Exposições</h3><ul class="expo">${a.expos.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>${exemplo('Retrato e biografia de exemplo')}</div></div>
  ${S.length? `<section><h2>Séries</h2><div class="srow">${S.map(serieCard).join('')}</div></section>` : ''}
  <section><h2>Todas as obras (${L.length})</h2>${grade(L)}</section>`};
}

function vAtelie(){
  const A=GAL.atelie, img=(x,w,h)=>x.foto? `<img src="${esc(x.foto)}" alt="${esc(x.legenda||x.titulo)}" loading="lazy">` : quadro(x.arte[0],x.arte[1],hashStr(x.legenda||x.titulo)%97,{w,h,frame:false}).replace(/aria-label="[^"]*"/,`aria-label="Imagem de exemplo: ${esc(x.legenda||x.titulo)}"`);
  return {t:'O ateliê e o processo', d:'Conheça o ateliê e o processo de pintura: do esboço ao certificado de autenticidade. '+A.texto, nav:'atelie', html:`
  ${head('Bastidores','O ateliê',esc(A.texto))}
  <div class="fotos">${A.imagens.map((x,i)=>`<figure class="f${i}">${img(x,i?600:1000,i?450:700)}<figcaption>${esc(x.legenda)}</figcaption></figure>`).join('')}</div>${exemplo('Imagens de exemplo: entram aqui as fotos do ateliê')}
  <section><h2>Como nasce uma tela</h2><p class="muted mw">Do primeiro rabisco à obra embalada, uma tela média leva de duas a seis semanas.</p>
    <ol class="proc">${A.processo.map((p,i)=>`<li><span class="pi">${img(p,480,360)}</span><div><span class="n">${String(i+1).padStart(2,'0')}</span><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></div></li>`).join('')}</ol></section>
  <section class="mats"><div><h2>Materiais</h2><ul class="ok">${A.materiais.map(m=>`<li>${esc(m)}</li>`).join('')}</ul></div>
    <div class="band slim"><div><h2>Visite o ateliê</h2><p>${esc(GAL.contato.horario)}.<br>${esc(GAL.contato.endereco)}</p></div><a class="btn pri wa" href="${wpp('Olá! Gostaria de agendar uma visita ao ateliê.')}" target="_blank" rel="noopener">${ICO.wa} Agendar visita</a></div></section>`};
}

function vAgenda(){
  const ex=GAL.agenda.filter(e=>e.tipo==='exposicao'), atuais=ex.filter(e=>e.fim>=HOJE).sort((a,b)=>a.inicio.localeCompare(b.inicio)), antigas=ex.filter(e=>e.fim<HOJE).sort((a,b)=>b.fim.localeCompare(a.fim));
  const nt=GAL.agenda.filter(e=>e.tipo==='noticia').sort((a,b)=>b.data.localeCompare(a.data));
  return {t:'Exposições e notícias', d:'Exposições em cartaz, próximas mostras e notícias dos artistas.', nav:'agenda', html:`
  ${head('Agenda','Exposições e notícias','Onde ver as obras ao vivo e as novidades do ateliê.')}
  ${atuais.length? `<section><h2>Em cartaz e em breve</h2><div class="agl">${atuais.map(e=>agCard(e,true)).join('')}</div></section>` : ''}
  ${nt.length? `<section><h2>Notícias</h2><div class="agl">${nt.map(e=>agCard(e,true)).join('')}</div></section>` : ''}
  ${antigas.length? `<section><h2>Exposições anteriores</h2><div class="agl">${antigas.map(e=>agCard(e)).join('')}</div></section>` : ''}
  ${exemplo('Exposições e notícias de exemplo')}`};
}
function vItem(id){
  const e=GAL.agenda.find(x=>x.id===id); if (!e) return v404(); const c=obra(e.capa), L=(e.obras||[]).map(obra).filter(Boolean), s=situacao(e), expo=e.tipo==='exposicao';
  return {t:e.titulo, d:`${periodo(e)}${e.local? ', '+e.local : ''}. ${e.texto}`, nav:'agenda', html:`
  <nav class="trilha" aria-label="Caminho"><a href="#agenda">Exposições e notícias</a></nav>
  <div class="item">${c? `<span class="ic" style="aspect-ratio:${c.medidas[1]}/${c.medidas[0]}">${art(c,800)}</span>` : ''}<div><p class="eye">${s}</p><h1 tabindex="-1">${esc(e.titulo)}</h1>
    <dl>${expo? `<dt>Quando</dt><dd>${periodo(e)}</dd><dt>Onde</dt><dd>${esc(e.local)}</dd>` : `<dt>Publicado em</dt><dd>${periodo(e)}</dd>`}</dl><p class="lead">${esc(e.texto)}</p>
    ${expo&&s!=='Encerrada'? `<div class="ctas"><a class="btn" href="${linkAgenda(e)}" target="_blank" rel="noopener">Salvar na agenda</a><a class="btn ghost2" href="https://www.google.com/maps/search/${encodeURIComponent(e.local)}" target="_blank" rel="noopener">Como chegar</a></div>` : ''}${exemplo()}</div></div>
  ${L.length? `<section><h2>${expo?'Obras na exposição':'Obras citadas'}</h2>${grade(L)}</section>` : ''}`};
}

function vEnc(){
  const E=GAL.encomenda, P=GAL.pagamento;
  return {t:'Encomendas', d:`Encomende uma pintura original sob medida: tamanho, cores e tema à sua escolha. Prazo de ${E.prazo}.`, nav:'encomendas', html:`
  ${head('Sob medida','Encomendas','Uma tela pensada para o seu espaço: você escolhe o tamanho, as cores e o tema, e acompanha a pintura do esboço à entrega.')}
  <div class="steps">${[['Conte a sua ideia','Tema, cores, tamanho e onde a tela vai ficar. Fotos do ambiente ajudam.'],['Receba um esboço','O artista envia um rascunho e o orçamento. Ajustes são bem-vindos.'],['Acompanhe a pintura','Fotos do processo durante a produção.'],['Receba em casa','Com certificado, embalagem protegida e seguro.']].map(([t,d],k)=>`<div><span>${k+1}</span><b>${t}</b><p>${d}</p></div>`).join('')}</div>
  <div class="encg">
    <form class="encf" id="encf"><h2>Monte o seu pedido</h2>
      <label>Artista<select name="artista"><option value="">Tanto faz</option>${GAL.artistas.map(a=>`<option>${esc(a.nome)}</option>`).join('')}</select></label>
      <div class="dup"><label>Tamanho (altura × largura)<select name="tam">${E.tamanhos.map(([a,l])=>`<option value="${a}x${l}">${a} × ${l} cm</option>`).join('')}<option value="outro">Outro tamanho</option></select></label>
      <label>Formato<select name="fmt"><option value="h">Horizontal</option><option value="v">Vertical</option></select></label></div>
      <label>Tema e cores<textarea name="tema" rows="3" placeholder="Ex.: o mar em tons de verde, para combinar com um sofá cinza"></textarea></label>
      <label>Onde a tela vai ficar<input name="lugar" placeholder="Ex.: sala, acima do sofá de 2 m"></label>
      <label>Seu nome<input name="nome" autocomplete="name"></label>
      <div class="ctas"><button class="btn pri wa" type="submit">${ICO.wa} Enviar pelo WhatsApp</button><button class="btn" type="button" data-enc-parede>${ICO.wall} Ver o tamanho na parede</button></div>
    </form>
    <aside class="tab"><h2>Valores de referência</h2><table><thead><tr><th>Tamanho</th><th>A partir de</th></tr></thead><tbody>${E.tamanhos.map(([a,l,v])=>`<tr><td>${a} × ${l} cm</td><td>${brl(v)}</td></tr>`).join('')}</tbody></table>
      <p class="muted">Prazo de ${E.prazo}. Pagamento: 50% na aprovação do esboço e 50% na entrega, ou até ${P.parcelas}× sem juros no cartão.</p>${exemplo('Valores de exemplo')}<a href="#duvidas-encomendas">Dúvidas sobre encomendas →</a></aside>
  </div>`};
}
function encDados(){ const f=$('#encf'), g=n=>f.elements[n].value.trim(); let [a,l]=g('tam')==='outro'? [60,80] : g('tam').split('x').map(Number); if ((g('fmt')==='v')!==(a>l)) [a,l]=[l,a]; return {g,a,l}; }

function vDuvidas(grupo){
  return {t:'Perguntas frequentes e políticas', d:'Frete, pagamento e parcelamento, certificado de autenticidade, trocas e devoluções e prazo de encomendas.', nav:'duvidas', grupo, html:`
  ${head('Atendimento','Perguntas frequentes','Frete, pagamento, certificado, trocas e encomendas. Se a sua dúvida não estiver aqui, é só chamar no WhatsApp.')}
  <nav class="gnav" aria-label="Assuntos">${GAL.faq.map(g=>`<a href="#duvidas-${g.id}">${esc(g.grupo)}</a>`).join('')}</nav>
  ${GAL.faq.map(g=>`<section class="faq" id="g-${g.id}"><h2>${esc(g.grupo)}</h2>${g.itens.map(([p,r])=>`<details${grupo===g.id?' open':''}><summary>${esc(fmt(p))}</summary><p>${esc(fmt(r))}</p></details>`).join('')}</section>`).join('')}
  ${exemplo('Políticas de exemplo: revisar com a contabilidade antes de publicar')}
  <section class="band"><div><h2>Ainda com dúvida?</h2><p>Respondemos pelo WhatsApp e por e-mail, em geral no mesmo dia.</p></div><a class="btn pri wa" href="${wpp('Olá! Tenho uma dúvida sobre a galeria.')}" target="_blank" rel="noopener">${ICO.wa} Falar no WhatsApp</a></section>`};
}

function vSobre(){
  const C=GAL.contato;
  return {t:'Sobre e contato', d:`Sobre a galeria e contato: WhatsApp, e-mail e endereço do ateliê. ${GAL.descricao}`, nav:'sobre', html:`
  ${head('A galeria','Sobre','Uma família, dois pintores e o mesmo amor pela cor.')}
  <div class="sobre"><div><p>A galeria reúne as telas de dois irmãos que pintam desde jovens: uma em Curitiba, com óleo e interiores cheios de luz; o outro em Florianópolis, com acrílica, mar e serra. O site nasceu para mostrar o trabalho dos dois num só lugar e facilitar a conversa com quem quer levar uma obra para casa.</p>
    <p>Todas as obras são originais e únicas, assinadas e acompanhadas de certificado. Também pintamos sob encomenda.</p>${exemplo('Texto de exemplo: a história real entra aqui')}</div>
    <div class="cbox"><h2>Contato</h2><ul class="ct"><li><span>WhatsApp</span><a href="${wpp('Olá!')}" target="_blank" rel="noopener">+${C.whatsapp}</a></li><li><span>E-mail</span><a href="mailto:${C.email}">${C.email}</a></li><li><span>Instagram</span><a href="https://instagram.com/${C.instagram.replace('@','')}" target="_blank" rel="noopener">${esc(C.instagram)}</a></li><li><span>Ateliê</span>${esc(C.endereco)}</li><li><span>Visitas</span>${esc(C.horario)}</li></ul>${exemplo('Contatos de exemplo')}</div></div>
  <section><h2>Os artistas</h2><div class="arts">${GAL.artistas.map(artCard).join('')}</div></section>`};
}

function vSelecao(ids){
  const comp=!!ids, L=(comp? ids.split(',') : favs).map(obra).filter(Boolean), disp=L.filter(o=>o.status!=='vendida'), tot=disp.reduce((s,o)=>s+(o.preco||0),0);
  const msg=`Olá! Tenho interesse ${L.length>1?'nestas obras':'nesta obra'}:\n\n`+L.map((o,i)=>`${i+1}. “${o.titulo}” (${artista(o.artista).nome}), ${med(o)}, ${o.status==='vendida'?'vendida':o.preco?brl(o.preco):'sob consulta'}\n${linkObra(o)}`).join('\n\n')+'\n\nPodemos conversar?';
  const lk=GAL.site+'#selecao='+L.map(o=>o.id).join(',');
  return {t:comp?'Seleção compartilhada':'Minha seleção', d:'Monte a sua seleção de obras e envie o interesse de uma vez.', nav:'selecao', html:`
  ${head('Favoritos',comp?'Seleção compartilhada':'Minha seleção',comp?'Alguém separou estas obras para você.':'As obras que você salvou ficam aqui, neste aparelho. Mande o interesse em todas de uma vez ou veja como ficam juntas na parede.')}
  ${L.length? `<ul class="sel">${L.map(o=>`<li><a href="#obra-${o.id}" class="sth" style="aspect-ratio:${o.medidas[1]}/${o.medidas[0]}">${art(o,200)}</a><div><a href="#obra-${o.id}"><b>${esc(o.titulo)}</b></a><small>${esc(artista(o.artista).nome)} · ${med(o)} · ${ST[o.status]}</small></div><span class="pr">${o.status==='vendida'?'Vendida':o.preco?brl(o.preco):'Sob consulta'}</span>${comp? '' : `<button class="lnk" data-fav="${o.id}" aria-label="Retirar “${esc(o.titulo)}” da seleção">Retirar</button>`}</li>`).join('')}</ul>
    ${tot? `<p class="tot">Total das obras disponíveis com preço: <b>${brl(tot)}</b>${parcela(tot)? ` <span>ou ${parcela(tot)}</span>` : ''}</p>` : ''}
    <div class="ctas"><a class="btn pri wa" href="${wpp(msg)}" target="_blank" rel="noopener">${ICO.wa} Tenho interesse ${L.length>1?`nas ${L.length} obras`:'nesta obra'}</a>
      <button class="btn" data-parede-lista="${L.map(o=>o.id).join(',')}">${ICO.wall} Ver juntas na parede</button>
      ${comp? `<button class="btn" data-junta="${L.map(o=>o.id).join(',')}">${ICO.heart} Salvar na minha seleção</button>` : `<button class="btn" data-copia="${lk}" data-msg="Link da seleção copiado">${ICO.share} Compartilhar seleção</button>`}
      <a class="btn ghost2" href="mailto:${GAL.contato.email}?subject=${encodeURIComponent('Interesse em obras')}&body=${encodeURIComponent(msg)}">Enviar por e-mail</a></div>`
  : `<div class="vazio"><p>${ICO.heart}</p><p>Sua seleção está vazia. Toque no coração das obras para guardar as que você gostou.</p><a class="btn pri" href="#obras">Ver as obras</a></div>`}`};
}
const v404=()=>({t:'Página não encontrada', d:GAL.descricao, nav:'', html:`${head('','Página não encontrada','O endereço pode ter mudado. Que tal ver as obras?')}<a class="btn pri" href="#obras">Ver as obras</a>`});

/* =====================================================================
   NAVEGAÇÃO
   ===================================================================== */
const PAG={inicio:vInicio,obras:vObras,series:vSeries,artistas:vArtistas,atelie:vAtelie,agenda:vAgenda,encomendas:vEnc,duvidas:vDuvidas,sobre:vSobre,selecao:vSelecao};
const DET={obra:vObra,serie:vSerie,artista:vArtista,agenda:vItem,duvidas:vDuvidas,selecao:vSelecao};
function rota(){ let h=location.hash.slice(1); try{ h=decodeURIComponent(h); }catch(e){} return h||document.body.dataset.rota||'inicio'; }
function render(manter){
  clearInterval(heroT); fecha(); document.body.classList.remove('menu-aberto'); $('[data-menu]')?.setAttribute('aria-expanded',false);
  const [r,q]=rota().split('?'), m=r.match(/^(obra|serie|artista|agenda|duvidas|selecao)[-=](.+)$/);
  const p=m? DET[m[1]](m[2]) : PAG[r]? PAG[r](q) : v404();
  $('#hero').innerHTML=p.hero||''; $('#main').innerHTML=p.html; $('#main').classList.toggle('home',!!p.hero);
  document.title=p.t? `${p.t} · ${GAL.nome}` : `${GAL.nome} · ${GAL.lema}`;
  $('meta[name=description]').setAttribute('content',p.d);
  $$('[data-nav]').forEach(a=>a.toggleAttribute('aria-current',a.dataset.nav===p.nav));
  if (a11yFoco&&!manter){ const h=$('#main h1')||$('#hero h1'); h?.focus({preventScroll:true}); }
  if (p.hero) heroLiga();
  if (p.grupo) setTimeout(()=>$('#g-'+p.grupo)?.scrollIntoView({block:'start'}),0);
  if (p.nav==='duvidas') faqLD();
  contaFavs();
}
let a11yFoco=false;
function faqLD(){ /* dados estruturados para o Google (perguntas frequentes) */
  if ($('#faq-ld')) return; const s=document.createElement('script'); s.type='application/ld+json'; s.id='faq-ld';
  s.textContent=JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:GAL.faq.flatMap(g=>g.itens.map(([p,r])=>({'@type':'Question',name:fmt(p),acceptedAnswer:{'@type':'Answer',text:fmt(r)}})))});
  document.head.appendChild(s);
}
function moldura(){ /* cabeçalho, menu e rodapé, a partir dos dados */
  const C=GAL.contato, L=[['obras','Obras'],['series','Séries'],['artistas','Artistas'],['atelie','Ateliê'],['agenda','Exposições'],['encomendas','Encomendas'],['sobre','Sobre']];
  $('#nm').textContent=GAL.nome;
  $('#nav').innerHTML=L.map(([k,n])=>`<a href="#${k}" data-nav="${k}">${n}</a>`).join('')+`<a href="#duvidas" data-nav="duvidas" class="so-menu">Perguntas frequentes</a>`;
  $('#foot').innerHTML=`<div class="fcols"><div><b class="fbrand">${esc(GAL.nome)}</b><p>${esc(GAL.lema)}.</p><p><a href="https://instagram.com/${C.instagram.replace('@','')}" target="_blank" rel="noopener">Instagram ${esc(C.instagram)}</a></p></div>
    <nav aria-label="Galeria"><b>Galeria</b><a href="#obras">Obras</a><a href="#series">Séries</a><a href="#artistas">Artistas</a><a href="#atelie">Ateliê e processo</a><a href="#agenda">Exposições e notícias</a><a href="#selecao">Minha seleção</a></nav>
    <nav aria-label="Atendimento"><b>Atendimento</b><a href="#encomendas">Encomendas</a><a href="#duvidas">Perguntas frequentes</a><a href="#duvidas-pagamento">Pagamento e parcelamento</a><a href="#duvidas-frete">Frete e entrega</a><a href="#duvidas-certificado">Certificado</a><a href="#duvidas-trocas">Trocas e devoluções</a></nav>
    <div><b>Contato</b><a href="${wpp('Olá!')}" target="_blank" rel="noopener">WhatsApp</a><a href="mailto:${C.email}">${C.email}</a><span>${esc(C.endereco)}</span><span>${esc(C.horario)}</span></div></div>
    <div class="fbot"><span>© Todos os direitos reservados · Site por Gabriel Kubica</span><span>Versão de demonstração: obras, nomes, preços e textos de exemplo</span></div>`;
  $('#wa').href=wpp('Olá! Vim pelo site da galeria.');
}

/* ---------- eventos ---------- */
document.addEventListener('change',e=>{
  const k=e.target.dataset.f; if (!k) return; F[k]=e.target.value; hashFiltros(); render(true); $(`[data-f="${k}"]`)?.focus();
});
document.addEventListener('click',e=>{
  const t=e.target.closest('button,a'); if (!t) return; const d=t.dataset;
  if (d.fav){ e.preventDefault(); toggleFav(d.fav); }
  else if (d.amplia) amplia(obra(d.amplia));
  else if (d.parede) parede([obra(d.parede)]);
  else if (d.paredeSerie) parede(GAL.obras.filter(o=>o.serie===d.paredeSerie&&o.status!=='vendida'),'Série '+serie(d.paredeSerie).nome);
  else if (d.paredeLista) parede(d.paredeLista.split(',').map(obra),'Sua seleção');
  else if (d.copia){ if (navigator.share&&matchMedia('(pointer:coarse)').matches) navigator.share({title:document.title,url:d.copia}).catch(()=>{}); else copia(d.copia,d.msg); }
  else if (d.junta){ d.junta.split(',').forEach(id=>{ if (!isFav(id)) favs.push(id); }); salvaFavs(); location.hash='#selecao'; }
  else if (d.slide){ heroPausa=true; clearInterval(heroT); heroBotao(); heroVai(+d.slide); }
  else if ('hpausa' in d){ heroPausa=!heroPausa; heroLiga(); heroVai(heroI); }
  else if ('fabre' in d){ fAberto=!fAberto; t.setAttribute('aria-expanded',fAberto); $('#fpanel').classList.toggle('aberto',fAberto); }
  else if (d.corF){ F.cor=F.cor===d.corF?'':d.corF; hashFiltros(); render(true); $(`[data-cor-f="${d.corF}"]`)?.focus(); }
  else if ('limpa' in d){ F={...F0}; hashFiltros(); render(true); }
  else if ('encParede' in d){ const {a,l}=encDados(); parede([{id:'enc',titulo:'Sua tela',medidas:[a,l]}],`Tela de ${a} × ${l} cm`); }
  else if ('menu' in d){ const ab=document.body.classList.toggle('menu-aberto'); t.setAttribute('aria-expanded',ab); }
  else if ('skip' in d){ e.preventDefault(); const h=$('#main h1')||$('#hero h1')||$('#main'); h.setAttribute('tabindex','-1'); h.focus(); }
  if (t.tagName==='A'&&document.body.classList.contains('menu-aberto')){ document.body.classList.remove('menu-aberto'); $('[data-menu]').setAttribute('aria-expanded',false); }
});
document.addEventListener('submit',e=>{
  if (e.target.id!=='encf') return; e.preventDefault(); const {g,a,l}=encDados();
  const txt=`Olá! Gostaria de encomendar uma tela.\n\nArtista: ${g('artista')||'tanto faz'}\nTamanho: ${g('tam')==='outro'?'outro (a combinar)':`${a} × ${l} cm`}\nTema e cores: ${g('tema')||'a combinar'}\nOnde vai ficar: ${g('lugar')||'-'}${g('nome')?`\n\nMeu nome: ${g('nome')}`:''}`;
  open(wpp(txt),'_blank','noopener');
});
document.addEventListener('keydown',e=>{ if (e.key==='Escape'){ if ($('.lb')) $('.lb').click(); else fecha(); document.body.classList.remove('menu-aberto'); } });
addEventListener('hashchange',()=>{ a11yFoco=true; const r=rota(); if (!r.startsWith('obras?')&&!r.startsWith('duvidas-')) scrollTo(0,0); render(); });
moldura(); render();
