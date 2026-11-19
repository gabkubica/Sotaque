/* =========================================================
   Sotaque · Kids: materiais para imprimir (e colar no caderno digital)
   Cada material é gerado na hora como uma folha A4 em SVG (1000 × 1414), com as
   ilustrações do Sotaque (coloridas ou só o contorno, para colorir). Tema × tipo:
   9 temas de vocabulário e 25 tipos (cartões, colorir, traçar, ligar, bingo, memória,
   dominó, caça-palavras, labirinto, mini-livro, tabuleiro, músicas com gestos…).
   A professora imprime, cola no caderno e liga o material à aula (fica no histórico).
   ========================================================= */
const KIDS_THEMES={
  animals:{n:'Animals',pt:'Animais',w:[['cat','gato'],['dog','cachorro'],['bird','passaro'],['rabbit','coelho'],['fish','peixes'],['horse','cavalo'],['cow','vaca'],['monkey','macaco'],['mouse','rato']]},
  food:{n:'Food',pt:'Comida',w:[['apple','maca'],['banana','banana'],['cake','bolo'],['pizza','pizza'],['bread','pao'],['cheese','queijo'],['egg','ovo'],['juice','suco'],['water','agua'],['chicken','frango'],['ice cream','sorvete']]},
  toys:{n:'Toys',pt:'Brinquedos',w:[['ball','bola'],['bike','bicicleta'],['balloon','balao'],['present','presente'],['guitar','violao'],['car','carro'],['train','trem'],['book','livro'],['camera','camera']]},
  clothes:{n:'Clothes',pt:'Roupas',w:[['hat','chapeu'],['dress','vestido'],['skirt','saia'],['jacket','jaqueta'],['socks','meias'],['shoes','sapato'],['glasses','oculos'],['shirt','camisa'],['trousers','calca'],['T-shirt','camiseta']]},
  nature:{n:'Weather and nature',pt:'Tempo e natureza',w:[['sun','sol'],['cloud','nuvem'],['rain','chuva'],['snow','neve'],['wind','vento'],['tree','arvore'],['flower','flor'],['sea','mar'],['mountain','montanha']]},
  feelings:{n:'Feelings',pt:'Sentimentos',w:[['happy','feliz'],['sad','triste'],['tired','cansado'],['angry','bravo'],['surprised','surpreso'],['worried','preocupado'],['bored','entediado'],['excited','animado']]},
  home:{n:'My house',pt:'A casa',w:[['bed','cama'],['chair','cadeira'],['sofa','sofa'],['fridge','geladeira'],['bath','banheira'],['lamp','lampada'],['house','casa'],['clock','relogio'],['cupboard','armario']]},
  transport:{n:'Transport',pt:'Transportes',w:[['car','carro'],['bus','onibus'],['plane','aviao'],['train','trem'],['bike','bicicleta'],['balloon','balao']]},
  school:{n:'School things',pt:'Escola',w:[['book','livro'],['pencil','lapis'],['bag','mochila'],['clock','relogio'],['glasses','oculos'],['letter','envelope'],['lamp','lampada']]},
};
const KCOL={red:'#e53935',blue:'#1e88e5',green:'#43a047',yellow:'#fdd835',orange:'#fb8c00',purple:'#8e24aa',pink:'#ec407a',brown:'#8d6e63'};
const KF='Andika, Figtree, system-ui, sans-serif';
/* ---------- peças de desenho ---------- */
const kLine=svg=>svg.replace(/<filter[\s\S]*?<\/filter>/g,'').replace(/<[a-z]+[^>]*filter="url\([^"]*\)"[^>]*\/>/g,'').replace(/style="fill:[^"]*"/g,'fill="#fff"').replace(/fill="(?!none)[^"]*"/g,'fill="#fff"').replace(/stroke="(?!none)[^"]*"/g,'stroke="#221c1e"').replace(/<(path|circle|rect|ellipse|polygon)\b(?![^>]*stroke=)/g,'<$1 stroke="#221c1e" stroke-width="2.6"').replace(/\sopacity="[^"]*"/g,'');
const kLite=svg=>svg.replace(/<filter[\s\S]*?<\/filter>/g,'').replace(/<[a-z]+[^>]*filter="url\([^"]*\)"[^>]*\/>/g,'');
function kImg(k,x,y,w,h,mode){ if (!SCENES[k]) return ''; let q=quadro(imgPal(k),k,hashStr(k)%97,{w:300,h:300,frame:false});
  q= mode==='line'? kLine(q) : kLite(q);
  return q.replace(/^<svg class="quadro"/,`<svg x="${x}" y="${y}" width="${w}" height="${h}"`).replace(/ preserveAspectRatio="[^"]*"/,' preserveAspectRatio="xMidYMid meet"').replace(/ role="img" aria-label="[^"]*"/,''); }
const kCard=(k,x,y,w,h,mode,r=22)=>`<g><clipPath id="kc${Math.round(x)}_${Math.round(y)}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath><g clip-path="url(#kc${Math.round(x)}_${Math.round(y)})">${kImg(k,x,y,w,h,mode)}</g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="none" stroke="#221c1e" stroke-width="3"/></g>`;
const kT=(x,y,t,o={})=>`<text x="${x}" y="${y}" font-family="${o.f||KF}" font-size="${o.s||40}" font-weight="${o.b===false? 400 : 700}" fill="${o.c||'#221c1e'}" text-anchor="${o.a||'start'}" ${o.extra||''}>${esc(t)}</text>`;
/* letras para traçar: cinza-claro com contorno pontilhado (nas grandes) ou contorno fino (nas pequenas) */
const kTrace=(x,y,t,s=96,a='start')=>`<text x="${x}" y="${y}" font-family="${KF}" font-size="${s}" font-weight="400" fill="#e4dde0" stroke="#a79ca0" stroke-width="${s>200? 3 : 1.2}" ${s>200? 'stroke-dasharray="9 8"' : ''} text-anchor="${a}" letter-spacing="${s>200? 0 : s*.04}">${esc(t)}</text>`;
const kYt=q=>`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
const kRule=(x1,x2,y,s=96)=>`<line x1="${x1}" y1="${y-s*.72}" x2="${x2}" y2="${y-s*.72}" stroke="#c9d9ea" stroke-width="2"/><line x1="${x1}" y1="${y-s*.36}" x2="${x2}" y2="${y-s*.36}" stroke="#c9d9ea" stroke-width="2" stroke-dasharray="12 10"/><line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#e48a8a" stroke-width="2.6"/>`;
const kCut=(x1,y1,x2,y2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#9a8f92" stroke-width="2" stroke-dasharray="10 8"/>`;
const kStar=(x,y,s,c)=>`<path d="M${x} ${y-s}L${x+s*.29} ${y-s*.4}L${x+s*.95} ${y-s*.31}L${x+s*.47} ${y+s*.15}L${x+s*.59} ${y+s*.81}L${x} ${y+s*.5}L${x-s*.59} ${y+s*.81}L${x-s*.47} ${y+s*.15}L${x-s*.95} ${y-s*.31}L${x-s*.29} ${y-s*.4}Z" fill="${c}"/>`;
function kPage(title,sub,body,o={}){ const P=PAL[o.pal||'mostarda'];
  return `<svg class="kp-svg" viewBox="0 0 1000 1414" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="1414" fill="#fff"/>
    ${o.noHead? '' : `<rect x="40" y="36" width="920" height="150" rx="30" fill="${P.bg}"/>${kStar(905,78,22,P.b)}${kStar(870,140,13,P.a)}
    ${kT(80,118,title,{s:title.length>26? 44 : 56})}${kT(80,162,sub,{s:24,b:false,c:'#5a4f52',f:'Figtree, system-ui, sans-serif'})}`}
    ${o.name===false? '' : `${kT(560,226,'Name:',{s:24,c:'#5a4f52'})}<line x1="640" y1="230" x2="955" y2="230" stroke="#9a8f92" stroke-width="2"/>`}
    ${body}${kT(500,1392,'Sotaque Kids · © Gabriel Kubica',{s:16,b:false,c:'#a89c9e',a:'middle',f:'Figtree, system-ui, sans-serif'})}</svg>`; }
const kShuf=(a,R)=>{ a=a.slice(); for (let i=a.length-1;i>0;i--){ const j=Math.floor(R.r()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const kWords=(th,n,R)=>kShuf(KIDS_THEMES[th]?.w||KIDS_THEMES.animals.w,R).slice(0,n);
const kDice=(x,y,s,n)=>{ const P={1:[[.5,.5]],2:[[.28,.28],[.72,.72]],3:[[.25,.25],[.5,.5],[.75,.75]],4:[[.28,.28],[.72,.28],[.28,.72],[.72,.72]],5:[[.25,.25],[.75,.25],[.5,.5],[.25,.75],[.75,.75]],6:[[.28,.22],[.72,.22],[.28,.5],[.72,.5],[.28,.78],[.72,.78]]}[n];
  return `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="${s*.18}" fill="#fff" stroke="#221c1e" stroke-width="3"/>${P.map(([a,b])=>`<circle cx="${x+a*s}" cy="${y+b*s}" r="${s*.08}" fill="#221c1e"/>`).join('')}`; };

/* ---------- músicas tradicionais (domínio público) com gestos ---------- */
const KIDS_SONGS={
  head:{t:'Head, Shoulders, Knees and Toes',busca:'Head Shoulders Knees and Toes kids song',img:['feliz','camiseta','calca','sapato'],l:['Head, shoulders, knees and toes, knees and toes!','Head, shoulders, knees and toes, knees and toes!','And eyes and ears and mouth and nose,','Head, shoulders, knees and toes, knees and toes!'],a:'Toque em cada parte do corpo enquanto canta. Cada vez, cante mais rápido!'},
  twinkle:{t:'Twinkle, Twinkle, Little Star',busca:'Twinkle Twinkle Little Star nursery rhyme',img:['noite','sol','nuvem','balao'],l:['Twinkle, twinkle, little star,','How I wonder what you are!','Up above the world so high,','Like a diamond in the sky.','Twinkle, twinkle, little star,','How I wonder what you are!'],a:'Abra e feche as mãos como estrelas brilhando; aponte para o céu em “up above”.'},
  farm:{t:'Old MacDonald Had a Farm',busca:'Old MacDonald Had a Farm kids song',img:['vaca','cachorro','gato','cavalo'],l:['Old MacDonald had a farm, E-I-E-I-O!','And on that farm he had a cow, E-I-E-I-O!','With a moo moo here and a moo moo there,','Here a moo, there a moo, everywhere a moo moo!','Old MacDonald had a farm, E-I-E-I-O!'],a:'Troque o animal a cada estrofe: dog (woof), cat (meow), horse (neigh). A criança faz o som!'},
  bus:{t:'The Wheels on the Bus',busca:'The Wheels on the Bus kids song',img:['onibus','cidade','feliz','relogio'],l:['The wheels on the bus go round and round,','Round and round, round and round.','The wheels on the bus go round and round,','All through the town!','The wipers on the bus go swish, swish, swish…','The horn on the bus goes beep, beep, beep…'],a:'Gire os braços (round and round), mexa as mãos como limpadores (swish) e aperte a buzina (beep).'},
  happy:{t:'If You’re Happy and You Know It',busca:'If You\'re Happy and You Know It kids song',img:['feliz','animado','surpreso','sapato'],l:['If you’re happy and you know it, clap your hands!','If you’re happy and you know it, clap your hands!','If you’re happy and you know it, then your face will surely show it.','If you’re happy and you know it, clap your hands!','… stamp your feet! … shout “Hooray!”'],a:'Bata palmas, bata os pés e grite “Hooray!” com os braços para cima.'},
  boat:{t:'Row, Row, Row Your Boat',busca:'Row Row Row Your Boat nursery rhyme',img:['mar','peixes','sol','feliz'],l:['Row, row, row your boat,','Gently down the stream.','Merrily, merrily, merrily, merrily,','Life is but a dream.'],a:'Sentados de frente, de mãos dadas, remem para a frente e para trás.'},
  rain:{t:'Rain, Rain, Go Away',busca:'Rain Rain Go Away nursery rhyme',img:['chuva','nuvem','sol','bola'],l:['Rain, rain, go away,','Come again another day.','Little children want to play,','Rain, rain, go away!'],a:'Mexa os dedos como chuva caindo e depois “empurre” a chuva para longe.'},
  spider:{t:'Incy Wincy Spider',busca:'Incy Wincy Spider nursery rhyme',img:['chuva','sol','casa','arvore'],l:['Incy Wincy spider climbed up the water spout.','Down came the rain and washed the spider out.','Out came the sun and dried up all the rain,','And Incy Wincy spider climbed up the spout again!'],a:'Os dedos “sobem” como aranha, as mãos descem como chuva e fazem um sol bem grande.'},
  sheep:{t:'Baa, Baa, Black Sheep',busca:'Baa Baa Black Sheep nursery rhyme',img:['vaca','casa','mochila','feliz'],l:['Baa, baa, black sheep, have you any wool?','Yes sir, yes sir, three bags full!','One for the master, one for the dame,','And one for the little boy who lives down the lane.'],a:'Conte nos dedos “one, two, three” e faça o “baa” das ovelhas.'},
  morning:{t:'Good Morning to You',busca:'Good Morning to You song kids',img:['amanhecer','sol','feliz','xicara'],l:['Good morning to you,','Good morning to you,','Good morning, dear teacher,','Good morning to you!'],a:'Canção para começar a aula: acene e troque “teacher” pelo nome da criança.'},
};
const KIDS_DOTS={
  star:{n:'Star',p:[[.5,.04],[.62,.36],[.96,.37],[.69,.58],[.79,.92],[.5,.72],[.21,.92],[.31,.58],[.04,.37],[.38,.36]]},
  house:{n:'House',p:[[.2,.95],[.2,.45],[.08,.45],[.5,.08],[.92,.45],[.8,.45],[.8,.95],[.58,.95],[.58,.7],[.42,.7],[.42,.95]]},
  fish:{n:'Fish',p:[[.06,.5],[.2,.3],[.4,.2],[.6,.24],[.75,.38],[.95,.2],[.88,.5],[.95,.8],[.75,.62],[.6,.76],[.4,.8],[.2,.7]]},
  heart:{n:'Heart',p:[...Array(16)].map((_,i)=>{ const t=i/16*2*Math.PI, x=16*Math.sin(t)**3, y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t); return [.5+x/36,.45-y/36]; })},
  boat:{n:'Boat',p:[[.1,.62],[.9,.62],[.75,.85],[.25,.85],[.1,.62],[.48,.62],[.48,.08],[.82,.55],[.52,.55]]},
  kite:{n:'Kite',p:[[.5,.05],[.82,.35],[.5,.72],[.18,.35],[.5,.05]]},
};
const KIDS_ABC='abcdefghijklmnopqrstuvwxyz'.split('');
const KIDS_ABCW={a:['apple','maca'],b:['banana','banana'],c:['cat','gato'],d:['dog','cachorro'],e:['egg','ovo'],f:['fish','peixes'],g:['guitar','violao'],h:['house','casa'],i:['ice cream','sorvete'],j:['jacket','jaqueta'],k:['key','chave'],l:['lamp','lampada'],m:['monkey','macaco'],n:['night','noite'],o:['orange juice','suco'],p:['pizza','pizza'],q:['queen','coracao'],r:['rabbit','coelho'],s:['sun','sol'],t:['tree','arvore'],u:['umbrella','chuva'],v:['violin','violao'],w:['water','agua'],x:['xylophone','microfone'],y:['yellow','sol'],z:['zebra','cavalo']};

/* ---------- tipos de material ---------- */
const KIDS_CATS={voc:'Vocabulário',esc:'Escrever e traçar',jogo:'Jogos',musica:'Músicas',arte:'Arte e prêmios'};
const KIDS_SHEETS={
  flash:{n:'Flashcards para recortar',c:'voc',d:'6 cartões com figura e palavra.',f(th,R){ const W=kWords(th,6,R); let b='';
    W.forEach(([w,k],i)=>{ const x=70+(i%2)*440, y=270+Math.floor(i/2)*360; b+=kCard(k,x+20,y+10,390,250,'color')+kT(x+215,y+318,w,{s:46,a:'middle'}); });
    b+=kCut(500,260,500,1350)+kCut(60,620,940,620)+kCut(60,980,940,980)+kT(70,1350,'✂  Cut out the cards and play!',{s:22,b:false,c:'#7a6e71'});
    return kPage(`${KIDS_THEMES[th].n} flashcards`,'Recorte os cartões · use para memória, “What’s this?” e esconde-esconde',b,{name:false}); }},
  colorir:{n:'Página para colorir',c:'arte',d:'Uma figura grande para colorir, com a palavra.',f(th,R){ const [w,k]=kWords(th,1,R)[0];
    return kPage(`Colour the ${w}!`,'Pinte a figura e escreva a palavra',`${kImg(k,110,260,780,780,'line')}${kTrace(500,1180,w,130,'middle')}${kRule(140,860,1180,130)}${kRule(140,860,1330,110)}`); }},
  colorir4:{n:'Colorir e escrever',c:'arte',d:'4 figuras para colorir e escrever o nome.',f(th,R){ const W=kWords(th,4,R); let b='';
    W.forEach(([w,k],i)=>{ const x=70+(i%2)*450, y=270+Math.floor(i/2)*540; b+=kCard(k,x+15,y,410,360,'line')+kTrace(x+30,y+450,w,64)+kRule(x+20,x+420,y+450,64)+kRule(x+20,x+420,y+520,52); });
    return kPage(`Colour and write`,'Pinte as figuras e copie as palavras',b); }},
  cores:{n:'Pinte com as cores',c:'voc',d:'“Colour the cat red” · cores + vocabulário.',f(th,R){ const W=kWords(th,4,R), C=kShuf(Object.keys(KCOL),R).slice(0,4); let b='';
    W.forEach(([w,k],i)=>{ const y=262+i*280, c=C[i]; b+=kCard(k,70,y,330,250,'line')+kT(440,y+100,`Colour the ${w}`,{s:46})+kT(440,y+170,c,{s:56,c:KCOL[c]})+`<circle cx="${440+c.length*33+50}" cy="${y+152}" r="26" fill="none" stroke="${KCOL[c]}" stroke-width="5"/>`; });
    return kPage('Colour time!','Leia (ou ouça a professora) e pinte com a cor certa',b); }},
  tracar:{n:'Trace as palavras',c:'esc',d:'Traçar e copiar 4 palavras na pauta de caligrafia.',f(th,R){ const W=kWords(th,4,R); let b='';
    W.forEach(([w,k],i)=>{ const y=262+i*275; b+=kCard(k,60,y,220,220,'color')+kTrace(320,y+120,w,100)+kRule(310,950,y+120,100)+kRule(310,950,y+235,90); });
    return kPage('Trace and write','Passe o lápis por cima e escreva de novo embaixo',b); }},
  ligar:{n:'Ligue a figura à palavra',c:'voc',d:'5 figuras e 5 palavras para ligar.',f(th,R){ const W=kWords(th,5,R), S=kShuf(W,R); let b='';
    W.forEach(([w,k],i)=>{ const y=262+i*218; b+=kCard(k,90,y,250,190,'color')+`<circle cx="380" cy="${y+95}" r="12" fill="#221c1e"/>`; });
    S.forEach(([w],i)=>{ const y=262+i*218; b+=`<circle cx="610" cy="${y+95}" r="12" fill="#221c1e"/>`+kT(650,y+112,w,{s:52}); });
    return kPage('Match!','Ligue cada figura à palavra certa',b); }},
  circule:{n:'Circule a palavra certa',c:'voc',d:'6 figuras com 3 palavras cada.',f(th,R){ const all=KIDS_THEMES[th].w, W=kWords(th,6,R); let b='';
    W.forEach(([w,k],i)=>{ const x=60+(i%2)*450, y=262+Math.floor(i/2)*370; const op=kShuf([w,...kShuf(all.filter(z=>z[0]!==w),R).slice(0,2).map(z=>z[0])],R);
      b+=kCard(k,x+10,y,410,220,'color')+op.map((o,j)=>kT(x+10+j*140+65,y+290,o,{s:o.length>7? 26 : 34,a:'middle'})).join(''); });
    return kPage('Circle the word','Olhe a figura e circule a palavra certa',b); }},
  falta:{n:'Complete a letra que falta',c:'esc',d:'Palavras com uma letra faltando.',f(th,R){ const W=kWords(th,6,R).filter(([w])=>!/[\s-]/.test(w)); let b='';
    W.forEach(([w,k],i)=>{ const x=60+(i%2)*450, y=262+Math.floor(i/2)*370, m=1+Math.floor(R.r()*(w.length-1)), L=w.split('');
      b+=kCard(k,x+70,y,300,220,'color')+L.map((ch,j)=>{ const cx=x+225-(L.length*62)/2+j*62; return j===m? `<rect x="${cx}" y="${y+245}" width="54" height="68" rx="10" fill="#fff8e1" stroke="#f0a020" stroke-width="3"/>` : kT(cx+27,y+300,ch,{s:56,a:'middle'}); }).join(''); });
    return kPage('What’s missing?','Escreva a letra que falta em cada palavra',b); }},
  bingo:{n:'Bingo de figuras',c:'jogo',d:'2 cartelas 3 × 3 (recorte) para jogar com a professora.',f(th,R){ const all=KIDS_THEMES[th].w; let b='';
    [0,1].forEach(g=>{ const pick=kShuf(all,R).slice(0,Math.min(9,all.length)), y0=270+g*560; b+=kT(500,y0+12,'B I N G O',{s:40,a:'middle',c:'#7a1f35'});
      pick.forEach(([w,k],i)=>{ const x=170+(i%3)*225, y=y0+40+Math.floor(i/3)*165; b+=kCard(k,x,y,210,150,'color',14); }); });
    b+=kCut(60,820,940,820)+kT(70,1350,'A professora fala a palavra; a criança cobre a figura. Quem completar uma linha grita BINGO!',{s:20,b:false,c:'#7a6e71'});
    return kPage(`${KIDS_THEMES[th].n} bingo`,'Duas cartelas diferentes: uma para a criança, outra para a professora',b,{name:false}); }},
  memoria:{n:'Jogo da memória',c:'jogo',d:'12 cartas: 6 figuras e 6 palavras.',f(th,R){ const W=kWords(th,6,R), cards=kShuf([...W.map(x=>['i',...x]),...W.map(x=>['w',...x])],R); let b='';
    cards.forEach(([t,w,k],i)=>{ const x=60+(i%3)*300, y=262+Math.floor(i/3)*270; b+= t==='i'? kCard(k,x+15,y+15,270,240,'color',18) : `<rect x="${x+15}" y="${y+15}" width="270" height="240" rx="18" fill="#fff8e1" stroke="#221c1e" stroke-width="3"/>${kT(x+150,y+150,w,{s:w.length>7? 36 : 50,a:'middle'})}`; });
    for (let i=1;i<3;i++) b+=kCut(60+i*300,262,60+i*300,1342); for (let j=1;j<4;j++) b+=kCut(60,262+j*270,960,262+j*270);
    return kPage('Memory game','Recorte as cartas, vire para baixo e encontre os pares',b,{name:false}); }},
  domino:{n:'Dominó',c:'jogo',d:'8 peças: figura de um lado, palavra do outro.',f(th,R){ const W=kWords(th,8,R).slice(0,8); let b='';
    W.forEach(([w,k],i)=>{ const nx=W[(i+1)%W.length][0], x=70+(i%2)*440, y=262+Math.floor(i/2)*270;
      b+=`<rect x="${x}" y="${y}" width="420" height="230" rx="20" fill="#fff" stroke="#221c1e" stroke-width="3"/><line x1="${x+210}" y1="${y+16}" x2="${x+210}" y2="${y+214}" stroke="#221c1e" stroke-width="2"/>`+kImg(k,x+14,y+18,182,194,'color')+kT(x+315,y+128,nx,{s:nx.length>7? 28 : 38,a:'middle'}); });
    return kPage(`${KIDS_THEMES[th].n} dominoes`,'Recorte as peças e encaixe a figura com a palavra',b,{name:false}); }},
  caca:{n:'Caça-palavras',c:'jogo',d:'Grade 10 × 10 com as palavras do tema.',f(th,R){ const W=kWords(th,7,R).filter(([w])=>!/[\s-]/.test(w)&&w.length<=10).slice(0,6), N=10, G=[...Array(N)].map(()=>Array(N).fill(''));
    for (const [w] of W){ const u=w.toUpperCase(); for (let t=0;t<200;t++){ const h=R.r()<.5, r=Math.floor(R.r()*(h? N : N-u.length+1)), c=Math.floor(R.r()*(h? N-u.length+1 : N));
      if ([...u].every((ch,i)=>{ const v=G[h? r : r+i][h? c+i : c]; return !v||v===ch; })){ [...u].forEach((ch,i)=>{ G[h? r : r+i][h? c+i : c]=ch; }); break; } } }
    const AZ='ABCDEFGHIJKLMNOPRSTUVWY'; let b=`<rect x="140" y="260" width="720" height="720" rx="24" fill="#fff" stroke="#221c1e" stroke-width="3"/>`;
    G.forEach((row,r)=>row.forEach((ch,c)=>{ b+=kT(176+c*72,318+r*72,ch||AZ[Math.floor(R.r()*AZ.length)],{s:42,a:'middle',f:'Figtree, system-ui, sans-serif'}); }));
    W.forEach(([w,k],i)=>{ const x=80+(i%3)*290, y=1020+Math.floor(i/3)*170; b+=kCard(k,x,y,120,120,'color',14)+kT(x+135,y+75,w,{s:34}); });
    return kPage('Word search','Encontre as palavras (→ e ↓) e pinte cada uma de uma cor',b); }},
  labirinto:{n:'Labirinto',c:'jogo',d:'Ajude um personagem a chegar no outro.',f(th,R){ const [[w1,k1],[w2,k2]]=kWords(th,2,R), C=10, L=12, cs=64, ox=180, oy=380, V=[...Array(L)].map(()=>Array(C).fill(false)), walls=new Set();
    for (let r=0;r<L;r++) for (let c=0;c<C;c++){ walls.add(`h${r},${c}`); walls.add(`v${r},${c}`); }
    const st=[[0,0]]; V[0][0]=true;
    while (st.length){ const [r,c]=st[st.length-1], n=[[r-1,c],[r+1,c],[r,c-1],[r,c+1]].filter(([a,b])=>a>=0&&b>=0&&a<L&&b<C&&!V[a][b]);
      if (!n.length){ st.pop(); continue; } const [a,b]=n[Math.floor(R.r()*n.length)];
      if (a!==r) walls.delete(`h${Math.max(a,r)},${c}`); else walls.delete(`v${r},${Math.max(b,c)}`); V[a][b]=true; st.push([a,b]); }
    let d=''; for (const k of walls){ const [r,c]=k.slice(1).split(',').map(Number); if (k[0]==='h'&&r>0) d+=`M${ox+c*cs} ${oy+r*cs}h${cs}`; if (k[0]==='v'&&c>0) d+=`M${ox+c*cs} ${oy+r*cs}v${cs}`; }
    const b=`<rect x="${ox}" y="${oy}" width="${C*cs}" height="${L*cs}" fill="#fffdf5" stroke="#221c1e" stroke-width="6"/><path d="${d}" stroke="#221c1e" stroke-width="5" stroke-linecap="round" fill="none"/>
      <rect x="${ox-2}" y="${oy+4}" width="10" height="${cs-8}" fill="#fffdf5"/><rect x="${ox+C*cs-8}" y="${oy+(L-1)*cs+4}" width="10" height="${cs-8}" fill="#fffdf5"/>
      ${kCard(k1,40,oy-150,150,150,'color',75)}${kT(115,oy+30,'START',{s:22,a:'middle',c:'#1f8a4c'})}${kCard(k2,ox+C*cs-50,oy+L*cs+20,150,150,'color',75)}${kT(ox+C*cs+25,oy+L*cs+200,'FINISH',{s:22,a:'middle',c:'#d63b3b'})}`;
    return kPage(`Help the ${w1}!`,`Ajude o ${w1} a chegar até o ${w2}`,b); }},
  contar:{n:'Conte e escreva',c:'voc',d:'Quantos tem? Escreva o número e a palavra.',f(th,R){ const W=kWords(th,4,R), NW=['zero','one','two','three','four','five','six','seven','eight','nine','ten']; let b='';
    W.forEach(([w,k],i)=>{ const y=262+i*275, n=2+Math.floor(R.r()*7);
      b+=`<rect x="60" y="${y}" width="620" height="240" rx="22" fill="#fff" stroke="#221c1e" stroke-width="3"/>`;
      for (let j=0;j<n;j++) b+=kImg(k,80+(j%5)*118,y+12+Math.floor(j/5)*112,108,104,'color');
      b+=`<rect x="710" y="${y+20}" width="110" height="110" rx="18" fill="#fff8e1" stroke="#f0a020" stroke-width="3"/>`+kTrace(845,y+205,NW[n],56)+kRule(705,960,y+205,56); });
    return kPage('Count and write','Conte as figuras, escreva o número e a palavra',b); }},
  minilivro:{n:'Mini-livro para dobrar',c:'esc',d:'Livrinho de 8 páginas “My … book”.',f(th,R){ const W=kWords(th,6,R), P=PAL.mostarda; let b='';
    const cells=[['cover'],...W.map(x=>['page',...x]),['end']];
    cells.forEach((c,i)=>{ const col=i%2, row=Math.floor(i/2), x=40+col*460, y=60+row*330, flip=row<2? '' : '';
      b+=`<rect x="${x}" y="${y}" width="460" height="330" fill="#fff" stroke="#c9bfb5" stroke-width="2"/>`;
      if (c[0]==='cover') b+=`<rect x="${x+20}" y="${y+20}" width="420" height="290" rx="20" fill="${P.bg}"/>`+kT(x+230,y+130,`My ${KIDS_THEMES[th].n.toLowerCase()}`,{s:42,a:'middle'})+kT(x+230,y+185,'book',{s:42,a:'middle'})+kT(x+230,y+270,'by ______________',{s:24,a:'middle',b:false});
      else if (c[0]==='end') b+=kT(x+230,y+150,'The end!',{s:56,a:'middle',c:'#7a1f35'})+kStar(x+230,y+230,40,P.b);
      else b+=kImg(c[2],x+105,y+20,250,200,'line')+kT(x+230,y+275,`It’s a ${c[1]}.`,{s:38,a:'middle'})+`<text x="${x+440}" y="${y+316}" font-size="18" text-anchor="end" fill="#a89c9e">${i}</text>`; });
    b+=kT(500,1400-40,'Dobre ao meio duas vezes, recorte e monte o livrinho. A criança pinta as figuras!',{s:20,b:false,c:'#7a6e71',a:'middle'});
    return kPage('','',b,{noHead:true,name:false}); }},
  desenhe:{n:'Desenhe e escreva',c:'arte',d:'Molduras para desenhar com uma frase para completar.',f(th,R){ const T=KIDS_THEMES[th]; const what={animals:'animal',food:'food',toys:'toy',clothes:'clothes',nature:'weather',feelings:'face today',home:'room',transport:'transport',school:'school thing'}[th]||'thing';
    const b=`<rect x="80" y="270" width="840" height="620" rx="30" fill="#fff" stroke="#221c1e" stroke-width="4" stroke-dasharray="2 0"/>${kStar(130,320,24,'#f6c344')}${kStar(870,840,24,'#f6c344')}
      ${kT(100,980,`My favourite ${what} is`,{s:48})}${kRule(100,920,1090,80)}${kT(100,1190,'It is',{s:48})}${kRule(250,920,1190,80)}${kT(100,1300,'(colour: red, blue, green… / big, small, funny…)',{s:22,b:false,c:'#8a7e80'})}`;
    return kPage(`Draw your favourite ${what}!`,`Desenhe e complete as frases · tema: ${T.pt}`,b); }},
  dado:{n:'Role o dado e fale',c:'jogo',d:'Dado de 1 a 6: a criança fala a palavra ou uma frase.',f(th,R){ const W=kWords(th,6,R); let b='';
    W.forEach(([w,k],i)=>{ const y=262+i*180; b+=kDice(80,y+20,130,i+1)+kCard(k,260,y+5,220,160,'color',16)+kT(520,y+80,w,{s:48})+kT(520,y+130,i%2? `I like the ${w}.` : `It’s a ${w}!`,{s:28,b:false,c:'#5a4f52'}); });
    return kPage('Roll and say!','Jogue o dado e diga a palavra (ou faça uma frase)',b); }},
  tabuleiro:{n:'Jogo de tabuleiro',c:'jogo',d:'Trilha de 20 casas com figuras e surpresas.',f(th,R){ const all=KIDS_THEMES[th].w; let b='', cells=[];
    for (let i=0;i<20;i++){ const row=Math.floor(i/4), col=row%2? 3-i%4 : i%4; cells.push([110+col*200,300+row*200]); }
    cells.forEach(([x,y],i)=>{ if (i) { const [px,py]=cells[i-1]; b+=`<line x1="${px+90}" y1="${py+90}" x2="${x+90}" y2="${y+90}" stroke="#f0c36b" stroke-width="20"/>`; } });
    cells.forEach(([x,y],i)=>{ const sp= i===0? 'START' : i===19? 'FINISH' : i%7===3? 'Go back 2' : i%7===5? 'Jump +2' : '';
      b+=`<rect x="${x}" y="${y}" width="180" height="180" rx="24" fill="${sp? '#fff8e1' : '#fff'}" stroke="#221c1e" stroke-width="3"/>`+kT(x+18,y+38,String(i+1),{s:24,c:'#8a7e80'});
      b+= sp? kT(x+90,y+112,sp,{s:sp.length>6? 26 : 34,a:'middle',c:i===19? '#d63b3b' : '#7a1f35'}) : kImg(all[i%all.length][1],x+25,y+30,130,130,'color'); });
    b+=kT(70,1330,'Jogue o dado, ande as casas e diga o nome da figura. Errou? Fica onde está!',{s:22,b:false,c:'#7a6e71'});
    return kPage(`${KIDS_THEMES[th].n} board game`,'Precisa de um dado e um botão para cada jogador',b,{name:false}); }},
  separar:{n:'Recorte e separe',c:'jogo',d:'Recorte as figuras e cole na caixa certa (dois temas).',f(th,R){ const other=th==='food'? 'animals' : 'food', A=kWords(th,4,R), B=kWords(other,4,R), mix=kShuf([...A,...B],R); let b='';
    [[th,90],[other,520]].forEach(([t,x])=>{ b+=`<rect x="${x}" y="260" width="390" height="560" rx="26" fill="${PAL[t===th? 'ceu' : 'mostarda'].bg}" stroke="#221c1e" stroke-width="3"/>`+kT(x+195,320,KIDS_THEMES[t].n,{s:44,a:'middle'}); });
    mix.forEach(([w,k],i)=>{ const x=70+(i%4)*220, y=880+Math.floor(i/4)*230; b+=`<rect x="${x}" y="${y}" width="200" height="200" rx="14" fill="#fff" stroke="#9a8f92" stroke-width="2" stroke-dasharray="10 8"/>`+kImg(k,x+15,y+10,170,150,'color')+kT(x+100,y+188,w,{s:24,a:'middle'}); });
    return kPage('Cut and sort','Recorte as figuras de baixo e cole na caixa certa',b); }},
  pontos:{n:'Ligue os pontos',c:'arte',d:'Ligue os números em ordem e pinte (estrela, casa, peixe…).',opts:Object.fromEntries(Object.entries(KIDS_DOTS).map(([k,v])=>[k,v.n])),f(op,R){ const D=KIDS_DOTS[op]||KIDS_DOTS.star, ox=170, oy=300, S=660, NW=['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen'];
    let b=`<rect x="120" y="260" width="760" height="760" rx="30" fill="#fff" stroke="#e3d9cc" stroke-width="3"/>`;
    D.p.forEach(([x,y],i)=>{ if (i===D.p.length-1&&x===D.p[0][0]&&y===D.p[0][1]) return; b+=`<circle cx="${ox+x*S}" cy="${oy+y*S}" r="9" fill="#221c1e"/>`+kT(ox+x*S+14,oy+y*S-12,String(i+1),{s:28,c:'#2b6cb0'}); });
    b+=kT(120,1110,`It’s a`,{s:50})+kRule(300,880,1110,80)+kT(120,1230,'Count in English: one, two, three…',{s:30,b:false,c:'#5a4f52'})+kT(120,1290,NW.slice(0,Math.min(D.p.length,10)).join(' · '),{s:22,b:false,c:'#8a7e80'});
    return kPage('Dot to dot','Ligue os pontos em ordem, contando em inglês. Depois pinte!',b); }},
  letras:{n:'Alfabeto: traçar a letra',c:'esc',d:'Letra grande para traçar + “a is for apple”.',opts:Object.fromEntries(KIDS_ABC.map(l=>[l,l.toUpperCase()+' '+l])),f(op,R){ const l=KIDS_ABC.includes(op)? op : 'a', [w,k]=KIDS_ABCW[l];
    const b=`${kTrace(300,760,l.toUpperCase(),520,'middle')}${kTrace(730,760,l,520,'middle')}${kCard(k,620,800,300,250,'color')}${kT(80,940,`${l} is for`,{s:58})}${kT(80,1030,w,{s:74,c:'#7a1f35'})}
      ${kRule(80,560,1200,110)}${[...Array(4)].map((_,i)=>kTrace(110+i*120,1200,l,110)).join('')}${kRule(80,920,1330,100)}`;
    return kPage(`Letter ${l.toUpperCase()} ${l}`,'Trace a letra maiúscula e a minúscula com o dedo e depois com o lápis',b); }},
  numeros:{n:'Números 1 a 10',c:'esc',d:'Traçar os números, contar e pintar.',opts:{a:'1 a 5',b:'6 a 10'},f(op,R){ const st=op==='b'? 6 : 1, NW=['','one','two','three','four','five','six','seven','eight','nine','ten'], th=['frango','maca','bola','flor','peixes','coracao','sol','bolo','gato','balao']; let b='';
    for (let i=0;i<5;i++){ const n=st+i, y=262+i*215; b+=kTrace(110,y+150,String(n),150,'middle')+kTrace(220,y+120,NW[n],70)+kRule(210,560,y+120,70);
      for (let j=0;j<n;j++) b+=`<circle cx="${610+(j%5)*70}" cy="${y+60+Math.floor(j/5)*78}" r="28" fill="none" stroke="#221c1e" stroke-width="3"/>`; }
    return kPage(`Numbers ${st} to ${st+4}`,'Trace o número e a palavra, e pinte as bolinhas',b); }},
  musica:{n:'Música com gestos',c:'musica',d:'Letra de canção tradicional, figuras e os gestos (TPR).',opts:Object.fromEntries(Object.entries(KIDS_SONGS).map(([k,v])=>[k,v.t])),f(op,R){ const S=KIDS_SONGS[op]||KIDS_SONGS.head; let b='';
    S.img.forEach((k,i)=>{ b+=kCard(k,70+i*222,262,200,170,'color',18); });
    const lines=S.l.flatMap(ln=>{ if (ln.length<=40) return [ln]; let k=ln.lastIndexOf(', ',40); if (k<16) k=ln.lastIndexOf(' ',40); return [ln.slice(0,k+1).trim(),'   '+ln.slice(k+1).trim()]; });
    const gap=Math.min(80,Math.floor(560/lines.length)), fs=Math.min(40,gap-12);
    lines.forEach((ln,i)=>{ b+=`<text x="80" y="${520+i*gap}" font-family="${KF}" font-size="${fs}" font-weight="700" fill="${ln.startsWith('   ')? '#5a4f52' : '#221c1e'}">${esc(ln)}</text>`; });
    const y=560+lines.length*gap; b+=`<rect x="60" y="${y}" width="880" height="160" rx="24" fill="#fff8e1"/>`+kT(90,y+52,'♪ Actions · Gestos',{s:30,c:'#7a1f35'})+`<foreignObject x="90" y="${y+66}" width="820" height="90"><div xmlns="http://www.w3.org/1999/xhtml" style="font:22px/1.35 Figtree,system-ui,sans-serif;color:#5a4f52">${esc(S.a)}</div></foreignObject>`;
    return kPage(S.t,'Canção tradicional · cante junto, faça os gestos e pinte as figuras',b,{name:false,pal:'ceu'}); }},
  certificado:{n:'Certificado',c:'arte',d:'“Super Star” com espaço para o nome e a figurinha.',opts:{star:'Super Star',reader:'Super Reader',singer:'Super Singer',speaker:'English Speaker'},f(op,R){ const T={star:'Super Star!',reader:'Super Reader!',singer:'Super Singer!',speaker:'English Speaker!'}[op]||'Super Star!', P=PAL.mostarda;
    let b=`<rect x="50" y="50" width="900" height="1314" rx="40" fill="${P.bg}"/><rect x="85" y="85" width="830" height="1244" rx="30" fill="#fff" stroke="${P.a}" stroke-width="6" stroke-dasharray="18 10"/>`;
    for (let i=0;i<14;i++) b+=kStar(150+((i*137)%700),150+((i*263)%1100),10+(i%4)*5,i%2? P.b : '#f6c344');
    b+=kT(500,300,'Certificate',{s:52,a:'middle',c:'#7a1f35'})+kT(500,450,T,{s:96,a:'middle'})+kT(500,560,'This certificate goes to',{s:34,a:'middle',b:false})+`<line x1="200" y1="680" x2="800" y2="680" stroke="#221c1e" stroke-width="3"/>`
      +`<circle cx="500" cy="900" r="140" fill="#fff8e1" stroke="#f0a020" stroke-width="5" stroke-dasharray="12 10"/>`+kT(500,910,'sticker here!',{s:28,a:'middle',c:'#b07a10',b:false})
      +kT(260,1180,'Teacher',{s:26,a:'middle',b:false})+`<line x1="140" y1="1140" x2="380" y2="1140" stroke="#221c1e" stroke-width="2"/>`+kT(740,1180,'Date',{s:26,a:'middle',b:false})+`<line x1="620" y1="1140" x2="860" y2="1140" stroke="#221c1e" stroke-width="2"/>`;
    return kPage('','',b,{noHead:true,name:false}); }},
  estrelas:{n:'Quadro de estrelas',c:'arte',d:'20 espaços para figurinhas: uma por aula ou tarefa.',f(th,R){ const P=PAL.lavanda; let b=`${kT(500,300,'Collect 20 stars and win a surprise!',{s:36,a:'middle',c:'#7a1f35'})}`;
    for (let i=0;i<20;i++){ const x=150+(i%4)*233, y=420+Math.floor(i/4)*190; b+=`<circle cx="${x}" cy="${y}" r="78" fill="${i%2? P.bg : '#fff8e1'}" stroke="#221c1e" stroke-width="3" stroke-dasharray="8 8"/>`+kT(x,y+14,String(i+1),{s:40,a:'middle',c:'#c9bfb5'}); }
    b+=kStar(500,1340-60,40,'#f6c344');
    return kPage('My English stars','Cole uma figurinha a cada aula ou atividade feita',b,{pal:'lavanda'}); }},
};
const KIDS_THEMED=k=>!KIDS_SHEETS[k].opts;

/* ---------- folha pronta (SVG) ---------- */
function kidsSheetSvg(kind,theme,o={}){ const S=KIDS_SHEETS[kind]; if (!S) return '';
  const key=S.opts? (S.opts[theme]? theme : Object.keys(S.opts)[0]) : (KIDS_THEMES[theme]? theme : 'animals');
  try { return S.f(key,rng(hashStr(kind+key)+(o.seed||0))); } catch(e){ console.error(e); return ''; } }
const kidsTitle=(kind,theme)=>{ const S=KIDS_SHEETS[kind]; return S? `${S.n} · ${S.opts? S.opts[theme]||'' : KIDS_THEMES[theme]?.pt||''}` : 'Material'; };

/* ---------- ligar o material à aula (fica no histórico) ---------- */
function kidsLessonFor(sid){ const L=(DB.lessons||[]).filter(l=>l.studentId===sid&&l.status!=='cancelada');
  return L.filter(l=>isLive(l)||Math.abs(l.start-now())<2*HOUR)[0] || L.filter(l=>l.status==='agendada'&&l.start>now()).sort((a,b)=>a.start-b.start)[0] || L.filter(l=>l.start<=now()).sort((a,b)=>b.start-a.start)[0] || null; }
function kidsUse(sid,mat,quiet){ const l=kidsLessonFor(sid); if (!l){ if (!quiet) toast('Este aluno ainda não tem aula na agenda.'); return null; }
  l.mats ||= []; if (!l.mats.some(m=>m.k===mat.k&&m.t===mat.t)) l.mats.push({k:mat.k,t:mat.t,s:mat.s||0,title:kidsTitle(mat.k,mat.t)}); save();
  if (!quiet) toast(`Ligado à aula de ${fDay.format(l.start)} de ${user(sid).name.split(' ')[0]}`); return l; }
function matChips(l){ if (!l.mats?.length) return ''; return `<div class="tl-mats">${l.mats.map(m=>isT()? `<a class="tl-deck tl-mat" href="#kids-${m.k}-${m.t}-${m.s||0}">📄 ${esc(m.title)}</a>` : `<span class="tl-deck tl-mat">📄 ${esc(m.title)}</span>`).join('')}</div>`; }

/* ---------- telas ---------- */
const kidsStudents=()=>students().filter(s=>s.kids);
function viewKids(){ if (!isT()) return '';
  const cat=S.kcat||'', th=S.kth||'animals', K=kidsStudents();
  const list=Object.entries(KIDS_SHEETS).filter(([,S0])=>!cat||S0.c===cat);
  return `<div class="kids">
    <div class="kids-h"><div><p class="eyebrow">Sotaque Kids</p><h1>Materiais para imprimir</h1><p class="meta">${Object.keys(KIDS_SHEETS).length} tipos de material × ${Object.keys(KIDS_THEMES).length} temas, com as ilustrações do Sotaque. Imprima, cole no caderno digital e ligue à aula: fica no histórico da criança.</p></div></div>
    ${K.length? `<section class="kids-alunos"><h2>Seus alunos Kids</h2><div class="kids-al">${K.map(s=>`<a class="kids-a" href="#caderno-${s.id}" style="${sVars(s)}">${avatar(s,46)}<span><b>${esc(s.name.split(' ')[0])}</b><small>Abrir o caderno digital</small></span></a>`).join('')}</div></section>`
      : `<div class="notice"><div>Para usar o caderno digital, cadastre uma criança em <b>Alunos → + Novo aluno</b> e marque <b>Aluno Kids</b>.</div></div>`}
    <div class="kids-f"><div class="chips" role="group" aria-label="Tipo">${[['','Todos'],...Object.entries(KIDS_CATS)].map(([k,l])=>`<button class="chip-b ${cat===k?'on':''}" data-act="k-cat" data-v="${k}">${l}</button>`).join('')}</div>
      <label class="kids-th">Tema <select data-kth="1">${Object.entries(KIDS_THEMES).map(([k,t])=>`<option value="${k}" ${th===k?'selected':''}>${t.pt} · ${t.n}</option>`).join('')}</select></label></div>
    <div class="kids-grid">${list.map(([k,S0])=>{ const t=S0.opts? Object.keys(S0.opts)[0] : th; return `<a class="kids-card" href="#kids-${k}-${t}-0"><span class="kids-th-img">${kidsSheetSvg(k,t)}</span><b>${esc(S0.n)}</b><small>${KIDS_CATS[S0.c]} · ${esc(S0.d)}</small></a>`; }).join('')}</div></div>`; }
function viewKidsSheet(kind,theme,seed){ const S0=KIDS_SHEETS[kind]; if (!S0) return '<div class="panel"><p>Material não encontrado.</p></div>';
  const opts=S0.opts||Object.fromEntries(Object.entries(KIDS_THEMES).map(([k,t])=>[k,t.pt])), K=kidsStudents(), sid=S.kstu&&user(S.kstu)? S.kstu : K[0]?.id||'';
  const song=kind==='musica'? KIDS_SONGS[theme]||KIDS_SONGS.head : null;
  return `<div class="kp">
    <div class="kp-tools no-print"><a class="link" href="#kids">← Materiais</a><b class="grow">${esc(S0.n)}</b>
      <select data-kopt="1" aria-label="${S0.opts? 'Versão' : 'Tema'}">${Object.entries(opts).map(([k,l])=>`<option value="${k}" ${k===theme?'selected':''}>${esc(l)}</option>`).join('')}</select>
      <button class="btn small" data-act="k-seed" title="Outras figuras e outra ordem">Outra versão</button>
      <button class="btn small primary" data-act="print-go">Imprimir</button></div>
    <div class="kp-tools no-print kp-use">${K.length? `<label>Para <select data-kstu="1">${K.map(s=>`<option value="${s.id}" ${s.id===sid?'selected':''}>${esc(s.name)}</option>`).join('')}</select></label>
      <button class="btn small" data-act="k-use" data-k="${kind}" data-t="${theme}" data-s="${seed}">Ligar à aula</button><button class="btn small" data-act="k-cad" data-k="${kind}" data-t="${theme}" data-s="${seed}">Colar no caderno</button>` : '<span class="meta muted">Cadastre um aluno Kids para ligar o material às aulas e colar no caderno digital.</span>'}
      ${song? `<a class="btn small ghost" href="${kYt(song.busca)}" target="_blank" rel="noopener">Ouvir no YouTube ↗</a>` : ''}</div>
    <div class="kp-page">${kidsSheetSvg(kind,theme,{seed:+seed||0})}</div></div>`; }
function kidsPickerHtml(){ const th=S.kth||'animals';
  return `<div class="cd-bgs"><b>Tema</b>${Object.entries(KIDS_THEMES).map(([k,t])=>`<button class="${th===k?'on':''}" data-cd="kth" data-v="${k}">${t.pt}</button>`).join('')}</div>
    <div class="cd-grid cd-agrid">${Object.entries(KIDS_SHEETS).filter(([k])=>KIDS_THEMED(k)&&!['minilivro','bingo','memoria','domino','tabuleiro','separar','flash'].includes(k)).map(([k,S0])=>`<button class="cd-gi cd-ai" data-cd="addact" data-k="${k}" data-t="${th}"><span>${kidsSheetSvg(k,th)}</span><small>${esc(S0.n)}</small></button>`).join('')}
      ${['pontos','numeros'].flatMap(k=>Object.entries(KIDS_SHEETS[k].opts).map(([o,l])=>`<button class="cd-gi cd-ai" data-cd="addact" data-k="${k}" data-t="${o}"><span>${kidsSheetSvg(k,o)}</span><small>${esc(KIDS_SHEETS[k].n.split(':')[0])} · ${esc(l)}</small></button>`)).join('')}</div>
    <div class="cd-bgs"><b>Alfabeto: traçar a letra</b>${KIDS_ABC.map(l=>`<button data-cd="addact" data-k="letras" data-t="${l}">${l.toUpperCase()} ${l}</button>`).join('')}</div>`; }
const KIDS_ACT={
  'k-cat'(el){ S.kcat=el.dataset.v; render(); },
  'k-seed'(){ const r=S.route; location.hash=`kids-${r.kind}-${r.theme}-${(+r.seed||0)+1}`; },
  'k-use'(el){ const sid=$('[data-kstu]')?.value; if (sid) kidsUse(sid,{k:el.dataset.k,t:el.dataset.t,s:+el.dataset.s}); },
  'k-cad'(el){ const sid=$('[data-kstu]')?.value; if (!sid) return; const c=cadOf(sid), p=cadNewPage(sid,'branca');
    p.items.push({id:'i'+uid(),t:'act',kind:el.dataset.k,theme:el.dataset.t,seed:+el.dataset.s||0,x:0,y:0,w:CAD_W,h:CAD_H,r:0}); c.pages.push(p.id);
    kidsUse(sid,{k:el.dataset.k,t:el.dataset.t,s:+el.dataset.s},true); save(); toast('Colado numa página nova do caderno'); location.hash='caderno-'+sid; setTimeout(()=>{ if (CD.sid===sid) cadGo(cadPages(sid).length-1); },60); },
};
document.addEventListener('change',e=>{ const el=e.target;
  if (el.dataset?.kth){ S.kth=el.value; render(); }
  if (el.dataset?.kopt){ const r=S.route; location.hash=`kids-${r.kind}-${el.value}-${r.seed||0}`; }
  if (el.dataset?.kstu){ S.kstu=el.value; } });
