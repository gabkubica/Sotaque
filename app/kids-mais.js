/* =========================================================
   Sotaque · Kids: atividades mais completas (perguntas, leitura, cena, escuta)
   e o áudio das atividades (voz neural: app/audio/k/<id>.mp3, índice em app/audio/kids-idx.json).
   O alto-falante 🔈 nas folhas toca a palavra ou a frase: na tela da Biblioteca,
   no caderno digital (a criança toca e ouve) e some na impressão.
   ========================================================= */
/* ---------- áudio ---------- */
/* cada fala é um mp3 pequeno (audio/k/<id>.mp3), baixado só quando a criança toca; o índice (texto → id) é leve */
let KAUD=null, KAUDP=null, KAUDEL=null;
const KAUD_BASE=(()=>{ try { return new URL('audio/',document.currentScript.src).href; } catch { return 'audio/'; } })();
/* o índice vai com o ?v= da publicação: depois de cada atualização o aparelho busca o índice novo
   (antes, a cópia guardada ficava velha e as falas novas caíam na voz do aparelho, às vezes em português) */
const KAUD_Q=(()=>{ try { return new URL(document.currentScript.src).search; } catch { return ''; } })();
/* sem o mp3, quem lê é o aparelho: escolhe uma voz em inglês de verdade (só u.lang não basta no iPad e em
   vários Androids, que leem com a voz padrão em português) */
function kidsVoice(){ if (typeof speechSynthesis==='undefined') return null; const best=['en-US','en-GB','en-AU','en-CA'];
  const vs=speechSynthesis.getVoices().filter(v=>/^en([-_]|$)/i.test(v.lang)); if (!vs.length) return null;
  const rank=v=>{ const i=best.indexOf(v.lang.replace('_','-')); return (i<0? 9 : i)+(v.localService? 0 : .5); };
  return vs.sort((a,b)=>rank(a)-rank(b))[0]; }
function kidsAudioLoad(){ if (typeof speechSynthesis!=='undefined') speechSynthesis.getVoices();
  if (KAUD) return Promise.resolve(KAUD); return KAUDP ||= fetch(KAUD_BASE+'kids-idx.json'+KAUD_Q).then(r=>r.ok? r.json() : {}).then(j=>KAUD=j).catch(()=>{ KAUDP=null; return {}; }); }
function kidsSay(text){ const parts=String(text).split('|').map(x=>x.trim()).filter(Boolean); if (!parts.length) return;
  const go=A=>{ if (typeof ttsStop==='function') ttsStop(); KAUDEL ||= new Audio(); let i=0;
    const next=()=>{ if (i>=parts.length) return; const p=parts[i++], id=A[p.toLowerCase()];
      if (id){ KAUDEL.src=KAUD_BASE+'k/'+id+'.mp3'; KAUDEL.onended=()=>setTimeout(next,90); KAUDEL.play().catch(()=>{}); }
      else if (typeof speechSynthesis!=='undefined'){ const u=new SpeechSynthesisUtterance(p), v=kidsVoice(); u.lang=v? v.lang : 'en-US'; if (v) u.voice=v; u.rate=.85; u.onend=()=>setTimeout(next,60); speechSynthesis.speak(u); } };
    next(); };
  if (KAUD) go(KAUD); else kidsAudioLoad().then(go); }   /* com o índice já carregado, toca no mesmo toque (o iPad exige) */
kidsAudioLoad();
document.addEventListener('click',e=>{ const sp=e.target.closest?.('.kp-page [data-say], .kids-card [data-say]'); if (sp){ e.preventDefault(); kidsSay(sp.getAttribute('data-say')); } });
/* alto-falante desenhado na folha (não sai na impressão) */
const kSpk=(x,y,say,s=46)=>`<g class="k-spk" data-say="${esc(say)}" style="cursor:pointer"><circle cx="${x}" cy="${y}" r="${s/2}" fill="#7a1f35"/><path d="M${x-s*.2} ${y-s*.1}h${s*.12}l${s*.16} ${-s*.14}v${s*.48}l${-s*.16} ${-s*.14}h${-s*.12}z" fill="#fff"/><path d="M${x+s*.16} ${y-s*.14}q${s*.12} ${s*.14} 0 ${s*.28}" stroke="#fff" stroke-width="${s*.06}" fill="none" stroke-linecap="round"/></g>`;

/* ---------- dados ---------- */
const KIDS_FACTS={
  lion:{e:'lion',lives:'in Africa',eats:'meat',can:['run','swim'],cant:['fly','climb trees'],has:'a big mane',color:'yellow'},
  elephant:{e:'elephant',lives:'in Africa and Asia',eats:'grass and fruit',can:['swim','walk a lot'],cant:['jump','fly'],has:'a long trunk',color:'grey'},
  giraffe:{e:'giraffe',lives:'in Africa',eats:'leaves',can:['run','see very far'],cant:['swim','fly'],has:'a very long neck',color:'yellow and brown'},
  monkey:{e:'monkey',lives:'in the forest',eats:'bananas and leaves',can:['climb trees','jump'],cant:['fly'],has:'a long tail',color:'brown'},
  penguin:{e:'penguin',lives:'in cold places',eats:'fish',can:['swim','walk'],cant:['fly'],has:'black and white feathers',color:'black and white'},
  dolphin:{e:'dolphin',lives:'in the sea',eats:'fish',can:['swim','jump'],cant:['walk','fly'],has:'a smooth skin',color:'grey'},
  frog:{e:'frog',lives:'near rivers and lakes',eats:'insects',can:['jump','swim'],cant:['fly','run'],has:'long back legs',color:'green'},
  bee:{e:'honeybee',lives:'in a hive',eats:'nectar from flowers',can:['fly','make honey'],cant:['swim'],has:'six legs and wings',color:'yellow and black'},
  owl:{e:'owl',lives:'in trees',eats:'mice',can:['fly','see at night'],cant:['swim'],has:'big round eyes',color:'brown'},
  kangaroo:{e:'kangaroo',lives:'in Australia',eats:'grass',can:['jump','run'],cant:['fly','climb trees'],has:'a pouch for its baby',color:'brown'},
  panda:{e:'panda',lives:'in China',eats:'bamboo',can:['climb trees','swim'],cant:['fly'],has:'black and white fur',color:'black and white'},
  crocodile:{e:'crocodile',lives:'in rivers',eats:'fish and meat',can:['swim','run'],cant:['fly','climb trees'],has:'very sharp teeth',color:'green'},
  butterfly:{e:'butterfly',lives:'in gardens',eats:'nectar from flowers',can:['fly'],cant:['swim','run'],has:'colourful wings',color:'many colours'},
  whale:{e:'spouting-whale',lives:'in the ocean',eats:'small fish',can:['swim','sing'],cant:['walk','fly'],has:'a very big body',color:'blue and grey'},
  rabbit:{e:'rabbit',lives:'in fields and gardens',eats:'carrots and grass',can:['jump','run'],cant:['fly','swim'],has:'long ears',color:'white or brown'},
  snake:{e:'snake',lives:'in many places',eats:'mice and eggs',can:['swim','climb trees'],cant:['walk','fly','jump'],has:'no legs',color:'green'},
};
const KIDS_RIDDLES=[['sun','sun','I am big, hot and yellow. I am in the sky in the day.'],['moon','crescent-moon','I am in the sky at night. Sometimes I am round.'],['apple','red-apple','I am a red or green fruit. I grow on a tree.'],['banana','banana','I am a long yellow fruit. Monkeys love me!'],['ice cream','soft-ice-cream','I am cold and sweet. You eat me in summer.'],['umbrella','umbrella','You open me when it rains.'],['ball','soccer-ball','I am round. You kick me and play with me.'],['bed','bed','You sleep in me every night.'],['pencil','pencil','You write and draw with me.'],['bus','bus','I am big and yellow. I take children to school.'],['fish','tropical-fish','I live in water. I can swim but I can’t walk.'],['cat','cat','I am a pet. I say “meow”. I like milk.'],['dog','dog','I am a pet. I say “woof”. I like bones.'],['cow','cow','I live on a farm. I give milk. I say “moo”.'],['rainbow','rainbow','I have seven colours. You see me after the rain.'],['snowman','snowflake','I am cold and white. I fall from the sky in winter.'],['clock','alarm-clock','I tell you the time.'],['rocket','rocket','I fly to the moon and the stars.']];
const KIDS_SEQ=[
  {t:'The little plant',s:[['seedling','I put a seed in the soil.'],['droplet','I give it water.'],['sun','The sun is hot.'],['sunflower','Now I have a big flower!']]},
  {t:'From egg to chicken',s:[['egg','There is an egg.'],['hatching-chick','The egg breaks. A chick comes out!'],['baby-chick','The chick is small and yellow.'],['chicken','Now it is a big chicken.']]},
  {t:'A rainy day',s:[['sun','It is sunny. I go to the park.'],['cloud','Oh no! Big clouds!'],['cloud-with-rain','It is raining.'],['umbrella','I open my umbrella.']]},
  {t:'My birthday party',s:[['wrapped-gift','I get a present.'],['birthday-cake','There is a big cake.'],['candle','I blow the candles.'],['party-popper','We dance and sing!']]},
  {t:'Making a sandwich',s:[['bread','First, I take some bread.'],['cheese-wedge','Then I put cheese on it.'],['tomato','Next, I add a tomato.'],['sandwich','Finally, I eat my sandwich!']]},
  {t:'Going to school',s:[['alarm-clock','I wake up at seven.'],['bread','I eat my breakfast.'],['backpack','I take my backpack.'],['bus','I go to school by bus.']]},
];
const KIDS_DAY=[['wake up','alarm-clock'],['have breakfast','bread'],['go to school','backpack'],['have lunch','spaghetti'],['play','soccer-ball'],['do my homework','pencil'],['have a bath','bathtub'],['go to bed','bed']];
const KIDS_PEOPLE=['girl-medium','boy-medium-dark','woman-medium-light','man-medium','baby-medium-light','old-woman-medium','old-man-light'];
const kClock=(cx,cy,r,h,m,o={})=>{ const ha=((h%12)+m/60)*30-90, ma=m*6-90, rad=a=>a*Math.PI/180;
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" stroke="#2a2326" stroke-width="5"/>${[...Array(12)].map((_,i)=>`<text x="${cx+r*.78*Math.cos(rad(i*30-60))}" y="${cy+r*.78*Math.sin(rad(i*30-60))+r*.09}" font-family="${KFS}" font-size="${r*.22}" text-anchor="middle" fill="#2a2326">${i+1}</text>`).join('')}
    ${o.blank? '' : `<line x1="${cx}" y1="${cy}" x2="${cx+r*.48*Math.cos(rad(ha))}" y2="${cy+r*.48*Math.sin(rad(ha))}" stroke="#2a2326" stroke-width="${r*.08}" stroke-linecap="round"/><line x1="${cx}" y1="${cy}" x2="${cx+r*.7*Math.cos(rad(ma))}" y2="${cy+r*.7*Math.sin(rad(ma))}" stroke="#b03a5b" stroke-width="${r*.05}" stroke-linecap="round"/>`}<circle cx="${cx}" cy="${cy}" r="${r*.06}" fill="#2a2326"/>`; };
const kTimeW=(h,m)=>m===0? `${NUMW[h]||h} o’clock` : m===30? `half past ${NUMW[h]||h}` : m===15? `quarter past ${NUMW[h]||h}` : `quarter to ${NUMW[(h%12)+1]||h+1}`;
const kAns=(x,y,w)=>`<line x1="${x}" y1="${y}" x2="${x+w}" y2="${y}" stroke="#a99fa3" stroke-width="2"/>`;
const kQ=(x,y,n,txt,o={})=>`${`<circle cx="${x+16}" cy="${y-12}" r="17" fill="#7a1f35"/>`}${kT(x+16,y-5,String(n),{s:20,a:'middle',c:'#fff',f:KFS})}${kT(x+44,y,txt,{s:o.s||30,b:o.b??true})}`;
/* cena: um cômodo com móveis e coisas em lugares conhecidos (para perguntas de “onde” e “quantos”) */
function kScene(R,ox,oy,w,h,o={}){ const things=kShuf(['cat','dog','soccer-ball','teddy-bear','closed-book','red-apple','mouse','balloon'],R).slice(0,4);
  const fur=[{e:'bed',x:.05,y:.42,s:.36,n:'bed',top:.46,floor:.86},{e:'chair',x:.72,y:.46,s:.22,n:'chair',top:.5,floor:.94},{e:'couch-and-lamp',x:.4,y:.5,s:.27,n:'sofa',top:.52,floor:.9}];
  const rel=['on','under','next to','on'], placed=[]; let g=`<rect x="${ox}" y="${oy}" width="${w}" height="${h}" rx="26" fill="#fff6e8"/><rect x="${ox}" y="${oy+h*.78}" width="${w}" height="${h*.22}" fill="#ecd9bd"/>${kE('window',ox+w*.08,oy+h*.06,w*.18)}${kE('alarm-clock',ox+w*.78,oy+h*.08,w*.1)}`;
  fur.forEach(f=>{ g+=kE(f.e,ox+w*f.x,oy+h*f.y,w*f.s); });
  things.forEach((t,i)=>{ const f=fur[i%fur.length], r=o.diff&&o.diff.includes(i)? rel[(i+1)%4] : rel[i], fs=w*f.s, s=w*.11; let x=ox+w*f.x+fs*.3, y=oy+h*f.y;
    const top=oy+h*f.y+fs*f.top, floor=oy+h*f.y+fs*f.floor;
    if (r==='on'){ y=top-s*.92; x=ox+w*f.x+fs*(i===3? .55 : .18); } if (r==='under'){ y=floor-s*.62; x=ox+w*f.x+fs*.36; } if (r==='next to'){ x=ox+w*f.x+fs+2; y=floor-s; }
    placed.push({t,f:f.n,r}); g+=kE(t,x,y,s); });
  const many=kW('pets',1,R)[0], k=2+Math.floor(R.r()*3); for (let i=0;i<k;i++) g+=kE('tulip',ox+w*(.32+i*.06),oy+h*.1,w*.055);
  return {g,placed,flowers:k}; }
const kName=t=>({'soccer-ball':'ball','teddy-bear':'teddy bear','closed-book':'book','red-apple':'apple'}[t]||t);

Object.assign(KIDS_SHEETS,{
  /* ---- escuta (áudio) ---- */
  ouvircircule:S0('Ouça e circule','voc',['a3','a5','a7'],'Toque no 🔈 (ou a professora fala) e circule a figura certa.',(th,R)=>{ const all=KIDS_THEMES[th].w; let b='', key=[];
    for (let i=0;i<6;i++){ const y=280+i*178, ops=kShuf(all,R).slice(0,3), ans=ops[Math.floor(R.r()*3)]; key.push(ans[0]);
      b+=kBox(60,y,880,158,i,{r:26})+kSpk(120,y+79,ans[0],62)+kT(120,y+150,String(i+1),{s:20,a:'middle',c:'#8a7e80',f:KFS})+ops.map(([w,n],k)=>`<rect x="${215+k*240}" y="${y+12}" width="220" height="134" rx="18" fill="#fff"/>`+kE(n,250+k*240,y+18,120)+kT(325+k*240,y+142,'',{s:2})).join(''); }
    b+=kT(60,1370,'Professora: '+key.map((w,i)=>`${i+1}. ${w}`).join('   '),{s:17,b:false,c:'#8a7e80',f:KFS});
    return kPage(th,'Listen and circle','Ouça a palavra e circule a figura certa',b,{ic:'ear'}); }),
  ouvircolorir:S0('Ouça e pinte','voc',['a5','a7'],'“Colour the cat red”: ouvir a frase e pintar com a cor certa.',(th,R)=>{ const W=kW(th,4,R), C=kShuf(Object.keys(KCOL),R); let b='', key=[];
    W.forEach(([w,n],i)=>{ const x=60+(i%2)*450, y=280+Math.floor(i/2)*540; key.push(`${w} ${C[i]}`); b+=kBox(x+10,y,420,500,i,{fill:'#fff',stroke:'#efe6dc'})+kE(n,x+70,y+40,300,'line')+kSpk(x+220,y+440,`colour the|${w}|${C[i]}`,64)+kT(x+40,y+50,String(i+1),{s:30,c:'#8a7e80'}); });
    b+=kT(60,1370,'Professora: '+key.map((w,i)=>`${i+1}. Colour the ${w}.`).join('  '),{s:16,b:false,c:'#8a7e80',f:KFS});
    return kPage(th,'Listen and colour','Ouça (toque no 🔈) e pinte com a cor que você ouvir',b,{ic:'ear'}); }),
  ouvirnumero:S0('Ouça e numere','voc',['a5','a7'],'Escreva o número na figura na ordem em que ouvir.',(th,R)=>{ const W=kW(th,6,R), order=kShuf(W,R); let b='';
    b+=`<rect x="60" y="270" width="880" height="110" rx="24" fill="#fff3d6"/>`+order.map(([w],i)=>kSpk(130+i*140,325,`number|${NUMW[i+1]}|${w}`,58)+kT(130+i*140,368,String(i+1),{s:20,a:'middle',c:'#6a5e61',f:KFS})).join('');
    W.forEach(([w,n],i)=>{ const x=60+(i%3)*300, y=420+Math.floor(i/3)*450; b+=kBox(x+10,y,280,410,i,{r:26})+kE(n,x+50,y+40,200)+`<rect x="${x+105}" y="${y+290}" width="90" height="90" rx="18" fill="#fff" stroke="#2a2326" stroke-width="3"/>`; });
    b+=kT(60,1370,'Professora: '+order.map(([w],i)=>`${i+1}. ${w}`).join('   '),{s:17,b:false,c:'#8a7e80',f:KFS});
    return kPage(th,'Listen and number','Toque nos 🔈 em ordem (1, 2, 3…) e escreva o número embaixo da figura',b,{ic:'ear'}); }),
  /* ---- perguntas ---- */
  perguntas:S0('Look and answer: Is it…?','ler',['a5','a7'],'Perguntas de sim ou não com resposta completa (Yes, it is / No, it isn’t).',(th,R)=>{ const all=KIDS_THEMES[th].w, W=kW(th,6,R); let b='';
    W.forEach(([w,n],i)=>{ const y=280+i*178, yes=R.r()<.5, q=yes? w : kShuf(all.filter(z=>z[0]!==w),R)[0][0];
      b+=kBox(60,y,880,158,i,{r:26})+kE(n,85,y+14,130)+kT(250,y+62,`${kPl(q)? 'Are they' : 'Is it'} ${kPl(q)? '' : article(q)+' '}${q}?`.replace('  ',' '),{s:38})+kSpk(880,y+50,`${kPl(q)? 'are they' : 'is it'}|${q}`,48)
        +`<rect x="250" y="${y+88}" width="150" height="46" rx="12" fill="#e6f6e8"/>${kT(325,y+120,'Yes, '+(kPl(q)? 'they are.' : 'it is.'),{s:20,a:'middle',f:KFS,c:'#1f8a4c'})}<rect x="420" y="${y+88}" width="170" height="46" rx="12" fill="#fde7ea"/>${kT(505,y+120,'No, '+(kPl(q)? 'they aren’t.' : 'it isn’t.'),{s:20,a:'middle',f:KFS,c:'#b03a5b'})}${kAns(610,y+125,300)}`; });
    return kPage(th,'Look and answer','Olhe, circule Yes ou No e escreva a resposta. Se for No, escreva o nome certo!',b); }),
  cena:S0('Olhe a cena e responda','ler',['a7','a9'],'Uma sala com coisas espalhadas: where, how many, what.',(th,R)=>{ const S=kScene(R,60,270,880,560); let b=S.g;
    const Q=[...S.placed.slice(0,3).map(p=>[`Where is the ${kName(p.t)}?`,`It’s ${p.r} the ${p.f}.`]),[`How many flowers are there?`,`There are ${NUMW[S.flowers]} flowers.`],[`Is there a window in the room?`,`Yes, there is.`],[`What’s on the ${S.placed[3].f}?`,`There’s a ${kName(S.placed[3].t)}.`]];
    Q.forEach(([q],i)=>{ const y=900+i*76; b+=kQ(60,y,i+1,q,{s:28})+kAns(560,y+2,380); });
    b+=kT(60,1372,'Respostas: '+Q.map(([,a],i)=>`${i+1}. ${a}`).join(' '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','Look and answer','Olhe a sala e responda com frases (on, under, next to · There are…)',b,{ic:'couch-and-lamp'}); }),
  diferencas:S0('Jogo dos 4 erros','jogo',['a5','a7','a9'],'Duas salas quase iguais: encontre e diga as diferenças.',(th,R)=>{ const seed=Math.floor(R.r()*9999), A=kScene(rng(seed),80,280,840,500), B=kScene(rng(seed),80,820,840,500,{diff:[0,1,2,3]});
    return kPage('','Spot the difference','Encontre as 4 diferenças e diga em inglês: “The cat is on the bed.”',`${A.g}${B.g}<line x1="80" y1="800" x2="920" y2="800" stroke="#e3d9cc" stroke-width="3" stroke-dasharray="10 8"/>${[0,1,2,3].map(i=>`<circle cx="${880-i*56}" cy="1350" r="22" fill="#fff" stroke="#f0a020" stroke-width="4"/>`).join('')}`,{ic:'magnifying-glass-tilted-left'}); }),
  fatos:S0('Ficha do animal (leitura)','ler',['a7','a9'],'Texto sobre um animal + perguntas (lives, eats, can, can’t).',(op,R)=>{ const F=KIDS_FACTS[op]||KIDS_FACTS.lion, w=op, We=w[0].toUpperCase()+w.slice(1);
    const txt=[`This is the ${w}.`,`It lives ${F.lives}.`,`It eats ${F.eats}.`,`The ${w} has got ${F.has}.`,`It can ${F.can.join(' and it can ')}.`,`But it can’t ${F.cant[0]}!`];
    let b=kBox(60,270,880,470,2,{r:30})+kE(F.e,640,300,280)+txt.map((t,i)=>kT(100,340+i*62,t,{s:36,b:i===0}))+kSpk(880,300,txt.join('|'),50);
    const Q=[[`Where does the ${w} live?`,`It lives ${F.lives}.`],[`What does it eat?`,`It eats ${F.eats}.`],[`Can it ${F.can[0]}?`,'Yes, it can.'],[`Can it ${F.cant[0]}?`,'No, it can’t.'],[`What has it got?`,`It has got ${F.has}.`]];
    Q.forEach(([q],i)=>{ const y=810+i*92; b+=kQ(60,y,i+1,q,{s:30})+kAns(100,y+48,840); });
    b+=kT(60,1372,'Respostas: '+Q.map(([,a],i)=>`${i+1}. ${a}`).join(' '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('',`Fact file: the ${w}`,'Leia (ou ouça no 🔈) e responda com frases completas',b,{ic:F.e,band:'#e6f6e8'}); },Object.fromEntries(Object.keys(KIDS_FACTS).map(k=>[k,k[0].toUpperCase()+k.slice(1)]))),
  adivinha:S0('Charadas: What am I?','ler',['a7','a9'],'Leia as pistas e ligue à figura certa.',(th,R)=>{ const L=kShuf(KIDS_RIDDLES,R).slice(0,5), P=kShuf(L,R); let b='';
    L.forEach(([w,n,c],i)=>{ const y=280+i*215; b+=kBox(60,y,600,190,i,{r:26})+`<foreignObject x="85" y="${y+18}" width="490" height="130"><div xmlns="http://www.w3.org/1999/xhtml" style="font:700 25px/1.3 Andika,Figtree,sans-serif;color:#2a2326">${esc(c)}</div></foreignObject>`+kT(85,y+170,'What am I?',{s:22,c:'#b03a5b'})+kAns(240,y+172,360)+kSpk(625,y+150,c+'|What am I?',44)+`<circle cx="680" cy="${y+95}" r="11" fill="#2a2326"/>`; });
    P.forEach(([w,n],i)=>{ const y=280+i*215; b+=`<circle cx="745" cy="${y+95}" r="11" fill="#2a2326"/>`+kBox(775,y+5,170,170,i+2,{r:24})+kE(n,800,y+30,120); });
    return kPage('','What am I?','Leia as pistas, ligue à figura e escreva a resposta',b,{ic:'thinking-face',band:'#efe7fb'}); }),
  canpode:S0('Can or can’t?','esc',['a7','a9'],'Tabela de habilidades dos animais + frases.',(th,R)=>{ const A=kShuf(Object.entries(KIDS_FACTS),R).slice(0,5), V=['fly','swim','jump','climb trees','run']; let b=`<rect x="60" y="270" width="880" height="${110+A.length*140}" rx="24" fill="#fff" stroke="#2a2326" stroke-width="3"/>`;
    V.forEach((v,j)=>{ b+=kT(415+j*110,330,v,{s:v.length>6? 17 : 23,a:'middle'}); });
    A.forEach(([w,F],i)=>{ const y=380+i*140; b+=`<line x1="60" y1="${y}" x2="940" y2="${y}" stroke="#e3d9cc" stroke-width="2"/>`+kE(F.e,80,y+20,100)+kT(190,y+82,w,{s:w.length>8? 20 : 25})+V.map((v,j)=>`<rect x="${383+j*110}" y="${y+35}" width="66" height="66" rx="14" fill="${KSOFT[(i+j)%8]}"/>`).join(''); });
    const y0=420+A.length*140; b+=kT(60,y0,'Write:',{s:30,c:'#b03a5b'})+[0,1,2].map(i=>kT(60,y0+70+i*80,`${i+1}. A ${A[i][0]} can ________ but it can’t ________.`,{s:26,b:false})).join('');
    b+=kT(60,1372,'Respostas: '+A.map(([w,F])=>`${w}: ✓ ${V.filter(v=>F.can.includes(v)).join(', ')||'-'}`).join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','Can or can’t?','Marque ✓ (can) ou ✗ (can’t) e escreva frases',b,{ic:'frog'}); }),
  rotina:S0('Minha rotina (horas)','esc',['a7','a9'],'Relógios + atividades do dia: “I get up at seven o’clock.”',(th,R)=>{ const D=KIDS_DAY.slice(0,6), T=[[7,0],[7,30],[8,0],[12,0],[4,0],[5,30]]; let b='';
    D.forEach(([a,n],i)=>{ const x=60+(i%2)*450, y=275+Math.floor(i/2)*360; const [h,m]=T[i]; b+=kBox(x+10,y,420,330,i,{r:26})+kClock(x+105,y+110,80,h,m)+kE(n,x+250,y+40,140)+kT(x+30,y+240,`I ${a} at`,{s:28})+kAns(x+30,y+295,380)+kSpk(x+395,y+35,`I ${a} at|${kTimeW(h,m)}`,42); });
    b+=kT(60,1372,'Respostas: '+D.map(([a],i)=>`${a}: ${kTimeW(...T[i])}`).join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','My day','Olhe o relógio e complete: I wake up at seven o’clock.',b,{ic:'alarm-clock'}); }),
  compras:S0('Vamos às compras','ler',['a7','a9'],'Preços, perguntas e continhas: “How much is the apple?”',(th,R)=>{ const W=kShuf(KIDS_THEMES.fruit.w.concat(KIDS_THEMES.food.w),R).slice(0,6).map(x=>[...x,1+Math.floor(R.r()*9)]); let b='';
    W.forEach(([w,n,p],i)=>{ const x=60+(i%3)*300, y=275+Math.floor(i/3)*260; b+=kBox(x+10,y,280,230,i,{r:26})+kE(n,x+80,y+20,140)+`<g transform="rotate(-8 ${x+235} ${y+185})"><rect x="${x+180}" y="${y+160}" width="100" height="54" rx="12" fill="#fff" stroke="#2a2326" stroke-width="3"/>${kT(x+230,y+198,'$'+p,{s:30,a:'middle'})}</g>`; });
    const [a,c]=W, Q=[[`How much is the ${a[0]}?`,`It’s ${p2(a[2])}.`],[`How much is the ${c[0]}?`,`It’s ${p2(c[2])}.`],[`The ${a[0]} and the ${c[0]} cost…`,`$${a[2]+c[2]}`],[`What is the most expensive thing?`,`The ${W.slice().sort((x,y)=>y[2]-x[2])[0][0]}.`],[`You have $10. What can you buy?`,'(free answer)']];
    function p2(n){ return `${NUMW[n]||n} dollar${n>1? 's' : ''}`; }
    Q.forEach(([q],i)=>{ const y=850+i*94; b+=kQ(60,y,i+1,q,{s:28})+kAns(100,y+50,840); });
    b+=kT(60,1372,'Respostas: '+Q.map(([,x],i)=>`${i+1}. ${x}`).join(' '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','At the shop','Olhe os preços e responda: It’s three dollars.',b,{ic:'shopping-cart'}); }),
  tempo:S0('O tempo da semana','ler',['a7','a9'],'Quadro da semana + perguntas: “What’s the weather like on Monday?”',(th,R)=>{ const Wt=[['sunny','sun'],['rainy','cloud-with-rain'],['cloudy','cloud'],['snowy','snowflake'],['windy','wind-face'],['stormy','cloud-with-lightning-and-rain']], days=['Monday','Tuesday','Wednesday','Thursday','Friday'], P=days.map(()=>Wt[Math.floor(R.r()*Wt.length)]); let b='';
    days.forEach((d,i)=>{ const x=60+i*178; b+=kBox(x,275,165,250,i,{r:22})+kT(x+82,320,d.slice(0,3),{s:30,a:'middle'})+kE(P[i][1],x+25,345,115)+kT(x+82,500,'',{s:2}); });
    const Q=[[`What’s the weather like on Monday?`,`It’s ${P[0][0]}.`],[`What’s the weather like on Thursday?`,`It’s ${P[3][0]}.`],[`Is it ${P[1][0]} on Tuesday?`,'Yes, it is.'],[`Is it ${Wt.find(w=>w!==P[4])[0]} on Friday?`,'No, it isn’t.'],[`What’s the weather like today?`,'(free answer)']];
    Q.forEach(([q],i)=>{ const y=600+i*120; b+=kQ(60,y,i+1,q,{s:30})+kSpk(905,y-12,q.replace('?',''),44)+kAns(100,y+56,840); });
    b+=kT(60,1372,'Respostas: '+Q.map(([,x],i)=>`${i+1}. ${x}`).join(' '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','Weather report','Olhe a semana e responda: It’s sunny. / It’s rainy.',b,{ic:'sun-behind-cloud'}); }),
  monstro:S0('Leia e desenhe o monstro','arte',['a7','a9'],'Ler a descrição (have got) e desenhar; depois inventar o seu.',(th,R)=>{ const n=k=>NUMW[k], E=2+Math.floor(R.r()*4), A=2+Math.floor(R.r()*5), L=2+Math.floor(R.r()*4), C=kShuf(Object.keys(KCOL),R);
    const txt=[`My monster is ${C[0]}.`,`It has got ${n(E)} eyes and a big mouth.`,`It has got ${n(A)} arms and ${n(L)} legs.`,`It has got ${C[1]} hair and a long tail.`,`It is very funny!`];
    let b=kBox(60,270,880,330,1,{r:30})+txt.map((t,i)=>kT(100,330+i*58,t,{s:34}))+kSpk(880,300,txt.join('|'),50)+kE('alien-monster',790,450,130);
    b+=kBox(60,630,880,450,0,{fill:'#fffdf8',stroke:'#2a2326',r:30})+kT(90,1140,'Now draw YOUR monster and write: My monster has got…',{s:26});
    b+=kRule(90,920,1230,64)+kRule(90,920,1320,64);
    return kPage('','Draw the monster!','Leia e desenhe o monstro. Depois invente o seu!',b,{ic:'alien-monster'}); }),
  sequencia:S0('História em sequência','esc',['a5','a7','a9'],'4 cenas fora de ordem: numere e escreva a história.',(op,R)=>{ const Sq=KIDS_SEQ[+op]||KIDS_SEQ[0], P=kShuf(Sq.s.map((s,i)=>[...s,i]),R); let b='';
    P.forEach(([n,t,i],k)=>{ const x=60+(k%2)*450, y=275+Math.floor(k/2)*300; b+=kBox(x+10,y,420,270,k,{r:26})+kE(n,x+140,y+30,160)+`<rect x="${x+30}" y="${y+20}" width="70" height="70" rx="16" fill="#fff" stroke="#2a2326" stroke-width="3"/>`+`<foreignObject x="${x+30}" y="${y+195}" width="380" height="70"><div xmlns="http://www.w3.org/1999/xhtml" style="font:700 21px/1.25 Andika,Figtree,sans-serif;color:#2a2326;text-align:center">${esc(t)}</div></foreignObject>`+kSpk(x+390,y+45,t,40); });
    b+=kT(60,940,'Now write the story in order:',{s:30,c:'#b03a5b'})+['First,','Then,','Next,','Finally,'].map((w,i)=>kT(60,1020+i*90,w,{s:28})+kAns(190,1022+i*90,750)).join('');
    return kPage('',Sq.t,'Numere as cenas na ordem e escreva a história (First, Then, Next, Finally)',b,{ic:Sq.s[3][0]}); },Object.fromEntries(KIDS_SEQ.map((s,i)=>[String(i),s.t]))),
  quiz:S0('Quiz com figuras','ler',['a5','a7'],'8 perguntas de múltipla escolha (What is it? How many? What colour?).',(th,R)=>{ const all=KIDS_THEMES[th].w; let b='';
    for (let i=0;i<8;i++){ const x=60+(i%2)*450, y=275+Math.floor(i/2)*270, kind=i%3; const [w,n]=all[Math.floor(R.r()*all.length)]; let q, ops, img='';
      if (kind===0){ q='What is it?'; ops=kShuf([w,...kShuf(all.filter(z=>z[0]!==w),R).slice(0,2).map(z=>z[0])],R); img=kE(n,x+30,y+60,120); }
      else if (kind===1){ const k=2+Math.floor(R.r()*4); q=`How many ${kPl(w)? w : w+'s'}?`; ops=kShuf([NUMW[k],NUMW[k+1],NUMW[k-1]],R); img=[...Array(k)].map((_,j)=>kE(n,x+25+(j%3)*58,y+60+Math.floor(j/3)*58,54)).join(''); }
      else { const c=kShuf(Object.keys(KCOL),R).slice(0,3); q='What colour is it?'; ops=c.slice(); img=`<circle cx="${x+95}" cy="${y+125}" r="60" fill="${KCOL[c[0]][0]}"/>`; ops=kShuf(ops,R); }
      b+=kBox(x+10,y,420,245,i,{r:26})+kT(x+30,y+45,`${i+1}. ${q}`,{s:24})+img+ops.map((o,k)=>`<circle cx="${x+225}" cy="${y+90+k*52}" r="15" fill="#fff" stroke="#2a2326" stroke-width="3"/>`+kT(x+252,y+99+k*52,o,{s:26,b:false})).join(''); }
    return kPage(th,'Picture quiz','Leia a pergunta e pinte a bolinha da resposta certa',b); }),
  sobremim:S0('All about me (escrita guiada)','esc',['a7','a9'],'Frases para completar sobre a criança + desenho.',(th,R)=>{ const L=['My name is','I am ____ years old.','My favourite colour is','My favourite food is','My favourite animal is','I can','I can’t','I like','I don’t like'];
    let b=`<rect x="640" y="270" width="300" height="340" rx="26" fill="#fffdf8" stroke="#2a2326" stroke-width="3"/>`+kT(790,640,'This is me!',{s:26,a:'middle'})+kE('sparkles',870,280,60);
    L.forEach((t,i)=>{ const y=320+i*116, wid=i<3? 560 : 880; b+=kT(60,y,t.replace('____','___'),{s:30})+(t.includes('____')? '' : kAns(60+t.length*15+20,y+2,wid-(t.length*15+20)))+kAns(60,y+52,wid); });
    return kPage('','All about me','Complete as frases sobre você e desenhe seu retrato',b,{ic:'grinning-face'}); }),
  arvore:S0('Árvore da família','esc',['a7','a9'],'Desenhe e escreva os nomes + perguntas sobre a família.',(th,R)=>{ let b=kE('deciduous-tree',250,250,500,'line',{sw:.3});
    const S=[['grandma','old-woman-medium',150,290],['grandpa','old-man-light',700,290],['mom','woman-medium-light',150,600],['dad','man-medium',700,600],['me','girl-medium',425,840]];
    S.forEach(([w,n,x,y])=>{ b+=`<rect x="${x}" y="${y}" width="150" height="190" rx="20" fill="#fff" stroke="#2a2326" stroke-width="3"/>`+kE(n,x+35,y+15,80)+kT(x+75,y+130,w,{s:24,a:'middle',c:'#b03a5b'})+kAns(x+15,y+172,120); });
    const Q=['Who is your mom’s mom?','How many brothers or sisters have you got?','What is your dad’s name?'];
    Q.forEach((q,i)=>{ const y=1100+i*86; b+=kQ(60,y,i+1,q,{s:28})+kAns(100,y+44,840); });
    return kPage('','My family tree','Desenhe ou cole fotos, escreva os nomes e responda',b,{ic:'house'}); }),
  descreva:S0('Descreva a figura','esc',['a9'],'Cena + banco de palavras: escreva 5 frases (There is / There are).',(th,R)=>{ const S=kScene(R,60,270,880,560); let b=S.g;
    const bank=['There is','There are','on','under','next to','a','two','three',...S.placed.map(p=>kName(p.t)),'bed','chair','sofa','flowers'];
    b+=kBox(60,860,880,120,3,{r:24})+`<foreignObject x="80" y="875" width="840" height="100"><div xmlns="http://www.w3.org/1999/xhtml" style="font:700 22px/1.6 Andika,Figtree,sans-serif;color:#2a2326;display:flex;flex-wrap:wrap;gap:6px 14px">${bank.map(w=>`<span style="background:#fff;border-radius:10px;padding:0 10px">${esc(w)}</span>`).join('')}</div></foreignObject>`;
    for (let i=0;i<5;i++) b+=kT(60,1040+i*68,`${i+1}.`,{s:26})+kAns(100,1042+i*68,840);
    return kPage('','Describe the picture','Use as palavras do quadro e escreva 5 frases: There is a cat on the bed.',b,{ic:'framed-picture'}); }),
  aan:S0('A, an e some','esc',['a7'],'Escreva a, an ou some antes de cada figura.',(th,R)=>{ const pool=kShuf(Object.values(KIDS_THEMES).flatMap(t=>t.w),R).filter((x,i,a)=>a.findIndex(y=>y[0]===x[0])===i).slice(0,9); let b='';
    pool.forEach(([w,n],i)=>{ const x=60+(i%3)*300, y=280+Math.floor(i/3)*300; b+=kBox(x+10,y,280,270,i,{r:24})+kE(n,x+90,y+20,120)+`<rect x="${x+35}" y="${y+175}" width="90" height="60" rx="12" fill="#fff" stroke="#f0a020" stroke-width="3"/>`+kT(x+140,y+218,w,{s:w.length>8? 24 : 32})+kSpk(x+255,y+40,`${article(w)}|${w}`,38); });
    b+=kT(60,1250,'a + consoante (a cat) · an + vogal (an apple) · some + plural (some grapes)',{s:24,c:'#6a5e61',f:KFS});
    return kPage('','A, an or some?','Escreva a, an ou some no quadradinho',b,{ic:'pencil'}); }),
});
for (const k of ['flash','sombra','ligar','tracar','primeira','igual']) if (KIDS_SHEETS[k]) KIDS_SHEETS[k].audio=true;
