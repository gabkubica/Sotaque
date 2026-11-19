/* =========================================================
   Sotaque · caderno digital (Kids)
   A professora abre o caderno da criança e escreve junto com ela: caneta, marca-texto,
   borracha, texto, figurinhas, atividades e fotos coladas, páginas pautadas/caligrafia
   e uma capa personalizada. Os pais veem o caderno (só leitura).

   Como o traço fica bom no iPad e no Android:
   - Pointer Events com getCoalescedEvents (todos os pontos da Apple Pencil) e
     getPredictedEvents (menos atraso), canvas "desynchronized" onde existe;
   - o contorno do traço vem do perfect-freehand (pressão real da caneta; no dedo, simulada);
   - quando a caneta aparece, o dedo deixa de escrever: a palma da mão não risca e o dedo
     só move e dá zoom. Sem caneta, o dedo escreve (crianças) e dois dedos movem/dão zoom;
   - o caderno vive fora do #app, então os re-renders do Sotaque não apagam nada.
   Dados: DB.cad[aluno] = {cover, pages:[ids]} · DB.cadp[id] = {sid, bg, strokes, items}.
   Traço: {t:'pen'|'hl', c, w, pr, pts:[x,y,p, x,y,p…]} em unidades da página (1000 × 1414).
   ========================================================= */
const CAD_W=1000, CAD_H=1414;
const CAD_BG={pautada:'Pautada',caligrafia:'Caligrafia',quadriculada:'Quadriculada',pontilhada:'Pontilhada',branca:'Branca'};
const CAD_COLORS=['#221c1e','#d63b3b','#2b6cb0','#1f8a4c','#f0a020','#8e44ad','#e76f9a','#8a5a2b'];
const CAD_SIZES={pen:[3.5,6.5,12],hl:[20,30,44]};
const CAD_PATS={bolinhas:'Bolinhas',listras:'Listras',estrelas:'Estrelas',coracoes:'Corações',xadrez:'Xadrez',confete:'Confete',nuvens:'Nuvens',ondas:'Ondas',arcoiris:'Arco-íris',espaco:'Espaço',oceano:'Fundo do mar',dinos:'Dinossauros',unicornio:'Unicórnio',bichinhos:'Bichinhos',frutas:'Frutas',flores:'Flores',futebol:'Futebol',liso:'Liso'};
const CAD_XPAL={chiclete:{nome:'Chiclete',bg:'#ffd6e8',a:'#d6337a',b:'#ff8fbf',c:'#7a1f4a'},limao:{nome:'Limão',bg:'#ecf8c8',a:'#5c8a12',b:'#b6e04a',c:'#2f4a08'},turquesa:{nome:'Turquesa',bg:'#cdf3ef',a:'#0f8b82',b:'#5fd3c8',c:'#0a4a45'},sol:{nome:'Sol',bg:'#fff1b8',a:'#e08a00',b:'#ffd23f',c:'#7a4a00'},uva:{nome:'Uva',bg:'#e6dcff',a:'#6a3fd1',b:'#a98bf5',c:'#3a1f7a'},noite:{nome:'Noite',bg:'#1f2a4d',a:'#f6c344',b:'#3a4a7d',c:'#ffffff'}};
const cadPalOf=k=>CAD_XPAL[k]||PAL[k]||PAL.menta;
const CAD_LABELS={classico:'Clássica',nuvem:'Nuvem',redondo:'Redonda',faixa:'Faixa',escolar:'Etiqueta escolar',nenhum:'Sem etiqueta'};
const CAD_FONTS={andika:['Andika','Andika, Figtree, sans-serif'],display:['Divertida','"Bricolage Grotesque", Figtree, sans-serif'],simples:['Simples','Figtree, system-ui, sans-serif']};
const CAD_TITLES=['My English Notebook','My English Book','English is fun!','Super English','My Book of Words','English with Teacher'];
const CAD_HEROES=['unicorn','t-rex','sauropod','cat','dog','rabbit','panda','fox','penguin','butterfly','rocket','soccer-ball','crown','rainbow','teddy-bear','dragon','castle','woman-fairy','robot','astronaut','dolphin','octopus','strawberry','balloon'];
const cadEmo=(n,x,y,s,rot=0,op=1)=>{ const e=typeof EMOJI!=='undefined'&&EMOJI[n]; return e? `<g transform="rotate(${rot} ${x+s/2} ${y+s/2})" opacity="${op}"><svg x="${x}" y="${y}" width="${s}" height="${s}" viewBox="0 0 ${e[0]} ${e[1]}">${e[2]}</svg></g>` : ''; };
const CD={sid:null,pi:0,cam:{x:0,y:0,z:1},tool:'pen',color:'#221c1e',size:1,penSeen:false,finger:true,sel:null,hist:{},fut:{},ptr:new Map(),act:null,gest:null,ro:false,raf:0,saveT:0,el:null};
const CD_PATH=new WeakMap(), CD_BOX=new WeakMap();

/* ---------- dados ---------- */
function cadOf(sid){ DB.cad ||= {}; DB.cadp ||= {};
  let c=DB.cad[sid]; if (c) return c;
  const s=user(sid), cover=cadNewPage(sid,'capa'), p1=cadNewPage(sid,'caligrafia');
  cover.items.push({id:'i'+uid(),t:'emo',k:'unicorn',x:330,y:260,w:340,h:340,r:-6,hero:true});
  c=DB.cad[sid]={sid,cover:{pal:s?.palette||'menta',pat:'estrelas',title:'My English Notebook',label:'classico',font:'andika',spine:true,name:true,sub:''},pages:[cover.id,p1.id]};
  return c; }
function cadNewPage(sid,bg){ const p={id:'cp'+uid(),sid,bg,strokes:[],items:[]}; (DB.cadp ||= {})[p.id]=p; return p; }
const cadPages=sid=>cadOf(sid).pages.map(id=>DB.cadp[id]).filter(Boolean);
const cadPage=()=>cadPages(CD.sid)[CD.pi];
function cadSave(){ clearTimeout(CD.saveT); cadFlag('Salvando…'); CD.saveT=setTimeout(()=>{ save(); cadFlag('Salvo'); },500); }
function cadFlag(t){ const f=document.getElementById('cd-flag'); if (f) f.textContent=t; }

/* ---------- desfazer / refazer (por página) ---------- */
const cadSnap=p=>({strokes:p.strokes.slice(),items:p.items.map(i=>({...i})),bg:p.bg});
function cadPush(p){ const H=(CD.hist[p.id] ||= []); H.push(cadSnap(p)); if (H.length>80) H.shift(); CD.fut[p.id]=[]; }
function cadUndo(redo){ const p=cadPage(); if (!p) return; const A=(redo? CD.fut : CD.hist)[p.id], B=((redo? CD.hist : CD.fut)[p.id] ||= []);
  if (!A?.length) return; B.push(cadSnap(p)); const s=A.pop(); p.strokes=s.strokes; p.items=s.items; p.bg=s.bg; CD.sel=null; cadSave(); cadPaintAll(); cadBar(); }

/* ---------- traço ---------- */
function cadStrokeOpts(st,last){ return st.t==='hl'? {size:st.w,thinning:0,smoothing:.65,streamline:.55,simulatePressure:false,last,start:{cap:true},end:{cap:true}}
  : {size:st.w,thinning:st.pr? .6 : .5,smoothing:.62,streamline:.42,simulatePressure:!st.pr,last,start:{cap:true,taper:0},end:{cap:true,taper:0}}; }
function cadPts(st){ const a=[]; for (let i=0;i<st.pts.length;i+=3) a.push([st.pts[i],st.pts[i+1],st.pts[i+2]]); return a; }
function cadOutline(st,last=true){ const o=PF.getStroke(cadPts(st),cadStrokeOpts(st,last)); if (!o.length) return '';
  let d=`M${o[0][0].toFixed(1)},${o[0][1].toFixed(1)}Q`; for (let i=0;i<o.length;i++){ const [x0,y0]=o[i], [x1,y1]=o[(i+1)%o.length]; d+=`${x0.toFixed(1)},${y0.toFixed(1)} ${((x0+x1)/2).toFixed(1)},${((y0+y1)/2).toFixed(1)} `; } return d+'Z'; }
function cadPath(st){ let p=CD_PATH.get(st); if (!p){ p=new Path2D(cadOutline(st)); CD_PATH.set(st,p); } return p; }
function cadBox(st){ let b=CD_BOX.get(st); if (!b){ let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9; for (let i=0;i<st.pts.length;i+=3){ const x=st.pts[i], y=st.pts[i+1]; if (x<x0) x0=x; if (x>x1) x1=x; if (y<y0) y0=y; if (y>y1) y1=y; } b=[x0-st.w,y0-st.w,x1+st.w,y1+st.w]; CD_BOX.set(st,b); } return b; }
function cadFill(ctx,st,path){ ctx.globalAlpha= st.t==='hl'? .38 : 1; ctx.fillStyle=st.c; ctx.fill(path); ctx.globalAlpha=1; }

/* ---------- desenho na tela ---------- */
function cadCanvasFit(cv){ const v=CD.el.view, r=v.getBoundingClientRect(), d=Math.min(window.devicePixelRatio||1,3);
  const W=Math.round(r.width*d), H=Math.round(r.height*d); if (cv.width!==W||cv.height!==H){ cv.width=W; cv.height=H; } return d; }
function cadCtx(cv){ const d=cadCanvasFit(cv), z=CD.cam.z*d, ctx=cv.getContext('2d'); ctx.restore(); ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,cv.width,cv.height); ctx.setTransform(z,0,0,z,-CD.cam.x*z,-CD.cam.y*z);
  ctx.save(); ctx.beginPath(); ctx.rect(0,0,CAD_W,CAD_H); ctx.clip(); return ctx; }
function cadPaintInk(){ const p=cadPage(); if (!p||!CD.el) return; const ctx=cadCtx(CD.el.ink);
  const vx0=CD.cam.x, vy0=CD.cam.y, vx1=vx0+CD.el.view.clientWidth/CD.cam.z, vy1=vy0+CD.el.view.clientHeight/CD.cam.z;
  for (const pass of ['hl','pen']) for (const st of p.strokes){ if (st.t!==pass) continue; const b=cadBox(st); if (b[2]<vx0||b[0]>vx1||b[3]<vy0||b[1]>vy1) continue; cadFill(ctx,st,cadPath(st)); } }
function cadPaintLive(extra){ const ctx=cadCtx(CD.el.live), st=CD.act?.st; if (!st) return;
  const s= extra&&extra.length? {...st,pts:st.pts.concat(extra)} : st; cadFill(ctx,s,new Path2D(cadOutline(s,false))); }
function cadWorld(){ const {x,y,z}=CD.cam; CD.el.world.style.transform=`translate(${-x*z}px,${-y*z}px) scale(${z})`; cadUi(); }
function cadPaintAll(){ if (!CD.el) return; cadPageDom(); cadWorld(); cadPaintInk(); cadCtx(CD.el.live); }
function cadRedraw(){ if (CD.raf) return; CD.raf=requestAnimationFrame(()=>{ CD.raf=0; cadWorld(); cadPaintInk(); }); }

/* ---------- câmera (zoom e posição) ---------- */
function cadFit(mode){ const v=CD.el.view, vw=v.clientWidth, vh=v.clientHeight;
  const z= mode==='page'? Math.min(vw/(CAD_W+60),vh/(CAD_H+60)) : Math.min(vw/(CAD_W+40),vh/(CAD_H*0.42));
  CD.cam.z=z; CD.cam.x=(CAD_W-vw/z)/2; CD.cam.y= mode==='page'? (CAD_H-vh/z)/2 : -20/z; cadClamp(); }
function cadClamp(){ const v=CD.el.view, vw=v.clientWidth/CD.cam.z, vh=v.clientHeight/CD.cam.z, m=60/CD.cam.z;
  CD.cam.x= vw>=CAD_W+2*m? (CAD_W-vw)/2 : Math.max(-m,Math.min(CAD_W-vw+m,CD.cam.x));
  CD.cam.y= vh>=CAD_H+2*m? (CAD_H-vh)/2 : Math.max(-m,Math.min(CAD_H-vh+m,CD.cam.y)); }
function cadZoomAt(sx,sy,nz){ const v=CD.el.view, fit=Math.min(v.clientWidth/(CAD_W+60),v.clientHeight/(CAD_H+60));
  nz=Math.max(fit*.8,Math.min(fit*6,nz)); const px=CD.cam.x+sx/CD.cam.z, py=CD.cam.y+sy/CD.cam.z; CD.cam.z=nz; CD.cam.x=px-sx/nz; CD.cam.y=py-sy/nz; cadClamp(); }
const cadLocal=e=>{ const r=CD.el.view.getBoundingClientRect(); return [e.clientX-r.left,e.clientY-r.top]; };
const cadToPage=(sx,sy)=>[CD.cam.x+sx/CD.cam.z, CD.cam.y+sy/CD.cam.z];

/* ---------- fundo da página e capa ---------- */
function cadBgSvg(p){ const W=CAD_W, H=CAD_H; let g='';
  if (p.bg==='capa'){ const c0=cadOf(p.sid).cover, c=p._pat? {...c0,pat:p._pat,label:'nenhum',title:'',name:false,sub:''} : c0, P=cadPalOf(c.pal), pat=c.pat, R=rng(hashStr(p.sid+pat)), dark=c.pal==='noite'||pat==='espaco'; let pt='';
    const scat=(L,n,s0,s1,op=1)=>{ for (let i=0;i<n;i++){ const s=s0+R.r()*(s1-s0); pt+=cadEmo(L[i%L.length],R.r()*(W-s)+10,R.r()*(H-s),s,R.r()*40-20,op); } };
    if (pat==='bolinhas') for (let y=40;y<H;y+=90) for (let x=(y/90%2)*45+30;x<W;x+=90) pt+=`<circle cx="${x}" cy="${y}" r="16" fill="${P.b}" opacity=".55"/>`;
    if (pat==='listras') for (let x=-H;x<W;x+=90) pt+=`<path d="M${x} 0l${H} ${H}" stroke="${P.b}" stroke-width="34" opacity=".45"/>`;
    if (pat==='xadrez') for (let y=0;y<H;y+=100) for (let x=((y/100)%2)*100;x<W;x+=200) pt+=`<rect x="${x}" y="${y}" width="100" height="100" fill="${P.b}" opacity=".4"/>`;
    if (pat==='estrelas'||pat==='espaco') for (let i=0;i<(pat==='espaco'? 90 : 46);i++){ const x=R.r()*W, y=R.r()*H, s=(pat==='espaco'? 5 : 14)+R.r()*(pat==='espaco'? 12 : 22); pt+=`<path d="M${x} ${y-s}L${x+s*.3} ${y-s*.3}L${x+s} ${y}L${x+s*.3} ${y+s*.3}L${x} ${y+s}L${x-s*.3} ${y+s*.3}L${x-s} ${y}L${x-s*.3} ${y-s*.3}Z" fill="${pat==='espaco'? '#fff6c8' : i%3? P.b : P.c}" opacity="${pat==='espaco'? .9 : .6}"/>`; }
    if (pat==='espaco') pt+=cadEmo('ringed-planet',650,90,230,-10)+cadEmo('rocket',110,520,170,30)+cadEmo('crescent-moon',120,120,140)+cadEmo('comet',700,600,140,10);
    if (pat==='coracoes') for (let i=0;i<40;i++){ const x=R.r()*W, y=R.r()*H, s=12+R.r()*16; pt+=`<path d="M${x} ${y+s}C${x-s*2} ${y-s*.2} ${x-s} ${y-s*1.6} ${x} ${y-s*.5}C${x+s} ${y-s*1.6} ${x+s*2} ${y-s*.2} ${x} ${y+s}Z" fill="${i%3? P.b : P.c}" opacity=".55"/>`; }
    if (pat==='confete') for (let i=0;i<120;i++){ const x=R.r()*W, y=R.r()*H, col=['#ff6b6b','#ffd23f','#4dabf7','#69db7c','#b197fc','#ff8fbf'][i%6]; pt+= i%2? `<circle cx="${x}" cy="${y}" r="${5+R.r()*7}" fill="${col}"/>` : `<rect x="${x}" y="${y}" width="${10+R.r()*12}" height="6" rx="3" fill="${col}" transform="rotate(${R.r()*180} ${x} ${y})"/>`; }
    if (pat==='nuvens') for (let i=0;i<14;i++){ const x=R.r()*W, y=R.r()*H, s=40+R.r()*40; pt+=`<g fill="#fff" opacity=".85"><circle cx="${x}" cy="${y}" r="${s}"/><circle cx="${x+s}" cy="${y+s*.2}" r="${s*.8}"/><circle cx="${x-s}" cy="${y+s*.25}" r="${s*.7}"/><rect x="${x-s*1.6}" y="${y+s*.2}" width="${s*3.3}" height="${s*.75}" rx="${s*.37}"/></g>`; }
    if (pat==='ondas'||pat==='oceano') for (let k=0;k<9;k++){ const y=k*170+60; pt+=`<path d="M0 ${y}`+[...Array(8)].map((_,j)=>`q62.5 ${j%2? 40 : -40} 125 0`).join('')+`V${y+90}H0Z" fill="${pat==='oceano'? ['#bfe6ff','#9fd4fb','#7cc2f2'][k%3] : P.b}" opacity="${pat==='oceano'? .9 : .35}"/>`; }
    if (pat==='oceano') scat(['tropical-fish','spouting-whale','octopus','crab','dolphin','spiral-shell','jellyfish','fish'],14,70,130);
    if (pat==='arcoiris') ['#ff6b6b','#ffa94d','#ffd43b','#69db7c','#4dabf7','#9775fa'].forEach((col,i)=>{ pt+=`<path d="M${-120+i*45} ${H+60}A${620-i*45} ${620-i*45} 0 0 1 ${1120-i*45} ${H+60}" fill="none" stroke="${col}" stroke-width="46" opacity=".9"/>`; });
    if (pat==='dinos') scat(['t-rex','sauropod','dragon','egg','cactus'],18,80,130,.9);
    if (pat==='unicornio') scat(['unicorn','rainbow','sparkles','star','cloud'],18,70,120,.9);
    if (pat==='bichinhos') scat(['cat-face','dog-face','rabbit-face','panda','fox','pig-face','monkey-face','koala'],20,70,110,.9);
    if (pat==='frutas') scat(['strawberry','cherries','watermelon','banana','tangerine','red-apple','grapes','pineapple'],20,70,110,.95);
    if (pat==='flores') scat(['tulip','sunflower','cherry-blossom','hibiscus','rose','butterfly'],20,70,110,.95);
    if (pat==='futebol') scat(['soccer-ball','1st-place-medal','trophy','goal-net'],18,70,120,.9);
    const s=user(p.sid), nm=esc((s?.name||'').split(' ')[0]), F=(CAD_FONTS[c.font]||CAD_FONTS.andika)[1], lb=c.label||'classico', tc=dark&&lb==='nenhum'? '#fff' : P.a;
    const T=esc(c.title||''), ts=T.length>22? 50 : T.length>16? 58 : 66, sub=c.sub? `<text x="0" y="SUBY" text-anchor="middle" font-family="${F}" font-size="34" fill="${dark&&lb==='nenhum'? '#fff' : '#5a4f52'}">${esc(c.sub)}</text>` : '';
    const words=(y1,y2,y3)=>`<text x="0" y="${y1}" text-anchor="middle" font-family="${F}" font-size="${ts}" font-weight="700" fill="${tc}">${T}</text>${c.name!==false&&nm? `<text x="0" y="${y2}" text-anchor="middle" font-family="${F}" font-size="84" font-weight="700" fill="${dark&&lb==='nenhum'? '#fff' : '#221c1e'}">${nm}</text>` : ''}${sub.replace('SUBY',y3)}`;
    let label='';
    if (lb==='classico') label=`<g transform="translate(500 990)"><rect x="-360" y="-170" width="720" height="${c.sub? 380 : 330}" rx="40" fill="#fffaf2" stroke="${P.a}" stroke-width="8"/><line x1="-270" y1="-25" x2="270" y2="-25" stroke="${P.b}" stroke-width="4" stroke-dasharray="10 12"/>${words(-60,70,150)}</g>`;
    if (lb==='nuvem') label=`<g transform="translate(500 1000)"><g fill="#fff" stroke="${P.a}" stroke-width="7"><path d="M-340 170C-450 170 -450 -10 -340 -20C-360 -150 -190 -190 -130 -110C-90 -210 90 -210 130 -110C190 -190 360 -150 340 -20C450 -10 450 170 340 170Z"/></g>${words(-30,70,135)}</g>`;
    if (lb==='redondo') label=`<g transform="translate(500 1000)"><circle r="270" fill="#fff" stroke="${P.a}" stroke-width="10"/><circle r="240" fill="none" stroke="${P.b}" stroke-width="4" stroke-dasharray="8 10"/>${words(-50,60,130).replace(/font-size="(\d+)"/,(m,n)=>`font-size="${Math.min(+n,46)}"`)}</g>`;
    if (lb==='faixa') label=`<g transform="translate(500 1010)"><path d="M-470 -90H470L430 0L470 90H-470L-430 0Z" fill="${P.a}"/><path d="M-470 90L-420 140V90ZM470 90L420 140V90Z" fill="${P.c}"/><text x="0" y="${Math.round(ts*.35)}" text-anchor="middle" font-family="${F}" font-size="${Math.min(ts,60)}" font-weight="700" fill="#fff">${T}</text>${c.name!==false&&nm? `<text x="0" y="230" text-anchor="middle" font-family="${F}" font-size="84" font-weight="700" fill="${dark? '#fff' : '#221c1e'}">${nm}</text>` : ''}${c.sub? `<text x="0" y="300" text-anchor="middle" font-family="${F}" font-size="34" fill="${dark? '#fff' : '#5a4f52'}">${esc(c.sub)}</text>` : ''}</g>`;
    if (lb==='escolar') label=`<g transform="translate(500 1010)"><rect x="-330" y="-190" width="660" height="400" rx="26" fill="#fff" stroke="#221c1e" stroke-width="5"/><rect x="-330" y="-190" width="660" height="90" rx="26" fill="${P.a}"/><rect x="-330" y="-130" width="660" height="30" fill="${P.a}"/><text x="0" y="-128" text-anchor="middle" font-family="${F}" font-size="44" font-weight="700" fill="#fff">${T}</text>
      <text x="-290" y="-20" font-family="Figtree, sans-serif" font-size="28" fill="#8a7e80">Name</text><text x="-160" y="-20" font-family="${F}" font-size="56" font-weight="700" fill="#221c1e">${c.name!==false? nm : ''}</text><line x1="-170" y1="0" x2="290" y2="0" stroke="#b9aea4" stroke-width="2"/>
      <text x="-290" y="90" font-family="Figtree, sans-serif" font-size="28" fill="#8a7e80">Class</text><text x="-160" y="90" font-family="${F}" font-size="40" fill="#221c1e">${esc(c.sub||'English')}</text><line x1="-170" y1="110" x2="290" y2="110" stroke="#b9aea4" stroke-width="2"/></g>`;
    if (lb==='nenhum') label=`<g transform="translate(500 1040)">${words(-60,60,130)}</g>`;
    g=`<rect width="${W}" height="${H}" fill="${pat==='espaco'? '#1f2a4d' : pat==='oceano'? '#dff3ff' : P.bg}"/>${pt}${c.spine!==false? `<rect x="0" y="0" width="56" height="${H}" fill="${P.a}" opacity=".92"/><rect x="56" y="0" width="6" height="${H}" fill="#000" opacity=".08"/>` : ''}${label}`; }
  else { g=`<rect width="${W}" height="${H}" fill="#fffdf8"/>`;
    if (p.bg==='pautada'){ for (let y=180;y<H-60;y+=64) g+=`<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="#9cc3e6" stroke-width="2"/>`; g+=`<line x1="110" y1="0" x2="110" y2="${H}" stroke="#ef8f8f" stroke-width="2.5"/>`; }
    if (p.bg==='caligrafia') for (let y=150;y<H-150;y+=180){ g+=`<line x1="40" y1="${y}" x2="${W-40}" y2="${y}" stroke="#9cc3e6" stroke-width="2"/><line x1="40" y1="${y+50}" x2="${W-40}" y2="${y+50}" stroke="#9cc3e6" stroke-width="2" stroke-dasharray="14 12"/><line x1="40" y1="${y+100}" x2="${W-40}" y2="${y+100}" stroke="#e07b7b" stroke-width="3"/><line x1="40" y1="${y+140}" x2="${W-40}" y2="${y+140}" stroke="#cfe0f0" stroke-width="2"/>`; }
    if (p.bg==='quadriculada'){ for (let x=0;x<=W;x+=40) g+=`<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="#d6e4f0" stroke-width="1.5"/>`; for (let y=0;y<=H;y+=40) g+=`<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="#d6e4f0" stroke-width="1.5"/>`; }
    if (p.bg==='pontilhada') for (let y=40;y<H;y+=40) for (let x=40;x<W;x+=40) g+=`<circle cx="${x}" cy="${y}" r="2.4" fill="#b8c9d8"/>`; }
  return g; }

/* ---------- elementos (figurinhas, texto, imagens, atividades) ---------- */
const CAD_BADGES={star:['#f6c344','★'],heart:['#ef5b7a','♥'],good:['#3aa36b','Good job!'],super:['#2b6cb0','Super!'],wow:['#8e44ad','Wow!'],great:['#e0703a','Great!'],smile:['#f6c344','☺'],ok:['#3aa36b','✓']};
function cadBadge(k){ const [c,t]=CAD_BADGES[k]||CAD_BADGES.star, big=t.length<=2;
  return `<svg viewBox="0 0 200 200" class="cd-badge"><circle cx="100" cy="100" r="92" fill="#fff"/><circle cx="100" cy="100" r="80" fill="${c}"/>${[...Array(12)].map((_,i)=>`<circle cx="${100+86*Math.cos(i*Math.PI/6)}" cy="${100+86*Math.sin(i*Math.PI/6)}" r="7" fill="${c}"/>`).join('')}<text x="100" y="${big? 128 : 112}" text-anchor="middle" font-family="Andika, Figtree, sans-serif" font-weight="700" font-size="${big? 88 : t.length>6? 34 : 44}" fill="#fff">${esc(t)}</text></svg>`; }
function cadItemInner(it){
  if (it.t==='emo'){ const e=typeof EMOJI!=='undefined'&&EMOJI[it.k]; return e? `<svg class="cd-emo" viewBox="0 0 ${e[0]} ${e[1]}">${e[2]}</svg>` : ''; }
  if (it.t==='sticker') return CAD_BADGES[it.k]? cadBadge(it.k) : `<div class="cd-stk">${quadro(imgPal(it.k),it.k,hashStr(it.k)%97,{w:300,h:300,frame:false})}</div>`;
  if (it.t==='text') return `<div class="cd-txt" style="font-size:${it.fs||44}px;color:${it.c||'#221c1e'}">${esc(it.txt||'')}</div>`;
  if (it.t==='img') return `<img src="${it.src}" alt="" draggable="false">`;
  if (it.t==='act') return typeof kidsSheetSvg==='function'? kidsSheetSvg(it.kind,it.theme,{seed:it.seed}) : '';
  return ''; }
function cadItemDom(it){ return `<div class="cd-it cd-${it.t}" data-it="${it.id}" style="left:${it.x}px;top:${it.y}px;width:${it.w}px;height:${it.t==='text'? 'auto' : it.h+'px'};transform:rotate(${it.r||0}deg)">${cadItemInner(it)}</div>`; }
function cadPageDom(){ const p=cadPage(); if (!p) return; CD.el.world.innerHTML=`<div class="cd-pg"><svg class="cd-bg" viewBox="0 0 ${CAD_W} ${CAD_H}" width="${CAD_W}" height="${CAD_H}">${cadBgSvg(p)}</svg><div class="cd-items">${p.items.map(cadItemDom).join('')}</div></div>`;
  // o texto mede a própria altura
  requestAnimationFrame(()=>{ for (const it of p.items) if (it.t==='text'){ const n=CD.el.world.querySelector(`[data-it="${it.id}"]`); if (n) it.h=n.offsetHeight; } cadUi(); }); }
const cadItem=id=>cadPage()?.items.find(i=>i.id===id);
function cadItemAt(px,py){ const p=cadPage(); for (let i=p.items.length-1;i>=0;i--){ const it=p.items[i], cx=it.x+it.w/2, cy=it.y+it.h/2, a=-(it.r||0)*Math.PI/180;
    const dx=px-cx, dy=py-cy, lx=dx*Math.cos(a)-dy*Math.sin(a), ly=dx*Math.sin(a)+dy*Math.cos(a); if (Math.abs(lx)<=it.w/2+6&&Math.abs(ly)<=it.h/2+6) return it; } return null; }
function cadItemStyle(it){ const n=CD.el.world.querySelector(`[data-it="${it.id}"]`); if (!n) return; n.style.left=it.x+'px'; n.style.top=it.y+'px'; n.style.width=it.w+'px'; if (it.t!=='text') n.style.height=it.h+'px'; else n.firstElementChild.style.fontSize=(it.fs||44)+'px'; n.style.transform=`rotate(${it.r||0}deg)`; }
/* moldura de seleção (em pixels da tela, para os botões terem sempre o mesmo tamanho) */
function cadUi(){ const ui=CD.el?.ui; if (!ui) return; const it=CD.sel&&cadItem(CD.sel); if (!it||CD.ro||CD.tool!=='move'){ ui.innerHTML=''; return; }
  const z=CD.cam.z, cx=(it.x+it.w/2-CD.cam.x)*z, cy=(it.y+it.h/2-CD.cam.y)*z, w=it.w*z, h=it.h*z;
  ui.innerHTML=`<div class="cd-sel" style="left:${cx}px;top:${cy}px;width:${w}px;height:${h}px;transform:translate(-50%,-50%) rotate(${it.r||0}deg)">
    <span class="cd-h cd-rot" data-h="rot" aria-label="Girar">⟳</span><span class="cd-h cd-rs" data-h="rs" aria-label="Tamanho">⤡</span>
    <span class="cd-h cd-del" data-h="del" aria-label="Apagar">✕</span>${it.t==='text'? '<span class="cd-h cd-ed" data-h="ed" aria-label="Editar texto">✎</span>' : ''}<span class="cd-h cd-up" data-h="up" aria-label="Trazer para frente">⇧</span></div>`; }
function cadAdd(it){ const p=cadPage(); cadPush(p); const v=CD.el.view, [cx,cy]=cadToPage(v.clientWidth/2,v.clientHeight/2);
  it.id='i'+uid(); it.x ??= Math.max(10,Math.min(CAD_W-it.w-10,cx-it.w/2)); it.y ??= Math.max(10,Math.min(CAD_H-it.h-10,cy-it.h/2)); it.r ??= 0;
  p.items.push(it); CD.sel=it.id; CD.tool='move'; cadSave(); cadPaintAll(); cadBar(); }

/* ---------- texto ---------- */
function cadTextEdit(it){ const v=CD.el.view; CD.el.ui.innerHTML=''; v.querySelector('.cd-tin')?.blur();
  const z=CD.cam.z, ta=document.createElement('textarea'); ta.className='cd-tin'; ta.value=it.txt||''; ta.placeholder='Escreva aqui…';
  Object.assign(ta.style,{left:(it.x-CD.cam.x)*z+'px',top:(it.y-CD.cam.y)*z+'px',width:Math.max(it.w,260)*z+'px',fontSize:Math.max(16,(it.fs||44)*z)+'px',color:it.c||'#221c1e'});
  const n=CD.el.world.querySelector(`[data-it="${it.id}"]`); if (n) n.style.visibility='hidden';
  let done=false; const fit=()=>{ ta.style.height='auto'; ta.style.height=ta.scrollHeight+'px'; };
  const end=()=>{ if (done) return; done=true; const p=cadPage(), v2=ta.value.replace(/\s+$/,''); if (ta.isConnected) ta.remove();
    if (!v2){ p.items=p.items.filter(x=>x.id!==it.id); CD.sel=null; } else if (v2!==it.txt){ it.txt=v2; } cadSave(); cadPaintAll(); };
  ta.addEventListener('input',fit); ta.addEventListener('blur',end); ta.addEventListener('keydown',e=>{ e.stopPropagation(); if (e.key==='Escape') ta.blur(); });
  v.appendChild(ta); fit(); ta.focus(); }

/* ---------- entrada: caneta, dedo, mouse ---------- */
const cadFingerDraws=()=>CD.finger&&!CD.penSeen;
function cadDown(e){ if (!CD.el||e.target.closest('.cd-tin')) return; const L=cadLocal(e); cadPal(false);
  const sp=e.target.closest?.('[data-say]'); if (sp&&CD.tool!=='eraser'&&CD.tool!=='move'&&typeof kidsSay==='function'){ e.preventDefault(); kidsSay(sp.getAttribute('data-say')); return; }
  if (e.target.closest('.cd-h')){ cadHandleDown(e,e.target.closest('.cd-h').dataset.h); return; }
  e.preventDefault(); try { CD.el.view.setPointerCapture(e.pointerId); } catch {}
  CD.ptr.set(e.pointerId,{x:L[0],y:L[1],type:e.pointerType,t:performance.now()});
  if (e.pointerType==='pen'){ CD.penT=performance.now(); if (CD.gest&&!CD.gest.item){ CD.gest=null; cadPaintInk(); } if (!CD.penSeen){ CD.penSeen=true; cadBar(); toast('Caneta detectada: agora o dedo só move e dá zoom na página.'); } }
  if (e.pointerType==='touch'&&(CD.act?.pen||(e.width>70&&e.height>70)||(CD.penSeen&&performance.now()-(CD.penT||0)<300))){ CD.ptr.delete(e.pointerId); return; }
  const touches=[...CD.ptr.values()].filter(p=>p.type==='touch');
  if (e.pointerType==='touch'){
    if (CD.act?.pen) return;                       // palma da mão enquanto a caneta escreve
    if (touches.length>=2){ if (CD.act&&!CD.act.pen&&CD.act.kind==='draw'&&performance.now()-CD.act.t0>350){ CD.ptr.delete(e.pointerId); return; } cadCancelTouchAct(); cadGestStart(); return; }
    if (CD.ro||!cadFingerDraws()&&CD.tool!=='move'){ CD.gest={pan:true,id:e.pointerId,x:L[0],y:L[1],cam:{...CD.cam}}; return; } }
  if (e.pointerType==='mouse'&&e.button!==0){ CD.gest={pan:true,id:e.pointerId,x:L[0],y:L[1],cam:{...CD.cam}}; return; }
  if (CD.ro){ CD.gest={pan:true,id:e.pointerId,x:L[0],y:L[1],cam:{...CD.cam}}; return; }
  cadToolDown(e,L); }
function cadCancelTouchAct(){ const a=CD.act; if (!a||a.pen) return;
  if (a.kind==='draw'){ CD.act=null; cadCtx(CD.el.live); }
  else if (a.kind==='erase'&&a.changed){ const p=cadPage(), s=CD.hist[p.id]?.pop(); if (s){ p.strokes=s.strokes; } CD.act=null; cadPaintInk(); }
  else CD.act=null; }
function cadToolDown(e,L){ const [px,py]=cadToPage(L[0],L[1]), p=cadPage(), pen=e.pointerType==='pen';
  if (CD.tool==='pen'||CD.tool==='hl'){ const pr=pen&&e.pressure>0? e.pressure : .5;
    CD.act={kind:'draw',id:e.pointerId,pen,t0:performance.now(),st:{t:CD.tool,c:CD.tool==='hl'&&CD.color==='#221c1e'? '#f6d32d' : CD.color,w:CAD_SIZES[CD.tool][CD.size],pr:pen? 1 : 0,pts:[+px.toFixed(1),+py.toFixed(1),+pr.toFixed(2)]}};
    cadPaintLive(); return; }
  if (CD.tool==='eraser'){ cadPush(p); CD.act={kind:'erase',id:e.pointerId,pen,changed:false}; cadErase(px,py); return; }
  if (CD.tool==='text'){ const open=CD.el.view.querySelector('.cd-tin'); if (open){ open.blur(); return; } const hit=cadItemAt(px,py); if (hit&&hit.t==='text'){ CD.sel=hit.id; cadTextEdit(hit); return; }
    cadPush(p); const fs=[34,48,72][CD.size], it={id:'i'+uid(),t:'text',txt:'',x:Math.max(24,Math.min(CAD_W-300,px)),y:Math.max(10,Math.min(CAD_H-fs*1.4,py-fs*.7)),w:Math.min(560,CAD_W-24-Math.max(24,Math.min(CAD_W-300,px))),h:fs*1.3,r:0,fs,c:CD.color}; p.items.push(it); CD.sel=it.id; cadPageDom(); cadTextEdit(it); return; }
  if (CD.tool==='move'){ const hit=cadItemAt(px,py);
    if (!hit){ CD.sel=null; cadUi(); CD.gest={pan:true,id:e.pointerId,x:L[0],y:L[1],cam:{...CD.cam}}; return; }
    CD.sel=hit.id; cadPush(p); CD.act={kind:'drag',id:e.pointerId,pen,it:hit,ox:px-hit.x,oy:py-hit.y,moved:false,t:performance.now()}; cadUi(); } }
function cadMove(e){ if (!CD.el) return; const P=CD.ptr.get(e.pointerId); if (!P) return; const L=cadLocal(e); P.x=L[0]; P.y=L[1];
  const g=CD.gest;
  if (g?.pinch){ cadGestMove(); return; }
  if (g?.pan&&g.id===e.pointerId){ CD.cam.x=g.cam.x-(L[0]-g.x)/CD.cam.z; CD.cam.y=g.cam.y-(L[1]-g.y)/CD.cam.z; cadClamp(); cadRedraw(); return; }
  const a=CD.act; if (!a||a.id!==e.pointerId) return;
  if (a.kind==='draw'){ const evs=e.getCoalescedEvents?.()||[e];
    for (const ev of evs.length? evs : [e]){ const [lx,ly]=cadLocal(ev), [px,py]=cadToPage(lx,ly), pr=a.pen&&ev.pressure>0? ev.pressure : .5, n=a.st.pts.length;
      if (Math.hypot(px-a.st.pts[n-3],py-a.st.pts[n-2])<.35) continue; a.st.pts.push(+px.toFixed(1),+py.toFixed(1),+pr.toFixed(2)); }
    const pred=(e.getPredictedEvents?.()||[]).slice(0,2).flatMap(ev=>{ const [lx,ly]=cadLocal(ev), [px,py]=cadToPage(lx,ly); return [px,py,a.pen&&ev.pressure>0? ev.pressure : .5]; });
    if (a.pen) CD.penT=performance.now(); CD.livePred=pred; if (!CD.liveRaf) CD.liveRaf=requestAnimationFrame(()=>{ CD.liveRaf=0; if (CD.act?.kind==='draw') cadPaintLive(CD.livePred); }); return; }
  if (a.kind==='erase'){ const evs=e.getCoalescedEvents?.()||[e]; for (const ev of evs.length? evs : [e]){ const [lx,ly]=cadLocal(ev); cadErase(...cadToPage(lx,ly)); } return; }
  if (a.kind==='drag'){ const [px,py]=cadToPage(L[0],L[1]); a.it.x=px-a.ox; a.it.y=py-a.oy; a.moved=true; cadItemStyle(a.it); cadUi(); return; }
  if (a.kind==='rs'){ const it=a.it, cx=it.x+it.w/2, cy=it.y+it.h/2, [px,py]=cadToPage(L[0],L[1]), d=Math.hypot(px-cx,py-cy), k=Math.max(.15,d/a.d0);
    if (it.t==='text'){ it.fs=Math.max(14,Math.min(220,a.fs0*k)); it.w=Math.max(80,a.w0*k); } else { it.w=Math.max(40,a.w0*k); it.h=Math.max(40,a.h0*k); }
    it.x=cx-it.w/2; it.y=cy-it.h/2; cadItemStyle(it); cadUi(); return; }
  if (a.kind==='rot'){ const it=a.it, cx=it.x+it.w/2, cy=it.y+it.h/2, [px,py]=cadToPage(L[0],L[1]); let r=Math.atan2(py-cy,px-cx)*180/Math.PI+90; for (const s of [0,90,180,270,360,-90]) if (Math.abs(r-s)<4) r=s; it.r=Math.round(r); cadItemStyle(it); cadUi(); } }
function cadUp(e){ if (!CD.el) return; const P=CD.ptr.get(e.pointerId); CD.ptr.delete(e.pointerId);
  const g=CD.gest; if (g?.pinch){ if ([...CD.ptr.values()].filter(p=>p.type==='touch').length<2){ if (g.item){ cadSave(); } CD.gest=null; cadPaintInk(); } return; }
  if (g?.pan&&g.id===e.pointerId){ CD.gest=null; cadPaintInk(); return; }
  const a=CD.act; if (!a||a.id!==e.pointerId) return; CD.act=null; const p=cadPage();
  if (a.kind==='draw'){ if (CD.liveRaf){ cancelAnimationFrame(CD.liveRaf); CD.liveRaf=0; } if (a.pen) CD.penT=performance.now(); if (e.type==='pointercancel'&&a.st.pts.length<9){ cadCtx(CD.el.live); return; }
    if (a.st.pts.length===3) a.st.pts.push(a.st.pts[0]+.4,a.st.pts[1]+.4,a.st.pts[2]); // um ponto vira bolinha
    cadPush(p); p.strokes.push(a.st); cadCtx(CD.el.live);
    if (a.st.t==='hl') cadPaintInk(); else { const ctx=CD.el.ink.getContext('2d'); cadFill(ctx,a.st,cadPath(a.st)); }
    cadSave(); return; }
  if (a.kind==='erase'){ if (!a.changed) CD.hist[p.id]?.pop(); else cadSave(); return; }
  if (a.kind==='drag'){ if (!a.moved){ CD.hist[p.id]?.pop(); const it=a.it; if (it.t==='text'&&performance.now()-a.t<300&&CD.lastTap===it.id){ cadTextEdit(it); } CD.lastTap=it.id; setTimeout(()=>{ if (CD.lastTap===it.id) CD.lastTap=null; },450); }
    else cadSave(); cadUi(); return; }
  if (a.kind==='rs'||a.kind==='rot'){ cadSave(); cadPageDom(); } }
function cadErase(px,py){ const p=cadPage(), r=14/CD.cam.z+6, a=CD.act; let hit=false;
  p.strokes=p.strokes.filter(st=>{ const b=cadBox(st); if (px<b[0]-r||px>b[2]+r||py<b[1]-r||py>b[3]+r) return true;
    for (let i=0;i<st.pts.length;i+=3) if (Math.hypot(st.pts[i]-px,st.pts[i+1]-py)<r+st.w/2){ hit=true; return false; } return true; });
  if (hit){ a.changed=true; cadPaintInk(); }
  const ctx=cadCtx(CD.el.live); ctx.beginPath(); ctx.arc(px,py,r,0,7); ctx.strokeStyle='rgba(34,28,30,.5)'; ctx.lineWidth=2/CD.cam.z; ctx.stroke(); }
/* dois dedos: zoom e mover (ou girar/aumentar a figurinha selecionada) */
function cadGestStart(){ const T=[...CD.ptr.entries()].filter(([,p])=>p.type==='touch').slice(0,2); const [a,b]=T.map(([,p])=>p);
  const mx=(a.x+b.x)/2, my=(a.y+b.y)/2, d=Math.hypot(a.x-b.x,a.y-b.y), ang=Math.atan2(b.y-a.y,b.x-a.x);
  const it=CD.tool==='move'&&CD.sel&&cadItem(CD.sel); let onItem=false;
  if (it){ const [pa]=[cadToPage(a.x,a.y)], [pb]=[cadToPage(b.x,b.y)]; onItem=cadItemAt(...pa)===it||cadItemAt(...pb)===it; }
  if (onItem){ cadPush(cadPage()); CD.gest={pinch:true,item:it,ids:T.map(([k])=>k),d,ang,w0:it.w,h0:it.h,fs0:it.fs||44,r0:it.r||0,cx:it.x+it.w/2,cy:it.y+it.h/2}; return; }
  CD.gest={pinch:true,ids:T.map(([k])=>k),mx,my,d,z0:CD.cam.z,px:CD.cam.x+mx/CD.cam.z,py:CD.cam.y+my/CD.cam.z}; }
function cadGestMove(){ const g=CD.gest, a=CD.ptr.get(g.ids[0]), b=CD.ptr.get(g.ids[1]); if (!a||!b) return;
  const d=Math.hypot(a.x-b.x,a.y-b.y), mx=(a.x+b.x)/2, my=(a.y+b.y)/2;
  if (g.item){ const it=g.item, k=Math.max(.15,d/g.d), ang=Math.atan2(b.y-a.y,b.x-a.x);
    if (it.t==='text'){ it.fs=Math.max(14,Math.min(220,g.fs0*k)); it.w=Math.max(80,g.w0*k); } else { it.w=Math.max(40,g.w0*k); it.h=Math.max(40,g.h0*k); }
    it.r=Math.round(g.r0+(ang-g.ang)*180/Math.PI); it.x=g.cx-it.w/2; it.y=g.cy-it.h/2; cadItemStyle(it); cadUi(); return; }
  const v=CD.el.view, fit=Math.min(v.clientWidth/(CAD_W+60),v.clientHeight/(CAD_H+60));
  const z=Math.max(fit*.8,Math.min(fit*6,g.z0*d/g.d)); CD.cam.z=z; CD.cam.x=g.px-mx/z; CD.cam.y=g.py-my/z; cadClamp(); cadRedraw(); }
function cadHandleDown(e,h){ e.preventDefault(); e.stopPropagation(); const it=cadItem(CD.sel); if (!it) return; const p=cadPage();
  if (h==='del'){ cadPush(p); p.items=p.items.filter(x=>x.id!==it.id); CD.sel=null; cadSave(); cadPaintAll(); return; }
  if (h==='up'){ cadPush(p); p.items=p.items.filter(x=>x.id!==it.id).concat(it); cadSave(); cadPaintAll(); return; }
  if (h==='ed'){ cadTextEdit(it); return; }
  try { CD.el.view.setPointerCapture(e.pointerId); } catch {} const L=cadLocal(e); CD.ptr.set(e.pointerId,{x:L[0],y:L[1],type:e.pointerType,t:performance.now()});
  cadPush(p); const cx=it.x+it.w/2, cy=it.y+it.h/2, [px,py]=cadToPage(L[0],L[1]);
  CD.act={kind:h,id:e.pointerId,pen:e.pointerType==='pen',it,d0:Math.max(10,Math.hypot(px-cx,py-cy)),w0:it.w,h0:it.h,fs0:it.fs||44}; }
function cadWheel(e){ if (!CD.el) return; e.preventDefault(); const [sx,sy]=cadLocal(e);
  if (e.ctrlKey||e.metaKey) cadZoomAt(sx,sy,CD.cam.z*Math.exp(-e.deltaY*.01)); else { CD.cam.x+=e.deltaX/CD.cam.z; CD.cam.y+=e.deltaY/CD.cam.z; cadClamp(); }
  cadRedraw(); }

/* ---------- barra de ferramentas ---------- */
const CDI={pen:'<svg viewBox="0 0 24 24"><path d="M4 20l1-4L16 5l3 3L8 19z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  hl:'<svg viewBox="0 0 24 24"><path d="M4 21h8M7 16l9-9 3 3-9 9H7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 9l3 3" stroke="currentColor" stroke-width="2"/></svg>',
  eraser:'<svg viewBox="0 0 24 24"><path d="M8 20h12M5 15l8-8 6 6-6 6H9z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  move:'<svg viewBox="0 0 24 24"><path d="M9 11V5a1.5 1.5 0 013 0v5m0-1a1.5 1.5 0 013 0v2m0-1a1.5 1.5 0 013 0v4a6 6 0 01-6 6h-1a6 6 0 01-5-3l-2-4a1.5 1.5 0 012.5-1.5L9 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  text:'<svg viewBox="0 0 24 24"><path d="M5 6V4h14v2M12 4v16M9 20h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  undo:'<svg viewBox="0 0 24 24"><path d="M9 7L4 12l5 5M4 12h10a6 6 0 010 12" transform="translate(0 -3)" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  redo:'<svg viewBox="0 0 24 24"><path d="M15 7l5 5-5 5M20 12H10a6 6 0 000 12" transform="translate(0 -3)" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  pages:'<svg viewBox="0 0 24 24"><rect x="4" y="3" width="12" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 21h10a2 2 0 002-2V7" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  finger:'<svg viewBox="0 0 24 24"><path d="M10 12V5a1.5 1.5 0 013 0v6m0-1.5a1.5 1.5 0 013 0V12m0-1a1.5 1.5 0 013 0v4a6 6 0 01-6 6h-1a6 6 0 01-5-3l-2-4a1.5 1.5 0 012.5-1.5L10 15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  cover:'<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 3v18" stroke="currentColor" stroke-width="2"/><path d="M12 9l1 2 2 .3-1.5 1.4.4 2.1-1.9-1-1.9 1 .4-2.1L9 11.3l2-.3z" fill="currentColor"/></svg>',
  fit:'<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'};
function cadBar(){ const bar=CD.el?.bar; if (!bar) return; const s=user(CD.sid), P=cadPages(CD.sid), p=cadPage(), H=CD.hist[p?.id]||[], F=CD.fut[p?.id]||[];
  const tb=(k,l)=>`<button class="cd-b ${CD.tool===k?'on':''}" data-cd="tool" data-v="${k}" aria-pressed="${CD.tool===k}" title="${l}">${CDI[k]}<span>${l}</span></button>`;
  bar.innerHTML=`<div class="cd-row">
    <button class="cd-b cd-back" data-cd="close" title="Fechar o caderno">←<span>${esc((s?.name||'').split(' ')[0])}</span></button>
    ${CD.ro? '' : `<div class="cd-grp">${tb('pen','Caneta')}${tb('hl','Marca-texto')}${tb('eraser','Borracha')}${tb('text','Texto')}${tb('move','Mover')}</div>
    <button class="cd-b cd-cur" data-cd="pal" title="Cor e espessura"><i style="--c:${CD.tool==='hl'&&CD.color==='#221c1e'? '#f6d32d' : CD.color};--s:${[10,16,24][CD.size]}px"></i><span>Cor</span></button>
    <div class="cd-grp"><button class="cd-b" data-cd="undo" ${H.length? '' : 'disabled'} title="Desfazer">${CDI.undo}</button><button class="cd-b" data-cd="redo" ${F.length? '' : 'disabled'} title="Refazer">${CDI.redo}</button></div>
    <button class="cd-b cd-ins" data-cd="insert" title="Inserir figurinha, atividade ou foto">${CDI.plus}<span>Inserir</span></button>
    <button class="cd-b" data-cd="cover" title="Personalizar a capa">${CDI.cover}<span>Capa</span></button>`}
    <span class="cd-sp"></span>
    <div class="cd-grp"><button class="cd-b" data-cd="prev" ${CD.pi? '' : 'disabled'} aria-label="Página anterior">‹</button><button class="cd-b cd-pn" data-cd="pages" title="Todas as páginas">${CD.pi? `${CD.pi} / ${P.length-1}` : 'Capa'}</button><button class="cd-b" data-cd="next" ${CD.pi<P.length-1? '' : 'disabled'} aria-label="Próxima página">›</button>${CD.ro? '' : `<button class="cd-b" data-cd="newpage" title="Nova página">${CDI.plus}</button>`}</div>
    ${CD.ro? '' : `<button class="cd-b ${CD.penSeen? '' : CD.finger? 'on' : ''}" data-cd="finger" title="${CD.penSeen? 'Com a caneta, o dedo só move a página' : CD.finger? 'O dedo escreve (toque para o dedo só mover)' : 'O dedo só move (toque para o dedo escrever)'}">${CDI.finger}<span>${CD.penSeen? 'Caneta' : CD.finger? 'Dedo escreve' : 'Dedo move'}</span></button>`}
    <button class="cd-b" data-cd="fit" title="Ver a página inteira">${CDI.fit}</button>
    <span class="cd-flag" id="cd-flag">${CD.ro? 'Só para ver' : 'Salvo'}</span></div>`; }
function cadPal(open){ let el=CD.el.root.querySelector('.cd-pal2'); if (!open){ el?.remove(); return; }
  if (!el){ el=document.createElement('div'); el.className='cd-pal2'; CD.el.root.appendChild(el); }
  const b=CD.el.bar.querySelector('[data-cd=pal]').getBoundingClientRect();
  el.style.left=Math.max(8,Math.min(window.innerWidth-336,b.left-120))+'px'; el.style.top=(b.bottom+8)+'px';
  el.innerHTML=`<div class="cd-cols">${CAD_COLORS.map(c=>`<button class="cd-dot ${CD.color===c?'on':''}" style="--c:${c}" data-cd="color" data-v="${c}" aria-label="Cor"></button>`).join('')}</div>
    <div class="cd-szs">${[0,1,2].map(k=>`<button class="cd-b cd-sz ${CD.size===k?'on':''}" data-cd="size" data-v="${k}" aria-label="Espessura ${k+1}"><i style="width:${6+k*6}px;height:${6+k*6}px"></i></button>`).join('')}</div>`; }
function cadSheet(html){ CD.el.sheet.innerHTML=html? `<div class="cd-sheet-in">${html}</div>` : ''; CD.el.sheet.classList.toggle('on',!!html); }
const CAD_STK=['gato','cachorro','passaro','coelho','peixes','cavalo','vaca','macaco','rato','maca','banana','sorvete','bolo','pizza','sol','arvore','flor','nuvem','balao','bola','bicicleta','presente','coracao','carro','onibus','aviao','trem','casa','livro','lapis','mochila','chapeu','camiseta','sapato','oculos','violao','feliz','triste','surpreso','bravo'];
const CAD_EMO={
  bichos:['cat','dog','rabbit','hamster','mouse','fox','panda','koala','lion','tiger','elephant','monkey','giraffe','zebra','bear','penguin','unicorn','t-rex','sauropod','dragon','owl','parrot','flamingo','peacock','hedgehog','sloth','otter','raccoon','kangaroo','crocodile','snake','frog','turtle','butterfly','honeybee','lady-beetle','snail','tropical-fish','spouting-whale','dolphin','octopus','crab','shark','cow','pig','horse','ewe','chicken','duck','baby-chick','hatching-chick'],
  comida:['red-apple','banana','grapes','strawberry','watermelon','tangerine','cherries','pineapple','peach','kiwi-fruit','mango','coconut','carrot','broccoli','ear-of-corn','tomato','pizza','hamburger','french-fries','hot-dog','sandwich','bread','cheese-wedge','egg','cookie','birthday-cake','cupcake','doughnut','soft-ice-cream','lollipop','candy','popcorn','glass-of-milk','beverage-box'],
  natureza:['sun','cloud','cloud-with-rain','snowflake','rainbow','umbrella','sunflower','tulip','rose','hibiscus','cherry-blossom','four-leaf-clover','maple-leaf','deciduous-tree','cactus','mountain','crescent-moon','star','glowing-star','ringed-planet','comet','globe-showing-americas','fire','droplet'],
  diversao:['teddy-bear','kite','balloon','yo-yo','puzzle-piece','robot','nesting-dolls','video-game','racing-car','soccer-ball','basketball','tennis','skateboard','guitar','drum','trumpet','violin','musical-keyboard','microphone','musical-notes','automobile','bus','airplane','locomotive','bicycle','rocket','helicopter','sailboat','castle','tent','crown','gem-stone','ribbon','wrapped-gift','party-popper','jack-o-lantern','ghost','christmas-tree','santa-claus','woman-fairy','astronaut','alien'],
  rostos:['grinning-face','smiling-face-with-heart-eyes','zany-face','smiling-face-with-sunglasses','astonished-face','crying-face','pouting-face','sleeping-face','fearful-face','face-with-thermometer','hot-face','cold-face','baby-medium-light','boy-medium-dark','girl-medium','man-medium','woman-medium-light','old-man-light','old-woman-medium','thumbs-up','clapping-hands','raised-hand'],
  premios:['trophy','1st-place-medal','glowing-star','star','sparkles','crown','thumbs-up','clapping-hands','party-popper','red-heart','orange-heart','yellow-heart','green-heart','blue-heart','purple-heart','rainbow','gem-stone','four-leaf-clover'],
};
const CAD_EMO_N={bichos:'Bichos',comida:'Comida',natureza:'Natureza',diversao:'Diversão',rostos:'Rostos',premios:'Prêmios'};
function cadInsertSheet(tab='bichos'){ const tabs=`<div class="cd-tabs">${[['act','Atividades'],['kaulas','Aulas Kids'],['livro','Livrinhos'],['meus','Meus materiais'],...Object.entries(CAD_EMO_N),['badge','Selos'],['stk','Ilustrações'],['photo','Foto']].map(([k,l])=>`<button class="${tab===k?'on':''}" data-cd="itab" data-v="${k}">${l}</button>`).join('')}<button class="cd-x" data-cd="sheetx" aria-label="Fechar">✕</button></div>`;
  let body='';
  if (CAD_EMO[tab]) body=`<div class="cd-grid cd-egrid">${CAD_EMO[tab].filter(k=>typeof EMOJI!=='undefined'&&EMOJI[k]).map(k=>`<button class="cd-gi" data-cd="addemo" data-v="${k}" aria-label="${k}">${kEsvg(k)}</button>`).join('')}</div>`;
  if (tab==='stk') body=`<div class="cd-grid">${CAD_STK.filter(k=>SCENES[k]).map(k=>`<button class="cd-gi" data-cd="addstk" data-v="${k}" aria-label="${esc(SCENES[k].nome||k)}"><span class="cd-stk">${quadro(imgPal(k),k,hashStr(k)%97,{w:140,h:140,frame:false})}</span></button>`).join('')}</div>`;
  if (tab==='badge') body=`<div class="cd-grid">${Object.keys(CAD_BADGES).map(k=>`<button class="cd-gi" data-cd="addstk" data-v="${k}">${cadBadge(k)}</button>`).join('')}</div>`;
  if (tab==='act') body= typeof KIDS_SHEETS!=='undefined'? kidsPickerHtml('cad') : '<p class="meta">Em breve.</p>';
  if (tab==='kaulas'){ const age=S.kpage!==undefined? S.kpage : kidsAgeOf(user(CD.sid)), L=(typeof KIDS_DECKS!=='undefined'? KIDS_DECKS : []).filter(d=>!age||d.age===age);
    body=`<div class="cd-bgs"><b>Idade</b>${[['','Todas'],...Object.entries(KIDS_AGES)].map(([k,l])=>`<button class="${age===k?'on':''}" data-cd="kage2" data-v="${k}">${l}</button>`).join('')}</div><p class="meta">Toque numa aula para colar todas as páginas depois desta.</p><div class="cd-grid cd-agrid">${L.map(d=>`<button class="cd-gi cd-ai" data-cd="cdeck" data-v="${d.id}"><span>${kdeckPageSvg(d.id,0)}</span><small>${esc(d.title)} · ${kdeckPages(d).length} pág.</small></button>`).join('')}</div>`; }
  if (tab==='livro') body= S.cbook&&KBOOK[S.cbook]? `<div class="cd-bgs"><button data-cd="cbook" data-v="">← Livros</button><b>${esc(kbookById(S.cbook).title)}: toque numa página</b></div><div class="cd-pgrid">${KBOOK[S.cbook].p.map((p,i)=>`<button class="cd-pthumb" data-cd="cbpage" data-v="${i}"><img src="data:image/jpeg;base64,${p.i}" alt="" style="width:100%;border-radius:8px"><small>${esc((p.t||'').slice(0,40))}</small></button>`).join('')}</div>`
    : `<div class="cd-pgrid">${(typeof KIDS_BOOKS!=='undefined'? KIDS_BOOKS : []).map(b=>`<button class="cd-pthumb" data-cd="cbook" data-v="${b.id}"><img src="data:image/jpeg;base64,${b.th}" alt="" style="width:100%;border-radius:8px"><small>${esc(b.title)}</small></button>`).join('')}</div>`;
  if (tab==='meus'){ const F=typeof kfilesMine==='function'? kfilesMine() : []; body= F.length? `<div class="cd-pgrid">${F.map(f=>`<button class="cd-pthumb" data-cd="cfile" data-v="${f.id}">${f.thumb? `<img src="${f.thumb}" alt="" style="width:100%;border-radius:8px">` : `<span class="kf-ph">${/pdf/.test(f.type)? 'PDF' : 'IMG'}</span>`}<small>${esc(f.name)}</small></button>`).join('')}</div>` : '<p class="meta">Envie PDFs e imagens na Biblioteca → Kids → Meus materiais. Eles aparecem aqui para colar no caderno.</p>'; }
  if (tab==='photo') body=`<p class="meta">Tire uma foto ou escolha uma imagem (uma atividade feita no papel, um desenho…). Ela entra na página e você pode mover, girar e escrever por cima.</p><label class="btn primary">Escolher foto<input type="file" accept="image/*" data-cdfile="1" hidden></label>`;
  cadSheet(tabs+body); }
/* personalizar a capa */
function cadCoverSheet(tab='cor'){ const c=cadOf(CD.sid).cover;
  const tabs=`<div class="cd-tabs"><b>Capa</b>${[['cor','Cor e fundo'],['etq','Etiqueta e título'],['heroi','Personagem']].map(([k,l])=>`<button class="${tab===k?'on':''}" data-cd="ctab" data-v="${k}">${l}</button>`).join('')}<button class="cd-x" data-cd="sheetx" aria-label="Fechar">✕</button></div>`;
  let body='';
  if (tab==='cor') body=`<div class="cd-bgs"><b>Cor</b><div class="cd-pals">${[...PKEYS,...Object.keys(CAD_XPAL)].map(k=>{ const P=cadPalOf(k); return `<button class="cd-pal ${c.pal===k?'on':''}" data-cd="cpal" data-v="${k}" style="background:${P.bg};--a:${P.a}" aria-label="${esc(P.nome||k)}"><i></i></button>`; }).join('')}</div></div>
    <div class="cd-bgs"><b>Fundo</b><div class="cd-cvgrid">${Object.entries(CAD_PATS).map(([k,l])=>`<button class="cd-cv ${c.pat===k?'on':''}" data-cd="cpat" data-v="${k}"><svg viewBox="0 0 ${CAD_W} ${CAD_H}">${cadBgSvg({bg:'capa',sid:CD.sid,_pat:k})}</svg><small>${l}</small></button>`).join('')}</div></div>
    <div class="cd-bgs"><b>Lombada</b><button class="${c.spine!==false?'on':''}" data-cd="cspine" data-v="1">Com lombada</button><button class="${c.spine===false?'on':''}" data-cd="cspine" data-v="0">Sem lombada</button></div>`;
  if (tab==='etq') body=`<div class="cd-bgs"><b>Etiqueta</b>${Object.entries(CAD_LABELS).map(([k,l])=>`<button class="${(c.label||'classico')===k?'on':''}" data-cd="clabel" data-v="${k}">${l}</button>`).join('')}</div>
    <div class="cd-bgs"><b>Título</b><label class="field"><input type="text" data-cdtitle="1" value="${esc(c.title||'')}" maxlength="28" placeholder="My English Notebook"></label>${CAD_TITLES.map(t=>`<button data-cd="ctitle" data-v="${esc(t)}">${esc(t)}</button>`).join('')}</div>
    <div class="cd-bgs"><b>Linha de baixo</b> <small class="muted">(opcional: “2026”, “with Alexia”, a turma…)</small><label class="field"><input type="text" data-cdsub="1" value="${esc(c.sub||'')}" maxlength="30" placeholder="ex.: with Teacher Alexia"></label></div>
    <div class="cd-bgs"><b>Letra</b>${Object.entries(CAD_FONTS).map(([k,[l,f]])=>`<button class="${(c.font||'andika')===k?'on':''}" data-cd="cfont" data-v="${k}" style="font-family:${f}">${l}</button>`).join('')}<b>Nome da criança</b><button class="${c.name!==false?'on':''}" data-cd="cname" data-v="1">Mostrar</button><button class="${c.name===false?'on':''}" data-cd="cname" data-v="0">Esconder</button></div>`;
  if (tab==='heroi') body=`<p class="meta">Toque para trocar o personagem grande da capa. Depois use “Mover” para posicionar, aumentar ou girar. Em “Inserir” há muitas outras figurinhas.</p><div class="cd-grid cd-egrid">${CAD_HEROES.filter(k=>typeof EMOJI!=='undefined'&&EMOJI[k]).map(k=>`<button class="cd-gi" data-cd="chero" data-v="${k}">${kEsvg(k)}</button>`).join('')}</div>`;
  cadSheet(tabs+body); }
function cadPagesSheet(){ const P=cadPages(CD.sid);
  cadSheet(`<div class="cd-tabs"><b>Páginas</b><button class="cd-x" data-cd="sheetx" aria-label="Fechar">✕</button></div>
    <div class="cd-pgrid">${P.map((p,i)=>`<button class="cd-pthumb ${i===CD.pi?'on':''}" data-cd="goto" data-v="${i}"><svg viewBox="0 0 ${CAD_W} ${CAD_H}">${cadSvgInner(p)}</svg><small>${i? 'Página '+i : 'Capa'}</small></button>`).join('')}</div>
    ${CD.ro? '' : `<div class="cd-bgs"><b>Fundo desta página</b>${cadPage().bg==='capa'? `<button class="on" data-cd="cover">Personalizar a capa</button>` : Object.entries(CAD_BG).map(([k,l])=>`<button class="${cadPage().bg===k?'on':''}" data-cd="bg" data-v="${k}">${l}</button>`).join('')}</div>
    ${CD.pi? `<button class="btn small danger" data-cd="delpage">Apagar esta página</button>` : ''}`}`); }
/* página como SVG estático (miniaturas e visualização) */
function cadSvgInner(p){ return cadBgSvg(p)+p.items.map(it=>{ const cx=it.x+it.w/2, cy=it.y+it.h/2, tr=`rotate(${it.r||0} ${cx} ${cy})`;
    if (it.t==='img') return `<image href="${it.src}" x="${it.x}" y="${it.y}" width="${it.w}" height="${it.h}" transform="${tr}" preserveAspectRatio="xMidYMid meet"/>`;
    if (it.t==='text') return `<text x="${it.x}" y="${it.y+(it.fs||44)}" font-size="${it.fs||44}" font-family="Andika, Figtree, sans-serif" fill="${it.c||'#221c1e'}" transform="${tr}">${esc((it.txt||'').split('\n')[0])}</text>`;
    const inner=cadItemInner(it).replace(/^<div class="cd-stk">|<\/div>$/g,'');
    return `<g transform="${tr}">${inner.replace(/^<svg /,`<svg x="${it.x}" y="${it.y}" width="${it.w}" height="${it.h}" `)}</g>`; }).join('')
  +['hl','pen'].map(t=>p.strokes.filter(s=>s.t===t).map(s=>`<path d="${cadOutline(s)}" fill="${s.c}" ${t==='hl'? 'opacity=".38"' : ''}/>`).join('')).join(''); }

/* ---------- ações da barra ---------- */
function cadGo(i){ const n=cadPages(CD.sid).length; CD.pi=Math.max(0,Math.min(n-1,i)); CD.sel=null; cadSheet(''); cadPal(false); cadFit(CD.pi? 'width' : 'page'); cadPaintAll(); cadBar(); }
const CAD_ACT={
  close(){ location.hash= isT()? 'aluno-'+CD.sid : 'inicio'; },
  tool(el){ if (CD.tool===el.dataset.v&&['pen','hl','text'].includes(CD.tool)){ cadPal(!CD.el.root.querySelector('.cd-pal2')); return; } cadPal(false); CD.tool=el.dataset.v; if (CD.tool!=='move'){ CD.sel=null; cadUi(); } cadBar(); },
  pal(){ cadPal(!CD.el.root.querySelector('.cd-pal2')); },
  color(el){ CD.color=el.dataset.v; const it=CD.sel&&cadItem(CD.sel); if (it&&it.t==='text'){ cadPush(cadPage()); it.c=CD.color; cadSave(); cadPageDom(); } if (CD.tool==='eraser'||CD.tool==='move'&&!it) CD.tool='pen'; cadBar(); cadPal(true); },
  size(el){ CD.size=+el.dataset.v; cadBar(); cadPal(false); },
  undo(){ cadUndo(false); }, redo(){ cadUndo(true); },
  prev(){ cadGo(CD.pi-1); }, next(){ cadGo(CD.pi+1); }, goto(el){ cadGo(+el.dataset.v); },
  newpage(){ const c=cadOf(CD.sid), p=cadNewPage(CD.sid,cadPage()?.bg==='capa'? 'caligrafia' : cadPage().bg); c.pages.splice(CD.pi+1,0,p.id); cadSave(); cadGo(CD.pi+1); toast('Página nova'); },
  delpage(){ const c=cadOf(CD.sid), p=cadPage(); if (!CD.pi||!confirm('Apagar esta página do caderno?')) return; c.pages=c.pages.filter(x=>x!==p.id); delete DB.cadp[p.id]; cadSave(); cadGo(CD.pi-1); },
  pages(){ cadPagesSheet(); }, sheetx(){ cadSheet(''); },
  bg(el){ const p=cadPage(); cadPush(p); p.bg=el.dataset.v; cadSave(); cadPaintAll(); cadPagesSheet(); },
  cover(){ if (CD.pi!==0) cadGo(0); cadCoverSheet('cor'); }, ctab(el){ cadCoverSheet(el.dataset.v); },
  cpal(el){ cadOf(CD.sid).cover.pal=el.dataset.v; cadSave(); cadPaintAll(); cadCoverSheet('cor'); },
  cpat(el){ cadOf(CD.sid).cover.pat=el.dataset.v; cadSave(); cadPaintAll(); cadCoverSheet('cor'); },
  cspine(el){ cadOf(CD.sid).cover.spine=el.dataset.v==='1'; cadSave(); cadPaintAll(); cadCoverSheet('cor'); },
  clabel(el){ cadOf(CD.sid).cover.label=el.dataset.v; cadSave(); cadPaintAll(); cadCoverSheet('etq'); },
  cfont(el){ cadOf(CD.sid).cover.font=el.dataset.v; cadSave(); cadPaintAll(); cadCoverSheet('etq'); },
  cname(el){ cadOf(CD.sid).cover.name=el.dataset.v==='1'; cadSave(); cadPaintAll(); cadCoverSheet('etq'); },
  ctitle(el){ cadOf(CD.sid).cover.title=el.dataset.v; cadSave(); cadPaintAll(); cadCoverSheet('etq'); },
  chero(el){ const p=cadPage(), old=p.items.find(i=>i.hero); if (old){ cadPush(p); old.k=el.dataset.v; old.t='emo'; cadSave(); cadPaintAll(); cadCoverSheet('heroi'); return; } cadSheet(''); cadAdd({t:'emo',k:el.dataset.v,w:340,h:340,x:330,y:250,r:Math.round(Math.random()*14-7),hero:true}); },
  addemo(el){ cadSheet(''); cadAdd({t:'emo',k:el.dataset.v,w:200,h:200,r:Math.round(Math.random()*16-8)}); },
  kage(el){ S.kpage=el.dataset.v; cadInsertSheet('act'); },
  kage2(el){ S.kpage=el.dataset.v; cadInsertSheet('kaulas'); },
  cdeck(el){ const d=kdeckById(el.dataset.v), c=cadOf(CD.sid), P=kdeckPages(d), at=CD.pi+1; cadSheet('');
    const ids=P.map((_,k)=>{ const pg=cadNewPage(CD.sid,'branca'); pg.items.push({id:'i'+uid(),t:'act',kind:'kdeck',theme:d.id,seed:k,x:0,y:0,w:CAD_W,h:CAD_H,r:0}); return pg.id; });
    c.pages.splice(at,0,...ids); if (isT()) kidsUse(CD.sid,{k:'kaula',t:d.id},true); cadSave(); cadGo(at); toast(`${P.length} páginas coladas`); },
  cbook(el){ S.cbook=el.dataset.v; if (!S.cbook){ cadInsertSheet('livro'); return; } kbookLoad(S.cbook).then(()=>cadInsertSheet('livro')).catch(()=>toast('Não consegui abrir o livro.')); },
  cbpage(el){ const b=kbookById(S.cbook), p=KBOOK[S.cbook].p[+el.dataset.v]; cadSheet(''); const im=new Image(); im.onload=()=>{ const k=Math.min(860/im.width,700/im.height); cadAdd({t:'img',src:'data:image/jpeg;base64,'+p.i,w:im.width*k,h:im.height*k,x:(CAD_W-im.width*k)/2,y:60}); if (p.t) cadAdd({t:'text',txt:p.t,w:860,h:120,x:70,y:im.height*k+90,fs:44,c:'#221c1e'}); if (isT()) kidsUse(CD.sid,{k:'livro',t:S.cbook},true); }; im.src='data:image/jpeg;base64,'+p.i; },
  cfile(el){ const f=kfileById(el.dataset.v); cadSheet(''); toast('Abrindo o material…'); kfilePages(f).then(D=>{ if (D.n===1) return kfilePageImg(f,0,1400).then(src=>CAD_ACT.cfpage({dataset:{f:f.id,i:0,src}}));
    cadSheet(`<div class="cd-tabs"><b>${esc(f.name)}: toque numa página</b><button class="cd-x" data-cd="sheetx" aria-label="Fechar">✕</button></div><div class="cd-pgrid">${[...Array(D.n)].map((_,i)=>`<button class="cd-pthumb" data-cd="cfpage" data-f="${f.id}" data-i="${i}"><span class="kf-ph">${i+1}</span><small>Página ${i+1}</small></button>`).join('')}</div>`); }).catch(()=>toast('Não encontrei este arquivo.')); },
  cfpage(el){ const f=kfileById(el.dataset.f); cadSheet(''); (el.dataset.src? Promise.resolve(el.dataset.src) : kfilePageImg(f,+el.dataset.i,1400)).then(src=>{ const im=new Image(); im.onload=()=>{ const k=Math.min(900/im.width,1300/im.height), data=src.startsWith('blob:')? kfToData(im) : src; cadAdd({t:'img',src:data,w:im.width*k,h:im.height*k,x:(CAD_W-im.width*k)/2,y:(CAD_H-im.height*k)/2}); if (isT()) kidsUse(CD.sid,{k:'file',t:f.id},true); }; im.src=src; }); },
  finger(){ if (CD.penSeen){ CD.penSeen=false; CD.finger=true; toast('O dedo voltou a escrever.'); } else CD.finger=!CD.finger; cadBar(); },
  fit(){ cadFit(Math.abs(CD.cam.z-Math.min(CD.el.view.clientWidth/(CAD_W+60),CD.el.view.clientHeight/(CAD_H+60)))<.01? 'width' : 'page'); cadPaintAll(); },
  insert(){ cadInsertSheet('bichos'); }, itab(el){ cadInsertSheet(el.dataset.v); },
  kth(el){ S.kth=el.dataset.v; cadInsertSheet('act'); },
  addstk(el){ cadSheet(''); cadAdd({t:'sticker',k:el.dataset.v,w:220,h:220,r:Math.round(Math.random()*16-8)}); },
  addact(el){ cadSheet(''); const seed=Math.floor(Math.random()*999); cadAdd({t:'act',kind:el.dataset.k,theme:el.dataset.t,seed,w:900,h:1272,x:50,y:70}); if (isT()&&typeof kidsUse==='function') kidsUse(CD.sid,{k:el.dataset.k,t:el.dataset.t,s:seed},true); toast('Atividade colada e ligada à aula. Use “Mover” para ajustar.'); },
};
function cadPhoto(file){ const img=new Image(), url=URL.createObjectURL(file);
  img.onload=()=>{ const m=1400, k=Math.min(1,m/Math.max(img.width,img.height)), c=document.createElement('canvas'); c.width=Math.round(img.width*k); c.height=Math.round(img.height*k);
    c.getContext('2d').drawImage(img,0,0,c.width,c.height); URL.revokeObjectURL(url); const src=c.toDataURL('image/jpeg',.82), w=Math.min(800,c.width), h=w*c.height/c.width;
    cadSheet(''); cadAdd({t:'img',src,w,h}); };
  img.onerror=()=>toast('Não consegui abrir esta imagem.'); img.src=url; }

/* ---------- montar e desmontar ---------- */
function cadMount(sid,ro){ if (CD.el&&CD.sid===sid) return; cadUnmount(); cadOf(sid);
  Object.assign(CD,{sid,pi:Math.min(1,cadPages(sid).length-1),ro:!!ro,sel:null,act:null,gest:null}); CD.ptr.clear();
  const root=document.createElement('div'); root.className='cd'; root.id='cd';
  root.innerHTML=`<div class="cd-bar"></div><div class="cd-view"><div class="cd-world"></div><canvas class="cd-ink"></canvas><canvas class="cd-live"></canvas><div class="cd-ui"></div></div><div class="cd-sheet"></div>`;
  document.body.appendChild(root); document.body.classList.add('cd-on');
  const q=s=>root.querySelector(s);
  CD.el={root,bar:q('.cd-bar'),view:q('.cd-view'),world:q('.cd-world'),ink:q('.cd-ink'),live:q('.cd-live'),ui:q('.cd-ui'),sheet:q('.cd-sheet')};
  try { CD.el.live.getContext('2d',{desynchronized:true}); } catch {}
  const v=CD.el.view;
  v.addEventListener('pointerdown',cadDown); v.addEventListener('pointermove',cadMove); v.addEventListener('pointerup',cadUp); v.addEventListener('pointercancel',cadUp); v.addEventListener('lostpointercapture',e=>{ if (CD.ptr.has(e.pointerId)) cadUp(e); });
  v.addEventListener('wheel',cadWheel,{passive:false}); v.addEventListener('contextmenu',e=>e.preventDefault());
  root.addEventListener('click',e=>{ const b=e.target.closest('[data-cd]'); if (b&&!b.disabled) CAD_ACT[b.dataset.cd]?.(b); });
  root.addEventListener('change',e=>{ if (e.target.dataset.cdfile&&e.target.files[0]) cadPhoto(e.target.files[0]); });
  root.addEventListener('input',e=>{ if (e.target.dataset.cdtitle!=null){ cadOf(CD.sid).cover.title=e.target.value; cadSave(); cadPageDom(); } if (e.target.dataset.cdsub!=null){ cadOf(CD.sid).cover.sub=e.target.value; cadSave(); cadPageDom(); } });
  CD.onResize=()=>{ cadClamp(); cadPaintAll(); }; window.addEventListener('resize',CD.onResize);
  CD.onGesture=e=>e.preventDefault(); document.addEventListener('gesturestart',CD.onGesture);
  CD.onKey=e=>{ if (e.target.closest?.('input,textarea')) return; if ((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='z'){ e.preventDefault(); cadUndo(e.shiftKey); } if ((e.key==='Delete'||e.key==='Backspace')&&CD.sel){ const p=cadPage(); cadPush(p); p.items=p.items.filter(x=>x.id!==CD.sel); CD.sel=null; cadSave(); cadPaintAll(); } };
  document.addEventListener('keydown',CD.onKey);
  cadBar(); requestAnimationFrame(()=>{ cadFit(CD.pi? 'width' : 'page'); cadPaintAll(); }); if (typeof kidsAudioLoad==='function') kidsAudioLoad();
  if (document.fonts?.load) document.fonts.load('700 40px Andika').then(()=>cadPageDom()).catch(()=>{}); }
function cadUnmount(){ if (!CD.el) return; clearTimeout(CD.saveT); save(); window.removeEventListener('resize',CD.onResize); document.removeEventListener('gesturestart',CD.onGesture); document.removeEventListener('keydown',CD.onKey);
  CD.el.root.remove(); CD.el=null; CD.sid=null; document.body.classList.remove('cd-on'); }
/* rota #caderno-<aluno>: o caderno ocupa a tela; a página do Sotaque fica por baixo */
function viewCaderno(sid){ const s=user(sid); if (!s) return '<div class="panel"><p>Caderno não encontrado.</p></div>';
  setTimeout(()=>cadMount(sid,!isT()),0); return `<div class="panel"><p class="meta">Abrindo o caderno de ${esc(s.name.split(' ')[0])}…</p></div>`; }
window.addEventListener('hashchange',()=>{ if (!/^#caderno-/.test(location.hash)) cadUnmount(); });
/* painel no caderno do aluno */
function cadPanel(s){ const c=DB.cad?.[s.id], P=c? cadPages(s.id) : [];
  const cover=P[0], last=P[P.length-1];
  return `<section class="panel"><div class="panel-h"><h2>Caderno digital</h2>${P.length? `<span class="muted" style="font-size:13px">${P.length-1} ${P.length-1===1? 'página' : 'páginas'}</span>` : ''}</div>
    <a class="cd-card" href="#caderno-${s.id}">${cover? `<svg viewBox="0 0 ${CAD_W} ${CAD_H}">${cadSvgInner(cover)}</svg>` : `<span class="cd-new">${CDI.pen}</span>`}<span><b>${isT()? (c? 'Abrir o caderno' : 'Criar o caderno') : 'Ver o caderno'}</b><small>${isT()? 'Escrevam juntos com a caneta ou o dedo, colem figurinhas e atividades.' : 'O que vocês fizeram nas aulas, página por página.'}</small></span></a></section>`; }
