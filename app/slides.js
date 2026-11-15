/* =========================================================
   Sotaque · slides de aula
   Uma aula é um texto simples; cada slide começa com "# tipo: título".
     # capa: At the café | img:xicara      (linhas seguintes: subtítulo)
     # vocab: Café words                   (uma por linha: palavra | tradução | img:cena)
     # frase: Useful phrases               (uma frase por linha, cada uma com áudio)
     # dialogo: Listen                     (A: … / B: …, com áudio de duas vozes)
     # tirinha: At the café                (formato das tirinhas)
     # pergunta: Choose the right answer   (1ª linha: pergunta; depois as opções, * na certa)
     # conversa: Let’s talk | img:cena     (uma pergunta por linha)
     # imagem: Describe the picture | img:cidade
     # texto: Título                       (parágrafos)
   Linhas que começam com "nota:" aparecem só para a professora.
   Aula ao vivo: a professora apresenta e o aluno acompanha no aparelho dele (o áudio toca lá, sem compartilhar a tela).
   ========================================================= */
const SL_TYPES={capa:'Capa',vocab:'Vocabulário',frase:'Frases',dialogo:'Diálogo',tirinha:'Tirinha',pergunta:'Pergunta',conversa:'Conversa',imagem:'Imagem',texto:'Texto'};
function slidesParse(src){
  const out=[]; let cur=null;
  for (const raw of String(src||'').split('\n')){ const l=raw.replace(/\s+$/,''), m=l.match(/^#\s*([a-zç]+)\s*:?\s*(.*)$/i);
    if (m&&SL_TYPES[m[1].toLowerCase()]){ const parts=m[2].split('|').map(x=>x.trim()), im=parts.find(x=>/^img:/.test(x));
      cur={t:m[1].toLowerCase(),title:parts[0]||'',img:im? im.slice(4) : '',body:[],notes:[]}; out.push(cur); continue; }
    if (!cur) continue;
    if (/^\s*nota:/i.test(l)) cur.notes.push(l.replace(/^\s*nota:\s*/i,'')); else cur.body.push(l); }
  out.forEach(s=>{ if (s.t!=='tirinha') s.body=s.body.map(x=>x.trim()).filter(Boolean); });
  return out;
}
const slSay=(t,lang,label='Ouvir')=>{ const k='a'+hashStr(lang+t); AUD[k] ||= {text:t,lang}; return `<button type="button" class="sl-say" data-act="say" data-k="${k}" aria-label="${label}: ${esc(t)}">${PLAY_ICON}</button>`; };
const slImg=(k,w=640,h=400)=>k&&SCENES[k]? quadro(imgPal(k),k,hashStr(k)%97,{w,h,frame:false}) : '';
/* um slide; o: {lang, rev (mostra respostas), pick (opção escolhida), live (aluno pode responder)} */
function slideHtml(s,o={}){
  const L=o.lang||'EN', T=s.title? `<h2 class="sl-t">${esc(s.title)}</h2>` : '';
  let b='';
  if (s.t==='capa') b=`<div class="sl-capa"><div><p class="sl-eye">${esc(o.level||'')} ${o.level? '·' : ''} ${L==='FR'? 'Leçon' : 'Lesson'}</p><h1>${esc(s.title)}</h1>${s.body.map(x=>`<p>${esc(x)}</p>`).join('')}</div>${s.img? `<span class="sl-art">${slImg(s.img,640,480)}</span>` : ''}</div>`;
  if (s.t==='vocab') b=`${T}<div class="sl-voc" style="--c:${Math.min(4,Math.ceil(Math.sqrt(s.body.length*1.6)))}">${s.body.map(line=>{ const p=line.split('|').map(x=>x.trim()), im=(p.find(x=>/^img:/.test(x))||'').slice(4)||(typeof AUTO_IMG!=='undefined'? cardImg({f:p[0]}) : ''), tr=p.slice(1).find(x=>!/^img:/.test(x))||'';
    return `<div class="sl-card">${im? `<span class="sl-ci">${slImg(im,320,200)}</span>` : ''}<b>${esc(p[0])} ${slSay(p[0],L)}</b>${tr? `<small class="${o.rev?'':'sl-hide'}">${esc(tr)}</small>` : ''}</div>`; }).join('')}</div>`;
  if (s.t==='frase') b=`${T}<div class="sl-frases">${s.body.map(x=>`<p>${slSay(x,L)}<span>${esc(x)}</span></p>`).join('')}</div>`;
  if (s.t==='dialogo') b=`${T}<div class="sl-dlg">${audioBox(s.body.join('\n'),L,{mini:true})}<div class="sl-lines ${o.rev?'':'blur'}">${s.body.map(x=>{ const m=x.match(/^([AB]):\s*(.*)$/); return m? `<p class="${m[1]==='B'?'b':''}"><b>${m[1]}</b>${esc(m[2])}</p>` : `<p>${esc(x)}</p>`; }).join('')}</div>${o.rev? '' : `<small class="sl-tip">${L==='FR'? 'Écoutez d’abord. Le texte apparaît ensuite.' : 'Listen first. The text appears next.'}</small>`}</div>`;
  if (s.t==='tirinha') b=`${T}${tirinha(s.body.join('\n'),{big:true})}`;
  if (s.t==='pergunta'){ const [q,...ops]=s.body; b=`${T}<p class="sl-q">${esc(q||'')}</p><div class="sl-ops">${ops.map((x,k)=>{ const right=x.startsWith('*'), txt=x.replace(/^\*/,'');
    return `<button type="button" class="sl-op ${o.pick===k?'on':''} ${o.rev&&right?'right':''} ${o.rev&&o.pick===k&&!right?'wrong':''}" ${o.live? `data-act="sl-ans" data-k="${k}"` : 'tabindex="-1"'}><span>${LT[k]}</span>${esc(txt)}</button>`; }).join('')}</div>${o.counts? `<div class="sl-counts">${ops.map((_,k)=>`<span>${LT[k]}: <b>${o.counts[k]||0}</b></span>`).join('')}</div>` : ''}`; }
  if (s.t==='conversa') b=`${T}<div class="sl-conv">${s.img? `<span class="sl-art">${slImg(s.img,480,360)}</span>` : ''}<ol>${s.body.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></div>`;
  if (s.t==='imagem') b=`${T}<div class="sl-imgs"><span class="sl-big">${slImg(s.img,960,540)}</span>${s.body.length? `<div>${s.body.map(x=>`<p>${esc(x)}</p>`).join('')}</div>` : ''}</div>`;
  if (s.t==='texto') b=`${T}<div class="sl-text">${s.body.map(x=>`<p>${esc(x)}</p>`).join('')}</div>`;
  return `<div class="sl sl-${s.t}">${b}</div>`;
}
/* ---------- aulas prontas e as da professora ---------- */
const slSeed=()=>(typeof SLIDES_SEED!=='undefined'? SLIDES_SEED : []).map(([lang,level,title,src])=>({id:'sd'+hashStr(lang+title).toString(36),lang,level,title,src,seed:true}));
const slDecks=()=>slSeed().concat((DB.slides||[]).filter(d=>d.teacherId===S.me)).filter(d=>d.lang===myLang());
const slById=id=>slSeed().find(d=>d.id===id)||(DB.slides||[]).find(d=>d.id===id);
const slCover=d=>{ const c=slidesParse(d.src).find(s=>s.img)?.img; return c? slImg(c,420,150) : quadro(LV_PAL[d.level]||'menta','conversa',hashStr(d.title)%97,{w:420,h:150,frame:false}); };
function viewSlidesLib(){
  if (!isT()) return '<div class="panel"><p>Só para professores.</p></div>';
  const list=slDecks();
  return `${libHeader('slides')}<p class="meta" style="margin:-6px 0 14px">Apresente na aula com a tela compartilhada, ou ligue a <b>aula ao vivo</b>: o aluno abre o Sotaque e os slides mudam junto no aparelho dele, com o áudio tocando lá.</p>
    <div class="bgrid">${list.map(d=>{ const n=slidesParse(d.src).length; return `<article class="bcard"><a class="bcard-art" href="#slides-${d.id}">${slCover(d)}<span class="lvl">${d.level}</span></a>
      <div class="bcard-b"><b>${esc(d.title)}</b><small>${n} slides${d.seed? '' : ' · criada por você'}</small><div class="row-btns" style="margin-top:6px"><a class="btn small primary" href="#slides-${d.id}">Apresentar</a><a class="btn small" href="#slides-ed-${d.id}">${d.seed? 'Copiar e editar' : 'Editar'}</a></div></div></article>`; }).join('')}</div>`;
}
function viewSlidesPlay(id){
  const d=slById(id); if (!d) return '<div class="panel"><p>Aula não encontrada.</p><a class="btn" href="#slides">Slides</a></div>';
  const list=slidesParse(d.src); if (!S.sl||S.sl.id!==id) S.sl={id,i:0,rev:false,live:S.sl?.live&&S.sl.id===id};
  const P=S.sl; P.i=Math.max(0,Math.min(P.i,list.length-1)); const s=list[P.i]; if (!s) return '<div class="panel"><p>Esta aula ainda não tem slides.</p></div>';
  const counts=P.live&&s.t==='pergunta'? Object.values(LIVE.ans[P.i]||{}).reduce((a,x)=>{ a[x.v]=(a[x.v]||0)+1; return a; },{}) : null;
  const ansList=P.live? Object.values(LIVE.ans[P.i]||{}) : [];
  return `<div class="sl-wrap">
    <div class="sl-top"><a class="link" href="#slides">← Slides</a><b class="grow">${esc(d.title)}</b>
      <button class="btn small ${P.live?'live-on':''}" data-act="sl-live">${P.live? '● Ao vivo: ligada' : 'Ligar aula ao vivo'}</button><button class="btn small ghost" data-act="sl-full">Tela cheia</button></div>
    ${P.live? `<p class="note sl-livenote">Aula ao vivo ligada. Peça para o aluno abrir o Sotaque: aparece “Entrar na aula ao vivo”. Os slides mudam junto no aparelho dele e o áudio toca lá.${ansList.length? ` Respostas neste slide: ${ansList.map(x=>`<b>${esc(x.name)}</b> ${LT[x.v]}`).join(' · ')}` : ''}</p>` : ''}
    <div class="sl-stage" id="sl-stage">${slideHtml(s,{lang:d.lang,level:d.level,rev:P.rev,counts})}
      <div class="sl-nav"><button class="btn small" data-act="sl-prev" ${P.i? '' : 'disabled'} aria-label="Slide anterior">←</button><span>${P.i+1} / ${list.length}</span>${['vocab','dialogo','pergunta'].includes(s.t)? `<button class="btn small" data-act="sl-rev">${P.rev? 'Esconder' : s.t==='pergunta'? 'Mostrar a resposta' : s.t==='dialogo'? 'Mostrar o texto' : 'Mostrar a tradução'}</button>` : ''}<button class="btn small primary" data-act="sl-next" ${P.i<list.length-1? '' : 'disabled'} aria-label="Próximo slide">→</button></div></div>
    ${s.notes.length? `<div class="sl-notes"><b>Notas (só você vê)</b>${s.notes.map(x=>`<p>${esc(x)}</p>`).join('')}</div>` : ''}
    <div class="sl-thumbs">${list.map((x,k)=>`<div role="button" tabindex="0" class="sl-th ${k===P.i?'on':''}" data-act="sl-go" data-k="${k}" aria-label="Slide ${k+1}"><span class="sl-mini" inert><span class="sl-scale">${slideHtml(x,{lang:d.lang,level:d.level})}</span></span><small>${k+1}. ${SL_TYPES[x.t]}</small></div>`).join('')}</div></div>`;
}
function viewSlidesEd(id){
  let d=slById(id); if (!d) return '<div class="panel"><p>Aula não encontrada.</p></div>';
  if (d.seed){ const c={id:'sl'+uid(),lang:d.lang,level:d.level,title:d.title+' (cópia)',src:d.src,teacherId:S.me,createdAt:now()}; (DB.slides ||= []).push(c); save(); S.keepModal=true; location.replace('#slides-ed-'+c.id); return ''; }
  return `<a class="link" href="#slides" style="display:inline-block;margin-bottom:12px;text-decoration:none">← Slides</a>
    <div class="ed"><div class="stack" style="gap:12px"><h1>Editar aula</h1>
      <div class="two"><label class="field">Título<input type="text" data-sle="title" value="${esc(d.title)}"></label><label class="field">Nível<select data-sle="level">${LEVELS.map(l=>`<option ${d.level===l?'selected':''}>${l}</option>`).join('')}</select></label></div>
      <label class="field">Slides<textarea data-sle="src" class="sl-src" spellcheck="false">${esc(d.src)}</textarea></label>
      <details class="transc"><summary>Como escrever os slides</summary><pre class="fmt"># capa: Título | img:xicara
Subtítulo
# vocab: Palavras
coffee | café | img:xicara
# frase: Frases úteis
Can I have a coffee, please?
# dialogo: Ouça
A: Hi! What can I get you?
B: A coffee, please.
# tirinha: Uma história
[cidade]
Ana: Hi!
Leo (feliz): Hello!
---
Ana: …
# pergunta: Escolha
I’d like ___ coffee.
*a
an
# conversa: Vamos conversar
What do you drink in the morning?
# imagem: Descreva | img:cidade
What can you see?
nota: só a professora vê</pre></details>${scenesHelp()}
      <div class="row-btns"><a class="btn primary" href="#slides-${d.id}">Apresentar</a><button class="btn danger" data-act="sl-del" data-id="${d.id}">Excluir aula</button></div></div>
    <aside class="stack" style="gap:8px"><b>Prévia</b><div id="sl-prev" class="sl-prevs">${slPrev(d)}</div></aside></div>`;
}
const slPrev=d=>slidesParse(d.src).map((x,k)=>`<div class="sl-th"><span class="sl-mini" inert><span class="sl-scale">${slideHtml(x,{lang:d.lang,level:d.level,rev:true})}</span></span><small>${k+1}. ${SL_TYPES[x.t]}</small></div>`).join('')||'<p class="muted">Escreva o primeiro slide com # capa: …</p>';
/* ---------- aula ao vivo ---------- */
const LIVE={ch:null,key:'',send:null,last:null,ans:{},mine:{}};
const liveKey=()=>{ const me=ME(); return !me? '' : me.role==='teacher'? me.id : me.teacherId||''; };
function liveEnsure(){
  const k=liveKey(); if (k===LIVE.key) return;
  try { if (LIVE.ch?.unsubscribe) LIVE.ch.unsubscribe(); else LIVE.ch?.close?.(); } catch {}
  Object.assign(LIVE,{ch:null,key:k,send:null,last:null}); if (!k) return;
  try {
    if (typeof REAL!=='undefined'&&REAL&&typeof CLOUD!=='undefined'&&CLOUD.sb){ const ch=CLOUD.sb.channel('sq-live-'+k,{config:{broadcast:{self:false}}}); ch.on('broadcast',{event:'m'},({payload})=>liveOn(payload)).subscribe(st=>{ if (st==='SUBSCRIBED'&&!isT()) LIVE.send?.({k:'hello'}); }); LIVE.ch=ch; LIVE.send=p=>ch.send({type:'broadcast',event:'m',payload:p}); }
    else if (typeof BroadcastChannel!=='undefined'){ const ch=new BroadcastChannel('sotaque-live-'+k); ch.onmessage=e=>liveOn(e.data); LIVE.ch=ch; LIVE.send=p=>ch.postMessage(p); if (!isT()) setTimeout(()=>LIVE.send?.({k:'hello'}),50); }
  } catch {}
}
function liveSlide(){ const P=S.sl; if (!P?.live) return; const d=slById(P.id), list=slidesParse(d.src);
  LIVE.send?.({k:'slide',title:d.title,lang:d.lang,level:d.level,i:P.i,n:list.length,slide:list[P.i],rev:P.rev,from:ME().name.split(' ')[0]}); }
function liveOn(p){
  if (!p||!S.me) return;
  if (isT()){ if (p.k==='hello') liveSlide();
    if (p.k==='ans'&&S.sl?.live){ (LIVE.ans[p.i] ||= {})[p.sid]={name:p.name,v:p.v}; if (S.route.name==='slidesPlay') render(); } return; }
  if (p.k==='slide'){ const changed=!LIVE.last||LIVE.last.i!==p.i||LIVE.last.title!==p.title; LIVE.last=p; if (changed) ttsStop(); }
  if (p.k==='end') LIVE.last=null;
  if (S.route.name==='aoVivo') render(); liveBadge();
}
function liveBadge(){
  let el=document.getElementById('live-pill'); const show=S.me&&!isT()&&LIVE.last&&S.route.name!=='aoVivo';
  if (!show){ el?.remove(); return; }
  if (!el){ el=document.createElement('a'); el.id='live-pill'; el.className='live-pill'; el.href='#ao-vivo'; document.body.appendChild(el); }
  el.innerHTML=`<span class="dot"></span>Aula ao vivo com ${esc(LIVE.last.from||'a professora')}: entrar`;
}
function viewLive(){
  const p=LIVE.last, me=ME();
  if (!p) return `<div class="panel" style="max-width:640px"><h1>Aula ao vivo</h1><p class="meta">Esperando ${aProf()} começar. Deixe esta página aberta: os slides aparecem aqui sozinhos, e o áudio toca no seu aparelho.</p></div>`;
  const pick=LIVE.mine[p.title+'|'+p.i];
  return `<div class="sl-wrap"><div class="sl-top"><span class="live-dot"></span><b class="grow">${esc(p.title)}</b><span class="meta">${p.i+1} / ${p.n}</span></div>
    <div class="sl-stage">${slideHtml(p.slide,{lang:p.lang,level:p.level,rev:p.rev,pick,live:p.slide.t==='pergunta'&&!p.rev})}</div>
    ${p.slide.t==='pergunta'&&!p.rev? `<p class="meta muted">${pick!=null? 'Resposta enviada. Dá para trocar até a professora mostrar a certa.' : 'Toque na sua resposta.'}</p>` : ''}</div>`;
}
const SLIDE_ACT={
  'sl-next'(){ const n=slidesParse(slById(S.sl.id).src).length; if (S.sl.i<n-1){ S.sl.i++; S.sl.rev=false; ttsStop(); render(); liveSlide(); } },
  'sl-prev'(){ if (S.sl.i>0){ S.sl.i--; S.sl.rev=false; ttsStop(); render(); liveSlide(); } },
  'sl-go'(el){ S.sl.i=+el.dataset.k; S.sl.rev=false; ttsStop(); render(); liveSlide(); },
  'sl-rev'(){ S.sl.rev=!S.sl.rev; render(); liveSlide(); },
  'sl-live'(){ S.sl.live=!S.sl.live; if (S.sl.live){ LIVE.ans={}; liveEnsure(); liveSlide(); toast('Aula ao vivo ligada'); } else LIVE.send?.({k:'end'}); render(); },
  'sl-full'(){ const e=document.getElementById('sl-stage'); if (document.fullscreenElement) document.exitFullscreen(); else e?.requestFullscreen?.().catch(()=>{}); },
  'sl-ans'(el){ const p=LIVE.last, me=ME(); if (!p) return; LIVE.mine[p.title+'|'+p.i]=+el.dataset.k; LIVE.send?.({k:'ans',sid:me.id,name:me.name.split(' ')[0],i:p.i,v:+el.dataset.k}); render(); },
  'sl-new'(){ const d={id:'sl'+uid(),lang:myLang(),level:'A2',title:'Nova aula',src:myLang()==='FR'? '# capa: Nouvelle leçon | img:conversa\nSous-titre\n# vocab: Mots\nun café | café | img:xicara' : '# capa: New lesson | img:conversa\nSubtitle\n# vocab: Words\na coffee | café | img:xicara',teacherId:S.me,createdAt:now()}; (DB.slides ||= []).push(d); save(); location.hash='slides-ed-'+d.id; },
  'sl-del'(el){ if (!confirm('Excluir esta aula de slides?')) return; DB.slides=(DB.slides||[]).filter(d=>d.id!==el.dataset.id); save(); location.hash='slides'; },
};
function onSlideInput(e){ const el=e.target; if (!el.dataset.sle||S.route.name!=='slidesEd') return; const d=slById(S.route.id); if (!d||d.seed) return;
  d[el.dataset.sle]=el.value; clearTimeout(S.slT); S.slT=setTimeout(()=>{ save(); const pv=document.getElementById('sl-prev'); if (pv) pv.innerHTML=slPrev(d); },350); }
document.addEventListener('keydown',e=>{ if (S.route?.name!=='slidesPlay'||e.target.closest?.('input,textarea,select')||S.modal) return;
  if (e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){ e.preventDefault(); SLIDE_ACT['sl-next'](); }
  if (e.key==='ArrowLeft'||e.key==='PageUp'){ e.preventDefault(); SLIDE_ACT['sl-prev'](); } });
window.addEventListener('hashchange',()=>setTimeout(liveBadge,0));
setInterval(()=>{ liveEnsure(); liveBadge(); },2000);
