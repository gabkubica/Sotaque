/* =========================================================
   Quadros Winer · cenas de vocabulário (animais, comida, objetos, roupas, casa)
   Mesmo estilo dos quadros: formas chapadas sobre um chão simples.
   Cada cena tem a paleta que combina com ela (pal), para a banana ser amarela e a maçã vermelha.
   ========================================================= */
const ground=(W,H,base,col)=>`<rect y="${f(base)}" width="${W}" height="${f(H-base+2)}" fill="${col}"/>`;
const ell=(x,y,rx,ry,col,rot)=>`<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(rx)}" ry="${f(ry)}" fill="${col}"${rot? ` transform="rotate(${f(rot)} ${f(x)} ${f(y)})"` : ''}/>`;
const rrect=(x,y,w,h,r,col)=>`<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" rx="${f(r)}" fill="${col}"/>`;
const line=(d,col,w)=>`<path d="${d}" fill="none" stroke="${col}" stroke-width="${f(w)}" stroke-linecap="round" stroke-linejoin="round"/>`;
const shape=(d,col)=>`<path d="${d}" fill="${col}"/>`;
const sparkle=(W,H,R,m,col)=>star(W*R.rr(.08,.2),H*R.rr(.14,.26),m*.022,col)+star(W*R.rr(.8,.92),H*R.rr(.12,.24),m*.018,col);
Object.assign(SCENES,{
  gato:{nome:'Gato',pal:'lavanda',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.86; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.a);
    o+=line(`M${f(cx+m*.14)} ${f(base-m*.06)}Q${f(cx+m*.42)} ${f(base-m*.02)} ${f(cx+m*.34)} ${f(base-m*.3)}`,p.c,m*.055);
    o+=ell(cx,base-m*.17,m*.19,m*.2,p.c)+ell(cx,base-m*.12,m*.1,m*.12,p.a);
    o+=shape(`M${f(cx-m*.15)} ${f(base-m*.46)}L${f(cx-m*.13)} ${f(base-m*.66)}L${f(cx-m*.02)} ${f(base-m*.55)}Z`,p.c)+shape(`M${f(cx+m*.15)} ${f(base-m*.46)}L${f(cx+m*.13)} ${f(base-m*.66)}L${f(cx+m*.02)} ${f(base-m*.55)}Z`,p.c);
    o+=circle(cx,base-m*.44,m*.15,p.c);
    o+=ell(cx-m*.055,base-m*.46,m*.03,m*.036,CREAM)+ell(cx+m*.055,base-m*.46,m*.03,m*.036,CREAM)+ell(cx-m*.055,base-m*.455,m*.011,m*.026,p.c)+ell(cx+m*.055,base-m*.455,m*.011,m*.026,p.c);
    o+=shape(`M${f(cx-m*.022)} ${f(base-m*.405)}L${f(cx+m*.022)} ${f(base-m*.405)}L${f(cx)} ${f(base-m*.38)}Z`,p.b);
    for (const s of [-1,1]) o+=line(`M${f(cx+s*m*.04)} ${f(base-m*.38)}L${f(cx+s*m*.17)} ${f(base-m*.4)}M${f(cx+s*m*.04)} ${f(base-m*.365)}L${f(cx+s*m*.16)} ${f(base-m*.35)}`,CREAM,m*.008);
    return o; }},
  cachorro:{nome:'Cachorro',pal:'terracota',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2-m*.04, base=H*.86; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.a);
    o+=line(`M${f(cx-m*.2)} ${f(base-m*.3)}Q${f(cx-m*.32)} ${f(base-m*.36)} ${f(cx-m*.3)} ${f(base-m*.5)}`,p.a,m*.045);
    for (const x of [-.18,-.1,.07,.15]) o+=rrect(cx+m*x,base-m*.22,m*.055,m*.22,m*.025,x<0&&x>-.15||x>.1? p.c : p.a);
    o+=rrect(cx-m*.24,base-m*.36,m*.46,m*.19,m*.095,p.a);
    o+=circle(cx+m*.23,base-m*.43,m*.12,p.a)+ell(cx+m*.33,base-m*.39,m*.08,m*.055,p.a);
    o+=ell(cx+m*.165,base-m*.38,m*.045,m*.1,p.c,15)+circle(cx+m*.405,base-m*.405,m*.026,p.c)+circle(cx+m*.255,base-m*.46,m*.019,p.c);
    o+=line(`M${f(cx+m*.34)} ${f(base-m*.35)}Q${f(cx+m*.37)} ${f(base-m*.33)} ${f(cx+m*.39)} ${f(base-m*.35)}`,p.c,m*.01);
    o+=rrect(cx+m*.12,base-m*.36,m*.035,m*.12,m*.015,p.c);
    return o; }},
  passaro:{nome:'Passarinho',pal:'ceu',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, by=H*.7; let o=cloud(W*.1,H*.2,m*.05,CREAM)+cloud(W*.72,H*.14,m*.04,CREAM);
    o+=bar(-m*.1,by,W+m*.2,m*.035,p.c)+leaf(W*.12,by,m*.13,-30,p.b)+leaf(W*.85,by+m*.01,m*.12,200,p.b)+leaf(W*.78,by,m*.1,-40,p.b);
    o+=line(`M${f(cx-m*.03)} ${f(by-m*.1)}L${f(cx-m*.04)} ${f(by)}M${f(cx+m*.04)} ${f(by-m*.1)}L${f(cx+m*.03)} ${f(by)}`,p.c,m*.014);
    o+=shape(`M${f(cx-m*.12)} ${f(by-m*.2)}L${f(cx-m*.32)} ${f(by-m*.27)}L${f(cx-m*.3)} ${f(by-m*.15)}Z`,p.c);
    o+=ell(cx,by-m*.2,m*.17,m*.13,p.a)+ell(cx+m*.02,by-m*.15,m*.1,m*.07,p.b);
    o+=circle(cx+m*.13,by-m*.33,m*.095,p.a);
    o+=shape(`M${f(cx+m*.21)} ${f(by-m*.35)}L${f(cx+m*.3)} ${f(by-m*.32)}L${f(cx+m*.21)} ${f(by-m*.29)}Z`,'#e0a030');
    o+=ell(cx-m*.04,by-m*.22,m*.11,m*.06,p.c,-20)+circle(cx+m*.15,by-m*.35,m*.022,CREAM)+circle(cx+m*.155,by-m*.35,m*.011,p.c);
    return o; }},
  coelho:{nome:'Coelho',pal:'rosa',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.88; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.a);
    o+=ell(cx-m*.06,base-m*.62,m*.045,m*.14,CREAM,-8)+ell(cx+m*.06,base-m*.62,m*.045,m*.14,CREAM,8)+ell(cx-m*.06,base-m*.61,m*.022,m*.1,p.b,-8)+ell(cx+m*.06,base-m*.61,m*.022,m*.1,p.b,8);
    o+=ell(cx,base-m*.17,m*.18,m*.18,CREAM)+circle(cx+m*.17,base-m*.12,m*.05,CREAM);
    o+=circle(cx,base-m*.42,m*.13,CREAM);
    o+=circle(cx-m*.05,base-m*.44,m*.018,p.c)+circle(cx+m*.05,base-m*.44,m*.018,p.c)+ell(cx,base-m*.39,m*.02,m*.014,p.a);
    o+=ell(cx-m*.07,base-m*.03,m*.06,m*.03,p.b)+ell(cx+m*.07,base-m*.03,m*.06,m*.03,p.b);
    o+=line(`M${f(cx)} ${f(base-m*.375)}L${f(cx)} ${f(base-m*.35)}`,p.c,m*.008);
    return o; }},
  maca:{nome:'Maçã',pal:'tomate',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.86; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.c);
    o+=ell(cx,base,m*.24,m*.035,p.c);
    o+=circle(cx-m*.09,base-m*.25,m*.2,p.a)+circle(cx+m*.09,base-m*.25,m*.2,p.a);
    o+=ell(cx-m*.13,base-m*.32,m*.04,m*.07,CREAM,25).replace('/>',' opacity=".55"/>');
    o+=line(`M${f(cx)} ${f(base-m*.42)}Q${f(cx+m*.01)} ${f(base-m*.5)} ${f(cx+m*.04)} ${f(base-m*.56)}`,p.c,m*.03);
    o+=leaf(cx+m*.03,base-m*.5,m*.15,-25,'#3a9563');
    return o; }},
  banana:{nome:'Banana',pal:'mostarda',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.86; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.c);
    const one=(dx,dy,rot,col)=>`<g transform="rotate(${rot} ${f(cx)} ${f(base-m*.25)}) translate(${f(dx)} ${f(dy)})">${shape(`M${f(cx-m*.34)} ${f(base-m*.42)}Q${f(cx-m*.1)} ${f(base+m*.02)} ${f(cx+m*.34)} ${f(base-m*.38)}Q${f(cx-m*.02)} ${f(base-m*.25)} ${f(cx-m*.34)} ${f(base-m*.42)}Z`,col)}${circle(cx-m*.335,base-m*.415,m*.02,p.c)}${line(`M${f(cx+m*.33)} ${f(base-m*.385)}L${f(cx+m*.37)} ${f(base-m*.45)}`,p.c,m*.035)}</g>`;
    o+=one(0,-m*.04,-6,p.b)+one(0,m*.04,4,p.a);
    return o; }},
  sorvete:{nome:'Sorvete',pal:'rosa',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.9; let o=sparkle(W,H,R,m,p.a)+star(W*.82,H*.62,m*.02,p.c);
    o+=shape(`M${f(cx-m*.13)} ${f(base-m*.42)}L${f(cx+m*.13)} ${f(base-m*.42)}L${f(cx)} ${f(base)}Z`,'#dfa865');
    o+=line(`M${f(cx-m*.09)} ${f(base-m*.36)}L${f(cx+m*.05)} ${f(base-m*.12)}M${f(cx+m*.09)} ${f(base-m*.36)}L${f(cx-m*.05)} ${f(base-m*.12)}M${f(cx-m*.02)} ${f(base-m*.42)}L${f(cx+m*.08)} ${f(base-m*.26)}`,'#b97a3a',m*.012);
    o+=circle(cx,base-m*.48,m*.15,p.b)+circle(cx-m*.02,base-m*.68,m*.13,p.a)+rrect(cx+m*.06,base-m*.46,m*.035,m*.1,m*.017,p.b);
    o+=circle(cx+m*.02,base-m*.83,m*.035,p.c)+bar(cx-m*.07,base-m*.72,m*.04,m*.014,CREAM)+bar(cx+m*.03,base-m*.62,m*.04,m*.014,CREAM)+bar(cx-m*.08,base-m*.5,m*.04,m*.014,p.c);
    return o; }},
  bolo:{nome:'Bolo',pal:'ameixa',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.86; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.a);
    o+=ell(cx,base,m*.34,m*.05,CREAM);
    o+=rrect(cx-m*.28,base-m*.22,m*.56,m*.2,m*.03,p.a)+rrect(cx-m*.22,base-m*.4,m*.44,m*.18,m*.03,p.c);
    let d=`M${f(cx-m*.28)} ${f(base-m*.2)}`; for (let k=0;k<7;k++){ const x=cx-m*.28+k*m*.08; d+=`L${f(x)} ${f(base-m*.22)}Q${f(x+m*.04)} ${f(base-m*.12)} ${f(x+m*.08)} ${f(base-m*.22)}`; } o+=shape(d+`L${f(cx+m*.28)} ${f(base-m*.24)}L${f(cx-m*.28)} ${f(base-m*.24)}Z`,CREAM);
    o+=rrect(cx-m*.22,base-m*.42,m*.44,m*.05,m*.025,CREAM);
    for (const x of [-.1,0,.1]){ o+=rrect(cx+m*x-m*.014,base-m*.53,m*.028,m*.11,m*.008,p.b)+ell(cx+m*x,base-m*.56,m*.018,m*.03,'#f0b035'); }
    return o; }},
  pizza:{nome:'Pizza',pal:'tomate',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, cy=H*.52; let o=sparkle(W,H,R,m,p.c);
    o+=circle(cx,cy,m*.36,'#dfa865')+circle(cx,cy,m*.31,p.a)+circle(cx,cy,m*.29,'#f3d27a').replace('/>',' opacity=".55"/>');
    for (const [a,r] of [[20,.17],[95,.2],[170,.15],[250,.19],[320,.12],[0,0]]){ const x=cx+Math.cos(a*Math.PI/180)*m*r, y=cy+Math.sin(a*Math.PI/180)*m*r; o+=circle(x,y,m*.045,p.c); }
    for (const a of [55,140,215,290]) o+=leaf(cx+Math.cos(a*Math.PI/180)*m*.2,cy+Math.sin(a*Math.PI/180)*m*.2,m*.06,a,'#3a9563');
    o+=line(`M${f(cx)} ${f(cy)}L${f(cx+m*.31)} ${f(cy)}M${f(cx)} ${f(cy)}L${f(cx-m*.155)} ${f(cy-m*.27)}M${f(cx)} ${f(cy)}L${f(cx-m*.155)} ${f(cy+m*.27)}`,'#c5803f',m*.008);
    return o; }},
  carro:{nome:'Carro',pal:'ceu',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.8; let o=cloud(W*.12,H*.18,m*.04,CREAM)+cloud(W*.7,H*.14,m*.035,CREAM)+ground(W,H,base,p.b);
    o+=bar(-m*.1,base+m*.07,W+m*.2,m*.02,CREAM);
    o+=shape(`M${f(cx-m*.2)} ${f(base-m*.2)}L${f(cx-m*.12)} ${f(base-m*.36)}L${f(cx+m*.12)} ${f(base-m*.36)}L${f(cx+m*.22)} ${f(base-m*.2)}Z`,p.a);
    o+=shape(`M${f(cx-m*.15)} ${f(base-m*.21)}L${f(cx-m*.1)} ${f(base-m*.32)}L${f(cx-m*.01)} ${f(base-m*.32)}L${f(cx-m*.01)} ${f(base-m*.21)}Z`,CREAM)+shape(`M${f(cx+m*.02)} ${f(base-m*.21)}L${f(cx+m*.02)} ${f(base-m*.32)}L${f(cx+m*.1)} ${f(base-m*.32)}L${f(cx+m*.16)} ${f(base-m*.21)}Z`,CREAM);
    o+=rrect(cx-m*.36,base-m*.22,m*.72,m*.16,m*.06,p.a);
    o+=rrect(cx+m*.3,base-m*.18,m*.05,m*.035,m*.015,'#f0c040')+rrect(cx-m*.36,base-m*.18,m*.04,m*.035,m*.015,p.c);
    for (const x of [-.2,.2]) o+=circle(cx+m*x,base-m*.06,m*.075,p.c)+circle(cx+m*x,base-m*.06,m*.03,CREAM);
    return o; }},
  onibus:{nome:'Ônibus',pal:'mostarda',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.82; let o=cloud(W*.1,H*.14,m*.035,CREAM)+ground(W,H,base,p.b);
    o+=rrect(cx-m*.42,base-m*.42,m*.84,m*.36,m*.05,p.a);
    for (let k=0;k<4;k++) o+=rrect(cx-m*.36+k*m*.15,base-m*.36,m*.12,m*.11,m*.02,CREAM);
    o+=rrect(cx+m*.25,base-m*.36,m*.11,m*.26,m*.02,p.c)+rrect(cx+m*.27,base-m*.34,m*.07,m*.1,m*.015,CREAM);
    o+=bar(cx-m*.42,base-m*.2,m*.66,m*.03,p.c);
    o+=rrect(cx+m*.38,base-m*.16,m*.04,m*.04,m*.015,'#fffbe6');
    for (const x of [-.26,.17]) o+=circle(cx+m*x,base-m*.06,m*.07,p.c)+circle(cx+m*x,base-m*.06,m*.028,CREAM);
    return o; }},
  celular:{nome:'Celular',pal:'petroleo',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, cy=H*.52; let o=sparkle(W,H,R,m,p.a)+circle(cx+m*.32,cy-m*.22,m*.07,p.b);
    o+=rrect(cx-m*.17,cy-m*.38,m*.34,m*.72,m*.06,p.c)+rrect(cx-m*.145,cy-m*.32,m*.29,m*.56,m*.02,p.b);
    for (let r=0;r<3;r++) for (let c=0;c<3;c++) o+=rrect(cx-m*.12+c*m*.09,cy-m*.27+r*m*.1,m*.065,m*.065,m*.018,[CREAM,p.a,'#f0b035'][(r+c)%3]);
    o+=bar(cx-m*.05,cy+m*.28,m*.1,m*.018,CREAM)+bar(cx-m*.04,cy-m*.355,m*.08,m*.014,p.b);
    o+=rrect(cx-m*.12,cy+m*.06,m*.24,m*.1,m*.03,CREAM)+bar(cx-m*.09,cy+m*.1,m*.12,m*.016,p.b);
    return o; }},
  chave:{nome:'Chave',pal:'mostarda',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, cy=H*.52; let o=sparkle(W,H,R,m,p.c);
    o+=`<g transform="rotate(-18 ${f(cx)} ${f(cy)})">`+ring(cx-m*.22,cy,m*.12,p.a,m*.07)+bar(cx-m*.12,cy-m*.035,m*.46,m*.07,p.a)+rrect(cx+m*.2,cy,m*.05,m*.1,m*.01,p.a)+rrect(cx+m*.29,cy,m*.05,m*.13,m*.01,p.a)+rrect(cx+m*.12,cy,m*.04,m*.07,m*.01,p.a)+circle(cx-m*.22,cy,m*.03,p.c)+`</g>`;
    return o; }},
  camiseta:{nome:'Camiseta',pal:'ceu',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, top=H*.2; let o=sparkle(W,H,R,m,p.a)+bar(cx-m*.42,top-m*.04,m*.84,m*.015,p.c);
    o+=shape(`M${f(cx-m*.1)} ${f(top)}Q${f(cx)} ${f(top+m*.08)} ${f(cx+m*.1)} ${f(top)}L${f(cx+m*.26)} ${f(top+m*.05)}L${f(cx+m*.38)} ${f(top+m*.22)}L${f(cx+m*.27)} ${f(top+m*.29)}L${f(cx+m*.21)} ${f(top+m*.22)}L${f(cx+m*.21)} ${f(top+m*.66)}L${f(cx-m*.21)} ${f(top+m*.66)}L${f(cx-m*.21)} ${f(top+m*.22)}L${f(cx-m*.27)} ${f(top+m*.29)}L${f(cx-m*.38)} ${f(top+m*.22)}L${f(cx-m*.26)} ${f(top+m*.05)}Z`,p.a);
    o+=line(`M${f(cx-m*.1)} ${f(top)}Q${f(cx)} ${f(top+m*.08)} ${f(cx+m*.1)} ${f(top)}`,p.c,m*.02)+bar(cx-m*.21,top+m*.4,m*.42,m*.05,CREAM)+star(cx+m*.1,top+m*.22,m*.04,CREAM);
    return o; }},
  chapeu:{nome:'Chapéu',pal:'terracota',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.72; let o=sparkle(W,H,R,m,p.a)+ell(cx,base+m*.12,m*.38,m*.04,p.b);
    o+=ell(cx,base,m*.4,m*.09,p.c)+shape(`M${f(cx-m*.2)} ${f(base)}L${f(cx-m*.17)} ${f(base-m*.3)}Q${f(cx)} ${f(base-m*.38)} ${f(cx+m*.17)} ${f(base-m*.3)}L${f(cx+m*.2)} ${f(base)}Q${f(cx)} ${f(base+m*.05)} ${f(cx-m*.2)} ${f(base)}Z`,p.a);
    o+=shape(`M${f(cx-m*.195)} ${f(base-m*.06)}L${f(cx-m*.19)} ${f(base-m*.12)}Q${f(cx)} ${f(base-m*.08)} ${f(cx+m*.19)} ${f(base-m*.12)}L${f(cx+m*.195)} ${f(base-m*.06)}Q${f(cx)} ${f(base-m*.02)} ${f(cx-m*.195)} ${f(base-m*.06)}Z`,CREAM);
    o+=leaf(cx+m*.1,base-m*.1,m*.14,-60,p.c);
    return o; }},
  sapato:{nome:'Tênis',pal:'tomate',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.76; let o=sparkle(W,H,R,m,p.c)+ground(W,H,base+m*.06,p.b);
    o+=shape(`M${f(cx-m*.36)} ${f(base)}L${f(cx-m*.34)} ${f(base-m*.28)}Q${f(cx-m*.2)} ${f(base-m*.24)} ${f(cx-m*.12)} ${f(base-m*.3)}L${f(cx+m*.08)} ${f(base-m*.14)}Q${f(cx+m*.34)} ${f(base-m*.12)} ${f(cx+m*.38)} ${f(base-m*.02)}L${f(cx+m*.38)} ${f(base)}Z`,p.a);
    o+=rrect(cx-m*.38,base-m*.02,m*.78,m*.07,m*.03,CREAM);
    o+=line(`M${f(cx-m*.1)} ${f(base-m*.26)}L${f(cx-m*.04)} ${f(base-m*.21)}M${f(cx-m*.06)} ${f(base-m*.29)}L${f(cx)} ${f(base-m*.18)}M${f(cx-m*.02)} ${f(base-m*.25)}L${f(cx+m*.04)} ${f(base-m*.15)}`,CREAM,m*.016);
    o+=line(`M${f(cx-m*.3)} ${f(base-m*.06)}Q${f(cx-m*.05)} ${f(base-m*.14)} ${f(cx+m*.2)} ${f(base-m*.06)}`,p.c,m*.02);
    return o; }},
  cama:{nome:'Cama',pal:'lavanda',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.84; let o=ground(W,H,base,p.b)+circle(W*.8,H*.2,m*.07,CREAM)+circle(W*.83,H*.18,m*.06,p.bg);
    o+=rrect(cx-m*.42,base-m*.52,m*.08,m*.52,m*.03,p.c)+rrect(cx+m*.36,base-m*.32,m*.06,m*.32,m*.03,p.c);
    o+=rrect(cx-m*.36,base-m*.28,m*.74,m*.14,m*.03,CREAM)+rrect(cx-m*.33,base-m*.38,m*.2,m*.1,m*.05,CREAM);
    o+=rrect(cx-m*.12,base-m*.32,m*.5,m*.2,m*.04,p.a)+bar(cx-m*.12,base-m*.26,m*.5,m*.02,p.b);
    o+=star(cx-m*.2,base-m*.62,m*.025,p.a)+star(cx+m*.05,base-m*.7,m*.02,p.a);
    return o; }},
  cadeira:{nome:'Cadeira',pal:'terracota',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.88; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.a);
    for (const x of [-.2,.155]) o+=rrect(cx+m*x,base-m*.78,m*.045,m*.78,m*.02,p.c);
    o+=rrect(cx-m*.17,base-m*.74,m*.34,m*.09,m*.03,p.a)+rrect(cx-m*.17,base-m*.6,m*.34,m*.06,m*.03,p.a);
    o+=rrect(cx-m*.24,base-m*.42,m*.48,m*.08,m*.03,p.a);
    return o; }},
  sol:{nome:'Sol',pal:'mostarda',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, cy=H*.42; let o='';
    for (let k=0;k<12;k++){ const a=k*30*Math.PI/180; o+=line(`M${f(cx+Math.cos(a)*m*.24)} ${f(cy+Math.sin(a)*m*.24)}L${f(cx+Math.cos(a)*m*.34)} ${f(cy+Math.sin(a)*m*.34)}`,p.a,m*.035); }
    o+=circle(cx,cy,m*.19,p.a)+circle(cx-m*.06,cy-m*.04,m*.02,p.c)+circle(cx+m*.06,cy-m*.04,m*.02,p.c)+line(`M${f(cx-m*.07)} ${f(cy+m*.05)}Q${f(cx)} ${f(cy+m*.11)} ${f(cx+m*.07)} ${f(cy+m*.05)}`,p.c,m*.018);
    o+=hill(W,H,R,H*.88,[[W*.2,H*.1,W*.3],[W*.8,H*.07,W*.3]],p.b).svg;
    return o; }},
  arvore:{nome:'Árvore',pal:'menta',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.86; let o=ground(W,H,base,p.b)+cloud(W*.08,H*.16,m*.035,CREAM);
    o+=shape(`M${f(cx-m*.05)} ${f(base)}L${f(cx-m*.04)} ${f(base-m*.32)}L${f(cx+m*.04)} ${f(base-m*.32)}L${f(cx+m*.05)} ${f(base)}Z`,'#8a5a34');
    o+=circle(cx-m*.13,base-m*.45,m*.15,p.a)+circle(cx+m*.13,base-m*.45,m*.15,p.a)+circle(cx,base-m*.6,m*.18,p.a)+circle(cx-m*.04,base-m*.5,m*.14,p.c).replace('/>',' opacity=".25"/>');
    for (const [x,y] of [[-.15,.42],[.1,.55],[.16,.4],[-.05,.66],[-.2,.55]]) o+=circle(cx+m*x,base-m*y,m*.028,'#e0563b');
    return o; }},
  flor:{nome:'Flor',pal:'rosa',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.88, fy=base-m*.5; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.a);
    o+=line(`M${f(cx)} ${f(base)}Q${f(cx-m*.03)} ${f(base-m*.25)} ${f(cx)} ${f(fy)}`,'#3a9563',m*.03)+leaf(cx-m*.01,base-m*.2,m*.16,-150,'#3a9563')+leaf(cx,base-m*.28,m*.14,-30,'#3a9563');
    for (let k=0;k<6;k++){ const a=k*60*Math.PI/180; o+=circle(cx+Math.cos(a)*m*.1,fy+Math.sin(a)*m*.1,m*.08,p.a); }
    o+=circle(cx,fy,m*.07,'#f0b035');
    return o; }},
  oculos:{nome:'Óculos',pal:'petroleo',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, cy=H*.5; let o=sparkle(W,H,R,m,p.a);
    o+=circle(cx-m*.17,cy,m*.13,p.b)+circle(cx+m*.17,cy,m*.13,p.b)+ring(cx-m*.17,cy,m*.13,p.c,m*.035)+ring(cx+m*.17,cy,m*.13,p.c,m*.035);
    o+=line(`M${f(cx-m*.05)} ${f(cy-m*.02)}Q${f(cx)} ${f(cy-m*.07)} ${f(cx+m*.05)} ${f(cy-m*.02)}`,p.c,m*.03)+line(`M${f(cx-m*.3)} ${f(cy-m*.03)}L${f(cx-m*.42)} ${f(cy-m*.08)}M${f(cx+m*.3)} ${f(cy-m*.03)}L${f(cx+m*.42)} ${f(cy-m*.08)}`,p.c,m*.03);
    o+=bar(cx-m*.23,cy-m*.06,m*.07,m*.02,CREAM)+bar(cx+m*.11,cy-m*.06,m*.07,m*.02,CREAM);
    return o; }},
  mochila:{nome:'Mochila',pal:'menta',draw(W,H,p,R,id,fx){
    const m=Math.min(W,H), cx=W/2, base=H*.88; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.c);
    o+=ring(cx,base-m*.62,m*.08,p.c,m*.03);
    o+=rrect(cx-m*.22,base-m*.64,m*.44,m*.62,m*.14,p.a)+rrect(cx-m*.15,base-m*.3,m*.3,m*.22,m*.05,p.c);
    o+=bar(cx-m*.1,base-m*.24,m*.2,m*.02,CREAM)+bar(cx-m*.15,base-m*.48,m*.3,m*.025,p.c)+circle(cx,base-m*.47,m*.02,CREAM);
    return o; }},
});
/* ---------- rostos (sentimentos): um desenho só, com expressões diferentes ---------- */
function rosto(W,H,p,R,ex){
  const m=Math.min(W,H), cx=W/2, cy=H*.5, r=m*.34; let o=sparkle(W,H,R,m,p.c);
  o+=circle(cx,cy,r,p.a)+circle(cx-r*.55,cy+r*.25,r*.14,p.b)+circle(cx+r*.55,cy+r*.25,r*.14,p.b);
  const ey=cy-r*.15, ex1=cx-r*.36, ex2=cx+r*.36, ink=p.c, sw=m*.03;
  const dots=(s=1)=>circle(ex1,ey,r*.09*s,ink)+circle(ex2,ey,r*.09*s,ink);
  const brow=(a1,a2)=>line(`M${f(ex1-r*.16)} ${f(ey-r*.24+a1)}L${f(ex1+r*.14)} ${f(ey-r*.24+a2)}M${f(ex2+r*.16)} ${f(ey-r*.24+a1)}L${f(ex2-r*.14)} ${f(ey-r*.24+a2)}`,ink,sw);
  const mouth=d=>line(d,ink,sw);
  if (ex==='feliz') o+=dots()+mouth(`M${f(cx-r*.38)} ${f(cy+r*.22)}Q${f(cx)} ${f(cy+r*.68)} ${f(cx+r*.38)} ${f(cy+r*.22)}`);
  if (ex==='triste') o+=dots()+brow(r*.08,-r*.06)+mouth(`M${f(cx-r*.32)} ${f(cy+r*.5)}Q${f(cx)} ${f(cy+r*.18)} ${f(cx+r*.32)} ${f(cy+r*.5)}`)+shape(`M${f(ex2)} ${f(ey+r*.14)}Q${f(ex2+r*.1)} ${f(ey+r*.34)} ${f(ex2)} ${f(ey+r*.38)}Q${f(ex2-r*.1)} ${f(ey+r*.34)} ${f(ex2)} ${f(ey+r*.14)}Z`,'#7fb3e6');
  if (ex==='cansado') o+=line(`M${f(ex1-r*.13)} ${f(ey)}Q${f(ex1)} ${f(ey+r*.1)} ${f(ex1+r*.13)} ${f(ey)}M${f(ex2-r*.13)} ${f(ey)}Q${f(ex2)} ${f(ey+r*.1)} ${f(ex2+r*.13)} ${f(ey)}`,ink,sw)+ell(cx,cy+r*.4,r*.12,r*.15,ink)
      +line(`M${f(cx+r*.9)} ${f(cy-r*.9)}l${f(r*.2)} 0l${f(-r*.2)} ${f(r*.2)}l${f(r*.2)} 0M${f(cx+r*1.15)} ${f(cy-r*1.2)}l${f(r*.14)} 0l${f(-r*.14)} ${f(r*.14)}l${f(r*.14)} 0`,p.c,m*.018);
  if (ex==='bravo') o+=dots()+brow(-r*.08,r*.08)+mouth(`M${f(cx-r*.3)} ${f(cy+r*.48)}Q${f(cx)} ${f(cy+r*.3)} ${f(cx+r*.3)} ${f(cy+r*.48)}`);
  if (ex==='surpreso') o+=circle(ex1,ey,r*.15,CREAM)+circle(ex2,ey,r*.15,CREAM)+dots(.75)+brow(-r*.1,-r*.1)+ell(cx,cy+r*.42,r*.14,r*.19,ink);
  if (ex==='preocupado') o+=dots()+brow(r*.06,-r*.1)+mouth(`M${f(cx-r*.32)} ${f(cy+r*.42)}q${f(r*.11)} ${f(-r*.1)} ${f(r*.21)} 0t${f(r*.21)} 0t${f(r*.21)} 0`);
  if (ex==='entediado') o+=line(`M${f(ex1-r*.13)} ${f(ey)}L${f(ex1+r*.13)} ${f(ey)}M${f(ex2-r*.13)} ${f(ey)}L${f(ex2+r*.13)} ${f(ey)}`,ink,sw)+circle(ex1,ey+r*.05,r*.06,ink)+circle(ex2,ey+r*.05,r*.06,ink)+mouth(`M${f(cx-r*.25)} ${f(cy+r*.42)}L${f(cx+r*.25)} ${f(cy+r*.42)}`);
  if (ex==='animado') o+=star(ex1,ey,r*.17,ink)+star(ex2,ey,r*.17,ink)+shape(`M${f(cx-r*.4)} ${f(cy+r*.2)}Q${f(cx)} ${f(cy+r*.85)} ${f(cx+r*.4)} ${f(cy+r*.2)}Z`,ink)+shape(`M${f(cx-r*.2)} ${f(cy+r*.48)}Q${f(cx)} ${f(cy+r*.62)} ${f(cx+r*.2)} ${f(cy+r*.48)}Q${f(cx)} ${f(cy+r*.38)} ${f(cx-r*.2)} ${f(cy+r*.48)}Z`,'#e0563b');
  return o;
}
Object.assign(SCENES,{
  feliz:{nome:'Feliz',pal:'mostarda',draw:(W,H,p,R)=>rosto(W,H,p,R,'feliz')},
  triste:{nome:'Triste',pal:'ceu',draw:(W,H,p,R)=>rosto(W,H,p,R,'triste')},
  cansado:{nome:'Cansado',pal:'lavanda',draw:(W,H,p,R)=>rosto(W,H,p,R,'cansado')},
  bravo:{nome:'Bravo',pal:'tomate',draw:(W,H,p,R)=>rosto(W,H,p,R,'bravo')},
  surpreso:{nome:'Surpreso',pal:'menta',draw:(W,H,p,R)=>rosto(W,H,p,R,'surpreso')},
  preocupado:{nome:'Preocupado',pal:'petroleo',draw:(W,H,p,R)=>rosto(W,H,p,R,'preocupado')},
  entediado:{nome:'Entediado',pal:'oliva',draw:(W,H,p,R)=>rosto(W,H,p,R,'entediado')},
  animado:{nome:'Animado',pal:'rosa',draw:(W,H,p,R)=>rosto(W,H,p,R,'animado')},
  /* comida */
  pao:{nome:'Pão',pal:'terracota',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, base=H*.84; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.a);
    o+=ell(cx,base,m*.38,m*.04,p.c)+shape(`M${f(cx-m*.38)} ${f(base-m*.02)}Q${f(cx-m*.42)} ${f(base-m*.34)} ${f(cx)} ${f(base-m*.36)}Q${f(cx+m*.42)} ${f(base-m*.34)} ${f(cx+m*.38)} ${f(base-m*.02)}Z`,'#d08a45');
    for (const x of [-.2,-.04,.12]) o+=line(`M${f(cx+m*x)} ${f(base-m*.28)}l${f(m*.1)} ${f(m*.1)}`,'#f3d29b',m*.025);
    return o; }},
  queijo:{nome:'Queijo',pal:'mostarda',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, base=H*.82; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.c);
    o+=shape(`M${f(cx-m*.36)} ${f(base)}L${f(cx-m*.36)} ${f(base-m*.22)}L${f(cx+m*.36)} ${f(base-m*.42)}L${f(cx+m*.36)} ${f(base)}Z`,'#f2c14e')+shape(`M${f(cx-m*.36)} ${f(base-m*.22)}L${f(cx+m*.36)} ${f(base-m*.42)}L${f(cx+m*.36)} ${f(base-m*.36)}L${f(cx-m*.3)} ${f(base-m*.2)}Z`,'#f7d77f');
    for (const [x,y,r] of [[-.2,.1,.05],[.05,.16,.06],[.24,.08,.04],[.22,.26,.035],[-.05,.05,.03]]) o+=circle(cx+m*x,base-m*y,m*r,'#d9a332');
    return o; }},
  frango:{nome:'Frango',pal:'terracota',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, cy=H*.5; let o=sparkle(W,H,R,m,p.a)+ell(cx,cy+m*.3,m*.38,m*.06,p.b);
    o+=`<g transform="rotate(-30 ${f(cx)} ${f(cy)})">`+bar(cx+m*.05,cy-m*.04,m*.3,m*.08,CREAM)+circle(cx+m*.36,cy-m*.06,m*.05,CREAM)+circle(cx+m*.36,cy+m*.03,m*.05,CREAM)+ell(cx-m*.1,cy,m*.22,m*.17,'#c56a2c')+ell(cx-m*.14,cy-m*.05,m*.1,m*.06,'#e59a5c')+`</g>`;
    return o; }},
  legumes:{nome:'Legumes',pal:'menta',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, base=H*.86; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.a);
    o+=`<g transform="rotate(25 ${f(cx-m*.15)} ${f(base-m*.3)})">`+shape(`M${f(cx-m*.22)} ${f(base-m*.5)}L${f(cx-m*.08)} ${f(base-m*.5)}L${f(cx-m*.15)} ${f(base-m*.02)}Z`,'#e9782f')+leaf(cx-m*.15,base-m*.5,m*.14,-110,'#3a9563')+leaf(cx-m*.15,base-m*.5,m*.12,-70,'#3a9563')+`</g>`;
    o+=rrect(cx+m*.12,base-m*.3,m*.06,m*.3,m*.02,'#8fbf6a')+circle(cx+m*.08,base-m*.36,m*.1,p.c)+circle(cx+m*.22,base-m*.36,m*.1,p.c)+circle(cx+m*.15,base-m*.46,m*.11,p.a);
    return o; }},
  suco:{nome:'Suco',pal:'mostarda',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, base=H*.86; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.c);
    o+=line(`M${f(cx+m*.04)} ${f(base-m*.5)}L${f(cx+m*.16)} ${f(base-m*.74)}L${f(cx+m*.26)} ${f(base-m*.74)}`,'#e0563b',m*.03);
    o+=shape(`M${f(cx-m*.15)} ${f(base-m*.56)}L${f(cx+m*.15)} ${f(base-m*.56)}L${f(cx+m*.12)} ${f(base)}L${f(cx-m*.12)} ${f(base)}Z`,'#fdf4e6')+shape(`M${f(cx-m*.142)} ${f(base-m*.44)}L${f(cx+m*.142)} ${f(base-m*.44)}L${f(cx+m*.12)} ${f(base-m*.01)}L${f(cx-m*.12)} ${f(base-m*.01)}Z`,'#f39a2b');
    o+=circle(cx-m*.17,base-m*.55,m*.09,'#f6b13b')+circle(cx-m*.17,base-m*.55,m*.065,'#fcd27a')+line(`M${f(cx-m*.17)} ${f(base-m*.61)}L${f(cx-m*.17)} ${f(base-m*.49)}M${f(cx-m*.23)} ${f(base-m*.55)}L${f(cx-m*.11)} ${f(base-m*.55)}`,'#f6b13b',m*.008);
    return o; }},
  agua:{nome:'Água',pal:'ceu',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, base=H*.86; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.a);
    o+=rrect(cx-m*.28,base-m*.62,m*.2,m*.62,m*.06,p.b)+rrect(cx-m*.23,base-m*.72,m*.1,m*.12,m*.02,p.c)+rrect(cx-m*.28,base-m*.4,m*.2,m*.14,0,CREAM);
    o+=shape(`M${f(cx+m*.02)} ${f(base-m*.42)}L${f(cx+m*.3)} ${f(base-m*.42)}L${f(cx+m*.27)} ${f(base)}L${f(cx+m*.05)} ${f(base)}Z`,'#f4f8fd')+shape(`M${f(cx+m*.03)} ${f(base-m*.3)}L${f(cx+m*.29)} ${f(base-m*.3)}L${f(cx+m*.27)} ${f(base-m*.01)}L${f(cx+m*.05)} ${f(base-m*.01)}Z`,p.a);
    return o; }},
  ovo:{nome:'Ovo',pal:'mostarda',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, cy=H*.52; let o=sparkle(W,H,R,m,p.c);
    o+=shape(`M${f(cx-m*.3)} ${f(cy)}Q${f(cx-m*.34)} ${f(cy-m*.3)} ${f(cx-m*.02)} ${f(cy-m*.28)}Q${f(cx+m*.36)} ${f(cy-m*.32)} ${f(cx+m*.32)} ${f(cy+m*.02)}Q${f(cx+m*.3)} ${f(cy+m*.32)} ${f(cx)} ${f(cy+m*.28)}Q${f(cx-m*.28)} ${f(cy+m*.3)} ${f(cx-m*.3)} ${f(cy)}Z`,CREAM)+circle(cx,cy,m*.12,'#f0a91f')+circle(cx-m*.04,cy-m*.04,m*.03,'#fbd57a');
    return o; }},
  /* roupas */
  camisa:{nome:'Camisa',pal:'petroleo',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, top=H*.16; let o=sparkle(W,H,R,m,p.a);
    o+=shape(`M${f(cx-m*.12)} ${f(top)}L${f(cx+m*.12)} ${f(top)}L${f(cx+m*.26)} ${f(top+m*.06)}L${f(cx+m*.36)} ${f(top+m*.62)}L${f(cx+m*.27)} ${f(top+m*.64)}L${f(cx+m*.22)} ${f(top+m*.3)}L${f(cx+m*.22)} ${f(top+m*.7)}L${f(cx-m*.22)} ${f(top+m*.7)}L${f(cx-m*.22)} ${f(top+m*.3)}L${f(cx-m*.27)} ${f(top+m*.64)}L${f(cx-m*.36)} ${f(top+m*.62)}L${f(cx-m*.26)} ${f(top+m*.06)}Z`,p.a);
    o+=shape(`M${f(cx-m*.12)} ${f(top)}L${f(cx)} ${f(top+m*.12)}L${f(cx-m*.06)} ${f(top+m*.16)}L${f(cx-m*.15)} ${f(top+m*.04)}Z`,CREAM)+shape(`M${f(cx+m*.12)} ${f(top)}L${f(cx)} ${f(top+m*.12)}L${f(cx+m*.06)} ${f(top+m*.16)}L${f(cx+m*.15)} ${f(top+m*.04)}Z`,CREAM);
    for (let k=0;k<4;k++) o+=circle(cx,top+m*(.22+k*.13),m*.016,CREAM); o+=line(`M${f(cx)} ${f(top+m*.12)}L${f(cx)} ${f(top+m*.7)}`,p.c,m*.008);
    return o; }},
  calca:{nome:'Calça',pal:'ceu',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, top=H*.12; let o=sparkle(W,H,R,m,p.a);
    o+=shape(`M${f(cx-m*.2)} ${f(top)}L${f(cx+m*.2)} ${f(top)}L${f(cx+m*.26)} ${f(top+m*.76)}L${f(cx+m*.06)} ${f(top+m*.76)}L${f(cx)} ${f(top+m*.24)}L${f(cx-m*.06)} ${f(top+m*.76)}L${f(cx-m*.26)} ${f(top+m*.76)}Z`,p.a);
    o+=rrect(cx-m*.2,top,m*.4,m*.06,m*.01,p.c)+line(`M${f(cx-m*.13)} ${f(top+m*.08)}Q${f(cx-m*.12)} ${f(top+m*.16)} ${f(cx-m*.04)} ${f(top+m*.17)}M${f(cx+m*.13)} ${f(top+m*.08)}Q${f(cx+m*.12)} ${f(top+m*.16)} ${f(cx+m*.04)} ${f(top+m*.17)}`,p.c,m*.01)+circle(cx,top+m*.03,m*.014,CREAM);
    return o; }},
  vestido:{nome:'Vestido',pal:'rosa',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, top=H*.12; let o=sparkle(W,H,R,m,p.c);
    o+=shape(`M${f(cx-m*.1)} ${f(top)}L${f(cx-m*.06)} ${f(top)}Q${f(cx)} ${f(top+m*.06)} ${f(cx+m*.06)} ${f(top)}L${f(cx+m*.1)} ${f(top)}L${f(cx+m*.14)} ${f(top+m*.3)}L${f(cx+m*.34)} ${f(top+m*.76)}Q${f(cx)} ${f(top+m*.82)} ${f(cx-m*.34)} ${f(top+m*.76)}L${f(cx-m*.14)} ${f(top+m*.3)}Z`,p.a);
    o+=bar(cx-m*.15,top+m*.28,m*.3,m*.05,p.c)+circle(cx-m*.12,top+m*.55,m*.03,CREAM)+circle(cx+m*.1,top+m*.62,m*.03,CREAM)+circle(cx-m*.02,top+m*.45,m*.03,CREAM)+circle(cx+m*.2,top+m*.7,m*.025,CREAM)+circle(cx-m*.22,top+m*.7,m*.025,CREAM);
    return o; }},
  saia:{nome:'Saia',pal:'ameixa',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, top=H*.24; let o=sparkle(W,H,R,m,p.c);
    o+=shape(`M${f(cx-m*.18)} ${f(top)}L${f(cx+m*.18)} ${f(top)}L${f(cx+m*.36)} ${f(top+m*.5)}Q${f(cx)} ${f(top+m*.56)} ${f(cx-m*.36)} ${f(top+m*.5)}Z`,p.a)+rrect(cx-m*.19,top-m*.03,m*.38,m*.07,m*.02,p.c);
    for (const x of [-.18,-.06,.06,.18]) o+=line(`M${f(cx+m*x*.6)} ${f(top+m*.06)}L${f(cx+m*x*1.4)} ${f(top+m*.5)}`,p.b,m*.012);
    return o; }},
  jaqueta:{nome:'Jaqueta',pal:'oliva',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, top=H*.14; let o=sparkle(W,H,R,m,p.c);
    o+=shape(`M${f(cx-m*.1)} ${f(top)}L${f(cx+m*.1)} ${f(top)}L${f(cx+m*.27)} ${f(top+m*.06)}L${f(cx+m*.38)} ${f(top+m*.64)}L${f(cx+m*.28)} ${f(top+m*.66)}L${f(cx+m*.23)} ${f(top+m*.34)}L${f(cx+m*.23)} ${f(top+m*.72)}L${f(cx-m*.23)} ${f(top+m*.72)}L${f(cx-m*.23)} ${f(top+m*.34)}L${f(cx-m*.28)} ${f(top+m*.66)}L${f(cx-m*.38)} ${f(top+m*.64)}L${f(cx-m*.27)} ${f(top+m*.06)}Z`,p.a);
    o+=shape(`M${f(cx-m*.1)} ${f(top)}L${f(cx)} ${f(top+m*.22)}L${f(cx+m*.1)} ${f(top)}Z`,p.c)+line(`M${f(cx)} ${f(top+m*.22)}L${f(cx)} ${f(top+m*.72)}`,CREAM,m*.016)+rrect(cx-m*.18,top+m*.46,m*.1,m*.08,m*.02,p.c)+rrect(cx+m*.08,top+m*.46,m*.1,m*.08,m*.02,p.c)+bar(cx-m*.23,top+m*.66,m*.46,m*.06,p.c);
    return o; }},
  meias:{nome:'Meias',pal:'tomate',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, top=H*.14; let o=sparkle(W,H,R,m,p.c);
    const sock=(x,col)=>shape(`M${f(x)} ${f(top)}L${f(x+m*.14)} ${f(top)}L${f(x+m*.14)} ${f(top+m*.48)}Q${f(x+m*.14)} ${f(top+m*.66)} ${f(x-m*.04)} ${f(top+m*.66)}L${f(x-m*.12)} ${f(top+m*.66)}Q${f(x-m*.2)} ${f(top+m*.58)} ${f(x-m*.12)} ${f(top+m*.5)}L${f(x)} ${f(top+m*.44)}Z`,col)+rrect(x,top,m*.14,m*.08,m*.01,CREAM)+bar(x,top+m*.2,m*.14,m*.035,CREAM);
    o+=sock(cx-m*.18,p.a)+sock(cx+m*.16,p.c);
    return o; }},
  /* clima */
  nuvem:{nome:'Nuvens',pal:'ceu',draw(W,H,p,R){ const m=Math.min(W,H); let o=circle(W*.72,H*.3,m*.14,'#f2c14e');
    o+=cloud(W*.38,H*.45,m*.12,CREAM)+cloud(W*.1,H*.25,m*.06,p.b)+cloud(W*.62,H*.7,m*.07,p.b);
    return o; }},
  vento:{nome:'Vento',pal:'menta',draw(W,H,p,R){ const m=Math.min(W,H), cy=H*.48; let o='';
    for (const [y,l,c] of [[-.2,.6,p.c],[0,.75,p.a],[.2,.5,p.c]]) o+=line(`M${f(W*.12)} ${f(cy+m*y)}L${f(W*.12+m*l)} ${f(cy+m*y)}q${f(m*.12)} 0 ${f(m*.12)} ${f(-m*.08)}q0 ${f(-m*.08)} ${f(-m*.08)} ${f(-m*.08)}`,c,m*.035);
    for (const [x,y,a] of [[.78,.25,30],[.85,.6,-40],[.7,.8,80]]) o+=leaf(W*x,H*y,m*.1,a,'#c9772f');
    return o; }},
  tempestade:{nome:'Tempestade',pal:'lavanda',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2; let o='';
    for (const x of [-.3,-.15,0,.15,.3]) o+=line(`M${f(cx+m*x)} ${f(H*.55)}l${f(-m*.05)} ${f(m*.14)}`,p.b,m*.02);
    o+=shape(`M${f(cx)} ${f(H*.42)}L${f(cx-m*.1)} ${f(H*.68)}L${f(cx)} ${f(H*.66)}L${f(cx-m*.06)} ${f(H*.9)}L${f(cx+m*.12)} ${f(H*.58)}L${f(cx+m*.02)} ${f(H*.6)}L${f(cx+m*.08)} ${f(H*.42)}Z`,'#f2c14e');
    o+=cloud(cx-m*.28,H*.36,m*.13,p.c);
    return o; }},
  neve:{nome:'Neve',pal:'ceu',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, base=H*.88; let o=ground(W,H,base,CREAM);
    for (let k=0;k<14;k++) o+=circle(W*R.r(),H*R.rr(.05,.8),m*R.rr(.01,.02),CREAM);
    o+=circle(cx,base-m*.16,m*.18,CREAM)+circle(cx,base-m*.44,m*.13,CREAM)+circle(cx-m*.04,base-m*.47,m*.016,p.c)+circle(cx+m*.04,base-m*.47,m*.016,p.c)+shape(`M${f(cx)} ${f(base-m*.43)}L${f(cx+m*.1)} ${f(base-m*.41)}L${f(cx)} ${f(base-m*.4)}Z`,'#e9782f');
    o+=bar(cx-m*.13,base-m*.34,m*.26,m*.045,'#e0563b')+rrect(cx-m*.11,base-m*.64,m*.22,m*.05,m*.01,p.c)+rrect(cx-m*.07,base-m*.74,m*.14,m*.11,m*.02,p.c)+circle(cx,base-m*.2,m*.016,p.c)+circle(cx,base-m*.12,m*.016,p.c);
    o+=line(`M${f(cx-m*.17)} ${f(base-m*.22)}L${f(cx-m*.32)} ${f(base-m*.34)}M${f(cx+m*.17)} ${f(base-m*.22)}L${f(cx+m*.32)} ${f(base-m*.34)}`,'#8a5a34',m*.018);
    return o; }},
  /* animais */
  cavalo:{nome:'Cavalo',pal:'terracota',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2-m*.06, base=H*.88; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.a);
    for (const x of [-.2,-.12,.12,.2]) o+=rrect(cx+m*x,base-m*.3,m*.05,m*.3,m*.02,'#7a4426');
    o+=line(`M${f(cx-m*.24)} ${f(base-m*.42)}Q${f(cx-m*.36)} ${f(base-m*.36)} ${f(cx-m*.32)} ${f(base-m*.2)}`,p.c,m*.05);
    o+=rrect(cx-m*.26,base-m*.48,m*.52,m*.22,m*.11,'#a55b33');
    o+=shape(`M${f(cx+m*.14)} ${f(base-m*.44)}L${f(cx+m*.26)} ${f(base-m*.7)}L${f(cx+m*.36)} ${f(base-m*.64)}L${f(cx+m*.26)} ${f(base-m*.4)}Z`,'#a55b33')+ell(cx+m*.36,base-m*.66,m*.1,m*.06,'#a55b33',30);
    o+=shape(`M${f(cx+m*.24)} ${f(base-m*.72)}L${f(cx+m*.14)} ${f(base-m*.46)}L${f(cx+m*.2)} ${f(base-m*.46)}L${f(cx+m*.29)} ${f(base-m*.7)}Z`,p.c)+shape(`M${f(cx+m*.28)} ${f(base-m*.72)}L${f(cx+m*.27)} ${f(base-m*.8)}L${f(cx+m*.32)} ${f(base-m*.73)}Z`,'#a55b33')+circle(cx+m*.33,base-m*.69,m*.015,p.c);
    return o; }},
  vaca:{nome:'Vaca',pal:'menta',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2-m*.06, base=H*.88; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.c);
    for (const x of [-.22,-.13,.12,.2]) o+=rrect(cx+m*x,base-m*.28,m*.05,m*.28,m*.02,CREAM);
    o+=rrect(cx-m*.27,base-m*.5,m*.52,m*.26,m*.08,CREAM)+ell(cx-m*.12,base-m*.42,m*.07,m*.05,'#3b3133')+ell(cx+m*.08,base-m*.33,m*.06,m*.04,'#3b3133')+ell(cx+m*.02,base-m*.46,m*.04,m*.03,'#3b3133')+ell(cx-m*.01,base-m*.24,m*.05,m*.025,'#f0a8b8');
    o+=line(`M${f(cx-m*.27)} ${f(base-m*.45)}Q${f(cx-m*.34)} ${f(base-m*.35)} ${f(cx-m*.31)} ${f(base-m*.25)}`,CREAM,m*.02);
    o+=rrect(cx+m*.2,base-m*.62,m*.16,m*.2,m*.06,CREAM)+rrect(cx+m*.21,base-m*.5,m*.14,m*.09,m*.04,'#f0a8b8')+circle(cx+m*.25,base-m*.45,m*.012,p.c)+circle(cx+m*.31,base-m*.45,m*.012,p.c);
    o+=circle(cx+m*.24,base-m*.56,m*.014,p.c)+circle(cx+m*.32,base-m*.56,m*.014,p.c)+line(`M${f(cx+m*.21)} ${f(base-m*.62)}l${f(-m*.04)} ${f(-m*.06)}M${f(cx+m*.35)} ${f(base-m*.62)}l${f(m*.04)} ${f(-m*.06)}`,'#d9a332',m*.022);
    return o; }},
  rato:{nome:'Ratinho',pal:'lavanda',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, base=H*.84; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.a);
    o+=line(`M${f(cx-m*.22)} ${f(base-m*.08)}Q${f(cx-m*.42)} ${f(base-m*.04)} ${f(cx-m*.38)} ${f(base-m*.26)}`,'#e9a0b0',m*.02);
    o+=shape(`M${f(cx-m*.24)} ${f(base)}Q${f(cx-m*.26)} ${f(base-m*.3)} ${f(cx+m*.04)} ${f(base-m*.28)}Q${f(cx+m*.28)} ${f(base-m*.2)} ${f(cx+m*.3)} ${f(base-m*.04)}L${f(cx+m*.3)} ${f(base)}Z`,'#9c97a8');
    o+=circle(cx+m*.06,base-m*.3,m*.08,'#9c97a8')+circle(cx+m*.06,base-m*.3,m*.05,'#e9a0b0')+circle(cx+m*.28,base-m*.06,m*.02,'#e9a0b0')+circle(cx+m*.18,base-m*.14,m*.016,p.c);
    o+=line(`M${f(cx+m*.28)} ${f(base-m*.06)}l${f(m*.08)} ${f(-m*.03)}M${f(cx+m*.28)} ${f(base-m*.06)}l${f(m*.08)} ${f(m*.02)}`,p.c,m*.006);
    return o; }},
  macaco:{nome:'Macaco',pal:'terracota',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, cy=H*.46; let o=sparkle(W,H,R,m,p.a)+bar(-m*.1,H*.12,W+m*.2,m*.03,'#7a4426')+leaf(W*.15,H*.13,m*.1,-30,'#3a9563')+leaf(W*.8,H*.14,m*.1,200,'#3a9563');
    o+=line(`M${f(cx-m*.1)} ${f(cy-m*.12)}L${f(cx-m*.18)} ${f(H*.13)}M${f(cx+m*.1)} ${f(cy-m*.12)}L${f(cx+m*.18)} ${f(H*.13)}`,'#7a4426',m*.05);
    o+=ell(cx,cy+m*.24,m*.14,m*.18,'#7a4426')+circle(cx-m*.17,cy,m*.07,'#7a4426')+circle(cx+m*.17,cy,m*.07,'#7a4426')+circle(cx-m*.17,cy,m*.04,'#e2a684')+circle(cx+m*.17,cy,m*.04,'#e2a684');
    o+=circle(cx,cy,m*.16,'#7a4426')+ell(cx,cy+m*.04,m*.11,m*.1,'#e2a684')+circle(cx-m*.05,cy-m*.04,m*.02,p.c)+circle(cx+m*.05,cy-m*.04,m*.02,p.c)+line(`M${f(cx-m*.05)} ${f(cy+m*.07)}Q${f(cx)} ${f(cy+m*.11)} ${f(cx+m*.05)} ${f(cy+m*.07)}`,p.c,m*.012);
    return o; }},
  /* casa */
  sofa:{nome:'Sofá',pal:'ameixa',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, base=H*.84; let o=ground(W,H,base,p.b)+rrect(cx+m*.25,H*.14,m*.16,m*.2,m*.01,CREAM)+rrect(cx+m*.27,H*.16,m*.12,m*.16,0,p.b);
    o+=rrect(cx-m*.36,base-m*.06,m*.04,m*.06,0,p.c)+rrect(cx+m*.32,base-m*.06,m*.04,m*.06,0,p.c);
    o+=rrect(cx-m*.32,base-m*.46,m*.64,m*.26,m*.06,p.a)+rrect(cx-m*.4,base-m*.3,m*.8,m*.24,m*.06,p.a)+rrect(cx-m*.42,base-m*.36,m*.12,m*.3,m*.05,p.c)+rrect(cx+m*.3,base-m*.36,m*.12,m*.3,m*.05,p.c);
    o+=rrect(cx-m*.29,base-m*.3,m*.28,m*.1,m*.04,p.b)+rrect(cx+m*.01,base-m*.3,m*.28,m*.1,m*.04,p.b);
    return o; }},
  geladeira:{nome:'Geladeira',pal:'ceu',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, base=H*.9; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.a);
    o+=rrect(cx-m*.2,base-m*.8,m*.4,m*.8,m*.05,'#f4f6f8')+line(`M${f(cx-m*.2)} ${f(base-m*.52)}L${f(cx+m*.2)} ${f(base-m*.52)}`,p.b,m*.012)+rrect(cx+m*.12,base-m*.72,m*.03,m*.14,m*.015,p.c)+rrect(cx+m*.12,base-m*.46,m*.03,m*.18,m*.015,p.c);
    o+=circle(cx-m*.08,base-m*.65,m*.03,'#e0563b')+rrect(cx-m*.1,base-m*.42,m*.1,m*.12,m*.01,'#f2c14e');
    return o; }},
  armario:{nome:'Guarda-roupa',pal:'terracota',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, base=H*.9; let o=ground(W,H,base,p.b)+sparkle(W,H,R,m,p.a);
    o+=rrect(cx-m*.28,base-m*.78,m*.56,m*.74,m*.03,p.a)+rrect(cx-m*.25,base-m*.04,m*.04,m*.04,0,p.c)+rrect(cx+m*.21,base-m*.04,m*.04,m*.04,0,p.c);
    o+=rrect(cx-m*.24,base-m*.74,m*.23,m*.58,m*.02,p.b)+rrect(cx+m*.01,base-m*.74,m*.23,m*.58,m*.02,p.b)+rrect(cx-m*.24,base-m*.14,m*.48,m*.08,m*.02,p.c);
    o+=circle(cx-m*.04,base-m*.45,m*.016,p.c)+circle(cx+m*.04,base-m*.45,m*.016,p.c);
    return o; }},
  banheira:{nome:'Banheiro',pal:'petroleo',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, base=H*.86; let o=ground(W,H,base,p.b);
    o+=line(`M${f(cx-m*.28)} ${f(base-m*.32)}L${f(cx-m*.28)} ${f(base-m*.62)}Q${f(cx-m*.28)} ${f(base-m*.72)} ${f(cx-m*.18)} ${f(base-m*.72)}`,p.c,m*.025)+shape(`M${f(cx-m*.24)} ${f(base-m*.72)}l${f(m*.12)} 0l${f(-m*.02)} ${f(m*.05)}l${f(-m*.08)} 0Z`,p.c);
    for (const [x,y] of [[-.1,.38],[.02,.42],[.14,.38],[-.04,.47],[.1,.48]]) o+=circle(cx+m*x,base-m*y,m*.05,CREAM);
    o+=shape(`M${f(cx-m*.36)} ${f(base-m*.34)}L${f(cx+m*.36)} ${f(base-m*.34)}L${f(cx+m*.32)} ${f(base-m*.1)}Q${f(cx)} ${f(base-m*.04)} ${f(cx-m*.32)} ${f(base-m*.1)}Z`,CREAM)+rrect(cx-m*.38,base-m*.36,m*.76,m*.05,m*.02,p.a);
    o+=rrect(cx-m*.28,base-m*.08,m*.04,m*.08,0,p.c)+rrect(cx+m*.24,base-m*.08,m*.04,m*.08,0,p.c)+ell(cx+m*.3,base-m*.55,m*.06,m*.04,'#f2c14e');
    return o; }},
  /* hobbies e coisas */
  violao:{nome:'Violão',pal:'mostarda',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, cy=H*.52; let o=sparkle(W,H,R,m,p.c);
    o+=`<g transform="rotate(35 ${f(cx)} ${f(cy)})">`+rrect(cx-m*.03,cy-m*.48,m*.06,m*.4,m*.01,'#5e3a22')+rrect(cx-m*.05,cy-m*.54,m*.1,m*.09,m*.02,'#3b2414')
      +circle(cx,cy+m*.02,m*.15,'#c9772f')+circle(cx,cy+m*.2,m*.19,'#c9772f')+circle(cx,cy+m*.05,m*.055,'#3b2414')+rrect(cx-m*.08,cy+m*.24,m*.16,m*.03,m*.01,'#3b2414')
      +line(`M${f(cx-m*.015)} ${f(cy-m*.48)}L${f(cx-m*.015)} ${f(cy+m*.25)}M${f(cx+m*.015)} ${f(cy-m*.48)}L${f(cx+m*.015)} ${f(cy+m*.25)}`,CREAM,m*.004)+`</g>`;
    return o; }},
  camera:{nome:'Câmera',pal:'ameixa',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, cy=H*.54; let o=sparkle(W,H,R,m,p.a);
    o+=rrect(cx-m*.12,cy-m*.3,m*.16,m*.08,m*.02,p.c)+rrect(cx-m*.36,cy-m*.24,m*.72,m*.46,m*.07,p.c)+bar(cx-m*.36,cy-m*.1,m*.72,m*.06,p.b);
    o+=circle(cx,cy,m*.17,CREAM)+circle(cx,cy,m*.12,p.a)+circle(cx,cy,m*.06,p.c)+circle(cx-m*.03,cy-m*.03,m*.02,CREAM)+rrect(cx+m*.2,cy-m*.2,m*.1,m*.06,m*.015,'#f2c14e');
    return o; }},
  ingresso:{nome:'Bilhete',pal:'tomate',draw(W,H,p,R){ const m=Math.min(W,H), cx=W/2, cy=H*.5; let o=sparkle(W,H,R,m,p.c);
    o+=`<g transform="rotate(-8 ${f(cx)} ${f(cy)})">`+rrect(cx-m*.4,cy-m*.2,m*.8,m*.4,m*.04,p.a)+circle(cx-m*.4,cy,m*.06,p.bg)+circle(cx+m*.4,cy,m*.06,p.bg)
      +line(`M${f(cx+m*.18)} ${f(cy-m*.17)}L${f(cx+m*.18)} ${f(cy+m*.17)}`,CREAM,m*.012).replace('stroke-linecap="round"','stroke-dasharray="4 5"')+bar(cx-m*.3,cy-m*.1,m*.38,m*.05,CREAM)+bar(cx-m*.3,cy,m*.28,m*.035,p.b)+bar(cx-m*.3,cy+m*.07,m*.2,m*.035,p.b)+star(cx+m*.29,cy,m*.06,CREAM)+`</g>`;
    return o; }},
});
