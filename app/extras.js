/* =========================================================
   Sotaque · ideias inspiradas no Ellii
   1. Leitura e escuta do dia: um texto ou um áudio curto do nível do aluno, com 3 perguntas (uns 3 minutos).
      Alterna leitura e escuta. Fica no caderno do aluno, com a sequência de dias seguidos.
      O progresso fica no próprio aluno (user.daily), que é o que o aluno pode gravar na nuvem.
   2. Pacotes de estudo: várias atividades em sequência, liberadas uma de cada vez (1 por semana, a cada 3 dias
      ou tudo de uma vez). Tarefas com releaseAt só aparecem para o aluno no dia certo.
   3. Comentário em cada questão na correção (t.qfb).
   ========================================================= */

/* ---------- 1. leitura e escuta do dia ---------- */
const DAILY_N=3;
function dailyPick(s,day=dateKey(now())){
  const lv=levelOf(s)||'A2', base=DB.bank.filter(b=>b.lang===s.lang&&!b.mine&&b.questions.filter(q=>q.type!=='open').length>=DAILY_N);
  const pool=t=>{ const at=base.filter(b=>b.topic===t&&b.level===lv); return at.length? at : base.filter(b=>b.topic===t); };
  const n=Math.floor(new Date(day+'T12:00').getTime()/864e5), escuta=n%2===0, P=pool(escuta? 'Escuta' : 'Leitura'), Q=P.length? P : pool(escuta? 'Leitura' : 'Escuta');
  if (!Q.length) return null;
  return Q[(hashStr(s.id)+n)%Q.length];
}
const dailyOf=s=>(s.daily ||= {});
function dailyStreak(s){
  const d=dailyOf(s); let n=0, t=dayStart(now()); if (!d[dateKey(t)]) t=addDays(t,-1);
  while (d[dateKey(t)]){ n++; t=addDays(t,-1); } return n;
}
function dailyText(b){ return b.topic==='Leitura'? (b.instructions||'').replace(/^[^\n]*\n\n/,'') : ''; }
function dailyCard(s){
  const b=dailyPick(s); if (!b) return '';
  const today=dailyOf(s)[dateKey(now())], st=dailyStreak(s), esc_=b.topic==='Escuta', EN=s.lang!=='FR';
  return `<section class="panel daily">${quadro(s.palette,esc_? 'fones' : 'livro',hashStr(b.id)%97,{w:520,h:150,frame:false})}
    <div class="daily-b"><p class="eyebrow">${esc_? (EN? 'Listening of the day' : 'L’écoute du jour') : (EN? 'Reading of the day' : 'La lecture du jour')} · ${b.level}</p>
    <h2>${esc(b.title.replace(/^(Listening|Reading|Écoute|Lecture) · /,''))}</h2>
    ${today? `<p class="meta">Feito hoje ✓ · ${today.got} de ${today.n} certas${st>1? ` · <b>${st} dias seguidos</b> 🔥` : ''}</p><a class="btn small" href="#dia">Ver de novo</a>`
      : `<p class="meta">${esc_? 'Um áudio curto' : 'Um texto curto'} e ${DAILY_N} perguntas. Uns 3 minutos.${st? ` Você está há <b>${st} ${st===1?'dia':'dias'}</b> seguidos!` : ''}</p><a class="btn primary" href="#dia">Começar</a>`}</div></section>`;
}
function viewDaily(me){
  const b=dailyPick(me); if (!b) return '<div class="panel"><p>Nada para hoje.</p></div>';
  const day=dateKey(now());
  if (!S.dia||S.dia.day!==day||S.dia.bank!==b.id) S.dia={day,bank:b.id,done:!!dailyOf(me)[day],t:{id:'dia',title:b.title,instructions:'',audio:b.audio||'',studentId:me.id,questions:b.questions.filter(q=>q.type!=='open').slice(0,DAILY_N),answers:{},marks:{},status:'pendente'}};
  const D=S.dia, t=D.t, text=dailyText(b), EN=me.lang!=='FR', st=dailyStreak(me);
  const media= t.audio? `<div class="panel">${audioBox(t.audio,me.lang,{transcript:D.done})}</div>` : text? `<div class="panel read"><div class="prose" style="white-space:pre-wrap">${esc(text)}</div></div>` : '';
  const qs= D.done? t.questions.map((q,i)=>qResult(t,q,i,'student')).join('') : t.questions.map((q,i)=>qAnswer(t,q,i)).join('');
  const sc=t.questions.reduce((a,q)=>a+(gradeQ(t,q)||0),0);
  return `<div style="${sVars(me)};max-width:780px"><a class="link" href="#inicio" style="display:inline-block;margin-bottom:12px;text-decoration:none">← Hoje</a>
    <div class="hello"><p class="eyebrow">${t.audio? (EN? 'Listening of the day' : 'L’écoute du jour') : (EN? 'Reading of the day' : 'La lecture du jour')} · ${b.level}</p><h1>${esc(b.title.replace(/^(Listening|Reading|Écoute|Lecture) · /,''))}</h1></div>
    ${D.done&&Object.keys(t.answers).length? `<div class="score" style="margin-bottom:16px"><div class="big">${fmtNum(sc)}<span>/${t.questions.length}</span></div><p><b>${sc===t.questions.length? 'Perfeito!' : 'Feito!'}</b>${st? ` · ${st} ${st===1?'dia':'dias'} seguidos 🔥` : ''}<br><span class="meta">Volte amanhã para a próxima. Um pouquinho por dia faz diferença.</span></p></div>`
      : D.done? `<div class="notice ok" style="margin-bottom:16px"><div>Você já fez a de hoje ✓. Pode ler ou ouvir de novo à vontade.</div></div>` : ''}
    <div class="stack" style="gap:14px">${media}${qs}
    ${D.done? '<a class="btn" href="#inicio">Voltar para Hoje</a>' : `<button class="btn primary big" data-act="dia-check">Conferir</button>`}</div></div>`;
}
function dailyPanel(s){
  if (!isT()) return ''; const d=dailyOf(s), st=dailyStreak(s);
  const days=[...Array(14)].map((_,k)=>{ const t=addDays(dayStart(now()),k-13), x=d[dateKey(t)]; return `<i class="${x? 'on' : ''}" title="${fShort.format(t)}${x? ` · ${x.got}/${x.n}` : ''}"></i>`; }).join('');
  const total=Object.keys(d).length;
  return `<section class="panel"><div class="panel-h"><h2>Leitura e escuta do dia</h2>${st? `<span class="count">${st} 🔥</span>` : ''}</div>
    <div class="daily-dots" aria-label="Últimos 14 dias">${days}</div>
    <p class="meta">${total? `${total} ${total===1?'dia feito':'dias feitos'} ao todo${st? ` · ${st} seguidos agora` : ''}.` : `${esc(s.name.split(' ')[0])} ainda não fez nenhuma. Aparece todo dia no caderno dele, no nível ${levelOf(s)||'dele'}.`}</p></section>`;
}

/* ---------- 2. pacotes de estudo ---------- */
const PACKS_SEED=[
  ['EN','A1','Primeiros passos','O básico para se apresentar e falar da família.',['Verb to be','Subject pronouns','Possessive adjectives','My family','There is / there are']],
  ['EN','A2','Falar do passado','Do was/were ao past continuous, com uma leitura no fim.',['Was and were','Past simple · regular verbs','Past simple · questions and negatives','Past continuous','A day in London']],
  ['EN','A2','Viagem e cidade','Direções, transporte e situações de viagem.',['Listening · Excuse me, where is…?','Prepositions of movement','Listening · Lost luggage','Reading · A hostel review','Phrasal verbs: travel']],
  ['EN','B1','Experiências e planos','Present perfect, futuro e condicionais.',['Present perfect: ever and never','Present perfect · for and since','Will or going to?','First conditional','Homework · Life experiences']],
  ['EN','B1','Au Pair: rumo à entrevista','Tudo para a entrevista de inglês da agência.',['Au Pair · The interview: all about you','Au Pair · Experience with children','Au Pair · What would you do if…?','Au Pair · Why au pair? Life in the USA','Au Pair · Interview simulation (speaking)']],
  ['EN','B2','Inglês para o trabalho','Entrevista, e-mails e linguagem profissional.',['A job interview','Reporting verbs','Podcast: working from home','Passive voice','Homework · Work and careers']],
  ['FR','A1','Premiers pas','Se présenter, être et avoir, et le café.',['Se présenter','Être et avoir','Les articles','Les verbes en -er','Au café : commander']],
  ['FR','A2','Raconter au passé','Le passé composé, du début au récit.',['Passé composé avec avoir','Passé composé avec être','Passé composé : être ou avoir ?','Le week-end de Léa','Devoirs · Mes vacances']],
];
const packsFor=()=>PACKS_SEED.filter(p=>p[0]===myLang()).map(([lang,lv,title,desc,items])=>({lang,lv,title,desc,ids:items.map(t=>DB.bank.find(b=>b.lang===lang&&b.title===t)?.id).filter(Boolean)})).filter(p=>p.ids.length>=3);
/* lista de atividades de um pacote: o que vai ser enviado, em que ordem e quando */
const packTypes=b=>[...new Set(b.questions.map(q=>q.type))].map(k=>`<span>${QT_SHORT[k]||k}</span>`).join('')+(hasAudio(b)? '<span class="aud-chip">♪</span>' : '');
function packItems(ids,o={}){
  return `<ol class="pk-list">${ids.map((id,k)=>{ const b=DB.bank.find(x=>x.id===id); if (!b) return '';
    const when=o.dates? o.dates[k] : '';
    return `<li><span class="pk-n">${k+1}</span><div class="pk-b"><b>${esc(b.title)}</b><small>${b.level} · ${esc(b.topic)} · ${b.questions.length} questões${when? ` · <span class="pk-when">${when}</span>` : ''}</small><span class="typechips">${packTypes(b)}</span></div>
      <span class="pk-act"><a class="btn small ghost" href="#praticar-${b.id}" target="_blank" rel="noopener" title="Abrir como o aluno vê, numa aba nova">${EYE_ICON}Ver</a>${o.edit? `<button type="button" class="btn small ghost" data-act="pk-up" data-k="${k}" ${k? '' : 'disabled'} aria-label="Subir ${esc(b.title)}">↑</button><button type="button" class="btn small ghost" data-act="pk-rm" data-k="${k}" ${ids.length>1? '' : 'disabled'} aria-label="Tirar ${esc(b.title)}">×</button>` : ''}</span></li>`; }).join('')}</ol>`;
}
function packDates(){
  const P=S.pk; if (!P) return [];
  const ev=+($('#pk-every')?.value ?? 7), st=$('#pk-start')?.value||dateKey(now()), start=fromInputs(st,'00:00');
  const f=d=>new Date(d).toLocaleDateString('pt-BR',{weekday:'short',day:'2-digit',month:'2-digit'});
  return P.ids.map((_,k)=>{ const rel=start+k*ev*DAY; return rel<=now()? 'liberada na hora' : 'libera '+f(rel); });
}
function packRefresh(){ const P=S.pk, box=$('#pk-items'); if (!P||!box) return;
  box.innerHTML=packItems(P.ids,{edit:true,dates:packDates()}); const h=document.querySelector('form[data-form=pack] input[name=ids]'); if (h) h.value=P.ids.join(',');
  const c=$('#pk-count'); if (c) c.textContent=`${P.ids.length} ${P.ids.length===1? 'atividade' : 'atividades'}`; }
function packsHtml(){
  const list=packsFor(); if (!list.length) return '';
  return `<section class="packs"><div class="panel-h" style="margin-bottom:10px"><h2>Pacotes de estudo</h2><small class="muted">Várias atividades em sequência, liberadas uma de cada vez.</small></div>
    <div class="packs-row">${list.map((p,k)=>`<article class="pack"><span class="lvl inline" style="background:${PAL[LV_PAL[p.lv]].a}">${p.lv}</span><b>${esc(p.title)}</b><small>${esc(p.desc)}</small>
      <details class="pk-peek"><summary>Ver as ${p.ids.length} atividades</summary><ol>${p.ids.map(id=>{ const b=DB.bank.find(x=>x.id===id); return `<li><a href="#banco-${b.id}">${esc(b.title)}</a> <small class="muted">${b.questions.length} q.</small></li>`; }).join('')}</ol></details>
      <button class="btn small primary" data-act="pack-open" data-k="${k}">Ver e mandar</button></article>`).join('')}</div></section>`;
}
function packModal(ids,title){
  const bs=ids.map(id=>DB.bank.find(b=>b.id===id)).filter(Boolean), studs=students();
  S.pk={ids:bs.map(b=>b.id)};
  openModal(`<form data-form="pack"><h2>Pacote de estudo</h2>
    <input type="hidden" name="ids" value="${bs.map(b=>b.id).join(',')}">
    <label class="field" for="pk-title">Nome do pacote<input type="text" id="pk-title" name="title" required value="${esc(title||'Pacote · '+bs[0].title)}"></label>
    <div class="pk-box"><div class="panel-h"><b>O que vai ser enviado</b><small class="muted" id="pk-count">${bs.length} atividades</small></div>
      <p class="meta muted" style="margin:0">Nesta ordem. Toque em “Ver” para abrir a atividade como o aluno vê. Dá para tirar (×) ou mudar a ordem (↑).</p>
      <div id="pk-items">${packItems(S.pk.ids,{edit:true})}</div></div>
    <div class="two"><label class="field" for="pk-every">Ritmo<select id="pk-every" name="every" data-pk="1"><option value="7">Uma por semana</option><option value="3">Uma a cada 3 dias</option><option value="1">Uma por dia</option><option value="0">Todas de uma vez</option></select></label>
      <label class="field" for="pk-start">Primeira atividade em<input type="date" id="pk-start" name="start" data-pk="1" value="${dateKey(now())}"></label></div>
    <fieldset><legend>Para quem</legend><div class="sel-list">${studs.map(s=>`<label class="sel"><input type="checkbox" name="st" value="${s.id}" ${S.preStudent===s.id?'checked':''}>${avatar(s,28)}<span>${esc(s.name)}<br><small>${esc(s.level)}</small></span></label>`).join('')}</div></fieldset>
    <p class="meta muted">Cada atividade aparece para o aluno no dia dela, com prazo de uma semana. Você acompanha tudo em Homework.</p>
    <p class="err" id="pk-err"></p><div class="actions"><button type="button" class="btn" data-act="close">Cancelar</button><button class="btn primary">Mandar pacote</button></div></form>`,{wide:true});
  packRefresh();
}
const EXTRA_ACT={
  'dia-check'(){ const D=S.dia, me=ME(), t=D.t, left=t.questions.filter(q=>!isAnswered(t,q)).length;
    if (left){ toast(`Falta${left>1?'m':''} ${left} ${left===1?'pergunta':'perguntas'}.`); return; }
    const got=t.questions.reduce((a,q)=>a+(gradeQ(t,q)||0),0); dailyOf(me)[D.day]={bank:D.bank,got,n:t.questions.length,at:now()};
    D.done=true; save(); render(); window.scrollTo(0,0); },
  'pack-open'(el){ const p=packsFor()[+el.dataset.k]; if (p) packModal(p.ids,p.title); },
  'combo-pack'(){ packModal(S.combo||[]); },
  'pk-rm'(el){ const P=S.pk; if (!P||P.ids.length<2) return; P.ids.splice(+el.dataset.k,1); packRefresh(); },
  'pk-up'(el){ const P=S.pk, k=+el.dataset.k; if (!P||!k) return; [P.ids[k-1],P.ids[k]]=[P.ids[k],P.ids[k-1]]; packRefresh(); },
};
const EXTRA_FORMS={
  pack(form,fd){ const sts=fd.getAll('st'), ids=fd.get('ids').split(',').filter(Boolean), every=+fd.get('every'), title=fd.get('title').trim();
    if (!sts.length){ $('#pk-err').textContent='Escolha pelo menos um aluno.'; return; }
    const start=fromInputs(fd.get('start')||dateKey(now()),'00:00'), pid='pk'+uid(), bs=ids.map(id=>DB.bank.find(b=>b.id===id)).filter(Boolean);
    for (const sid of sts) bs.forEach((b,k)=>{ const rel=start+k*every*DAY, open=b.questions.some(q=>q.type==='open');
      DB.tasks.push({id:uid(),studentId:sid,title:b.title,instructions:b.instructions||'',questions:cloneQs(b.questions),audio:b.audio||'',due:atTime(rel+7*DAY,23,59),createdAt:now(),auto:!open,status:'pendente',answers:{},marks:{},feedback:'',bankId:b.id,
        releaseAt: rel>now()? rel : null, pack:{id:pid,title,k:k+1,n:bs.length}}); b.uses=(b.uses||0)+1; });
    save(); closeModal(); S.combo=[]; location.hash='tarefas';
    toast(every? `Pacote mandado: ${bs.length} atividades, ${every===7? 'uma por semana' : every===1? 'uma por dia' : 'uma a cada 3 dias'}.` : `Pacote mandado: ${bs.length} atividades.`); },
};
/* ---------- 3. comentário em cada questão ---------- */
function qfbTeacher(t,q){ const v=t.qfb?.[q.id]||'';
  return `<details class="qfb" ${v?'open':''}><summary>${v? 'Seu comentário' : 'Comentar esta questão'}</summary><textarea data-qfb="${t.id}" data-qid="${q.id}" placeholder="Ex.: Quase! Lembre que depois de “since” vem o present perfect.">${esc(v)}</textarea></details>`; }
const qfbStudent=(t,q)=>t.qfb?.[q.id]? `<p class="note qfb-s"><b>${esc(teacherName(t))}:</b> ${esc(t.qfb[q.id])}</p>` : '';
function teacherName(t){ const s=user(t.studentId), p=s&&user(s.teacherId); return p? p.name.split(' ')[0] : 'Professora'; }
function onExtraInput(e){ const el=e.target;
  if (el.dataset.pk) packRefresh();
  if (el.dataset.qfb){ const t=getTask(el.dataset.qfb); if (!t) return; (t.qfb ||= {})[el.dataset.qid]=el.value; if (!el.value.trim()) delete t.qfb[el.dataset.qid]; clearTimeout(S.qfbT); S.qfbT=setTimeout(save,500); } }
