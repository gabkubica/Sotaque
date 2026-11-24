/* =========================================================
   Sotaque Kids · mais 15 atividades (folhas A4 em SVG, como as outras)
   3–6 anos: Eu espio, trilha pontilhada, mais ou menos, o que é? (zoom), cartas de movimento
   5–8 anos: contas com figuras, complete a outra metade, bata palmas nas sílabas
   7–10 anos: código secreto, história com figuras, mapa com coordenadas, receita, balões de quadrinho,
              comparativos, cartão-postal
   Usa os mesmos ajudantes de kids.js e kids-mais.js (kE, kT, kBox, kSpk, kQ, kAns…).
   ========================================================= */
/* recorte aumentado de uma figura (para “o que é?”) */
function kZoom(n,x,y,s,R){ const e=EMOJI[n]; if (!e) return ''; const [w,h,b]=e, f=.38+R.r()*.1, cw=w*f, ch=h*f, cx=w*(.18+R.r()*.42), cy=h*(.18+R.r()*.42), id='kz'+Math.floor(R.r()*1e9);
  return `<defs><clipPath id="${id}"><circle cx="${x+s/2}" cy="${y+s/2}" r="${s/2}"/></clipPath></defs><circle cx="${x+s/2}" cy="${y+s/2}" r="${s/2}" fill="#fff"/>
    <g clip-path="url(#${id})"><svg x="${x}" y="${y}" width="${s}" height="${s}" viewBox="${cx} ${cy} ${cw} ${ch}" preserveAspectRatio="xMidYMid slice">${b}</svg></g>
    <circle cx="${x+s/2}" cy="${y+s/2}" r="${s/2}" fill="none" stroke="#2a2326" stroke-width="6"/><line x1="${x+s*.85}" y1="${y+s*.85}" x2="${x+s*1.02}" y2="${y+s*1.02}" stroke="#2a2326" stroke-width="16" stroke-linecap="round"/>`; }
/* figura cortada ao meio (metade esquerda), em contorno */
function kHalf(n,x,y,s){ const id='kh'+n.replace(/[^a-z]/g,'')+Math.round(x+y); return `<defs><clipPath id="${id}"><rect x="${x}" y="${y}" width="${s/2}" height="${s}"/></clipPath></defs><g clip-path="url(#${id})">${kE(n,x,y,s,'line',{sw:.5})}</g>`; }
/* trilha pontilhada entre dois pontos, com formatos diferentes */
function kPath(x1,y,x2,kind){ const L=x2-x1, pts=[]; for (let i=0;i<=60;i++){ const t=i/60, X=x1+L*t; let Y=y;
    if (kind===0) Y=y+Math.sin(t*Math.PI*3)*38; else if (kind===1) Y=y+((i%20)<10? (i%10)*7.6-38 : 38-(i%10)*7.6); else if (kind===2) Y=y+Math.sin(t*Math.PI*2)*45*Math.sin(t*Math.PI); else Y=y+(Math.floor(t*6)%2? 34 : -34)*(t>.04&&t<.96? 1 : 0);
    pts.push(X.toFixed(1)+','+Y.toFixed(1)); }
  return `<polyline points="${pts.join(' ')}" fill="none" stroke="#bdb3b6" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 22"/>`; }
/* balão de fala */
const kBalloon=(x,y,w,h,txt,left)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="26" fill="#fff" stroke="#2a2326" stroke-width="3"/><path d="M${left? x+40 : x+w-70} ${y+h-2}l${left? -6 : 36} 34l${left? 36 : -6} -34z" fill="#fff" stroke="#2a2326" stroke-width="3" stroke-linejoin="round"/><rect x="${left? x+36 : x+w-74}" y="${y+h-5}" width="42" height="8" fill="#fff"/>`
  +(txt? kT(x+w/2,y+h/2+9,txt,{s:txt.length>20? 19 : 24,a:'middle',f:KFS}) : `<line x1="${x+22}" y1="${y+h/2+16}" x2="${x+w-22}" y2="${y+h/2+16}" stroke="#a99fa3" stroke-width="2"/>`);
/* símbolos do código secreto: 6 formas × 5 cores */
const KSYM=(()=>{ const C=['#e53935','#1e88e5','#43a047','#fb8c00','#8e24aa'], F=['circle','square','triangle','star','heart','diamond'], L=[]; for (const f of F) for (const c of C) L.push([f,c]); return L; })();
function kSym(k,x,y,s){ const [f,c]=KSYM[k], m=s/2, cx=x+m, cy=y+m;
  if (f==='circle') return `<circle cx="${cx}" cy="${cy}" r="${m*.8}" fill="${c}"/>`;
  if (f==='square') return `<rect x="${x+s*.15}" y="${y+s*.15}" width="${s*.7}" height="${s*.7}" rx="${s*.08}" fill="${c}"/>`;
  if (f==='triangle') return `<path d="M${cx} ${y+s*.1}L${x+s*.92} ${y+s*.88}L${x+s*.08} ${y+s*.88}Z" fill="${c}"/>`;
  if (f==='diamond') return `<path d="M${cx} ${y+s*.06}L${x+s*.94} ${cy}L${cx} ${y+s*.94}L${x+s*.06} ${cy}Z" fill="${c}"/>`;
  if (f==='heart') return `<path d="M${cx} ${y+s*.88}C${x-s*.1} ${y+s*.45} ${x+s*.18} ${y+s*.02} ${cx} ${y+s*.3}C${x+s*.82} ${y+s*.02} ${x+s*1.1} ${y+s*.45} ${cx} ${y+s*.88}Z" fill="${c}"/>`;
  const p=[]; for (let i=0;i<10;i++){ const r=i%2? m*.4 : m*.92, a=-Math.PI/2+i*Math.PI/5; p.push((cx+r*Math.cos(a)).toFixed(1)+','+(cy+r*Math.sin(a)).toFixed(1)); } return `<polygon points="${p.join(' ')}" fill="${c}"/>`; }
/* sílabas de palavras com figura (contadas à mão) */
const KSYL=[['cat','cat',1],['dog','dog',1],['fish','fish',1],['duck','duck',1],['cow','cow',1],['pig','pig',1],['sun','sun',1],['car','automobile',1],['bus','bus',1],['frog','frog',1],['bear','bear',1],['cake','birthday-cake',1],
  ['rabbit','rabbit',2],['monkey','monkey',2],['tiger','tiger',2],['zebra','zebra',2],['panda','panda',2],['apple','red-apple',2],['pizza','pizza',2],['robot','robot',2],['rocket','rocket',2],['pencil','pencil',2],['window','window',2],['flower','sunflower',2],['rainbow','rainbow',2],['carrot','carrot',2],['penguin','penguin',2],['lemon','lemon',2],
  ['elephant','elephant',3],['butterfly','butterfly',3],['banana','banana',3],['kangaroo','kangaroo',3],['dinosaur','t-rex',3],['tomato','tomato',3],['potato','potato',3],['octopus','octopus',3],['strawberry','strawberry',3],['hamburger','hamburger',3],['crocodile','crocodile',3],['astronaut','astronaut',3],['umbrella','umbrella',3],['pineapple','pineapple',3],
  ['watermelon','watermelon',4],['helicopter','helicopter',4],['television','television',4],['avocado','',4]].filter(x=>x[1]);
/* figuras quase simétricas (para completar a outra metade) */
const KSIM=[['butterfly','butterfly'],['ladybug','lady-beetle'],['house','house'],['sun','sun'],['apple','red-apple'],['strawberry','strawberry'],['rocket','rocket'],['robot','robot'],['pumpkin','jack-o-lantern'],['crown','crown'],['heart','red-heart'],['owl','owl'],['ghost','ghost'],['glasses','glasses'],['teddy bear','teddy-bear'],['cupcake','cupcake'],['castle','castle'],['snowman','snowman'],['tree','christmas-tree'],['alien','alien-monster']];

// “I spy …” com o artigo certo: plurais e incontáveis sem artigo; sentimentos e hot/cold viram “someone …”.
const KUNC=['bread','cheese','milk','popcorn','corn','broccoli','rain','snow','wind','paint','ice cream'];
const kSpy=(w,th)=>th==='feelings'||w==='hot'||w==='cold'? `I spy someone ${w}!` : kPl(w)||KUNC.includes(w)? `I spy ${w}!` : `I spy ${article(w)} ${w}!`;

Object.assign(KIDS_SHEETS,{
  /* ---------- 3 a 6 anos ---------- */
  espio:S0('Eu espio (I spy)','jogo',['a3','a5','a7'],'Uma cena cheia de figuras: encontre, circule e conte. “I spy a cat!”',(th,R)=>{
    const T=kW(th,4,R), oth=kOther(th,R), D=kW(oth,3,R), N=T.map(()=>2+Math.floor(R.r()*4)); const cells=[]; for (let r=0;r<5;r++) for (let c=0;c<7;c++) cells.push([c,r]);
    const pick=kShuf(cells,R), items=[]; let k=0; T.forEach(([,e],i)=>{ for (let j=0;j<N[i];j++) items.push(e); }); D.forEach(([,e])=>{ items.push(e); items.push(e); });
    let b=kBox(50,275,900,700,3,{r:34,fill:'#f7f3ee',stroke:'#e2d8cf'});
    items.forEach(e=>{ const [c,r]=pick[k++]; const x=78+c*124+R.r()*22, y=298+r*132+R.r()*18, s=88+R.r()*20; b+=`<g transform="rotate(${Math.round(R.r()*40-20)} ${x+s/2} ${y+s/2})">${kE(e,x,y,s)}</g>`; });
    T.forEach(([w,e],i)=>{ const x=60+(i%2)*460, y=1010+Math.floor(i/2)*170; b+=kBox(x,y,440,150,i,{r:26})+kE(e,x+20,y+20,110)+kT(x+150,y+62,kSpy(w,th),{s:Math.min(30,Math.floor(236/(.52*kSpy(w,th).length)))})+kSpk(x+408,y+40,kSpy(w,th),40)+kT(x+150,y+118,'How many?',{s:24,b:false,c:'#6a5e61',f:KFS})+`<rect x="${x+300}" y="${y+78}" width="96" height="60" rx="14" fill="#fff" stroke="#2a2326" stroke-width="3"/>`; });
    b+=kT(60,1372,'Respostas: '+T.map(([w],i)=>`${w} ${N[i]}`).join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage(th,'I spy!','Encontre as figuras na cena, circule e escreva quantas tem.',b,{ic:'magnifying-glass-tilted-left'}); }),
  trilha:S0('Trilha: leve até lá','esc',['a3','a5'],'Pré-escrita: siga a trilha pontilhada do bicho até o que ele procura. “Help the rabbit find the carrot!”',(th,R)=>{
    const P=kShuf([['rabbit','rabbit','carrot','carrot'],['monkey','monkey','banana','banana'],['bee','honeybee','flower','sunflower'],['mouse','mouse','cheese','cheese-wedge'],['cat','cat','fish','fish'],['dog','dog','house','house'],['astronaut','astronaut','rocket','rocket'],['bird','bird','tree','deciduous-tree'],['chick','baby-chick','egg','egg'],['penguin','penguin','snowflake','snowflake']],R).slice(0,4);
    let b=''; P.forEach(([a,ea,o,eo],i)=>{ const y=300+i*262; b+=kBox(50,y,900,236,i,{r:30})+kE(ea,70,y+38,160)+kE(eo,770,y+38,160)+kPath(240,y+118,760,i%4)+kT(250,y+40,`Help the ${a} find the ${o}!`,{s:24,b:false,c:'#5a4f52',f:KFS})+kSpk(880,y+34,`Help the ${a} find the ${o}!`,40); });
    return kPage('','Follow the path','Passe o dedo e depois o lápis na trilha pontilhada, sem sair do caminho.',b,{ic:'footprints'}); }),
  maismenos:S0('Mais ou menos? (more or less)','voc',['a3','a5'],'Compare os grupos: circule o que tem mais (ou menos) e escreva os números.',(th,R)=>{
    const W=kW(th,4,R); let b=''; W.forEach(([w,e],i)=>{ const y=280+i*270, more=i%2===0, a=1+Math.floor(R.r()*5); let c=1+Math.floor(R.r()*5); if (c===a) c=a===5? 2 : a+1;
      b+=kT(60,y+28,more? 'Circle the group with MORE.' : 'Circle the group with LESS.',{s:26,c:more? '#1f6440' : '#9a6a14'});
      [[a,60],[c,520]].forEach(([n,x],j)=>{ b+=kBox(x,y+44,420,180,i+j,{r:24}); for (let k=0;k<n;k++) b+=kE(e,x+20+(k%3)*96,y+58+Math.floor(k/3)*84,78); b+=`<rect x="${x+330}" y="${y+150}" width="70" height="56" rx="12" fill="#fff" stroke="#2a2326" stroke-width="3"/>`; }); });
    return kPage(th,'More or less?','Conte, escreva o número no quadradinho e circule o grupo certo.',b,{ic:'abacus'}); }),
  zoom:S0('O que é? (zoom)','voc',['a3','a5','a7'],'A lupa mostra só um pedacinho: adivinhe, circule a figura certa e escreva o nome.',(th,R)=>{
    const W=kW(th,4,R); let b=''; W.forEach(([w,e],i)=>{ const x=60+(i%2)*460, y=280+Math.floor(i/2)*540; const opts=kShuf([[w,e],...kW(th,8,R).filter(z=>z[1]!==e).slice(0,2)],R);
      b+=kBox(x,y,440,510,i,{r:30})+kT(x+30,y+48,'What is it?',{s:30})+kZoom(e,x+110,y+70,220,R);
      opts.forEach(([,oe],j)=>{ b+=`<circle cx="${x+80+j*140}" cy="${y+392}" r="58" fill="#fff" stroke="#d9cfd2" stroke-width="2"/>`+kE(oe,x+38+j*140,y+350,84); });
      b+=kAns(x+40,y+485,360); });
    b+=kT(60,1372,'Respostas: '+W.map(([w])=>w).join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage(th,'What is it?','Olhe pela lupa. Circule a figura certa e escreva o nome na linha.',b,{ic:'magnifying-glass-tilted-left'}); }),
  movimento:S0('Cartas de movimento (move like…)','musica',['a3','a5','a7'],'Cartas para recortar: sorteie e imite o bicho. “Jump like a frog!”',(th,R)=>{
    const M=kShuf([['Jump like a frog!','frog'],['Fly like a bird!','bird'],['Swim like a fish!','tropical-fish'],['Hop like a kangaroo!','kangaroo'],['Stomp like an elephant!','elephant'],['Waddle like a penguin!','penguin'],['Climb like a monkey!','monkey'],['Slither like a snake!','snake'],['Roar like a lion!','lion'],['Stand like a flamingo!','flamingo'],['Run like a dog!','dog'],['Sleep like a sloth!','sloth']],R).slice(0,8);
    let b=''; M.forEach(([t,e],i)=>{ const x=50+(i%2)*455, y=270+Math.floor(i/2)*270; b+=kBox(x,y,445,255,i,{r:28,stroke:'#2a2326',sw:2})+kE(e,x+24,y+30,170)+kT(x+215,y+96,t.split(' like ')[0],{s:40})+kT(x+215,y+148,'like a'+(t.includes(' an ')? 'n' : ''),{s:26,b:false,c:'#5a4f52',f:KFS})+kT(x+215,y+196,t.split(/ an? /)[1].replace('!',''),{s:34,c:'#7a1f35'})+kSpk(x+400,y+214,t,38); });
    b+=kCut(500,262,500,1350); [532,802,1072].forEach(y=>b+=kCut(40,y,960,y));
    return kPage('','Move like a…','Recorte as cartas. Sorteie uma, leia (ou ouça) e todo mundo imita!',b,{ic:'person-running',name:false}); }),
  /* ---------- 5 a 8 anos ---------- */
  somar:S0('Contas com figuras (+ e −)','voc',['a5','a7'],'Somas e subtrações até 10 com figuras e os números por extenso: “two plus three is five”.',(th,R)=>{
    const W=kW(th,6,R), Q=[]; let b='';
    W.forEach(([w,e],i)=>{ const add=i<4, a=add? 1+Math.floor(R.r()*4) : 3+Math.floor(R.r()*4), c=add? 1+Math.floor(R.r()*4) : 1+Math.floor(R.r()*(a-1)), r=add? a+c : a-c; Q.push(r); const y=280+i*178;
      b+=kBox(50,y,900,160,i,{r:26}); for (let k=0;k<a;k++) b+=kE(e,70+(k%4)*58,y+14+Math.floor(k/4)*64,56,!add&&k>=a-c? 'line' : undefined);
      if (!add) for (let k=a-c;k<a;k++){ const x=70+(k%4)*58, yy=y+14+Math.floor(k/4)*64; b+=`<line x1="${x}" y1="${yy+56}" x2="${x+56}" y2="${yy}" stroke="#e53935" stroke-width="5"/>`; }
      b+=kT(330,y+76,add? '+' : '−',{s:60,a:'middle'}); if (add) for (let k=0;k<c;k++) b+=kE(e,370+(k%4)*58,y+14+Math.floor(k/4)*64,56);
      b+=kT(add? 640 : 400,y+76,`${a} ${add? '+' : '−'} ${c} =`,{s:44})+`<rect x="${add? 800 : 560}" y="${y+28}" width="90" height="70" rx="14" fill="#fff" stroke="#2a2326" stroke-width="3"/>`;
      b+=kT(add? 640 : 400,y+138,`${NUMW[a]} ${add? 'plus' : 'minus'} ${NUMW[c]} is ________`,{s:22,b:false,c:'#5a4f52',f:KFS}); });
    b+=kT(60,1372,'Respostas: '+Q.join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage(th,'Picture maths','Conte as figuras, escreva o resultado e complete com o número em inglês.',b,{ic:'abacus'}); }),
  metade:S0('Complete a outra metade','arte',['a5','a7'],'Simetria: a figura está pela metade. Desenhe o outro lado no quadriculado e escreva o nome.',(th,R)=>{
    const S=kShuf(KSIM,R).slice(0,2); let b='';
    S.forEach(([w,e],i)=>{ const y=280+i*540, s=420, x=80; b+=kBox(50,y,900,510,i,{r:30,fill:'#fff',stroke:'#e2d8cf'});
      for (let gx=x+s/2;gx<=x+s;gx+=35) b+=`<line x1="${gx}" y1="${y+30}" x2="${gx}" y2="${y+30+s}" stroke="#e7eef5" stroke-width="2"/>`; for (let gy=y+30;gy<=y+30+s;gy+=35) b+=`<line x1="${x}" y1="${gy}" x2="${x+s}" y2="${gy}" stroke="#e7eef5" stroke-width="2"/>`;
      b+=kHalf(e,x,y+30,s)+`<line x1="${x+s/2}" y1="${y+16}" x2="${x+s/2}" y2="${y+s+44}" stroke="#e48a8a" stroke-width="3" stroke-dasharray="12 10"/>`;
      b+=kT(560,y+150,'Draw the other half!',{s:30})+kT(560,y+196,'Then colour it.',{s:24,b:false,c:'#5a4f52',f:KFS})+kTrace(560,y+330,w,w.length>8? 60 : 80)+kRule(560,920,y+330,w.length>8? 60 : 80)+kSpk(890,y+150,w,40); });
    return kPage('','The other half','Desenhe a metade que falta, do outro lado da linha vermelha, e pinte.',b,{ic:'artist-palette'}); }),
  silabas:S0('Bata palmas: sílabas','voc',['a5','a7'],'Ouça, bata palmas em cada pedacinho da palavra e pinte uma bolinha por palma (rab-bit = 2).',(th,R)=>{
    const L=kShuf(KSYL,R).slice(0,8); let b='';
    L.forEach(([w,e,n],i)=>{ const x=50+(i%2)*455, y=280+Math.floor(i/2)*262; b+=kBox(x,y,445,240,i,{r:28})+kE(e,x+22,y+30,140)+kT(x+180,y+88,w,{s:Math.min(40,Math.floor(196/(.56*w.length)))})+kSpk(x+405,y+40,w,40);
      for (let k=0;k<4;k++) b+=`<circle cx="${x+200+k*62}" cy="${y+170}" r="24" fill="#fff" stroke="#2a2326" stroke-width="3"/>`; b+=kE('clapping-hands',x+30,y+180,46); });
    b+=kT(60,1372,'Respostas: '+L.map(([w,,n])=>`${w} ${n}`).join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','Clap the syllables','Ouça a palavra, bata palmas e pinte uma bolinha para cada palma.',b,{ic:'clapping-hands'}); }),
  /* ---------- 7 a 10 anos ---------- */
  codigo:S0('Código secreto','jogo',['a7','a9'],'Cada letra virou um símbolo: use a chave e descubra as palavras e a frase escondida.',(th,R)=>{
    const map=kShuf([...Array(30).keys()],R).slice(0,26), A='ABCDEFGHIJKLMNOPQRSTUVWXYZ', W=kW(th,8,R).filter(([w])=>w.length<=9&&/^[a-z]+$/i.test(w)).slice(0,2);
    const last=kW(th,8,R).find(([w])=>!kPl(w)&&/^[a-z]+$/i.test(w)&&w.length<=7)||['cat'], msgs=[...W.map(([w])=>w.toUpperCase()),`I LIKE THE ${last[0].toUpperCase()}`];
    let b=kBox(50,272,900,206,3,{r:24,fill:'#f7f3ee'}); [...A].forEach((ch,i)=>{ const x=70+(i%13)*67, y=290+Math.floor(i/13)*92; b+=kSym(map[i],x+8,y,46)+kT(x+31,y+76,ch,{s:24,a:'middle',f:KFS}); });
    let y=520; msgs.forEach((m,mi)=>{ b+=kQ(60,y+16,mi+1,mi<2? 'Word' : 'Sentence',{s:24}); const chars=[...m]; const sz=Math.min(62,860/chars.length); let x=70; y+=36;
      chars.forEach(ch=>{ if (ch===' '){ x+=sz*.6; return; } b+=kSym(map[A.indexOf(ch)],x+sz*.1,y,sz*.8)+`<line x1="${x}" y1="${y+sz*1.6}" x2="${x+sz*.92}" y2="${y+sz*1.6}" stroke="#2a2326" stroke-width="2.5"/>`; x+=sz; });
      y+=sz*2+60; });
    b+=kT(60,y+20,'Now write your own secret word for a friend:',{s:24,b:false,c:'#5a4f52',f:KFS})+kAns(60,y+90,880);
    b+=kT(60,1372,'Respostas: '+msgs.join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage(th,'Secret code','Encontre cada símbolo na chave e escreva a letra embaixo.',b,{ic:'key'}); }),
  rebus:S0('História com figuras','ler',['a7','a9'],'Uma historinha em que algumas palavras viraram figuras: leia, escreva as palavras e responda.',(th,R)=>{
    const W=kW(th,8,R).filter(([w])=>!kPl(w)), [A,B,C]=W.length>=3? W : kW('pets',3,R); const art=w=>article(w);
    let b=''; const line=(y,parts)=>{ let x=70; parts.forEach(p=>{ if (typeof p==='string'){ b+=kT(x,y,p,{s:34}); x+=p.length*17+14; } else { b+=`<circle cx="${x+40}" cy="${y-12}" r="44" fill="${KSOFT[p[2]%8]}"/>`+kE(p[1],x+6,y-46,68)+`<circle cx="${x+72}" cy="${y-50}" r="15" fill="#7a1f35"/>`+kT(x+72,y-44,String(p[2]+1),{s:16,a:'middle',c:'#fff',f:KFS}); x+=96; } }); };
    line(330,[`Look! I can see ${art(A[0])}`,[A[0],A[1],0],'.']); line(440,['The',[A[0],A[1],0],'is my friend.']); line(550,['We play with '+art(B[0]),[B[0],B[1],1],'in the garden.']);
    line(660,['Then a big',[C[0],C[1],2],'comes to say hello!']); line(770,['I love my',[A[0],A[1],0],'and the',[C[0],C[1],2],'!']);
    b+=kT(60,870,'Write the words:',{s:30}); [A,B,C].forEach((w,i)=>{ const y=940+i*80; b+=`<circle cx="${76}" cy="${y-12}" r="17" fill="#7a1f35"/>`+kT(76,y-5,String(i+1),{s:18,a:'middle',c:'#fff',f:KFS})+kAns(110,y,360); });
    b+=kQ(540,950,1,'Who is my friend?',{s:24})+kAns(580,1000,360)+kQ(540,1080,2,'Where do we play?',{s:24})+kAns(580,1130,360)+kQ(540,1210,3,'Who says hello?',{s:24})+kAns(580,1260,360);
    b+=kT(60,1372,`Respostas: 1 ${A[0]} · 2 ${B[0]} · 3 ${C[0]}`,{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage(th,'A picture story','Leia a história. Escreva a palavra de cada figura e responda às perguntas.',b,{ic:'closed-book'}); }),
  coordenadas:S0('Mapa com coordenadas','jogo',['a7','a9'],'Uma grade A–E e 1–5 com figuras: “What’s in B3?” “Where is the cat?”',(th,R)=>{
    const W=kW(th,7,R), cells=kShuf([...Array(25).keys()],R).slice(0,W.length), at={}; W.forEach((w,i)=>at[cells[i]]=w); const C='ABCDE', s=100, ox=100, oy=322; let b='';
    for (let c=0;c<5;c++) b+=kT(ox+c*s+s/2,oy-12,C[c],{s:34,a:'middle',c:'#7a1f35'}); for (let r=0;r<5;r++) b+=kT(ox-34,oy+r*s+s/2+12,String(r+1),{s:34,a:'middle',c:'#7a1f35'});
    for (let i=0;i<25;i++){ const c=i%5, r=Math.floor(i/5); b+=`<rect x="${ox+c*s}" y="${oy+r*s}" width="${s}" height="${s}" fill="${(c+r)%2? '#f7f3ee' : '#fff'}" stroke="#d9cfd2" stroke-width="2"/>`; if (at[i]) b+=kE(at[i][1],ox+c*s+12,oy+r*s+12,76); }
    const name=i=>C[i%5]+(Math.floor(i/5)+1), Q1=W.slice(0,3).map((w,i)=>[`What’s in ${name(cells[i])}?`,w[0]]), Q2=W.slice(3,6).map((w,i)=>[`Where is the ${w[0]}?`,name(cells[i+3])]);
    const free=[...Array(25).keys()].filter(i=>!at[i]), d1=free[Math.floor(R.r()*free.length)], d2=free.filter(x=>x!==d1)[0];
    let y=350; [...Q1,...Q2].forEach(([q],i)=>{ b+=kQ(630,y,i+1,q,{s:Math.min(24,Math.floor(286/(.53*q.length)))})+kAns(674,y+44,276); y+=94; });
    b+=kT(60,890,'Draw it!',{s:30})+kQ(60,940,7,`Draw a sun in ${name(d1)}.`,{s:26})+kQ(60,992,8,`Draw a heart in ${name(d2)}.`,{s:26});
    b+=kT(60,1048,'Draw 3 things in your map. Your friend asks: “Is it in B2?”',{s:24,b:false,c:'#5a4f52',f:KFS});
    [['My map',100],["My friend’s map",560]].forEach(([t,gx])=>{ const cs=44, gy=1134; b+=kT(gx,1094,t,{s:26});
      for (let c=0;c<5;c++) b+=kT(gx+40+c*cs+cs/2,gy-8,C[c],{s:20,a:'middle',c:'#7a1f35',f:KFS}); for (let r=0;r<5;r++) b+=kT(gx+24,gy+r*cs+cs/2+7,String(r+1),{s:20,a:'middle',c:'#7a1f35',f:KFS});
      for (let i=0;i<25;i++) b+=`<rect x="${gx+40+(i%5)*cs}" y="${gy+Math.floor(i/5)*cs}" width="${cs}" height="${cs}" fill="${((i%5)+Math.floor(i/5))%2? '#f7f3ee' : '#fff'}" stroke="#d9cfd2" stroke-width="1.5"/>`; });
    b+=kT(60,1372,'Respostas: '+[...Q1,...Q2].map(([,a],i)=>`${i+1}. ${a}`).join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage(th,'Map game','Use as letras e os números para encontrar cada figura.',b,{ic:'globe-showing-americas'}); }),
  receita:S0('Receita: siga os passos','ler',['a7','a9'],'Ingredientes com quantidades e os passos fora de ordem para numerar (imperativo: cut, put, mix).',(th,R)=>{
    const KREC_SALADA=['Fruit salad',[['2 bananas','banana'],['1 apple','red-apple'],['10 grapes','grapes'],['6 strawberries','strawberry'],['1 spoon','spoon']],['Wash the fruit.','Cut the bananas and the apple.','Put all the fruit in a bowl.','Mix it with a spoon.','Eat and enjoy!']];
    const Rc={salada:['Fruit salad',[['2 bananas','banana'],['1 apple','red-apple'],['10 grapes','grapes'],['6 strawberries','strawberry'],['1 spoon','spoon']],['Wash the fruit.','Cut the bananas and the apple.','Put all the fruit in a bowl.','Mix it with a spoon.','Eat and enjoy!']],
      sanduiche:['A cheese sandwich',[['2 slices of bread','bread'],['cheese','cheese-wedge'],['1 tomato','tomato'],['lettuce','leafy-green']],['Take two slices of bread.','Put the cheese on the bread.','Add the tomato and the lettuce.','Put the other slice on top.','Cut it in half and eat!']],
      pizza:['A mini pizza',[['tomato sauce','tomato'],['cheese','cheese-wedge'],['mushrooms','mushroom'],['peppers','bell-pepper']],['Put tomato sauce on the dough.','Add the cheese.','Put the mushrooms and peppers on top.','Bake it in the oven for 15 minutes.','Cut it and share with your friends!']]}[th]||null;
    const [ttl,ing,steps]=Rc||KREC_SALADA;
    let b=kT(60,300,'You need:',{s:32}); ing.forEach(([t,e],i)=>{ const x=60+i*(880/ing.length); b+=kBox(x,320,880/ing.length-14,190,i,{r:24})+kE(e,x+(880/ing.length-14)/2-55,334,110)+kT(x+(880/ing.length-14)/2,490,t,{s:t.length>14? 18 : 22,a:'middle',f:KFS}); });
    const order=kShuf(steps.map((s,i)=>i),R); b+=kT(60,580,'Number the steps (1 to 5):',{s:32});
    order.forEach((k,j)=>{ const y=610+j*112; b+=kBox(60,y,880,96,j,{r:22})+`<rect x="80" y="${y+18}" width="60" height="60" rx="12" fill="#fff" stroke="#2a2326" stroke-width="3"/>`+kT(170,y+60,steps[k],{s:28})+kSpk(905,y+48,steps[k],38); });
    b+=kT(60,1230,'Draw your plate!',{s:28})+kBox(400,1180,540,150,5,{r:22,fill:'#fff',stroke:'#d9cfd2',dash:'10 8'});
    b+=kT(60,1372,'Respostas: '+order.map(k=>k+1).join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('',ttl,'Leia os ingredientes e numere os passos na ordem certa.',b,{ic:ing[0][1]}); },{salada:'Salada de frutas',sanduiche:'Sanduíche',pizza:'Minipizza'}),
  baloes:S0('Complete os balões (quadrinho)','esc',['a7','a9'],'Uma tirinha com balões vazios: escreva o que os personagens dizem, com ajuda do quadro de palavras.',(th,R)=>{
    const Sc={ola:[['boy-light','girl-medium-dark'],[['Hello! What’s your name?',''],['How old are you?',''],['','I’m fine, thank you!'],['Goodbye!','']],['My name is…','I’m … years old.','How are you?','Bye! See you!'],'Hello!'],
      loja:[['old-woman-medium','girl-medium'],[['Hello! Can I help you?',''],['Here you are!',''],['It’s two dollars.',''],['Thank you! Bye!','']],['I’d like an apple, please.','How much is it?','Here you are.','Thank you! Bye!'],'At the shop'],
      festa:[['boy-medium-dark','girl-medium'],[['Happy birthday!',''],['This is for you!',''],['How old are you today?',''],['Let’s eat the cake!','']],['Thank you!','Wow! A present!','I’m eight today!','Yummy!'],'Happy birthday!']}[th]||null;
    const [who,P,bank,ttl]=Sc||[['boy-light','girl-medium-dark'],[['Hello! What’s your name?',''],['How old are you?',''],['','I’m fine, thank you!'],['Goodbye!','']],['My name is…','I’m … years old.','How are you?','Bye! See you!'],'Hello!'];
    let b=''; P.forEach(([a,c],i)=>{ const x=50+(i%2)*455, y=275+Math.floor(i/2)*470; b+=`<rect x="${x}" y="${y}" width="445" height="450" rx="26" fill="${KSOFT[i]}" stroke="#2a2326" stroke-width="3"/>`+kT(x+22,y+40,String(i+1),{s:26,c:'#7a1f35'});
      b+=kBalloon(x+16,y+56,310,96,a,true)+kBalloon(x+120,y+178,310,96,c,false)+kE(who[0],x+30,y+290,140)+kE(who[1],x+275,y+290,140); });
    b+=kT(60,1250,'Word bank:',{s:26})+bank.map((w,i)=>kBox(60+i*222,1270,212,64,i,{r:18})+kT(166+i*222,1311,w,{s:w.length>16? 15 : 18,a:'middle',f:KFS})).join('');
    return kPage('',ttl,'Escreva nas linhas o que cada personagem diz. Use o quadro de palavras.',b,{ic:'speaking-head'}); },{ola:'Hello! (cumprimentos)',loja:'At the shop (na loja)',festa:'Happy birthday! (aniversário)'}),
  comparar:S0('Compare: bigger, faster, taller','esc',['a9'],'Comparativos com figuras: “The elephant is bigger than the mouse.”',(th,R)=>{
    const P=kShuf([['elephant','elephant','mouse','mouse','bigger','big'],['plane','airplane','bike','bicycle','faster','fast'],['giraffe','giraffe','dog','dog','taller','tall'],['snail','snail','rabbit','rabbit','slower','slow'],['ice cream','soft-ice-cream','fire','fire','colder','cold'],['rocket','rocket','car','automobile','faster','fast'],['mountain','mountain','house','house','higher','high'],['cat','cat','tiger','tiger','smaller','small'],['whale','spouting-whale','fish','tropical-fish','bigger','big'],['turtle','turtle','horse','horse','slower','slow']],R).slice(0,5);
    let b=kBox(60,272,880,90,3,{r:20})+kT(90,328,'The elephant is bigger than the mouse.',{s:30})+kSpk(895,317,'The elephant is bigger than the mouse.',40);
    P.forEach(([a,ea,c,ec,adj,base],i)=>{ const y=390+i*178; b+=kBox(60,y,880,160,i,{r:24})+kE(ea,80,y+18,124)+kT(220,y+92,'vs',{s:30,a:'middle',c:'#7a1f35'})+kE(ec,250,y+18,124)+kT(400,y+48,`(${base})`,{s:22,b:false,c:'#6a5e61',f:KFS})+kT(400,y+100,'The ________ is ________',{s:26,b:false,f:KFS})+kT(400,y+140,'than the ________.',{s:26,b:false,f:KFS}); });
    b+=kT(60,1300,'Now compare two things in your house!',{s:24,b:false,c:'#5a4f52',f:KFS})+kAns(60,1340,880);
    b+=kT(60,1380,'Respostas: '+P.map(([a,,c,,adj])=>`The ${a} is ${adj} than the ${c}.`).join(' '),{s:10,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','Let’s compare!','Escreva frases comparando as figuras (bigger, faster, taller, slower…).',b,{ic:'1st-place-medal'}); }),
  postal:S0('Cartão-postal','esc',['a9'],'Escreva um cartão-postal das férias: frente com a paisagem e verso com mensagem guiada e endereço.',(th,R)=>{
    const O={praia:['the beach','at','beach-with-umbrella','sunny',['swim','play in the sand','eat ice cream']],montanha:['the mountains','in','mountain','cold',['walk','see the snow','drink hot chocolate']],acampamento:['the campsite','at','tent','hot',['sleep in a tent','see the stars','sing songs']],castelo:['the castle','at','castle','windy',['visit the towers','take photos','eat sandwiches']]}[th]||['the beach','at','beach-with-umbrella','sunny',['swim','play in the sand','eat ice cream']];
    const [place,prep,e,wt,acts]=O; let b=`<rect x="60" y="275" width="880" height="470" rx="18" fill="#e3f1fd" stroke="#2a2326" stroke-width="3"/>`+kE(e,330,300,330)+kT(500,710,'Greetings from '+place+'!',{s:40,a:'middle',c:'#7a1f35'});
    b+=`<rect x="60" y="775" width="880" height="560" rx="18" fill="#fff" stroke="#2a2326" stroke-width="3"/><line x1="560" y1="800" x2="560" y2="1310" stroke="#d9cfd2" stroke-width="3"/><rect x="800" y="800" width="110" height="130" rx="8" fill="#fff" stroke="#a99fa3" stroke-width="2" stroke-dasharray="8 6"/>`+kT(855,875,'stamp',{s:18,a:'middle',b:false,c:'#a99fa3',f:KFS});
    [['Dear __________,',840],[`I’m ${prep} ${place}!`,910],[`The weather is ${wt}.`,980],['Every day I __________',1050],['and I __________.',1120],['See you soon!',1190],['Love, __________',1260]].forEach(([t,y])=>b+=kT(85,y,t,{s:25,b:false,f:KFS}));
    [1000,1080,1160,1240].forEach(y=>b+=kAns(590,y,320)); b+=kT(590,975,'To:',{s:22,b:false,c:'#6a5e61',f:KFS});
    b+=kT(500,1365,'Ideas: '+acts.join(' · '),{s:20,b:false,c:'#5a4f52',a:'middle',f:KFS});
    return kPage('','A postcard','Pinte a frente. No verso, complete a mensagem e escreva o endereço.',b,{ic:'framed-picture',band:'#e3f1fd'}); },{praia:'Na praia',montanha:'Nas montanhas',acampamento:'No acampamento',castelo:'No castelo'}),
});
