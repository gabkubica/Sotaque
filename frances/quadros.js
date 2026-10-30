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
  /* ---------- cenas para tarefas e marcos ---------- */
  fones:{ nome:'Fones', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), cy=H*.4, r=m*.25, cw=m*.12, ch=m*.22; let o='';
    o+=hill(W,H,R,H*.94,[[cx+m*.5,H*.05,m*.8]],p.b).svg;
    const ey=cy+r*.3+ch/2;
    [1,2,3].forEach(k=>[-1,1].forEach(sd=>{ const rr=m*(.05+k*.065), x=cx+sd*(r+cw*.5), a=.75;
      o+=`<path d="M${f(x+sd*rr*Math.cos(a))} ${f(ey-rr*Math.sin(a))}A${f(rr)} ${f(rr)} 0 0 ${sd>0?1:0} ${f(x+sd*rr*Math.cos(a))} ${f(ey+rr*Math.sin(a))}" fill="none" stroke="${k===2?CREAM:p.a}" stroke-width="${f(m*.016)}" stroke-linecap="round"/>`; }));
    o+=`<path d="M${f(cx-r)} ${f(cy+r*.4)}L${f(cx-r)} ${f(cy)}A${f(r)} ${f(r)} 0 0 1 ${f(cx+r)} ${f(cy)}L${f(cx+r)} ${f(cy+r*.4)}" fill="none" stroke="${p.c}" stroke-width="${f(m*.045)}" stroke-linecap="round"/>`;
    [-1,1].forEach(sd=>{ const x=cx+sd*r; o+=`<rect x="${f(x-cw/2)}" y="${f(cy+r*.3)}" width="${f(cw)}" height="${f(ch)}" rx="${f(cw*.48)}" fill="${p.a}"/><rect x="${f(x+(sd<0? cw*.12 : -cw*.42))}" y="${f(cy+r*.3+ch*.18)}" width="${f(cw*.3)}" height="${f(ch*.64)}" rx="${f(cw*.15)}" fill="${p.c}"/>`; });
    o+=star(clamp(cx-m*.6,W*.05,W*.95),H*.18,m*.026,p.c)+star(clamp(cx+m*.58,W*.05,W*.95),H*.14,m*.018,p.a);
    return o;
  }},
  lapis:{ nome:'Lápis', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), cy=H*.5, pw=m*.58, ph=m*.44, x0=cx-pw*.58, y0=cy-ph*.5, rot=R.rr(-8,-3); let o='';
    o+=circle(cx+m*.3,H*.26,m*.17,p.b);
    o+=`<g transform="rotate(${f(rot)} ${f(cx)} ${f(cy)})"><rect x="${f(x0)}" y="${f(y0)}" width="${f(pw)}" height="${f(ph)}" rx="${f(m*.025)}" fill="${CREAM}"/>`;
    for (let i=0;i<4;i++) o+=bar(x0+pw*.12,y0+ph*(.2+i*.19),pw*(i===3? .38 : R.rr(.6,.76)),m*.017,i===0? p.a : p.b);
    o+=`</g>`;
    const tx=x0+pw*.56, ty=y0+ph*.86, w=m*.075, L=m*.42;
    o+=`<g transform="translate(${f(tx)} ${f(ty)}) rotate(-40)"><path d="M0 0L${f(w*1.1)} ${f(-w/2)}L${f(w*1.1)} ${f(w/2)}Z" fill="${p.b}"/><path d="M0 0L${f(w*.4)} ${f(-w*.18)}L${f(w*.4)} ${f(w*.18)}Z" fill="${p.c}"/><rect x="${f(w*1.1)}" y="${f(-w/2)}" width="${f(L)}" height="${f(w)}" fill="${p.a}"/><rect x="${f(w*1.1)}" y="${f(-w*.12)}" width="${f(L)}" height="${f(w*.24)}" fill="${p.c}" opacity=".35"/><rect x="${f(w*1.1+L)}" y="${f(-w/2)}" width="${f(w*.4)}" height="${f(w)}" fill="${p.c}"/><rect x="${f(w*1.5+L-1)}" y="${f(-w/2)}" width="${f(w*.55)}" height="${f(w)}" rx="${f(w*.25)}" fill="${p.b}"/></g>`;
    o+=star(clamp(cx-m*.62,W*.05,W*.95),H*.2,m*.024,p.c);
    return o;
  }},
  xicara:{ nome:'Xícara', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), base=H*.8, cw=m*.36, ch=m*.28; let o='';
    o+=circle(cx-m*.34,H*.3,m*.15,p.b);
    o+=`<rect y="${f(base+m*.04)}" width="${W}" height="${f(H)}" fill="${p.b}"/>`;
    for (let k=-1;k<=1;k++){ const x=cx+k*cw*.22, h=m*.2; o+=`<path d="M${f(x)} ${f(base-ch-m*.06)}c${f(m*.05)} ${f(-h*.25)} ${f(-m*.05)} ${f(-h*.5)} 0 ${f(-h*.75)}" fill="none" stroke="${k? p.a : p.c}" stroke-width="${f(m*.02)}" stroke-linecap="round"/>`; }
    o+=`<ellipse cx="${f(cx)}" cy="${f(base+m*.035)}" rx="${f(cw*.85)}" ry="${f(m*.045)}" fill="${p.c}"/>`;
    o+=ring(cx+cw*.5,base-ch*.55,ch*.22,p.a,m*.04);
    o+=`<path d="M${f(cx-cw/2)} ${f(base-ch)}L${f(cx+cw/2)} ${f(base-ch)}L${f(cx+cw*.38)} ${f(base-m*.02)}Q${f(cx)} ${f(base+m*.02)} ${f(cx-cw*.38)} ${f(base-m*.02)}Z" fill="${p.a}"/>`;
    o+=`<ellipse cx="${f(cx)}" cy="${f(base-ch)}" rx="${f(cw/2)}" ry="${f(m*.04)}" fill="${p.c}"/>`+bar(cx-cw*.3,base-ch*.62,cw*.16,m*.024,CREAM);
    o+=star(clamp(cx+m*.55,W*.05,W*.95),H*.22,m*.024,p.c);
    return o;
  }},
  mala:{ nome:'Mala de viagem', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), base=H*.84, bw=m*.5, bh=m*.36; let o='';
    o+=cloud(clamp(cx-m*.9,W*.04,W*.8),H*R.rr(.16,.24),m*.04,CREAM)+cloud(clamp(cx+m*.45,W*.04,W*.84),H*R.rr(.12,.2),m*.03,CREAM);
    o+=hill(W,H,R,H*.88,[[cx+m*.7,H*.08,m*.8]],p.b).svg;
    o+=`<rect x="${f(cx-bw*.17)}" y="${f(base-bh-m*.085)}" width="${f(bw*.34)}" height="${f(m*.11)}" rx="${f(m*.04)}" fill="none" stroke="${p.c}" stroke-width="${f(m*.028)}"/>`;
    o+=`<rect x="${f(cx-bw/2)}" y="${f(base-bh)}" width="${f(bw)}" height="${f(bh)}" rx="${f(m*.05)}" fill="${p.a}"/>`;
    [-1,1].forEach(sd=>{ o+=`<rect x="${f(cx+sd*bw*.28-m*.02)}" y="${f(base-bh)}" width="${f(m*.04)}" height="${f(bh)}" fill="${p.c}"/>`; });
    o+=circle(cx+bw*.02,base-bh*.6,m*.055,p.b)+star(cx+bw*.02,base-bh*.6,m*.03,CREAM);
    o+=`<rect transform="rotate(-12 ${f(cx-bw*.39)} ${f(base-bh*.35)})" x="${f(cx-bw*.46)}" y="${f(base-bh*.42)}" width="${f(bw*.13)}" height="${f(bw*.1)}" rx="${f(m*.008)}" fill="${CREAM}"/>`;
    o+=`<rect y="${f(base)}" width="${W}" height="${f(H)}" fill="${p.c}"/>`;
    o+=birds(R,2,clamp(cx+m*.3,W*.05,W*.88),H*.3,m*.017,p.c);
    return o;
  }},
  relogio:{ nome:'Relógio', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), cy=H*.47, r=m*.27; let o='';
    o+=hill(W,H,R,H*.95,[[cx-m*.6,H*.06,m*.8]],p.b).svg;
    [-1,1].forEach(sd=>{ o+=`<line x1="${f(cx+sd*r*.55)}" y1="${f(cy+r*.8)}" x2="${f(cx+sd*r*.82)}" y2="${f(cy+r*1.12)}" stroke="${p.c}" stroke-width="${f(m*.035)}" stroke-linecap="round"/>`+circle(cx+sd*r*.72,cy-r*.86,m*.075,p.c); });
    o+=circle(cx,cy,r*1.12,p.a)+circle(cx,cy,r,CREAM);
    for (let i=0;i<12;i++){ const a=i/12*Math.PI*2, big=i%3===0, r0=r*(big? .74 : .82);
      o+=`<line x1="${f(cx+Math.cos(a)*r0)}" y1="${f(cy+Math.sin(a)*r0)}" x2="${f(cx+Math.cos(a)*r*.9)}" y2="${f(cy+Math.sin(a)*r*.9)}" stroke="${big? p.c : p.b}" stroke-width="${f(m*(big? .02 : .012))}" stroke-linecap="round"/>`; }
    const ah=R.rr(0,Math.PI*2), am=R.rr(0,Math.PI*2);
    o+=`<line x1="${f(cx)}" y1="${f(cy)}" x2="${f(cx+Math.cos(ah)*r*.45)}" y2="${f(cy+Math.sin(ah)*r*.45)}" stroke="${p.c}" stroke-width="${f(m*.032)}" stroke-linecap="round"/><line x1="${f(cx)}" y1="${f(cy)}" x2="${f(cx+Math.cos(am)*r*.68)}" y2="${f(cy+Math.sin(am)*r*.68)}" stroke="${p.a}" stroke-width="${f(m*.02)}" stroke-linecap="round"/>`+circle(cx,cy,m*.025,p.c);
    o+=star(clamp(cx+m*.55,W*.05,W*.95),H*.2,m*.026,p.c)+star(clamp(cx-m*.55,W*.05,W*.95),H*.3,m*.018,p.a);
    return o;
  }},
  chuva:{ nome:'Chuva', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), cy=H*.48, r=m*.3, sw=r*.5; let o='';
    o+=cloud(clamp(cx-m*.55,W*.04,W*.8),H*.12,m*.05,CREAM)+cloud(clamp(cx+m*.25,W*.04,W*.84),H*.08,m*.04,CREAM);
    const n=Math.min(40,Math.round(14*Math.max(1,W/H/1.4)));
    for (let i=0;i<n;i++){ let x,y,t=0; do { x=W*R.r(); y=H*R.rr(.22,.9); t++; } while (Math.abs(x-cx)<r*1.1&&y<cy+r*1.1&&t<20);
      o+=`<line x1="${f(x)}" y1="${f(y)}" x2="${f(x-m*.012)}" y2="${f(y+m*.05)}" stroke="${p.b}" stroke-width="${f(m*.013)}" stroke-linecap="round"/>`; }
    o+=`<ellipse cx="${f(cx+m*.06)}" cy="${f(H*.92)}" rx="${f(m*.3)}" ry="${f(m*.04)}" fill="${p.b}"/>`;
    o+=`<path d="M${f(cx)} ${f(cy)}L${f(cx)} ${f(cy+r*.95)}A${f(r*.13)} ${f(r*.13)} 0 0 1 ${f(cx-r*.26)} ${f(cy+r*.95)}" fill="none" stroke="${p.c}" stroke-width="${f(m*.028)}" stroke-linecap="round"/>`;
    let d=`M${f(cx-r)} ${f(cy)}A${f(r)} ${f(r)} 0 0 1 ${f(cx+r)} ${f(cy)}`;
    for (let k=0;k<4;k++){ const x=cx+r-(k+1)*sw; d+=`Q${f(x+sw/2)} ${f(cy-m*.06)} ${f(x)} ${f(cy)}`; }
    o+=`<path d="${d}Z" fill="${p.a}"/>`;
    [-1,1].forEach(sd=>{ o+=`<path d="M${f(cx)} ${f(cy-r)}Q${f(cx+sd*r*.42)} ${f(cy-r*.45)} ${f(cx+sd*r*.5)} ${f(cy)}" fill="none" stroke="${p.c}" stroke-width="${f(m*.012)}"/>`; });
    o+=`<line x1="${f(cx)}" y1="${f(cy-r)}" x2="${f(cx)}" y2="${f(cy-r-m*.05)}" stroke="${p.c}" stroke-width="${f(m*.022)}" stroke-linecap="round"/>`;
    return o;
  }},
  casa:{ nome:'Casinhas', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(); let o='';
    o+=circle(cx+m*R.rr(.25,.4),H*.28,m*.14,p.a);
    o+=hill(W,H,R,H*.68,[[cx-m*.6,H*.1,m*.7]],p.b).svg;
    const front=hill(W,H,R,H*.86,[[cx,H*.08,m*.9]],p.b); o+=front.svg;
    [[-.34,.11,p.c],[-.1,.16,p.a],[.15,.13,p.c],[.36,.1,p.a]].forEach(([k,sz,col])=>{ const x=cx+k*m; o+=house(x,front.yAt(x)+m*.02,m*sz,col,CREAM); });
    [-.5,.5].forEach((k,i)=>{ const x=cx+k*m; o+=cypress(x,front.yAt(x)+m*.01,m*(i? .2 : .26),p.c); });
    o+=`<rect y="${f(H*.93)}" width="${W}" height="${f(H)}" fill="${p.c}"/>`;
    o+=birds(R,3,clamp(cx-m*.5,W*.04,W*.85),H*.18,m*.018,p.c);
    return o;
  }},
  cidade:{ nome:'Cidade', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), base=H*.84; let o='';
    o+=circle(clamp(cx+m*.3,W*.1,W*.9),H*.3,m*.16,p.b);
    o+=cloud(clamp(cx-m*.7,W*.04,W*.8),H*.16,m*.035,CREAM);
    let x=-m*.05, i=0;
    while (x<W){ const w=m*R.rr(.11,.18), near=bump((x+w/2-cx)/(m*.9)), h=m*(.16+.42*near*R.rr(.6,1)+R.rr(0,.08)), col=i%2? p.c : p.a;
      o+=`<rect x="${f(x)}" y="${f(base-h)}" width="${f(w-m*.012)}" height="${f(h+m*.02)}" fill="${col}"/>`;
      if (R.r()<.3) o+=`<path d="M${f(x)} ${f(base-h+1)}L${f(x+(w-m*.012)/2)} ${f(base-h-m*.06)}L${f(x+w-m*.012)} ${f(base-h+1)}Z" fill="${col}"/>`;
      const cols=Math.max(1,Math.floor((w-m*.03)/(m*.045))), rows=Math.floor((h-m*.05)/(m*.07));
      for (let r=0;r<rows;r++) for (let c=0;c<cols;c++) if (R.r()<.55) o+=`<rect x="${f(x+m*.022+c*m*.045)}" y="${f(base-h+m*.04+r*m*.07)}" width="${f(m*.02)}" height="${f(m*.03)}" fill="${R.r()<.6? CREAM : p.b}"/>`;
      x+=w; i++; }
    o+=`<rect y="${f(base)}" width="${W}" height="${f(H)}" fill="${p.b}"/>`;
    o+=birds(R,2,clamp(cx-m*.2,W*.04,W*.86),H*.12,m*.016,p.c);
    return o;
  }},
  lampada:{ nome:'Lâmpada', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), cy=H*.38, r=m*.19; let o='';
    o+=hill(W,H,R,H*.95,[[cx+m*.6,H*.06,m*.8]],p.b).svg;
    for (let i=0;i<11;i++){ const a=Math.PI*(.8+i/10*1.4); o+=`<line x1="${f(cx+Math.cos(a)*r*1.35)}" y1="${f(cy+Math.sin(a)*r*1.35)}" x2="${f(cx+Math.cos(a)*r*(i%2? 1.55 : 1.72))}" y2="${f(cy+Math.sin(a)*r*(i%2? 1.55 : 1.72))}" stroke="${p.b}" stroke-width="${f(m*.018)}" stroke-linecap="round"/>`; }
    o+=circle(cx,cy,r,p.a)+`<path d="M${f(cx-r*.62)} ${f(cy+r*.7)}L${f(cx-r*.42)} ${f(cy+r*1.25)}L${f(cx+r*.42)} ${f(cy+r*1.25)}L${f(cx+r*.62)} ${f(cy+r*.7)}Z" fill="${p.a}"/>`;
    [0,1,2].forEach(k=>{ o+=bar(cx-r*.44+k*r*.04,cy+r*(1.28+k*.2),r*(.88-k*.08),r*.15,p.c); });
    o+=`<path d="M${f(cx-r*.3)} ${f(cy+r*.95)}L${f(cx-r*.22)} ${f(cy+r*.05)}L${f(cx-r*.08)} ${f(cy+r*.3)}L${f(cx+r*.08)} ${f(cy+r*.05)}L${f(cx+r*.22)} ${f(cy+r*.3)}L${f(cx+r*.3)} ${f(cy+r*.95)}" fill="none" stroke="${CREAM}" stroke-width="${f(m*.014)}" stroke-linecap="round" stroke-linejoin="round"/>`;
    o+=`<path d="M${f(cx-r*.68)} ${f(cy-r*.1)}A${f(r*.7)} ${f(r*.7)} 0 0 1 ${f(cx-r*.2)} ${f(cy-r*.66)}" fill="none" stroke="${CREAM}" stroke-width="${f(m*.016)}" stroke-linecap="round"/>`;
    o+=star(clamp(cx-m*.55,W*.05,W*.95),H*.2,m*.024,p.c)+star(clamp(cx+m*.52,W*.05,W*.95),H*.5,m*.018,p.c);
    return o;
  }},
  microfone:{ nome:'Microfone', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), cy=H*.36, hw=m*.1, hh=m*.16; let o='';
    o+=circle(cx+m*.26,cy-m*.02,m*.22,p.b);
    [1,2,3].forEach(k=>[-1,1].forEach(sd=>{ const rr=m*(.1+k*.06), x=cx+sd*hw*.6, a=.7;
      o+=`<path d="M${f(x+sd*rr*Math.cos(a))} ${f(cy-rr*Math.sin(a))}A${f(rr)} ${f(rr)} 0 0 ${sd>0?1:0} ${f(x+sd*rr*Math.cos(a))} ${f(cy+rr*Math.sin(a))}" fill="none" stroke="${k===2? CREAM : p.a}" stroke-width="${f(m*.014)}" stroke-linecap="round"/>`; }));
    o+=`<path d="M${f(cx-hw*1.5)} ${f(cy+hh*.2)}A${f(hw*1.5)} ${f(hw*1.6)} 0 0 0 ${f(cx+hw*1.5)} ${f(cy+hh*.2)}" fill="none" stroke="${p.c}" stroke-width="${f(m*.026)}" stroke-linecap="round"/>`;
    o+=`<line x1="${f(cx)}" y1="${f(cy+hh*.2+hw*1.6)}" x2="${f(cx)}" y2="${f(H*.86)}" stroke="${p.c}" stroke-width="${f(m*.028)}"/>`+bar(cx-m*.13,H*.85,m*.26,m*.04,p.c);
    o+=`<rect x="${f(cx-hw)}" y="${f(cy-hh)}" width="${f(hw*2)}" height="${f(hh*2)}" rx="${f(hw)}" fill="${p.a}"/>`;
    [-.35,0,.35].forEach(k=>{ o+=bar(cx-hw*.62,cy-hh*.25+k*hh*.8,hw*1.24,m*.016,p.c); });
    o+=star(clamp(cx-m*.55,W*.05,W*.95),H*.2,m*.022,p.c);
    return o;
  }},
  envelope:{ nome:'Carta', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), cy=H*.52, ew=m*.6, eh=m*.38, rot=R.rr(-9,-3), x0=cx-ew/2, y0=cy-eh/2, x1=cx+ew/2, y1=cy+eh/2; let o='';
    o+=circle(cx-m*.3,H*.28,m*.14,p.b);
    o+=`<path d="M${f(x0-m*.05)} ${f(y1+m*.08)}C${f(x0-m*.35)} ${f(y1+m*.2)} ${f(x0-m*.5)} ${f(y0)} ${f(x0-m*.85)} ${f(y0+m*.05)}" fill="none" stroke="${p.c}" stroke-width="${f(m*.011)}" stroke-linecap="round" stroke-dasharray="${f(m*.028)} ${f(m*.03)}"/>`;
    o+=`<g transform="rotate(${f(rot)} ${f(cx)} ${f(cy)})"><rect x="${f(x0)}" y="${f(y0)}" width="${f(ew)}" height="${f(eh)}" rx="${f(m*.025)}" fill="${CREAM}"/>`;
    o+=`<path d="M${f(x0)} ${f(y1)}L${f(cx)} ${f(cy-eh*.02)}L${f(x1)} ${f(y1)}Z" fill="${p.b}"/><path d="M${f(x0)} ${f(y0)}L${f(cx)} ${f(cy+eh*.12)}L${f(x1)} ${f(y0)}Z" fill="${p.a}"/>`;
    o+=`<rect x="${f(x1-ew*.2)}" y="${f(y0+eh*.1)}" width="${f(ew*.13)}" height="${f(ew*.16)}" rx="${f(m*.008)}" fill="${p.c}"/>`+star(x1-ew*.135,y0+eh*.1+ew*.08,ew*.04,CREAM)+`</g>`;
    o+=ring(cx+ew*.42,cy-eh*.7,m*.055,p.c,m*.009);
    o+=birds(R,2,clamp(cx+m*.2,W*.05,W*.88),H*.16,m*.016,p.c);
    return o;
  }},
  planta:{ nome:'Planta', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), base=H*.84, pw=m*.26, ph=m*.2, top=base-ph-m*.48; let o='';
    o+=circle(cx+m*.3,H*.3,m*.16,p.b);
    o+=`<rect y="${f(base)}" width="${W}" height="${f(H)}" fill="${p.b}"/>`;
    o+=`<path d="M${f(cx)} ${f(base-ph)}Q${f(cx-m*.04)} ${f(base-ph-m*.25)} ${f(cx+m*.01)} ${f(top)}" fill="none" stroke="${p.c}" stroke-width="${f(m*.018)}" stroke-linecap="round"/>`;
    for (let i=0;i<6;i++){ const y=base-ph-m*(.08+i*.065), sd=i%2? 1 : -1; o+=leaf(cx,y,m*R.rr(.15,.21)*(1-i*.06),sd>0? R.rr(-45,-20) : R.rr(200,225),i%3===1? p.c : i%2? p.a : p.b); }
    o+=leaf(cx+m*.01,top+m*.02,m*.13,-90,p.a);
    o+=`<path d="M${f(cx-pw/2)} ${f(base-ph)}L${f(cx+pw/2)} ${f(base-ph)}L${f(cx+pw*.38)} ${f(base)}L${f(cx-pw*.38)} ${f(base)}Z" fill="${p.c}"/>`+bar(cx-pw*.58,base-ph-m*.035,pw*1.16,m*.06,p.a);
    o+=star(clamp(cx-m*.5,W*.05,W*.95),H*.22,m*.022,p.c);
    return o;
  }},
  montanha:{ nome:'Montanha', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), base=H*.9, mh=m*.6, mw=m*.6; let o='';
    o+=circle(clamp(cx+m*.5,W*.08,W*.92),H*.22,m*.1,p.a);
    o+=`<path d="M${f(cx-mw*1.45)} ${f(base)}L${f(cx-mw*.65)} ${f(base-mh*.62)}L${f(cx+mw*.1)} ${f(base)}Z" fill="${p.b}"/><path d="M${f(cx+mw*.2)} ${f(base)}L${f(cx+mw*.9)} ${f(base-mh*.5)}L${f(cx+mw*1.6)} ${f(base)}Z" fill="${p.b}"/>`;
    o+=`<path d="M${f(cx-mw)} ${f(base)}L${f(cx)} ${f(base-mh)}L${f(cx+mw)} ${f(base)}Z" fill="${p.a}"/>`;
    o+=`<path d="M${f(cx-mw*.27)} ${f(base-mh*.73)}L${f(cx)} ${f(base-mh)}L${f(cx+mw*.27)} ${f(base-mh*.73)}L${f(cx+mw*.13)} ${f(base-mh*.66)}L${f(cx)} ${f(base-mh*.75)}L${f(cx-mw*.12)} ${f(base-mh*.66)}Z" fill="${CREAM}"/>`;
    o+=`<path d="M${f(cx+mw*.35)} ${f(base)}L${f(cx-mw*.15)} ${f(base-mh*.25)}L${f(cx+mw*.18)} ${f(base-mh*.45)}L${f(cx-mw*.06)} ${f(base-mh*.62)}" fill="none" stroke="${CREAM}" stroke-width="${f(m*.012)}" stroke-linecap="round" stroke-dasharray="${f(m*.02)} ${f(m*.025)}"/>`;
    o+=`<line x1="${f(cx)}" y1="${f(base-mh)}" x2="${f(cx)}" y2="${f(base-mh-m*.15)}" stroke="${p.c}" stroke-width="${f(m*.012)}" stroke-linecap="round"/><path d="M${f(cx)} ${f(base-mh-m*.15)}L${f(cx+m*.1)} ${f(base-mh-m*.12)}L${f(cx)} ${f(base-mh-m*.085)}Z" fill="${p.c}"/>`;
    o+=`<rect y="${f(base)}" width="${W}" height="${f(H)}" fill="${p.c}"/>`;
    o+=birds(R,3,clamp(cx-m*.65,W*.04,W*.85),H*.2,m*.017,p.c);
    return o;
  }},
  balao:{ nome:'Balão', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), cy=H*.34, r=m*.2; let o='';
    o+=cloud(clamp(cx-m*.75,W*.04,W*.8),H*.5,m*.04,CREAM)+cloud(clamp(cx+m*.45,W*.04,W*.84),H*.2,m*.03,CREAM);
    o+=hill(W,H,R,H*.9,[[cx-m*.5,H*.07,m*.8],[cx+m*.7,H*.05,m*.6]],p.b).svg+hill(W,H,R,H*.97,[[cx+m*.2,H*.05,m*.9]],p.c).svg;
    const d=`M${f(cx)} ${f(cy+r*1.25)}C${f(cx-r*.6)} ${f(cy+r*.9)} ${f(cx-r*1.05)} ${f(cy+r*.35)} ${f(cx-r*1.05)} ${f(cy-r*.15)}A${f(r*1.05)} ${f(r*1.05)} 0 0 1 ${f(cx+r*1.05)} ${f(cy-r*.15)}C${f(cx+r*1.05)} ${f(cy+r*.35)} ${f(cx+r*.6)} ${f(cy+r*.9)} ${f(cx)} ${f(cy+r*1.25)}Z`;
    o+=`<path d="${d}" fill="${p.a}"/><path transform="translate(${f(cx)} 0) scale(.48 1) translate(${f(-cx)} 0)" d="${d}" fill="${p.c}"/><path transform="translate(${f(cx)} 0) scale(.14 1) translate(${f(-cx)} 0)" d="${d}" fill="${CREAM}"/>`;
    [-1,1].forEach(sd=>{ o+=`<line x1="${f(cx+sd*r*.3)}" y1="${f(cy+r*1.12)}" x2="${f(cx+sd*r*.2)}" y2="${f(cy+r*1.5)}" stroke="${p.c}" stroke-width="${f(m*.008)}"/>`; });
    o+=`<rect x="${f(cx-r*.24)}" y="${f(cy+r*1.5)}" width="${f(r*.48)}" height="${f(r*.32)}" rx="${f(m*.01)}" fill="${p.c}"/>`;
    o+=birds(R,2,clamp(cx+m*.35,W*.05,W*.88),H*.38,m*.016,p.c);
    return o;
  }},
  lupa:{ nome:'Lupa', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), cy=H*.5, cw=m*.66, ch=m*.54; let o='';
    o+=circle(cx-cw*.45,cy-ch*.42,m*.16,p.a);
    o+=`<rect x="${f(cx-cw/2)}" y="${f(cy-ch/2)}" width="${f(cw)}" height="${f(ch)}" rx="${f(m*.03)}" fill="${CREAM}"/>`;
    for (let i=0;i<5;i++) o+=bar(cx-cw*.38,cy-ch*.32+i*ch*.16,cw*(i===4? .4 : R.rr(.6,.76)),m*.018,p.b);
    const lx=cx+cw*.12, ly=cy-ch*.04, lr=m*.16;
    o+=`<line x1="${f(lx+lr*.75)}" y1="${f(ly+lr*.75)}" x2="${f(lx+lr*1.65)}" y2="${f(ly+lr*1.65)}" stroke="${p.c}" stroke-width="${f(m*.055)}" stroke-linecap="round"/>`;
    o+=circle(lx,ly,lr,CREAM)+bar(lx-lr*.6,ly-lr*.3,lr*1.2,m*.034,p.a)+bar(lx-lr*.6,ly+lr*.15,lr*.8,m*.034,p.a)+ring(lx,ly,lr,p.c,m*.036);
    o+=star(clamp(cx+m*.5,W*.05,W*.95),H*.18,m*.022,p.c);
    return o;
  }},
  coracao:{ nome:'Coração', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(); let o='';
    const heart=(x,y,s,col,rot=0)=>`<path transform="rotate(${f(rot)} ${f(x)} ${f(y)})" d="M${f(x)} ${f(y+s*.7)}C${f(x-s*.2)} ${f(y+s*.45)} ${f(x-s)} ${f(y+s*.05)} ${f(x-s)} ${f(y-s*.35)}C${f(x-s)} ${f(y-s*.85)} ${f(x-s*.3)} ${f(y-s)} ${f(x)} ${f(y-s*.45)}C${f(x+s*.3)} ${f(y-s)} ${f(x+s)} ${f(y-s*.85)} ${f(x+s)} ${f(y-s*.35)}C${f(x+s)} ${f(y+s*.05)} ${f(x+s*.2)} ${f(y+s*.45)} ${f(x)} ${f(y+s*.7)}Z" fill="${col}"/>`;
    o+=hill(W,H,R,H*.92,[[cx-m*.5,H*.06,m*.8],[cx+m*.6,H*.05,m*.6]],p.b).svg;
    o+=heart(cx,H*.47,m*.25,p.a,R.rr(-8,8))+heart(cx+m*.3,H*.24,m*.08,p.c,14)+heart(clamp(cx-m*.38,W*.05,W*.95),H*.3,m*.05,p.c,-12);
    o+=`<path d="M${f(cx-m*.17)} ${f(H*.38)}A${f(m*.1)} ${f(m*.1)} 0 0 1 ${f(cx-m*.08)} ${f(H*.3)}" fill="none" stroke="${CREAM}" stroke-width="${f(m*.018)}" stroke-linecap="round"/>`;
    o+=star(clamp(cx+m*.55,W*.05,W*.95),H*.52,m*.022,p.c)+birds(R,2,clamp(cx-m*.7,W*.04,W*.85),H*.14,m*.016,p.c);
    return o;
  }},
  trem:{ nome:'Trem', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(), base=H*.76, x0=cx-m*.05; let o='';
    o+=circle(clamp(cx+m*.45,W*.06,W*.94),H*.22,m*.11,p.a);
    o+=hill(W,H,R,H*.7,[[cx-m*.7,H*.1,m*.8]],p.b).svg;
    o+=`<rect y="${f(base+m*.04)}" width="${W}" height="${f(H)}" fill="${p.b}"/><rect y="${f(base+m*.035)}" width="${W}" height="${f(m*.016)}" fill="${p.c}"/>`;
    for (let i=0;i<3;i++) o+=circle(x0+m*.2-i*m*.07,base-m*.3-i*m*.05,m*(.035+i*.014),CREAM);
    const wheels=(xs)=>xs.map(x=>circle(x,base,m*.038,p.c)+circle(x,base,m*.012,CREAM)).join('');
    for (let k=1;k<=4;k++){ const wx=x0-k*m*.27; if (wx+m*.24<0) break;
      o+=`<rect x="${f(wx)}" y="${f(base-m*.15)}" width="${f(m*.24)}" height="${f(m*.13)}" rx="${f(m*.02)}" fill="${k%2? p.a : p.c}"/>`+bar(wx+m*.035,base-m*.12,m*.07,m*.045,CREAM)+bar(wx+m*.135,base-m*.12,m*.07,m*.045,CREAM)+bar(wx+m*.235,base-m*.07,m*.04,m*.014,p.c)+wheels([wx+m*.05,wx+m*.19]); }
    o+=`<rect x="${f(x0+m*.22)}" y="${f(base-m*.25)}" width="${f(m*.045)}" height="${f(m*.1)}" fill="${p.c}"/>`;
    o+=`<rect x="${f(x0)}" y="${f(base-m*.27)}" width="${f(m*.12)}" height="${f(m*.25)}" rx="${f(m*.015)}" fill="${p.c}"/>`+`<rect x="${f(x0+m*.025)}" y="${f(base-m*.235)}" width="${f(m*.07)}" height="${f(m*.06)}" rx="${f(m*.01)}" fill="${CREAM}"/>`;
    o+=`<rect x="${f(x0+m*.1)}" y="${f(base-m*.16)}" width="${f(m*.22)}" height="${f(m*.14)}" rx="${f(m*.02)}" fill="${p.a}"/>`;
    o+=`<path d="M${f(x0+m*.31)} ${f(base-m*.05)}L${f(x0+m*.37)} ${f(base+m*.03)}L${f(x0+m*.3)} ${f(base+m*.03)}Z" fill="${p.c}"/>`+wheels([x0+m*.06,x0+m*.17,x0+m*.27]);
    return o;
  }},
  peixes:{ nome:'Peixes', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(); let o='';
    const fish=(x,y,s,col,dir)=>`<g transform="translate(${f(x)} ${f(y)}) scale(${dir} 1)"><path d="M${f(-s)} 0Q${f(-s*.2)} ${f(-s*.75)} ${f(s*.7)} 0Q${f(-s*.2)} ${f(s*.75)} ${f(-s)} 0Z" fill="${col}"/><path d="M${f(-s*.85)} 0L${f(-s*1.45)} ${f(-s*.42)}L${f(-s*1.3)} 0L${f(-s*1.45)} ${f(s*.42)}Z" fill="${col}"/>${circle(s*.32,-s*.1,s*.08,CREAM)}</g>`;
    for (let i=0;i<3;i++){ const y=H*(.08+i*.06); o+=`<path d="M0 ${f(y)}${Array.from({length:Math.ceil(W/(m*.2))+1},(_,k)=>`Q${f(k*m*.2+m*.05)} ${f(y-m*.025)} ${f(k*m*.2+m*.1)} ${f(y)}T${f(k*m*.2+m*.2)} ${f(y)}`).join('')}" fill="none" stroke="${i===1? CREAM : p.b}" stroke-width="${f(m*.012)}"/>`; }
    o+=hill(W,H,R,H*.92,[[cx,H*.04,m*.9]],p.b).svg;
    [[-.4,.1,p.b,-90],[-.33,.14,p.c,-80],[.42,.12,p.c,-100],[.5,.08,p.b,-85]].forEach(([k,l,col,a])=>{ const x=cx+k*m; o+=leaf(x,H*.93,m*l*1.6,a,col); });
    o+=fish(cx-m*.05,H*.52,m*.22,p.a,1)+fish(cx+m*.36,H*.33,m*.12,p.c,-1)+fish(cx+m*.3,H*.74,m*.1,p.c,1);
    [[.05,.3,.025],[.1,.22,.016],[.02,.16,.012]].forEach(([dx,y,r])=>{ o+=ring(cx+m*(.2+dx),H*y+m*.05,m*r,CREAM,m*.006); });
    return o;
  }},
  bandeirinhas:{ nome:'Festa', draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=fx(); let o='';
    o+=hill(W,H,R,H*.93,[[cx-m*.4,H*.06,m*.9]],p.b).svg;
    [[.06,.18],[.22,.14]].forEach(([y0,dip],j)=>{ const P0=[-m*.1,H*y0], P1=[cx+(j? m*.3 : -m*.2),H*y0+m*dip*1.6], P2=[W+m*.1,H*y0];
      const q=t=>[(1-t)**2*P0[0]+2*(1-t)*t*P1[0]+t*t*P2[0],(1-t)**2*P0[1]+2*(1-t)*t*P1[1]+t*t*P2[1]];
      o+=`<path d="M${f(P0[0])} ${f(P0[1])}Q${f(P1[0])} ${f(P1[1])} ${f(P2[0])} ${f(P2[1])}" fill="none" stroke="${p.c}" stroke-width="${f(m*.008)}"/>`;
      const n=Math.max(5,Math.round((W+m*.2)/(m*.11))), cols=[p.a,p.c,CREAM,p.b];
      for (let i=1;i<n;i++){ const [x,y]=q(i/n), fw=m*.07; o+=`<path d="M${f(x-fw/2)} ${f(y)}L${f(x+fw/2)} ${f(y)}L${f(x)} ${f(y+fw*1.1)}Z" fill="${cols[(i+j)%4]}"/>`; }
    });
    [[-.14,.56,p.a],[.04,.5,p.c],[.2,.58,p.a]].forEach(([k,y,col],i)=>{ const x=cx+k*m, r=m*(i===1? .1 : .085);
      o+=`<path d="M${f(x)} ${f(H*y+r)}Q${f(x+m*.03)} ${f(H*.8)} ${f(x)} ${f(H*.95)}" fill="none" stroke="${p.c}" stroke-width="${f(m*.007)}"/>`+`<ellipse cx="${f(x)}" cy="${f(H*y)}" rx="${f(r*.88)}" ry="${f(r)}" fill="${col}"/>`+`<path d="M${f(x-r*.12)} ${f(H*y+r*1.12)}L${f(x+r*.12)} ${f(H*y+r*1.12)}L${f(x)} ${f(H*y+r*.95)}Z" fill="${col}"/>`+circle(x-r*.35,H*y-r*.35,r*.14,CREAM); });
    for (let i=0;i<6;i++) o+=star(clamp(cx+m*R.rr(-.7,.7),W*.04,W*.96),H*R.rr(.4,.85),m*R.rr(.012,.022),i%2? p.c : p.a);
    return o;
  }},
};
const SKEYS = Object.keys(SCENES);


/* ---------- que cena combina com uma tarefa ou um marco ----------
   Procura palavras do título (inglês, francês ou português); se nada combina, usa o tema.
   A semente escolhe dentro do grupo, para tarefas parecidas não ficarem iguais. */
const SCENE_KEYS=[
  [/listen|écoute|escuta|podcast|radio/i,['fones','disco','microfone']],
  [/pronunc|prononc|\bsounds?\b|\bsons\b|word stress|endings|silent|liaison|rhyme|muettes/i,['microfone','fones','disco']],
  [/holiday|fête|christmas|thanksgiving|festa|celebr/i,['bandeirinhas','balao']],
  [/\banimals?\b|animaux|\bpets?\b/i,['peixes']],
  [/fruit|légume|fruta|vegetable/i,['uvas','planta']],
  [/\bbody\b|corps|corpo/i,['coracao','peixes']],
  [/writ|écri|e-?mail|letter|lettre|postcard|postale|réclamation|complaint|essay|dissertation|connecteur/i,['envelope','lapis']],
  [/read|lecture|leitura|news|médias|actualité|notícia/i,['lupa','livro','lampada']],
  [/restaurant|food|kitchen|cuisine|gastronom|café|courses|comida|sabor|saveur/i,['xicara','uvas']],
  [/weather|météo|season|saison|environment|environnement|clima|meio ambiente/i,['chuva','planta','amanhecer']],
  [/travel|airport|voyage|transport|direction|en ville|\bcity\b|cidade|viage|chemin|à, en|\bplace\b/i,['mala','trem','cidade','aviao']],
  [/shopping|money|vêtements|clothes|colou?rs?\b|couleur|compras|dinheiro|shapes/i,['estampa','bandeirinhas','mala']],
  [/house|room|maison|chambre|\bcasa\b|there is|minha casa/i,['casa','planta']],
  [/family|famille|família|friend|\bamis?\b|feeling|sentiment|relationship|personalit|doute/i,['coracao','casa','conversa']],
  [/\btime\b|heure|\bdays\b|jours|months|mois|routine|rotina|journée|daily|frequen/i,['relogio','amanhecer','noite']],
  [/\bwork|\bjobs?\b|travail|trabalho|meeting|réunion|reuni|interview|business|negoti|négoci|presentation|profession/i,['cidade','xicara','envelope','trem']],
  [/health|santé|saúde|sport/i,['coracao','planta','montanha']],
  [/future|futur|\bwill\b|going to|\bplans\b|projet|planos/i,['balao','aviao','montanha','amanhecer']],
  [/\bpast\b|passé|passado|\bwas\b|\bwere\b|imparfait|used to|narrative|story|histoire|histórias|raconter|aconteceu/i,['livro','montanha','noite','relogio','amanhecer']],
  [/condition|hypoth|hipótes|\bwish\b|if only|deduc|modal|subjonctif|subjunctive|subjuntivo/i,['lampada','balao','arcos','estampa']],
  [/culture|cultura|francophonie|british|american|polite|polidez|registre|registro|proverb|idiom|expression|expressõ/i,['globo','bandeirinhas','conversa','balao']],
  [/greet|salut|introduc|présent|apresent|cumpriment|small talk|phone|question|pergunt|convers/i,['conversa','xicara','coracao']],
  [/technology|social media|réseaux|tecnologia/i,['lampada','cidade']],
];
const TOPIC_POOL={'Gramática':['livro','lampada','arcos','lapis','estampa','balao','montanha'],'Conjugação':['relogio','arcos','livro','lampada'],'Vocabulário':['uvas','casa','planta','xicara','estampa'],
  'Phrasal verbs':['aviao','balao','trem','montanha'],'Leitura':['lupa','livro'],'Escuta':['fones','disco'],'Escrita':['lapis','envelope'],'Expressões':['conversa','balao','coracao'],
  'Pronúncia':['microfone','fones','disco'],'Cultura':['bandeirinhas','globo'],'Trabalho':['cidade','xicara','envelope'],'Kids':['peixes','balao','mar','uvas']};
function scenePool(text,topic){
  for (const [re,pool] of SCENE_KEYS) if (re.test(text)) return pool;
  return TOPIC_POOL[topic]||['livro','lampada','arcos','globo'];
}
const sceneFor=(text,topic,seed)=>{ const pool=scenePool(text,topic); return pool[seed%pool.length]; };
const paletteFor=seed=>PKEYS[seed%PKEYS.length];
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
