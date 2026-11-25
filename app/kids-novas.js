/* =========================================================
   Sotaque Kids · mais 15 atividades (lote 2), folhas A4 em SVG como as outras
   3–6 anos: sons dos bichos, cartão de alinhavo, quadro de 10 (ten frames)
   5–8 anos: sudoku com figuras, medir com blocos, vogais curtas (CVC), quem usa? (profissões), cômodos da casa
   7–10 anos: o que eles estão fazendo? (-ing), Guess who? (has got), quem-me-quer, meses do ano,
              carta para o Papai Noel, horário da escola (matérias), a corrida (ordinais)
   Usa os ajudantes de kids.js, kids-mais.js e kids-extra.js (kE, kT, kBox, kSpk, kQ, kAns, kBalloon…).
   ========================================================= */

/* ---------- dados ---------- */
const KSOUND=[['cow','cow','Moo, moo!'],['pig','pig','Oink, oink!'],['sheep','ewe','Baa, baa!'],['duck','duck','Quack, quack!'],['dog','dog','Woof, woof!'],['cat','cat','Meow!'],
  ['horse','horse','Neigh!'],['rooster','rooster','Cock-a-doodle-doo!'],['owl','owl','Hoot, hoot!'],['lion','lion','Roar!'],['snake','snake','Hiss!'],['bee','honeybee','Buzz, buzz!'],
  ['frog','frog','Ribbit!'],['mouse','mouse','Squeak, squeak!'],['bird','bird','Tweet, tweet!'],['chick','baby-chick','Cheep, cheep!'],['turkey','turkey','Gobble, gobble!']];
/* palavras curtas consoante-vogal-consoante, com figura */
const KCVC=[['cat','cat'],['bat','bat'],['rat','rat'],['hat','top-hat'],['map','world-map'],['van','minibus'],['cap','billed-cap'],
  ['bed','bed'],['web','spider-web'],['pen','pen'],['net','goal-net'],['hen','chicken'],
  ['pig','pig'],['pin','round-pushpin'],['bin','wastebasket'],
  ['dog','dog'],['fox','fox'],['box','package'],['log','wood'],['pot','pot-of-food'],
  ['sun','sun'],['bus','bus'],['bug','bug'],['mug','hot-beverage'],['cup','teacup-without-handle']];
/* profissão → o que ela usa (todas as ferramentas começam com consoante: “uses a …”) */
const KTOOL=[['doctor','woman-health-worker-medium','stethoscope','stethoscope'],['chef','woman-cook-dark','frying pan','cooking'],['firefighter','woman-firefighter-light','fire engine','fire-engine'],
  ['farmer','man-farmer-medium','tractor','tractor'],['pilot','woman-pilot-medium-dark','plane','airplane'],['artist','man-artist-light','paintbrush','paintbrush'],
  ['police officer','man-police-officer-medium-light','police car','police-car'],['scientist','woman-scientist-medium-light','microscope','microscope'],['mechanic','man-mechanic-dark','spanner','wrench'],
  ['singer','woman-singer-medium','microphone','microphone'],['builder','man-construction-worker-medium-dark','hammer','hammer'],['teacher','man-teacher-medium-dark','book','closed-book']];
/* cômodos e 3 coisas de cada um */
const KROOM=[['kitchen','fork-and-knife-with-plate',[['teapot','teapot'],['frying pan','cooking'],['bowl','bowl-with-spoon']]],
  ['bathroom','shower',[['bath','bathtub'],['toothbrush','toothbrush'],['soap','soap']]],
  ['bedroom','sleeping-face',[['bed','bed'],['teddy bear','teddy-bear'],['alarm clock','alarm-clock']]],
  ['living room','framed-picture',[['sofa','couch-and-lamp'],['TV','television'],['radio','radio']]]];
/* ações: figura, pronome, -ing, forma base */
const KACT=[['woman-swimming-medium','She','swimming','swim'],['man-biking-dark','He','riding a bike','ride a bike'],['woman-running-light','She','running','run'],['man-dancing-medium-dark','He','dancing','dance'],
  ['woman-climbing-medium-light','She','climbing','climb'],['man-surfing-medium','He','surfing','surf'],['woman-juggling-dark','She','juggling','juggle'],['man-cartwheeling-light','He','doing a cartwheel','do a cartwheel'],
  ['woman-rowing-boat-medium','She','rowing a boat','row a boat'],['person-in-bed-medium-light','He','sleeping','sleep'],['person-taking-bath-light','She','having a bath','have a bath'],
  ['woman-lifting-weights-medium-dark','She','lifting weights','lift weights'],['skier','He','skiing','ski'],['man-golfing-medium','He','playing golf','play golf'],['woman-cook-medium','She','cooking','cook'],
  ['man-singer-light','He','singing','sing'],['woman-artist-dark','She','painting','paint']];
/* Guess who: cada descrição combina com uma pessoa só */
const KWHO=[['Rosa','woman-red-hair-light','She’s got red hair.'],['Tom','man-red-hair-medium-light','He’s got red hair.'],['Ana','woman-curly-hair-dark','She’s got black curly hair.'],
  ['Max','man-bald-medium-dark','He’s bald. He hasn’t got any hair.'],['Lucy','woman-blonde-hair-medium','She’s got blonde hair.'],['Sam','man-beard-medium','He’s got a beard.'],
  ['Leo','man-blonde-hair-light','He’s got blond hair.'],['Ben','boy-medium','He’s a boy. He’s got short brown hair.']];
const KMONTH=[['January','fireworks'],['February','performing-arts'],['March','backpack'],['April','egg'],['May','red-heart'],['June','ear-of-corn'],['July','kite'],['August','necktie'],
  ['September','cherry-blossom'],['October','teddy-bear'],['November','sun'],['December','christmas-tree']];
/* datas como no Brasil (Dia das Crianças, Festa Junina, Dia dos Pais em agosto) */
const KWHEN=[['When is Christmas?','December'],['When is Children’s Day in Brazil?','October'],['When is Festa Junina?','June'],['When is Carnival?','February or March'],
  ['When is Easter?','March or April'],['When is Mother’s Day?','May'],['When is Father’s Day in Brazil?','August'],['When is New Year’s Day?','January']];
const KSUBJ=[['Maths','abacus'],['English','input-latin-letters'],['Portuguese','speech-balloon'],['Science','microscope'],['History','scroll'],['Geography','world-map'],['Art','artist-palette'],['Music','musical-notes'],['PE','soccer-ball']];
const KORD=['first','second','third','fourth','fifth','sixth'], KORDN=['1st','2nd','3rd','4th','5th','6th'];

/* ---------- ajudantes ---------- */
const kDot=(x,y)=>`<circle cx="${x}" cy="${y}" r="11" fill="#2a2326"/>`;
const kFit=(t,w,max)=>Math.min(max,Math.floor(w/(.55*[...t].length)));   /* tamanho de letra que cabe na largura */
/* texto girado (para o quem-me-quer): linhas centradas em (x,y) */
const kRotT=(x,y,ang,lines,s)=>`<g transform="rotate(${ang} ${x} ${y})">${lines.map((l,i)=>kT(x,y+(i-(lines.length-1)/2)*s*1.15+s*.35,l,{s,a:'middle'})).join('')}</g>`;
/* sudoku 4×4 (caixas 2×2): grade válida embaralhada e casas vazias com uma única solução */
function kSudCount(P){ const g=P.map(r=>r.slice()); let n=0;
  const ok=(r,c,v)=>{ for (let i=0;i<4;i++) if (g[r][i]===v||g[i][c]===v) return false; const br=r&2, bc=c&2; for (let i=0;i<2;i++) for (let j=0;j<2;j++) if (g[br+i][bc+j]===v) return false; return true; };
  const go=()=>{ if (n>1) return; for (let r=0;r<4;r++) for (let c=0;c<4;c++) if (g[r][c]<0){ for (let v=0;v<4;v++) if (ok(r,c,v)){ g[r][c]=v; go(); g[r][c]=-1; } return; } n++; };
  go(); return n; }
function kSudoku(R,blanks){ let g=[[0,1,2,3],[2,3,0,1],[1,0,3,2],[3,2,1,0]]; const sym=kShuf([0,1,2,3],R); g=g.map(r=>r.map(v=>sym[v]));
  const sw=(a,i,j)=>{ [a[i],a[j]]=[a[j],a[i]]; };
  if (R.r()<.5) sw(g,0,1); if (R.r()<.5) sw(g,2,3); if (R.r()<.5){ sw(g,0,2); sw(g,1,3); }
  if (R.r()<.5) g=g[0].map((_,c)=>g.map(r=>r[c])); if (R.r()<.5) g.forEach(r=>sw(r,0,1)); if (R.r()<.5) g.forEach(r=>sw(r,2,3));
  const P=g.map(r=>r.slice()); let n=0;
  for (const k of kShuf([...Array(16).keys()],R)){ if (n>=blanks) break; const r=k>>2, c=k&3, v=P[r][c]; P[r][c]=-1; if (kSudCount(P)===1) n++; else P[r][c]=v; }
  return {g,P}; }
function kSudGrid(x,y,cs,P,W){ let b=`<rect x="${x}" y="${y}" width="${cs*4}" height="${cs*4}" rx="10" fill="#fff"/>`;
  for (let r=0;r<4;r++) for (let c=0;c<4;c++) if (P[r][c]>=0) b+=kE(W[P[r][c]][1],x+c*cs+cs*.12,y+r*cs+cs*.12,cs*.76);
  for (let i=1;i<4;i++) b+=`<line x1="${x+i*cs}" y1="${y}" x2="${x+i*cs}" y2="${y+cs*4}" stroke="${i===2? '#2a2326' : '#cfc5c8'}" stroke-width="${i===2? 5 : 2}"/><line x1="${x}" y1="${y+i*cs}" x2="${x+cs*4}" y2="${y+i*cs}" stroke="${i===2? '#2a2326' : '#cfc5c8'}" stroke-width="${i===2? 5 : 2}"/>`;
  return b+`<rect x="${x}" y="${y}" width="${cs*4}" height="${cs*4}" rx="10" fill="none" stroke="#2a2326" stroke-width="5"/>`; }
/* objetos compridos para medir (comprimento exato L, altura ~70) */
function kLong(k,x,y,L,c,u){ const st='stroke="#2a2326" stroke-width="2.5"';
  if (k==='pencil') return `<rect x="${x}" y="${y+13}" width="30" height="44" rx="8" fill="#f8a5c2" ${st}/><rect x="${x+28}" y="${y+13}" width="18" height="44" fill="#b0bec5" ${st}/><rect x="${x+46}" y="${y+13}" width="${L-102}" height="44" fill="${c}" ${st}/>`
    +`<path d="M${x+L-56} ${y+13}L${x+L} ${y+35}L${x+L-56} ${y+57}Z" fill="#ffcc80" ${st} stroke-linejoin="round"/><path d="M${x+L-18} ${y+28}L${x+L} ${y+35}L${x+L-18} ${y+42}Z" fill="#2a2326"/>`;
  if (k==='crayon') return `<rect x="${x}" y="${y+12}" width="${L-38}" height="46" rx="10" fill="${c}" ${st}/><rect x="${x+24}" y="${y+18}" width="${Math.max(40,L-110)}" height="34" rx="6" fill="#fff" opacity=".85"/>`
    +`<line x1="${x+14}" y1="${y+12}" x2="${x+14}" y2="${y+58}" stroke="#2a2326" stroke-width="2"/><path d="M${x+L-40} ${y+16}L${x+L-8} ${y+28}Q${x+L} ${y+35} ${x+L-8} ${y+42}L${x+L-40} ${y+54}Z" fill="${c}" ${st} stroke-linejoin="round"/>`;
  if (k==='snake'){ let b=`<rect x="${x}" y="${y+18}" width="${L-30}" height="34" rx="17" fill="${c}" ${st}/>`; for (let i=x+40;i<x+L-70;i+=46) b+=`<circle cx="${i}" cy="${y+35}" r="7" fill="#fff" opacity=".55"/>`;
    return b+`<ellipse cx="${x+L-28}" cy="${y+35}" rx="28" ry="25" fill="${c}" ${st}/><circle cx="${x+L-22}" cy="${y+27}" r="5" fill="#fff"/><circle cx="${x+L-21}" cy="${y+27}" r="2.5" fill="#2a2326"/><path d="M${x+L-30} ${y+44}q8 6 16 0" fill="none" stroke="#2a2326" stroke-width="2.5" stroke-linecap="round"/>`; }
  if (k==='train'){ const n=Math.round(L/u); let b=''; for (let i=0;i<n;i++){ const X=x+i*u+4, eng=i===n-1, w=u-8;
      b+=(eng? `<rect x="${X+w*.5}" y="${y}" width="${w*.5}" height="30" rx="4" fill="${c}" ${st}/><rect x="${X+12}" y="${y+2}" width="14" height="20" fill="#5a4f52"/>` : '')+`<rect x="${X}" y="${y+18}" width="${w}" height="38" rx="6" fill="${eng? c : '#ffe082'}" ${st}/>`
        +`<circle cx="${X+20}" cy="${y+60}" r="9" fill="#5a4f52"/><circle cx="${X+w-20}" cy="${y+60}" r="9" fill="#5a4f52"/>`+(i<n-1? `<line x1="${X+w}" y1="${y+42}" x2="${X+w+8}" y2="${y+42}" stroke="#2a2326" stroke-width="4"/>` : ''); }
    return b; }
  const n=Math.round(L/u); let b=''; for (let i=0;i<n;i++) b+=`<ellipse cx="${x+i*u+u/2}" cy="${y+40}" rx="${u/2}" ry="27" fill="${i===n-1? c : i%2? '#9ccc65' : '#c5e1a5'}" ${st}/>`;
  return b+`<line x1="${x+L-u*.45}" y1="${y+16}" x2="${x+L-u*.6}" y2="${y-2}" ${st}/><line x1="${x+L-u*.3}" y1="${y+16}" x2="${x+L-u*.2}" y2="${y-2}" ${st}/><circle cx="${x+L-u*.62}" cy="${y+34}" r="5" fill="#2a2326"/><circle cx="${x+L-u*.34}" cy="${y+34}" r="5" fill="#2a2326"/><path d="M${x+L-u*.6} ${y+48}q${u*.12} 8 ${u*.24} 0" fill="none" stroke="#2a2326" stroke-width="2.5" stroke-linecap="round"/>`; }
const kGap=(w,R)=>{ const a=[...w], idx=kShuf([...Array(a.length).keys()].slice(1),R).slice(0,a.length<=5? 1 : 2); idx.forEach(i=>a[i]='_'); return a.join(''); };

Object.assign(KIDS_SHEETS,{
  /* ---------- 3 a 6 anos ---------- */
  sons:S0('Que som ele faz? (animal sounds)','musica',['a3','a5'],'Ouça o som e ligue cada bicho ao balão certo: “The cow says moo!”',(th,R)=>{
    const L=kShuf(KSOUND,R).slice(0,6), O=kShuf(L,R); let b='';
    L.forEach(([w,e],i)=>{ const y=285+i*178; b+=kBox(50,y,330,158,i,{r:28})+kE(e,68,y+14,130)+kT(212,y+100,w,{s:kFit(w,140,38)})+kSpk(345,y+32,w,40)+kDot(404,y+79); });
    O.forEach(([,,snd],i)=>{ const y=285+i*178; b+=kDot(596,y+79)+kBalloon(620,y+22,268,104,' ',true)+kT(754,y+84,snd,{s:kFit(snd,240,30),a:'middle'})+kSpk(918,y+74,snd,40); });
    b+=kT(60,1372,'Respostas: '+L.map(([w,,s])=>`${w} – ${s}`).join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','Animal sounds','Toque no 🔈 do balão, ouça o som e ligue ao bicho certo.',b,{ic:'cow'}); }),
  costura:S0('Cartão de alinhavo','arte',['a3','a5'],'Figura grande com furinhos em volta: pinte, cole num papelão, fure e passe o barbante.',(th,R)=>{
    const W=kW(th,2,R); let b='';
    W.forEach(([w,e],i)=>{ const x=80, y=282+i*540, wd=840, h=510; b+=`<rect x="${x}" y="${y}" width="${wd}" height="${h}" rx="44" fill="#fffdf8" stroke="#a99fa3" stroke-width="2.5" stroke-dasharray="12 9"/>`;
      const ix=x+34, iy=y+34, iw=wd-68, ih=h-68, nx=Math.round(iw/54), ny=Math.round(ih/54), H=[];
      for (let j=0;j<=nx;j++) H.push([ix+j*iw/nx,iy],[ix+j*iw/nx,iy+ih]); for (let k=1;k<ny;k++) H.push([ix,iy+k*ih/ny],[ix+iw,iy+k*ih/ny]);
      b+=H.map(([hx,hy])=>`<circle cx="${hx.toFixed(1)}" cy="${hy.toFixed(1)}" r="9" fill="#fff" stroke="#2a2326" stroke-width="3"/>`).join('');
      b+=kE(e,x+wd/2-160,y+56,320,'line')+kTrace(x+wd/2,y+438,w,kFit(w,600,64),'middle'); });
    return kPage(th,'Lacing cards','Pinte, cole num papelão, fure as bolinhas e passe um barbante!',b,{ic:'yarn'}); }),
  dezena:S0('Quadro de 10 (ten frames)','voc',['a3','a5'],'Conte as figuras no quadro de dez, escreva o número e circule a palavra.',(th,R)=>{
    const W=kW(th,6,R), N=kShuf([1,2,3,4,5,6,7,8,9,10],R).slice(0,6); let b='';
    W.forEach(([w,e],i)=>{ const y=280+i*178, n=N[i], fx=80, fy=y+16, cs=64; b+=kBox(50,y,900,160,i,{r:26})+`<rect x="${fx}" y="${fy}" width="${cs*5}" height="${cs*2}" rx="8" fill="#fff" stroke="#2a2326" stroke-width="3"/>`;
      for (let c=1;c<5;c++) b+=`<line x1="${fx+c*cs}" y1="${fy}" x2="${fx+c*cs}" y2="${fy+cs*2}" stroke="#2a2326" stroke-width="2"/>`; b+=`<line x1="${fx}" y1="${fy+cs}" x2="${fx+cs*5}" y2="${fy+cs}" stroke="#2a2326" stroke-width="2"/>`;
      for (let k=0;k<n;k++) b+=kE(e,fx+(k%5)*cs+7,fy+Math.floor(k/5)*cs+7,cs-14);
      b+=kT(440,y+56,'How many?',{s:24,b:false,c:'#5a4f52',f:KFS})+`<rect x="440" y="${y+72}" width="96" height="70" rx="14" fill="#fff" stroke="#2a2326" stroke-width="3"/>`;
      const other=NUMW[n===10? 9 : n===1? 2 : n+(R.r()<.5? 1 : -1)];
      kShuf([NUMW[n],other],R).forEach((o,j)=>{ const x=572+j*186; b+=`<rect x="${x}" y="${y+46}" width="170" height="74" rx="37" fill="#fff" stroke="#c9bfb5" stroke-width="2.5"/>`+kT(x+68,y+95,o,{s:30,a:'middle'})+kSpk(x+140,y+83,o,32); }); });
    b+=kT(60,1372,'Respostas: '+W.map(([w],i)=>`${w} ${N[i]}`).join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage(th,'Ten frames','Conte, escreva o número e circule a palavra (ouça no 🔈).',b,{ic:'abacus'}); }),
  /* ---------- 5 a 8 anos ---------- */
  sudoku:S0('Sudoku com figuras','jogo',['a5','a7','a9'],'Dois sudokus 4×4 com as figuras do tema: cada linha, coluna e caixa tem uma de cada.',(th,R)=>{
    const W=kW(th,4,R), A=kSudoku(R,6), B=kSudoku(R,9); let b=kBox(50,280,900,108,3,{r:24});
    W.forEach(([w,e],i)=>{ const x=70+i*222; b+=kE(e,x,292,84)+kT(x+94,346,w,{s:kFit(w,118,28)}); });
    b+=kT(500,438,'Each row, column and box has one of each!',{s:26,a:'middle'});
    [[A,75,'Easy'],[B,525,'Tricky']].forEach(([S,x,l])=>{ b+=kT(x,482,l,{s:24,c:'#7a1f35'})+kSudGrid(x,496,100,S.P,W); });
    const cnt=[0,0,0,0]; [A,B].forEach(S=>S.P.forEach((r,ri)=>r.forEach((v,ci)=>{ if (v<0) cnt[S.g[ri][ci]]++; })));
    const pcs=[]; cnt.forEach((c,k)=>{ for (let j=0;j<c;j++) pcs.push(k); });
    b+=kT(60,948,'Cut and glue (or draw):',{s:24,b:false,c:'#5a4f52',f:KFS});
    pcs.forEach((k,i)=>{ const x=60+(i%8)*110, y=966+Math.floor(i/8)*108; b+=`<rect x="${x}" y="${y}" width="96" height="96" rx="10" fill="#fff" stroke="#a99fa3" stroke-width="2" stroke-dasharray="8 6"/>`+kE(W[k][1],x+12,y+12,72); });
    b+=kT(300,1226,'Make your own sudoku!',{s:28})+kT(300,1266,'Draw 4 pictures, leave some boxes empty',{s:22,b:false,f:KFS})+kT(300,1298,'and give it to a friend.',{s:22,b:false,f:KFS})+kSudGrid(80,1180,44,[[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]],W);
    return kPage(th,'Picture sudoku','Nenhuma figura pode repetir na linha, na coluna ou na caixa.',b,{ic:'puzzle-piece'}); }),
  medir:S0('Meça com blocos (measure it)','voc',['a5','a7'],'Lápis, giz de cera, cobra, trem e lagarta de tamanhos diferentes: conte os blocos e compare (the longest, the shortest).',(th,R)=>{
    const O=kShuf(['pencil','crayon','snake','train','caterpillar'],R), N=kShuf([3,4,5,6,7,8],R).slice(0,5), u=96, C=kShuf(['#e53935','#1e88e5','#43a047','#fb8c00','#8e24aa'],R); let b='';
    O.forEach((o,i)=>{ const y=284+i*200, n=N[i], x0=100, t=`The ${o} is`; b+=kBox(50,y,900,186,i,{r:26})+kLong(o,x0,y+22,n*u,C[i],u);
      for (let k=0;k<n;k++) b+=`<rect x="${x0+k*u}" y="${y+104}" width="${u}" height="40" rx="6" fill="${k%2? '#81d4fa' : '#ffd54f'}" stroke="#2a2326" stroke-width="2"/>`;
      b+=kT(x0,y+174,t,{s:22,b:false,f:KFS})+kAns(x0+t.length*11+10,y+176,60)+kT(x0+t.length*11+80,y+174,'blocks long.',{s:22,b:false,f:KFS}); });
    const lo=O[N.indexOf(Math.max(...N))], sh=O[N.indexOf(Math.min(...N))];
    b+=kQ(60,1318,1,'Which is the longest?',{s:24})+kAns(350,1320,150)+kQ(520,1318,2,'Which is the shortest?',{s:24})+kAns(820,1320,120);
    b+=kT(60,1372,'Respostas: '+O.map((o,i)=>`${o} ${N[i]}`).join(' · ')+` · longest: ${lo} · shortest: ${sh}`,{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','Measure it!','Conte os blocos embaixo de cada um e escreva. Depois compare.',b,{ic:'straight-ruler'}); }),
  vogais:S0('Vogais curtas (a, e, i, o, u)','esc',['a5','a7'],'Palavras curtas (cat, bed, pig, dog, sun): olhe, ouça e circule a vogal que falta.',(th,R)=>{
    const pick=['a','e','i','o','u'].map(v=>kShuf(KCVC.filter(([w])=>w[1]===v),R)[0]), L=kShuf([...pick,...kShuf(KCVC.filter(z=>!pick.includes(z)),R).slice(0,3)],R); let b='';
    L.forEach(([w,e],i)=>{ const x=50+(i%2)*455, y=280+Math.floor(i/2)*265; b+=kBox(x,y,445,245,i,{r:28})+kE(e,x+22,y+26,118)+kSpk(x+405,y+38,w,40);
      b+=kT(x+196,y+112,w[0],{s:64,a:'middle'})+`<line x1="${x+232}" y1="${y+118}" x2="${x+286}" y2="${y+118}" stroke="#2a2326" stroke-width="4" stroke-linecap="round"/>`+kT(x+322,y+112,w[2],{s:64,a:'middle'});
      ['a','e','i','o','u'].forEach((v,j)=>{ const vx=x+62+j*80; b+=`<circle cx="${vx}" cy="${y+192}" r="30" fill="#fff" stroke="#c9bfb5" stroke-width="2.5"/>`+kT(vx,y+204,v,{s:34,a:'middle'}); }); });
    b+=kT(60,1372,'Respostas: '+L.map(([w])=>w).join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','Short vowels','Olhe, ouça a palavra e circule a vogal que falta.',b,{ic:'input-latin-letters'}); }),
  profissoes:S0('Quem usa? (profissões)','voc',['a5','a7'],'Ligue cada profissão ao que ela usa e complete: A doctor uses a stethoscope.',(th,R)=>{
    const L=kShuf(KTOOL,R).slice(0,6), O=kShuf(L,R); let b='';
    L.forEach(([j,ej],i)=>{ const y=280+i*150; b+=kBox(50,y,360,132,i,{r:26})+kE(ej,64,y+10,112)+kT(188,y+92,j,{s:kFit(j,190,30)})+kSpk(380,y+28,j,36)+kDot(432,y+66); });
    O.forEach(([,,t,et],i)=>{ const y=280+i*150; b+=kDot(588,y+66)+kBox(610,y,340,132,i+3,{r:26})+kE(et,624,y+10,112)+kT(748,y+92,t,{s:kFit(t,180,30)})+kSpk(920,y+28,t,36); });
    const [a,c]=[L[0],L[1]];
    b+=kQ(60,1222,1,`${article(a[0])==='an'? 'An' : 'A'} ${a[0]} uses a`,{s:28})+kAns(Math.round(118+(`${a[0]} uses a`.length+2)*14.6),1224,240);
    b+=kQ(60,1300,2,'The',{s:28})+kAns(170,1302,230)+kT(415,1300,`uses a ${c[2]}.`,{s:28});
    b+=kT(60,1372,'Respostas: '+L.map(([j,,t])=>`${j} – ${t}`).join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','Who uses it?','Ligue cada profissão ao que ela usa. Depois complete as frases.',b,{ic:'woman-firefighter-light'}); }),
  comodos:S0('Em que cômodo? (rooms)','voc',['a5','a7'],'Recorte as figuras e cole no cômodo certo: kitchen, bathroom, bedroom, living room.',(th,R)=>{
    let b=''; KROOM.forEach(([r,ic],i)=>{ const x=50+(i%2)*455, y=280+Math.floor(i/2)*345; b+=kBox(x,y,445,325,i,{r:28})+kE(ic,x+20,y+16,64)+kT(x+98,y+62,r,{s:kFit(r,230,34)})+kSpk(x+405,y+40,r,40)
      +`<rect x="${x+20}" y="${y+96}" width="405" height="210" rx="18" fill="#fff" stroke="#c9bfb5" stroke-width="2" stroke-dasharray="10 8"/>`; });
    const P=kShuf(KROOM.flatMap(([r,,it])=>it.map(z=>[...z,r])),R);
    b+=kT(60,1000,'Cut and glue in the right room:',{s:24,b:false,c:'#5a4f52',f:KFS});
    P.forEach(([w,e],i)=>{ const x=55+(i%6)*150, y=1016+Math.floor(i/6)*166; b+=`<rect x="${x}" y="${y}" width="140" height="154" rx="12" fill="#fff" stroke="#a99fa3" stroke-width="2" stroke-dasharray="8 6"/>`+kE(e,x+25,y+12,90)+kT(x+70,y+134,w,{s:kFit(w,124,20),a:'middle',f:KFS}); });
    b+=kT(60,1372,'Respostas: '+KROOM.map(([r,,it])=>`${r}: ${it.map(z=>z[0]).join(', ')}`).join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','Which room?','Recorte as figuras e cole no cômodo certo (ou ligue com linhas).',b,{ic:'house'}); }),
  /* ---------- 7 a 10 anos ---------- */
  acoes:S0('O que eles estão fazendo? (-ing)','ler',['a7','a9'],'Present continuous com figuras: She’s swimming. He’s riding a bike. Circule ou escreva.',(op,R)=>{
    const L=kShuf(KACT,R).slice(0,8), wr=op==='escreva'; let b='';
    if (wr) b+=kBox(50,276,900,112,3,{r:22})+`<foreignObject x="70" y="290" width="860" height="90"><div xmlns="http://www.w3.org/1999/xhtml" style="font:700 24px/1.7 Andika,Figtree,sans-serif;color:#2a2326;display:flex;flex-wrap:wrap;gap:6px 14px;justify-content:center">${kShuf(L,R).map(z=>`<span style="background:#fff;border-radius:10px;padding:0 12px">${esc(z[3])}</span>`).join('')}</div></foreignObject>`;
    L.forEach(([e,p,ing],i)=>{ const x=50+(i%2)*455, y=(wr? 410 : 282)+Math.floor(i/2)*(wr? 232 : 262), q=`What is ${p==='She'? 'she' : 'he'} doing?`; b+=kBox(x,y,445,wr? 216 : 246,i,{r:26})+(wr? kE(e,x+16,y+34,150) : kE(e,x+10,y+62,136))+kSpk(x+410,y+34,q,36);
      if (wr) b+=kT(x+182,y+72,q,{s:22,b:false,f:KFS})+kT(x+182,y+152,`${p}’s`,{s:28})+kAns(x+250,y+154,176);
      else { const oth=kShuf(KACT.filter(z=>z[1]===p&&z[2]!==ing),R)[0], ops=kShuf([`${p}’s ${ing}.`,`${p}’s ${oth[2]}.`],R), fs=Math.min(...ops.map(o=>kFit(o,250,26)));
        b+=kT(x+160,y+44,q,{s:20,b:false,c:'#5a4f52',f:KFS}); ops.forEach((o,j)=>{ const oy=y+66+j*86; b+=`<rect x="${x+156}" y="${oy}" width="274" height="70" rx="35" fill="#fff" stroke="#c9bfb5" stroke-width="2.5"/>`+kT(x+293,oy+44,o,{s:fs,a:'middle'}); }); } });
    b+=kT(60,1372,'Respostas: '+L.map(([,p,ing],i)=>`${i+1}. ${p}’s ${ing}.`).join(' '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','What are they doing?',wr? 'Escreva a frase com -ing. Use o quadro: swim → swimming.' : 'Olhe cada figura e circule a frase certa.',b,{ic:'woman-running-light'}); },{circule:'Circule a frase certa',escreva:'Escreva a frase (-ing)'}),
  quemsou:S0('Guess who? (has got)','ler',['a7','a9'],'8 pessoas e descrições: She’s got red hair. He’s got a beard. Leia e escreva o nome.',(th,R)=>{
    const P=kShuf(KWHO,R), D=kShuf(KWHO,R).slice(0,6); let b='';
    P.forEach(([n,e],i)=>{ const x=55+(i%4)*226, y=282+Math.floor(i/4)*218; b+=kBox(x,y,212,204,i,{r:24})+kE(e,x+41,y+12,130)+kT(x+106,y+184,n,{s:30,a:'middle'}); });
    b+=kT(60,758,'Read and write the name:',{s:26,c:'#7a1f35'});
    D.forEach(([,,d],i)=>{ const y=816+i*72; b+=kQ(60,y,i+1,d,{s:kFit(d,480,26)})+kSpk(636,y-10,d,36)+kAns(680,y+4,260); });
    b+=kT(60,1262,'And you? Draw yourself and write:',{s:24,b:false,c:'#5a4f52',f:KFS})+kT(60,1320,'I’ve got ________ hair and ________ eyes.',{s:26,f:KFS})
      +`<rect x="790" y="1200" width="150" height="150" rx="16" fill="#fff" stroke="#a99fa3" stroke-width="2" stroke-dasharray="9 7"/>`;
    b+=kT(60,1372,'Respostas: '+D.map(([n],i)=>`${i+1}. ${n}`).join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','Guess who?','Leia e escreva o nome da pessoa. Depois desenhe você!',b,{ic:'woman-red-hair-light'}); }),
  cootie:S0('Quem-me-quer (fortune teller)','jogo',['a7','a9'],'Dobradura com cores, números e desafios em inglês: recorte, dobre e brinque em dupla.',(th,R)=>{
    const S=760, x0=120, y0=280, h=S/2, q=S/4, cx=x0+h, cy=y0+h, W=kW(th,8,R).filter(([w])=>w.length<=9&&!kPl(w)); let b='';
    const rot=(p,k)=>{ let [x,y]=p; for (let i=0;i<k;i++) [x,y]=[cx-(y-cy),cy+(x-cx)]; return [x,y]; }, ANG=[180,-90,0,90];
    const COL=[['red','#ffd6d9','#e53935'],['blue','#d3e6fb','#1e88e5'],['green','#d9f0db','#43a047'],['yellow','#fff1b8','#f9a825']];
    const CR=[[[x0,y0],[x0+h,y0],[x0,y0+h]],[[x0+S,y0],[x0+S,y0+h],[x0+h,y0]],[[x0+S,y0+S],[x0+h,y0+S],[x0+S,y0+h]],[[x0,y0+S],[x0,y0+h],[x0+h,y0+S]]];
    CR.forEach((T,i)=>{ const gx=(T[0][0]+T[1][0]+T[2][0])/3, gy=(T[0][1]+T[1][1]+T[2][1])/3, a=[135,-135,-45,45][i]; b+=`<path d="M${T.map(p=>p.join(' ')).join('L')}Z" fill="${COL[i][1]}"/>`
      +`<g transform="rotate(${a} ${gx} ${gy})"><circle cx="${gx}" cy="${gy-24}" r="18" fill="${COL[i][2]}"/>${kT(gx,gy+22,COL[i][0],{s:30,a:'middle'})}</g>`; });
    const w1=W[0]?.[0]||'cat', w2=W[1]?.[0]||'dog', w3=W[2]||['star','star'];
    const M=kShuf([['Spell',`“${w1}”!`],['Spell',`“${w2}”!`],['What’s','this?','E'],['Jump','5 times!'],['Count','to 10!'],['Say 3','colours!'],['Touch','your nose!'],['Sing','a song!']],R);
    for (let k=0;k<4;k++) [-1,1].forEach((sd,j)=>{ const n=k*2+j+1, ring=[[cx,cy-q],[cx+sd*q,cy-q],[cx,y0]].map(p=>rot(p,k)), inn=[[cx,cy],[cx+sd*q,cy-q],[cx,cy-q]].map(p=>rot(p,k));
      const rg=[(ring[0][0]+ring[1][0]+ring[2][0])/3,(ring[0][1]+ring[1][1]+ring[2][1])/3], an=rot([cx+sd*q*.36,cy-q*.7],k), m=M[n-1];
      b+=`<path d="M${ring.map(p=>p.join(' ')).join('L')}Z" fill="#fff"/>`+kRotT(rg[0],rg[1],ANG[k],[String(n)],46);
      b+=m[2]? `<g transform="rotate(${ANG[k]} ${an[0]} ${an[1]})">${kT(an[0],an[1]-8,m[0]+' '+m[1],{s:17,a:'middle'})}${kE(w3[1],an[0]-24,an[1]+2,48)}</g>` : kRotT(an[0],an[1],ANG[k],[m[0],m[1]],18); });
    const D=`stroke="#a99fa3" stroke-width="2" stroke-dasharray="9 7" fill="none"`;
    b+=`<path d="M${x0} ${y0}L${x0+S} ${y0+S}M${x0+S} ${y0}L${x0} ${y0+S}M${cx} ${y0}V${y0+S}M${x0} ${cy}H${x0+S}" ${D}/><path d="M${cx} ${y0}L${x0+S} ${cy}L${cx} ${y0+S}L${x0} ${cy}Z" ${D}/><rect x="${cx-q}" y="${cy-q}" width="${2*q}" height="${2*q}" ${D}/>`
      +`<rect x="${x0}" y="${y0}" width="${S}" height="${S}" fill="none" stroke="#2a2326" stroke-width="3"/>`+kE('scissors',x0-56,y0-16,44);
    const F=['1. Cut out the big square.','2. Turn it over (blank side up).','3. Fold the 4 corners to the middle.','4. Turn it over and do it again.','5. Fold in half. Fingers under the colours!'],
      G=['A: Pick a colour!   B: Blue!','A: B-L-U-E (open and close 4 times).','A: Pick a number!   B: Five!','A: Open number 5. Read it and do it!','Then change: now B asks!'];
    b+=kT(60,1094,'How to fold',{s:26,c:'#7a1f35'})+F.map((t,i)=>kT(60,1134+i*42,t,{s:19,b:false,f:KFS})).join('')+kT(520,1094,'How to play',{s:26,c:'#7a1f35'})+G.map((t,i)=>kT(520,1134+i*42,t,{s:19,b:false,f:KFS})).join('');
    return kPage(th,'Fortune teller','Recorte, dobre e brinque: escolha cor e número e faça o desafio!',b,{ic:'sparkles'}); }),
  meses:S0('Meses do ano','esc',['a7','a9'],'Os 12 meses com letras faltando e perguntas do Brasil: When is Children’s Day? It’s in October.',(th,R)=>{
    let b=''; KMONTH.forEach(([m,e],i)=>{ const x=50+(i%4)*228, y=280+Math.floor(i/4)*144; b+=kBox(x,y,214,130,i,{r:22})+kE(e,x+12,y+10,46)+kT(x+68,y+44,String(i+1),{s:24,c:'#7a1f35'})+kSpk(x+186,y+32,m,34)+kT(x+107,y+108,kGap(m,R),{s:kFit(m,190,32),a:'middle',ls:2}); });
    const Q=kShuf(KWHEN,R).slice(0,4); b+=kT(60,758,'When is…? It’s in…',{s:28,c:'#7a1f35'});
    Q.forEach(([q],i)=>{ const y=812+i*74; b+=kQ(60,y,i+1,q,{s:24})+kSpk(574,y-10,q,34)+kT(610,y,'It’s in',{s:24,b:false,f:KFS})+kAns(690,y+2,250); });
    b+=kQ(60,1112,5,'When is your birthday?',{s:24})+kT(104,1162,'My birthday is in',{s:24,b:false,f:KFS})+kAns(300,1164,300);
    const s=Math.floor(R.r()*9), t=1+Math.floor(R.r()*9); b+=kT(60,1236,'What comes next?',{s:26,c:'#7a1f35'})
      +kT(60,1294,`${KMONTH[s][0]}, ${KMONTH[s+1][0]},`,{s:24,b:false,f:KFS})+kAns(60+(KMONTH[s][0].length+KMONTH[s+1][0].length+4)*12.6,1296,150)
      +kT(520,1294,`${KMONTH[t-1][0]},`,{s:24,b:false,f:KFS})+kAns(520+(KMONTH[t-1][0].length+2)*12.6,1296,130)+kT(520+(KMONTH[t-1][0].length+2)*12.6+140,1294,`, ${KMONTH[t+1]? KMONTH[t+1][0] : ''}`,{s:24,b:false,f:KFS});
    b+=kT(60,1372,'Respostas: '+Q.map(([,a],i)=>`${i+1}. ${a}`).join(' · ')+` · next: ${KMONTH[s+2][0]}, ${KMONTH[t][0]}`,{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage('','Months of the year','Complete as letras, ouça no 🔈 e responda às perguntas.',b,{ic:'birthday-cake'}); }),
  papainoel:S0('Carta para o Papai Noel','esc',['a7','a9'],'Carta guiada em inglês (Dear Santa, I would like…) e a lista de desejos para desenhar.',(th,R)=>{
    let b=`<rect x="50" y="276" width="900" height="748" rx="26" fill="#fffdf8" stroke="#d9cfd2" stroke-width="3"/>`+kE('santa-claus',812,292,116)+kE('christmas-tree',838,890,104)+kE('sparkles',760,300,44);
    const L=['My name is _______________ and I am ____ years old.','I live in ___________________________.','This year I was very ____________ .','I helped my ____________ with ____________ .','For Christmas, I would like _______________','and _______________ , please.','I promise to ___________________________ .','Merry Christmas!','Love, _______________'];
    b+=kT(90,352,'Dear Santa,',{s:38})+L.map((t,i)=>kT(90,424+i*66,t,{s:i===7? 30 : 26,b:i===7,f:i===7? KF : KFS})).join('');
    b+=kT(90,1006,'Ideas: good · kind · helpful · funny · brave',{s:18,b:false,c:'#8a7e80',f:KFS});
    b+=kT(60,1080,'My wish list',{s:32,c:'#7a1f35'})+['teddy-bear','bicycle','robot','kite','video-game','nesting-dolls','soccer-ball'].map((e,i)=>kE(e,420+i*74,1040,56)).join('');
    [0,1,2].forEach(i=>{ const x=60+i*300; b+=`<rect x="${x}" y="1106" width="280" height="234" rx="18" fill="#fff" stroke="#a99fa3" stroke-width="2" stroke-dasharray="9 7"/><circle cx="${x+28}" cy="1134" r="17" fill="#7a1f35"/>`+kT(x+28,1141,String(i+1),{s:18,a:'middle',c:'#fff',f:KFS}); });
    return kPage('','Dear Santa','Escreva sua carta em inglês e desenhe os presentes que quer.',b,{ic:'santa-claus',band:'#fde7ea'}); }),
  materias:S0('Horário da escola (matérias)','esc',['a7','a9'],'Matérias em inglês (Maths, Science, PE…), um horário para completar e perguntas.',(th,R)=>{
    let b=''; KSUBJ.forEach(([s,e],i)=>{ const x=50+(i%5)*181, y=280+Math.floor(i/5)*116, X=i>=5? x+90 : x; b+=kBox(X,y,170,104,i,{r:20})+kE(e,X+10,y+10,48)+kT(X+85,y+90,s,{s:kFit(s,150,24),a:'middle'})+kSpk(X+146,y+28,s,30); });
    const gx=70, gy=540, tw=110, cw=150, rh=66, D=['Monday','Tuesday','Wednesday','Thursday','Friday'], T=['1st','2nd','break','3rd','4th'];
    b+=`<rect x="${gx}" y="${gy}" width="${tw+cw*5}" height="${50+rh*5}" rx="14" fill="#fff" stroke="#2a2326" stroke-width="3"/>`;
    D.forEach((d,i)=>{ b+=`<rect x="${gx+tw+i*cw}" y="${gy}" width="${cw}" height="50" fill="${KSOFT[i]}"/>`+kT(gx+tw+i*cw+cw/2,gy+34,d,{s:kFit(d,138,22),a:'middle'}); });
    T.forEach((t,r)=>{ const y=gy+50+r*rh; b+=kT(gx+tw/2,y+42,t,{s:22,a:'middle',c:'#7a1f35'}); if (t==='break') b+=`<rect x="${gx+tw}" y="${y}" width="${cw*5}" height="${rh}" fill="#f7f3ee"/>`+kT(gx+tw+cw*2.5,y+43,'Break time!',{s:24,a:'middle',c:'#8a7e80'}); });
    for (let r=0;r<=5;r++) b+=`<line x1="${gx}" y1="${gy+50+r*rh}" x2="${gx+tw+cw*5}" y2="${gy+50+r*rh}" stroke="#cfc5c8" stroke-width="2"/>`;
    for (let c=0;c<5;c++) b+=`<line x1="${gx+tw+c*cw}" y1="${gy}" x2="${gx+tw+c*cw}" y2="${gy+50+rh*2}" stroke="#cfc5c8" stroke-width="2"/><line x1="${gx+tw+c*cw}" y1="${gy+50+rh*3}" x2="${gx+tw+c*cw}" y2="${gy+50+rh*5}" stroke="#cfc5c8" stroke-width="2"/>`;
    b+=`<rect x="${gx}" y="${gy}" width="${tw+cw*5}" height="${50+rh*5}" rx="14" fill="none" stroke="#2a2326" stroke-width="3"/>`;
    const Q=[['What’s your favourite subject?','My favourite subject is __________ because it’s __________.'],['What have you got on Monday?','On Monday I’ve got __________ and __________.'],['Which subject is difficult for you?','__________ is difficult for me.']];
    Q.forEach(([q,a],i)=>{ const y=1000+i*120; b+=kQ(60,y,i+1,q,{s:24})+kSpk(560,y-10,q,34)+kT(104,y+54,a,{s:22,b:false,f:KFS}); });
    return kPage('','My timetable','Ouça as matérias, complete o seu horário e responda às perguntas.',b,{ic:'books'}); }),
  ordinais:S0('A corrida (first, second, third…)','voc',['a7','a9'],'Quem chegou primeiro? Números ordinais com uma corrida de bichos (ou de carros, no tema transportes).',(th,R)=>{
    const g=kGroupOf(th), T=(g==='animal'||g==='go')? th : ['pets','farm','wild'][Math.floor(R.r()*3)], W=kShuf(KIDS_THEMES[T].w.filter(([w])=>!kPl(w)),R).slice(0,6), rk=kShuf([0,1,2,3,4,5],R); let b='';
    b+=`<rect x="50" y="280" width="900" height="${W.length*92+12}" rx="20" fill="#e8f3e2"/>`;
    for (let r=0;r<10;r++) for (let c=0;c<2;c++) b+=`<rect x="${872+c*16}" y="${286+r*(W.length*92)/10}" width="16" height="${(W.length*92)/10}" fill="${(r+c)%2? '#2a2326' : '#fff'}"/>`;
    W.forEach(([w,e],i)=>{ const y=286+i*92, x=736-rk[i]*104; if (i) b+=`<line x1="60" y1="${y}" x2="866" y2="${y}" stroke="#fff" stroke-width="4" stroke-dasharray="14 10"/>`;
      b+=`<circle cx="92" cy="${y+46}" r="22" fill="#fff"/>`+kT(92,y+54,String(i+1),{s:22,a:'middle',c:'#7a1f35'})+`<g transform="matrix(-1 0 0 1 ${2*x+80} 0)">${kE(e,x,y+6,80)}</g>`; });
    b+=kE('chequered-flag',906,284,40);
    W.forEach(([w,e],i)=>{ const x=60+(i%2)*450, y=905+Math.floor(i/2)*70; b+=kE(e,x,y-44,56)+kT(x+66,y,`The ${w} is`,{s:kFit(`The ${w} is`,200,26)})+kAns(x+272,y+2,150); });
    b+=KORD.map((o,i)=>`<rect x="${60+i*148}" y="1092" width="136" height="64" rx="32" fill="${KSOFT[i]}"/>`+kT(60+i*148+56,1134,o,{s:22,a:'middle'})+kSpk(60+i*148+114,1124,o,26)).join('');
    b+=kT(60,1250,'Draw the winners!',{s:26})+kT(60,1286,'1st, 2nd and 3rd',{s:20,b:false,f:KFS});
    [[1,500,1290,'2nd-place-medal'],[0,640,1270,'1st-place-medal'],[2,780,1305,'3rd-place-medal']].forEach(([p,x,y,m])=>{ b+=`<rect x="${x}" y="${y}" width="130" height="${1355-y}" rx="8" fill="${['#ffd54f','#cfd8dc','#ffcc80'][p]}" stroke="#2a2326" stroke-width="2.5"/>`+kE(m,x+45,y+6,40)+`<rect x="${x+20}" y="${y-96}" width="90" height="90" rx="10" fill="#fff" stroke="#a99fa3" stroke-width="2" stroke-dasharray="8 6"/>`; });
    b+=kT(60,1372,'Respostas: '+W.map(([w],i)=>`${w} ${KORD[rk[i]]}`).join(' · '),{s:12,b:false,c:'#b2a7aa',f:KFS});
    return kPage(T,'The race!','Quem está mais perto da chegada? Escreva: first, second, third…',b); }),
});
/* folhas com áudio (filtro “Só com áudio”), inclusive as do lote anterior */
for (const k of ['sons','dezena','vogais','profissoes','comodos','acoes','quemsou','meses','materias','ordinais','espio','trilha','movimento','metade','silabas','receita','comparar']) if (KIDS_SHEETS[k]) KIDS_SHEETS[k].audio=true;
