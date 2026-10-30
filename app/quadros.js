/* =========================================================
   Quadros Winer · gerador de ilustrações em SVG
   Formas chapadas, uma paleta por imagem, granulado de papel.
   quadro(paleta, cena, semente, {w, h, frame, focus, align})
   ========================================================= */

const PAL = {
  tomate:   {nome:'Tomate',    bg:'#f6d9cf', a:'#e0563b', b:'#f3a58f', c:'#a8351f'},
  mostarda: {nome:'Mostarda',  bg:'#f4ead3', a:'#d99a2b', b:'#efc96e', c:'#9a6a14'},
  oliva:    {nome:'Oliva',     bg:'#e4e8d2', a:'#7d8f3e', b:'#bac77f', c:'#4f5e22'},
  menta:    {nome:'Menta',     bg:'#d8eedf', a:'#3a9563', b:'#9ad3ae', c:'#1f6440'},
  petroleo: {nome:'Petróleo',  bg:'#d3e8e5', a:'#2b8279', b:'#8cc7bf', c:'#175650'},
  ceu:      {nome:'Céu',       bg:'#dce7f3', a:'#3f74b8', b:'#9dbde4', c:'#24497e'},
  lavanda:  {nome:'Lavanda',   bg:'#e5e1f3', a:'#6a5cb3', b:'#b3aae0', c:'#443a85'},
  ameixa:   {nome:'Ameixa',    bg:'#ecd8e7', a:'#8e3f7c', b:'#cf9ac2', c:'#5e2452'},
  rosa:     {nome:'Rosa',      bg:'#f6dde1', a:'#d25a74', b:'#eea3b2', c:'#9c3550'},
  terracota:{nome:'Terracota', bg:'#f1dfd2', a:'#b85f36', b:'#e2a684', c:'#7e3c1e'},
};
const PKEYS = Object.keys(PAL);
const CREAM = '#fffaf2';

/* ---------- aleatoriedade com semente ---------- */
function hashStr(s){ let h=2166136261; for (let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; }
function rng(seed){
  let a=seed>>>0;
  const r=()=>{ a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; };
  return { r, rr:(x,y)=>x+(y-x)*r(), ri:(x,y)=>Math.floor(x+(y-x+1)*r()), pick:arr=>arr[Math.floor(r()*arr.length)] };
}
const f = n => Math.round(n*10)/10;
const clamp = (v,a,b) => Math.max(a,Math.min(b,v));
function mix(hex,to,k){
  const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)), A=p(hex), B=p(to);
  return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*k).toString(16).padStart(2,'0')).join('');
}

/* ---------- peças ---------- */
const bump = u => Math.abs(u)>=1 ? 0 : (Math.cos(Math.PI*u)+1)/2;
/* morro: linha de base + corcovas suaves [x do pico, altura, meia-largura] */
function hill(W,H,R,base,bumps,col){
  if (W>H*2){ const n=Math.floor(W/(H*1.2)); bumps=bumps.concat(Array.from({length:n},(_,i)=>[W*(i+.5)/n+R.rr(-H*.3,H*.3),H*R.rr(.025,.06),H*R.rr(.5,.8)])); }
  const yAt=x=>base-bumps.reduce((s,[px,h,sp])=>s+h*bump((x-px)/sp),0);
  const n=Math.max(48,Math.round(W/9)); let d=`M0 ${H}L0 ${f(yAt(0))}`;
  for (let i=1;i<=n;i++){ const x=W*i/n; d+=`L${f(x)} ${f(yAt(x))}`; }
  return { svg:`<path d="${d}L${W} ${H}Z" fill="${col}"/>`, yAt };
}
const circle=(x,y,r,col)=>`<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${col}"/>`;
const ring=(x,y,r,col,w)=>`<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="none" stroke="${col}" stroke-width="${f(w)}"/>`;
const bar=(x,y,w,h,col)=>`<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" rx="${f(h/2)}" fill="${col}"/>`;
function star(x,y,r,col){
  return `<path d="M${f(x)} ${f(y-r)}Q${f(x+r*.12)} ${f(y-r*.12)} ${f(x+r)} ${f(y)}Q${f(x+r*.12)} ${f(y+r*.12)} ${f(x)} ${f(y+r)}Q${f(x-r*.12)} ${f(y+r*.12)} ${f(x-r)} ${f(y)}Q${f(x-r*.12)} ${f(y-r*.12)} ${f(x)} ${f(y-r)}Z" style="fill:${col}"/>`;
}
function birds(R,n,x,y,s,col){
  let o='';
  for (let i=0;i<n;i++){
    const bx=x+i*s*6.5+R.rr(-s*.8,s*.8), by=y+R.rr(-s*1.8,s*1.8), k=s*R.rr(.8,1.15);
    o+=`<path d="M${f(bx)} ${f(by)}q${f(k)} ${f(-k)} ${f(2*k)} 0q${f(k)} ${f(-k)} ${f(2*k)} 0" fill="none" stroke="${col}" stroke-width="${f(Math.max(1.2,k*.5))}" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
  return o;
}
function cloud(x,y,s,col){
  return `<g fill="${col}"><circle cx="${f(x)}" cy="${f(y)}" r="${f(s)}"/><circle cx="${f(x+s*1.35)}" cy="${f(y-s*.6)}" r="${f(s*1.3)}"/><circle cx="${f(x+s*2.7)}" cy="${f(y+s*.05)}" r="${f(s*.95)}"/><rect x="${f(x-s*1.5)}" y="${f(y-s*.05)}" width="${f(s*5.4)}" height="${f(s*1.05)}" rx="${f(s*.52)}"/></g>`;
}
const cypress=(x,yb,h,col)=>{ const w=h*.3; return `<rect x="${f(x-w/2)}" y="${f(yb-h)}" width="${f(w)}" height="${f(h*1.1)}" rx="${f(w/2)}" fill="${col}"/>`; };
function house(x,yb,s,col,win){
  return `<path d="M${f(x-s)} ${f(yb+s*.3)}L${f(x-s)} ${f(yb-s*1.05)}L${f(x)} ${f(yb-s*1.85)}L${f(x+s)} ${f(yb-s*1.05)}L${f(x+s)} ${f(yb+s*.3)}Z" fill="${col}"/><rect x="${f(x-s*.3)}" y="${f(yb-s*.95)}" width="${f(s*.6)}" height="${f(s*.55)}" rx="${f(s*.08)}" fill="${win}"/>`;
}
function wave(W,H,y,amp,lam,ph,col){
  let x=-lam+ph, d=`M${f(x)} ${f(y)}`;
  while (x<W){ d+=`Q${f(x+lam/4)} ${f(y-amp)} ${f(x+lam/2)} ${f(y)}Q${f(x+3*lam/4)} ${f(y+amp)} ${f(x+lam)} ${f(y)}`; x+=lam; }
  return `<path d="${d}L${f(x)} ${H}L${f(-lam)} ${H}Z" fill="${col}"/>`;
}
function leaf(x,y,len,ang,col){
  return `<path transform="translate(${f(x)} ${f(y)}) rotate(${f(ang)})" d="M0 0Q${f(len*.45)} ${f(-len*.34)} ${f(len)} 0Q${f(len*.45)} ${f(len*.34)} 0 0Z" fill="${col}"/>`;
}

/* ---------- cenas ---------- */
const SCENES = {
  amanhecer:{ nome:'Amanhecer', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), sx=fx(), sy=H*R.rr(.6,.66), r=m*R.rr(.29,.34), side=sx>W/2?-1:1; let o='';
    const N=R.pick([14,16,18]);
    for (let i=0;i<N;i++){ const a=Math.PI+(i+.5)/N*Math.PI, r0=r*1.14, r1=r*(i%2?1.34:1.54);
      o+=`<line x1="${f(sx+Math.cos(a)*r0)}" y1="${f(sy+Math.sin(a)*r0)}" x2="${f(sx+Math.cos(a)*r1)}" y2="${f(sy+Math.sin(a)*r1)}" stroke="${p.b}" stroke-width="${f(m*.017)}" stroke-linecap="round"/>`; }
    o+=circle(sx,sy,r,p.a)+ring(sx,sy,r*.7,CREAM,m*.013);
    o+=cloud(clamp(sx-side*m*.95,W*.05,W*.78),H*R.rr(.14,.22),m*.042,CREAM);
    const back=hill(W,H,R,H*.77,[[sx+side*m*.52,H*.17,m*.62],[sx-side*m*.9,H*.07,m*.55]],p.b); o+=back.svg;
    const tx=sx+side*m*.52;
    [-1,0,1].forEach(k=>{ const x=tx+k*m*.075+R.rr(-m*.012,m*.012); o+=cypress(x,back.yAt(x)+m*.012,m*(k? R.rr(.09,.12) : R.rr(.13,.16)),p.c); });
    o+=hill(W,H,R,H*.92,[[sx-side*m*.4,H*.1,m*1.05]],p.c).svg;
    o+=birds(R,3,clamp(side>0? sx+r*1.7 : sx-r*1.7-m*.16,W*.04,W*.86),H*R.rr(.18,.28),m*.019,p.c);
    return o;
  }},
  noite:{ nome:'Noite', dark:true, draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), mx=fx(), my=H*R.rr(.24,.32), mr=m*R.rr(.105,.125), side=mx>W/2?-1:1;
    let o=`<rect width="${W}" height="${H}" fill="${p.c}"/>`;
    const n=Math.min(22,Math.round(R.rr(8,11)*Math.max(1,W/H/1.6)));
    for (let i=0;i<n;i++){
      let x,y,t=0; do { x=W*R.rr(.04,.96); y=H*R.rr(.07,.58); t++; } while (Math.hypot(x-mx,y-my)<mr*2.3 && t<30);
      o+= R.r()<.6 ? star(x,y,m*R.rr(.017,.032), R.r()<.55?CREAM:p.b) : circle(x,y,m*.007,p.b);
    }
    o+=circle(mx,my,mr,CREAM)+circle(mx+mr*.45,my-mr*.22,mr*.84,p.c);
    o+=hill(W,H,R,H*.8,[[mx+side*m*.15,H*.1,m*.7],[mx-side*m*.95,H*.13,m*.8]],p.a).svg;
    const front=hill(W,H,R,H*.95,[[mx+side*m*.6,H*.2,m*.62]],p.b); o+=front.svg;
    const hx=mx+side*m*.6;
    o+=house(hx,front.yAt(hx),m*.075,p.a,CREAM);
    [.15,.22].forEach((k,i)=>{ const x=hx+side*m*k; o+=cypress(x,front.yAt(x)+m*.01,m*(i? .14:.1),p.a); });
    return o;
  }},
  mar:{ nome:'Mar', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), s=m/200, sx=fx(), sy=H*R.rr(.29,.35), sr=m*R.rr(.14,.17), side=sx>W/2?-1:1, lam=m*R.rr(.2,.26); let o='';
    o+=circle(sx,sy,sr,p.a);
    o+=wave(W,H,H*.56,m*.012,lam,R.rr(0,lam),p.b);
    [1.15,.82,.52,.26].forEach((k,i)=>{ o+=bar(sx-sr*k,H*(.598+i*.026),sr*k*2,m*.012,CREAM); });
    const bx=clamp(sx+side*m*R.rr(.5,.7),W*.12,W*.88), y0=H*.6;
    o+=`<path d="M${f(bx-19*s)} ${f(y0-6*s)}L${f(bx+19*s)} ${f(y0-6*s)}L${f(bx+12*s)} ${f(y0+4*s)}L${f(bx-12*s)} ${f(y0+4*s)}Z" fill="${p.c}"/>`;
    o+=`<path d="M${f(bx+1*s)} ${f(y0-9*s)}L${f(bx+1*s)} ${f(y0-46*s)}L${f(bx+19*s)} ${f(y0-9*s)}Z" fill="${CREAM}"/>`;
    o+=`<path d="M${f(bx-2*s)} ${f(y0-9*s)}L${f(bx-2*s)} ${f(y0-34*s)}L${f(bx-15*s)} ${f(y0-9*s)}Z" fill="${p.a}"/>`;
    o+=wave(W,H,H*.7,m*.014,lam*1.1,R.rr(0,lam),p.a)+wave(W,H,H*.83,m*.016,lam*1.25,R.rr(0,lam),p.c);
    o+=birds(R,2,clamp(sx-side*m*.6,W*.05,W*.85),H*R.rr(.14,.22),m*.019,p.c);
    return o;
  }},
  livro:{ nome:'Livro', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), bx=fx(), side=R.r()<.5?-1:1; let o='';
    o+=circle(bx+side*m*R.rr(.16,.24),H*R.rr(.34,.4),m*R.rr(.2,.24),p.a);
    o+=hill(W,H,R,H*.86,[[bx,H*.1,m*.95],[bx-side*m*1.1,H*.05,m*.6]],p.b).svg;
    const top=H*.58, bot=H*.84, bw=m*.34, sag=m*.035;
    const pages=(dy,w,col)=>{ const t=top+dy, b=bot+dy; return `<path d="M${f(bx)} ${f(t+sag)}Q${f(bx-w*.5)} ${f(t-sag)} ${f(bx-w)} ${f(t)}L${f(bx-w)} ${f(b-sag)}Q${f(bx-w*.5)} ${f(b-sag*2)} ${f(bx)} ${f(b)}Q${f(bx+w*.5)} ${f(b-sag*2)} ${f(bx+w)} ${f(b-sag)}L${f(bx+w)} ${f(t)}Q${f(bx+w*.5)} ${f(t-sag)} ${f(bx)} ${f(t+sag)}Z" fill="${col}"/>`; };
    o+=pages(m*.028,bw*1.07,p.c)+pages(0,bw,CREAM);
    o+=`<path d="M${f(bx)} ${f(top+sag)}L${f(bx)} ${f(bot)}" stroke="${p.c}" stroke-width="${f(m*.008)}"/>`;
    for (let i=0;i<3;i++){ const y=top+(bot-top)*(.3+i*.18);
      [-1,1].forEach(sd=>{ o+=`<path d="M${f(bx+sd*bw*.17)} ${f(y+sag*.45)}Q${f(bx+sd*bw*.5)} ${f(y-sag*.55)} ${f(bx+sd*(i===2? .6 : .83)*bw)} ${f(y-sag*.1)}" fill="none" stroke="${p.b}" stroke-width="${f(m*.013)}" stroke-linecap="round"/>`; }); }
    o+=`<path d="M${f(bx+m*.03)} ${f(bot-m*.01)}L${f(bx+m*.03)} ${f(bot+m*.08)}L${f(bx+m*.045)} ${f(bot+m*.065)}L${f(bx+m*.06)} ${f(bot+m*.08)}L${f(bx+m*.06)} ${f(bot-m*.01)}Z" fill="${p.a}"/>`;
    o+=star(clamp(bx-side*m*.55,W*.06,W*.94),H*R.rr(.16,.26),m*.028,p.c)+star(clamp(bx-side*m*.38,W*.06,W*.94),H*R.rr(.34,.42),m*.017,p.c);
    return o;
  }},
  aviao:{ nome:'Avião de papel', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), px=fx(), py=H*R.rr(.3,.36), s=m*R.rr(.21,.24), ang=R.rr(-14,-6); let o='';
    o+=cloud(clamp(px-m*R.rr(.95,1.15),W*.04,W*.8),H*R.rr(.18,.26),m*.04,CREAM)+cloud(clamp(px+m*R.rr(.2,.35),W*.04,W*.84),H*R.rr(.6,.66),m*.03,CREAM);
    o+=hill(W,H,R,H*.9,[[px-m*.9,H*.07,m*.8],[px+m*.5,H*.05,m*.7]],p.b).svg;
    o+=hill(W,H,R,H*.97,[[px-m*.2,H*.06,m*1.1]],p.c).svg;
    const tx=px-s*.7, ty=py+s*.18;
    o+=`<path transform="rotate(${f(ang)} ${f(px)} ${f(py)})" d="M${f(tx)} ${f(ty)}C${f(tx-s*1.3)} ${f(ty+s*.55)} ${f(tx-s*1.05)} ${f(ty+s*1.6)} ${f(tx-s*1.85)} ${f(ty+s*1.35)}C${f(tx-s*2.6)} ${f(ty+s*1.1)} ${f(tx-s*2.25)} ${f(ty+s*.2)} ${f(tx-s*1.65)} ${f(ty+s*.6)}C${f(tx-s*1.1)} ${f(ty+s*1)} ${f(tx-s*2.3)} ${f(ty+s*2.05)} ${f(tx-s*4.2)} ${f(ty+s*1.85)}" fill="none" stroke="${p.c}" stroke-width="${f(m*.011)}" stroke-linecap="round" stroke-dasharray="${f(m*.028)} ${f(m*.03)}"/>`;
    o+=`<g transform="rotate(${f(ang)} ${f(px)} ${f(py)})"><path d="M${f(px+s)} ${f(py)}L${f(px-s*.95)} ${f(py-s*.44)}L${f(px-s*.3)} ${f(py+s*.05)}Z" fill="${p.a}"/><path d="M${f(px+s)} ${f(py)}L${f(px-s*.3)} ${f(py+s*.05)}L${f(px-s*.55)} ${f(py+s*.46)}Z" fill="${p.c}"/><path d="M${f(px+s)} ${f(py)}L${f(px-s*.3)} ${f(py+s*.05)}L${f(px-s*.1)} ${f(py+s*.17)}Z" fill="${CREAM}"/></g>`;
    o+=birds(R,2,clamp(px+m*.35,W*.05,W*.88),H*R.rr(.12,.2),m*.017,p.c);
    return o;
  }},
  conversa:{ nome:'Conversa', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), cy=H*.44; let o='';
    o+=circle(cx+m*.42,cy-m*.27,m*.07,p.b);
    o+=hill(W,H,R,H*.95,[[cx-m*.6,H*.06,m*.9],[cx+m*.7,H*.05,m*.7]],p.b).svg;
    const w1=m*.6, h1=m*.33, x1=cx-w1*.72, y1=cy-h1*.82;
    o+=`<rect x="${f(x1)}" y="${f(y1)}" width="${f(w1)}" height="${f(h1)}" rx="${f(h1*.42)}" fill="${p.a}"/><path d="M${f(x1+w1*.18)} ${f(y1+h1-2)}L${f(x1+w1*.1)} ${f(y1+h1*1.34)}L${f(x1+w1*.4)} ${f(y1+h1-2)}Z" fill="${p.a}"/>`;
    [-1,0,1].forEach(k=>{ o+=circle(x1+w1/2+k*h1*.3,y1+h1/2,h1*.085,CREAM); });
    const w2=m*.48, h2=m*.27, x2=cx-w2*.08, y2=cy-h1*.05;
    o+=`<rect x="${f(x2)}" y="${f(y2)}" width="${f(w2)}" height="${f(h2)}" rx="${f(h2*.42)}" fill="${p.c}"/><path d="M${f(x2+w2*.62)} ${f(y2+h2-2)}L${f(x2+w2*.9)} ${f(y2+h2*1.36)}L${f(x2+w2*.86)} ${f(y2+h2-2)}Z" fill="${p.c}"/>`;
    o+=bar(x2+w2*.2,y2+h2*.32,w2*.56,h2*.13,CREAM)+bar(x2+w2*.2,y2+h2*.56,w2*.34,h2*.13,p.b);
    o+=star(clamp(cx-m*.62,W*.05,W*.95),cy-m*.3,m*.024,p.a)+star(clamp(cx+m*.62,W*.05,W*.95),cy+m*.05,m*.018,p.c);
    return o;
  }},
  globo:{ nome:'Globo', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), gx=fx(), gy=H*.42, gr=m*.24, tilt=R.rr(-24,-14); let o='';
    o+=hill(W,H,R,H*.94,[[gx,H*.05,m*.9]],p.b).svg;
    const by=gy+gr*1.14;
    o+=`<rect x="${f(gx-m*.014)}" y="${f(by-2)}" width="${f(m*.028)}" height="${f(m*.1)}" fill="${p.c}"/>`+bar(gx-gr*.55,by+m*.09,gr*1.1,m*.036,p.c);
    o+=`<path transform="rotate(${f(tilt)} ${f(gx)} ${f(gy)})" d="M${f(gx)} ${f(gy-gr*1.14)}A${f(gr*1.14)} ${f(gr*1.14)} 0 0 1 ${f(gx)} ${f(gy+gr*1.14)}" fill="none" stroke="${p.c}" stroke-width="${f(m*.022)}" stroke-linecap="round"/>`;
    o+=`<clipPath id="${id}gl"><circle cx="${f(gx)}" cy="${f(gy)}" r="${f(gr)}"/></clipPath>`;
    o+=circle(gx,gy,gr,p.a);
    o+=`<g clip-path="url(#${id}gl)"><g transform="rotate(${f(tilt)} ${f(gx)} ${f(gy)})">`;
    o+=`<ellipse cx="${f(gx-gr*.35)}" cy="${f(gy-gr*.28)}" rx="${f(gr*.42)}" ry="${f(gr*.3)}" fill="${p.c}"/><ellipse cx="${f(gx+gr*.42)}" cy="${f(gy+gr*.3)}" rx="${f(gr*.32)}" ry="${f(gr*.46)}" fill="${p.c}"/><ellipse cx="${f(gx-gr*.5)}" cy="${f(gy+gr*.55)}" rx="${f(gr*.22)}" ry="${f(gr*.12)}" fill="${p.c}"/>`;
    o+=`<g fill="none" stroke="${p.b}" stroke-width="${f(m*.008)}"><ellipse cx="${f(gx)}" cy="${f(gy)}" rx="${f(gr*.45)}" ry="${f(gr)}"/><ellipse cx="${f(gx)}" cy="${f(gy)}" rx="${f(gr*.85)}" ry="${f(gr)}"/><line x1="${f(gx-gr)}" y1="${f(gy)}" x2="${f(gx+gr)}" y2="${f(gy)}"/></g></g></g>`;
    o+=star(clamp(gx-m*.45,W*.05,W*.95),gy-m*.2,m*.026,p.a)+star(clamp(gx+m*.48,W*.05,W*.95),gy-m*.3,m*.018,p.c)+star(clamp(gx+m*.4,W*.05,W*.95),gy+m*.12,m*.014,p.a);
    return o;
  }},
  paris:{ nome:'Paris', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), by=H*.86, ty=H*R.rr(.1,.14), th=by-ty, hw=m*R.rr(.16,.18), sd=cx>W/2?-1:1; let o='';
    o+=circle(cx-sd*m*R.rr(.14,.2),H*R.rr(.32,.4),m*R.rr(.16,.19),p.a);
    o+=hill(W,H,R,H*.8,[[cx+sd*m*.7,H*.08,m*.7]],p.b).svg;
    o+=`<path fill-rule="evenodd" fill="${p.c}" d="M${f(cx-hw)} ${f(by)}Q${f(cx-hw*.22)} ${f(by-th*.42)} ${f(cx-hw*.07)} ${f(ty+th*.1)}L${f(cx-m*.006)} ${f(ty)}L${f(cx+m*.006)} ${f(ty)}L${f(cx+hw*.07)} ${f(ty+th*.1)}Q${f(cx+hw*.22)} ${f(by-th*.42)} ${f(cx+hw)} ${f(by)}ZM${f(cx-hw*.6)} ${f(by)}A${f(hw*.6)} ${f(th*.16)} 0 0 1 ${f(cx+hw*.6)} ${f(by)}Z"/>`;
    o+=bar(cx-hw*.66,by-th*.31,hw*1.32,m*.024,p.c)+bar(cx-hw*.34,by-th*.6,hw*.68,m*.018,p.c);
    o+=`<rect x="${f(cx-m*.004)}" y="${f(ty-m*.045)}" width="${f(m*.008)}" height="${f(m*.05)}" fill="${p.c}"/>`;
    const front=hill(W,H,R,H*.92,[[cx-sd*m*.5,H*.05,m*.6]],p.c); o+=front.svg;
    [.42,.5].forEach((k,i)=>{ const x=cx+sd*m*k; o+=cypress(x,front.yAt(x)+m*.01,m*(i? .09:.12),p.c); });
    o+=birds(R,3,clamp(cx+sd*m*.4,W*.05,W*.85),H*R.rr(.16,.26),m*.018,p.c);
    return o;
  }},
  londres:{ nome:'Londres', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), tx=fx(), base=H*.88, tw=m*.115, th=m*.64, sd=tx>W/2?-1:1; let o='';
    o+=circle(tx+sd*m*.2,H*R.rr(.3,.36),m*R.rr(.15,.18),p.a);
    o+=hill(W,H,R,H*.82,[[tx-sd*m*.55,H*.08,m*.7]],p.b).svg;
    o+=`<rect x="${f(tx-tw/2)}" y="${f(base-th*.74)}" width="${f(tw)}" height="${f(th*.74+m*.05)}" fill="${p.c}"/>`;
    o+=`<rect x="${f(tx-tw*.64)}" y="${f(base-th*.93)}" width="${f(tw*1.28)}" height="${f(th*.21)}" rx="${f(m*.006)}" fill="${p.c}"/>`;
    o+=`<path d="M${f(tx-tw*.64)} ${f(base-th*.93+1)}L${f(tx)} ${f(base-th*1.17)}L${f(tx+tw*.64)} ${f(base-th*.93+1)}Z" fill="${p.c}"/>`;
    o+=`<rect x="${f(tx-m*.004)}" y="${f(base-th*1.29)}" width="${f(m*.008)}" height="${f(th*.14)}" fill="${p.c}"/>`;
    const cy=base-th*.825, cr=tw*.4;
    o+=circle(tx,cy,cr,CREAM)+`<path d="M${f(tx)} ${f(cy-cr*.62)}L${f(tx)} ${f(cy)}L${f(tx+cr*.45)} ${f(cy)}" fill="none" stroke="${p.c}" stroke-width="${f(m*.008)}" stroke-linecap="round" stroke-linejoin="round"/>`;
    for (let r=0;r<3;r++) [-1,1].forEach(c=>{ o+=bar(tx+c*tw*.22-m*.007,base-th*(.62-r*.17),m*.014,th*.1,p.b); });
    const front=hill(W,H,R,H*.93,[[tx,H*.05,m*.8]],p.c); o+=front.svg;
    o+=birds(R,3,clamp(tx-sd*m*.5,W*.05,W*.85),H*R.rr(.14,.24),m*.018,p.c);
    return o;
  }},
  uvas:{ nome:'Uvas', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(); let o='';
    o+=circle(cx,H+m*.2,m*.5,p.b);
    const P0=[cx-m*1.4,H*R.rr(.08,.14)], P1=[cx,H*R.rr(.36,.44)], P2=[cx+m*1.4,H*R.rr(.06,.12)];
    const q=t=>[(1-t)**2*P0[0]+2*(1-t)*t*P1[0]+t*t*P2[0],(1-t)**2*P0[1]+2*(1-t)*t*P1[1]+t*t*P2[1]];
    o+=`<path d="M${f(P0[0])} ${f(P0[1])}Q${f(P1[0])} ${f(P1[1])} ${f(P2[0])} ${f(P2[1])}" fill="none" stroke="${p.c}" stroke-width="${f(m*.024)}" stroke-linecap="round"/>`;
    [.2,.42,.58,.8].forEach((t,i)=>{ const [x,y]=q(t); o+=leaf(x,y,m*.13,(i%2? -35 : 215)+R.rr(-12,12),i%2?p.a:p.b); });
    [[R.rr(.33,.38),p.a,[4,3,3,2,1]],[R.rr(.62,.67),p.c,[3,3,2,1]]].forEach(([t,col,rows])=>{
      const [x,y]=q(t), stem=m*R.rr(.05,.08), br=m*.032;
      o+=`<path d="M${f(x)} ${f(y)}L${f(x)} ${f(y+stem)}" stroke="${p.c}" stroke-width="${f(m*.012)}" stroke-linecap="round"/>`;
      rows.forEach((k,j)=>{ const yy=y+stem+br+j*br*1.72; for (let i=0;i<k;i++) o+=circle(x-(k-1)*br*1.02+i*br*2.04,yy,br,col); });
      o+=circle(x-br*1.3,y+stem+br*.7,br*.32,CREAM);
    });
    return o;
  }},
  arcos:{ nome:'Arcos', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), base=H*.78, sw=m*.075, R1=m*R.rr(.4,.44), leg=m*R.rr(.04,.1), step=sw*1.18; let o='';
    const sd=R.r()<.5?-1:1;
    o+=circle(clamp(cx+sd*m*.62,W*.08,W*.92),H*R.rr(.2,.28),m*.065,p.a);
    [p.c,p.a,p.b].forEach((col,i)=>{ const r=R1-i*step;
      o+=`<path d="M${f(cx-r)} ${f(base)}L${f(cx-r)} ${f(base-leg)}A${f(r)} ${f(r)} 0 0 1 ${f(cx+r)} ${f(base-leg)}L${f(cx+r)} ${f(base)}" fill="none" stroke="${col}" stroke-width="${f(sw)}"/>`; });
    o+=circle(cx,base-leg-m*.04,m*.05,CREAM);
    o+=star(clamp(cx-sd*m*.6,W*.06,W*.94),H*R.rr(.16,.28),m*.028,p.c);
    o+=`<rect y="${f(base)}" width="${W}" height="${f(H*.07)}" fill="${p.b}"/><rect y="${f(base+H*.1)}" width="${W}" height="${f(H*.035)}" fill="${p.a}"/><rect y="${f(base+H*.165)}" width="${W}" height="${f(H)}" fill="${p.c}"/>`;
    return o;
  }},
  disco:{ nome:'Disco', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), cy=H*.48, r=m*R.rr(.32,.35); let o='';
    o+=hill(W,H,R,H*.96,[[cx-m*.7,H*.05,m*.8]],p.b).svg;
    o+=circle(cx,cy,r,p.c);
    [.84,.7,.56].forEach(k=>{ o+=ring(cx,cy,r*k,p.a,Math.max(1,m*.005)); });
    o+=circle(cx,cy,r*.34,p.a)+circle(cx,cy,r*.05,CREAM);
    o+=`<path d="M${f(cx-r*.36)} ${f(cy-r*.62)}A${f(r*.72)} ${f(r*.72)} 0 0 1 ${f(cx+r*.2)} ${f(cy-r*.7)}" fill="none" stroke="${CREAM}" stroke-width="${f(m*.012)}" stroke-linecap="round"/>`;
    const px=cx+r*1.12, py=cy-r*.9;
    o+=`<path d="M${f(px)} ${f(py)}L${f(cx+r*.98)} ${f(cy-r*.05)}L${f(cx+r*.6)} ${f(cy+r*.3)}" fill="none" stroke="${p.b}" stroke-width="${f(m*.017)}" stroke-linecap="round" stroke-linejoin="round"/>`+circle(px,py,m*.032,p.b);
    for (let i=0;i<3;i++) o+=star(clamp(cx-r-m*R.rr(.08,.22),W*.05,W),cy+m*R.rr(-.3,.25),m*R.rr(.018,.03),p.a);
    return o;
  }},
  estampa:{ nome:'Estampa', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), t=m*R.rr(.08,.11), k=R.pick(['listras','bolinhas','xadrez','escamas','ziguezague']); let pat='';
    if (k==='listras') pat=`<pattern id="${id}p" width="${f(t)}" height="${f(t)}" patternUnits="userSpaceOnUse" patternTransform="rotate(${R.pick([35,45,-35])})"><rect width="${f(t/2)}" height="${f(t)}" fill="${p.b}"/></pattern>`;
    if (k==='bolinhas') pat=`<pattern id="${id}p" width="${f(t)}" height="${f(t)}" patternUnits="userSpaceOnUse"><circle cx="${f(t/2)}" cy="${f(t/2)}" r="${f(t*.18)}" fill="${p.b}"/></pattern>`;
    if (k==='xadrez') pat=`<pattern id="${id}p" width="${f(t*2)}" height="${f(t*2)}" patternUnits="userSpaceOnUse"><rect width="${f(t)}" height="${f(t)}" fill="${p.b}"/><rect x="${f(t)}" y="${f(t)}" width="${f(t)}" height="${f(t)}" fill="${p.b}"/></pattern>`;
    if (k==='escamas') pat=`<pattern id="${id}p" width="${f(t)}" height="${f(t*.5)}" patternUnits="userSpaceOnUse"><g fill="${p.b}" stroke="${p.bg}" stroke-width="${f(t*.07)}"><circle cx="0" cy="0" r="${f(t/2)}"/><circle cx="${f(t)}" cy="0" r="${f(t/2)}"/><circle cx="${f(t/2)}" cy="${f(t*.5)}" r="${f(t/2)}"/></g></pattern>`;
    if (k==='ziguezague') pat=`<pattern id="${id}p" width="${f(t)}" height="${f(t*.6)}" patternUnits="userSpaceOnUse"><path d="M0 ${f(t*.45)}L${f(t/2)} ${f(t*.15)}L${f(t)} ${f(t*.45)}" fill="none" stroke="${p.b}" stroke-width="${f(t*.13)}" stroke-linecap="square"/></pattern>`;
    const cx=fx(), cy=H*R.rr(.44,.56), r=m*R.rr(.28,.33), ang=R.rr(0,Math.PI*2);
    return `<defs>${pat}</defs><rect width="${W}" height="${H}" fill="url(#${id}p)"/>`+circle(cx,cy,r,p.c)+circle(cx+Math.cos(ang)*r*.92,cy+Math.sin(ang)*r*.92,r*.3,p.a)+ring(cx,cy,r*.55,CREAM,m*.012);
  }},
};
const SKEYS = Object.keys(SCENES);

/* ---------- quadro: moldura + cena + granulado ---------- */
const QCACHE = new Map();
function quadro(pk, sk, seed, o={}){
  const W=o.w||320, H=o.h||220, frame=o.frame!==false, focus=o.focus||[.32,.68];
  const key=[pk,sk,seed,W,H,frame,focus].join('|');
  if (QCACHE.has(key)) return QCACHE.get(key);
  const id='q'+hashStr(key).toString(36), p=PAL[pk]||PAL.tomate, sc=SCENES[sk]||SCENES.amanhecer;
  const m=Math.min(W,H), pad=frame? Math.max(6,Math.round(m*.04)) : 0, rx=frame? Math.round(Math.min(28,m*.08)) : 0, iw=W-2*pad, ih=H-2*pad;
  const R=rng(seed*7919+hashStr(sk)), fx=()=>iw*R.rr(focus[0],focus[1]);
  const body=sc.draw(iw,ih,p,R,id,fx);
  const svg=`<svg class="quadro" viewBox="0 0 ${W} ${H}" preserveAspectRatio="${o.align||'xMidYMid'} slice" role="img" aria-label="Ilustração: ${sc.nome.toLowerCase()}, paleta ${p.nome.toLowerCase()}">
<defs><clipPath id="${id}c"><rect x="${pad}" y="${pad}" width="${iw}" height="${ih}" rx="${frame? Math.round(rx*.62) : 0}"/></clipPath>
<filter id="${id}g" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" seed="${seed%97}" stitchTiles="stitch"/><feColorMatrix type="matrix" values="1 0 0 0 0  1 0 0 0 0  1 0 0 0 0  0 0 0 0 .16"/></filter></defs>
${frame? `<rect width="${W}" height="${H}" rx="${rx}" fill="${mix(p.bg,'#ffffff',.55)}" style="opacity:var(--qframe-o,1)"/>` : ''}
<g clip-path="url(#${id}c)"><g transform="translate(${pad} ${pad})"><rect width="${iw}" height="${ih}" fill="${p.bg}"/>${body}<rect width="${iw}" height="${ih}" filter="url(#${id}g)"/></g></g></svg>`;
  QCACHE.set(key,svg);
  return svg;
}
