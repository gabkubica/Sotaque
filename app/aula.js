/* =========================================================
   Sotaque · Aula
   A professora monta a sequência da aula (texto ou pergunta, atividade do banco, flashcards, página de PDF)
   e passa bloco a bloco com a tela compartilhada. As atividades abrem do jeito que o aluno vê.
   No fim, manda as atividades e os baralhos como homework, se quiser.
   Dados: DB.aulas = [{id, teacherId, title, studentId, blocks:[...], createdAt, doneAt}].
   ========================================================= */
const AULA_T={texto:'Texto ou pergunta',ativ:'Atividade',flash:'Flashcards',pdf:'PDF'};
const aulasMine=()=>(DB.aulas ||= []).filter(a=>a.teacherId===S.me);
const aulaById=id=>(DB.aulas||[]).find(a=>a.id===id);
function blockLabel(b){
  if (b.t==='texto') return b.title||'Texto';
  if (b.t==='ativ') return DB.bank.find(x=>x.id===b.bankId)?.title||'Atividade (não encontrada)';
  if (b.t==='flash') return deckById(b.deckId)?.title||'Baralho (não encontrado)';
  if (b.t==='pdf') return `${pdfById(b.pdfId)?.name||'PDF (não está neste aparelho)'} · p. ${b.page||1}`;
  return '';
}
/* aula de exemplo para a professora de inglês */
function seedAulas(){
  DB.aulas ||= [];
  const bk=t=>DB.bank.find(b=>b.title===t)?.id, dk=t=>DB.decks?.find(d=>d.title===t)?.id;
  const blocks=[
    {t:'texto',title:'Warm-up',body:'How do you feel about your au pair interview?\nWhat are you most nervous about?\nWhat do you think they will ask you?'},
    {t:'flash',deckId:dk('Au Pair · Interview phrases')},
    {t:'ativ',bankId:bk('Au Pair · The interview: all about you')},
    {t:'ativ',bankId:bk('Au Pair · What would you do if…?')},
    {t:'texto',title:'Your turn: the interview',body:'Answer like in the real interview. Full sentences, with examples!\n\n1. Tell me a little about yourself.\n2. Do you have any experience with children?\n3. What would you do if the child got hurt?\n4. Why do you want to be an au pair?'},
  ].filter(b=>b.t==='texto'||b.bankId||b.deckId);
  DB.aulas.push({id:'au'+uid(),teacherId:'prof',title:'Au Pair · Interview practice',studentId:null,blocks,createdAt:now()});
}
function viewAulas(){
  const list=aulasMine().sort((a,b)=>b.createdAt-a.createdAt);
  return `<div class="hello"><div class="panel-h" style="align-items:flex-start"><div><h1>Aula</h1><p class="meta">Monte a sequência da aula e passe bloco a bloco com a tela compartilhada. Se preferir, abra qualquer atividade da Biblioteca em “Ver como aluno”.</p></div><button class="btn primary big" data-act="aula-new">+ Nova aula</button></div></div>
    ${list.length? `<div class="tlist">${list.map(a=>{ const s=a.studentId&&user(a.studentId);
      return `<div class="tcard aula-card" ${s? `style="${sVars(s)}"` : ''}>${s? avatar(s,42) : `<span class="aula-ic">${NAV_IC.aula}</span>`}<div class="row-m"><b>${esc(a.title)}</b><small>${s? esc(s.name)+' · ' : ''}${a.blocks.length} ${a.blocks.length===1?'bloco':'blocos'}${a.doneAt? ' · dada '+rel(a.doneAt) : ''}</small></div>
        <div class="tcard-r"><a class="btn small" href="#aula-ed-${a.id}">Editar</a><a class="btn small primary" href="#aula-${a.id}">Começar</a></div></div>`; }).join('')}</div>`
    : `<div class="panel"><div class="empty">${quadro('ceu','conversa',8,{w:320,h:150})}<p>Nenhuma aula montada ainda.</p><button class="btn primary" data-act="aula-new">Montar a primeira aula</button></div></div>`}`;
}
function viewAulaEd(id){
  const a=aulaById(id); if (!a) return '<div class="panel"><p>Aula não encontrada.</p><a class="btn" href="#aula">Aula</a></div>';
  const D=(S.ad&&S.ad.id===id)? S.ad : (S.ad=JSON.parse(JSON.stringify(a)));
  const bank=langBank(), byLv=LEVELS.map(l=>[l,bank.filter(b=>b.level===l)]).filter(([,x])=>x.length);
  const blockEd=(b,i)=>{ const head=`<div class="ab-h"><span class="pill-lang">${i+1}</span><b>${AULA_T[b.t]}</b><span class="grow"></span><button class="btn small ghost" data-act="ab-move" data-i="${i}" data-v="-1" ${i?'':'disabled'} aria-label="Subir">↑</button><button class="btn small ghost" data-act="ab-move" data-i="${i}" data-v="1" ${i<D.blocks.length-1?'':'disabled'} aria-label="Descer">↓</button><button class="btn small ghost" data-act="ab-del" data-i="${i}">Tirar</button></div>`;
    let body='';
    if (b.t==='texto') body=`<label class="field">Título<input type="text" data-ab="${i}" data-k="title" value="${esc(b.title||'')}" placeholder="ex.: Warm-up"></label><label class="field">Texto<textarea data-ab="${i}" data-k="body" style="min-height:90px" placeholder="Perguntas, explicação, frases para ler…">${esc(b.body||'')}</textarea></label>`;
    if (b.t==='ativ') body=`<label class="field">Atividade do banco<select data-ab="${i}" data-k="bankId"><option value="">Escolha…</option>${byLv.map(([l,x])=>`<optgroup label="${l}">${x.map(o=>`<option value="${o.id}" ${b.bankId===o.id?'selected':''}>${esc(o.title)}</option>`).join('')}</optgroup>`).join('')}</select></label>`;
    if (b.t==='flash') body=`<label class="field">Baralho<select data-ab="${i}" data-k="deckId"><option value="">Escolha…</option>${decksFor().filter(d=>d.cards.length).map(d=>`<option value="${d.id}" ${b.deckId===d.id?'selected':''}>${esc(d.title)} (${d.level})</option>`).join('')}</select></label>`;
    if (b.t==='pdf') body= pdfsMine().length? `<div class="two"><label class="field">PDF<select data-ab="${i}" data-k="pdfId"><option value="">Escolha…</option>${pdfsMine().map(p=>`<option value="${p.id}" ${b.pdfId===p.id?'selected':''}>${esc(p.name)}</option>`).join('')}</select></label><label class="field">Começar na página<input type="number" min="1" data-ab="${i}" data-k="page" value="${b.page||1}"></label></div>` : '<p class="meta">Importe um PDF em Biblioteca · PDFs primeiro.</p>';
    return `<div class="panel ab">${head}${body}</div>`; };
  return `<a class="link" href="#aula" style="display:inline-block;margin-bottom:16px;text-decoration:none">← Aula</a>
  <div class="ed"><div class="stack" style="gap:14px"><div><h1>${a.blocks.length||a.title? 'Editar aula' : 'Nova aula'}</h1><p class="meta">Os blocos aparecem nesta ordem na hora da aula.</p></div>
    <div class="panel"><label class="field" for="ad-title">Nome da aula<input type="text" id="ad-title" data-ad="title" value="${esc(D.title)}" placeholder="ex.: Past simple · my last trip"></label></div>
    ${D.blocks.map(blockEd).join('')}
    <div class="addq"><span class="meta" style="width:100%;text-align:center">Adicionar bloco</span>${Object.entries(AULA_T).map(([k,l])=>`<button class="btn" data-act="ab-add" data-t="${k}">+ ${l}</button>`).join('')}</div></div>
  <aside class="stack ed-side" style="gap:16px"><section class="panel"><h2>Aluno</h2><p class="meta muted">Opcional. Com aluno, no fim da aula você manda as atividades como homework.</p>
    <label class="field" for="ad-st"><span class="sr">Aluno</span><select id="ad-st" data-ad="studentId"><option value="">Sem aluno definido</option>${students().map(s=>`<option value="${s.id}" ${D.studentId===s.id?'selected':''}>${esc(s.name)}</option>`).join('')}</select></label></section>
    <p class="err" id="ad-err"></p><button class="btn primary big" data-act="aula-save">Salvar</button><button class="btn" data-act="aula-save" data-go="1">Salvar e começar</button>
    <button class="btn small ghost" style="align-self:flex-start" data-act="aula-del" data-id="${a.id}">Excluir aula</button></aside></div>`;
}
function viewAulaPlay(id){
  const a=aulaById(id); if (!a) return '<div class="panel"><p>Aula não encontrada.</p><a class="btn" href="#aula">Aula</a></div>';
  if (!S.ap||S.ap.id!==id) S.ap={id,i:0};
  const n=a.blocks.length, i=Math.min(S.ap.i,n), b=a.blocks[i], s=a.studentId&&user(a.studentId), vars= s? sVars(s) : sVars({palette:'ceu'});
  const dots=a.blocks.map((x,k)=>`<button class="${k===i?'on':''} ${k<i?'u':''}" data-act="aula-go" data-v="${k}" title="${esc(blockLabel(x))}" aria-label="Bloco ${k+1}"></button>`).join('')+`<button class="${i===n?'on':''} end" data-act="aula-go" data-v="${n}" title="Fim da aula" aria-label="Fim"></button>`;
  let stage='';
  if (!b){ const ativ=a.blocks.filter(x=>x.t==='ativ'&&DB.bank.find(y=>y.id===x.bankId)), fl=a.blocks.filter(x=>x.t==='flash'&&deckById(x.deckId));
    stage=`<div class="panel aula-end"><p class="eyebrow">Fim da aula</p><h2>${s? `Bom trabalho com ${esc(s.name.split(' ')[0])}!` : 'Aula concluída!'}</h2>
      ${s&&(ativ.length||fl.length)? `<p class="meta">Quer mandar alguma coisa da aula como homework?</p><div class="sel-list">${ativ.map(x=>`<label class="sel"><input type="checkbox" data-hw="ativ" value="${x.bankId}" checked><span>${esc(blockLabel(x))}<br><small>Atividade</small></span></label>`).join('')}${fl.map(x=>`<label class="sel"><input type="checkbox" data-hw="flash" value="${x.deckId}" checked><span>${esc(blockLabel(x))}<br><small>Flashcards: vai para a aba do aluno</small></span></label>`).join('')}</div>
        <button class="btn primary big" data-act="aula-end" data-id="${a.id}">Mandar e encerrar</button><button class="btn" data-act="aula-end" data-id="${a.id}" data-none="1">Encerrar sem mandar nada</button>`
      : `${s? '' : '<p class="meta">Para mandar homework no fim, escolha o aluno ao editar a aula.</p>'}<button class="btn primary" data-act="aula-end" data-id="${a.id}" data-none="1">Encerrar</button>`}</div>`; }
  else if (b.t==='texto') stage=`<div class="panel aula-txt"><h2>${esc(b.title||'')}</h2><div class="aula-body">${esc(b.body||'')}</div></div>`;
  else if (b.t==='ativ') stage= DB.bank.find(x=>x.id===b.bankId)? viewPractice(b.bankId,true) : '<p class="muted">Esta atividade não está mais no banco.</p>';
  else if (b.t==='flash') stage= deckById(b.deckId)? `<div class="hello" style="margin:0"><p class="eyebrow">Flashcards</p><h2>${esc(deckById(b.deckId).title)}</h2></div>${flashStage(b.deckId,false,true)}` : '<p class="muted">Este baralho não existe mais.</p>';
  else if (b.t==='pdf') stage= pdfViewer(b.pdfId,b.page||1,true);
  return `<div class="aula" style="${vars}">
    <div class="aula-bar"><a class="btn small ghost" href="#aula">← Sair</a><div class="grow"><b>${esc(a.title)}</b><small>${b? `${i+1} de ${n} · ${AULA_T[b.t]}` : 'Fim'}</small></div>
      <div class="aula-dots">${dots}</div><button class="btn small" data-act="aula-go" data-v="${i-1}" ${i?'':'disabled'} aria-label="Bloco anterior">‹</button><button class="btn small primary" data-act="aula-go" data-v="${i+1}" ${i<n?'':'disabled'}>${i<n-1? 'Próximo ›' : i===n-1? 'Terminar ›' : 'Próximo ›'}</button><button class="btn small" data-act="present">${document.fullscreenElement? 'Sair da tela cheia' : 'Tela cheia'}</button></div>
    <div class="aula-stage">${stage}</div></div>`;
}
function togglePresent(){ if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen?.().catch(()=>toast('Este navegador não deixou abrir em tela cheia.')); }
const AULA_ACT={
  'present'(){ togglePresent(); },
  'aula-new'(){ const a={id:'au'+uid(),teacherId:S.me,title:'',studentId:null,blocks:[{t:'texto',title:'Warm-up',body:''}],createdAt:now()}; DB.aulas.push(a); save(); S.ad=null; location.hash='aula-ed-'+a.id; },
  'ab-add'(el){ const t=el.dataset.t; S.ad.blocks.push(t==='texto'? {t,title:'',body:''} : t==='pdf'? {t,pdfId:'',page:1} : {t}); render(); setTimeout(()=>document.querySelectorAll('.ab')[S.ad.blocks.length-1]?.scrollIntoView({behavior:'smooth',block:'center'}),30); },
  'ab-del'(el){ S.ad.blocks.splice(+el.dataset.i,1); render(); },
  'ab-move'(el){ const i=+el.dataset.i, j=i+ +el.dataset.v, B=S.ad.blocks; [B[i],B[j]]=[B[j],B[i]]; render(); },
  'aula-save'(el){ const D=S.ad, a=aulaById(D.id), err=$('#ad-err');
    if (!D.title.trim()){ err.textContent='Dê um nome à aula.'; $('#ad-title').focus(); return; }
    const blocks=D.blocks.filter(b=>b.t==='texto'? (b.title||b.body||'').trim() : b.t==='ativ'? b.bankId : b.t==='flash'? b.deckId : b.pdfId);
    if (!blocks.length){ err.textContent='Adicione pelo menos um bloco completo.'; return; }
    Object.assign(a,{title:D.title.trim(),studentId:D.studentId||null,blocks}); save(); S.ad=null;
    if (el.dataset.go){ S.ap=null; location.hash='aula-'+a.id; } else { location.hash='aula'; toast('Aula salva'); } },
  'aula-del'(el){ confirmBox('Excluir esta aula?','Excluir',()=>{ DB.aulas=DB.aulas.filter(a=>a.id!==el.dataset.id); save(); S.ad=null; location.hash='aula'; toast('Aula excluída'); }); },
  'aula-go'(el){ const a=aulaById(S.ap.id); S.ap.i=Math.max(0,Math.min(a.blocks.length,+el.dataset.v)); S.fs=null; ttsStop(); render(); window.scrollTo(0,0); },
  'aula-end'(el){ const a=aulaById(el.dataset.id), s=a.studentId&&user(a.studentId); a.doneAt=now(); let sent=0;
    if (s&&!el.dataset.none){ const due=now()+7*DAY;
      document.querySelectorAll('[data-hw="ativ"]:checked').forEach(c=>{ const b=DB.bank.find(x=>x.id===c.value); if (!b) return; const open=b.questions.some(q=>q.type==='open');
        DB.tasks.push({id:uid(),studentId:s.id,title:b.title,instructions:b.instructions||'',questions:cloneQs(b.questions),audio:b.audio||'',due,createdAt:now(),auto:!open,status:'pendente',answers:{},marks:{},feedback:'',bankId:b.id}); b.uses=(b.uses||0)+1; sent++; });
      document.querySelectorAll('[data-hw="flash"]:checked').forEach(c=>{ const d=deckById(c.value); if (d&&!d.students.includes(s.id)){ d.students.push(s.id); sent++; } }); }
    if (document.fullscreenElement) document.exitFullscreen();
    save(); S.ap=null; S.pc={}; S.prac=null; location.hash= s? 'aluno-'+s.id : 'aula'; toast(sent? `Aula encerrada. ${sent} ${sent===1?'item mandado':'itens mandados'} como homework.` : 'Aula encerrada'); },
};
function onAulaInput(e){
  const el=e.target; if (!S.ad) return;
  if (el.dataset.ad) S.ad[el.dataset.ad]=el.value;
  if (el.dataset.ab!=null){ const b=S.ad.blocks[+el.dataset.ab]; b[el.dataset.k]= el.dataset.k==='page'? Math.max(1,+el.value||1) : el.value; }
}
document.addEventListener('keydown',e=>{ if (S.route?.name!=='aulaPlay'||e.target.matches('input,textarea,select')||!S.ap) return;
  if (e.key==='ArrowRight'||e.key==='PageDown'){ e.preventDefault(); AULA_ACT['aula-go']({dataset:{v:S.ap.i+1}}); }
  if (e.key==='ArrowLeft'||e.key==='PageUp'){ e.preventDefault(); AULA_ACT['aula-go']({dataset:{v:S.ap.i-1}}); } });
document.addEventListener('fullscreenchange',()=>{ if (S.route?.name==='aulaPlay') render(); });
