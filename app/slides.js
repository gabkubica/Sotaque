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
const SL_TYPES={sobre:'Sobre a aula',leitura:'Leitura',aquecimento:'Warm-up',linha:'Linha do tempo',tarefas:'Atividades recomendadas',explica:'Explicação',tabela:'Tabela',dica:'Cuidado',exercicio:'Exercício',resumo:'Resumo',capa:'Capa',vocab:'Vocabulário',frase:'Frases',dialogo:'Diálogo',tirinha:'Tirinha',pergunta:'Pergunta',conversa:'Conversa',imagem:'Imagem',texto:'Texto'};
const SLP=new Map();
function slidesParse(src){ src=String(src||''); let v=SLP.get(src); if (v) return v; v=slidesParse0(src); SLP.set(src,v); if (SLP.size>150) SLP.delete(SLP.keys().next().value); return v; }
function slidesParse0(src){
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
  if (s.t==='capa') b=`<div class="sl-cv"><div class="sl-cv-t"><p class="sl-eye">${esc(o.level||'')} ${o.level? '·' : ''} ${L==='FR'? 'Leçon' : 'Lesson'}</p><h1>${esc(s.title)}</h1>${s.body.map(x=>`<p>${esc(x)}</p>`).join('')}<span class="sl-cv-bar"></span></div>${s.img? `<div class="sl-cv-art">${slImg(s.img,600,675)}</div>` : ''}</div>`;
  if (s.t==='vocab') b=`${T}<div class="sl-voc" style="--c:${Math.min(4,Math.ceil(Math.sqrt(s.body.length*1.6)))}">${s.body.map(line=>{ const p=line.split('|').map(x=>x.trim()), im=(p.find(x=>/^img:/.test(x))||'').slice(4)||(typeof AUTO_IMG!=='undefined'? cardImg({f:p[0]}) : ''), tr=p.slice(1).find(x=>!/^img:/.test(x))||'';
    return `<div class="sl-card">${im? `<span class="sl-ci">${slImg(im,320,200)}</span>` : ''}<b>${esc(p[0])} ${slSay(p[0],L)}</b>${tr? `<small class="${o.rev?'':'sl-hide'}">${esc(tr)}</small>` : ''}</div>`; }).join('')}</div>`;
  if (s.t==='frase') b=`${T}<div class="sl-frases">${s.body.map(x=>`<p>${slSay(x,L)}<span>${esc(x)}</span></p>`).join('')}</div>`;
  if (s.t==='dialogo') b=`${T}<div class="sl-dlg">${audioBox(s.body.join('\n'),L,{mini:true})}<div class="sl-lines ${o.rev?'':'blur'}">${s.body.map(x=>{ const m=x.match(/^([AB]):\s*(.*)$/); return m? `<p class="${m[1]==='B'?'b':''}"><b>${m[1]}</b>${esc(m[2])}</p>` : `<p>${esc(x)}</p>`; }).join('')}</div>${o.rev? '' : `<small class="sl-tip">${L==='FR'? 'Écoutez d’abord. Le texte apparaît ensuite.' : 'Listen first. The text appears next.'}</small>`}</div>`;
  if (s.t==='tirinha') b=`${T}${tirinha(s.body.join('\n'),{big:true})}`;
  if (s.t==='pergunta'){ const [q,...ops]=s.body; b=`${T}<p class="sl-q">${esc(q||'')}</p><div class="sl-ops">${ops.map((x,k)=>{ const right=x.startsWith('*'), txt=x.replace(/^\*/,'');
    return `<button type="button" class="sl-op ${o.pick===k?'on':''} ${o.rev&&!o.print&&right?'right':''} ${o.rev&&!o.print&&o.pick===k&&!right?'wrong':''}" ${o.live? `data-act="sl-ans" data-k="${k}"` : 'tabindex="-1"'}><span>${LT[k]}</span>${esc(txt)}</button>`; }).join('')}</div>${o.counts? `<div class="sl-counts">${ops.map((_,k)=>`<span>${LT[k]}: <b>${o.counts[k]||0}</b></span>`).join('')}</div>` : ''}`; }
  if (s.t==='conversa') b=`${T}<div class="sl-conv">${s.img? `<span class="sl-art">${slImg(s.img,480,360)}</span>` : ''}<ol>${s.body.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></div>`;
  if (s.t==='imagem') b=`${T}<div class="sl-imgs"><span class="sl-big">${slImg(s.img,960,540)}</span>${s.body.length? `<div>${s.body.map(x=>`<p>${esc(x)}</p>`).join('')}</div>` : ''}</div>`;
  if (s.t==='texto') b=`${T}<div class="sl-text">${s.body.map(x=>`<p>${esc(x).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>')}</p>`).join('')}</div>`;
  const md=x=>esc(x).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');
  if (s.t==='explica') b=`${T}<div class="sl-exp">${s.body.map(x=>x.startsWith('>')? `<p class="sl-eg">${slSay(x.slice(1).replace(/\*\*/g,'').trim(),L)}<span>${md(x.slice(1).trim())}</span></p>` : x.startsWith('- ')? `<p class="sl-li">${md(x.slice(2))}</p>` : `<p>${md(x)}</p>`).join('')}</div>${s.img? `<span class="sl-corner">${slImg(s.img,320,220)}</span>` : ''}`;
  if (s.t==='tabela'){ const rows=s.body.filter(x=>x.includes('|')).map(x=>x.split('|').map(c=>c.trim())), extra=s.body.filter(x=>!x.includes('|'));
    b=`${T}<table class="sl-tab"><thead><tr>${(rows[0]||[]).map(c=>`<th>${md(c)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map(r=>`<tr>${r.map(c=>`<td>${md(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>${extra.map(x=>`<p class="sl-small">${md(x)}</p>`).join('')}`; }
  if (s.t==='dica') b=`${T}<div class="sl-dica">${s.body.map(x=>{ const m=x.match(/^(x|ok)\s*:\s*(.*)$/i); return m? `<p class="${m[1].toLowerCase()==='x'?'no':'ok'}"><span>${m[1].toLowerCase()==='x'?'✗':'✓'}</span>${md(m[2])}</p>` : `<p class="txt">${md(x)}</p>`; }).join('')}</div>`;
  if (s.t==='resumo') b=`${T}<ul class="sl-res">${s.body.map(x=>`<li>${md(x.replace(/^- /,''))}</li>`).join('')}</ul>`;
  const yt=q=>`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}&sp=EgIQAQ%253D%253D`;
  const exLines=list=>list.map(x=>x.startsWith('>')? `<p class="sl-eg">${slSay(x.slice(1).replace(/\*\*/g,'').trim(),L)}<span>${md(x.slice(1).trim())}</span></p>` : `<p>${md(x)}</p>`).join('');
  if (s.t==='aquecimento') b=`<p class="sl-eye">Warm-up</p>${T}<div class="sl-warm">${s.body.map(x=>{ const m=x.match(/^(musica|música|filme|jogo|pergunta|video|vídeo)\s*:\s*(.*)$/i); if (!m) return `<p class="sl-wtxt">${md(x)}</p>`;
      const k=m[1].toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,''), [a1,a2,a3]=m[2].split('|').map(z=>z.trim()), ic={musica:'♪',filme:'🎬',video:'▶',jogo:'★',pergunta:'?'}[k], lb={musica:'Música',filme:'Cena de filme',video:'Vídeo',jogo:'Jogo',pergunta:'Pergunta'}[k];
      return `<div class="sl-wc ${k}"><span class="sl-wi">${ic}</span><div><small>${lb}</small><b>${md(a1||'')}</b>${a2? `<p>${md(a2)}</p>` : ''}${(k==='musica'||k==='filme'||k==='video')&&!o.print? `<a class="sl-yt" href="${yt(a3? a3.replace(/^busca:\s*/i,'') : k==='musica'? a1.replace(/\*\*/g,'').replace(' — ',' ')+' official video' : a1.replace(/\*\*/g,'').replace(/[()]/g,'')+' movie clip')}" target="_blank" rel="noopener">Procurar no YouTube ↗</a>` : ''}</div></div>`; }).join('')}</div>`;
  if (s.t==='linha'){ let now=.75, ax=null; const pts=[], rng=[], rest=[];
    for (const x of s.body){ let m; if ((m=x.match(/^agora\s*:\s*([\d.]+)/i))) now=+m[1]; else if (/^agora\s*:\s*(não|nao|no|-)\s*$/i.test(x)) now=null; else if ((m=x.match(/^eixo\s*:\s*(.+?)\s*\|\s*(.+)$/i))) ax=[m[1],m[2]]; else if ((m=x.match(/^ponto\s*:\s*([\d.]+)\s*\|\s*(.*)$/i))) pts.push([+m[1],m[2]]); else if ((m=x.match(/^faixa\s*:\s*([\d.]+)\s*-\s*([\d.]+)\s*\|\s*(.*)$/i))) rng.push([+m[1],+m[2],m[3]]); else rest.push(x); }
    const X=v=>40+v*920;
    b=`${T}<svg class="sl-tl" viewBox="0 0 1000 250" role="img" aria-label="Linha do tempo"><line x1="20" y1="150" x2="980" y2="150" stroke="#221c1e" stroke-width="4"/><path d="M980 150l-16 -9v18z" fill="#221c1e"/>
      <text x="30" y="240" font-size="22" fill="#8a7e80" font-weight="700">${esc(ax? ax[0] : L==='FR'? 'passé' : 'past')}</text><text x="970" y="240" font-size="22" fill="#8a7e80" font-weight="700" text-anchor="end">${esc(ax? ax[1] : L==='FR'? 'futur' : 'future')}</text>
      ${now==null? '' : `<line x1="${X(now)}" y1="40" x2="${X(now)}" y2="170" stroke="#7a1f35" stroke-width="3" stroke-dasharray="6 6"/><text x="${X(now)}" y="30" font-size="24" fill="#7a1f35" font-weight="800" text-anchor="middle">${L==='FR'? 'MAINTENANT' : 'NOW'}</text>`}
      ${rng.map(([a,c,l],k)=>`<rect x="${X(a)}" y="${118-k*38}" width="${X(c)-X(a)}" height="22" rx="11" fill="#3f74b8" opacity=".85"/><text x="${(X(a)+X(c))/2}" y="${108-k*38}" font-size="22" text-anchor="middle" fill="#24497e" font-weight="700">${esc(l)}</text>`).join('')}
      ${pts.map(([v,l],k)=>`<circle cx="${X(v)}" cy="150" r="13" fill="#e0563b" stroke="#fff" stroke-width="4"/><text x="${X(v)}" y="${k%2? 212 : 188}" font-size="22" text-anchor="middle" fill="#a8351f" font-weight="700">${esc(l)}</text>`).join('')}</svg>
      <div class="sl-exp wide">${exLines(rest)}</div>`; }
  if (s.t==='tarefas'){ const bs=s.body.map(x=>({x,b:DB.bank.find(z=>z.lang===L&&z.title===x)})), live=isT()&&!o.print&&!o.thumb, sid=live? slStudent() : '';
    b=`<p class="sl-eye">Homework</p>${T}${live? `<div class="sl-hwbar"><span>${sid? `Para <b>${esc(user(sid)?.name||'')}</b>: escolha 2 ou 3.` : 'Escolha o aluno da aula no alto da tela.'}</span><label>Prazo <select data-sldue="1"><option value="0" ${S.slDue? '' : 'selected'}>sem prazo</option><option value="7" ${S.slDue? 'selected' : ''}>7 dias</option></select></label></div>` : ''}<div class="sl-hw">${bs.map(({x,b:bk},k)=>{ const sent=sid&&bk&&DB.tasks.some(t=>t.studentId===sid&&t.bankId===bk.id&&t.createdAt>now()-12*3600000);
      return `<div class="sl-hwc"><span class="sl-hwn">${k+1}</span><div><b>${esc(x)}</b><small>${bk? `${bk.level} · ${esc(bk.topic)} · ${bk.questions.length} questões` : 'atividade'}</small></div>${bk&&live? `<a class="btn small ghost" href="#praticar-${bk.id}" target="_blank" rel="noopener" title="Ver como o aluno vê">Ver</a><button class="btn small ${sent?'':'primary'}" data-act="sl-send" data-id="${bk.id}" ${sent||!sid?'disabled':''}>${sent? 'Enviada ✓' : 'Mandar'}</button>` : ''}</div>`; }).join('')}</div>`; }
  if (s.t==='leitura'){ const kind=(s.body.find(x=>/^tipo:/i.test(x))||'').replace(/^tipo:\s*/i,''), ps=s.body.filter(x=>!/^tipo:/i.test(x));
    b=`<div class="sl-read"><div class="sl-read-art">${s.img? slImg(s.img,480,640) : ''}<span class="sl-read-kind">${esc(kind||'Reading')}</span></div><div class="sl-read-t"><h2 class="sl-t">${esc(s.title)}</h2>${ps.map((x,k)=>`<p class="${k?'':'first'}">${md(x)}</p>`).join('')}</div></div>`; }
  if (s.t==='sobre'){ const get=k=>s.body.filter(x=>x.toLowerCase().startsWith(k+':')).map(x=>x.slice(k.length+1).trim()), list=k=>get(k).flatMap(x=>x.split(';').map(z=>z.trim()).filter(Boolean));
    b=`<p class="sl-eye">Para a professora e o aluno</p>${T}<div class="sl-sbg"><div class="sl-sb"><span class="sl-sbi">1</span><b>O que vamos ver</b><ul>${list('ver').map(x=>`<li>${md(x)}</li>`).join('')}</ul></div>
      <div class="sl-sb"><span class="sl-sbi">2</span><b>Por que isso é importante</b>${get('porque').map(x=>`<p>${md(x)}</p>`).join('')}</div>
      <div class="sl-sb"><span class="sl-sbi">3</span><b>No fim da aula, o aluno consegue</b><ul class="ok">${list('meta').map(x=>`<li>${md(x)}</li>`).join('')}</ul></div></div>${get('nivel').length? `<p class="sl-sbn">${md(get('nivel')[0])}</p>` : ''}`; }
  if (s.t==='exercicio'){ const ins=s.body.filter(x=>x.startsWith('!')).map(x=>`<p class="sl-ins">${md(x.slice(1).trim())}</p>`).join('');
    if (o.thumb){ const n=exParse(s.body.filter(x=>!x.startsWith('!'))).length; b=`${T}${ins}<p class="sl-exsum">✎ ${n} ${n===1?'questão':'questões'}</p>`; }
    else { const t=exTask(o.key||s.title,s); if (!o.print) S.slxT=t; const sc=scoreOf(t);
      b=`${T}${ins}<div class="sl-exq">${t.done&&!o.print? t.questions.map((q,i)=>qResult(t,q,i,'student')).join('') : t.questions.map((q,i)=>qAnswer(t,q,i)).join('')}</div>${o.print? '' : `<div class="sl-exbar">${t.done? `<b>${fmtNum(sc.got)} de ${sc.total} certas</b><button class="btn small" data-act="slx-reset">Fazer de novo</button>` : `<button class="btn small primary" data-act="slx-check">Corrigir</button>`}</div>`}`; } }
  return `<div class="sl sl-${s.t}">${b}${o.thumb? '' : `<span class="sl-brand"><b>Sotaque</b> · © Gabriel Kubica · Todos os direitos reservados</span>`}</div>`;
}
/* exercícios dentro do slide: o formato de "Colar várias questões" e mais estes prefixos:
   escolha: She [*goes/go] …   erro: I {have|am} 20.   lacunas: I [went] home. || go, home
   grupos: A: x, y / B: z, w   reescreva: frase | PALAVRA | nova ___ | resposta1/resposta2   ditado: frase */
function exParse(lines){
  const out=[]; let rest=[]; const flush=()=>{ if (rest.length){ out.push(...parseQuestions(rest.join('\n'))); rest=[]; } };
  for (const l of lines){ let m;
    if ((m=l.match(/^(escolha|erro|lacunas|grupos|reescreva|ditado)\s*:\s*(.+)$/i))){ flush(); const k=m[1].toLowerCase(), v=m[2];
      if (k==='escolha') out.push(PICK(v)); if (k==='erro') out.push(FIX(v)); if (k==='ditado') out.push(DIT(v));
      if (k==='lacunas'){ const [t,ex]=v.split('||'); out.push(CLOZE(t.trim(),(ex||'').trim())); }
      if (k==='grupos') out.push(SORT(v.split(' / ').join('\n')));
      if (k==='reescreva'){ const [o,kw,fr,an]=v.split(' | ').map(x=>(x||'').trim()); out.push(KWT(o,kw,fr,an)); } }
    else rest.push(l); }
  flush(); return out;
}
function exTask(key,s){
  const sig=key+'|'+hashStr(s.body.join('\n')), st=(S.slx ||= {});
  if (!st[sig]){ const qs=fromRaw(exParse(s.body.filter(x=>!x.startsWith('!')))).map((q,k)=>({...q,id:'x'+hashStr(sig+'#'+k).toString(36)}));
    st[sig]={id:'slx',title:s.title,questions:qs,answers:{},marks:{},status:'pendente',studentId:null,done:false}; }
  return st[sig];
}
function viewSlidesPrint(id){
  const d=slById(id); if (!d) return '<div class="panel"><p>Aula não encontrada.</p></div>';
  const list=slidesParse(d.src);
  return `<div class="no-print pr-tools"><a class="link" href="#slides-${d.id}">← Voltar</a><span class="grow"></span><button class="btn primary" data-act="print-go">Imprimir ou salvar em PDF</button></div>
    <p class="no-print meta muted" style="margin:0 0 14px">A apostila tem um slide por página. Para salvar em PDF, escolha “Salvar como PDF” no lugar da impressora (de preferência na horizontal).</p>
    <div class="sl-book">${list.map((x,i)=>`<div class="sl-page"><div class="sl-stage">${slideHtml(x,{lang:d.lang,level:d.level,rev:x.t!=='pergunta',key:'pdf'+d.id+i,print:true,prof:ME()?.name})}</div></div>`).join('')}</div>`;
}
/* ---------- áudios gravados de cada aula pronta (app/audio/<id>.json, gerados por scripts/audios.py) ---------- */
const AUD_BASE=(()=>{ try { return new URL('audio/',document.currentScript.src).href; } catch { return 'audio/'; } })();
const AUD_LOADED={};
function slAudio(d){ if (!d?.seed||AUD_LOADED[d.id]) return; AUD_LOADED[d.id]=1;
  fetch(AUD_BASE+d.id+'.json').then(r=>r.ok? r.json() : {}).then(j=>{ for (const [k,v] of Object.entries(j)) CLIPS[k]='data:audio/mpeg;base64,'+v; }).catch(()=>{ AUD_LOADED[d.id]=0; }); }
/* ---------- aulas prontas e as da professora ---------- */
const SLSEED={n:-1,v:[]};
const slSeed=()=>{ const A=typeof SLIDES_SEED!=='undefined'? SLIDES_SEED : []; if (SLSEED.n!==A.length){ SLSEED.n=A.length; SLSEED.v=A.map(([lang,level,title,src])=>({id:'sd'+hashStr(lang+title).toString(36),lang,level,title,src,seed:true})); } return SLSEED.v; };
const slDecks=()=>slSeed().concat((DB.slides||[]).filter(d=>d.teacherId===S.me)).filter(d=>d.lang===myLang());
const slById=id=>slSeed().find(d=>d.id===id)||(DB.slides||[]).find(d=>d.id===id);
const slCover=d=>{ const c=slidesParse(d.src).find(s=>s.img)?.img; return c? slImg(c,420,150) : quadro(LV_PAL[d.level]||'menta','conversa',hashStr(d.title)%97,{w:420,h:150,frame:false}); };
function viewSlidesLib(){
  if (!isT()) return '<div class="panel"><p>Só para professores.</p></div>';
  const list=slDecks();
  const lv=S.slLv||'todos', shown=list.filter(d=>lv==='todos'||d.level===lv);
  return `<div class="hello"><div class="panel-h" style="align-items:flex-start"><div><h1>Aulas</h1><p class="meta">Apresentações completas para dar a aula: warm-up, explicação, exercícios, conversa e homework recomendada. Apresente com a tela compartilhada ou ligue a <b>aula ao vivo</b> (o aluno acompanha no aparelho dele).</p></div><button class="btn primary big" data-act="sl-new">+ Nova aula</button></div>
    <div class="filt" role="group" aria-label="Nível">${['todos',...LEVELS].map(k=>`<button class="${lv===k?'on':''}" data-act="sl-lv" data-v="${k}">${k==='todos'? 'Todos os níveis' : k}</button>`).join('')}</div></div>
    <div class="bgrid">${shown.map(d=>{ const n=slidesParse(d.src).length; return `<article class="bcard"><a class="bcard-art" href="#slides-${d.id}">${lazyArt('sl|'+d.id+'|'+d.src.length,()=>slCover(d),420,150)}<span class="lvl">${d.level}</span></a>
      <div class="bcard-b"><b>${esc(d.title)}</b><small>${n} slides${d.seed? '' : ' · criada por você'}</small><div class="row-btns" style="margin-top:6px"><a class="btn small primary" href="#slides-${d.id}">Apresentar</a><a class="btn small" href="#slides-ed-${d.id}">${d.seed? 'Copiar e editar' : 'Editar'}</a></div></div></article>`; }).join('')}</div>`;
}
/* barra de anotação: ferramenta, cor, desfazer, limpar e pronto, tudo junto */
const SLI={pen:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1-4L16 5l3 3L8 19z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  hl:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19h6M7 15l8-8 3 3-8 8H7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  tx:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6V4h14v2M12 4v16M9 20h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  undo:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7L4 12l5 5M4 12h10a6 6 0 010 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 -3)"/></svg>',
  board:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 21h6M12 17v4" stroke="currentColor" stroke-width="2"/></svg>'};
function slPalette(){ const t=S.inkT==='hl'||S.inkT==='tx'? S.inkT : 'pen', c=S.inkC||INK_COLORS[0];
  return `<div class="sl-pal" role="toolbar" aria-label="Anotar no slide">
    <span class="sl-seg">${[['pen','Caneta'],['hl','Marca-texto'],['tx','Texto']].map(([k,l])=>`<button class="${t===k?'on':''}" data-act="sl-tool" data-t="${k}" aria-pressed="${t===k}" title="${k==='tx'? 'Texto: clique no slide e digite' : l}">${SLI[k]}<span>${l}</span></button>`).join('')}</span>
    <span class="sl-cols">${INK_COLORS.map(x=>`<button class="sl-dot ${c===x?'on':''}" style="background:${x}" data-act="sl-color" data-c="${x}" aria-label="Cor"></button>`).join('')}</span>
    <button class="sl-ic" data-act="sl-undo" title="Desfazer">${SLI.undo}</button><button class="sl-ic sl-txt" data-act="sl-clear" title="Apagar tudo deste slide">Limpar</button>
    <button class="sl-ic sl-ok" data-act="sl-draw">Pronto</button></div>`; }
function slNavRest(P,list,s){ return `<button class="btn small" data-act="sl-board" title="Lousa: página em branco para escrever e desenhar">${SLI.board} Lousa</button><button class="btn small" data-act="sl-prev" ${P.i? '' : 'disabled'} aria-label="Slide anterior">←</button><span>${P.i+1} / ${list.length}</span>${['vocab','dialogo','pergunta'].includes(s.t)? `<button class="btn small" data-act="sl-rev">${P.rev? 'Esconder' : s.t==='pergunta'? 'Mostrar a resposta' : s.t==='dialogo'? 'Mostrar o texto' : 'Mostrar a tradução'}</button>` : ''}<button class="btn small primary" data-act="sl-next" ${P.i<list.length-1? '' : 'disabled'} aria-label="Próximo slide">→</button>`; }
function viewSlidesPlay(id){
  const d=slById(id); if (!d) return '<div class="panel"><p>Aula não encontrada.</p><a class="btn" href="#aula">Aulas</a></div>';
  const list=slidesParse(d.src); if (!S.sl||S.sl.id!==id) S.sl={id,i:0,rev:false,live:S.sl?.live&&S.sl.id===id};
  const P=S.sl; P.i=Math.max(0,Math.min(P.i,list.length-1)); const s=list[P.i]; if (!s) return '<div class="panel"><p>Esta aula ainda não tem slides.</p></div>';
  slLink(d); slAudio(d);
  const counts=P.live&&s.t==='pergunta'? Object.values(LIVE.ans[P.i]||{}).reduce((a,x)=>{ a[x.v]=(a[x.v]||0)+1; return a; },{}) : null;
  const ansList=P.live? Object.values(LIVE.ans[P.i]||{}) : [];
  return `<div class="sl-wrap">
    <div class="sl-top"><a class="link" href="#aula">← Aulas</a><b class="grow">${esc(d.title)}</b>
      <label class="sl-stu">Aula para <select data-slstu="1"><option value="">escolha o aluno…</option>${students().map(u=>`<option value="${u.id}" ${slStudent()===u.id?'selected':''}>${esc(u.name)}</option>`).join('')}</select></label><button class="btn small ghost" data-act="sl-full">Tela cheia</button><a class="btn small ghost" href="#slides-pdf-${d.id}">Apostila (PDF)</a></div>
    ${S.slMsg&&S.slMsg.deck===d.id? `<p class="note sl-msg">${esc(S.slMsg.txt)}${S.slMsg.undo? ` <button class="link" data-act="sl-unauto">Desfazer</button>` : ''} <button class="link" data-act="sl-msgx" aria-label="Fechar aviso">✕</button></p>` : ''}
    ${P.live? `<p class="note sl-livenote">Aula ao vivo ligada. Peça para o aluno abrir o Sotaque: aparece “Entrar na aula ao vivo”. Os slides mudam junto no aparelho dele e o áudio toca lá.${ansList.length? ` Respostas neste slide: ${ansList.map(x=>`<b>${esc(x.name)}</b> ${LT[x.v]}`).join(' · ')}` : ''}</p>` : ''}
    <div class="sl-stage" id="sl-stage">${P.board? `<div class="sl sl-lousa"><span class="sl-brand"><b>Sotaque</b> · © Gabriel Kubica · Todos os direitos reservados</span></div>` : slideHtml(s,{lang:d.lang,level:d.level,rev:P.rev,counts,key:d.id+':'+P.i,prof:ME()?.name})}
      ${inkSvg(inkKey(),DB.ink?.[inkKey()],true)}${S.draw? slPalette() : ''}<div class="sl-nav"><button class="btn small sl-anot ${S.draw?'on':''}" data-act="sl-draw" title="Anotar no slide: caneta, marca-texto e texto">${SLI.pen} Anotar</button><button class="btn small sl-fsx" data-act="sl-full" title="Sair da tela cheia">✕</button>${P.board? `<button class="btn small primary" data-act="sl-board">← Voltar ao slide ${P.i+1}</button>` : slNavRest(P,list,s)}</div></div>
    ${s.notes.length? `<div class="sl-notes"><b>Notas (só você vê)</b>${s.notes.map(x=>`<p>${esc(x)}</p>`).join('')}</div>` : ''}
    <div class="sl-thumbs">${list.map((x,k)=>`<div role="button" tabindex="0" class="sl-th ${k===P.i?'on':''}" data-act="sl-go" data-k="${k}" aria-label="Slide ${k+1}"><span class="sl-mini" inert><span class="sl-scale">${slideHtml(x,{lang:d.lang,level:d.level,thumb:true})}</span></span><small>${k+1}. ${SL_TYPES[x.t]}</small></div>`).join('')}</div></div>`;
}
function viewSlidesEd(id){
  let d=slById(id); if (!d) return '<div class="panel"><p>Aula não encontrada.</p></div>';
  if (d.seed){ const c={id:'sl'+uid(),lang:d.lang,level:d.level,title:d.title+' (cópia)',src:d.src,teacherId:S.me,createdAt:now()}; (DB.slides ||= []).push(c); save(); S.keepModal=true; location.replace('#slides-ed-'+c.id); return ''; }
  return `<a class="link" href="#aula" style="display:inline-block;margin-bottom:12px;text-decoration:none">← Aulas</a>
    <div class="ed"><div class="stack" style="gap:12px"><h1>Editar aula</h1>
      <div class="two"><label class="field">Título<input type="text" data-sle="title" value="${esc(d.title)}"></label><label class="field">Nível<select data-sle="level">${LEVELS.map(l=>`<option ${d.level===l?'selected':''}>${l}</option>`).join('')}</select></label></div>
      <label class="field">Slides<textarea data-sle="src" class="sl-src" spellcheck="false">${esc(d.src)}</textarea></label>
      <details class="transc"><summary>Como escrever os slides</summary><pre class="fmt"># capa: Present perfect | img:aviao
Subtítulo da aula
# explica: Quando usar
Usamos o present perfect para **experiências**.
- Não dizemos quando aconteceu.
> I have **been** to Chile.
# tabela: Como formar
Sujeito | have/has | particípio
I / you / we / they | have | worked
he / she / it | has | worked
# dica: Cuidado!
x: I have been to Chile in 2019.
ok: I went to Chile in 2019.
# exercicio: Pratique
! Escolha a forma certa.
escolha: I [*have seen/saw] this film twice.
erro: She {have|has} finished.
lacunas: I [have] lived here [since] 2019. || for, has
grupos: for: two years, ages / since: Monday, 2020
reescreva: I started in 2019. | SINCE | I ___ 2019. | have worked here since
ditado: I have never been to Japan.
She ___ (go) to Paris twice. = has been
1. Have you ever ___ sushi?
a) eat
*b) eaten
ordem: I have never seen snow
# resumo: Resumo
- have/has + particípio
# vocab: Palavras
coffee | café | img:xicara
# frase / # dialogo / # tirinha / # pergunta / # conversa / # imagem / # texto
nota: só a professora vê</pre></details>${scenesHelp()}
      <div class="row-btns"><a class="btn primary" href="#slides-${d.id}">Apresentar</a><button class="btn danger" data-act="sl-del" data-id="${d.id}">Excluir aula</button></div></div>
    <aside class="stack" style="gap:8px"><b>Prévia</b><div id="sl-prev" class="sl-prevs">${slPrev(d)}</div></aside></div>`;
}
const slPrev=d=>slidesParse(d.src).map((x,k)=>`<div class="sl-th"><span class="sl-mini" inert><span class="sl-scale">${slideHtml(x,{lang:d.lang,level:d.level,rev:true,thumb:true})}</span></span><small>${k+1}. ${SL_TYPES[x.t]}</small></div>`).join('')||'<p class="muted">Escreva o primeiro slide com # capa: …</p>';
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
  LIVE.send?.({k:'slide',title:d.title,lang:d.lang,level:d.level,i:P.i,n:list.length,slide:list[P.i],rev:P.rev,ink:DB.ink?.[d.id+':'+P.i]||[],from:ME().name.split(' ')[0]}); }
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
    <div class="sl-stage">${slideHtml(p.slide,{lang:p.lang,level:p.level,rev:p.rev,pick,live:p.slide.t==='pergunta'&&!p.rev,key:p.title+':'+p.i})}${inkSvg('',p.ink,false)}</div>
    ${p.slide.t==='pergunta'&&!p.rev? `<p class="meta muted">${pick!=null? 'Resposta enviada. Dá para trocar até a professora mostrar a certa.' : 'Toque na sua resposta.'}</p>` : ''}</div>`;
}
const SLIDE_ACT={
  'sl-next'(){ const n=slidesParse(slById(S.sl.id).src).length; if (S.sl.i<n-1){ S.sl.i++; S.sl.board=false; S.sl.rev=false; ttsStop(); render(); liveSlide(); } },
  'sl-prev'(){ if (S.sl.i>0){ S.sl.i--; S.sl.board=false; S.sl.rev=false; ttsStop(); render(); liveSlide(); } },
  'sl-go'(el){ S.sl.i=+el.dataset.k; S.sl.board=false; S.sl.rev=false; ttsStop(); render(); liveSlide(); },
  'sl-rev'(){ S.sl.rev=!S.sl.rev; render(); liveSlide(); },
  'sl-live'(){ S.sl.live=!S.sl.live; if (S.sl.live){ LIVE.ans={}; liveEnsure(); liveSlide(); toast('Aula ao vivo ligada'); } else LIVE.send?.({k:'end'}); render(); },
  'sl-full'(){ if (document.fullscreenElement||document.body.classList.contains('sl-fs')){ document.exitFullscreen?.().catch(()=>{}); document.body.classList.remove('sl-fs'); } else { document.body.classList.add('sl-fs'); const R=document.documentElement; try { const f=R.requestFullscreen||R.webkitRequestFullscreen; const p=f&&f.call(R); p?.catch?.(()=>{}); } catch {} } },
  'sl-ans'(el){ const p=LIVE.last, me=ME(); if (!p) return; LIVE.mine[p.title+'|'+p.i]=+el.dataset.k; LIVE.send?.({k:'ans',sid:me.id,name:me.name.split(' ')[0],i:p.i,v:+el.dataset.k}); render(); },
  'slx-check'(){ if (S.slxT){ S.slxT.done=true; render(); } },
  'slx-reset'(){ if (S.slxT){ S.slxT.answers={}; S.slxT.done=false; render(); } },
  'sl-hw'(el){ const d=slById(S.sl?.id); packModal(el.dataset.ids.split(','),(d? d.title+' · ' : '')+'homework'); },
  'sl-lv'(el){ S.slLv=el.dataset.v; render(); },
  'sl-send'(el){ const sid=slStudent(), bk=DB.bank.find(x=>x.id===el.dataset.id); if (!sid){ toast('Escolha o aluno da aula no alto da tela.'); return; } if (!bk) return;
    const open=bk.questions.some(q=>q.type==='open');
    DB.tasks.push({id:uid(),studentId:sid,title:bk.title,instructions:bk.instructions||'',questions:cloneQs(bk.questions),audio:bk.audio||'',due:S.slDue? atTime(now()+7*DAY,23,59) : null,createdAt:now(),auto:!open,status:'pendente',answers:{},marks:{},feedback:'',bankId:bk.id});
    bk.uses=(bk.uses||0)+1; save(); render(); toast(`“${bk.title}” enviada para ${user(sid).name.split(' ')[0]}${S.slDue? ' (prazo de 7 dias)' : ''}`); },
  'sl-tool'(el){ S.inkT=el.dataset.t; render(); },
  'sl-new'(){ const d={id:'sl'+uid(),lang:myLang(),level:'A2',title:'Nova aula',src:myLang()==='FR'? '# capa: Nouvelle leçon | img:conversa\nSous-titre\n# vocab: Mots\nun café | café | img:xicara' : '# capa: New lesson | img:conversa\nSubtitle\n# vocab: Words\na coffee | café | img:xicara',teacherId:S.me,createdAt:now()}; (DB.slides ||= []).push(d); save(); location.hash='slides-ed-'+d.id; },
  'sl-del'(el){ if (!confirm('Excluir esta aula de slides?')) return; DB.slides=(DB.slides||[]).filter(d=>d.id!==el.dataset.id); save(); location.hash='aula'; },
};
function onSlideInput(e){ const el=e.target; if (!el.dataset.sle||S.route.name!=='slidesEd') return; const d=slById(S.route.id); if (!d||d.seed) return;
  d[el.dataset.sle]=el.value; clearTimeout(S.slT); S.slT=setTimeout(()=>{ save(); const pv=document.getElementById('sl-prev'); if (pv) pv.innerHTML=slPrev(d); },350); }
document.addEventListener('keydown',e=>{ if (S.route?.name!=='slidesPlay'||e.target.closest?.('input,textarea,select')||S.modal) return;
  if (e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){ e.preventDefault(); SLIDE_ACT['sl-next'](); }
  if (e.key==='ArrowLeft'||e.key==='PageUp'){ e.preventDefault(); SLIDE_ACT['sl-prev'](); } });
window.addEventListener('hashchange',()=>setTimeout(liveBadge,0));
setInterval(()=>{ liveEnsure(); liveBadge(); },2000);

/* tela cheia: a página inteira fica em tela cheia (o slide pode trocar sem sair dela) */
document.addEventListener('fullscreenchange',()=>{ if (!document.fullscreenElement) document.body.classList.remove('sl-fs'); });
window.addEventListener('hashchange',()=>{ if (!/^#slides-[a-z0-9]+$/.test(location.hash)&&document.body.classList.contains('sl-fs')){ document.body.classList.remove('sl-fs'); document.exitFullscreen?.().catch(()=>{}); } });

/* ---------- desenho por cima do slide (fica salvo à parte, não entra na apostila) ---------- */
const inkKey=()=>S.sl.id+':'+(S.sl.board? 'lousa' : S.sl.i);
const INK_COLORS=['#c0392b','#2b6cb0','#1f6440','#e0a020','#221c1e'];
const inkPath=st=>`<polyline points="${st.p}" fill="none" stroke="${st.c}" stroke-opacity="${st.o||1}" stroke-width="${st.w||4}" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>`;
/* textos digitados ficam numa camada HTML (o SVG estica e deformaria as letras) */
const inkTx=(st,k,edit)=>`<span class="sl-tx no-i18n" style="left:${st.x/10}%;top:${st.y/10}%;color:${st.c}" ${edit? `data-tx="${k}"` : ''}>${esc(st.s)}</span>`;
const inkSvg=(key,list,edit)=>{ const L=list||[];
  return `<svg class="sl-ink ${edit&&S.draw?'on':''} ${edit&&S.draw&&S.inkT==='tx'?'tx':''}" viewBox="0 0 1000 1000" preserveAspectRatio="none" ${edit? `data-ink="${key}"` : ''} aria-hidden="true">${L.filter(st=>st.t!=='tx').map(inkPath).join('')}</svg>`
    +(L.some(st=>st.t==='tx')? `<div class="sl-txl ${edit&&S.draw&&S.inkT==='tx'?'on':''}" ${edit? `data-inkl="${key}"` : ''}>${L.map((st,k)=>st.t==='tx'? inkTx(st,k,edit) : '').join('')}</div>` : ''); };
Object.assign(SLIDE_ACT,{
  'sl-draw'(){ S.draw=!S.draw; render(); },
  'sl-unauto'(){ slUnauto(); S.slStu=''; render(); toast('Aula desfeita'); },
  'sl-msgx'(){ S.slMsg=null; render(); },
  'sl-board'(){ S.sl.board=!S.sl.board; if (S.sl.board&&!S.draw){ S.draw=true; S.inkT='tx'; } ttsStop(); render(); },
  'sl-color'(el){ S.inkC=el.dataset.c; render(); },
  'sl-undo'(){ const k=inkKey(), L=DB.ink?.[k]; if (L?.length){ L.pop(); save(); render(); liveSlide(); } },
  'sl-clear'(){ const k=inkKey(); if (DB.ink?.[k]?.length&&confirm(S.sl.board? 'Apagar tudo o que está na lousa?' : 'Apagar os desenhos e textos deste slide?')){ delete DB.ink[k]; save(); render(); liveSlide(); } },
});
let SLINK=null;
/* ferramenta Texto: clique no slide abre uma caixa; Enter salva, Shift+Enter quebra a linha, Esc cancela.
   Clicar num texto que já existe edita (apagar tudo e salvar remove o texto). */
function inkTextBox(key,x,y,k){
  const stage=document.getElementById('sl-stage'); if (!stage) return;
  stage.querySelector('.sl-txin')?.remove();
  const L=DB.ink?.[key]||[], old=k!=null? L[k] : null;
  const ta=document.createElement('textarea'); ta.className='sl-txin'; ta.rows=1; ta.value=old?.s||''; ta.placeholder='Escreva aqui…';
  ta.style.left=x/10+'%'; ta.style.top=y/10+'%'; ta.style.color=old?.c||S.inkC||INK_COLORS[0];
  if (old) stage.querySelector(`[data-tx="${k}"]`)?.classList.add('editing');
  let done=false;
  const fit=()=>{ ta.style.height='auto'; ta.style.height=ta.scrollHeight+'px'; };
  const finish=ok=>{ if (done) return; done=true; const v=ta.value.replace(/\s+$/,'');
    if (ok){ const A=((DB.ink ||= {})[key] ||= []);
      if (old){ if (v) old.s=v; else A.splice(k,1); } else if (v) A.push({t:'tx',x,y,s:v,c:S.inkC||INK_COLORS[0]});
      if (!A.length) delete DB.ink[key];
      if (v||old){ save(); liveSlide(); } }
    render(); };
  ta.addEventListener('input',fit);
  ta.addEventListener('keydown',e=>{ e.stopPropagation(); if (e.key==='Enter'&&!e.shiftKey){ e.preventDefault(); finish(true); } else if (e.key==='Escape'){ e.preventDefault(); finish(false); } });
  ta.addEventListener('blur',()=>finish(true));
  stage.appendChild(ta); fit(); ta.focus(); setTimeout(()=>{ ta.focus(); ta.setSelectionRange(ta.value.length,ta.value.length); },0);
}
document.addEventListener('pointerdown',e=>{
  const tx=e.target.closest?.('.sl-txl.on [data-tx]');
  if (tx){ e.preventDefault(); const lay=tx.closest('.sl-txl'), st=DB.ink?.[lay.dataset.inkl]?.[+tx.dataset.tx]; if (st) inkTextBox(lay.dataset.inkl,st.x,st.y,+tx.dataset.tx); return; }
  const sv=e.target.closest?.('svg.sl-ink.on'); if (!sv) return; e.preventDefault();
  if (S.inkT==='tx'){ const r=sv.getBoundingClientRect(); inkTextBox(sv.dataset.ink,Math.round((e.clientX-r.left)/r.width*1000),Math.round((e.clientY-r.top)/r.height*1000)); return; }
  sv.setPointerCapture?.(e.pointerId);
  const r=sv.getBoundingClientRect(), pt=ev=>`${Math.round((ev.clientX-r.left)/r.width*1000)},${Math.round((ev.clientY-r.top)/r.height*1000)}`;
  const pl=document.createElementNS('http://www.w3.org/2000/svg','polyline'); const hl=S.inkT==='hl', st={c:S.inkC||INK_COLORS[0],w:hl? 22 : 4,o:hl? .35 : 1,p:pt(e)};
  pl.setAttribute('fill','none'); pl.setAttribute('stroke',st.c); pl.setAttribute('stroke-width',st.w); pl.setAttribute('stroke-opacity',st.o); pl.setAttribute('stroke-linecap','round'); pl.setAttribute('stroke-linejoin','round'); pl.setAttribute('vector-effect','non-scaling-stroke'); pl.setAttribute('points',st.p); sv.appendChild(pl);
  SLINK={sv,pl,st,pt,key:sv.dataset.ink}; });
document.addEventListener('pointermove',e=>{ if (!SLINK) return; SLINK.st.p+=' '+SLINK.pt(e); SLINK.pl.setAttribute('points',SLINK.st.p); });
const inkEnd=()=>{ if (!SLINK) return; const {st,key}=SLINK; SLINK=null; if (st.p.split(' ').length<2) st.p+=' '+st.p; ((DB.ink ||= {})[key] ||= []).push(st); save(); liveSlide(); };
document.addEventListener('pointerup',inkEnd); document.addEventListener('pointercancel',inkEnd);

/* apresentação mostrada para um aluno: fica lembrada (sugestão ao registrar a aula) e,
   se a aula dele está acontecendo agora e ainda não tem apresentação, já fica ligada ao histórico */
function slLink(d){ const sid=slStudent(); if (!sid) return;
  (S.slUsed ||= {})[sid]={id:d.id,at:now()};
  /* a aula do aluno que está acontecendo (ou marcada perto de agora) recebe a apresentação */
  const near=(DB.lessons||[]).filter(x=>x.studentId===sid&&x.status!=='cancelada'&&(isLive(x)||Math.abs(x.start-now())<2*HOUR)).sort((a,b)=>Math.abs(a.start-now())-Math.abs(b.start-now()))[0];
  if (near){ if (!near.deckId){ near.deckId=d.id; near.deckTitle=d.title; save(); S.slMsg={deck:d.id,txt:`Apresentação ligada à aula de ${user(sid).name.split(' ')[0]} no histórico.`}; } return; }
  /* sem aula por perto: quando a professora escolhe o aluno, a aula de agora entra no histórico */
  if (!S.slAutoOk) return; S.slAutoOk=false;
  const l={id:uid(),studentId:sid,start:Math.floor(now()/(5*MIN))*5*MIN,dur:60,status:'agendada',note:'',extra:true,auto:true,deckId:d.id,deckTitle:d.title};
  DB.lessons.push(l); save(); S.slAuto={id:l.id,sid};
  S.slMsg={deck:d.id,txt:`Aula de agora criada no histórico de ${user(sid).name.split(' ')[0]}, com esta apresentação. Depois é só registrar como foi.`,undo:l.id};
}
/* desfaz a aula criada sozinha, se ela ainda não foi mexida */
function slUnauto(){ const a=S.slAuto; if (!a) return; const l=getLesson(a.id); if (l&&l.auto&&l.status==='agendada'&&!l.note){ DB.lessons=DB.lessons.filter(x=>x.id!==l.id); save(); } S.slAuto=null; S.slMsg=null; }

/* aluno que está recebendo a aula: o da aula marcada agora, ou o escolhido */
function slStudent(){ if (S.slStu===undefined){ const l=(DB.lessons||[]).find(l=>isLive(l)&&user(l.studentId)?.teacherId===S.me); S.slStu=l? l.studentId : ''; } return S.slStu; }
document.addEventListener('change',e=>{ const el=e.target; if (el.dataset?.slstu){ slUnauto(); S.slStu=el.value; S.slAutoOk=!!el.value; render(); } if (el.dataset?.sldue){ S.slDue=el.value==='7'; render(); } });
