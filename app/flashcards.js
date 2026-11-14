/* =========================================================
   Sotaque · flashcards
   Baralhos de palavras e frases (frente no idioma, verso em português, com exemplo e áudio).
   O aluno estuda em casa com repetição espaçada (caixas de Leitner): o que ele erra volta logo,
   o que ele acerta volta em 1, 2, 4, 8 e 16 dias. A professora monta, estuda junto na aula e manda.
   Dados: DB.decks (baralhos) e DB.flashp (progresso: "aluno|baralho" → {cartão: {box, due}}).
   ========================================================= */
const FLASH_INT=[0,1,2,4,8,16], FLASH_MAX=20;
/* [idioma, nível, título, cartões "frente = verso | exemplo"] */
const FLASH_SEED=[
  ['EN','A2','Au Pair · Childcare',`change diapers = trocar fralda | I change the baby’s diapers after lunch.
put to bed = colocar para dormir | I put the kids to bed at eight o’clock.
pick up from school = buscar na escola | I pick Noah up from school at three.
give a bath = dar banho | I give Emma a bath before dinner.
make a snack = fazer um lanche | Let’s make a healthy snack!
help with homework = ajudar com o dever de casa | I help Noah with his homework every afternoon.
wake the kids up = acordar as crianças | I wake the kids up at seven.
get them dressed = vestir as crianças | I get them dressed for school.
tidy up the toys = arrumar os brinquedos | Let’s tidy up the toys together.
babysit = cuidar de crianças por algumas horas | I often babysit my neighbour’s kids.
toddler = criança de 1 a 3 anos | I love working with toddlers.
host family = família anfitriã | My host family lives in Denver.
playground = parquinho | We go to the playground after school.
car seat = cadeirinha do carro | Always check the car seat before driving.
nap time = hora da soneca | Nap time is from one to three.
bedtime story = história para dormir | She always wants a bedtime story.`],
  ['EN','B1','Au Pair · Interview phrases',`That’s a good question. Let me think… = Boa pergunta. Deixa eu pensar… | That’s a good question. Let me think… I’d say I’m patient.
Could you repeat the question, please? = Pode repetir a pergunta, por favor? | Sorry, could you repeat the question, please?
I’m looking forward to… = Estou ansiosa para… | I’m looking forward to meeting your family.
I would stay calm. = Eu manteria a calma. | If the child got hurt, I would stay calm.
I’d call the host parents. = Eu ligaria para os pais. | If he had a fever, I’d call the host parents.
I’ve always loved working with children. = Sempre amei trabalhar com crianças. | I’ve always loved working with children, since I was a teenager.
I’d like to feel part of the family. = Eu gostaria de me sentir parte da família. | I’d like to feel part of the family and share my culture.
I’m a bit nervous. = Estou um pouco nervosa. | I’m a bit nervous, but I’m happy to be here.
homesick = com saudade de casa | If I felt homesick, I would call my family.
For example… = Por exemplo… | For example, last summer I took care of my cousins.`],
  ['EN','B1','Everyday phrasal verbs',`wake up = acordar | I wake up at six every day.
look after = cuidar de | She looks after her little brother.
look for = procurar | I’m looking for my keys.
find out = descobrir | I found out the truth yesterday.
give up = desistir | Don’t give up! You’re almost there.
turn on = ligar (aparelho) | Can you turn on the lights?
turn off = desligar | Turn off your phone, please.
pick up = buscar / pegar | I’ll pick you up at eight.
put on = vestir / colocar | Put on your coat, it’s cold.
take off = tirar (roupa) / decolar | The plane takes off at noon.
run out of = ficar sem | We ran out of milk.
get along with = se dar bem com | I get along with my sister.`],
  ['EN','A2','Travel essentials',`boarding pass = cartão de embarque | Can I see your boarding pass, please?
luggage = bagagem | How much luggage do you have?
carry-on = bagagem de mão | I only have a carry-on.
departure = partida | The departure is at 10:15.
delay = atraso | There’s a two-hour delay.
round trip = ida e volta | I’d like a round trip ticket.
customs = alfândega | We went through customs quickly.
I’d like to book a room. = Gostaria de reservar um quarto. | Hi! I’d like to book a room for two nights.
How much is it? = Quanto custa? | How much is it for one night?
Where is the restroom? = Onde fica o banheiro? | Excuse me, where is the restroom?`],
  ['FR','A1','Les essentiels du quotidien',`Bonjour ! = Olá! / Bom dia! | Bonjour, madame !
Merci beaucoup. = Muito obrigado. | Merci beaucoup pour votre aide.
S’il vous plaît = Por favor | Un café, s’il vous plaît.
Je voudrais… = Eu gostaria… | Je voudrais un croissant.
Combien ça coûte ? = Quanto custa? | Combien ça coûte, ce livre ?
Où sont les toilettes ? = Onde fica o banheiro? | Excusez-moi, où sont les toilettes ?
Je ne comprends pas. = Não entendo. | Pardon, je ne comprends pas.
Pouvez-vous répéter ? = Pode repetir? | Pouvez-vous répéter, s’il vous plaît ?
À bientôt ! = Até logo! | Merci, à bientôt !
Excusez-moi. = Com licença. / Desculpe. | Excusez-moi, monsieur.`],
  ['FR','B1','Connecteurs pour argumenter',`d’abord = primeiro | D’abord, il faut lire le texte.
ensuite = em seguida | Ensuite, on discute en groupe.
cependant = no entanto | Le film est long ; cependant, il est passionnant.
pourtant = mesmo assim | Il pleuvait, pourtant nous sommes sortis.
donc = portanto | Je pense, donc je suis.
en revanche = em compensação | Paris est cher ; en revanche, la vie culturelle est riche.
de plus = além disso | De plus, le prix est raisonnable.
bien que = embora (+ subjuntivo) | Bien qu’il soit fatigué, il travaille.
afin de = a fim de | Il étudie afin de réussir l’examen.
en effet = de fato | Elle est en retard ; en effet, le bus est tombé en panne.`],
];
const parseCards=txt=>String(txt||'').split('\n').map(l=>l.trim()).filter(Boolean).map(l=>{ const [fb,ex='']=l.split('|'), k=fb.indexOf('='); return k<0? null : {f:fb.slice(0,k).trim(),b:fb.slice(k+1).trim(),ex:ex.trim()}; }).filter(c=>c&&c.f&&c.b);
const cardsText=d=>d.cards.map(c=>`${c.f} = ${c.b}${c.ex? ' | '+c.ex : ''}`).join('\n');
function seedDecks(){ return FLASH_SEED.map(([lang,level,title,txt])=>({id:'d'+hashStr(lang+title),lang,level,title,teacherId:null,students:[],cards:parseCards(txt).map((c,i)=>({id:'c'+i,...c})),createdAt:now()})); }
function ensureFlash(){ if (!DB.decks) DB.decks=seedDecks(); if (!DB.flashp) DB.flashp={}; }
const deckById=id=>DB.decks.find(d=>d.id===id);
const decksFor=()=>(DB.decks||[]).filter(d=>d.lang===myLang()&&(!d.teacherId||d.teacherId===S.me));
const decksOfStudent=sid=>(DB.decks||[]).filter(d=>d.students?.includes(sid));
const fpOf=(sid,did)=>((DB.flashp ||= {})[sid+'|'+did] ||= {});
const dueCards=(sid,d)=>{ const p=fpOf(sid,d.id), t=now(); return d.cards.filter(c=>!p[c.id]||p[c.id].due<=t); };
const learned=(sid,d)=>{ const p=fpOf(sid,d.id); return d.cards.filter(c=>(p[c.id]?.box||0)>=3).length; };
const flashDueCount=sid=>decksOfStudent(sid).reduce((a,d)=>a+Math.min(FLASH_MAX,dueCards(sid,d).length),0);
const flashArt=(d,o)=>quadro(LV_PAL[d.level]||'menta','livro',hashStr(d.title)%997,o);

/* ---------- cartões na tela (aluno estudando, professora vendo como aluno, ou dentro da Aula) ---------- */
function flashStart(did,saveIt){
  const d=deckById(did), me=ME(), pool= saveIt? dueCards(me.id,d) : d.cards.slice();
  const q=shuffle(pool.map(c=>c.id)).slice(0,FLASH_MAX);
  S.fs={did,q,i:0,flip:false,save:saveIt,st:{sim:0,quase:0,nao:0},again:{}};
}
function flashStage(did,saveIt,embed){
  const d=deckById(did); if (!d) return '<p class="muted">Baralho não encontrado.</p>';
  if (!S.fs||S.fs.did!==did||S.fs.save!==saveIt) flashStart(did,saveIt);
  const F=S.fs, rev=!!S.fdir, total=F.q.length;
  if (!total) return `<div class="panel fl-end"><h2>Tudo em dia ✦</h2><p class="meta">Nenhum cartão para revisar agora. Volte amanhã: o que você acertou aparece de novo no tempo certo.</p></div>`;
  if (F.i>=total){ const n=F.st.sim+F.st.quase+F.st.nao;
    return `<div class="panel fl-end"><p class="eyebrow">Fim da rodada</p><h2>${F.st.sim>=n*.8? 'Mandou muito bem!' : 'Bom treino!'}</h2>
      <div class="mini-prof pl-chips"><span><small>Acertei</small><b>${F.st.sim}</b></span><span><small>Quase</small><b>${F.st.quase}</b></span><span><small>Errei</small><b>${F.st.nao}</b></span></div>
      <p class="meta muted">${F.save? 'O que você errou volta logo; o que acertou, só daqui a alguns dias.' : 'Modo de visualização: nada foi salvo.'}</p>
      <div class="row-btns"><button class="btn primary" data-act="flash-again" data-id="${did}">Estudar de novo</button>${embed? '' : `<a class="btn" href="#flash">Voltar aos baralhos</a>`}</div></div>`; }
  const c=d.cards.find(x=>x.id===F.q[F.i]), front= rev? c.b : c.f, back= rev? c.f : c.b;
  const say=(t)=>{ const key='a'+hashStr(d.lang+t); AUD[key] ||= {text:t,lang:d.lang}; return `<button class="btn small" data-act="say" data-k="${key}">${PLAY_ICON}Ouvir</button>`; };
  return `<div class="fl-wrap ${embed?'embed':''}">
    <div class="fl-top"><span class="pill-lang">${F.i+1} de ${total}</span><div class="progress"><i style="width:${F.i/total*100}%"></i></div><button class="link" data-act="flash-dir">${rev? 'Português → '+langName(d.lang) : langName(d.lang)+' → Português'}</button></div>
    <button class="fl-card ${F.flip?'flip':''}" data-act="flash-flip" aria-label="${F.flip? 'Cartão virado' : 'Virar o cartão'}">
      <span class="fl-face"><small class="eyebrow">${F.flip? (rev? langName(d.lang) : 'Português') : (rev? 'Português' : langName(d.lang))}</small>${F.flip? `<small class="fl-front">${esc(front)}</small>` : ''}<b>${esc(F.flip? back : front)}</b>${F.flip&&c.ex? `<i>${esc(c.ex)}</i>` : ''}${F.flip? '' : '<small class="muted">toque para virar</small>'}</span></button>
    <div class="fl-say">${say(c.f)}${F.flip&&c.ex? say(c.ex).replace('Ouvir','Ouvir o exemplo') : ''}</div>
    ${F.flip? `<div class="fl-ans"><button class="btn fl-no" data-act="flash-ans" data-v="nao">Errei</button><button class="btn fl-mid" data-act="flash-ans" data-v="quase">Quase</button><button class="btn primary fl-yes" data-act="flash-ans" data-v="sim">Acertei</button></div>`
      : `<button class="btn primary big" data-act="flash-flip">Virar o cartão</button>`}
  </div>`;
}
function flashAnswer(v){
  const F=S.fs, d=deckById(F.did), cid=F.q[F.i];
  F.st[v]++;
  if (F.save){ const p=fpOf(ME().id,d.id), o=p[cid]||{box:0};
    o.box= v==='sim'? Math.min(5,o.box+1) : v==='quase'? Math.max(1,o.box) : 0;
    o.due= now()+(v==='nao'? 0 : FLASH_INT[o.box])*DAY; o.seen=now(); p[cid]=o; save(); }
  if (v==='nao'&&!F.again[cid]){ F.again[cid]=1; F.q.push(cid); }
  F.i++; F.flip=false; render();
}

/* ---------- telas ---------- */
function deckCard(d,T){
  const me=ME(), n=d.cards.length, due=T? 0 : Math.min(FLASH_MAX,dueCards(me.id,d).length);
  return `<article class="bcard"><a class="bcard-art" href="#flash-${d.id}">${flashArt(d,{w:420,h:150,frame:false})}<span class="lvl">${d.level}</span></a>
    <div class="bcard-b"><b>${esc(d.title)}</b><small>${n} ${n===1?'cartão':'cartões'}${T? ` · ${d.students.length? `com ${d.students.length} ${d.students.length===1?'aluno':'alunos'}` : 'ainda com nenhum aluno'}` : ` · ${learned(me.id,d)} aprendidos`}</small>
      <div class="row-btns" style="margin-top:6px">${T? `<a class="btn small primary" href="#flash-${d.id}">Estudar</a><a class="btn small" href="#flash-ed-${d.id}">Editar e mandar</a>` : `<a class="btn small ${due?'primary':''}" href="#flash-${d.id}">${due? `Estudar ${due}` : 'Revisar'}</a>`}</div></div></article>`;
}
function viewFlashLib(){
  const list=decksFor().filter(d=>d.cards.length);
  return `${libHeader('flash')}<div class="bgrid">${list.map(d=>deckCard(d,true)).join('')||'<p class="muted">Nenhum baralho ainda.</p>'}</div>`;
}
function viewFlashStudent(me){
  const list=decksOfStudent(me.id), due=flashDueCount(me.id);
  return `<div style="${sVars(me)}"><div class="hello"><h1>Flashcards</h1><p class="meta">${list.length? (due? `Você tem ${due} ${due===1?'cartão':'cartões'} para revisar hoje. Uns minutinhos por dia fazem diferença!` : 'Tudo revisado por hoje ✦') : `Quando ${aProf()} mandar um baralho, ele aparece aqui.`}</p></div>
    ${list.length? `<div class="bgrid">${list.map(d=>deckCard(d,false)).join('')}</div>` : `<div class="panel"><div class="empty">${quadro(me.palette,'livro',me.seed,{w:320,h:150})}<p>Nenhum baralho ainda.</p></div></div>`}</div>`;
}
function viewFlashPlay(did){
  const d=deckById(did); if (!d) return '<div class="panel"><p>Baralho não encontrado.</p><a class="btn" href="#flash">Flashcards</a></div>';
  const T=isT(), vars= T? sVars({palette:LV_PAL[d.level]||'menta'}) : sVars(ME());
  return `<div style="${vars};max-width:720px;margin:0 auto"><a class="link" href="${T? '#flash' : '#flash'}" style="display:inline-block;margin-bottom:12px;text-decoration:none">← ${T? 'Biblioteca · Flashcards' : 'Flashcards'}</a>
    ${T? `<div class="notice prac-bar"><div><b>Modo aluno.</b> Você está estudando como o aluno estuda. Nada é salvo.</div><a class="btn small" href="#flash-ed-${d.id}">Editar e mandar</a></div>` : ''}
    <div class="hello" style="margin-top:12px"><p class="eyebrow">${d.level} · ${langName(d.lang)}</p><h1>${esc(d.title)}</h1></div>
    ${flashStage(did,!T,false)}
    <details class="transc" style="margin-top:22px"><summary>Ver todos os cartões (${d.cards.length})</summary><div class="fl-list">${d.cards.map(c=>`<div><b>${esc(c.f)}</b><span>${esc(c.b)}</span>${c.ex? `<i>${esc(c.ex)}</i>` : ''}</div>`).join('')}</div></details></div>`;
}
function viewFlashEd(did){
  const d=deckById(did); if (!d) return '<div class="panel"><p>Baralho não encontrado.</p></div>';
  const studs=students(), D=(S.fd&&S.fd.id===did)? S.fd : (S.fd={id:did,title:d.title,level:d.level,txt:cardsText(d),students:d.students.filter(id=>user(id)?.teacherId===S.me)});
  const n=parseCards(D.txt).length;
  return `<a class="link" href="#flash" style="display:inline-block;margin-bottom:16px;text-decoration:none">← Biblioteca · Flashcards</a>
  <div class="ed"><div class="stack" style="gap:14px"><div><h1>${d.cards.length? 'Editar baralho' : 'Novo baralho'}</h1><p class="meta">Um cartão por linha: <b>frente = verso | exemplo</b>. O exemplo é opcional.</p></div>
    <div class="panel"><label class="field" for="fd-title">Nome do baralho<input type="text" id="fd-title" data-fd="title" value="${esc(D.title)}" placeholder="ex.: Food and drinks"></label>
      <label class="field" for="fd-lv">Nível<select id="fd-lv" data-fd="level">${LEVELS.map(l=>`<option ${D.level===l?'selected':''}>${l}</option>`).join('')}</select></label>
      <label class="field" for="fd-txt">Cartões <small id="fd-n">${n} ${n===1?'cartão':'cartões'}</small><textarea id="fd-txt" data-fd="txt" style="min-height:300px;font-family:ui-monospace,monospace;font-size:14px" placeholder="${myLang()==='FR'? 'le petit-déjeuner = café da manhã | Je prends le petit-déjeuner à 8 h.' : 'breakfast = café da manhã | I have breakfast at 8.'}">${esc(D.txt)}</textarea></label></div></div>
  <aside class="stack ed-side" style="gap:16px">
    <section class="panel"><h2>Mandar para</h2><p class="meta muted">O baralho aparece na aba Flashcards do aluno.</p><div class="sel-list">${studs.map(s=>`<label class="sel"><input type="checkbox" data-fd-st="${s.id}" ${D.students.includes(s.id)?'checked':''}>${avatar(s,28)}<span>${esc(s.name)}<br><small>${esc(s.level)}</small></span></label>`).join('')||'<p class="muted">Nenhum aluno ainda.</p>'}</div></section>
    <p class="err" id="fd-err"></p><button class="btn primary big" data-act="flash-save">Salvar</button>
    <a class="btn" href="#flash-${d.id}">Estudar como aluno</a>
    ${d.teacherId===S.me? `<button class="btn small ghost" style="align-self:flex-start" data-act="flash-del" data-id="${d.id}">Excluir baralho</button>` : ''}
  </aside></div>`;
}
/* baralhos do aluno no caderno (vista da professora) */
function flashPanel(s){
  const list=decksOfStudent(s.id); if (!isT()||!list.length) return '';
  return `<section class="panel"><div class="panel-h"><h2>Flashcards</h2><a class="link" href="#flash">Biblioteca</a></div><div class="rows">${list.map(d=>`<a class="row" href="#flash-ed-${d.id}"><div class="row-m"><b>${esc(d.title)}</b><small>${learned(s.id,d)} de ${d.cards.length} aprendidos · ${Math.min(FLASH_MAX,dueCards(s.id,d).length)} para revisar</small></div></a>`).join('')}</div></section>`;
}
const FLASH_ACT={
  'flash-flip'(){ if (!S.fs) return; S.fs.flip=!S.fs.flip; render(); },
  'flash-ans'(el){ flashAnswer(el.dataset.v); },
  'flash-again'(el){ flashStart(el.dataset.id,S.fs.save); render(); },
  'flash-dir'(){ S.fdir=!S.fdir; if (S.fs) S.fs.flip=false; render(); },
  'flash-new'(){ const d={id:'d'+uid(),lang:myLang(),level:'A2',title:'',teacherId:S.me,students:[],cards:[],createdAt:now()}; DB.decks.push(d); save(); S.fd=null; location.hash='flash-ed-'+d.id; },
  'flash-save'(){ const D=S.fd, d=deckById(D.id), cards=parseCards(D.txt);
    if (!D.title.trim()){ $('#fd-err').textContent='Dê um nome ao baralho.'; $('#fd-title').focus(); return; }
    if (!cards.length){ $('#fd-err').textContent='Escreva pelo menos um cartão: frente = verso.'; $('#fd-txt').focus(); return; }
    const old=Object.fromEntries(d.cards.map(c=>[c.f,c.id])); let k=d.cards.length;
    d.title=D.title.trim(); d.level=D.level; d.cards=cards.map(c=>({id:old[c.f]||'c'+uid()+(k++),...c}));
    const others=d.students.filter(id=>user(id)?.teacherId!==S.me); d.students=[...others,...D.students];
    save(); S.fd=null; location.hash='flash'; toast(D.students.length? `Baralho salvo e mandado para ${D.students.length} ${D.students.length===1?'aluno':'alunos'}` : 'Baralho salvo'); },
  'flash-del'(el){ confirmBox('Excluir este baralho?','Excluir',()=>{ DB.decks=DB.decks.filter(d=>d.id!==el.dataset.id); save(); S.fd=null; location.hash='flash'; toast('Baralho excluído'); },'Ele some da aba Flashcards dos alunos.'); },
};
function onFlashInput(e){
  const el=e.target;
  if (el.dataset.fd&&S.fd){ S.fd[el.dataset.fd]=el.value; if (el.dataset.fd==='txt'){ const n=parseCards(el.value).length, x=$('#fd-n'); if (x) x.textContent=`${n} ${n===1?'cartão':'cartões'}`; } }
  if (el.dataset.fdSt&&S.fd){ const id=el.dataset.fdSt; S.fd.students= el.checked? [...new Set([...S.fd.students,id])] : S.fd.students.filter(x=>x!==id); }
}
document.addEventListener('keydown',e=>{ if (!S.fs||!['flashPlay','aulaPlay'].includes(S.route?.name)||e.target.matches('input,textarea,select')) return;
  if (e.key===' '){ e.preventDefault(); FLASH_ACT['flash-flip'](); }
  if (S.fs.flip&&['1','2','3'].includes(e.key)) flashAnswer({1:'nao',2:'quase',3:'sim'}[e.key]); });
