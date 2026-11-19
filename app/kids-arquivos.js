/* =========================================================
   Sotaque · Kids: livrinhos (African Storybook, CC BY 4.0) e materiais da professora
   - Livrinhos: leitor com áudio narrado por página, impressão, colar a página no caderno
     e atividades do livro (ordem da história, parte favorita). Os pais também podem ler.
   - Meus materiais: a professora envia PDFs e imagens. A lista fica em DB.kfiles (nuvem);
     o arquivo fica no aparelho (IndexedDB) e, no Sotaque com login, também na nuvem em
     pedaços (registros "kblob", baixados só quando o arquivo é aberto).
   ========================================================= */
const KB_BASE=(()=>{ try { return new URL('livros/',document.currentScript.src).href; } catch { return 'livros/'; } })();
const KBOOK={}, KBOOKP={};
const kbookById=id=>(typeof KIDS_BOOKS!=='undefined'? KIDS_BOOKS : []).find(b=>b.id===id);
function kbookLoad(id){ if (KBOOK[id]) return Promise.resolve(KBOOK[id]); return KBOOKP[id] ||= fetch(KB_BASE+id+'.json').then(r=>{ if (!r.ok) throw new Error('livro'); return r.json(); }).then(j=>KBOOK[id]=j).catch(e=>{ delete KBOOKP[id]; throw e; }); }
const kbookCredit=b=>`“${b.title}” · Story: ${b.text||'African Storybook'} · Illustrations: ${b.ill||'African Storybook'} · African Storybook Initiative (africanstorybook.org) · CC BY 4.0 · narração e diagramação: Sotaque`;
let KBAUD=null;
function kbookPlay(id,i,then){ const B=KBOOK[id], p=B?.p[i]; if (!p?.a){ then&&setTimeout(then,1800); return; } if (typeof ttsStop==='function') ttsStop(); KBAUD ||= new Audio(); KBAUD.onended=then? ()=>setTimeout(then,700) : null; KBAUD.src='data:audio/mpeg;base64,'+p.a; KBAUD.play().catch(()=>{}); }
const kbookStop=()=>{ if (KBAUD){ KBAUD.onended=null; KBAUD.pause(); } S.kbAuto=false; };

/* estante (dentro da aba Kids) */
function kidsBooksShelf(age){ const L=(typeof KIDS_BOOKS!=='undefined'? KIDS_BOOKS : []).filter(b=>!age||b.age===age||(age==='a5'&&b.age==='a3'));
  return `<section class="kb-shelf"><div class="panel-h"><h2>Livrinhos para ler e ouvir <small class="muted">${L.length}</small></h2></div>
    <p class="meta">Histórias ilustradas em inglês do African Storybook (licença aberta CC BY), com áudio narrado em cada página. Leia na aula, imprima, cole no caderno ou mande para os pais.</p>
    <div class="kb-grid">${L.map(b=>`<a class="kb-card" href="#livro-${b.id}"><img src="data:image/jpeg;base64,${b.th}" alt="" loading="lazy"><b>${esc(b.title)}</b><small>${KIDS_AGES[b.age]} · ${b.n} páginas</small></a>`).join('')}</div></section>`; }
/* leitor */
function viewBook(id){ const b=kbookById(id); if (!b) return '<div class="panel"><p>Livro não encontrado.</p></div>';
  const B=KBOOK[id]; if (!B){ kbookLoad(id).then(()=>{ if (S.route.name==='livro'&&S.route.id===id) render(); }).catch(()=>toast('Não consegui abrir o livro.')); return `<div class="panel"><p class="meta">Abrindo “${esc(b.title)}”…</p></div>`; }
  if (S.kb?.id!==id) S.kb={id,i:0}; const i=Math.min(S.kb.i,B.p.length-1), p=B.p[i], K=isT()? kidsStudents() : [];
  return `<div class="kb ${S.kbFs? 'kb-fs' : ''}" id="kb">
    <div class="kp-tools no-print"><a class="link" href="${isT()? '#kids' : '#inicio'}">← ${isT()? 'Kids' : 'Voltar'}</a><b class="grow">${esc(b.title)} <small class="muted">${KIDS_AGES[b.age]}</small></b>
      <button class="btn small" data-act="kb-auto">${S.kbAuto? '■ Parar' : '▶ Ler o livro todo'}</button><button class="btn small ghost" data-act="kb-fs">${S.kbFs? 'Sair da tela cheia' : 'Tela cheia'}</button>${isT()? `<button class="btn small" data-act="kb-print">Imprimir</button>` : ''}</div>
    ${isT()&&K.length? `<div class="kp-tools no-print kp-use"><label>Para <select data-kstu="1">${K.map(s=>`<option value="${s.id}" ${s.id===(S.kstu||K[0].id)?'selected':''}>${esc(s.name)}</option>`).join('')}</select></label>
      <button class="btn small" data-act="kb-use">Ligar à aula</button><button class="btn small" data-act="kb-cad">Colar esta página no caderno</button><button class="btn small" data-act="kb-sheet" data-k="ordem">Atividade: ordem da história</button><button class="btn small" data-act="kb-sheet" data-k="favorita">Atividade: parte favorita</button></div>` : ''}
    <div class="kb-page"><button class="kb-nav" data-act="kb-go" data-v="${i-1}" ${i? '' : 'disabled'} aria-label="Página anterior">‹</button>
      <figure><img src="data:image/jpeg;base64,${p.i}" alt=""><figcaption>${p.t? `<button class="kb-say" data-act="kb-say" aria-label="Ouvir">🔈</button>` : ''}<span>${esc(p.t)}</span></figcaption></figure>
      <button class="kb-nav" data-act="kb-go" data-v="${i+1}" ${i<B.p.length-1? '' : 'disabled'} aria-label="Próxima página">›</button></div>
    <div class="kb-dots">${B.p.map((_,k)=>`<button class="${k===i?'on':''}" data-act="kb-go" data-v="${k}" aria-label="Página ${k+1}"></button>`).join('')}</div>
    <p class="kb-credit">${esc(kbookCredit(b))}</p>
    <div class="kb-print">${B.p.map((q,k)=>`<div class="kb-pp"><img src="data:image/jpeg;base64,${q.i}" alt=""><p>${esc(q.t)}</p><small>${k+1}</small></div>`).join('')}<p class="kb-credit">${esc(kbookCredit(b))}</p></div></div>`; }
/* atividades geradas a partir do livro (SVG A4) */
function kbookSheet(id,kind){ const b=kbookById(id), B=KBOOK[id]; if (!b||!B) return ''; const R=rng(hashStr(id+kind)), pages=B.p.map((p,k)=>({...p,k})).filter(p=>p.t);
  const credit=kT(500,1372,`${b.title} · African Storybook (CC BY 4.0) · Story: ${b.text||'-'} · Illustrations: ${(b.ill||'-').split(',')[0]}`,{s:13,b:false,c:'#b2a7aa',a:'middle',f:KFS});
  if (kind==='ordem'){ const n=Math.min(4,pages.length), pick=[...Array(n)].map((_,k)=>pages[Math.floor(k*(pages.length-1)/(n-1||1))]), sh=kShuf(pick,R); let g='';
    sh.forEach((p,k)=>{ const x=60+(k%2)*450, y=275+Math.floor(k/2)*520; g+=kBox(x+10,y,420,490,k,{r:26})+`<image href="data:image/jpeg;base64,${p.i}" x="${x+40}" y="${y+20}" width="360" height="300" preserveAspectRatio="xMidYMid meet"/>`+`<rect x="${x+30}" y="${y+20}" width="70" height="70" rx="16" fill="#fff" stroke="#2a2326" stroke-width="3"/>`+`<foreignObject x="${x+30}" y="${y+330}" width="380" height="150"><div xmlns="http://www.w3.org/1999/xhtml" style="font:700 21px/1.3 Andika,Figtree,sans-serif;color:#2a2326;text-align:center">${esc(p.t.length>140? p.t.slice(0,137)+'…' : p.t)}</div></foreignObject>`; });
    return kPage('','Put the story in order',`Numere as cenas de “${b.title}” na ordem da história`,g+credit,{ic:'closed-book'}); }
  const fav=`${kBox(80,280,840,620,3,{fill:'#fffdf8',stroke:'#2a2326',r:34})}${kE('crayon',100,300,70)}${kT(100,990,'My favourite part is when',{s:40})}${kRule(100,920,1090,80)}${kRule(100,920,1190,80)}${kT(100,1290,`I like this story because it is`,{s:30,b:false})}${kAns(560,1292,360)}`;
  return kPage('',`My favourite part`,`Desenhe a sua parte favorita de “${b.title}” e escreva`,fav+credit,{ic:'closed-book'}); }

/* ---------- meus materiais (PDF e imagem) ---------- */
const kfilesMine=()=>(DB.kfiles ||= []).filter(f=>f.teacherId===S.me);
const kfileById=id=>(DB.kfiles||[]).find(f=>f.id===id);
const KFDOC={};
const b64OfBlob=blob=>new Promise((res,rej)=>{ const r=new FileReader(); r.onload=()=>res(String(r.result).split(',')[1]); r.onerror=rej; r.readAsDataURL(blob); });
async function kfileCloudPut(id,blob){ if (!REAL||typeof cloudClient!=='function'||!CLOUD.member) return 0; const sb=cloudClient(), T=CLOUD.member.teacher_id, CH=700*1024, n=Math.ceil(blob.size/CH);
  for (let i=0;i<n;i++){ const b=await b64OfBlob(blob.slice(i*CH,(i+1)*CH)); const {error}=await sb.from('sq_records').upsert({teacher_id:T,id:`kblob:${id}:${i}`,kind:'kblob',student_id:null,data:{i,n,b},updated_at:new Date().toISOString()},{onConflict:'teacher_id,id'}); if (error) throw error; }
  return n; }
async function kfileCloudGet(f){ const sb=cloudClient(), T=CLOUD.member.teacher_id; const {data,error}=await sb.from('sq_records').select('data').eq('teacher_id',T).eq('kind','kblob').like('id',`kblob:${f.id}:%`); if (error) throw error;
  const parts=data.map(r=>r.data).sort((a,b)=>a.i-b.i); if (!parts.length) throw new Error('vazio');
  const bin=parts.map(p=>{ const s=atob(p.b), u=new Uint8Array(s.length); for (let k=0;k<s.length;k++) u[k]=s.charCodeAt(k); return u; }); return new Blob(bin,{type:f.type}); }
async function kfileBlob(f){ let b=null; try { b=await idbGet('kf_'+f.id); } catch {} if (b) return b; if (REAL&&f.cloud){ b=await kfileCloudGet(f); try { await idbPut('kf_'+f.id,b); } catch {} return b; } throw new Error('missing'); }
async function kfilePages(f){ if (KFDOC[f.id]) return KFDOC[f.id]; const blob=await kfileBlob(f);
  if (/pdf/.test(f.type)){ const lib=await loadPdfjs(), doc=await lib.getDocument({data:new Uint8Array(await blob.arrayBuffer())}).promise; return KFDOC[f.id]={pdf:doc,n:doc.numPages}; }
  return KFDOC[f.id]={img:URL.createObjectURL(blob),n:1}; }
async function kfilePageImg(f,i,w=1400){ const D=await kfilePages(f); if (D.img) return D.img;
  const pg=await D.pdf.getPage(i+1), v=pg.getViewport({scale:1}), vp=pg.getViewport({scale:w/v.width}), c=document.createElement('canvas'); c.width=vp.width; c.height=vp.height; await pg.render({canvasContext:c.getContext('2d'),viewport:vp}).promise; return c.toDataURL('image/jpeg',.85); }
async function kfileImport(files){ const L=[...files].filter(f=>/pdf|image\//.test(f.type)); if (!L.length){ toast('Escolha um PDF ou uma imagem.'); return; }
  for (const file of L){ if (file.size>25*1024*1024){ toast(`“${file.name}” é grande demais (máximo 25 MB).`); continue; }
    const id='kf'+uid(), f={id,name:file.name.replace(/\.[a-z0-9]+$/i,''),type:file.type,size:file.size,teacherId:S.me,createdAt:now(),pages:null,thumb:'',age:S.kage||'',cloud:false};
    try { await idbPut('kf_'+id,file); } catch {} DB.kfiles=(DB.kfiles||[]); DB.kfiles.push(f); save(); render();
    try { const D=await kfilePages(f); f.pages=D.n; const t=await kfilePageImg(f,0,260); f.thumb=t.startsWith('blob:')? await new Promise(res=>{ const im=new Image(); im.onload=()=>{ const c=document.createElement('canvas'), k=260/im.width; c.width=260; c.height=im.height*k; c.getContext('2d').drawImage(im,0,0,c.width,c.height); res(c.toDataURL('image/jpeg',.6)); }; im.src=t; }) : t; save(); render(); } catch {}
    if (REAL){ toast(`Enviando “${f.name}” para a nuvem…`); try { await kfileCloudPut(id,file); f.cloud=true; save(); toast(`“${f.name}” salvo na nuvem`); } catch { toast('Não consegui enviar para a nuvem agora. O arquivo ficou neste aparelho.'); } }
    else toast(`“${f.name}” guardado`); render(); } }
function kidsFilesHtml(){ const F=kfilesMine();
  return `<section class="kb-shelf"><div class="panel-h"><h2>Meus materiais <small class="muted">${F.length}</small></h2><label class="btn small primary" for="kf-in">+ Enviar PDF ou imagem</label><input type="file" id="kf-in" accept="application/pdf,image/*" multiple hidden></div>
    <p class="meta">${REAL? 'Os arquivos ficam salvos na nuvem: abra em qualquer aparelho, imprima e cole no caderno digital.' : 'No modo demonstração, os arquivos ficam neste navegador.'}</p>
    ${F.length? `<div class="kb-grid">${F.map(f=>`<a class="kb-card kf-card" href="#kfile-${f.id}">${f.thumb? `<img src="${f.thumb}" alt="">` : `<span class="kf-ph">${/pdf/.test(f.type)? 'PDF' : 'IMG'}</span>`}<b>${esc(f.name)}</b><small>${f.pages? f.pages+(f.pages===1? ' página' : ' páginas')+' · ' : ''}${fmtSize(f.size)}${f.cloud? ' · ☁' : ''}</small></a>`).join('')}</div>` : ''}</section>`; }
function viewKfile(id){ const f=kfileById(id); if (!f) return '<div class="panel"><p>Material não encontrado.</p></div>'; const K=kidsStudents();
  if (!KFDOC[id]) kfilePages(f).then(()=>{ if (S.route.name==='kfile') render(); }).catch(()=>{ S.kfErr=id; if (S.route.name==='kfile') render(); });
  const D=KFDOC[id];
  return `<div class="kp"><div class="kp-tools no-print"><a class="link" href="#kids">← Kids</a><b class="grow">${esc(f.name)}</b><button class="btn small primary" data-act="kf-print" data-id="${id}">Imprimir</button><button class="btn small danger" data-act="kf-del" data-id="${id}">Excluir</button></div>
    ${K.length? `<div class="kp-tools no-print kp-use"><label>Para <select data-kstu="1">${K.map(s=>`<option value="${s.id}" ${s.id===(S.kstu||K[0].id)?'selected':''}>${esc(s.name)}</option>`).join('')}</select></label><button class="btn small" data-act="kf-use" data-id="${id}">Ligar à aula</button><span class="meta muted">Para colar no caderno, toque em “Colar” embaixo da página.</span></div>` : ''}
    <div class="kf-pages" id="kf-pages">${D? [...Array(D.n)].map((_,i)=>`<div class="kf-pg"><div class="kf-img" data-kfimg="${id}:${i}"><span class="meta">Página ${i+1}…</span></div>${K.length? `<button class="btn small no-print" data-act="kf-cad" data-id="${id}" data-i="${i}">Colar no caderno</button>` : ''}</div>`).join('') : S.kfErr===id? '<p class="meta">Não encontrei este arquivo neste aparelho nem na nuvem.</p>' : '<p class="meta">Abrindo…</p>'}</div></div>`; }
async function kfileFill(){ for (const el of document.querySelectorAll('[data-kfimg]')){ if (el.dataset.done) continue; el.dataset.done=1; const [id,i]=el.dataset.kfimg.split(':'), f=kfileById(id); try { const src=await kfilePageImg(f,+i,1500); el.innerHTML=`<img src="${src}" alt="">`; } catch { el.innerHTML='<span class="meta">Não deu para mostrar esta página.</span>'; } } }

/* ---------- ações ---------- */
Object.assign(KIDS_ACT,{
  'kb-go'(el){ const B=KBOOK[S.kb.id]; S.kb.i=Math.max(0,Math.min(B.p.length-1,+el.dataset.v)); if (!S.kbAuto) kbookStop(); render(); },
  'kb-say'(){ kbookPlay(S.kb.id,S.kb.i); },
  'kb-auto'(){ if (S.kbAuto){ kbookStop(); render(); return; } S.kbAuto=true; const step=()=>{ if (!S.kbAuto||S.route.name!=='livro') return; render(); kbookPlay(S.kb.id,S.kb.i,()=>{ const B=KBOOK[S.kb.id]; if (S.kb.i<B.p.length-1){ S.kb.i++; step(); } else { S.kbAuto=false; render(); } }); }; step(); },
  'kb-fs'(){ S.kbFs=!S.kbFs; if (S.kbFs) document.documentElement.requestFullscreen?.().catch(()=>{}); else document.exitFullscreen?.().catch(()=>{}); render(); },
  'kb-print'(){ document.body.classList.add('kb-printing'); window.print(); setTimeout(()=>document.body.classList.remove('kb-printing'),500); },
  'kb-use'(){ const sid=$('[data-kstu]')?.value; if (sid) kidsUse(sid,{k:'livro',t:S.kb.id}); },
  'kb-cad'(){ const sid=$('[data-kstu]')?.value; if (!sid) return; const B=KBOOK[S.kb.id], p=B.p[S.kb.i], c=cadOf(sid), pg=cadNewPage(sid,'caligrafia');
    const im=new Image(); im.onload=()=>{ const k=Math.min(860/im.width,760/im.height), w=im.width*k, h=im.height*k; pg.items.push({id:'i'+uid(),t:'img',src:'data:image/jpeg;base64,'+p.i,x:(CAD_W-w)/2,y:60,w,h,r:0});
      if (p.t) pg.items.push({id:'i'+uid(),t:'text',txt:p.t,x:70,y:h+90,w:860,h:120,r:0,fs:44,c:'#221c1e'}); c.pages.push(pg.id); kidsUse(sid,{k:'livro',t:S.kb.id},true); save(); toast('Página colada no caderno'); location.hash='caderno-'+sid; setTimeout(()=>{ if (CD.sid===sid) cadGo(cadPages(sid).length-1); },60); };
    im.src='data:image/jpeg;base64,'+p.i; },
  'kb-sheet'(el){ const svg=kbookSheet(S.kb.id,el.dataset.k); openModal(`<div class="kp-page kb-sheetm">${svg}</div><div class="actions no-print"><button class="btn" data-act="close">Fechar</button><button class="btn primary" data-act="kb-sheet-print">Imprimir</button></div>`,{wide:true}); },
  'kb-sheet-print'(){ document.body.classList.add('modal-printing'); window.print(); setTimeout(()=>document.body.classList.remove('modal-printing'),500); },
  'kf-print'(el){ const f=kfileById(el.dataset.id); kfileFill().then(()=>{ document.body.classList.add('kf-printing'); window.print(); setTimeout(()=>document.body.classList.remove('kf-printing'),500); }); },
  'kf-del'(el){ const f=kfileById(el.dataset.id); confirmBox(`Excluir “${f.name}”?`,'Excluir',async ()=>{ DB.kfiles=DB.kfiles.filter(x=>x.id!==f.id); save(); try { await idbDel('kf_'+f.id); } catch {} if (REAL&&f.cloud){ try { await cloudClient().from('sq_records').delete().eq('teacher_id',CLOUD.member.teacher_id).like('id',`kblob:${f.id}:%`); } catch {} } location.hash='kids'; toast('Material excluído'); }); },
  'kf-use'(el){ const sid=$('[data-kstu]')?.value; if (sid) kidsUse(sid,{k:'file',t:el.dataset.id}); },
  'kf-cad'(el){ const sid=$('[data-kstu]')?.value, f=kfileById(el.dataset.id); if (!sid||!f) return; toast('Colando no caderno…');
    kfilePageImg(f,+el.dataset.i,1400).then(src=>{ const im=new Image(); im.onload=()=>{ const k=Math.min((CAD_W-40)/im.width,(CAD_H-40)/im.height), c=cadOf(sid), pg=cadNewPage(sid,'branca'); pg.items.push({id:'i'+uid(),t:'img',src:src.startsWith('blob:')? kfToData(im) : src,x:(CAD_W-im.width*k)/2,y:(CAD_H-im.height*k)/2,w:im.width*k,h:im.height*k,r:0}); c.pages.push(pg.id); kidsUse(sid,{k:'file',t:f.id},true); save(); location.hash='caderno-'+sid; setTimeout(()=>{ if (CD.sid===sid) cadGo(cadPages(sid).length-1); },60); }; im.src=src; }).catch(()=>toast('Não consegui abrir esta página.')); },
});
function kfToData(im){ const c=document.createElement('canvas'), k=Math.min(1,1400/Math.max(im.width,im.height)); c.width=im.width*k; c.height=im.height*k; c.getContext('2d').drawImage(im,0,0,c.width,c.height); return c.toDataURL('image/jpeg',.82); }
document.addEventListener('change',e=>{ if (e.target.id==='kf-in'&&e.target.files.length) kfileImport(e.target.files); });
const kfObs=new MutationObserver(()=>{ if (document.querySelector('[data-kfimg]:not([data-done])')) kfileFill(); }); kfObs.observe(document.documentElement,{childList:true,subtree:true});
