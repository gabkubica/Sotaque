/* =========================================================
   Sotaque · tipos de questão novos
   Cada tipo fica num lugar só, com tudo o que precisa:
     label/short   nome no editor e nas etiquetas
     fields        campos do editor (o que a professora escreve)
     blank()       questão nova vazia
     valid(q)      o que falta para salvar (ou null)
     answer(t,q)   como o aluno responde
     answered(q,a) se já respondeu
     grade(q,a)    nota de 0 a 1
     result(t,q,a,g,mode)  correção na tela
     print(q) / key(q)     folha para imprimir e gabarito
   Tipos: dict (ditado), cloze (texto com lacunas e banco de palavras), fix (encontre e corrija o erro),
   sort (separar em grupos), kwt (reescrever com a palavra dada), odd (qual não combina?),
   hunt (caça-palavras) e cross (palavras cruzadas).
   ========================================================= */
const nrm=s=>String(s??'').toLowerCase().normalize('NFC').replace(/[’‘`´]/g,"'").replace(/[.,!?;:"“”«»()]/g,' ').replace(/\s+/g,' ').trim();
const toks=s=>nrm(s).split(' ').filter(Boolean);
const alts=s=>String(s||'').split('/').map(x=>x.trim()).filter(Boolean);
const tpRng=key=>{ let x=hashStr(key)||1; return ()=>{ x^=x<<13; x^=x>>>17; x^=x<<5; return ((x>>>0)%100000)/100000; }; };
const tpShuffle=(arr,key)=>{ const R=tpRng(key), a=arr.slice(); for (let i=a.length-1;i>0;i--){ const j=Math.floor(R()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const dt=t=>`data-task="${t.id}"`;
const imgMini=(sc,w=160,h=110)=>sc&&typeof SCENES!=='undefined'&&SCENES[sc]? quadro(imgPal(sc),sc,hashStr(sc)%97,{w,h,frame:false}) : '';
/* maior sequência em comum (para o ditado): quais palavras do gabarito o aluno acertou, na ordem */
function lcsMark(exp,got){
  const n=exp.length, m=got.length, L=Array.from({length:n+1},()=>new Array(m+1).fill(0));
  for (let i=n-1;i>=0;i--) for (let j=m-1;j>=0;j--) L[i][j]= exp[i]===got[j]? L[i+1][j+1]+1 : Math.max(L[i+1][j],L[i][j+1]);
  const ok=new Array(n).fill(false); let i=0,j=0; while (i<n&&j<m){ if (exp[i]===got[j]){ ok[i]=true; i++; j++; } else if (L[i+1][j]>=L[i][j+1]) i++; else j++; }
  return ok;
}
/* ---------- texto com lacunas: "I [went] to the beach and [swam/swum]." ---------- */
const clozeParse=q=>{ const parts=String(q.text||'').split(/\[([^\]]+)\]/); const segs=[], ans=[]; parts.forEach((p,k)=>{ if (k%2) ans.push(alts(p)); else segs.push(p); }); return {segs,ans}; };
const clozeBank=q=>{ const {ans}=clozeParse(q); return tpShuffle([...ans.map(a=>a[0]),...String(q.extra||'').split(',').map(x=>x.trim()).filter(Boolean)],q.id+'cz'); };
/* ---------- encontre o erro: "She {don't|doesn't} like coffee." ---------- */
/* o erro pode vir grudado no começo da palavra (francês: n’{y|en}, j’{en|y}): a palavra inteira é a errada */
const fixParse=q=>{ const out=[]; let wrong=-1, right=[]; String(q.text||'').replace(/([^\s{]*?)\{([^}|]+)\|([^}]+)\}|(\S+)/g,(m,pre,w,r,plain)=>{ if (w){ wrong=out.length; const R=alts(r); right=pre? [...R.map(x=>pre+x.trim()),...R] : R; out.push(pre+w.trim()); } else out.push(plain); return m; }); return {words:out,wrong,right}; };
/* ---------- separar em grupos: "Contável: apple, chair\nIncontável: water, money" ---------- */
const sortParse=q=>{ const groups=[], items=[]; String(q.groups||'').split('\n').map(l=>l.trim()).filter(Boolean).forEach(l=>{ const k=l.indexOf(':'); if (k<0) return; const g=groups.length; groups.push(l.slice(0,k).trim()); l.slice(k+1).split(',').map(x=>x.trim()).filter(Boolean).forEach(it=>items.push({it,g})); }); return {groups,items}; };
/* ---------- caça-palavras ---------- */
const huntWords=q=>String(q.words||'').split(/[,\n]/).map(x=>x.trim()).filter(Boolean);
const plain=w=>String(w).replace(/œ/gi,'oe').replace(/æ/gi,'ae').normalize('NFD').replace(/[̀-ͯ]/g,'').toUpperCase().replace(/[^A-Z]/g,'');
function huntGrid(q){
  if (q._grid&&q._gridKey===q.words) return q._grid;
  const words=huntWords(q).map(w=>({w,p:plain(w)})).filter(x=>x.p.length>1), R=tpRng(q.id+'h');
  const size=Math.max(8,Math.min(13,Math.max(...words.map(x=>x.p.length),0)+2)), G=Array.from({length:size},()=>new Array(size).fill('')), dirs=[[0,1],[1,0],[1,1]], pos={};
  for (const x of words.slice().sort((a,b)=>b.p.length-a.p.length)){
    let placed=false;
    for (let tries=0;tries<300&&!placed;tries++){
      const [dr,dc]=dirs[Math.floor(R()*dirs.length)], r0=Math.floor(R()*size), c0=Math.floor(R()*size);
      if (r0+dr*(x.p.length-1)>=size||c0+dc*(x.p.length-1)>=size) continue;
      let ok=true; for (let k=0;k<x.p.length;k++){ const ch=G[r0+dr*k][c0+dc*k]; if (ch&&ch!==x.p[k]){ ok=false; break; } }
      if (!ok) continue;
      for (let k=0;k<x.p.length;k++) G[r0+dr*k][c0+dc*k]=x.p[k];
      pos[x.w]={r0,c0,dr,dc,len:x.p.length}; placed=true;
    }
  }
  const ABC='ABCDEFGHIJKLMNOPRSTUVWY'; for (let r=0;r<size;r++) for (let c=0;c<size;c++) if (!G[r][c]) G[r][c]=ABC[Math.floor(R()*ABC.length)];
  Object.defineProperty(q,'_grid',{value:{G,pos,size,words:words.filter(x=>pos[x.w]).map(x=>x.w)},enumerable:false,configurable:true,writable:true});
  Object.defineProperty(q,'_gridKey',{value:q.words,enumerable:false,configurable:true,writable:true});
  return q._grid;
}
const huntCells=p=>Array.from({length:p.len},(_,k)=>(p.r0+p.dr*k)+','+(p.c0+p.dc*k));
/* ---------- palavras cruzadas: "cat = a small animal that says meow | img:gato" ---------- */
const crossEntries=q=>String(q.words||'').split('\n').map(l=>l.trim()).filter(Boolean).map(l=>{ const parts=l.split('|').map(x=>x.trim()), k=parts[0].indexOf('='), im=parts.find(x=>/^img:/.test(x)); if (k<0) return null; return {w:parts[0].slice(0,k).trim(),p:plain(parts[0].slice(0,k)),clue:parts[0].slice(k+1).trim(),img:im? im.slice(4) : ''}; }).filter(e=>e&&e.p.length>1);
function crossTry(E){
  const cells=new Map(), placed=[], get=(r,c)=>cells.get(r+','+c);
  const fits=(p,r,c,dr,dc)=>{ if (get(r-dr,c-dc)||get(r+dr*p.length,c+dc*p.length)) return 0; let cross=0;
    for (let k=0;k<p.length;k++){ const rr=r+dr*k, cc=c+dc*k, ch=get(rr,cc);
      if (ch){ if (ch!==p[k]) return 0; cross++; }
      else if (get(rr+dc,cc+dr)||get(rr-dc,cc-dr)) return 0; }
    return cross; };
  const put=(e,r,c,dr,dc)=>{ for (let k=0;k<e.p.length;k++) cells.set((r+dr*k)+','+(c+dc*k),e.p[k]); placed.push({...e,r,c,dr,dc}); };
  put(E[0],0,0,0,1); let rest=E.slice(1), moved=true;
  while (rest.length&&moved){ moved=false;
    for (const e of rest.slice()){ let best=null;
      for (const P of placed) for (let i=0;i<P.p.length;i++) for (let j=0;j<e.p.length;j++){ if (P.p[i]!==e.p[j]) continue;
        const dr=P.dc, dc=P.dr, r=P.r+P.dr*i-dr*j, c=P.c+P.dc*i-dc*j, x=fits(e.p,r,c,dr,dc); if (x&&(!best||x>best.x)) best={r,c,dr,dc,x}; }
      if (best){ put(e,best.r,best.c,best.dr,best.dc); rest=rest.filter(x=>x!==e); moved=true; } } }
  let minR=0,minC=0,maxR=0,maxC=0; for (const k of cells.keys()){ const [r,c]=k.split(',').map(Number); minR=Math.min(minR,r); minC=Math.min(minC,c); maxR=Math.max(maxR,r); maxC=Math.max(maxC,c); }
  return {placed,minR,minC,rows:maxR-minR+1,cols:maxC-minC+1,left:rest.length};
}
function crossLayout(q){
  if (q._cw&&q._cwKey===q.words) return q._cw;
  const E=crossEntries(q).sort((a,b)=>b.p.length-a.p.length); let T={placed:[],minR:0,minC:0,rows:0,cols:0,left:0};
  if (E.length){ let best=null;
    for (let s=0;s<E.length;s++) for (const rev of [false,true]){ const o=[E[s],...E.filter((_,k)=>k!==s)]; if (rev) o.splice(1,o.length-1,...o.slice(1).reverse());
      const t=crossTry(o), score=t.left*1000+Math.max(t.rows,t.cols)*10+t.rows*t.cols/100; if (!best||score<best.score) best={...t,score}; }
    const sc=t=>t.left*1000+Math.max(t.rows,t.cols)*10+t.rows*t.cols/100;
    for (let k=0;k<80&&best.left;k++){ const t=crossTry(tpShuffle(E,q.words+k)); if (sc(t)<best.score) best={...t,score:sc(t)}; }
    T=best; }
  const W=T.placed.map(p=>({...p,r:p.r-T.minR,c:p.c-T.minC})); const starts=new Map(); let n=0;
  W.slice().sort((a,b)=>a.r-b.r||a.c-b.c).forEach(p=>{ const k=p.r+','+p.c; if (!starts.has(k)) starts.set(k,++n); p.n=starts.get(k); });
  const grid=new Map(); W.forEach(p=>{ for (let k=0;k<p.p.length;k++) grid.set((p.r+p.dr*k)+','+(p.c+p.dc*k),p.p[k]); });
  const res={W,grid,starts,rows:T.rows,cols:T.cols,left:T.left};
  Object.defineProperty(q,'_cw',{value:res,enumerable:false,configurable:true,writable:true}); Object.defineProperty(q,'_cwKey',{value:q.words,enumerable:false,configurable:true,writable:true});
  return res;
}
const wordOk=(a,p)=>{ for (let k=0;k<p.p.length;k++) if ((a?.[(p.r+p.dr*k)+','+(p.c+p.dc*k)]||'').toUpperCase()!==p.p[k]) return false; return true; };

const TIPOS={
  dict:{label:'Ditado',short:'Ditado',help:'O aluno ouve a frase e escreve. A nota conta as palavras certas, na ordem.',
    fields:[['text','Frase que o aluno vai ouvir','Ex.: I usually have breakfast at seven.',false]],
    blank:()=>({prompt:'Ouça e escreva a frase.',text:''}),
    valid:q=>String(q.text||'').trim()? null : 'Escreva a frase do ditado.',
    answer:(t,q)=>`${audioBox(q.text,taskLang(t),{mini:true})}<input type="text" class="tp-line" data-tp="${q.id}" ${dt(t)} value="${esc(t.answers[q.id]||'')}" placeholder="Escreva o que ouviu…" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Sua resposta">`,
    answered:(q,a)=>!!String(a||'').trim(),
    grade:(q,a)=>{ const e=toks(q.text); if (!e.length) return 0; const ok=lcsMark(e,toks(a)); return Math.round(ok.filter(Boolean).length/e.length*100)/100; },
    tag:(q,a)=>{ const e=toks(q.text), ok=lcsMark(e,toks(a)); return `${ok.filter(Boolean).length} de ${e.length} palavras`; },
    result:(t,q,a)=>{ const words=String(q.text).split(/\s+/), e=toks(q.text), ok=lcsMark(e,toks(a)); let k=0;
      return `${audioBox(q.text,taskLang(t),{mini:true})}<p class="meta" style="margin:0">Escreveu: <b>${esc(a||'—')}</b></p><p class="tp-dict">${words.map(w=>{ const has=toks(w).length; const cls= has? (ok[k++]? 'ok' : 'no') : ''; return `<span class="${cls}">${esc(w)}</span>`; }).join(' ')}</p>`; },
    print:q=>`<div class="pr-rule"></div><div class="pr-rule"></div>`,key:q=>esc(q.text)},
  cloze:{label:'Texto com lacunas',short:'Lacunas',help:'Escreva o texto e ponha cada resposta entre colchetes: I [went] to the beach. Para aceitar mais de uma, use /: [swam/swum].',
    fields:[['text','Texto com as respostas entre [colchetes]','Last summer I [went] to Bahia. We [stayed] in a small hotel near the beach.',true],['extra','Palavras extras para confundir (opcional, separadas por vírgula)','go, stay, beach',false]],
    blank:()=>({prompt:'Complete o texto com as palavras do quadro.',text:'',extra:''}),
    valid:q=>clozeParse(q).ans.length? null : 'Ponha pelo menos uma resposta entre [colchetes].',
    answer:(t,q)=>{ const {segs,ans}=clozeParse(q), a=Array.isArray(t.answers[q.id])? t.answers[q.id] : [], sel=S.czSel?.q===q.id? S.czSel.k : -1;
      const used=a.filter(Boolean).slice(), bank=clozeBank(q).filter(w=>{ const i=used.indexOf(w); if (i>=0){ used.splice(i,1); return false; } return true; });
      return `<p class="tp-cloze">${segs.map((s,k)=>esc(s)+(k<ans.length? `<button type="button" class="cz-slot ${a[k]?'on':''} ${sel===k?'sel':''}" data-act="cz-slot" ${dt(t)} data-q="${q.id}" data-k="${k}" aria-label="Lacuna ${k+1}">${a[k]? esc(a[k]) : (k+1)}</button>` : '')).join('')}</p>
        <div class="ord-bank">${bank.map(w=>`<button type="button" class="wchip" data-act="cz-chip" ${dt(t)} data-q="${q.id}" data-w="${esc(w)}">${esc(w)}</button>`).join('')||'<span class="muted">Todas as palavras usadas. Toque numa lacuna para trocar.</span>'}</div>`; },
    answered:(q,a)=>Array.isArray(a)&&clozeParse(q).ans.every((_,k)=>a[k]),
    grade:(q,a)=>{ const {ans}=clozeParse(q); if (!ans.length||!Array.isArray(a)) return 0; return Math.round(ans.filter((al,k)=>al.some(x=>nrm(x)===nrm(a[k]))).length/ans.length*100)/100; },
    tag:(q,a)=>{ const {ans}=clozeParse(q); return `${ans.filter((al,k)=>Array.isArray(a)&&al.some(x=>nrm(x)===nrm(a[k]))).length} de ${ans.length} lacunas`; },
    result:(t,q,a,g,mode)=>{ const {segs,ans}=clozeParse(q), A=Array.isArray(a)? a : [];
      return `<p class="tp-cloze">${segs.map((s,k)=>esc(s)+(k<ans.length? (()=>{ const ok=ans[k].some(x=>nrm(x)===nrm(A[k])); return mode==='key'||ok? `<mark class="fill right">${esc(mode==='key'? ans[k][0] : A[k])}</mark>` : `<mark class="fill wrong">${esc(A[k]||'—')}</mark><small class="tp-right">${esc(ans[k][0])}</small>`; })() : '')).join('')}</p>`; },
    print:q=>{ const {segs,ans}=clozeParse(q); return `<div class="pr-bankbox">${clozeBank(q).map(esc).join(' · ')}</div><p>${segs.map((s,k)=>esc(s)+(k<ans.length? `<span class="pr-gap short">(${k+1})</span>` : '')).join('')}</p>`; },
    key:q=>clozeParse(q).ans.map((a,k)=>`(${k+1}) ${esc(a[0])}`).join(' · ')},
  fix:{label:'Encontre e corrija o erro',short:'Erro',help:'Marque a palavra errada assim: {errada|certa}. Ex.: She {don’t|doesn’t} like coffee. Para aceitar mais de uma correção, use /.',
    fields:[['text','Frase com o erro marcado {errada|certa}','I {have|am} 22 years old.',false]],
    blank:()=>({prompt:'Toque na palavra errada e escreva a certa.',text:''}),
    valid:q=>fixParse(q).wrong>=0? null : 'Marque o erro assim: {errada|certa}.',
    answer:(t,q)=>{ const {words}=fixParse(q), a=t.answers[q.id]||{};
      return `<p class="tp-fix">${words.map((w,k)=>`<button type="button" class="fx-w ${a.i===k?'on':''}" data-act="fx-pick" ${dt(t)} data-q="${q.id}" data-k="${k}">${esc(w)}</button>`).join(' ')}</p>
        ${Number.isInteger(a.i)? `<label class="field tp-fixin">Correção de “${esc(words[a.i])}”<input type="text" data-tpfix="${q.id}" ${dt(t)} value="${esc(a.w||'')}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escreva a palavra certa"></label>` : '<small class="muted">Toque na palavra que está errada.</small>'}`; },
    answered:(q,a)=>a&&Number.isInteger(a.i)&&!!String(a.w||'').trim(),
    grade:(q,a)=>{ const {wrong,right}=fixParse(q); if (!a||a.i!==wrong) return 0; return right.some(x=>nrm(x)===nrm(a.w))? 1 : .5; },
    tag:(q,a,g)=>g===.5? 'Achou o erro' : '',
    result:(t,q,a,g,mode)=>{ const {words,wrong,right}=fixParse(q), A=a||{};
      return `<p class="tp-fix">${words.map((w,k)=>k===wrong? `<span class="fx-w err">${esc(w)}</span> <mark class="fill right">${esc(right[0])}</mark>` : `<span class="fx-w ${mode!=='key'&&A.i===k? 'mine' : ''}">${esc(w)}</span>`).join(' ')}</p>${mode!=='key'&&A.w? `<p class="meta" style="margin:0">${mode==='teacher'? 'O aluno escreveu' : 'Você escreveu'}: <b>${esc(A.w)}</b>${A.i!==wrong? ' (na palavra errada)' : ''}</p>` : ''}`; },
    print:q=>`<p>${esc(fixParse(q).words.join(' '))}</p><p>Erro: <span class="pr-gap short"></span> → Correção: <span class="pr-gap"></span></p>`,
    key:q=>{ const {words,wrong,right}=fixParse(q); return `${esc(words[wrong])} → ${esc(right.join(' / '))}`; }},
  sort:{label:'Separar em grupos',short:'Grupos',help:'Uma linha por grupo: Nome do grupo: palavra, palavra, palavra.',
    fields:[['groups','Grupos e palavras (uma linha por grupo)','Contável: apple, chair, book\nIncontável: water, money, bread',true]],
    blank:()=>({prompt:'Separe as palavras nos grupos certos.',groups:''}),
    valid:q=>{ const {groups,items}=sortParse(q); return groups.length>=2&&items.length>=2? null : 'Escreva pelo menos 2 grupos, um por linha: Grupo: palavra, palavra.'; },
    answer:(t,q)=>{ const {groups,items}=sortParse(q), a=t.answers[q.id]||{}, sel=S.srSel?.q===q.id? S.srSel.it : null, pool=tpShuffle(items.map(x=>x.it),q.id+'s').filter(it=>a[it]==null);
      return `<div class="sr-pool">${pool.map(it=>`<button type="button" class="wchip ${sel===it?'sel':''}" data-act="sr-pick" ${dt(t)} data-q="${q.id}" data-it="${esc(it)}">${esc(it)}</button>`).join('')||'<span class="muted">Tudo separado! Toque numa palavra de um grupo para tirar.</span>'}</div>
        <div class="sr-groups">${groups.map((g,k)=>`<div class="sr-box ${sel!=null?'ready':''}" data-act="sr-put" ${dt(t)} data-q="${q.id}" data-g="${k}" role="button" tabindex="0"><b>${esc(g)}</b><div>${items.filter(x=>a[x.it]===k).map(x=>`<button type="button" class="wchip on" data-act="sr-back" ${dt(t)} data-q="${q.id}" data-it="${esc(x.it)}">${esc(x.it)}</button>`).join('')}</div></div>`).join('')}</div>
        <small class="muted">${sel!=null? `Agora toque no grupo de “${esc(sel)}”.` : 'Toque numa palavra e depois no grupo dela.'}</small>`; },
    answered:(q,a)=>{ const {items}=sortParse(q); return !!a&&items.every(x=>a[x.it]!=null); },
    grade:(q,a)=>{ const {items}=sortParse(q); if (!items.length||!a) return 0; return Math.round(items.filter(x=>a[x.it]===x.g).length/items.length*100)/100; },
    tag:(q,a)=>{ const {items}=sortParse(q); return `${items.filter(x=>a&&a[x.it]===x.g).length} de ${items.length} no lugar`; },
    result:(t,q,a,g,mode)=>{ const {groups,items}=sortParse(q), A=a||{};
      return `<div class="sr-groups">${groups.map((gn,k)=>`<div class="sr-box"><b>${esc(gn)}</b><div>${items.filter(x=>mode==='key'? x.g===k : A[x.it]===k).map(x=>`<span class="wchip ${mode==='key'||x.g===k?'ok':'no'}">${esc(x.it)}${mode!=='key'&&x.g!==k? ` → ${esc(groups[x.g])}` : ''}</span>`).join('')}</div></div>`).join('')}</div>`; },
    print:q=>{ const {groups,items}=sortParse(q); return `<div class="pr-bankbox">${tpShuffle(items.map(x=>x.it),q.id+'s').map(esc).join(' · ')}</div><div class="pr-cols">${groups.map(g=>`<div><b>${esc(g)}</b><div class="pr-rule"></div><div class="pr-rule"></div><div class="pr-rule"></div></div>`).join('')}</div>`; },
    key:q=>{ const {groups,items}=sortParse(q); return groups.map((g,k)=>`<b>${esc(g)}:</b> ${items.filter(x=>x.g===k).map(x=>esc(x.it)).join(', ')}`).join(' · '); }},
  kwt:{label:'Reescrever com a palavra dada',short:'Reescrever',help:'Como no exame Cambridge: a frase nova tem que ter o mesmo sentido e usar a palavra dada. Respostas aceitas separadas por /.',
    fields:[['orig','Frase original','I started working here in 2019.',false],['key','Palavra dada','FOR',false],['frame','Frase nova com ___ no lugar da resposta','I ___ 2019.',false],['answersTxt','Respostas aceitas (separe com /)','have worked here since / have been working here since',false]],
    blank:()=>({prompt:'Complete a segunda frase com o mesmo sentido, usando a palavra dada.',orig:'',key:'',frame:'',answers:[]}),
    set:(q,k,v)=>{ if (k==='answersTxt') q.answers=alts(v); else q[k]=v; },
    get:(q,k)=>k==='answersTxt'? (q.answers||[]).join(' / ') : q[k],
    valid:q=>!String(q.orig||'').trim()? 'Escreva a frase original.' : !String(q.frame||'').includes('___')? 'Ponha ___ na frase nova.' : !(q.answers||[]).length? 'Escreva pelo menos uma resposta aceita.' : null,
    answer:(t,q)=>{ const [x,y]=String(q.frame).split('___'); return `<p class="tp-kwt-o">${esc(q.orig)}</p><span class="tp-key">${esc(String(q.key||'').toUpperCase())}</span><p class="gapline">${esc(x)}<input type="text" class="gapin wide" data-tp="${q.id}" ${dt(t)} value="${esc(t.answers[q.id]||'')}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Resposta">${esc(y||'')}</p>`; },
    answered:(q,a)=>!!String(a||'').trim(),
    grade:(q,a)=>(q.answers||[]).some(x=>nrm(x)===nrm(a))? 1 : 0,
    result:(t,q,a,g,mode)=>{ const [x,y]=String(q.frame).split('___'), ok=mode==='key'||g===1;
      return `<p class="tp-kwt-o">${esc(q.orig)}</p><span class="tp-key">${esc(String(q.key||'').toUpperCase())}</span><p class="gapline">${esc(x)}<mark class="fill ${ok?'right':'wrong'}">${esc(mode==='key'? q.answers[0] : (a||'—'))}</mark>${esc(y||'')}</p>${!ok||mode==='key'&&q.answers.length>1? `<p class="meta" style="margin:0">${mode==='key'? 'Também vale' : 'Resposta certa'}: <b>${esc((mode==='key'? q.answers.slice(1) : q.answers).join(' / '))}</b></p>` : ''}`; },
    print:q=>`<p>${esc(q.orig)}</p><p><b>${esc(String(q.key||'').toUpperCase())}</b></p><p>${esc(String(q.frame).replace('___','________________________'))}</p>`,
    key:q=>esc((q.answers||[]).join(' / '))},
  odd:{label:'Qual não combina?',short:'Não combina',help:'Quatro palavras (ou cartas com imagem): uma não combina com as outras. Marque a bolinha da que não combina.',
    fields:[['imgsTxt','Imagens das cartas (opcional): nomes das cenas, na ordem, separados por vírgula','gato, cachorro, passaro, xicara',false],['why','Por quê? (aparece na correção)','A xícara não é um animal.',false]],
    blank:()=>({prompt:'Qual não combina?',options:['','','',''],correct:0,imgs:[],why:''}),
    set:(q,k,v)=>{ if (k==='imgsTxt') q.imgs=v.split(',').map(x=>x.trim()).filter(Boolean); else q[k]=v; },
    get:(q,k)=>k==='imgsTxt'? (q.imgs||[]).join(', ') : q[k],
    mcEditor:true,
    valid:q=>q.options.filter(o=>String(o).trim()).length<3? 'Escreva pelo menos 3 opções.' : q.correct==null||!String(q.options[q.correct]||'').trim()? 'Marque a bolinha da que não combina.' : null,
    answer:(t,q,i)=>`<div class="odd-grid" role="radiogroup" aria-label="Questão ${i+1}">${optOrder(q).map(k=>`<label class="oddc"><input type="radio" name="a-${q.id}" value="${k}" data-ans="${q.id}" ${dt(t)} ${t.answers[q.id]===k?'checked':''}>${q.imgs?.[k]? `<span class="oddc-img">${imgMini(q.imgs[k],240,150)}</span>` : ''}<b>${esc(q.options[k])}</b></label>`).join('')}</div>`,
    answered:(q,a)=>Number.isInteger(a),
    grade:(q,a)=>a===q.correct? 1 : 0,
    result:(t,q,a,g,mode)=>`<div class="odd-grid">${optOrder(q).map(k=>[q.options[k],k]).map(([o,k])=>`<div class="oddc ${k===q.correct?'right':mode!=='key'&&a===k?'wrong':''}">${q.imgs?.[k]? `<span class="oddc-img">${imgMini(q.imgs[k],240,150)}</span>` : ''}<b>${esc(o)}</b>${k===q.correct? '<small>não combina</small>' : mode!=='key'&&a===k? '<small>sua escolha</small>' : ''}</div>`).join('')}</div>${q.why? `<p class="meta" style="margin:0">${esc(q.why)}</p>` : ''}`,
    print:q=>`<p class="pr-words">${q.options.map((o,k)=>`<span class="pr-box"></span>${esc(o)}`).join('&nbsp;&nbsp;&nbsp; ')}</p>`,
    key:q=>esc(q.options[q.correct])+(q.why? ` (${esc(q.why)})` : '')},
  hunt:{label:'Caça-palavras',short:'Caça-palavras',help:'Escreva as palavras separadas por vírgula. O Sotaque monta o quadro sozinho (para o lado, para baixo e na diagonal).',
    fields:[['words','Palavras escondidas (separadas por vírgula)','cat, dog, bird, fish, horse, rabbit',true]],
    blank:()=>({prompt:'Encontre as palavras no quadro.',words:''}),
    valid:q=>huntWords(q).length>=3? null : 'Escreva pelo menos 3 palavras.',
    answer:(t,q)=>{ const H=huntGrid(q), a=Array.isArray(t.answers[q.id])? t.answers[q.id] : [], found=new Set(a.flatMap(w=>H.pos[w]? huntCells(H.pos[w]) : [])), st=S.hsSel?.q===q.id? S.hsSel.rc : null;
      return `<div class="hs-wrap"><div class="hs-grid" style="--n:${H.size}">${H.G.map((row,r)=>row.map((ch,c)=>`<button type="button" class="hs-c ${found.has(r+','+c)?'f':''} ${st===r+','+c?'s':''}" data-act="hs-tap" ${dt(t)} data-q="${q.id}" data-rc="${r},${c}">${ch}</button>`).join('')).join('')}</div>
        <div class="hs-list">${H.words.map(w=>`<span class="${a.includes(w)?'done':''}">${esc(w)}</span>`).join('')}</div></div><small class="muted">Toque na primeira e na última letra de cada palavra.</small>`; },
    answered:(q,a)=>Array.isArray(a)&&a.length>=huntGrid(q).words.length,
    grade:(q,a)=>{ const n=huntGrid(q).words.length; return n? Math.round((Array.isArray(a)? a.length : 0)/n*100)/100 : 0; },
    tag:(q,a)=>`${Array.isArray(a)? a.length : 0} de ${huntGrid(q).words.length} palavras`,
    result:(t,q,a)=>{ const H=huntGrid(q), A=Array.isArray(a)? a : [], all=new Set(H.words.flatMap(w=>huntCells(H.pos[w]))), got=new Set(A.flatMap(w=>H.pos[w]? huntCells(H.pos[w]) : []));
      return `<div class="hs-wrap"><div class="hs-grid small" style="--n:${H.size}">${H.G.map((row,r)=>row.map((ch,c)=>`<span class="hs-c ${got.has(r+','+c)?'f':all.has(r+','+c)?'m':''}">${ch}</span>`).join('')).join('')}</div><div class="hs-list">${H.words.map(w=>`<span class="${A.includes(w)?'done':'miss'}">${esc(w)}</span>`).join('')}</div></div>`; },
    print:q=>{ const H=huntGrid(q); return `<table class="pr-grid">${H.G.map(row=>`<tr>${row.map(ch=>`<td>${ch}</td>`).join('')}</tr>`).join('')}</table><p class="pr-words">${H.words.map(esc).join(' · ')}</p>`; },
    key:q=>esc(huntGrid(q).words.join(', '))},
  cross:{label:'Palavras cruzadas',short:'Cruzadas',help:'Uma palavra por linha: palavra = dica. Para pôr uma imagem na dica, acrescente | img:nome-da-cena. O Sotaque cruza as palavras sozinho.',
    fields:[['words','Palavras e dicas (uma por linha)','cat = It says “meow”. | img:gato\ndog = It says “woof”. | img:cachorro',true]],
    blank:()=>({prompt:'Complete as palavras cruzadas.',words:''}),
    valid:q=>{ const L=crossLayout(q); return L.W.length>=3? null : 'Escreva pelo menos 3 palavras que se cruzem (com letras em comum).'; },
    answer:(t,q)=>crossHtml(t,q,t.answers[q.id]||{},'answer'),
    answered:(q,a)=>{ const L=crossLayout(q); return !!a&&[...L.grid.keys()].every(k=>a[k]); },
    grade:(q,a)=>{ const L=crossLayout(q); return L.W.length? Math.round(L.W.filter(p=>wordOk(a,p)).length/L.W.length*100)/100 : 0; },
    tag:(q,a)=>{ const L=crossLayout(q); return `${L.W.filter(p=>wordOk(a,p)).length} de ${L.W.length} palavras`; },
    result:(t,q,a,g,mode)=>crossHtml(t,q,a||{},mode==='key'? 'key' : 'result'),
    print:q=>crossHtml(null,q,{},'print'),
    key:q=>crossLayout(q).W.slice().sort((a,b)=>a.n-b.n).map(p=>`${p.n} ${p.dc? '→' : '↓'} ${esc(p.w)}`).join(' · ')},
};
function crossHtml(t,q,a,mode){
  const L=crossLayout(q), cell=(r,c)=>{ const k=r+','+c, ch=L.grid.get(k); if (!ch) return `<span class="cw-x"></span>`;
    const n=L.starts.get(k), v=(a[k]||'').toUpperCase(), ok=v===ch;
    const inner= mode==='answer'? `<input class="cw-in" maxlength="1" data-cw="${q.id}" ${t? dt(t) : ''} data-k="${k}" value="${esc(v)}" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-label="Letra">`
      : mode==='print'? '' : `<span class="cw-v ${mode==='key'||ok?'ok':'no'}">${mode==='key'? ch : esc(v||'')}</span>`;
    return `<span class="cw-c">${n? `<small>${n}</small>` : ''}${inner}</span>`; };
  const clues=dir=>L.W.filter(p=>dir? p.dc : p.dr).sort((x,y)=>x.n-y.n).map(p=>`<li>${p.img&&mode!=='print'? `<span class="cw-img">${imgMini(p.img,90,60)}</span>` : ''}<b>${p.n}</b> ${esc(p.clue)} <small class="muted">(${p.p.length})</small></li>`).join('');
  return `<div class="cw"><div class="cw-grid" style="--r:${L.rows};--c:${L.cols}">${Array.from({length:L.rows},(_,r)=>Array.from({length:L.cols},(_,c)=>cell(r,c)).join('')).join('')}</div>
    <div class="cw-clues"><div><b>${mode==='print'? 'Horizontais' : '→ Horizontais'}</b><ol>${clues(true)}</ol></div><div><b>${mode==='print'? 'Verticais' : '↓ Verticais'}</b><ol>${clues(false)}</ol></div></div></div>`;
}
/* ---------- interações (tocar, escrever) ---------- */
const TIPO_ACT={
  'cz-chip'(el){ const t=getTask(el.dataset.task), q=t.questions.find(x=>x.id===el.dataset.q), n=clozeParse(q).ans.length, a=Array.isArray(t.answers[q.id])? t.answers[q.id] : new Array(n).fill(null);
    let k= S.czSel?.q===q.id&&!a[S.czSel.k]? S.czSel.k : a.findIndex((x,i)=>i<n&&!x); if (k<0) k=n-1; a[k]=el.dataset.w; t.answers[q.id]=a; S.czSel=null; save(); render(); },
  'cz-slot'(el){ const t=getTask(el.dataset.task), q=t.questions.find(x=>x.id===el.dataset.q), k=+el.dataset.k, a=Array.isArray(t.answers[q.id])? t.answers[q.id] : [];
    if (a[k]){ a[k]=null; t.answers[q.id]=a; S.czSel={q:q.id,k}; save(); } else S.czSel= S.czSel?.q===q.id&&S.czSel.k===k? null : {q:q.id,k}; render(); },
  'fx-pick'(el){ const t=getTask(el.dataset.task), q=el.dataset.q, a=t.answers[q]||{}; t.answers[q]={i:+el.dataset.k,w:a.i===+el.dataset.k? a.w||'' : ''}; save(); render(); setTimeout(()=>document.querySelector(`[data-tpfix="${q}"]`)?.focus(),30); },
  'sr-pick'(el){ S.srSel= S.srSel?.it===el.dataset.it&&S.srSel.q===el.dataset.q? null : {q:el.dataset.q,it:el.dataset.it}; render(); },
  'sr-put'(el,e){ if (e?.target.closest('[data-act="sr-back"]')) return; const t=getTask(el.dataset.task), q=el.dataset.q; if (!S.srSel||S.srSel.q!==q) return; (t.answers[q] ||= {})[S.srSel.it]=+el.dataset.g; S.srSel=null; save(); render(); },
  'sr-back'(el){ const t=getTask(el.dataset.task), a=t.answers[el.dataset.q]||{}; delete a[el.dataset.it]; t.answers[el.dataset.q]=a; S.srSel=null; save(); render(); },
  'hs-tap'(el){ const t=getTask(el.dataset.task), q=t.questions.find(x=>x.id===el.dataset.q), H=huntGrid(q), rc=el.dataset.rc;
    if (!S.hsSel||S.hsSel.q!==q.id){ S.hsSel={q:q.id,rc}; render(); return; }
    const [r1,c1]=S.hsSel.rc.split(',').map(Number), [r2,c2]=rc.split(',').map(Number); S.hsSel=null;
    const hit=H.words.find(w=>{ const p=H.pos[w], e=[p.r0+p.dr*(p.len-1),p.c0+p.dc*(p.len-1)]; return (p.r0===r1&&p.c0===c1&&e[0]===r2&&e[1]===c2)||(p.r0===r2&&p.c0===c2&&e[0]===r1&&e[1]===c1); });
    if (hit){ const a=Array.isArray(t.answers[q.id])? t.answers[q.id] : []; if (!a.includes(hit)) a.push(hit); t.answers[q.id]=a; save(); toast(`Achou: ${hit}!`); }
    render(); },
};
function onTipoInput(e){
  const el=e.target;
  if (el.dataset.tp){ const t=getTask(el.dataset.task); if (!t) return; t.answers[el.dataset.tp]=el.value; clearTimeout(S.tpT); S.tpT=setTimeout(save,400); if (typeof updateProgress==='function') updateProgress(t); }
  if (el.dataset.tpfix){ const t=getTask(el.dataset.task); const a=t.answers[el.dataset.tpfix]||{}; a.w=el.value; t.answers[el.dataset.tpfix]=a; clearTimeout(S.tpT); S.tpT=setTimeout(save,400); if (typeof updateProgress==='function') updateProgress(t); }
  if (el.dataset.cw&&e.type==='input'){ const t=getTask(el.dataset.task); const a=(t.answers[el.dataset.cw] ||= {}); el.value=plain(el.value).slice(-1); a[el.dataset.k]=el.value; clearTimeout(S.tpT); S.tpT=setTimeout(save,400);
    if (el.value){ const all=[...document.querySelectorAll(`[data-cw="${el.dataset.cw}"]`)], i=all.indexOf(el), [r,c]=el.dataset.k.split(',').map(Number);
      const nx=document.querySelector(`[data-cw="${el.dataset.cw}"][data-k="${r},${c+1}"]`)||document.querySelector(`[data-cw="${el.dataset.cw}"][data-k="${r+1},${c}"]`)||all[i+1]; nx?.focus(); nx?.select?.(); }
    if (typeof updateProgress==='function') updateProgress(t); }
  /* editor */
  if (el.dataset.tf!=null&&S.draft){ const q=S.draft.questions[+el.dataset.q]; if (!q) return; const T=TIPOS[q.type]; if (T?.set) T.set(q,el.dataset.tf,el.value); else q[el.dataset.tf]=el.value; delete q._grid; delete q._cw; if (e.type==='change'&&(q.type==='hunt'||q.type==='cross')) render(); }
}
function tipoEditor(q,i){
  const T=TIPOS[q.type]; if (!T) return '';
  return `<p class="meta muted" style="margin:0">${esc(T.help)}</p>${T.fields.map(([k,label,ph,area])=>{ const v=T.get? T.get(q,k) : q[k]; return `<label class="field">${esc(label)}${area? `<textarea data-q="${i}" data-tf="${k}" style="min-height:${k==='words'||k==='groups'? 120 : 80}px" placeholder="${esc(ph)}">${esc(v||'')}</textarea>` : `<input type="text" data-q="${i}" data-tf="${k}" value="${esc(v||'')}" placeholder="${esc(ph)}">`}</label>`; }).join('')}
    ${['pmatch','label','cross'].includes(q.type)? scenesHelp() : ''}${['pmatch','label'].includes(q.type)&&picParse(q).length? `<div class="pic-grid">${picParse(q).map(x=>picCard(x.img,`<b>${esc(x.w[0])}</b>`)).join('')}</div>` : ''}${q.type==='hunt'&&huntWords(q).length? `<details class="transc"><summary>Ver o quadro</summary>${TIPOS.hunt.print(q)}</details>` : ''}${q.type==='cross'&&crossEntries(q).length? `<details class="transc" open><summary>Ver as cruzadas</summary>${crossHtml(null,q,{},'key')}${crossLayout(q).left? `<p class="err">${crossLayout(q).left} palavra(s) não cruzaram com as outras e ficaram de fora. Troque ou acrescente palavras com letras em comum.</p>` : ''}</details>` : ''}`;
}
/* questões prontas para o conteúdo (mesma ideia de TF, GAP…) */
const DIT=(text,prompt)=>({type:'dict',prompt:prompt||'Ouça e escreva a frase.',text});
const CLOZE=(text,extra,prompt)=>({type:'cloze',prompt:prompt||'Complete o texto com as palavras do quadro.',text,extra:extra||''});
const FIX=(text,prompt)=>({type:'fix',prompt:prompt||'Toque na palavra errada e escreva a certa.',text});
const SORT=(groups,prompt)=>({type:'sort',prompt:prompt||'Separe as palavras nos grupos certos.',groups});
const KWT=(orig,key,frame,answers,prompt)=>({type:'kwt',prompt:prompt||'Complete a segunda frase com o mesmo sentido, usando a palavra dada.',orig,key,frame,answers:alts(answers)});
const ODD=(prompt,options,correct,imgs,why)=>({type:'odd',prompt:prompt||'Qual não combina?',options,correct,imgs:imgs||[],why:why||''});
const HUNT=(words,prompt)=>({type:'hunt',prompt:prompt||'Encontre as palavras no quadro.',words});
const CROSS=(words,prompt)=>({type:'cross',prompt:prompt||'Complete as palavras cruzadas.',words});
/* resposta certa (solve), uma resposta errada (wrong, para os exemplos do demo) e o que o aluno respondeu, sem corrigir (said) */
Object.assign(TIPOS.dict,{solve:q=>q.text,wrong:()=>'xx',said:(q,a)=>esc(a||'—')});
Object.assign(TIPOS.cloze,{solve:q=>clozeParse(q).ans.map(a=>a[0]),wrong:q=>clozeParse(q).ans.map(()=>'xx'),said:(q,a)=>(Array.isArray(a)? a : []).map(x=>esc(x||'—')).join(' · ')});
Object.assign(TIPOS.fix,{solve:q=>{ const f=fixParse(q); return {i:f.wrong,w:f.right[0]}; },wrong:q=>{ const f=fixParse(q); return {i:(f.wrong+1)%f.words.length,w:'xx'}; },said:(q,a)=>a&&Number.isInteger(a.i)? `${esc(fixParse(q).words[a.i])} → ${esc(a.w||'—')}` : '—'});
Object.assign(TIPOS.sort,{solve:q=>Object.fromEntries(sortParse(q).items.map(x=>[x.it,x.g])),wrong:q=>{ const s=sortParse(q); return Object.fromEntries(s.items.map(x=>[x.it,(x.g+1)%s.groups.length])); },said:(q,a)=>{ const s=sortParse(q); return s.groups.map((g,k)=>`<b>${esc(g)}:</b> ${s.items.filter(x=>a&&a[x.it]===k).map(x=>esc(x.it)).join(', ')||'—'}`).join(' · '); }});
Object.assign(TIPOS.kwt,{solve:q=>q.answers[0],wrong:()=>'xx',said:(q,a)=>esc(a||'—')});
Object.assign(TIPOS.odd,{solve:q=>q.correct,wrong:q=>(q.correct+1)%q.options.length,said:(q,a)=>Number.isInteger(a)? esc(q.options[a]) : '—'});
Object.assign(TIPOS.hunt,{solve:q=>huntGrid(q).words.slice(),wrong:q=>huntGrid(q).words.slice(0,1),said:(q,a)=>`${Array.isArray(a)? a.length : 0} de ${huntGrid(q).words.length} palavras achadas`});
Object.assign(TIPOS.cross,{solve:q=>Object.fromEntries(crossLayout(q).grid),wrong:q=>Object.fromEntries([...crossLayout(q).grid.keys()].map(k=>[k,'X'])),said:(q,a)=>{ const L=crossLayout(q); return `${[...L.grid.keys()].filter(k=>a&&a[k]).length} de ${L.grid.size} letras preenchidas`; }});
/* campos que cada tipo guarda (para limpar a questão ao salvar) */
const TIPO_KEEP={dict:['text'],cloze:['text','extra'],fix:['text'],sort:['groups'],kwt:['orig','key','frame','answers'],odd:['options','correct','imgs','why'],hunt:['words'],cross:['words']};
/* =========================================================
   Mais 4 tipos: escolha no texto, ordenar o diálogo/texto, ligar palavras às imagens, escreva o nome da imagem
   ========================================================= */
/* escolha no texto: "She [*goes/go] to school." (o * marca a certa) */
const pickParse=q=>{ const parts=String(q.text||'').split(/\[([^\]]+)\]/), segs=[], slots=[];
  parts.forEach((p,k)=>{ if (k%2){ const ops=p.split('/').map(x=>x.trim()).filter(Boolean); const c=ops.find(x=>x.startsWith('*'))||ops[0]; slots.push({ops:tpShuffle(ops.map(x=>x.replace(/^\*/,'')),q.id+p),right:c.replace(/^\*/,'')}); } else segs.push(p); });
  return {segs,slots}; };
/* ordenar: uma linha por fala/frase, na ordem certa */
const seqLines=q=>String(q.lines||'').split('\n').map(x=>x.trim()).filter(Boolean);
const seqOrder=q=>{ const n=seqLines(q).length; let o=tpShuffle([...Array(n).keys()],q.id+'sq'); if (n>1&&o.every((v,i)=>v===i)) o.push(o.shift()); return o; };
/* imagens: "cat/kitten | img:gato", uma por linha */
const picParse=q=>String(q.items||'').split('\n').map(l=>l.trim()).filter(Boolean).map(l=>{ const parts=l.split('|').map(x=>x.trim()), im=parts.find(x=>/^img:/.test(x)), w=parts.find(x=>!/^img:/.test(x))||''; return {w:alts(w),img:im? im.slice(4) : ''}; }).filter(x=>x.w.length&&x.img);
const picCard=(img,inner,cls='')=>`<div class="pic ${cls}"><span class="pic-img">${imgMini(img,240,160)}</span>${inner}</div>`;
const scenesHelp=()=>`<details class="transc"><summary>Nomes das imagens que dá para usar</summary><div class="scn-names">${Object.entries(SCENES).map(([k,v])=>`<span title="${esc(v.nome)}">${quadro(imgPal(k),k,3,{w:90,h:60,frame:false})}<code>${k}</code></span>`).join('')}</div></details>`;
const frac=(ok,n)=>n? Math.round(ok/n*100)/100 : 0;
Object.assign(TIPOS,{
  pick:{label:'Escolha no texto',short:'Escolha',help:'Escreva o texto e ponha as opções entre colchetes, com * na certa: She [*goes/go/going] to school. O aluno toca na opção certa em cada lugar.',
    fields:[['text','Texto com as opções entre [colchetes]','I [*have been/am/was] here since 2019. She [*doesn’t/don’t] like coffee.',true]],
    blank:()=>({prompt:'Escolha a opção certa em cada lugar.',text:''}),
    valid:q=>pickParse(q).slots.some(s=>s.ops.length>=2)? null : 'Ponha pelo menos um lugar com 2 opções entre [colchetes].',
    answer:(t,q)=>{ const {segs,slots}=pickParse(q), a=Array.isArray(t.answers[q.id])? t.answers[q.id] : [];
      return `<p class="tp-pick">${segs.map((s,k)=>esc(s)+(k<slots.length? `<span class="pk-grp" role="group" aria-label="Lugar ${k+1}">${slots[k].ops.map(o=>`<button type="button" class="pk-op ${a[k]===o?'on':''}" data-act="pk-pick" ${dt(t)} data-q="${q.id}" data-k="${k}" data-v="${esc(o)}" aria-pressed="${a[k]===o}">${esc(o)}</button>`).join('')}</span>` : '')).join('')}</p>`; },
    answered:(q,a)=>Array.isArray(a)&&pickParse(q).slots.every((_,k)=>a[k]),
    grade:(q,a)=>{ const {slots}=pickParse(q); return frac(slots.filter((s,k)=>Array.isArray(a)&&a[k]===s.right).length,slots.length); },
    tag:(q,a)=>{ const {slots}=pickParse(q); return `${slots.filter((s,k)=>Array.isArray(a)&&a[k]===s.right).length} de ${slots.length} certas`; },
    result:(t,q,a,g,mode)=>{ const {segs,slots}=pickParse(q), A=Array.isArray(a)? a : [];
      return `<p class="tp-pick">${segs.map((s,k)=>esc(s)+(k<slots.length? (mode==='key'||A[k]===slots[k].right? `<mark class="fill right">${esc(slots[k].right)}</mark>` : `<mark class="fill wrong">${esc(A[k]||'—')}</mark><small class="tp-right">${esc(slots[k].right)}</small>`) : '')).join('')}</p>`; },
    print:q=>{ const {segs,slots}=pickParse(q); return `<p>${segs.map((s,k)=>esc(s)+(k<slots.length? ` <b>(${slots[k].ops.map(esc).join(' / ')})</b> ` : '')).join('')}</p>`; },
    key:q=>pickParse(q).slots.map((s,k)=>`(${k+1}) ${esc(s.right)}`).join(' · '),
    solve:q=>pickParse(q).slots.map(s=>s.right), wrong:q=>pickParse(q).slots.map(s=>s.ops.find(o=>o!==s.right)||s.right),
    said:(q,a)=>(Array.isArray(a)? a : []).map(x=>esc(x||'—')).join(' · ')},
  seq:{label:'Ordenar o diálogo ou o texto',short:'Sequência',help:'Escreva uma fala ou frase por linha, já na ordem certa. O aluno recebe embaralhado e põe na ordem.',
    fields:[['lines','Falas ou frases, uma por linha, na ordem certa','A: Hi! Can I help you?\nB: Yes, I’d like a coffee, please.\nA: Small or large?\nB: Large, please.',true]],
    blank:()=>({prompt:'Ponha na ordem certa.',lines:''}),
    valid:q=>seqLines(q).length>=3? null : 'Escreva pelo menos 3 linhas.',
    answer:(t,q)=>{ const L=seqLines(q), a=Array.isArray(t.answers[q.id])? t.answers[q.id] : [];
      return `<ol class="sq-line">${a.length? a.map((k,pos)=>`<li><button type="button" class="sq-it on" data-act="sq-rm" ${dt(t)} data-q="${q.id}" data-pos="${pos}"><span class="sq-n">${pos+1}</span>${esc(L[k])}</button></li>`).join('') : '<li class="muted" style="list-style:none">Toque nas linhas abaixo, na ordem certa.</li>'}</ol>
        <div class="sq-bank">${seqOrder(q).filter(k=>!a.includes(k)).map(k=>`<button type="button" class="sq-it" data-act="sq-add" ${dt(t)} data-q="${q.id}" data-k="${k}">${esc(L[k])}</button>`).join('')}</div>`; },
    answered:(q,a)=>Array.isArray(a)&&a.length===seqLines(q).length,
    grade:(q,a)=>{ const n=seqLines(q).length; return Array.isArray(a)? frac(a.filter((k,i)=>k===i).length,n) : 0; },
    tag:(q,a)=>`${Array.isArray(a)? a.filter((k,i)=>k===i).length : 0} de ${seqLines(q).length} no lugar`,
    result:(t,q,a,g,mode)=>{ const L=seqLines(q), A=mode==='key'? L.map((_,i)=>i) : (Array.isArray(a)? a : []);
      return `<ol class="sq-line res">${A.map((k,pos)=>`<li class="${k===pos?'ok':'no'}"><span class="sq-n">${pos+1}</span><span>${esc(L[k])}</span>${k!==pos? `<small>vai na ${k+1}ª</small>` : ''}</li>`).join('')||'<li class="muted">Sem resposta</li>'}</ol>`; },
    print:q=>{ const L=seqLines(q); return `<ul class="pr-seq">${seqOrder(q).map(k=>`<li><span class="pr-gap short"></span> ${esc(L[k])}</li>`).join('')}</ul>`; },
    key:q=>{ const o=seqOrder(q); return seqLines(q).map((_,i)=>o.indexOf(i)+1).join(' → ')+' (ordem das linhas da folha)'; },
    solve:q=>seqLines(q).map((_,i)=>i), wrong:q=>seqLines(q).map((_,i)=>i).reverse(),
    said:(q,a)=>(Array.isArray(a)? a : []).map(k=>esc(seqLines(q)[k])).join(' → ')},
  pmatch:{label:'Ligar palavras às imagens',short:'Imagens',help:'Uma linha por imagem: palavra | img:nome-da-imagem. O aluno escolhe a palavra de cada imagem.',
    fields:[['items','Palavras e imagens (uma por linha)','cat | img:gato\ndog | img:cachorro\nbird | img:passaro\nhorse | img:cavalo',true]],
    blank:()=>({prompt:'Escolha a palavra de cada imagem.',items:''}),
    valid:q=>{ const P=picParse(q); return P.length<3? 'Escreva pelo menos 3 linhas: palavra | img:nome.' : P.some(x=>!SCENES[x.img])? `Imagem desconhecida: ${P.find(x=>!SCENES[x.img]).img}.` : null; },
    answer:(t,q)=>{ const P=picParse(q), a=t.answers[q.id]||{}, opts=tpShuffle(P.map(x=>x.w[0]),q.id+'pm');
      return `<div class="pic-grid">${P.map((x,k)=>picCard(x.img,`<label class="sr" for="pm-${q.id}-${k}">Palavra da imagem ${k+1}</label><select id="pm-${q.id}-${k}" data-pm="${q.id}" data-k="${k}" ${dt(t)}><option value="">Escolha…</option>${opts.map(o=>`<option ${a[k]===o?'selected':''}>${esc(o)}</option>`).join('')}</select>`)).join('')}</div>`; },
    answered:(q,a)=>!!a&&picParse(q).every((_,k)=>a[k]),
    grade:(q,a)=>{ const P=picParse(q); return frac(P.filter((x,k)=>a&&a[k]===x.w[0]).length,P.length); },
    tag:(q,a)=>{ const P=picParse(q); return `${P.filter((x,k)=>a&&a[k]===x.w[0]).length} de ${P.length} imagens`; },
    result:(t,q,a,g,mode)=>`<div class="pic-grid">${picParse(q).map((x,k)=>{ const v=a?.[k], ok=mode==='key'||v===x.w[0]; return picCard(x.img,ok? `<b class="pic-ok">${esc(x.w[0])}</b>` : `<b class="pic-no">${esc(v||'—')}</b><small class="tp-right">${esc(x.w[0])}</small>`,ok?'right':'wrong'); }).join('')}</div>`,
    print:q=>{ const P=picParse(q); return `<p class="pr-bankbox">${tpShuffle(P.map(x=>x.w[0]),q.id+'pm').map(esc).join(' · ')}</p><div class="pr-pics">${P.map(x=>`<div>${imgMini(x.img,200,130)}<span class="pr-gap"></span></div>`).join('')}</div>`; },
    key:q=>picParse(q).map((x,k)=>`(${k+1}) ${esc(x.w[0])}`).join(' · '),
    solve:q=>Object.fromEntries(picParse(q).map((x,k)=>[k,x.w[0]])), wrong:q=>{ const P=picParse(q); return Object.fromEntries(P.map((x,k)=>[k,P[(k+1)%P.length].w[0]])); },
    said:(q,a)=>picParse(q).map((x,k)=>esc(a?.[k]||'—')).join(' · ')},
  label:{label:'Escreva o nome da imagem',short:'Nomear',help:'Uma linha por imagem: palavra | img:nome-da-imagem. Para aceitar mais de uma resposta, use /: a cup/cup | img:xicara. O aluno vê a imagem e quantas letras tem a palavra.',
    fields:[['items','Palavras e imagens (uma por linha)','apple | img:maca\nbread | img:pao\ncheese | img:queijo',true]],
    blank:()=>({prompt:'Escreva o nome de cada imagem.',items:''}),
    valid:q=>{ const P=picParse(q); return P.length<2? 'Escreva pelo menos 2 linhas: palavra | img:nome.' : P.some(x=>!SCENES[x.img])? `Imagem desconhecida: ${P.find(x=>!SCENES[x.img]).img}.` : null; },
    answer:(t,q)=>{ const P=picParse(q), a=t.answers[q.id]||{};
      return `<div class="pic-grid">${P.map((x,k)=>picCard(x.img,`<small class="pic-hint">${x.w[0].split(' ').map(w=>w[0]+' '+'_ '.repeat(Math.max(0,w.length-1))).join('  ').trim()}</small><input type="text" class="pic-in" data-lb="${q.id}" data-k="${k}" ${dt(t)} value="${esc(a[k]||'')}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Nome da imagem ${k+1}">`)).join('')}</div>`; },
    answered:(q,a)=>!!a&&picParse(q).every((_,k)=>String(a[k]||'').trim()),
    grade:(q,a)=>{ const P=picParse(q); return frac(P.filter((x,k)=>a&&x.w.some(w=>nrm(w)===nrm(a[k]))).length,P.length); },
    tag:(q,a)=>{ const P=picParse(q); return `${P.filter((x,k)=>a&&x.w.some(w=>nrm(w)===nrm(a[k]))).length} de ${P.length} imagens`; },
    result:(t,q,a,g,mode)=>`<div class="pic-grid">${picParse(q).map((x,k)=>{ const v=a?.[k], ok=mode==='key'||x.w.some(w=>nrm(w)===nrm(v)); return picCard(x.img,ok? `<b class="pic-ok">${esc(mode==='key'? x.w[0] : v)}</b>` : `<b class="pic-no">${esc(v||'—')}</b><small class="tp-right">${esc(x.w[0])}</small>`,ok?'right':'wrong'); }).join('')}</div>`,
    print:q=>`<div class="pr-pics">${picParse(q).map(x=>`<div>${imgMini(x.img,200,130)}<span class="pr-gap"></span></div>`).join('')}</div>`,
    key:q=>picParse(q).map((x,k)=>`(${k+1}) ${esc(x.w.join(' / '))}`).join(' · '),
    solve:q=>Object.fromEntries(picParse(q).map((x,k)=>[k,x.w[0]])), wrong:q=>Object.fromEntries(picParse(q).map((x,k)=>[k,'xx'])),
    said:(q,a)=>picParse(q).map((x,k)=>esc(a?.[k]||'—')).join(' · ')},
});
Object.assign(TIPO_KEEP,{pick:['text'],seq:['lines'],pmatch:['items'],label:['items']});
Object.assign(TIPO_ACT,{
  'pk-pick'(el){ const t=getTask(el.dataset.task), q=el.dataset.q, a=Array.isArray(t.answers[q])? t.answers[q] : []; a[+el.dataset.k]=el.dataset.v; t.answers[q]=a; save();
    el.parentElement.querySelectorAll('.pk-op').forEach(b=>{ const on=b===el; b.classList.toggle('on',on); b.setAttribute('aria-pressed',on); }); if (typeof updateProgress==='function') updateProgress(t); },
  'sq-add'(el){ const t=getTask(el.dataset.task), q=el.dataset.q, a=Array.isArray(t.answers[q])? t.answers[q] : []; a.push(+el.dataset.k); t.answers[q]=a; save(); render(); },
  'sq-rm'(el){ const t=getTask(el.dataset.task), a=t.answers[el.dataset.q]; a.splice(+el.dataset.pos,1); save(); render(); },
});
const _tipoInput=onTipoInput;
onTipoInput=function(e){ _tipoInput(e); const el=e.target;
  if (el.dataset.pm&&e.type==='change'){ const t=getTask(el.dataset.task); (t.answers[el.dataset.pm] ||= {})[el.dataset.k]=el.value; save(); if (typeof updateProgress==='function') updateProgress(t); }
  if (el.dataset.lb){ const t=getTask(el.dataset.task); (t.answers[el.dataset.lb] ||= {})[el.dataset.k]=el.value; clearTimeout(S.tpT); S.tpT=setTimeout(save,400); if (typeof updateProgress==='function') updateProgress(t); } };
const PICK=(text,prompt)=>({type:'pick',prompt:prompt||'Escolha a opção certa em cada lugar.',text});
const SEQ=(lines,prompt)=>({type:'seq',prompt:prompt||'Ponha na ordem certa.',lines});
const PMATCH=(items,prompt)=>({type:'pmatch',prompt:prompt||'Escolha a palavra de cada imagem.',items});
const LABEL=(items,prompt)=>({type:'label',prompt:prompt||'Escreva o nome de cada imagem.',items});
