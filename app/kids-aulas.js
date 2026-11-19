/* =========================================================
   Sotaque · Kids: mais atividades e Aulas Kids (apresentações em páginas de caderno)
   Aulas Kids: cada tema vira uma aula pronta (capa, vocabulário com áudio, “listen and
   point”, atividades da idade, música, jogo e despedida). A professora apresenta na tela
   ou cola todas as páginas no caderno digital da criança para escrever por cima.
   ========================================================= */
const KRHYME=[['cat','cat','hat','top-hat'],['dog','dog','frog','frog'],['bee','honeybee','tree','deciduous-tree'],['star','star','car','automobile'],['cake','birthday-cake','snake','snake'],['mouse','mouse','house','house'],['moon','crescent-moon','spoon','spoon'],['goat','goat','boat','sailboat'],['bear','bear','chair','chair'],['fox','fox','box','package'],['fish','tropical-fish','dish','spaghetti'],['clock','alarm-clock','sock','socks']];
const KOPP=[['big','elephant','small','mouse'],['hot','hot-face','cold','cold-face'],['happy','grinning-face','sad','crying-face'],['day','sun','night','crescent-moon'],['fast','racing-car','slow','turtle'],['tall','giraffe','short','hamster'],['old','old-man-light','young','baby-medium-light'],['wet','cloud-with-rain','dry','desert']];
const KTPR=[['Stand up!','person-standing'],['Sit down!','chair'],['Raise your hand!','person-raising-hand'],['Clap your hands!','clapping-hands'],['Jump!','person-cartwheeling'],['Dance!','woman-dancing'],['Walk!','person-walking'],['Run!','person-running'],['Be quiet!','shushing-face'],['Point to the door!','door']];
const KSEASON=[['spring','cherry-blossom',['tulip','butterfly','honeybee']],['summer','sun',['beach-with-umbrella','soft-ice-cream','sunglasses']],['autumn','fallen-leaf',['maple-leaf','mushroom','umbrella']],['winter','snowman',['snowflake','scarf','gloves']]];
const KHAB=[['farm','house-with-garden',['cow','pig','horse','ewe','chicken','duck']],['sea','spouting-whale',['octopus','crab','dolphin','shark','tropical-fish','jellyfish']],['jungle','palm-tree',['monkey','lion','tiger','snake','parrot','crocodile']],['home','house',['cat','dog','hamster','rabbit','mouse','turtle']]];
const KHEALTH={yes:['red-apple','banana','broccoli','carrot','green-salad','tangerine','glass-of-milk','egg','strawberry'],no:['candy','lollipop','doughnut','french-fries','chocolate-bar','hamburger','cupcake','popcorn','soft-ice-cream']};
const KSHAPES={circle:'M500 0a500 500 0 1 1 0 1000a500 500 0 1 1 0-1000z',square:'M80 80h840v840H80z',triangle:'M500 60L960 920H40z',rectangle:'M20 220h960v560H20z',star:'M500 40l135 300 325 30-245 215 75 320-290-170-290 170 75-320L40 370l325-30z',heart:'M500 920C150 650 40 470 120 280c80-180 300-200 380-30c80-170 300-150 380 30c80 190-30 370-380 640z',diamond:'M500 20l420 480-420 480L80 500z',oval:'M500 150c280 0 480 160 480 350s-200 350-480 350S20 690 20 500s200-350 480-350z'};
const kShape=(k,x,y,s,fill='#fff',sw=3)=>`<g transform="translate(${x} ${y}) scale(${s/1000})"><path d="${KSHAPES[k]}" fill="${fill}" stroke="#2a2326" stroke-width="${sw*1000/s}" stroke-linejoin="round"/></g>`;
const kPlural=w=>/(s|x|ch|sh)$/.test(w)? w+'es' : /[^aeiou]y$/.test(w)? w.slice(0,-1)+'ies' : w==='mouse'? 'mice' : w==='sheep'? 'sheep' : w==='fish'? 'fish' : w+'s';
const KDAYS=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

Object.assign(KIDS_SHEETS,{
  rimas:S0('Rimas: ligue as palavras que rimam','esc',['a5','a7'],'cat–hat, bee–tree, mouse–house… ouça e ligue.',(th,R)=>{ const P=kShuf(KRHYME,R).slice(0,5), right=kShuf(P,R); let b='';
    P.forEach(([a,ea],i)=>{ const y=280+i*212; b+=kBox(70,y,330,185,i,{r:24})+kE(ea,90,y+25,120)+kT(225,y+105,a,{s:40})+kSpk(380,y+30,a,40)+`<circle cx="430" cy="${y+92}" r="12" fill="#2a2326"/>`; });
    right.forEach(([,,c,ec],i)=>{ const y=280+i*212; b+=`<circle cx="570" cy="${y+92}" r="12" fill="#2a2326"/>`+kBox(600,y,330,185,i+3,{r:24})+kE(ec,620,y+25,120)+kT(755,y+105,c,{s:40})+kSpk(910,y+30,c,40); });
    return kPage('','Rhyme time!','Diga as palavras em voz alta e ligue as que rimam (terminam com o mesmo som)',b,{ic:'musical-notes'}); }),
  sominicial:S0('Sons iniciais: separe pela letra','esc',['a5','a7'],'Recorte e cole cada figura na caixa da letra com que começa.',(th,R)=>{ const all=Object.values(KIDS_THEMES).flatMap(t=>t.w).filter(([w])=>/^[a-z]/.test(w)); const byL={}; all.forEach(x=>{ (byL[x[0][0]] ||= []).some(y=>y[0]===x[0])||byL[x[0][0]].push(x); });
    const L=kShuf(Object.keys(byL).filter(l=>byL[l].length>=3),R).slice(0,3), items=kShuf(L.flatMap(l=>kShuf(byL[l],R).slice(0,3)),R); let b='';
    L.forEach((l,i)=>{ b+=kBox(60+i*300,275,280,430,i,{stroke:'#2a2326',r:26})+kT(200+i*300,380,l.toUpperCase()+' '+l,{s:90,a:'middle',c:'#b03a5b'}); });
    items.forEach(([w,n],i)=>{ const x=60+(i%3)*300, y=760+Math.floor(i/3)*200; b+=`<rect x="${x+20}" y="${y}" width="240" height="180" rx="16" fill="#fff" stroke="#a99fa3" stroke-width="2" stroke-dasharray="10 8"/>`+kE(n,x+90,y+12,110)+kT(x+140,y+160,w,{s:24,a:'middle'})+kSpk(x+235,y+30,w,34); });
    return kPage('','Beginning sounds','Diga a palavra, recorte a figura e cole na caixa da primeira letra',b,{ic:'abacus'}); }),
  padrao:S0('Sequências: o que vem depois?','voc',['a3','a5'],'Padrões AB / ABC com figuras: desenhe ou circule a próxima.',(th,R)=>{ const all=KIDS_THEMES[th].w; let b='';
    for (let i=0;i<5;i++){ const y=280+i*212, A=kShuf(all,R), pat=i<2? [A[0],A[1]] : i<4? [A[0],A[1],A[2]] : [A[0],A[0],A[1]], seq=[...Array(6)].map((_,k)=>pat[k%pat.length]), nxt=pat[6%pat.length];
      b+=kBox(60,y,880,185,i,{r:24})+seq.map(([w,n],k)=>kE(n,80+k*112,y+40,100)).join('')+`<rect x="760" y="${y+30}" width="150" height="125" rx="20" fill="#fff" stroke="#2a2326" stroke-width="3" stroke-dasharray="10 8"/>`+kT(835,y+105,'?',{s:60,a:'middle',c:'#c9bfb5'}); }
    return kPage(th,'What comes next?','Olhe a sequência e desenhe (ou diga) o que vem depois',b); }),
  grafico:S0('Conte e faça o gráfico','voc',['a5','a7'],'Conte as figuras e pinte as colunas do gráfico.',(th,R)=>{ const W=kW(th,4,R), C=W.map(()=>1+Math.floor(R.r()*6)); let b=kBox(60,270,880,330,2,{r:26}); const cells=[];
    W.forEach(([w,n],i)=>{ for (let k=0;k<C[i];k++) cells.push(n); }); kShuf(cells,R).forEach((n,k)=>{ b+=kE(n,90+(k%11)*76,295+Math.floor(k/11)*95,70); });
    b+=`<rect x="140" y="640" width="780" height="560" rx="16" fill="#fff" stroke="#2a2326" stroke-width="3"/>`;
    for (let r=1;r<=6;r++){ const y=1200-r*85; b+=`<line x1="140" y1="${y}" x2="920" y2="${y}" stroke="#e3d9cc" stroke-width="2"/>`+kT(118,y+10,String(r),{s:22,a:'end',f:KFS}); }
    W.forEach(([w,n],i)=>{ const x=190+i*185; for (let r=0;r<6;r++) b+=`<rect x="${x}" y="${1115-r*85}" width="120" height="80" fill="none" stroke="#c9bfb5" stroke-width="2"/>`; b+=kE(n,x+25,1210,70)+kT(x+60,1300,w,{s:22,a:'middle'}); });
    b+=kT(60,1350,`How many ${kPlural(W[0][0])}? ______   Which is the most? ______________`,{s:22,b:false,f:KFS});
    return kPage(th,'Count and graph','Conte cada figura e pinte uma casinha por figura no gráfico',b); }),
  formas:S0('Formas: trace e pinte','voc',['a3','a5'],'circle, square, triangle, star, heart, rectangle.',(th,R)=>{ const L=['circle','square','triangle','star','heart','rectangle']; let b='';
    L.forEach((k,i)=>{ const x=60+(i%2)*450, y=275+Math.floor(i/2)*355; b+=kBox(x+10,y,420,330,i,{r:26})+`<g stroke-dasharray="14 10">${kShape(k,x+130,y+30,180,'#fff',5)}</g>`+kTrace(x+220,y+290,k,52,'middle')+kSpk(x+395,y+40,k,40); });
    return kPage('','Shapes','Passe o dedo e o lápis em cima, diga o nome e pinte',b,{ic:'artist-palette'}); }),
  formascores:S0('Leia e pinte as formas','ler',['a5','a7'],'“Colour the circle red”: formas + cores.',(th,R)=>{ const L=kShuf(Object.keys(KSHAPES),R).slice(0,6), C=kShuf(Object.keys(KCOL),R); let b='', y0=275;
    b+=kBox(60,y0,880,520,3,{fill:'#fffdf8',stroke:'#efe6dc'}); L.forEach((k,i)=>{ b+=kShape(k,100+(i%3)*280,y0+40+Math.floor(i/3)*240,200,'#fff',4); });
    L.forEach((k,i)=>{ const y=860+i*80; b+=kT(80,y,`${i+1}. Colour the ${k} ${C[i]}.`,{s:30})+`<circle cx="700" cy="${y-10}" r="18" fill="${KCOL[C[i]][0]}"/>`+kSpk(760,y-10,`colour the|${k}|${C[i]}`,40); });
    return kPage('','Colour the shapes','Leia (ou ouça) e pinte cada forma com a cor certa',b,{ic:'artist-palette'}); }),
  opostos:S0('Opostos','voc',['a5','a7'],'big–small, hot–cold, happy–sad… ligue os opostos.',(th,R)=>{ const P=kShuf(KOPP,R).slice(0,5), right=kShuf(P,R); let b='';
    P.forEach(([a,ea],i)=>{ const y=280+i*212; b+=kBox(70,y,330,185,i,{r:24})+kE(ea,90,y+25,130)+kT(240,y+110,a,{s:42})+kSpk(380,y+30,a,40)+`<circle cx="430" cy="${y+92}" r="12" fill="#2a2326"/>`; });
    right.forEach(([,,c,ec],i)=>{ const y=280+i*212; b+=`<circle cx="570" cy="${y+92}" r="12" fill="#2a2326"/>`+kBox(600,y,330,185,i+4,{r:24})+kE(ec,620,y+25,130)+kT(770,y+110,c,{s:42})+kSpk(910,y+30,c,40); });
    return kPage('','Opposites','Ligue cada palavra ao seu oposto e diga em voz alta',b,{ic:'yin-yang'}); }),
  sentimentos:S0('Como você se sente?','esc',['a5','a7','a9'],'Rostos, “I feel… when…” e desenho.',(th,R)=>{ const F=kShuf(KIDS_THEMES.feelings.w,R).slice(0,6); let b='';
    F.forEach(([w,n],i)=>{ const x=60+(i%3)*300, y=275+Math.floor(i/3)*260; b+=kBox(x+10,y,280,235,i,{r:24})+kE(n,x+90,y+20,120)+kT(x+150,y+185,w,{s:30,a:'middle'})+kSpk(x+262,y+32,`I feel|${w}`,36); });
    b+=kT(60,860,'Today I feel',{s:36})+kAns(290,862,650)+kT(60,960,'I feel happy when',{s:32})+kAns(360,962,580)+kT(60,1060,'I feel sad when',{s:32})+kAns(330,1062,610)+kT(60,1160,'I feel scared when',{s:32})+kAns(370,1162,570);
    b+=kT(60,1250,'Draw your face today:',{s:24,b:false,f:KFS})+`<circle cx="760" cy="1250" r="80" fill="#fffdf8" stroke="#2a2326" stroke-width="3"/>`;
    return kPage('','How do you feel?','Diga como se sente e complete as frases',b,{ic:'smiling-face-with-heart-eyes'}); }),
  comandos:S0('Comandos da sala (TPR)','voc',['a3','a5'],'Stand up, sit down, clap your hands… ouça e faça.',(th,R)=>{ const L=kShuf(KTPR,R).slice(0,8); let b='';
    L.forEach(([c,n],i)=>{ const x=60+(i%2)*450, y=275+Math.floor(i/2)*265; b+=kBox(x+10,y,420,240,i,{r:26})+kE(n,x+40,y+50,140)+kT(x+200,y+110,c.split(' ').slice(0,2).join(' '),{s:32})+kT(x+200,y+150,c.split(' ').slice(2).join(' '),{s:32})+kSpk(x+395,y+40,c,44); });
    b+=kT(60,1350,'Jogo: a professora fala (ou toca 🔈) e a criança faz o gesto. Depois a criança dá os comandos!',{s:20,b:false,c:'#6a5e61',f:KFS});
    return kPage('','Simon says!','Ouça e faça o movimento. “Simon says: stand up!”',b,{ic:'person-raising-hand'}); }),
  saudavel:S0('Healthy or unhealthy?','voc',['a5','a7'],'Separe a comida saudável e escreva frases.',(th,R)=>{ const Y=kShuf(KHEALTH.yes,R).slice(0,4), N=kShuf(KHEALTH.no,R).slice(0,4), mix=kShuf([...Y,...N],R); let b='';
    [['healthy','green-salad',60,2],['unhealthy','candy',515,0]].forEach(([t,ic,x,c])=>{ b+=kBox(x,275,425,430,c,{stroke:'#2a2326',r:26})+kE(ic,x+20,290,80)+kT(x+230,345,t,{s:40,a:'middle'}); });
    mix.forEach((n,i)=>{ const x=60+(i%4)*225, y=750+Math.floor(i/4)*215; b+=`<rect x="${x}" y="${y}" width="205" height="195" rx="18" fill="#fff" stroke="#a99fa3" stroke-width="2" stroke-dasharray="10 8"/>`+kE(n,x+42,y+25,120); });
    b+=kT(60,1230,'I eat',{s:30})+kAns(150,1232,300)+kT(470,1230,'every day. It’s healthy!',{s:30})+kT(60,1320,'I don’t eat a lot of',{s:30})+kAns(330,1322,300);
    return kPage('','Healthy food','Recorte e cole: healthy (saudável) ou unhealthy (não saudável)',b,{ic:'red-apple'}); }),
  habitat:S0('Onde eles moram?','voc',['a5','a7'],'Farm, sea, jungle ou home: ligue cada animal à casa.',(th,R)=>{ let b=''; const H=KHAB, animals=kShuf(H.flatMap(([h,,A])=>kShuf(A,R).slice(0,2).map(a=>[a,h])),R);
    H.forEach(([h,ic],i)=>{ b+=kBox(60+i*222,275,205,250,i,{stroke:'#2a2326',r:24})+kE(ic,100+i*222,295,125)+kT(162+i*222,490,h,{s:32,a:'middle'}); });
    animals.forEach(([a],i)=>{ const x=60+(i%4)*222, y=600+Math.floor(i/4)*240; b+=kBox(x,y,205,215,i+2,{r:24})+kE(a,x+45,y+25,115)+`<rect x="${x+20}" y="${y+150}" width="165" height="45" rx="10" fill="#fff"/>`; });
    b+=kT(60,1150,'Write: The cow lives on a farm. The shark lives in the sea.',{s:24,b:false,f:KFS})+kAns(60,1230,880)+kAns(60,1310,880);
    return kPage('','Where do they live?','Escreva farm, sea, jungle ou home embaixo de cada animal',b,{ic:'house-with-garden'}); }),
  roupatempo:S0('O que vestir?','voc',['a5','a7'],'Ligue o tempo à roupa certa: It’s cold. Put on your coat!',(th,R)=>{ const P=kShuf([['sunny','sun','shorts','shorts'],['cold','snowflake','coat','coat'],['rainy','cloud-with-rain','umbrella','umbrella'],['hot','hot-face','T-shirt','t-shirt'],['snowy','snowman','gloves','gloves']],R), right=kShuf(P,R); let b='';
    P.forEach(([a,ea],i)=>{ const y=280+i*212; b+=kBox(70,y,330,185,i,{r:24})+kE(ea,90,y+25,130)+kT(240,y+110,`It’s ${a}`,{s:34})+`<circle cx="430" cy="${y+92}" r="12" fill="#2a2326"/>`; });
    right.forEach(([,,c,ec],i)=>{ const y=280+i*212; b+=`<circle cx="570" cy="${y+92}" r="12" fill="#2a2326"/>`+kBox(600,y,330,185,i+3,{r:24})+kE(ec,620,y+25,130)+kT(770,y+110,c,{s:38})+kSpk(910,y+30,c,40); });
    return kPage('','What do I wear?','Ligue o tempo à roupa e diga: It’s cold. Put on your coat!',b,{ic:'coat'}); }),
  letrinhas:S0('Monte a palavra com letras','esc',['a5','a7'],'Recorte as letras e monte cada palavra.',(th,R)=>{ const W=kW(th,8,R).filter(([w])=>/^[a-z]{3,6}$/.test(w)).slice(0,4); let b='', tiles=[];
    W.forEach(([w,n],i)=>{ const y=275+i*190; b+=kBox(60,y,880,170,i,{r:24})+kE(n,80,y+20,130)+kSpk(250,y+40,w,40)+w.split('').map((_,k)=>`<rect x="${290+k*95}" y="${y+40}" width="85" height="95" rx="14" fill="#fff" stroke="#2a2326" stroke-width="3"/>`).join(''); tiles.push(...w.split('')); });
    b+=kT(60,1080,'✂ Cut out the letters:',{s:26,c:'#b03a5b'}); kShuf(tiles,R).forEach((c,k)=>{ const x=60+(k%11)*80, y=1110+Math.floor(k/11)*95; b+=`<rect x="${x}" y="${y}" width="72" height="85" rx="12" fill="#fff8e1" stroke="#a99fa3" stroke-width="2" stroke-dasharray="8 6"/>`+kT(x+36,y+60,c,{s:50,a:'middle'}); });
    return kPage(th,'Make the words','Recorte as letras de baixo e cole nos quadradinhos para formar as palavras',b); }),
  numerospalavras:S0('Números e palavras','voc',['a5'],'Ligue o número à palavra e às bolinhas (1 a 10).',(th,R)=>{ const N=kShuf([...Array(10)].map((_,i)=>i+1),R).slice(0,6), right=kShuf(N,R); let b='';
    N.forEach((n,i)=>{ const y=280+i*175; b+=kBox(70,y,200,150,i,{r:22})+kT(170,y+110,String(n),{s:90,a:'middle'})+`<circle cx="300" cy="${y+75}" r="11" fill="#2a2326"/>`; });
    right.forEach((n,i)=>{ const y=280+i*175; b+=`<circle cx="420" cy="${y+75}" r="11" fill="#2a2326"/>`+kBox(450,y,480,150,i+3,{r:22})+kT(480,y+95,NUMW[n],{s:44})+[...Array(n)].map((_,k)=>`<circle cx="${700+(k%5)*42}" cy="${y+45+Math.floor(k/5)*50}" r="16" fill="#fff" stroke="#2a2326" stroke-width="3"/>`).join('')+kSpk(905,y+30,NUMW[n],36); });
    return kPage('','Numbers and words','Ligue o número à palavra certa e pinte as bolinhas',b,{ic:'abacus'}); }),
  rosto:S0('Partes do rosto','voc',['a3','a5'],'Ligue eyes, ears, nose, mouth, hair ao rosto e pinte.',(th,R)=>{ const L=['hair','eyes','ears','nose','mouth','chin'];
    let b=kE('girl-medium',230,320,540,'line',{sw:.3});
    const pos={hair:[500,350],eyes:[440,520],ears:[250,600],nose:[500,600],mouth:[500,700],chin:[500,860]};
    kShuf(L,R).forEach((w,i)=>{ const left=i%2===0, y=360+Math.floor(i/2)*200, x=left? 70 : 760; b+=kBox(x,y,170,90,i,{r:20})+kT(x+85,y+60,w,{s:34,a:'middle'})+kSpk(left? x+205 : x-35,y+45,w,36); });
    b+=kT(500,1060,'Point and say: This is my nose!',{s:34,a:'middle'})+kT(500,1140,'Draw a hat on the face. Colour the eyes blue.',{s:26,a:'middle',b:false,f:KFS});
    return kPage('','My face','Ligue cada palavra à parte do rosto, aponte e diga',b,{ic:'grinning-face'}); }),
  velha:S0('Jogo da velha com figuras','jogo',['a3','a5','a7'],'Diga a palavra para marcar X ou O (2 tabuleiros).',(th,R)=>{ let b='';
    [0,1].forEach(g=>{ const y0=280+g*540, W=kShuf(KIDS_THEMES[th].w,R).slice(0,9); b+=`<rect x="200" y="${y0}" width="600" height="480" rx="20" fill="#fff" stroke="#2a2326" stroke-width="4"/>`;
      for (let i=1;i<3;i++){ b+=`<line x1="${200+i*200}" y1="${y0}" x2="${200+i*200}" y2="${y0+480}" stroke="#2a2326" stroke-width="5"/><line x1="200" y1="${y0+i*160}" x2="800" y2="${y0+i*160}" stroke="#2a2326" stroke-width="5"/>`; }
      W.forEach(([w,n],i)=>{ b+=kE(n,250+(i%3)*200,y0+18+Math.floor(i/3)*160,100)+kT(300+(i%3)*200,y0+142+Math.floor(i/3)*160,w,{s:20,a:'middle',c:'#6a5e61',f:KFS}); }); });
    b+=kT(500,1360,'Para marcar a casa, diga a palavra (ou uma frase: “It’s a cat!”). Três em linha ganha!',{s:20,b:false,c:'#6a5e61',a:'middle',f:KFS});
    return kPage(th,'Tic-tac-toe','Jogo da velha: diga a palavra para marcar X ou O',b,{name:false}); }),
  roleta:S0('Roleta para recortar','jogo',['a3','a5','a7'],'Roleta de 6 figuras: gire e fale a palavra ou uma frase.',(th,R)=>{ const W=kW(th,6,R); const cx=500,cy=760,r=400; let b='';
    W.forEach(([w,n],i)=>{ const a0=(i/6)*2*Math.PI-Math.PI/2, a1=((i+1)/6)*2*Math.PI-Math.PI/2, am=(a0+a1)/2;
      b+=`<path d="M${cx} ${cy}L${cx+r*Math.cos(a0)} ${cy+r*Math.sin(a0)}A${r} ${r} 0 0 1 ${cx+r*Math.cos(a1)} ${cy+r*Math.sin(a1)}Z" fill="${KSOFT[i]}" stroke="#2a2326" stroke-width="4"/>`+kE(n,cx+r*.6*Math.cos(am)-65,cy+r*.6*Math.sin(am)-75,130)+kT(cx+r*.6*Math.cos(am),cy+r*.6*Math.sin(am)+80,w,{s:24,a:'middle'}); });
    b+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#2a2326" stroke-width="6"/><circle cx="${cx}" cy="${cy}" r="18" fill="#2a2326"/>`;
    b+=`<g transform="translate(830 280)"><path d="M0 0L40 0L40 150L70 150L20 230L-30 150L0 150Z" fill="#fff" stroke="#2a2326" stroke-width="4" stroke-dasharray="8 6"/></g>`+kT(500,1250,'Recorte a roleta e a setinha. Prenda com um clipe ou um lápis no meio e gire!',{s:22,b:false,c:'#6a5e61',a:'middle',f:KFS});
    return kPage(th,'Spin and say!','Gire, diga a palavra ou faça uma frase: I like the…',b,{name:false}); }),
  fantoches:S0('Fantoches de dedo','arte',['a3','a5'],'6 bichinhos para pintar, recortar e brincar.',(th,R)=>{ const F=kShuf(Object.values(KIDS_MASKS),R).slice(0,6); let b='';
    F.forEach((n,i)=>{ const x=60+(i%3)*300, y=275+Math.floor(i/3)*540; b+=kE(n,x+40,y,220,'line',{sw:.5})+`<rect x="${x+50}" y="${y+240}" width="200" height="70" rx="12" fill="#fff" stroke="#2a2326" stroke-width="3" stroke-dasharray="8 6"/>`+kT(x+150,y+285,'glue',{s:22,a:'middle',c:'#a99fa3',f:KFS}); });
    b+=kT(500,1350,'Pinte, recorte e cole a faixa em volta do dedo. Faça os bichinhos conversarem em inglês: “Hello! I’m a cat!”',{s:19,b:false,c:'#6a5e61',a:'middle',f:KFS});
    return kPage('','Finger puppets','Pinte, recorte e brinque de teatro em inglês',b,{ic:'cat-face',name:false}); }),
  marcador:S0('Marcadores de página','arte',['a3','a5','a7','a9'],'4 marcadores para pintar com frases de leitura.',(th,R)=>{ const W=kW(th,4,R), T=['I love reading!','Keep reading!','Books are fun!','Read every day!']; let b='';
    W.forEach(([w,n],i)=>{ const x=60+i*225; b+=`<rect x="${x}" y="275" width="200" height="1060" rx="24" fill="#fff" stroke="#2a2326" stroke-width="3" stroke-dasharray="10 8"/>`+kE(n,x+30,330,140,'line')+kE('closed-book',x+50,1160,100,'line')+`<g transform="rotate(-90 ${x+100} 820)">${kT(x+100,830,T[i],{s:42,a:'middle'})}</g>`; });
    return kPage(th,'Bookmarks','Pinte, recorte e use nos seus livrinhos',b,{name:false}); }),
  plural:S0('One or more? (plural)','esc',['a7','a9'],'one cat → three cats: escreva o plural.',(th,R)=>{ const W=kW(th,6,R).filter(([w])=>!kPl(w)); let b='';
    W.slice(0,5).forEach(([w,n],i)=>{ const y=275+i*210, k=2+Math.floor(R.r()*3); b+=kBox(60,y,880,190,i,{r:24})+kE(n,85,y+40,110)+kT(210,y+110,`one ${w}`,{s:30})+`<path d="M400 ${y+100}h40l-14 -14m14 14l-14 14" stroke="#c9bfb5" stroke-width="5" fill="none" stroke-linecap="round"/>`+[...Array(k)].map((_,j)=>kE(n,470+j*80,y+30,75)).join('')+kT(470,y+165,NUMW[k],{s:28})+kAns(560,y+167,330); });
    b+=kT(60,1350,'+s (cats) · +es (boxes) · y → ies (puppies) · mouse → mice',{s:22,c:'#6a5e61',f:KFS});
    return kPage(th,'One or more?','Conte e escreva o plural: three cats',b); }),
  preposicoes:S0('In, on, under (caixa)','voc',['a5','a7'],'Onde está o bichinho? in / on / under / next to.',(th,R)=>{ const A=kShuf(['cat','dog','mouse','rabbit','hamster','frog'],R), P=['in','on','under','next to','in','on']; let b='';
    P.forEach((p,i)=>{ const x=60+(i%2)*450, y=275+Math.floor(i/2)*355, a=A[i]; b+=kBox(x+10,y,420,330,i,{r:26}); const bx=x+140, by=y+120;
      if (p==='under') b+=kE(a,bx+40,by+128,72); b+=kE('package',bx,by,150); if (p==='in') b+=kE(a,bx+35,by+20,80); if (p==='on') b+=kE(a,bx+35,by-62,86); if (p==='next to') b+=kE(a,bx+160,by+55,90);
      b+=kT(x+40,y+300,`The ${a} is`,{s:26})+kAns(x+215,y+302,190)+kSpk(x+395,y+40,`the|${a}|is|${p}|the box`,40); });
    return kPage('','Where is it?','Olhe e escreva: in, on, under ou next to the box',b,{ic:'package'}); }),
  horas:S0('Que horas são?','esc',['a7','a9'],'Ligue os relógios às horas e desenhe os ponteiros.',(th,R)=>{ const T=kShuf([[7,0],[3,30],[9,0],[12,0],[5,30],[10,15],[2,45],[6,0]],R).slice(0,4), right=kShuf(T,R); let b='';
    T.forEach(([h,m],i)=>{ const y=275+i*190; b+=kClock(160,y+85,80,h,m)+`<circle cx="270" cy="${y+85}" r="11" fill="#2a2326"/>`; });
    right.forEach(([h,m],i)=>{ const y=275+i*190; b+=`<circle cx="420" cy="${y+85}" r="11" fill="#2a2326"/>`+kBox(450,y+30,480,110,i,{r:20})+kT(480,y+100,kTimeW(h,m),{s:34})+kSpk(905,y+60,`it’s|${kTimeW(h,m)}`,36); });
    const D=[[8,0],[4,30]]; D.forEach(([h,m],i)=>{ b+=kClock(250+i*450,1130,90,h,m,{blank:true})+kT(250+i*450,1270,kTimeW(h,m),{s:28,a:'middle'}); });
    b+=kT(60,1350,'Desenhe os ponteiros nos dois últimos relógios.',{s:20,b:false,c:'#6a5e61',f:KFS});
    return kPage('','What time is it?','Ligue cada relógio à hora certa e desenhe os ponteiros',b,{ic:'alarm-clock'}); }),
  semana:S0('Dias da semana','esc',['a7','a9'],'Trace os dias e diga o que faz em cada um.',(th,R)=>{ let b=''; const act=kShuf(KIDS_DAY,R);
    KDAYS.forEach((d,i)=>{ const y=275+i*150; b+=kBox(60,y,880,130,i,{r:22})+kTrace(90,y+90,d,64)+kE(act[i%act.length][1],760,y+15,100)+kSpk(905,y+65,d,36); });
    b+=kT(60,1360,'On Monday I … · On Saturday I …',{s:22,b:false,c:'#6a5e61',f:KFS});
    return kPage('','Days of the week','Trace os dias da semana e diga uma coisa que você faz em cada dia',b,{ic:'spiral-calendar'}); }),
  estacoes:S0('As estações do ano','voc',['a5','a7'],'spring, summer, autumn, winter: ligue e pinte.',(th,R)=>{ let b='';
    KSEASON.forEach(([s,ic,L],i)=>{ const x=60+(i%2)*450, y=275+Math.floor(i/2)*530; b+=kBox(x+10,y,420,500,i,{r:28})+kE(ic,x+140,y+30,160)+kT(x+220,y+250,s,{s:48,a:'middle'})+kSpk(x+395,y+40,s,40)+L.map((n,k)=>kE(n,x+60+k*120,y+300,100,'line')).join('')+kT(x+220,y+470,'',{s:2}); });
    b+=kT(60,1350,'My favourite season is ______ because ______.',{s:24,b:false,f:KFS});
    return kPage('','Seasons','Diga as estações e pinte as figuras de cada uma',b,{ic:'cherry-blossom'}); }),
  alfabeto:S0('Letras que faltam no alfabeto','esc',['a5','a7'],'a b _ d e … complete as letras.',(th,R)=>{ const AZ='abcdefghijklmnopqrstuvwxyz'.split(''); let b='';
    for (let r=0;r<5;r++){ const st=Math.floor(R.r()*20), seq=AZ.slice(st,st+6), miss=Math.floor(R.r()*5)+1, y=280+r*200; b+=kBox(60,y,880,170,r,{r:24});
      seq.forEach((c,k)=>{ b+= k===miss||(r>2&&k===miss-1)? `<rect x="${100+k*140}" y="${y+30}" width="110" height="110" rx="18" fill="#fff" stroke="#f0a020" stroke-width="4"/>` : kT(155+k*140,y+120,c,{s:80,a:'middle'}); }); }
    b+=kT(60,1340,'a b c d e f g h i j k l m n o p q r s t u v w x y z',{s:30,c:'#a99fa3',f:KFS});
    return kPage('','Alphabet','Escreva as letras que faltam. Cante o alfabeto!',b,{ic:'abacus'}); }),
  lerdesenhar:S0('Leia e desenhe','ler',['a7','a9'],'“Draw a cat on a chair.” 4 frases para ler e desenhar.',(th,R)=>{ const things=kShuf(Object.values(KIDS_THEMES.pets.w).concat(KIDS_THEMES.toys.w),R).slice(0,4), where=['on the table','under the bed','next to the tree','in the box'], col=kShuf(Object.keys(KCOL),R); let b='';
    things.forEach(([w],i)=>{ const x=60+(i%2)*450, y=275+Math.floor(i/2)*530; const s=`Draw ${article(col[i])} ${col[i]} ${w} ${where[i]}.`; b+=`<rect x="${x+10}" y="${y}" width="420" height="390" rx="24" fill="#fffdf8" stroke="#2a2326" stroke-width="3"/>`+`<foreignObject x="${x+10}" y="${y+400}" width="420" height="100"><div xmlns="http://www.w3.org/1999/xhtml" style="font:700 26px/1.3 Andika,Figtree,sans-serif;color:#2a2326;text-align:center">${esc(s)}</div></foreignObject>`+kSpk(x+400,y+35,s,40); });
    return kPage('','Read and draw','Leia (ou ouça) e desenhe nos quadros',b,{ic:'crayon'}); }),
  entrevista:S0('Entrevista com um amigo','ler',['a9'],'Perguntas para fazer em inglês e anotar as respostas.',(th,R)=>{ const Q=['What’s your name?','How old are you?','What’s your favourite colour?','What’s your favourite animal?','What food do you like?','What can you do?','Have you got a pet?','When is your birthday?']; let b='';
    Q.forEach((q,i)=>{ const y=290+i*130; b+=kQ(60,y,i+1,q,{s:30})+kSpk(905,y-12,q,40)+kAns(100,y+52,840); });
    return kPage('','Interview a friend','Pergunte para um amigo ou alguém da família e escreva as respostas',b,{ic:'microphone'}); }),
  diario:S0('Meu fim de semana (diário)','esc',['a9'],'Frases no passado com desenhos: On Saturday I played…',(th,R)=>{ const V=['played','watched','ate','went to','visited','saw']; let b=`<rect x="60" y="275" width="420" height="380" rx="24" fill="#fffdf8" stroke="#2a2326" stroke-width="3"/><rect x="520" y="275" width="420" height="380" rx="24" fill="#fffdf8" stroke="#2a2326" stroke-width="3"/>`+kT(270,690,'Saturday',{s:30,a:'middle'})+kT(730,690,'Sunday',{s:30,a:'middle'});
    b+=kBox(60,730,880,110,3,{r:22})+`<foreignObject x="80" y="745" width="840" height="90"><div xmlns="http://www.w3.org/1999/xhtml" style="font:700 24px/1.7 Andika,Figtree,sans-serif;color:#2a2326;display:flex;flex-wrap:wrap;gap:6px 14px">${V.map(v=>`<span style="background:#fff;border-radius:10px;padding:0 10px">${v}</span>`).join('')}</div></foreignObject>`;
    ['On Saturday I','I also','On Sunday I','It was'].forEach((t,i)=>{ const y=920+i*105; b+=kT(60,y,t,{s:30})+kAns(60+t.length*15+30,y+2,880-t.length*15-30); });
    return kPage('','My weekend','Desenhe o seu fim de semana e escreva no passado (played, ate, went…)',b,{ic:'spiral-calendar'}); }),
  errado:S0('Encontre o erro','ler',['a7','a9'],'Frase errada sobre a figura: risque e escreva a certa.',(th,R)=>{ const all=KIDS_THEMES[th].w, W=kW(th,5,R); let b='';
    W.forEach(([w,n],i)=>{ const y=275+i*210, wrong=kShuf(all.filter(z=>z[0]!==w),R)[0][0], ok=R.r()<.3; b+=kBox(60,y,880,190,i,{r:24})+kE(n,85,y+30,130)+kT(250,y+75,ok? `${kPl(w)? 'These are' : 'This is'} ${kPl(w)? '' : article(w)} ${w}.`.replace('  ',' ') : `${kPl(wrong)? 'These are' : 'This is'} ${kPl(wrong)? '' : article(wrong)} ${wrong}.`.replace('  ',' '),{s:34})+`<rect x="250" y="${y+100}" width="70" height="50" rx="10" fill="#e6f6e8"/>${kT(285,y+135,'✓',{s:28,a:'middle',c:'#1f8a4c'})}<rect x="335" y="${y+100}" width="70" height="50" rx="10" fill="#fde7ea"/>${kT(370,y+135,'✗',{s:28,a:'middle',c:'#b03a5b'})}${kAns(430,y+142,480)}`; });
    return kPage(th,'True or false?','Marque ✓ ou ✗. Se estiver errada, escreva a frase certa',b); }),
  adjetivos:S0('Descreva com adjetivos','esc',['a7','a9'],'big, small, happy, funny, cute… escolha e escreva.',(th,R)=>{ const A=['big','small','happy','sad','funny','cute','fast','slow','beautiful','scary','long','short']; const W=kW(th,4,R); let b=kBox(60,275,880,110,3,{r:22})+`<foreignObject x="80" y="290" width="840" height="90"><div xmlns="http://www.w3.org/1999/xhtml" style="font:700 24px/1.7 Andika,Figtree,sans-serif;color:#2a2326;display:flex;flex-wrap:wrap;gap:6px 14px">${A.map(v=>`<span style="background:#fff;border-radius:10px;padding:0 10px">${v}</span>`).join('')}</div></foreignObject>`;
    W.forEach(([w,n],i)=>{ const y=420+i*230; b+=kBox(60,y,880,205,i,{r:24})+kE(n,85,y+35,140)+kT(260,y+80,`The ${w} is`,{s:32})+kAns(260+(`The ${w} is`).length*16+10,y+82,400)+kT(260,y+160,`It is`,{s:32})+kAns(350,y+162,320)+kT(690,y+160,'and',{s:32})+kAns(760,y+162,150); });
    return kPage(th,'Describe it!','Use as palavras do quadro para descrever cada figura',b); }),
});
for (const k of ['rimas','sominicial','formas','formascores','opostos','sentimentos','comandos','roupatempo','letrinhas','numerospalavras','rosto','preposicoes','horas','semana','estacoes','lerdesenhar','entrevista','ouvircircule','ouvircolorir','ouvirnumero','perguntas','fatos','adivinha','rotina','tempo','monstro','sequencia','aan','flash','sombra','ligar','tracar','primeira']) if (KIDS_SHEETS[k]) KIDS_SHEETS[k].audio=true;

/* =========== Aulas Kids =========== */
const KDECK_SONG={farm:'farm',body:'head',weather:'rain',transport:'bus',space:'twinkle',feelings:'happy',bugs:'spider',sea:'boat',nature:'twinkle'};
const KDECK_ACTS={a3:['sombra','igual','contar5','corbolinha'],a5:['ligar','tracar','cores','ouvircircule'],a7:['perguntas','falta','circule','caca'],a9:['quiz','embaralhada','frases','errado']};
const KIDS_DECKS=[];
for (const [th,T] of Object.entries(KIDS_THEMES)) for (const age of ['a3','a5','a7']){ if (age==='a7'&&['body','family'].includes(th)) continue; KIDS_DECKS.push({id:`${th}${age.slice(1)}`,th,age,title:T.n}); }
KIDS_DECKS.push({id:'hello5',special:'hello',age:'a5',title:'Hello! Greetings'},{id:'colors3',special:'colors',age:'a3',title:'Colours'},{id:'numbers3',special:'numbers',age:'a3',title:'Numbers 1–10'},{id:'shapes3',special:'shapes',age:'a3',title:'Shapes'},{id:'abc5',special:'abc',age:'a5',title:'The alphabet'});
const kdeckById=id=>KIDS_DECKS.find(d=>d.id===id);
/* páginas de uma aula */
function kdeckPages(d){ const P=[{t:'capa'}];
  if (d.special==='hello') return [{t:'capa'},{t:'greet'},{t:'greet2'},{t:'sheet',k:'comandos',o:''},{t:'song',op:'morning'},{t:'tchau'}];
  if (d.special==='colors') return [{t:'capa'},{t:'colors',a:0},{t:'colors',a:4},{t:'sheet',k:'corbolinha',o:'fruit'},{t:'sheet',k:'cores',o:'toys'},{t:'tchau'}];
  if (d.special==='numbers') return [{t:'capa'},{t:'numbers',a:1},{t:'numbers',a:6},{t:'sheet',k:'contar5',o:'fruit'},{t:'sheet',k:'numerospalavras',o:''},{t:'tchau'}];
  if (d.special==='shapes') return [{t:'capa'},{t:'shapes'},{t:'sheet',k:'formas',o:''},{t:'sheet',k:'formascores',o:''},{t:'tchau'}];
  if (d.special==='abc') return [{t:'capa'},{t:'abc',a:0},{t:'abc',a:13},{t:'sheet',k:'alfabeto',o:''},{t:'sheet',k:'primeira',o:'pets'},{t:'tchau'}];
  const W=KIDS_THEMES[d.th].w, n=d.age==='a3'? 6 : 8;
  for (let i=0;i<Math.min(n,W.length);i+=2) P.push({t:'vocab',a:i});
  P.push({t:'point'},{t:'shadow'},{t:'sentence'});
  KDECK_ACTS[d.age].slice(0,3).forEach(k=>P.push({t:'sheet',k,o:d.th}));
  if (KDECK_SONG[d.th]) P.push({t:'song',op:KDECK_SONG[d.th]});
  P.push({t:'game'},{t:'tchau'}); return P; }
function kdeckPageSvg(id,i){ return kMemo(`d|${id}|${i}`,()=>kdeckPageSvg0(id,i)); }
function kdeckPageSvg0(id,i){ const d=kdeckById(id); if (!d) return ''; const P=kdeckPages(d), p=P[Math.max(0,Math.min(P.length-1,i))], R=rng(hashStr(id+i)), T=d.th? KIDS_THEMES[d.th] : null, W=T? T.w : [];
  const num=kT(940,1392,`${i+1}/${P.length}`,{s:16,b:false,c:'#b2a7aa',a:'end',f:KFS});
  const slide=(title,body,o={})=>`<svg class="kp-svg" viewBox="0 0 1000 1414" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="1414" fill="${o.bg||'#fffaf2'}"/>${o.noTitle? '' : `<rect x="40" y="40" width="920" height="140" rx="40" fill="${o.band||'#fff3d6'}"/>${kT(500,135,title,{s:title.length>22? 52 : 64,a:'middle'})}`}${body}${kT(60,1392,'Sotaque Kids · Fluent Emoji (MIT)',{s:14,b:false,c:'#b2a7aa',f:KFS})}${num}</svg>`;
  if (p.t==='sheet') return kidsSheetSvg(p.k,p.o||'pets',{seed:i});
  if (p.t==='song') return kidsSheetSvg('musica',p.op,{seed:0});
  if (p.t==='capa'){ const ic= T? T.ic : {hello:'waving-hand',colors:'artist-palette',numbers:'abacus',shapes:'star',abc:'closed-book'}[d.special], pics= T? kShuf(W,R).slice(0,6).map(x=>x[1]) : ['star','sparkles','rainbow','balloon','teddy-bear','glowing-star'];
    return slide('',`<rect width="1000" height="1414" fill="${KSOFT[hashStr(id)%8]}"/>${pics.map((n,k)=>kE(n,[80,760,90,780,120,740][k],[120,140,980,1000,560,560][k],[150,150,140,140,120,120][k],'',{extra:`opacity=".9"`})).join('')}
      <circle cx="500" cy="560" r="260" fill="#fff" opacity=".85"/>${kE(ic,330,390,340)}${kT(500,930,d.title,{s:d.title.length>16? 70 : 88,a:'middle'})}${kT(500,1010,`English for kids · ${KIDS_AGES[d.age]}`,{s:32,a:'middle',b:false,c:'#6a5e61',f:KFS})}${kSpk(500,1110,`Let’s learn|${d.title}`,70)}`,{noTitle:true}); }
  if (p.t==='vocab'){ const L=W.slice(p.a,p.a+2); return slide('Let’s learn!',L.map(([w,n],k)=>{ const y=230+k*560; return kBox(80,y,840,520,k+p.a,{r:44})+kE(n,320,y+30,360)+kT(470,y+460,w,{s:w.length>9? 64 : 84,a:'middle'})+kSpk(820,y+70,w,80); }).join('')); }
  if (p.t==='point'){ const L=W.slice(0,d.age==='a3'? 6 : 8), cols=2, rows=Math.ceil(L.length/cols), h=Math.min(280,1040/rows); return slide('Listen and point!',L.map(([w,n],k)=>{ const x=80+(k%cols)*430, y=220+Math.floor(k/cols)*(h+14); return kBox(x,y,410,h,k,{r:30})+kE(n,x+24,y+(h-h*.62)/2,h*.62)+kT(x+h*.62+44,y+h/2+14,w,{s:w.length>9? 28 : w.length>7? 34 : 40})+kSpk(x+370,y+40,w,52); }).join('')+kT(500,1350,'A professora toca 🔈 ou fala; a criança aponta. Depois troquem!',{s:22,a:'middle',b:false,c:'#6a5e61',f:KFS})); }
  if (p.t==='shadow'){ const L=kShuf(W,R).slice(0,4); return slide('What’s this?',L.map(([w,n],k)=>{ const x=80+(k%2)*430, y=230+Math.floor(k/2)*520; return kBox(x,y,410,480,k,{r:34,fill:'#f4f1ee'})+kE(n,x+70,y+40,270,'shadow')+kT(x+205,y+400,`It’s ${article(w)} …`,{s:36,a:'middle',c:'#8a7e80'})+kSpk(x+360,y+50,`what’s this?|it’s|${article(w)}|${w}`,48); }).join('')+kT(500,1330,'Adivinhe pela sombra! Toque no 🔈 para ouvir a resposta.',{s:22,a:'middle',b:false,c:'#6a5e61',f:KFS})); }
  if (p.t==='sentence'){ const [a,b2]=kShuf(W,R); const S1=`I like the ${a[0]}.`, S2=kPl(b2[0])? `These are ${b2[0]}.` : `This is ${article(b2[0])} ${b2[0]}.`;
    return slide('Let’s say it!',`${kBox(80,230,840,520,1,{r:44})}${kE(a[1],100,280,300)}${kE('red-heart',360,330,110)}${kT(640,520,S1,{s:S1.length>18? 44 : 56,a:'middle'})}${kSpk(860,290,S1,70)}${kBox(80,800,840,520,4,{r:44})}${kE(b2[1],600,850,300)}${kE('backhand-index-pointing-right',420,980,130)||kE('sparkles',430,990,110)}${kT(310,1100,S2,{s:S2.length>18? 40 : 54,a:'middle'})}${kSpk(140,860,S2,70)}`); }
  if (p.t==='game'){ const G=[['Memory','brain','Mostre 3 figuras, esconda uma: “What’s missing?”'],['Simon says','person-raising-hand','“Simon says: touch the cat!” A criança aponta a figura certa.'],['Hot and cold','fire','Esconda um cartão; a criança procura enquanto você diz “hot” ou “cold”.'],['Draw and guess','crayon','Desenhe aos poucos; a criança adivinha em inglês.']];
    return slide('Let’s play!',G.map(([g,n,t],k)=>{ const y=230+k*275; return kBox(80,y,840,250,k,{r:34})+kE(n,110,y+45,160)+kT(310,y+95,g,{s:46})+`<foreignObject x="310" y="${y+115}" width="580" height="120"><div xmlns="http://www.w3.org/1999/xhtml" style="font:24px/1.35 Figtree,sans-serif;color:#5a4f52">${esc(t)}</div></foreignObject>`; }).join('')); }
  if (p.t==='tchau') return slide('Great job!',`${kE('glowing-star',330,250,340)}${kT(500,700,'Goodbye!',{s:96,a:'middle'})}${kT(500,790,'See you next time!',{s:44,a:'middle',b:false,f:KFS})}${kSpk(500,880,'great job!|goodbye!|see you next time!',80)}<circle cx="500" cy="1120" r="170" fill="#fff" stroke="#f0a020" stroke-width="6" stroke-dasharray="14 12"/>${kT(500,1130,'sticker here!',{s:34,a:'middle',c:'#b07a10',b:false,f:KFS})}`,{band:'#e6f6e8'});
  if (p.t==='greet'){ const G=[['Hello!','waving-hand'],['Hi!','grinning-face'],['Good morning!','sun'],['Goodbye!','person-gesturing-ok']]; return slide('Hello!',G.map(([g,n],k)=>{ const x=80+(k%2)*430, y=230+Math.floor(k/2)*540; return kBox(x,y,410,500,k,{r:40})+kE(n,x+75,y+40,260)+kT(x+205,y+420,g,{s:g.length>8? 44 : 64,a:'middle'})+kSpk(x+360,y+50,g,56); }).join('')); }
  if (p.t==='greet2'){ const Q=[['How are you?','thinking-face'],['I’m fine, thank you!','grinning-face'],['What’s your name?','speaking-head'],['My name is …','girl-medium']]; return slide('How are you?',Q.map(([q,n],k)=>{ const y=220+k*285; return kBox(80,y,840,260,k,{r:36})+kE(n,110,y+40,180)+kT(330,y+150,q,{s:q.length>16? 44 : 54})+kSpk(870,y+60,q,56); }).join('')); }
  if (p.t==='colors'){ const C=Object.keys(KCOL).slice(p.a,p.a+4); return slide('Colours',C.map((c,k)=>{ const y=220+k*285; return kBox(80,y,840,260,k,{r:36,fill:'#fff'})+`<circle cx="220" cy="${y+130}" r="100" fill="${KCOL[c][0]}"/>`+kE(KCOL[c][1],380,y+60,140)+kT(600,y+160,c,{s:80})+kSpk(870,y+60,c,56); }).join('')); }
  if (p.t==='numbers'){ const N=[...Array(5)].map((_,k)=>p.a+k), ic=kShuf(['red-apple','star','soccer-ball','balloon','strawberry','duck'],R)[0]; return slide(`Numbers ${p.a}–${p.a+4}`,N.map((n,k)=>{ const y=220+k*228; return kBox(80,y,840,208,k,{r:32})+kT(170,y+150,String(n),{s:130,a:'middle'})+kT(320,y+130,NUMW[n],{s:56})+[...Array(n)].map((_,j)=>kE(ic,560+(j%5)*70,y+20+Math.floor(j/5)*85,66)).join('')+kSpk(890,y+50,NUMW[n],48); }).join('')); }
  if (p.t==='shapes'){ const L=['circle','square','triangle','star','heart','rectangle']; return slide('Shapes',L.map((k,j)=>{ const x=80+(j%2)*430, y=220+Math.floor(j/2)*370; return kBox(x,y,410,340,j,{r:34})+kShape(k,x+105,y+30,200,['#e53935','#1e88e5','#43a047','#fdd835','#ec407a','#fb8c00'][j],4)+kT(x+205,y+300,k,{s:48,a:'middle'})+kSpk(x+360,y+50,k,48); }).join('')); }
  if (p.t==='abc'){ const L=Object.keys(KIDS_ABCW).slice(p.a,p.a+13); return slide('A B C',L.map((l,j)=>{ const x=80+(j%3)*285, y=220+Math.floor(j/3)*230, [w,n]=KIDS_ABCW[l]; return kBox(x,y,265,210,j,{r:28})+kT(x+70,y+130,l.toUpperCase()+l,{s:64,a:'middle'})+kE(n,x+140,y+40,110)+kT(x+132,y+190,w,{s:22,a:'middle',f:KFS})+kSpk(x+240,y+30,`${l}|${w}`,34); }).join('')); }
  return slide('',''); }
/* folha “kdeck”: a página da aula colada no caderno */
KIDS_SHEETS.kdeck=S0('Página de Aula Kids','arte',[],'',()=>'',{});
KIDS_SHEETS.kdeck.hidden=true;
const _kss=kidsSheetSvg; kidsSheetSvg=function(kind,theme,o={}){ return kind==='kdeck'? kdeckPageSvg(theme,o.seed||0) : _kss(kind,theme,o); };

/* tela da aula */
function viewKdeck(id){ const d=kdeckById(id); if (!d) return '<div class="panel"><p>Aula não encontrada.</p></div>'; const P=kdeckPages(d); if (S.kd?.id!==id) S.kd={id,i:0}; const i=Math.min(S.kd.i,P.length-1), K=kidsStudents();
  return `<div class="kd ${S.kdFs? 'kb-fs' : ''}"><div class="kp-tools no-print"><a class="link" href="#kids">← Kids</a><b class="grow">${esc(d.title)} <small class="muted">${KIDS_AGES[d.age]} · ${P.length} páginas</small></b>
      <button class="btn small ghost" data-act="kd-fs">${S.kdFs? 'Sair da tela cheia' : 'Tela cheia'}</button><button class="btn small" data-act="kd-print">Imprimir a aula</button></div>
    ${K.length? `<div class="kp-tools no-print kp-use"><label>Para <select data-kstu="1">${K.map(s=>`<option value="${s.id}" ${s.id===(S.kstu||K[0].id)?'selected':''}>${esc(s.name)}</option>`).join('')}</select></label><button class="btn small primary" data-act="kd-cad">Colar a aula toda no caderno</button><button class="btn small" data-act="kd-cad1">Colar só esta página</button><button class="btn small" data-act="kd-use">Ligar à aula</button></div>` : ''}
    <div class="kb-page"><button class="kb-nav" data-act="kd-go" data-v="${i-1}" ${i? '' : 'disabled'} aria-label="Página anterior">‹</button><div class="kp-page kd-page">${kdeckPageSvg(id,i)}</div><button class="kb-nav" data-act="kd-go" data-v="${i+1}" ${i<P.length-1? '' : 'disabled'} aria-label="Próxima página">›</button></div>
    <div class="kd-thumbs no-print">${P.map((_,k)=>`<button class="${k===i?'on':''}" data-act="kd-go" data-v="${k}" aria-label="Página ${k+1}"><span class="kd-th">${kThumb(`d|${id}|${k}`,()=>kdeckPageSvg(id,k))}</span><small>${k+1}</small></button>`).join('')}</div>
    <div class="kd-print"></div></div>`; }
function kidsDecksHtml(age){ const L=KIDS_DECKS.filter(d=>!age||d.age===age).filter(d=>!S.kq||d.title.toLowerCase().includes(S.kq.toLowerCase())||(d.th&&KIDS_THEMES[d.th].pt.toLowerCase().includes(S.kq.toLowerCase())));
  return `<p class="meta">Aulas prontas no formato de página de caderno: capa, vocabulário com áudio, “listen and point”, “what’s this?”, frases, atividades da idade, música, jogo e despedida. Apresente na tela ou cole a aula toda no caderno digital da criança.</p>
    <div class="kids-grid">${L.map(d=>`<a class="kids-card" href="#kaula-${d.id}"><span class="kids-th-img">${kThumb(`d|${d.id}|0`,()=>kdeckPageSvg(d.id,0))}</span><b>${esc(d.title)}</b><small>${KIDS_AGES[d.age]} · ${kdeckPages(d).length} páginas</small></a>`).join('')}</div>`; }
Object.assign(KIDS_ACT,{
  'kd-go'(el){ const P=kdeckPages(kdeckById(S.kd.id)); S.kd.i=Math.max(0,Math.min(P.length-1,+el.dataset.v)); render(); },
  'kd-fs'(){ S.kdFs=!S.kdFs; if (S.kdFs) document.documentElement.requestFullscreen?.().catch(()=>{}); else document.exitFullscreen?.().catch(()=>{}); render(); },
  'kd-print'(){ const box=$('.kd-print'), id=S.kd.id; if (box) box.innerHTML=kdeckPages(kdeckById(id)).map((_,k)=>`<div class="kd-pp">${kdeckPageSvg(id,k)}</div>`).join(''); document.body.classList.add('kd-printing'); window.print(); setTimeout(()=>document.body.classList.remove('kd-printing'),500); },
  'kd-use'(){ const sid=$('[data-kstu]')?.value, d=kdeckById(S.kd.id); if (sid) kidsUse(sid,{k:'kaula',t:d.id}); },
  'kd-cad'(){ const sid=$('[data-kstu]')?.value, d=kdeckById(S.kd.id); if (!sid) return; const c=cadOf(sid), P=kdeckPages(d), first=c.pages.length;
    P.forEach((_,k)=>{ const pg=cadNewPage(sid,'branca'); pg.items.push({id:'i'+uid(),t:'act',kind:'kdeck',theme:d.id,seed:k,x:0,y:0,w:CAD_W,h:CAD_H,r:0}); c.pages.push(pg.id); });
    kidsUse(sid,{k:'kaula',t:d.id},true); save(); toast(`${P.length} páginas coladas no caderno`); location.hash='caderno-'+sid; setTimeout(()=>{ if (CD.sid===sid) cadGo(first); },60); },
  'kd-cad1'(){ const sid=$('[data-kstu]')?.value, d=kdeckById(S.kd.id); if (!sid) return; const c=cadOf(sid), pg=cadNewPage(sid,'branca'); pg.items.push({id:'i'+uid(),t:'act',kind:'kdeck',theme:d.id,seed:S.kd.i,x:0,y:0,w:CAD_W,h:CAD_H,r:0}); c.pages.push(pg.id); save(); toast('Página colada no caderno'); },
});
