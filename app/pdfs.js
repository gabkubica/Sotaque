/* =========================================================
   Sotaque · PDFs
   A professora importa PDFs e mostra na aula, página por página, com caneta e marca-texto por cima.
   Os arquivos ficam neste aparelho (IndexedDB); a lista vai em DB.pdfs. O leitor é o pdf.js
   (Mozilla, licença Apache 2.0), guardado em vendor/pdfjs e carregado só quando um PDF é aberto.
   O texto de uma página pode virar uma atividade nova no banco.
   ========================================================= */
const PDF_STORE='sotaque-pdf', PDFDOC={}, INK={};
const pdfsMine=()=>(DB.pdfs ||= []).filter(p=>p.teacherId===S.me);
const pdfById=id=>(DB.pdfs||[]).find(p=>p.id===id);
function idb(){ return new Promise((res,rej)=>{ const r=indexedDB.open(PDF_STORE,1); r.onupgradeneeded=()=>r.result.createObjectStore('files'); r.onsuccess=()=>res(r.result); r.onerror=()=>rej(r.error); }); }
async function idbDo(mode,fn){ const db=await idb(); return new Promise((res,rej)=>{ const tx=db.transaction('files',mode), st=tx.objectStore('files'), rq=fn(st); tx.oncomplete=()=>res(rq?.result); tx.onerror=()=>rej(tx.error); }); }
const idbPut=(id,blob)=>idbDo('readwrite',st=>st.put(blob,id));
const idbGet=id=>idbDo('readonly',st=>st.get(id));
const idbDel=id=>idbDo('readwrite',st=>st.delete(id));
let PDFJS=null;
function loadPdfjs(){
  if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
  return PDFJS ||= new Promise((res,rej)=>{ const sc=document.createElement('script'); sc.src='vendor/pdfjs/pdf.min.js';
    sc.onload=()=>{ pdfjsLib.GlobalWorkerOptions.workerSrc='vendor/pdfjs/pdf.worker.min.js'; res(pdfjsLib); }; sc.onerror=()=>{ PDFJS=null; rej(new Error('pdfjs')); }; document.head.appendChild(sc); });
}
async function pdfDoc(id){
  if (PDFDOC[id]) return PDFDOC[id];
  const [lib,blob]=await Promise.all([loadPdfjs(),idbGet(id)]);
  if (!blob) throw new Error('missing');
  return PDFDOC[id]=await lib.getDocument({data:new Uint8Array(await blob.arrayBuffer())}).promise;
}
async function importPdfs(files){
  const list=[...files].filter(f=>/pdf$/i.test(f.type)||/\.pdf$/i.test(f.name)); if (!list.length){ toast('Escolha um arquivo PDF.'); return; }
  for (const f of list){
    if (f.size>80*1024*1024){ toast(`“${f.name}” é grande demais (mais de 80 MB).`); continue; }
    const id='p'+uid(); try { await idbPut(id,f); } catch { toast('Não deu para guardar o PDF neste navegador.'); continue; }
    const p={id,name:f.name.replace(/\.pdf$/i,''),size:f.size,teacherId:S.me,createdAt:now(),pages:null,thumb:''}; DB.pdfs.push(p); save();
    pdfDoc(id).then(async doc=>{ p.pages=doc.numPages; const pg=await doc.getPage(1), v=pg.getViewport({scale:1}), sc=240/v.width, vp=pg.getViewport({scale:sc}), c=document.createElement('canvas'); c.width=vp.width; c.height=vp.height;
      await pg.render({canvasContext:c.getContext('2d'),viewport:vp}).promise; p.thumb=c.toDataURL('image/jpeg',.6); save(); if (S.route.name==='pdfs') render(); }).catch(()=>{});
  }
  render(); toast(list.length===1? 'PDF importado' : `${list.length} PDFs importados`);
}
const fmtSize=b=>b>1048576? (b/1048576).toFixed(1).replace('.',',')+' MB' : Math.max(1,Math.round(b/1024))+' KB';

/* ---------- Biblioteca · PDFs ---------- */
function viewPdfs(){
  const list=pdfsMine().sort((a,b)=>b.createdAt-a.createdAt);
  return `${libHeader('pdf')}
    ${list.length? `<div class="bgrid">${list.map(p=>`<article class="bcard"><a class="bcard-art pdf-th" href="#pdf-${p.id}">${p.thumb? `<img src="${p.thumb}" alt="">` : quadro('mostarda','livro',hashStr(p.id)%997,{w:320,h:110,frame:false})}</a>
      <div class="bcard-b"><b>${esc(p.name)}</b><small>${p.pages? `${p.pages} ${p.pages===1?'página':'páginas'} · ` : ''}${fmtSize(p.size)}</small>
      <div class="row-btns" style="margin-top:6px"><a class="btn small primary" href="#pdf-${p.id}">Abrir</a><button class="btn small ghost" data-act="pdf-del" data-id="${p.id}">Excluir</button></div></div></article>`).join('')}</div>`
    : `<div class="panel"><div class="empty">${quadro('mostarda','livro',12,{w:320,h:150})}<p>Importe um PDF para mostrar na aula: apostila, exercício, texto. Você passa as páginas, risca e marca por cima com a tela compartilhada.</p><label class="btn primary" for="pdf-in">Importar PDF</label></div></div>`}
    <p class="meta muted" style="margin-top:16px">Os PDFs ficam guardados neste aparelho. Use material que você pode usar nas aulas e evite mandar o arquivo de livros comprados para os alunos.</p>`;
}
/* ---------- leitor (na Biblioteca e dentro da Aula) ---------- */
function pdfViewer(id,page,embed){
  const p=pdfById(id); if (!p) return '<p class="muted">PDF não encontrado neste aparelho.</p>';
  if (!S.pdfv||S.pdfv.id!==id) S.pdfv={id,page:page||1,tool:'none',color:'#7a1f35'};
  const V=S.pdfv, tools=[['none','Ver'],['pen','Caneta'],['hl','Marca-texto']], colors=['#7a1f35','#1f5aa8','#2f7d55','#221c1e'];
  return `<div class="pdf-view ${embed?'embed':''}" id="pdf-view">
    <div class="pdf-bar"><button class="btn small" data-act="pdf-page" data-v="-1" aria-label="Página anterior">‹</button><span class="pdf-pg"><b id="pdf-n">${V.page}</b> de <span id="pdf-total">${p.pages||'…'}</span></span><button class="btn small" data-act="pdf-page" data-v="1" aria-label="Próxima página">›</button>
      <span class="spd" role="group" aria-label="Ferramenta">${tools.map(([k,l])=>`<button type="button" class="${V.tool===k?'on':''}" data-act="pdf-tool" data-v="${k}">${l}</button>`).join('')}</span>
      ${V.tool==='pen'? `<span class="pdf-colors">${colors.map(c=>`<button type="button" class="${V.color===c?'on':''}" style="--c:${c}" data-act="pdf-color" data-v="${c}" aria-label="Cor"></button>`).join('')}</span>` : ''}
      <button class="btn small ghost" data-act="pdf-clear">Apagar marcas</button>${embed? '' : `<button class="btn small" data-act="pdf-text">Virar atividade</button>`}<button class="btn small" data-act="pdf-full">Tela cheia</button></div>
    <div class="pdf-stage" data-pdf-mount="${id}"><p class="muted pdf-load">Abrindo o PDF…</p></div></div>`;
}
function viewPdf(id){
  const p=pdfById(id); if (!p) return `<div class="panel"><p>PDF não encontrado neste aparelho.</p><a class="btn" href="#pdfs">Biblioteca · PDFs</a></div>`;
  return `<a class="link" href="#pdfs" style="display:inline-block;margin-bottom:12px;text-decoration:none">← Biblioteca · PDFs</a><h1 style="margin-bottom:12px">${esc(p.name)}</h1>${pdfViewer(id,1,false)}`;
}
async function mountPdfs(){
  for (const el of document.querySelectorAll('[data-pdf-mount]')){
    const id=el.dataset.pdfMount, V=S.pdfv; let doc;
    try { doc=await pdfDoc(id); } catch { el.innerHTML='<p class="err" style="padding:16px">Não deu para abrir este PDF. Ele foi importado em outro aparelho, ou o navegador apagou os dados do site.</p>'; continue; }
    if (!el.isConnected) return;
    const p=pdfById(id); if (p&&!p.pages){ p.pages=doc.numPages; save(); }
    V.page=Math.min(Math.max(1,V.page),doc.numPages); const tot=document.getElementById('pdf-total'), n=document.getElementById('pdf-n'); if (tot) tot.textContent=doc.numPages; if (n) n.textContent=V.page;
    const pg=await doc.getPage(V.page), base=pg.getViewport({scale:1}), full=!!document.fullscreenElement;
    const w=Math.min(el.clientWidth||800, full? innerWidth : 1100), h0=full? innerHeight-70 : Infinity, scale=Math.min(w/base.width,h0/base.height), dpr=Math.min(2,devicePixelRatio||1), vp=pg.getViewport({scale:scale*dpr});
    const wrap=document.createElement('div'); wrap.className='pdf-page'; wrap.style.width=vp.width/dpr+'px'; wrap.style.height=vp.height/dpr+'px';
    const c=document.createElement('canvas'), ink=document.createElement('canvas'); c.width=ink.width=vp.width; c.height=ink.height=vp.height; ink.className='pdf-ink'+(V.tool==='none'? '' : ' on');
    wrap.append(c,ink); el.innerHTML=''; el.append(wrap);
    await pg.render({canvasContext:c.getContext('2d'),viewport:vp}).promise;
    drawInk(ink,id,V.page); bindInk(ink,id,V.page);
  }
}
const inkOf=(id,page)=>(INK[id+'|'+page] ||= []);
function drawInk(cv,id,page){ const x=cv.getContext('2d'); x.clearRect(0,0,cv.width,cv.height); x.lineCap='round'; x.lineJoin='round';
  for (const s of inkOf(id,page)){ x.strokeStyle=s.c; x.globalAlpha=s.hl? .35 : 1; x.lineWidth=(s.hl? .022 : .004)*cv.width; x.beginPath(); s.p.forEach(([a,b],i)=>i? x.lineTo(a*cv.width,b*cv.height) : x.moveTo(a*cv.width,b*cv.height)); x.stroke(); } x.globalAlpha=1; }
function bindInk(cv,id,page){
  let cur=null; const pos=e=>{ const r=cv.getBoundingClientRect(); return [(e.clientX-r.left)/r.width,(e.clientY-r.top)/r.height]; };
  cv.addEventListener('pointerdown',e=>{ const V=S.pdfv; if (V.tool==='none') return; cv.setPointerCapture(e.pointerId); cur={c: V.tool==='hl'? '#f2c94c' : V.color,hl:V.tool==='hl',p:[pos(e)]}; inkOf(id,page).push(cur); });
  cv.addEventListener('pointermove',e=>{ if (!cur) return; cur.p.push(pos(e)); drawInk(cv,id,page); });
  const end=()=>{ cur=null; }; cv.addEventListener('pointerup',end); cv.addEventListener('pointercancel',end);
}
const PDF_ACT={
  'pdf-page'(el){ const V=S.pdfv, tot=+(document.getElementById('pdf-total')?.textContent)||999; V.page=Math.min(tot,Math.max(1,V.page+ +el.dataset.v)); render(); },
  'pdf-tool'(el){ S.pdfv.tool=el.dataset.v; render(); },
  'pdf-color'(el){ S.pdfv.color=el.dataset.v; render(); },
  'pdf-clear'(){ const V=S.pdfv; INK[V.id+'|'+V.page]=[]; render(); },
  'pdf-full'(){ togglePresent(); },
  async 'pdf-text'(){ const V=S.pdfv; try { const doc=await pdfDoc(V.id), pg=await doc.getPage(V.page), tc=await pg.getTextContent(); let last=null, out='';
      for (const it of tc.items){ const y=Math.round(it.transform[5]); out+= last!==null&&Math.abs(y-last)>2? '\n'+it.str : it.str; last=y; }
      out=out.replace(/[ \t]+\n/g,'\n').replace(/\n{3,}/g,'\n\n').trim();
      if (!out){ toast('Esta página não tem texto (talvez seja uma imagem escaneada).'); return; }
      S.preset={title:`${pdfById(V.id).name} · p. ${V.page}`,instructions:out}; location.hash='banco-nova'; toast('O texto da página está nas instruções. Agora monte as questões.');
    } catch { toast('Não deu para ler o texto desta página.'); } },
  'pdf-del'(el){ const p=pdfById(el.dataset.id); confirmBox(`Excluir “${p.name}”?`,'Excluir',async()=>{ DB.pdfs=DB.pdfs.filter(x=>x.id!==p.id); delete PDFDOC[p.id]; try { await idbDel(p.id); } catch {} save(); render(); toast('PDF excluído'); },'Ele sai da Biblioteca e das aulas em que estiver.'); },
};
document.addEventListener('change',e=>{ if (e.target.id==='pdf-in'&&e.target.files?.length){ importPdfs(e.target.files); e.target.value=''; } });
document.addEventListener('fullscreenchange',()=>{ if (document.querySelector('[data-pdf-mount]')) render(); });
