/* =========================================================
   Sotaque · Kids: materiais para imprimir e colar no caderno digital
   Ilustrações: Fluent Emoji (Microsoft, licença MIT · vendor/emoji-kids.js), em três versões:
   colorida, contorno (para colorir) e sombra. Cada material é uma folha A4 em SVG
   (1000 × 1414), gerada na hora para o tema escolhido, e organizada por idade:
   3–4 anos (ainda não leem), 5–6 (letras), 7–8 (palavras), 9–10 (frases).
   ========================================================= */
const KIDS_AGES={a3:'3 a 4 anos',a5:'5 a 6 anos',a7:'7 a 8 anos',a9:'9 a 10 anos'};
const KIDS_AGES_D={a3:'ainda não leem: figura, cor, traço e movimento',a5:'começando as letras e os números',a7:'lendo e escrevendo palavras',a9:'frases e textos curtos'};
const kidsAgeOf=s=>!s?.age? '' : s.age<=4? 'a3' : s.age<=6? 'a5' : s.age<=8? 'a7' : 'a9';
const KT=(n,pt,ic,w)=>({n,pt,ic,w});
const KIDS_THEMES={
  pets:KT('Pets','Bichos de estimação','dog',[['cat','cat'],['dog','dog'],['rabbit','rabbit'],['fish','fish'],['bird','bird'],['hamster','hamster'],['turtle','turtle'],['mouse','mouse']]),
  farm:KT('Farm animals','Fazenda','cow',[['cow','cow'],['pig','pig'],['horse','horse'],['sheep','ewe'],['chicken','chicken'],['duck','duck'],['goat','goat'],['rooster','rooster']]),
  wild:KT('Wild animals','Animais selvagens','lion',[['lion','lion'],['tiger','tiger'],['elephant','elephant'],['monkey','monkey'],['giraffe','giraffe'],['zebra','zebra'],['bear','bear'],['panda','panda'],['crocodile','crocodile'],['snake','snake'],['owl','owl'],['kangaroo','kangaroo']]),
  sea:KT('Sea animals','Fundo do mar','spouting-whale',[['fish','tropical-fish'],['octopus','octopus'],['crab','crab'],['whale','spouting-whale'],['dolphin','dolphin'],['shark','shark'],['turtle','turtle'],['shell','spiral-shell'],['jellyfish','jellyfish'],['seal','seal']]),
  bugs:KT('Bugs','Insetos e bichinhos','butterfly',[['butterfly','butterfly'],['bee','honeybee'],['ladybug','lady-beetle'],['ant','ant'],['snail','snail'],['spider','spider'],['worm','worm'],['beetle','beetle']]),
  food:KT('Food','Comida','pizza',[['pizza','pizza'],['hamburger','hamburger'],['fries','french-fries'],['hot dog','hot-dog'],['bread','bread'],['cheese','cheese-wedge'],['egg','egg'],['cookie','cookie'],['cake','birthday-cake'],['ice cream','soft-ice-cream'],['lollipop','lollipop'],['doughnut','doughnut'],['popcorn','popcorn'],['milk','glass-of-milk'],['sandwich','sandwich'],['cupcake','cupcake']]),
  fruit:KT('Fruit','Frutas','strawberry',[['apple','red-apple'],['banana','banana'],['grapes','grapes'],['strawberry','strawberry'],['watermelon','watermelon'],['orange','tangerine'],['pear','pear'],['cherries','cherries'],['pineapple','pineapple'],['lemon','lemon'],['peach','peach'],['kiwi','kiwi-fruit'],['mango','mango'],['coconut','coconut']]),
  veg:KT('Vegetables','Legumes e verduras','carrot',[['carrot','carrot'],['broccoli','broccoli'],['tomato','tomato'],['potato','potato'],['corn','ear-of-corn'],['cucumber','cucumber'],['onion','onion'],['pepper','bell-pepper'],['mushroom','mushroom'],['lettuce','leafy-green']]),
  toys:KT('Toys','Brinquedos','teddy-bear',[['teddy bear','teddy-bear'],['kite','kite'],['balloon','balloon'],['yo-yo','yo-yo'],['puzzle','puzzle-piece'],['ball','soccer-ball'],['robot','robot'],['doll','nesting-dolls'],['video game','video-game'],['drum','drum'],['blocks','brick'],['car','racing-car']]),
  clothes:KT('Clothes','Roupas','t-shirt',[['T-shirt','t-shirt'],['dress','dress'],['jeans','jeans'],['socks','socks'],['gloves','gloves'],['scarf','scarf'],['coat','coat'],['cap','billed-cap'],['hat','womans-hat'],['shoes','running-shoe'],['boots','womans-boot'],['glasses','glasses'],['shorts','shorts']]),
  body:KT('My body','O corpo','raised-hand',[['eye','eye'],['ear','ear'],['nose','nose'],['mouth','mouth'],['hand','raised-hand'],['foot','foot'],['leg','leg'],['tooth','tooth'],['arm','flexed-biceps']]),
  family:KT('My family','A família','baby-medium-light',[['baby','baby-medium-light'],['boy','boy-medium-dark'],['girl','girl-medium'],['dad','man-medium'],['mom','woman-medium-light'],['grandpa','old-man-light'],['grandma','old-woman-medium']]),
  feelings:KT('Feelings','Sentimentos','grinning-face',[['happy','grinning-face'],['sad','crying-face'],['angry','pouting-face'],['tired','sleeping-face'],['surprised','astonished-face'],['scared','fearful-face'],['in love','smiling-face-with-heart-eyes'],['silly','zany-face'],['sick','face-with-thermometer'],['cool','smiling-face-with-sunglasses']]),
  weather:KT('Weather','O tempo','sun',[['sun','sun'],['cloud','cloud'],['rain','cloud-with-rain'],['snow','snowflake'],['rainbow','rainbow'],['umbrella','umbrella'],['wind','wind-face'],['storm','cloud-with-lightning-and-rain'],['hot','hot-face'],['cold','cold-face']]),
  nature:KT('Nature','Natureza','sunflower',[['tree','deciduous-tree'],['flower','sunflower'],['tulip','tulip'],['leaf','maple-leaf'],['moon','crescent-moon'],['star','star'],['mountain','mountain'],['cactus','cactus'],['rose','rose']]),
  transport:KT('Transport','Transportes','bus',[['car','automobile'],['bus','bus'],['plane','airplane'],['train','locomotive'],['bike','bicycle'],['ship','ship'],['rocket','rocket'],['helicopter','helicopter'],['tractor','tractor'],['ambulance','ambulance'],['fire truck','fire-engine'],['police car','police-car'],['sailboat','sailboat'],['scooter','kick-scooter']]),
  house:KT('My house','A casa','house',[['house','house'],['bed','bed'],['chair','chair'],['sofa','couch-and-lamp'],['bath','bathtub'],['toilet','toilet'],['door','door'],['window','window'],['lamp','light-bulb'],['TV','television'],['clock','alarm-clock'],['key','key']]),
  school:KT('School things','Escola','backpack',[['backpack','backpack'],['pencil','pencil'],['crayon','crayon'],['scissors','scissors'],['book','closed-book'],['ruler','straight-ruler'],['notebook','notebook'],['globe','globe-showing-americas'],['paint','artist-palette'],['computer','laptop']]),
  music:KT('Music','Música','guitar',[['guitar','guitar'],['drum','drum'],['trumpet','trumpet'],['violin','violin'],['piano','musical-keyboard'],['microphone','microphone'],['saxophone','saxophone'],['headphones','headphone']]),
  sports:KT('Sports','Esportes','soccer-ball',[['football','soccer-ball'],['basketball','basketball'],['tennis','tennis'],['baseball','baseball'],['volleyball','volleyball'],['swimming','person-swimming'],['skateboard','skateboard'],['medal','1st-place-medal']]),
  space:KT('Space','Espaço','rocket',[['rocket','rocket'],['moon','crescent-moon'],['star','star'],['planet','ringed-planet'],['astronaut','astronaut'],['alien','alien'],['comet','comet'],['Earth','globe-showing-americas'],['sun','sun'],['UFO','flying-saucer']]),
  party:KT('Parties','Festas','wrapped-gift',[['cake','birthday-cake'],['balloon','balloon'],['present','wrapped-gift'],['candle','candle'],['ghost','ghost'],['pumpkin','jack-o-lantern'],['Christmas tree','christmas-tree'],['Santa','santa-claus'],['bunny','rabbit-face'],['fireworks','fireworks']]),
};
const KCOL={red:['#e53935','red-heart'],blue:['#1e88e5','blue-heart'],green:['#43a047','green-heart'],yellow:['#fdd835','yellow-heart'],orange:['#fb8c00','orange-heart'],purple:['#8e24aa','purple-heart'],brown:['#8d6e63','brown-heart'],pink:['#f06292','red-heart']};
const KF='Andika, Figtree, system-ui, sans-serif', KFS='Figtree, system-ui, sans-serif';
const KSOFT=['#fde7ea','#e3f1fd','#e6f6e8','#fff4d6','#efe7fb','#ffe9d9','#e2f5f3','#f9e6f4'];

/* ---------- desenho ---------- */
const kLineBody=(b,sw)=>b.replace(/<(linearGradient|radialGradient)[\s\S]*?<\/\1>/g,'').replace(/fill="url\([^"]*\)"/g,'fill="#fff"').replace(/fill="(?!none)[^"]*"/g,'fill="#fff"').replace(/<path/g,`<path stroke="#2a2326" stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round"`);
const kShadowBody=b=>b.replace(/fill="(?!none)[^"]*"/g,'fill="#3a3335"').replace(/stroke="(?!none)[^"]*"/g,'stroke="#3a3335"');
function kE(n,x,y,s,mode,o={}){ const e=EMOJI[n]; if (!e) return ''; const [w,h,b]=e, sw=o.sw||(s>400? .42 : s>160? .55 : .7);
  const body= mode==='line'? kLineBody(b,sw) : mode==='shadow'? kShadowBody(b) : b;
  return `<svg x="${x}" y="${y}" width="${s}" height="${o.h||s}" viewBox="0 0 ${w} ${h}" ${o.extra||''}>${body}</svg>`; }
const kEsvg=(n,mode)=>{ const e=EMOJI[n]; return e? `<svg viewBox="0 0 ${e[0]} ${e[1]}">${mode==='line'? kLineBody(e[2],.55) : e[2]}</svg>` : ''; };
const kT=(x,y,t,o={})=>`<text x="${x}" y="${y}" font-family="${o.f||KF}" font-size="${o.s||40}" font-weight="${o.b===false? 400 : 700}" fill="${o.c||'#2a2326'}" text-anchor="${o.a||'start'}" ${o.ls? `letter-spacing="${o.ls}"` : ''}>${esc(t)}</text>`;
const kTrace=(x,y,t,s=96,a='start')=>`<text x="${x}" y="${y}" font-family="${KF}" font-size="${s}" font-weight="400" fill="#e7e1e3" stroke="#a99fa3" stroke-width="${s>200? 3 : 1.3}" ${s>200? 'stroke-dasharray="10 9"' : ''} text-anchor="${a}" letter-spacing="${s>200? 0 : s*.05}">${esc(t)}</text>`;
const kRule=(x1,x2,y,s=96)=>`<line x1="${x1}" y1="${y-s*.72}" x2="${x2}" y2="${y-s*.72}" stroke="#bcd3ea" stroke-width="2"/><line x1="${x1}" y1="${y-s*.36}" x2="${x2}" y2="${y-s*.36}" stroke="#bcd3ea" stroke-width="2" stroke-dasharray="12 10"/><line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#e48a8a" stroke-width="2.6"/>`;
const kCut=(x1,y1,x2,y2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#a99fa3" stroke-width="2" stroke-dasharray="10 8"/>`;
const kBox=(x,y,w,h,i,o={})=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r??28}" fill="${o.fill||KSOFT[i%KSOFT.length]}" ${o.stroke? `stroke="${o.stroke}" stroke-width="${o.sw||3}"` : ''} ${o.dash? `stroke-dasharray="${o.dash}"` : ''}/>`;
const kCardE=(n,x,y,w,h,i,mode,o={})=>kBox(x,y,w,h,i,o)+kE(n,x+(w-Math.min(w,h)*.78)/2,y+(h-Math.min(w,h)*.78)/2,Math.min(w,h)*.78,mode);
const kSay=(icon,txt,x,y)=>`<g>${kE(icon,x,y-34,44)}${kT(x+56,y,txt,{s:26,b:false,c:'#5a4f52',f:KFS})}</g>`;
function kPage(th,title,sub,body,o={}){ const T=KIDS_THEMES[th]||{ic:o.ic||'star'}, ic=o.ic||T.ic, c=o.band||'#fff3d6';
  return `<svg class="kp-svg" viewBox="0 0 1000 1414" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="1414" fill="#fff"/>
    ${o.noHead? '' : `<rect x="36" y="32" width="928" height="168" rx="40" fill="${c}"/>
      <circle cx="878" cy="116" r="74" fill="#fff" opacity=".7"/>${kE(ic,818,56,120)}
      ${kT(78,114,title,{s:title.length>24? 46 : 58})}${kT(80,160,sub,{s:23,b:false,c:'#6a5e61',f:KFS})}`}
    ${o.name===false||o.noHead? '' : `<text x="560" y="244" font-family="${KFS}" font-size="22" fill="#6a5e61">Name:</text><line x1="632" y1="248" x2="958" y2="248" stroke="#a99fa3" stroke-width="2"/>`}
    ${body}${kT(500,1394,'Sotaque Kids · ilustrações Fluent Emoji (Microsoft, MIT) · © Gabriel Kubica',{s:14,b:false,c:'#b2a7aa',a:'middle',f:KFS})}</svg>`; }
const kShuf=(a,R)=>{ a=a.slice(); for (let i=a.length-1;i>0;i--){ const j=Math.floor(R.r()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const kW=(th,n,R)=>kShuf(KIDS_THEMES[th]?.w||KIDS_THEMES.pets.w,R).slice(0,n);
const kOther=(th,R)=>{ const g=kGroupOf(th), k=Object.keys(KIDS_THEMES).filter(x=>x!==th&&kGroupOf(x)!==g&&!(KIDS_THEMES[x].w.some(([,e])=>KIDS_THEMES[th].w.some(([,f])=>f===e)))); return k[Math.floor(R.r()*k.length)]; };
const kDice=(x,y,s,n)=>{ const P={1:[[.5,.5]],2:[[.28,.28],[.72,.72]],3:[[.25,.25],[.5,.5],[.75,.75]],4:[[.28,.28],[.72,.28],[.28,.72],[.72,.72]],5:[[.25,.25],[.75,.25],[.5,.5],[.25,.75],[.75,.75]],6:[[.28,.22],[.72,.22],[.28,.5],[.72,.5],[.28,.78],[.72,.78]]}[n];
  return `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="${s*.2}" fill="#fff" stroke="#2a2326" stroke-width="3"/>${P.map(([a,b])=>`<circle cx="${x+a*s}" cy="${y+b*s}" r="${s*.085}" fill="#2a2326"/>`).join('')}`; };
const NUMW=['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
const kPl=w=>/[^su]s$|ies$/.test(w)&&!['bus','octopus','glasses'].includes(w)||['jeans','glasses','fries','shorts','grapes','cherries','blocks','socks','gloves','shoes','boots','headphones','fireworks'].includes(w);
const article=w=>kPl(w)? 'some' : /^[aeiou]/i.test(w)? 'an' : 'a';
const itIs=w=>kPl(w)? `They’re ${w}.` : `It’s ${article(w)} ${w}.`;
const KGROUP={animal:['pets','farm','wild','sea','bugs'],food:['food','fruit','veg'],things:['toys','clothes','house','school','music','sports'],sky:['weather','nature','space'],people:['body','family','feelings'],go:['transport'],party:['party']};
const kGroupOf=th=>Object.keys(KGROUP).find(g=>KGROUP[g].includes(th));
function kMaze(R,C,L,ox,oy,cs){ const V=[...Array(L)].map(()=>Array(C).fill(false)), walls=new Set();
  for (let r=0;r<L;r++) for (let c=0;c<C;c++){ walls.add(`h${r},${c}`); walls.add(`v${r},${c}`); }
  const st=[[0,0]]; V[0][0]=true;
  while (st.length){ const [r,c]=st[st.length-1], n=[[r-1,c],[r+1,c],[r,c-1],[r,c+1]].filter(([a,b])=>a>=0&&b>=0&&a<L&&b<C&&!V[a][b]);
    if (!n.length){ st.pop(); continue; } const [a,b]=n[Math.floor(R.r()*n.length)];
    if (a!==r) walls.delete(`h${Math.max(a,r)},${c}`); else walls.delete(`v${r},${Math.max(b,c)}`); V[a][b]=true; st.push([a,b]); }
  let d=''; for (const k of walls){ const [r,c]=k.slice(1).split(',').map(Number); if (k[0]==='h'&&r>0) d+=`M${ox+c*cs} ${oy+r*cs}h${cs}`; if (k[0]==='v'&&c>0) d+=`M${ox+c*cs} ${oy+r*cs}v${cs}`; }
  return `<rect x="${ox}" y="${oy}" width="${C*cs}" height="${L*cs}" rx="14" fill="#fffdf5" stroke="#2a2326" stroke-width="7"/><path d="${d}" stroke="#2a2326" stroke-width="${cs>70? 7 : 5}" stroke-linecap="round" fill="none"/>
    <rect x="${ox-4}" y="${oy+6}" width="12" height="${cs-12}" fill="#fffdf5"/><rect x="${ox+C*cs-8}" y="${oy+(L-1)*cs+6}" width="12" height="${cs-12}" fill="#fffdf5"/>`; }

/* ---------- músicas tradicionais (domínio público) ---------- */
const KIDS_SONGS={
  head:{t:'Head, Shoulders, Knees and Toes',busca:'Head Shoulders Knees and Toes kids song',img:['grinning-face','flexed-biceps','leg','foot'],l:['Head, shoulders, knees and toes, knees and toes!','Head, shoulders, knees and toes, knees and toes!','And eyes and ears and mouth and nose,','Head, shoulders, knees and toes, knees and toes!'],a:'Toque em cada parte do corpo enquanto canta. Cada vez, cante mais rápido!'},
  twinkle:{t:'Twinkle, Twinkle, Little Star',busca:'Twinkle Twinkle Little Star nursery rhyme',img:['star','crescent-moon','glowing-star','sparkles'],l:['Twinkle, twinkle, little star,','How I wonder what you are!','Up above the world so high,','Like a diamond in the sky.','Twinkle, twinkle, little star,','How I wonder what you are!'],a:'Abra e feche as mãos como estrelas brilhando; aponte para o céu em “up above”.'},
  farm:{t:'Old MacDonald Had a Farm',busca:'Old MacDonald Had a Farm kids song',img:['cow','pig','ewe','duck'],l:['Old MacDonald had a farm, E-I-E-I-O!','And on that farm he had a cow, E-I-E-I-O!','With a moo moo here and a moo moo there,','Here a moo, there a moo, everywhere a moo moo!','Old MacDonald had a farm, E-I-E-I-O!'],a:'Troque o animal a cada estrofe: pig (oink), sheep (baa), duck (quack). A criança faz o som!'},
  bus:{t:'The Wheels on the Bus',busca:'The Wheels on the Bus kids song',img:['bus','baby-medium-light','woman-medium-light','man-medium'],l:['The wheels on the bus go round and round,','Round and round, round and round.','The wheels on the bus go round and round,','All through the town!','The wipers on the bus go swish, swish, swish…','The horn on the bus goes beep, beep, beep…'],a:'Gire os braços (round and round), mexa as mãos como limpadores (swish) e aperte a buzina (beep).'},
  happy:{t:'If You’re Happy and You Know It',busca:'If You\'re Happy and You Know It kids song',img:['grinning-face','clapping-hands','foot','party-popper'],l:['If you’re happy and you know it, clap your hands!','If you’re happy and you know it, clap your hands!','If you’re happy and you know it,','then your face will surely show it.','If you’re happy and you know it, clap your hands!'],a:'Bata palmas, depois bata os pés (stamp your feet) e grite “Hooray!” com os braços para cima.'},
  boat:{t:'Row, Row, Row Your Boat',busca:'Row Row Row Your Boat nursery rhyme',img:['sailboat','tropical-fish','sun','crocodile'],l:['Row, row, row your boat,','Gently down the stream.','Merrily, merrily, merrily, merrily,','Life is but a dream.'],a:'Sentados de frente, de mãos dadas, remem para a frente e para trás.'},
  rain:{t:'Rain, Rain, Go Away',busca:'Rain Rain Go Away nursery rhyme',img:['cloud-with-rain','umbrella','sun','rainbow'],l:['Rain, rain, go away,','Come again another day.','Little children want to play,','Rain, rain, go away!'],a:'Mexa os dedos como chuva caindo e depois “empurre” a chuva para longe.'},
  spider:{t:'Incy Wincy Spider',busca:'Incy Wincy Spider nursery rhyme',img:['spider','cloud-with-rain','sun','house'],l:['Incy Wincy spider climbed up the water spout.','Down came the rain and washed the spider out.','Out came the sun and dried up all the rain,','And Incy Wincy spider climbed up the spout again!'],a:'Os dedos “sobem” como aranha, as mãos descem como chuva e fazem um sol bem grande.'},
  ducks:{t:'Five Little Ducks',busca:'Five Little Ducks nursery rhyme',img:['duck','duck','duck','duck'],l:['Five little ducks went out one day,','Over the hills and far away.','Mother duck said “Quack, quack, quack, quack!”','But only four little ducks came back.'],a:'Mostre os dedos: cinco patinhos, depois quatro, três… A criança conta junto.'},
  morning:{t:'Good Morning to You',busca:'Good Morning to You song kids',img:['sun','grinning-face','waving-hand','sparkles'],l:['Good morning to you,','Good morning to you,','Good morning, dear teacher,','Good morning to you!'],a:'Canção para começar a aula: acene e troque “teacher” pelo nome da criança.'},
};
const KIDS_ABCW={a:['apple','red-apple'],b:['banana','banana'],c:['cat','cat'],d:['dog','dog'],e:['elephant','elephant'],f:['fish','fish'],g:['grapes','grapes'],h:['house','house'],i:['ice cream','soft-ice-cream'],j:['jeans','jeans'],k:['kite','kite'],l:['lion','lion'],m:['monkey','monkey'],n:['nose','nose'],o:['octopus','octopus'],p:['pizza','pizza'],q:['queen','crown'],r:['rabbit','rabbit'],s:['sun','sun'],t:['tiger','tiger'],u:['umbrella','umbrella'],v:['violin','violin'],w:['whale','spouting-whale'],x:['x-ray fish','tropical-fish'],y:['yo-yo','yo-yo'],z:['zebra','zebra']};
const KIDS_DOTS={star:{n:'Star',p:[[.5,.04],[.62,.36],[.96,.37],[.69,.58],[.79,.92],[.5,.72],[.21,.92],[.31,.58],[.04,.37],[.38,.36]]},house:{n:'House',p:[[.2,.95],[.2,.45],[.08,.45],[.5,.08],[.92,.45],[.8,.45],[.8,.95],[.58,.95],[.58,.7],[.42,.7],[.42,.95]]},fish:{n:'Fish',p:[[.06,.5],[.2,.3],[.4,.2],[.6,.24],[.75,.38],[.95,.2],[.88,.5],[.95,.8],[.75,.62],[.6,.76],[.4,.8],[.2,.7]]},heart:{n:'Heart',p:[...Array(16)].map((_,i)=>{ const t=i/16*2*Math.PI, x=16*Math.sin(t)**3, y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t); return [.5+x/36,.45-y/36]; })},boat:{n:'Boat',p:[[.1,.62],[.9,.62],[.75,.85],[.25,.85],[.1,.62],[.48,.62],[.48,.08],[.82,.55],[.52,.55]]},kite:{n:'Kite',p:[[.5,.05],[.82,.35],[.5,.72],[.18,.35],[.5,.05]]}};
const KIDS_MASKS={cat:'cat-face',dog:'dog-face',lion:'lion',tiger:'tiger-face',panda:'panda',bear:'bear',pig:'pig-face',cow:'cow-face',monkey:'monkey-face',mouse:'mouse-face',rabbit:'rabbit-face',fox:'fox',frog:'frog',koala:'koala',unicorn:'unicorn'};
const KIDS_CARDS={bday:['Happy Birthday!','birthday-cake','balloon'],mom:['I love you, Mom!','red-heart','tulip'],dad:['I love you, Dad!','blue-heart','1st-place-medal'],xmas:['Merry Christmas!','christmas-tree','santa-claus'],easter:['Happy Easter!','rabbit-face','egg'],thanks:['Thank you!','sparkles','sunflower'],friend:['Best friends!','smiling-face-with-heart-eyes','teddy-bear']};

/* ---------- tipos de material ---------- */
const KIDS_CATS={voc:'Vocabulário',esc:'Escrever e traçar',jogo:'Jogos',musica:'Músicas',arte:'Arte, recorte e prêmios',ler:'Ler e entender'};
const S0=(n,c,ages,d,f,opts)=>({n,c,ages,d,f,opts});
const KIDS_SHEETS={
  /* ---- 3 a 4 anos ---- */
  colorir:S0('Pinte o desenho','arte',['a3','a5'],'Uma figura grande para pintar, com a palavra.',(th,R)=>{ const [w,n]=kW(th,1,R)[0];
    return kPage(th,`Colour the ${w}!`,'Pinte a figura do jeito que quiser',`${kBox(90,280,820,820,0,{fill:'#fff',stroke:'#efe6dc',sw:4})}${kE(n,170,350,660,'line')}${kTrace(500,1250,w,120,'middle')}${kRule(150,850,1250,120)}`); }),
  sombra:S0('Ligue à sombra','voc',['a3','a5'],'4 figuras coloridas e 4 sombras para ligar.',(th,R)=>{ const W=kW(th,4,R), S=kShuf(W,R); let b='';
    W.forEach(([w,n],i)=>{ const y=290+i*265; b+=kCardE(n,90,y,250,230,i)+`<circle cx="372" cy="${y+115}" r="13" fill="#2a2326"/>`+kT(215,y+262,w,{s:24,a:'middle',c:'#8a7e80',f:KFS}); });
    S.forEach(([w,n],i)=>{ const y=290+i*265; b+=`<circle cx="628" cy="${y+115}" r="13" fill="#2a2326"/>`+kBox(660,y,250,230,0,{fill:'#f4f1ee'})+kE(n,700,y+20,180,'shadow'); });
    return kPage(th,'Find the shadow','Ligue cada figura à sua sombra',b); }),
  igual:S0('Encontre o igual','voc',['a3'],'Circule a figura igual à primeira.',(th,R)=>{ const all=KIDS_THEMES[th].w, rows=kW(th,5,R); let b='';
    rows.forEach(([w,n],i)=>{ const y=290+i*212, ops=kShuf([n,...kShuf(all.filter(z=>z[1]!==n),R).slice(0,3).map(z=>z[1])],R);
      b+=kBox(70,y,190,180,i,{stroke:'#2a2326',sw:4})+kE(n,95,y+15,150)+`<path d="M285 ${y+90}h40l-14 -14m14 14l-14 14" stroke="#c9bfb5" stroke-width="5" fill="none" stroke-linecap="round"/>`
        +ops.map((o,k)=>kBox(350+k*150,y+15,135,150,i+k+1,{fill:'#fbf8f5'})+kE(o,362+k*150,y+30,112)).join(''); });
    return kPage(th,'Find the same!','Olhe a primeira figura e circule a igual',b); }),
  tracos:S0('Pré-escrita: trace as linhas','esc',['a3'],'Leve cada bichinho até o outro pelo caminho pontilhado.',(th,R)=>{ const W=kW(th,10,R); let b=''; const shapes=['line','wave','zig','hump','loop'];
    shapes.forEach((sh,i)=>{ const y=300+i*210, x0=210, x1=790, my=y+80; const [a,c]=[W[i*2%W.length][1],W[(i*2+1)%W.length][1]]; let d='';
      if (sh==='line') d=`M${x0} ${my}H${x1}`; if (sh==='wave') d=`M${x0} ${my}`+[...Array(4)].map((_,k)=>`q${(x1-x0)/8} ${k%2? 60 : -60} ${(x1-x0)/4} 0`).join('');
      if (sh==='zig') d=`M${x0} ${my}`+[...Array(6)].map((_,k)=>`l${(x1-x0)/6} ${k%2? 55 : -55}`).join(''); if (sh==='hump') d=`M${x0} ${my+30}`+[...Array(3)].map(()=>`a${(x1-x0)/6} 70 0 0 1 ${(x1-x0)/3} 0`).join('');
      if (sh==='loop') d=`M${x0} ${my+30}`+[...Array(4)].map(()=>`c40 -110 100 -110 60 -20 c-25 50 40 50 85 20`).join('');
      b+=kE(a,60,y+10,130)+kE(c,810,y+10,130)+`<path d="${d}" fill="none" stroke="#9e9397" stroke-width="7" stroke-dasharray="3 16" stroke-linecap="round"/>`; });
    return kPage(th,'Follow the lines','Com o dedo e depois com o lápis, siga o pontilhado',b); }),
  contar5:S0('Conte e pinte o número','voc',['a3','a5'],'Quantos tem? Pinte o número certo (1 a 5).',(th,R)=>{ const W=kW(th,4,R); let b='';
    W.forEach(([w,n],i)=>{ const y=290+i*265, k=1+Math.floor(R.r()*5); b+=kBox(70,y,560,230,i);
      for (let j=0;j<k;j++) b+=kE(n,95+(j%5)*105,y+(k>3? 20+Math.floor(j/3)*0 : 55),95);
      b+=[1,2,3,4,5].map((m,q)=>`<circle cx="${680+(q%3)*95}" cy="${y+60+Math.floor(q/3)*105}" r="40" fill="#fff" stroke="#2a2326" stroke-width="3"/>${kT(680+(q%3)*95,y+80+Math.floor(q/3)*105,String(m),{s:48,a:'middle'})}`).join(''); });
    return kPage(th,'Count and colour','Conte as figuras e pinte o número certo',b); }),
  diferente:S0('Qual é diferente?','voc',['a3','a5'],'Em cada linha, uma figura não combina.',(th,R)=>{ let b='';
    for (let i=0;i<5;i++){ const y=290+i*212, ot=kOther(th,R), same=kW(th,3,R).map(z=>z[1]), odd=kW(ot,1,R)[0][1], ops=kShuf([...same,odd],R);
      b+=kBox(70,y,860,180,i)+ops.map((o,k)=>kE(o,120+k*205,y+18,145)).join(''); }
    return kPage(th,'Odd one out','Circule a figura que não combina com as outras',b); }),
  grande:S0('Big and small','voc',['a3'],'Circule a figura grande (big) e marque a pequena (small).',(th,R)=>{ const W=kW(th,5,R); let b='';
    W.forEach(([w,n],i)=>{ const y=290+i*212, left=R.r()<.5; b+=kBox(70,y,860,185,i)+kE(n,left? 160 : 640,y+12,160)+kE(n,left? 700 : 230,y+95,80)+kT(500,y+110,w,{s:34,a:'middle',c:'#8a7e80'}); });
    return kPage(th,'Big and small','Circule a grande (big) e faça um X na pequena (small)',b); }),
  quebra:S0('Quebra-cabeça para recortar','arte',['a3','a5'],'Figura grande dividida em 6 peças.',(th,R)=>{ const [w,n]=kW(th,1,R)[0];
    return kPage(th,`${w[0].toUpperCase()+w.slice(1)} puzzle`,'Pinte, recorte nas linhas e monte de novo!',`${kBox(110,290,780,1000,2,{r:20})}${kE(n,150,390,700)}${kCut(370,290,370,1290)}${kCut(630,290,630,1290)}${kCut(110,790,890,790)}${kT(500,1340,'✂  '+w,{s:30,a:'middle',c:'#8a7e80'})}`,{name:false}); }),
  mascara:S0('Máscara para recortar','arte',['a3','a5','a7'],'Rosto de bicho grande para pintar, recortar e usar.',(op,R)=>{ const n=KIDS_MASKS[op]||'cat-face';
    return kPage('','','',`${kE(n,90,170,820,'line',{sw:.38})}<ellipse cx="370" cy="560" rx="62" ry="44" fill="#fff" stroke="#2a2326" stroke-width="3" stroke-dasharray="8 6"/><ellipse cx="630" cy="560" rx="62" ry="44" fill="#fff" stroke="#2a2326" stroke-width="3" stroke-dasharray="8 6"/>
      <circle cx="140" cy="600" r="16" fill="none" stroke="#2a2326" stroke-width="3"/><circle cx="860" cy="600" r="16" fill="none" stroke="#2a2326" stroke-width="3"/>${kT(500,110,`I’m a ${op}!`,{s:64,a:'middle'})}${kT(500,1130,'Pinte, recorte, faça os furos dos olhos e amarre um elástico nos dois círculos.',{s:22,b:false,c:'#6a5e61',a:'middle',f:KFS})}`,{noHead:true}); },Object.fromEntries(Object.keys(KIDS_MASKS).map(k=>[k,k[0].toUpperCase()+k.slice(1)]))),
  /* ---- 5 a 6 anos ---- */
  flash:S0('Flashcards para recortar','voc',['a3','a5','a7'],'6 cartões com figura e palavra.',(th,R)=>{ const W=kW(th,6,R); let b='';
    W.forEach(([w,n],i)=>{ const x=60+(i%2)*450, y=280+Math.floor(i/2)*355; b+=kBox(x+15,y+10,410,325,i)+kE(n,x+120,y+30,200)+kT(x+220,y+300,w,{s:w.length>9? 40 : 50,a:'middle'}); });
    b+=kCut(500,270,500,1350)+kCut(50,630,950,630)+kCut(50,985,950,985);
    return kPage(th,`${KIDS_THEMES[th].n} flashcards`,'Recorte · jogue “What’s this?”, memória e esconde-esconde',b,{name:false}); }),
  letra:S0('Alfabeto: traçar a letra','esc',['a5'],'Letra grande para traçar + “a is for apple”.',(op,R)=>{ const l=KIDS_ABCW[op]? op : 'a', [w,n]=KIDS_ABCW[l];
    return kPage('',`Letter ${l.toUpperCase()} ${l}`,'Trace a maiúscula e a minúscula com o dedo e depois com o lápis',`${kTrace(290,760,l.toUpperCase(),520,'middle')}${kTrace(720,760,l,520,'middle')}${kBox(620,800,300,280,1)}${kE(n,660,830,220)}${kT(90,930,`${l} is for`,{s:58})}${kT(90,1020,w,{s:76,c:'#b03a5b'})}
      ${kRule(90,560,1190,110)}${[...Array(4)].map((_,i)=>kTrace(120+i*115,1190,l,110)).join('')}${kRule(90,920,1325,100)}`,{ic:n}); },Object.fromEntries(Object.keys(KIDS_ABCW).map(l=>[l,l.toUpperCase()+' '+l]))),
  primeira:S0('Primeira letra','esc',['a5'],'Circule a letra que começa a palavra.',(th,R)=>{ const W=kW(th,6,R).filter(([w])=>/^[a-z]/i.test(w)); let b=''; const AZ='abcdefghijklmnoprstuw';
    W.forEach(([w,n],i)=>{ const x=60+(i%2)*450, y=280+Math.floor(i/2)*360, f=w[0].toLowerCase(); const ops=kShuf([f,...kShuf(AZ.split('').filter(c=>c!==f),R).slice(0,2)],R);
      b+=kBox(x+15,y,410,320,i)+kE(n,x+140,y+20,160)+ops.map((o,k)=>`<circle cx="${x+95+k*125}" cy="${y+250}" r="44" fill="#fff" stroke="#2a2326" stroke-width="3"/>${kT(x+95+k*125,y+270,o,{s:56,a:'middle'})}`).join(''); });
    return kPage(th,'First letter','Diga o nome da figura e circule a primeira letra',b); }),
  tracar:S0('Trace as palavras','esc',['a5','a7'],'Traçar e copiar 4 palavras na pauta de caligrafia.',(th,R)=>{ const W=kW(th,4,R); let b='';
    W.forEach(([w,n],i)=>{ const y=280+i*270; b+=kBox(50,y,230,230,i)+kE(n,75,y+25,180)+kTrace(320,y+120,w,w.length>8? 80 : 100)+kRule(310,955,y+120,100)+kRule(310,955,y+232,90); });
    return kPage(th,'Trace and write','Passe o lápis por cima e copie embaixo',b); }),
  ligar:S0('Ligue a figura à palavra','voc',['a5','a7'],'5 figuras e 5 palavras para ligar.',(th,R)=>{ const W=kW(th,5,R), S=kShuf(W,R); let b='';
    W.forEach(([w,n],i)=>{ const y=280+i*212; b+=kCardE(n,90,y,240,185,i)+`<circle cx="365" cy="${y+92}" r="13" fill="#2a2326"/>`; });
    S.forEach(([w],i)=>{ const y=280+i*212; b+=`<circle cx="600" cy="${y+92}" r="13" fill="#2a2326"/>`+kT(640,y+110,w,{s:w.length>9? 40 : 52}); });
    return kPage(th,'Match!','Ligue cada figura à palavra certa',b); }),
  cores:S0('Pinte com as cores','voc',['a5','a7'],'“Colour the cat red”: cores + vocabulário.',(th,R)=>{ const W=kW(th,4,R), C=kShuf(Object.keys(KCOL),R); let b='';
    W.forEach(([w,n],i)=>{ const y=280+i*270, c=C[i]; b+=kBox(60,y,330,240,i,{fill:'#fff',stroke:'#efe6dc'})+kE(n,115,y+10,220,'line')+kT(430,y+95,`Colour the ${w}`,{s:w.length>8? 38 : 46})+`<circle cx="455" cy="${y+163}" r="26" fill="${KCOL[c][0]}"/>`+kT(500,y+182,c,{s:54,c:KCOL[c][0]}); });
    return kPage(th,'Colour time!','Leia (ou ouça a professora) e pinte com a cor certa',b); }),
  corbolinha:S0('Pinte pela bolinha','arte',['a3','a5'],'Sem leitura: a bolinha mostra a cor de cada figura.',(th,R)=>{ const W=kW(th,4,R), C=kShuf(Object.keys(KCOL),R); let b='';
    W.forEach(([w,n],i)=>{ const x=60+(i%2)*450, y=280+Math.floor(i/2)*540; b+=kBox(x+10,y,420,500,i,{fill:'#fff',stroke:'#efe6dc'})+kE(n,x+60,y+40,320,'line')+`<circle cx="${x+220}" cy="${y+430}" r="38" fill="${KCOL[C[i]][0]}" stroke="#2a2326" stroke-width="3"/>`; });
    return kPage(th,'Colour by dot','Pinte cada figura com a cor da bolinha. Diga a cor em inglês!',b); }),
  contar:S0('Conte e escreva','voc',['a5','a7'],'Quantos tem? Escreva o número e a palavra (até 10).',(th,R)=>{ const W=kW(th,4,R); let b='';
    W.forEach(([w,n],i)=>{ const y=280+i*270, k=2+Math.floor(R.r()*8); b+=kBox(50,y,630,240,i);
      for (let j=0;j<k;j++) b+=kE(n,70+(j%5)*120,y+15+Math.floor(j/5)*112,100);
      b+=`<rect x="705" y="${y+18}" width="110" height="110" rx="20" fill="#fff" stroke="#f0a020" stroke-width="3"/>`+kTrace(710,y+215,NUMW[k],60)+kRule(705,960,y+215,60); });
    return kPage(th,'Count and write','Conte, escreva o número no quadrado e trace a palavra',b); }),
  numeros:S0('Números: traçar e contar','esc',['a3','a5'],'Traçar os números e pintar as bolinhas.',(op,R)=>{ const st=op==='b'? 6 : 1; let b='';
    for (let i=0;i<5;i++){ const n=st+i, y=280+i*215; b+=kBox(50,y,900,190,i)+kTrace(140,y+150,String(n),150,'middle')+kTrace(240,y+125,NUMW[n],62)+kRule(230,560,y+125,62);
      for (let j=0;j<n;j++) b+=`<circle cx="${615+(j%5)*65}" cy="${y+55+Math.floor(j/5)*80}" r="26" fill="#fff" stroke="#2a2326" stroke-width="3"/>`; }
    return kPage('',`Numbers ${st} to ${st+4}`,'Trace o número e a palavra e pinte as bolinhas',b,{ic:'abacus'}); },{a:'1 a 5',b:'6 a 10'}),
  bingo:S0('Bingo de figuras','jogo',['a3','a5','a7'],'2 cartelas 3 × 3 para recortar e jogar.',(th,R)=>{ const all=KIDS_THEMES[th].w; let b='';
    [0,1].forEach(g=>{ const pick=kShuf(all,R).slice(0,Math.min(9,all.length)), y0=275+g*545; b+=kT(500,y0+18,'B · I · N · G · O',{s:36,a:'middle',c:'#b03a5b'});
      pick.forEach(([w,n],i)=>{ const x=185+(i%3)*215, y=y0+40+Math.floor(i/3)*160; b+=kBox(x,y,200,148,i,{r:20})+kE(n,x+55,y+12,90)+kT(x+100,y+136,w,{s:20,a:'middle',c:'#6a5e61',f:KFS}); }); });
    b+=kCut(50,808,950,808);
    return kPage(th,`${KIDS_THEMES[th].n} bingo`,'A professora fala a palavra; a criança cobre a figura. Linha completa = BINGO!',b,{name:false}); }),
  memoria:S0('Jogo da memória','jogo',['a5','a7'],'12 cartas: 6 figuras e 6 palavras.',(th,R)=>{ const W=kW(th,6,R), cards=kShuf([...W.map(x=>['i',...x]),...W.map(x=>['w',...x])],R); let b='';
    cards.forEach(([t,w,n],i)=>{ const x=55+(i%3)*300, y=275+Math.floor(i/3)*270; b+= t==='i'? kBox(x+12,y+12,276,246,i,{r:22})+kE(n,x+75,y+40,150) : kBox(x+12,y+12,276,246,0,{r:22,fill:'#fff',stroke:'#2a2326'})+kT(x+150,y+150,w,{s:w.length>8? 34 : 48,a:'middle'}); });
    for (let i=1;i<3;i++) b+=kCut(55+i*300,275,55+i*300,1355); for (let j=1;j<4;j++) b+=kCut(55,275+j*270,955,275+j*270);
    return kPage(th,'Memory game','Recorte, vire as cartas para baixo e encontre os pares',b,{name:false}); }),
  pontos:S0('Ligue os pontos','arte',['a5','a7'],'Ligue os números em ordem e pinte.',(op,R)=>{ const D=KIDS_DOTS[op]||KIDS_DOTS.star, ox=170, oy=310, S=660;
    let b=kBox(120,270,760,760,3,{fill:'#fffdf8',stroke:'#efe6dc'});
    D.p.forEach(([x,y],i)=>{ if (i===D.p.length-1&&x===D.p[0][0]&&y===D.p[0][1]) return; b+=`<circle cx="${ox+x*S}" cy="${oy+y*S}" r="10" fill="#2a2326"/>`+kT(ox+x*S+14,oy+y*S-14,String(i+1),{s:30,c:'#2b6cb0'}); });
    b+=kT(120,1120,'It’s a',{s:52})+kRule(300,880,1120,80)+kT(120,1230,NUMW.slice(1,Math.min(D.p.length,10)+1).join(' · '),{s:24,b:false,c:'#8a7e80',f:KFS});
    return kPage('','Dot to dot','Ligue os pontos contando em inglês. Depois pinte!',b,{ic:'pencil'}); },Object.fromEntries(Object.entries(KIDS_DOTS).map(([k,v])=>[k,v.n]))),
  minilivro:S0('Mini-livro para dobrar','esc',['a5','a7'],'Livrinho de 8 páginas “My … book”.',(th,R)=>{ const W=kW(th,6,R); let b='';
    const cells=[['cover'],...W.map(x=>['page',...x]),['end']];
    cells.forEach((c,i)=>{ const x=40+(i%2)*460, y=50+Math.floor(i/2)*330;
      b+=`<rect x="${x}" y="${y}" width="460" height="330" fill="#fff" stroke="#d8cec4" stroke-width="2"/>`;
      if (c[0]==='cover') b+=kBox(x+20,y+20,420,290,3)+kE(KIDS_THEMES[th].ic,x+165,y+40,130)+kT(x+230,y+215,`My ${KIDS_THEMES[th].n.toLowerCase()}`,{s:36,a:'middle'})+kT(x+230,y+262,'book',{s:36,a:'middle'})+kT(x+230,y+300,'by _____________',{s:20,a:'middle',b:false,f:KFS});
      else if (c[0]==='end') b+=kT(x+230,y+150,'The end!',{s:56,a:'middle',c:'#b03a5b'})+kE('glowing-star',x+180,y+180,100);
      else b+=kE(c[2],x+130,y+25,200,'line')+kT(x+230,y+285,itIs(c[1]),{s:34,a:'middle'})+`<text x="${x+440}" y="${y+318}" font-size="18" text-anchor="end" fill="#b2a7aa">${i}</text>`; });
    b+=kT(500,1374,'Recorte na linha, dobre ao meio duas vezes e monte. A criança pinta e lê com você!',{s:19,b:false,c:'#6a5e61',a:'middle',f:KFS});
    return kPage(th,'','',b,{noHead:true}); }),
  labirinto:S0('Labirinto','jogo',['a3','a5','a7'],'Ajude um bichinho a chegar no outro (mais fácil para os pequenos).',(op,R)=>{ const lv={facil:[5,6,120],medio:[8,10,82],dificil:[11,14,60]}[op]||[8,10,82], [C,L,cs]=lv, ox=(1000-C*cs)/2, oy=380;
    const PAIRS=[['mouse','mouse','cheese','cheese-wedge'],['monkey','monkey','banana','banana'],['rabbit','rabbit','carrot','carrot'],['cat','cat','fish','fish'],['bee','honeybee','flower','sunflower'],['astronaut','astronaut','rocket','rocket'],['chick','baby-chick','mom','chicken'],['dog','dog','house','house'],['bear','bear','teddy bear','teddy-bear'],['turtle','turtle','sea','spouting-whale']], P=PAIRS[Math.floor(R.r()*PAIRS.length)];
    return kPage('',`Help the ${P[0]}!`,`Ajude o ${P[0]} a chegar até o ${P[2]}`,`${kMaze(R,C,L,ox,oy,cs)}${kE(P[1],ox-130,oy-110,130)}${kT(ox-65,oy+40,'START',{s:20,a:'middle',c:'#1f8a4c',f:KFS})}${kE(P[3],ox+C*cs+5,oy+L*cs-30,130)}${kT(ox+C*cs+70,oy+L*cs+120,'FINISH',{s:20,a:'middle',c:'#d63b3b',f:KFS})}`,{ic:P[1]}); },{facil:'Fácil (3–4 anos)',medio:'Médio (5–6 anos)',dificil:'Difícil (7–8 anos)'}),
  /* ---- 7 a 8 anos ---- */
  falta:S0('Complete a letra que falta','esc',['a7'],'Palavras com uma letra faltando.',(th,R)=>{ const W=kW(th,8,R).filter(([w])=>!/[\s-]/.test(w)).slice(0,6); let b='';
    W.forEach(([w,n],i)=>{ const x=60+(i%2)*450, y=280+Math.floor(i/2)*360, m=1+Math.floor(R.r()*(w.length-1)), L=w.split(''), cw=Math.min(62,380/L.length);
      b+=kBox(x+15,y,410,320,i)+kE(n,x+140,y+20,160)+L.map((ch,j)=>{ const cx=x+220-(L.length*cw)/2+j*cw; return j===m? `<rect x="${cx+2}" y="${y+218}" width="${cw-6}" height="70" rx="10" fill="#fff" stroke="#f0a020" stroke-width="3"/>` : kT(cx+cw/2,y+275,ch,{s:Math.min(56,cw*.95),a:'middle'}); }).join(''); });
    return kPage(th,'What’s missing?','Escreva a letra que falta em cada palavra',b); }),
  circule:S0('Circule a palavra certa','ler',['a7'],'6 figuras com 3 palavras cada.',(th,R)=>{ const all=KIDS_THEMES[th].w, W=kW(th,6,R); let b='';
    W.forEach(([w,n],i)=>{ const x=60+(i%2)*450, y=280+Math.floor(i/2)*360, op=kShuf([w,...kShuf(all.filter(z=>z[0]!==w),R).slice(0,2).map(z=>z[0])],R);
      b+=kBox(x+15,y,410,320,i)+kE(n,x+140,y+15,170)+op.map((o,j)=>kT(x+85+j*135,y+275,o,{s:o.length>8? 24 : o.length>5? 30 : 36,a:'middle'})).join(''); });
    return kPage(th,'Circle the word','Olhe a figura e circule a palavra certa',b); }),
  caca:S0('Caça-palavras','jogo',['a7','a9'],'Grade com as palavras do tema (→ e ↓).',(th,R)=>{ const W=kW(th,9,R).filter(([w])=>!/[\s-]/.test(w)&&w.length<=10).slice(0,8), N=11, G=[...Array(N)].map(()=>Array(N).fill('')), placed=[];
    for (const [w,n] of W){ const u=w.toUpperCase(); for (let t=0;t<300;t++){ const h=R.r()<.55, r=Math.floor(R.r()*(h? N : N-u.length+1)), c=Math.floor(R.r()*(h? N-u.length+1 : N));
      if ([...u].every((ch,i)=>{ const v=G[h? r : r+i][h? c+i : c]; return !v||v===ch; })){ [...u].forEach((ch,i)=>{ G[h? r : r+i][h? c+i : c]=ch; }); placed.push([w,n]); break; } } }
    const AZ='ABCDEFGHIJKLMNOPRSTUVWY'; let b=kBox(170,275,660,660,4,{r:30,fill:'#fff',stroke:'#2a2326'});
    G.forEach((row,r)=>row.forEach((ch,c)=>{ b+=kT(200+c*60,325+r*60,ch||AZ[Math.floor(R.r()*AZ.length)],{s:36,a:'middle',f:KFS}); }));
    placed.forEach(([w,n],i)=>{ const x=70+(i%4)*222, y=980+Math.floor(i/4)*180; b+=kBox(x,y,205,160,i,{r:22})+kE(n,x+65,y+12,76)+kT(x+102,y+130,w,{s:26,a:'middle'}); });
    return kPage(th,'Word search','Encontre as palavras e pinte cada uma de uma cor',b); }),
  cruzada:S0('Cruzadinha com figuras','jogo',['a7','a9'],'As figuras são as dicas.',(th,R)=>{ const W=kW(th,10,R).filter(([w])=>!/[\s-]/.test(w)&&w.length>=3&&w.length<=9);
    const cells=new Map(), list=[]; const key=(r,c)=>r+','+c;
    const fits=(w,r,c,h)=>{ let cross=0; for (let i=0;i<w.length;i++){ const rr=h? r : r+i, cc=h? c+i : c, v=cells.get(key(rr,cc)); if (v&&v!==w[i]) return -1; if (v) cross++;
        else { const n1=h? key(rr-1,cc) : key(rr,cc-1), n2=h? key(rr+1,cc) : key(rr,cc+1); if (cells.has(n1)||cells.has(n2)) return -1; } }
      if (cells.has(h? key(r,c-1) : key(r-1,c))||cells.has(h? key(r,c+w.length) : key(r+w.length,c))) return -1; return cross; };
    const put=(w,r,c,h,n)=>{ for (let i=0;i<w.length;i++) cells.set(key(h? r : r+i,h? c+i : c),w[i]); list.push({w,r,c,h,n}); };
    if (W[0]) put(W[0][0].toLowerCase(),0,0,true,W[0][1]);
    for (const [w0,n] of W.slice(1)){ const w=w0.toLowerCase(); let best=null;
      for (const p of list) for (let i=0;i<p.w.length;i++) for (let j=0;j<w.length;j++){ if (p.w[i]!==w[j]) continue; const h=!p.h, r=p.h? p.r-j : p.r+i, c=p.h? p.c+i : p.c-j, f=fits(w,r,c,h); if (f>0&&(!best||f>best.f)) best={r,c,h,f}; }
      if (best) put(w,best.r,best.c,best.h,n); if (list.length>=6) break; }
    const rs=[...cells.keys()].map(k=>+k.split(',')[0]), cs=[...cells.keys()].map(k=>+k.split(',')[1]), r0=Math.min(...rs), c0=Math.min(...cs), rows=Math.max(...rs)-r0+1, cols=Math.max(...cs)-c0+1;
    const cz=Math.min(72,Math.floor(820/cols),Math.floor(640/rows)), ox=(1000-cols*cz)/2, oy=300; let b='';
    for (const k of cells.keys()){ const [r,c]=k.split(',').map(Number); b+=`<rect x="${ox+(c-c0)*cz}" y="${oy+(r-r0)*cz}" width="${cz}" height="${cz}" fill="#fff" stroke="#2a2326" stroke-width="2.5"/>`; }
    list.forEach((p,i)=>{ b+=`<circle cx="${ox+(p.c-c0)*cz+14}" cy="${oy+(p.r-r0)*cz+14}" r="12" fill="#f0a020"/>`+kT(ox+(p.c-c0)*cz+14,oy+(p.r-r0)*cz+20,String(i+1),{s:16,a:'middle',c:'#fff',f:KFS}); });
    list.forEach((p,i)=>{ const x=70+(i%3)*295, y=990+Math.floor(i/3)*180; b+=kBox(x,y,275,160,i,{r:22})+kE(p.n,x+20,y+25,110)+kT(x+170,y+70,`${i+1} ${p.h? '→' : '↓'}`,{s:34,a:'middle'})+kT(x+170,y+120,`${p.w.length} letters`,{s:18,a:'middle',c:'#6a5e61',f:KFS}); });
    return kPage(th,'Crossword','Olhe as figuras e escreva as palavras nos quadradinhos',b); }),
  domino:S0('Dominó','jogo',['a5','a7'],'8 peças: figura de um lado, palavra do outro.',(th,R)=>{ const W=kW(th,8,R); let b='';
    W.forEach(([w,n],i)=>{ const nx=W[(i+1)%W.length][0], x=60+(i%2)*450, y=275+Math.floor(i/2)*270;
      b+=kBox(x,y,430,230,i,{fill:'#fff',stroke:'#2a2326',r:24})+`<line x1="${x+215}" y1="${y+18}" x2="${x+215}" y2="${y+212}" stroke="#2a2326" stroke-width="2"/>`+kBox(x+12,y+12,193,206,i,{r:16})+kE(n,x+40,y+45,140)+kT(x+322,y+128,nx,{s:nx.length>8? 28 : 38,a:'middle'}); });
    return kPage(th,`${KIDS_THEMES[th].n} dominoes`,'Recorte as peças e encaixe cada figura com a palavra',b,{name:false}); }),
  tabuleiro:S0('Jogo de tabuleiro','jogo',['a5','a7','a9'],'Trilha de 20 casas com figuras e surpresas.',(th,R)=>{ const all=KIDS_THEMES[th].w; let b='', cells=[];
    for (let i=0;i<20;i++){ const row=Math.floor(i/4), col=row%2? 3-i%4 : i%4; cells.push([110+col*200,300+row*200]); }
    cells.forEach(([x,y],i)=>{ if (i){ const [px,py]=cells[i-1]; b+=`<line x1="${px+90}" y1="${py+90}" x2="${x+90}" y2="${y+90}" stroke="#ffd98a" stroke-width="26" stroke-linecap="round"/>`; } });
    cells.forEach(([x,y],i)=>{ const sp= i===0? 'START' : i===19? 'FINISH' : i%7===3? 'Go back 2' : i%7===5? 'Jump +2' : '';
      b+=kBox(x,y,180,180,i,{r:26,stroke:'#2a2326',sw:3})+kT(x+20,y+38,String(i+1),{s:22,c:'#8a7e80',f:KFS});
      b+= sp? (i===0? kE('rocket',x+45,y+45,90) : i===19? kE('trophy',x+45,y+40,90) : '')+kT(x+90,y+(i===0||i===19? 160 : 105),sp,{s:sp.length>6? 24 : 30,a:'middle',c:'#b03a5b'}) : kE(all[i%all.length][1],x+35,y+40,110); });
    return kPage(th,`${KIDS_THEMES[th].n} board game`,'Jogue o dado, ande e diga o nome da figura. Errou? Fica onde está!',b,{name:false}); }),
  dado:S0('Role o dado e fale','jogo',['a5','a7'],'Dado de 1 a 6: palavra ou frase.',(th,R)=>{ const W=kW(th,6,R); let b='';
    W.forEach(([w,n],i)=>{ const y=275+i*180; b+=kBox(60,y,880,160,i,{r:26})+kDice(85,y+18,124,i+1)+kE(n,250,y+15,130)+kT(410,y+75,w,{s:46})+kT(410,y+125,i%2? `I like the ${w}.` : itIs(w).replace('.','!'),{s:26,b:false,c:'#5a4f52',f:KFS}); });
    return kPage(th,'Roll and say!','Jogue o dado e diga a palavra (ou faça uma frase)',b); }),
  separar:S0('Recorte e separe','jogo',['a5','a7'],'Cole cada figura na caixa certa (dois temas).',(th,R)=>{ const ot=kOther(th,R), A=kW(th,4,R), B=kW(ot,4,R), mix=kShuf([...A,...B],R); let b='';
    [[th,70,1],[ot,515,3]].forEach(([t,x,c])=>{ b+=kBox(x,275,415,560,c,{stroke:'#2a2326',r:30})+kE(KIDS_THEMES[t].ic,x+20,295,80)+kT(x+215,345,KIDS_THEMES[t].n,{s:36,a:'middle'}); });
    mix.forEach(([w,n],i)=>{ const x=60+(i%4)*225, y=880+Math.floor(i/4)*235; b+=`<rect x="${x}" y="${y}" width="205" height="215" rx="18" fill="#fff" stroke="#a99fa3" stroke-width="2" stroke-dasharray="10 8"/>`+kE(n,x+42,y+15,120)+kT(x+102,y+192,w,{s:24,a:'middle'}); });
    return kPage(th,'Cut and sort','Recorte as figuras de baixo e cole na caixa certa',b); }),
  lerpintar:S0('Leia e pinte','ler',['a7'],'Frases como “The cat is orange.” para ler e pintar.',(th,R)=>{ const W=kW(th,4,R), C=kShuf(Object.keys(KCOL),R); let b='';
    W.forEach(([w,n],i)=>{ const y=280+i*270; b+=kBox(60,y,880,240,i,{fill:'#fff',stroke:'#efe6dc'})+kE(n,90,y+15,210,'line')+kT(340,y+110,`The ${w} is`,{s:46})+kT(340,y+175,`${C[i]}.`,{s:52,c:'#2a2326'})+kE(KCOL[C[i]][1],840,y+80,70); });
    return kPage(th,'Read and colour','Leia a frase e pinte com a cor certa',b); }),
  quantos:S0('How many?','ler',['a7','a9'],'Conte e complete: “There are three cats.”',(th,R)=>{ const W=kW(th,4,R); let b='';
    W.forEach(([w,n],i)=>{ const y=280+i*270, k=2+Math.floor(R.r()*5); b+=kBox(60,y,880,240,i,{r:26});
      for (let j=0;j<k;j++) b+=kE(n,85+j*95,y+20,90);
      b+=kT(85,y+175,`There are`,{s:36})+kRule(290,560,y+175,60)+kRule(580,900,y+175,60)+kT(85,y+218,`(${k===1? 'one' : 'number'} + ${w}${/s$|ch$|sh$/.test(w)? 'es' : 's'})`,{s:18,b:false,c:'#8a7e80',f:KFS}); });
    return kPage(th,'How many?','Conte e complete a frase: There are three cats.',b); }),
  /* ---- 9 a 10 anos ---- */
  embaralhada:S0('Desembaralhe as palavras','esc',['a9'],'Letras misturadas: descubra a palavra.',(th,R)=>{ const W=kW(th,8,R).filter(([w])=>!/[\s-]/.test(w)&&w.length>=3).slice(0,6); let b='';
    W.forEach(([w,n],i)=>{ const y=280+i*180; let sc=w; for (let t=0;t<10&&sc===w;t++) sc=kShuf(w.split(''),R).join('');
      b+=kBox(60,y,880,160,i,{r:26})+kE(n,85,y+20,120)+sc.split('').map((ch,j)=>`<rect x="${240+j*58}" y="${y+28}" width="50" height="56" rx="10" fill="#fff" stroke="#2a2326" stroke-width="2"/>${kT(265+j*58,y+70,ch,{s:34,a:'middle'})}`).join('')+kRule(240,900,y+140,44); });
    return kPage(th,'Unscramble!','Arrume as letras e escreva a palavra',b); }),
  frases:S0('Monte a frase','ler',['a9'],'Palavras fora de ordem: escreva a frase certa.',(th,R)=>{ const W=kW(th,5,R); let b='';
    const tpl=[w=>`I like the ${w}`,w=>`This is my ${w}`,w=>`Can you see the ${w}`,w=>kPl(w)? `The ${w} are very big` : `The ${w} is very big`,w=>`I have ${article(w)} ${w} at home`];
    W.forEach(([w,n],i)=>{ const y=280+i*210, s=tpl[i%tpl.length](w), parts=kShuf(s.split(' '),R);
      b+=kBox(60,y,880,190,i,{r:26})+kE(n,80,y+30,120)+parts.map((p,j)=>`<g><rect x="${230+j*(680/parts.length)}" y="${y+25}" width="${680/parts.length-10}" height="54" rx="12" fill="#fff" stroke="#2a2326" stroke-width="2"/>${kT(230+j*(680/parts.length)+(680/parts.length-10)/2,y+62,p,{s:Math.min(28,Math.floor((680/parts.length-18)/(p.length*.56))),a:'middle'})}</g>`).join('')+kRule(230,910,y+165,50); });
    return kPage(th,'Make the sentence','Ponha as palavras em ordem e escreva a frase',b); }),
  leitura:S0('Leitura com verdadeiro ou falso','ler',['a9'],'Texto curto sobre o tema + V ou F.',(th,R)=>{ const W=kW(th,4,R), [a,b2,c,d]=W.map(x=>x[0]); const name=['Lucy','Tom','Ana','Leo'][Math.floor(R.r()*4)];
    const see=w=>`${article(w)} ${w}`.replace(/^some (\w)/,'some $1'), there=w=>kPl(w)? `There are some ${w}` : `There is ${article(w)} ${w}`;
    const txt=[`Hi! My name is ${name}.`,`I love ${KIDS_THEMES[th].n.toLowerCase()}!`,`My favourite is the ${a}.`,`I don’t like the ${b2}.`,`I can see ${see(c)} in my picture,`,`but I can’t see ${kPl(d)? 'any' : article(d)} ${d}.`];
    const tf=[[`${name}’s favourite is the ${a}.`,true],[`${name} likes the ${b2}.`,false],[`${there(c)} in the picture.`,true],[`${there(d)} in the picture.`,false]];
    let b=kBox(60,275,880,470,2,{r:30})+kE(W[0][1],720,300,180)+kE(W[2][1],760,520,140)+txt.map((t,i)=>kT(100,350+i*62,t,{s:36,b:i===0})).join('');
    tf.forEach(([t,v],i)=>{ const y=800+i*130; b+=kT(80,y+50,`${i+1}. ${t}`,{s:30,b:false})+`<rect x="760" y="${y+8}" width="70" height="60" rx="12" fill="#fff" stroke="#1f8a4c" stroke-width="3"/>${kT(795,y+50,'T',{s:30,a:'middle',c:'#1f8a4c'})}<rect x="850" y="${y+8}" width="70" height="60" rx="12" fill="#fff" stroke="#d63b3b" stroke-width="3"/>${kT(885,y+50,'F',{s:30,a:'middle',c:'#d63b3b'})}`; });
    return kPage(th,'Read and answer','Leia o texto e marque T (true) ou F (false)',b); }),
  pesquisa:S0('Pesquisa: Do you like…?','ler',['a7','a9'],'Pergunte para a família e os amigos.',(th,R)=>{ const W=kW(th,5,R); let b=`<rect x="60" y="275" width="880" height="1040" rx="24" fill="#fff" stroke="#2a2326" stroke-width="3"/>`;
    const cols=['me','','',''];
    b+=kT(270,330,'Do you like…?',{s:30})+cols.map((c,j)=>kT(560+j*100,330,c||'name',{s:20,a:'middle',c:'#8a7e80',f:KFS})).join('');
    W.forEach(([w,n],i)=>{ const y=360+i*185; b+=`<line x1="60" y1="${y}" x2="940" y2="${y}" stroke="#e3d9cc" stroke-width="2"/>`+kE(n,90,y+20,140)+kT(260,y+105,`${w}?`,{s:40})+[0,1,2,3].map(j=>`<rect x="${520+j*100}" y="${y+50}" width="80" height="80" rx="14" fill="${KSOFT[(i+j)%8]}"/>`).join(''); });
    return kPage(th,'Survey time!','Pergunte “Do you like…?” e marque ✓ (Yes) ou ✗ (No)',b); }),
  desenhe:S0('Desenhe e escreva','arte',['a5','a7','a9'],'Moldura para desenhar e frase para completar.',(th,R)=>{ const what={pets:'pet',farm:'farm animal',wild:'wild animal',sea:'sea animal',bugs:'bug',food:'food',fruit:'fruit',veg:'vegetable',toys:'toy',clothes:'clothes',body:'face',family:'family',feelings:'face today',weather:'weather',nature:'place',transport:'transport',house:'room',school:'school thing',music:'instrument',sports:'sport',space:'planet',party:'party'}[th]||'thing';
    return kPage(th,`Draw your favourite ${what}!`,'Desenhe e complete as frases',`${kBox(80,280,840,640,3,{fill:'#fffdf8',stroke:'#2a2326',r:34})}${kE('crayon',100,300,70)}${kE('sparkles',840,840,64)}${kT(100,1010,`My favourite ${what} is`,{s:44})}${kRule(100,920,1110,80)}${kT(100,1215,'It is',{s:44})}${kRule(230,920,1215,80)}${kT(100,1300,'(red, blue, big, small, funny, cute…)',{s:22,b:false,c:'#8a7e80',f:KFS})}`); }),
  musica:S0('Música com gestos','musica',['a3','a5','a7'],'Canção tradicional com figuras e os gestos.',(op,R)=>{ const S=KIDS_SONGS[op]||KIDS_SONGS.head; let b='';
    S.img.forEach((n,i)=>{ b+=kBox(70+i*222,275,200,180,i,{r:26})+kE(n,110+i*222,295,120); });
    const lines=S.l.flatMap(ln=>{ if (ln.length<=40) return [ln]; let k=ln.lastIndexOf(', ',40); if (k<16) k=ln.lastIndexOf(' ',40); return [ln.slice(0,k+1).trim(),'   '+ln.slice(k+1).trim()]; });
    const gap=Math.min(78,Math.floor(560/lines.length)), fs=Math.min(40,gap-12);
    lines.forEach((ln,i)=>{ b+=kT(80,540+i*gap,ln,{s:fs,c:ln.startsWith('   ')? '#5a4f52' : '#2a2326'}); });
    const y=575+lines.length*gap; b+=kBox(60,y,880,170,3,{r:26})+kE('musical-notes',85,y+20,56)+kT(155,y+60,'Actions · Gestos',{s:30,c:'#b03a5b'})+`<foreignObject x="90" y="${y+76}" width="820" height="90"><div xmlns="http://www.w3.org/1999/xhtml" style="font:22px/1.35 Figtree,system-ui,sans-serif;color:#5a4f52">${esc(S.a)}</div></foreignObject>`;
    return kPage('',S.t,'Canção tradicional · cante, faça os gestos e pinte as figuras',b,{name:false,band:'#e3f1fd',ic:'musical-notes'}); },Object.fromEntries(Object.entries(KIDS_SONGS).map(([k,v])=>[k,v.t]))),
  cartao:S0('Cartão para dobrar','arte',['a3','a5','a7','a9'],'Cartão de aniversário, Dia das Mães, Natal… para pintar e dar.',(op,R)=>{ const [t,a,c]=KIDS_CARDS[op]||KIDS_CARDS.bday;
    return kPage('','','',`${kCut(40,707,960,707)}<g transform="rotate(180 500 353)">${kBox(80,80,840,550,1,{r:36,fill:'#fff',stroke:'#efe6dc'})}${kE(a,330,110,340,'line')}${kT(500,560,t,{s:58,a:'middle'})}</g>
      ${kBox(80,780,840,550,3,{r:36,fill:'#fffdf8'})}${kT(500,880,'To:',{s:40,a:'middle'})}<line x1="250" y1="960" x2="750" y2="960" stroke="#a99fa3" stroke-width="2"/>${kE(c,430,990,140)}${kT(500,1200,'Love,',{s:40,a:'middle'})}<line x1="250" y1="1280" x2="750" y2="1280" stroke="#a99fa3" stroke-width="2"/>${kT(500,1374,'Dobre na linha pontilhada: a capa fica para fora. Pinte e escreva os nomes.',{s:19,b:false,c:'#6a5e61',a:'middle',f:KFS})}`,{noHead:true}); },Object.fromEntries(Object.entries(KIDS_CARDS).map(([k,v])=>[k,v[0]]))),
  certificado:S0('Certificado','arte',['a3','a5','a7','a9'],'“Super Star” com espaço para o nome.',(op,R)=>{ const T={star:['Super Star!','glowing-star'],reader:['Super Reader!','closed-book'],singer:['Super Singer!','microphone'],speaker:['English Speaker!','speaking-head']}[op]||['Super Star!','glowing-star'];
    let b=`<rect x="44" y="44" width="912" height="1326" rx="44" fill="#fff3d6"/><rect x="80" y="80" width="840" height="1254" rx="34" fill="#fff" stroke="#f0a020" stroke-width="6" stroke-dasharray="18 10"/>`;
    ['star','sparkles','glowing-star','party-popper','balloon','trophy'].forEach((n,i)=>{ b+=kE(n,[110,820,120,810,130,800][i],[110,120,1180,1170,640,640][i],70); });
    b+=kT(500,260,'Certificate',{s:52,a:'middle',c:'#b03a5b'})+kE(T[1],400,300,200)+kT(500,600,T[0],{s:84,a:'middle'})+kT(500,690,'This certificate goes to',{s:32,a:'middle',b:false,f:KFS})+`<line x1="200" y1="810" x2="800" y2="810" stroke="#2a2326" stroke-width="3"/>`
      +`<circle cx="500" cy="985" r="120" fill="#fffdf5" stroke="#f0a020" stroke-width="5" stroke-dasharray="12 10"/>`+kT(500,995,'sticker here!',{s:26,a:'middle',c:'#b07a10',b:false,f:KFS})
      +kT(270,1225,'Teacher',{s:24,a:'middle',b:false,f:KFS})+`<line x1="150" y1="1185" x2="390" y2="1185" stroke="#2a2326" stroke-width="2"/>`+kT(730,1225,'Date',{s:24,a:'middle',b:false,f:KFS})+`<line x1="610" y1="1185" x2="850" y2="1185" stroke="#2a2326" stroke-width="2"/>`;
    return kPage('','','',b,{noHead:true}); },{star:'Super Star',reader:'Super Reader',singer:'Super Singer',speaker:'English Speaker'}),
  estrelas:S0('Quadro de estrelas','arte',['a3','a5','a7','a9'],'20 espaços para figurinhas: uma por aula.',(th,R)=>{ let b=`${kT(500,315,'Collect 20 stars and win a surprise!',{s:34,a:'middle',c:'#b03a5b'})}`;
    for (let i=0;i<20;i++){ const x=150+(i%4)*233, y=430+Math.floor(i/4)*185; b+=`<circle cx="${x}" cy="${y}" r="76" fill="${KSOFT[i%8]}" stroke="#2a2326" stroke-width="3" stroke-dasharray="8 8"/>`+kT(x,y+14,String(i+1),{s:40,a:'middle',c:'#c9bfb5'}); }
    b+=kE('trophy',440,1290-70,110);
    return kPage(th,'My English stars','Cole uma figurinha a cada aula ou atividade feita',b,{ic:'glowing-star',band:'#efe7fb'}); }),
};
const KIDS_THEMED=k=>!KIDS_SHEETS[k].opts;

/* ---------- folha pronta ---------- */
function kidsSheetSvg(kind,theme,o={}){ const S=KIDS_SHEETS[kind]; if (!S||typeof EMOJI==='undefined') return '';
  const key=S.opts? (S.opts[theme]? theme : Object.keys(S.opts)[0]) : (KIDS_THEMES[theme]? theme : 'pets');
  try { return S.f(key,rng(hashStr(kind+key)+(o.seed||0))); } catch(e){ console.error(kind,e); return ''; } }
const kidsTitle=(kind,theme)=>{ const S=KIDS_SHEETS[kind]; return S? `${S.n} · ${S.opts? S.opts[theme]||'' : KIDS_THEMES[theme]?.pt||''}` : 'Material'; };

/* ---------- ligar o material à aula (fica no histórico) ---------- */
function kidsLessonFor(sid){ const L=(DB.lessons||[]).filter(l=>l.studentId===sid&&l.status!=='cancelada');
  return L.filter(l=>isLive(l)||Math.abs(l.start-now())<2*HOUR)[0] || L.filter(l=>l.status==='agendada'&&l.start>now()).sort((a,b)=>a.start-b.start)[0] || L.filter(l=>l.start<=now()).sort((a,b)=>b.start-a.start)[0] || null; }
function kidsUse(sid,mat,quiet){ const l=kidsLessonFor(sid); if (!l){ if (!quiet) toast('Este aluno ainda não tem aula na agenda.'); return null; }
  l.mats ||= []; if (!l.mats.some(m=>m.k===mat.k&&m.t===mat.t)) l.mats.push({k:mat.k,t:mat.t,s:mat.s||0,title:kidsTitle(mat.k,mat.t)}); save();
  if (!quiet) toast(`Ligado à aula de ${fDay.format(l.start)} de ${user(sid).name.split(' ')[0]}`); return l; }
function matChips(l){ if (!l.mats?.length) return ''; return `<div class="tl-mats">${l.mats.map(m=>isT()? `<a class="tl-deck tl-mat" href="#kids-${m.k}-${m.t}-${m.s||0}">📄 ${esc(m.title)}</a>` : `<span class="tl-deck tl-mat">📄 ${esc(m.title)}</span>`).join('')}</div>`; }

/* ---------- telas (aba Kids da Biblioteca) ---------- */
const kidsStudents=()=>students().filter(s=>s.kids);
const kidsList=(age,cat)=>Object.entries(KIDS_SHEETS).filter(([,S])=>(!age||S.ages.includes(age))&&(!cat||S.c===cat));
function viewKids(){ if (!isT()) return '';
  const cat=S.kcat||'', age=S.kage||'', th=S.kth||'pets', K=kidsStudents(), list=kidsList(age,cat);
  return `${libHeader('kids')}<div class="kids">
    ${K.length? `<section class="kids-alunos"><div class="kids-al">${K.map(s=>`<a class="kids-a" href="#caderno-${s.id}" style="${sVars(s)}">${avatar(s,44)}<span><b>${esc(s.name.split(' ')[0])}${s.age? ` · ${s.age} anos` : ''}</b><small>Abrir o caderno digital</small></span></a>`).join('')}</div></section>`
      : `<div class="notice"><div>Para usar o caderno digital, cadastre uma criança em <b>Alunos → + Novo aluno</b> e marque <b>Aluno Kids</b>.</div></div>`}
    <div class="kids-f">
      <div class="chips" role="group" aria-label="Idade">${[['','Todas as idades'],...Object.entries(KIDS_AGES)].map(([k,l])=>`<button class="chip-b ${age===k?'on':''}" data-act="k-age" data-v="${k}">${l}</button>`).join('')}</div>
      <div class="chips" role="group" aria-label="Tipo">${[['','Todos os tipos'],...Object.entries(KIDS_CATS)].map(([k,l])=>`<button class="chip-b sm ${cat===k?'on':''}" data-act="k-cat" data-v="${k}">${l}</button>`).join('')}</div>
      <div class="kids-ths" role="group" aria-label="Tema">${Object.entries(KIDS_THEMES).map(([k,t])=>`<button class="kids-thb ${th===k?'on':''}" data-act="k-th" data-v="${k}"><span>${kEsvg(t.ic)}</span>${esc(t.pt)}</button>`).join('')}</div></div>
    ${age? `<p class="meta">${KIDS_AGES[age]}: ${KIDS_AGES_D[age]}.</p>` : ''}
    <p class="meta muted">${list.length} tipos de material · as ilustrações são do Fluent Emoji (Microsoft, licença livre MIT).</p>
    <div class="kids-grid">${list.map(([k,S0])=>{ const t=S0.opts? Object.keys(S0.opts)[0] : th; return `<a class="kids-card" href="#kids-${k}-${t}-0"><span class="kids-th-img">${kidsSheetSvg(k,t)}</span><b>${esc(S0.n)}</b><small>${S0.ages.map(a=>KIDS_AGES[a].replace(' anos','')).join(' · ')} anos · ${esc(S0.d)}</small></a>`; }).join('')}</div></div>`; }
function viewKidsSheet(kind,theme,seed){ const S0=KIDS_SHEETS[kind]; if (!S0) return `${libHeader('kids')}<div class="panel"><p>Material não encontrado.</p></div>`;
  const opts=S0.opts||Object.fromEntries(Object.entries(KIDS_THEMES).map(([k,t])=>[k,t.pt])), K=kidsStudents(), sid=S.kstu&&user(S.kstu)? S.kstu : K[0]?.id||'';
  const song=kind==='musica'? KIDS_SONGS[theme]||KIDS_SONGS.head : null;
  return `<div class="kp">
    <div class="kp-tools no-print"><a class="link" href="#kids">← Kids</a><b class="grow">${esc(S0.n)} <small class="muted">${S0.ages.map(a=>KIDS_AGES[a]).join(' · ')}</small></b>
      <select data-kopt="1" aria-label="${S0.opts? 'Versão' : 'Tema'}">${Object.entries(opts).map(([k,l])=>`<option value="${k}" ${k===theme?'selected':''}>${esc(l)}</option>`).join('')}</select>
      <button class="btn small" data-act="k-seed" title="Outras figuras e outra ordem">Outra versão</button>
      <button class="btn small primary" data-act="print-go">Imprimir</button></div>
    <div class="kp-tools no-print kp-use">${K.length? `<label>Para <select data-kstu="1">${K.map(s=>`<option value="${s.id}" ${s.id===sid?'selected':''}>${esc(s.name)}</option>`).join('')}</select></label>
      <button class="btn small" data-act="k-use" data-k="${kind}" data-t="${theme}" data-s="${seed}">Ligar à aula</button><button class="btn small" data-act="k-cad" data-k="${kind}" data-t="${theme}" data-s="${seed}">Colar no caderno</button>` : '<span class="meta muted">Cadastre um aluno Kids para ligar o material às aulas e colar no caderno digital.</span>'}
      ${song? `<a class="btn small ghost" href="https://www.youtube.com/results?search_query=${encodeURIComponent(song.busca)}" target="_blank" rel="noopener">Ouvir no YouTube ↗</a>` : ''}</div>
    <div class="kp-page">${kidsSheetSvg(kind,theme,{seed:+seed||0})}</div></div>`; }
/* escolher atividade dentro do caderno: já filtra pela idade da criança */
function kidsPickerHtml(){ const s=user(CD.sid), age=S.kpage!==undefined? S.kpage : kidsAgeOf(s), th=S.kth||'pets', list=kidsList(age,'').filter(([k])=>!['bingo','memoria','domino','tabuleiro','separar','flash','minilivro','cartao','mascara','quebra','certificado','estrelas'].includes(k));
  return `<div class="cd-bgs"><b>Idade</b>${[['','Todas'],...Object.entries(KIDS_AGES)].map(([k,l])=>`<button class="${age===k?'on':''}" data-cd="kage" data-v="${k}">${l}</button>`).join('')}</div>
    <div class="cd-bgs"><b>Tema</b>${Object.entries(KIDS_THEMES).map(([k,t])=>`<button class="${th===k?'on':''}" data-cd="kth" data-v="${k}">${esc(t.pt)}</button>`).join('')}</div>
    <div class="cd-grid cd-agrid">${list.map(([k,S0])=>{ const t=S0.opts? Object.keys(S0.opts)[0] : th; return `<button class="cd-gi cd-ai" data-cd="addact" data-k="${k}" data-t="${t}"><span>${kidsSheetSvg(k,t)}</span><small>${esc(S0.n)}</small></button>`; }).join('')}</div>
    <div class="cd-bgs"><b>Alfabeto: traçar a letra</b>${Object.keys(KIDS_ABCW).map(l=>`<button data-cd="addact" data-k="letra" data-t="${l}">${l.toUpperCase()} ${l}</button>`).join('')}</div>`; }
const KIDS_ACT={
  'k-cat'(el){ S.kcat=el.dataset.v; render(); }, 'k-age'(el){ S.kage=el.dataset.v; render(); }, 'k-th'(el){ S.kth=el.dataset.v; render(); },
  'k-seed'(){ const r=S.route; location.hash=`kids-${r.kind}-${r.theme}-${(+r.seed||0)+1}`; },
  'k-use'(el){ const sid=$('[data-kstu]')?.value; if (sid) kidsUse(sid,{k:el.dataset.k,t:el.dataset.t,s:+el.dataset.s}); },
  'k-cad'(el){ const sid=$('[data-kstu]')?.value; if (!sid) return; const c=cadOf(sid), p=cadNewPage(sid,'branca');
    p.items.push({id:'i'+uid(),t:'act',kind:el.dataset.k,theme:el.dataset.t,seed:+el.dataset.s||0,x:0,y:0,w:CAD_W,h:CAD_H,r:0}); c.pages.push(p.id);
    kidsUse(sid,{k:el.dataset.k,t:el.dataset.t,s:+el.dataset.s},true); save(); toast('Colado numa página nova do caderno'); location.hash='caderno-'+sid; setTimeout(()=>{ if (CD.sid===sid) cadGo(cadPages(sid).length-1); },60); },
};
document.addEventListener('change',e=>{ const el=e.target;
  if (el.dataset?.kopt){ const r=S.route; location.hash=`kids-${r.kind}-${el.value}-${r.seed||0}`; }
  if (el.dataset?.kstu){ S.kstu=el.value; } });
