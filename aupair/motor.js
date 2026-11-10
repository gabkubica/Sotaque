/* Au Pair · motor das páginas avulsas: áudio, correção, resultado e o link de respostas.
   Conteúdo em ../app/aupair.js (o mesmo do banco do Sotaque). */
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm=s=>String(s??'').toLowerCase().replace(/[’‘`´]/g,"'").replace(/[.!?,;:"“”]/g,'').replace(/\s+/g,' ').trim();
const LT='ABCDEFG', PLAY='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>';
const wc=s=>(String(s||'').trim().match(/\S+/g)||[]).length;
function rnd(seed){ let x=seed||1; return ()=>{ x^=x<<13; x^=x>>>17; x^=x<<5; return ((x>>>0)%1e6)/1e6; }; }
const hash=s=>{ let h=7; for (const c of String(s)) h=(h*31+c.charCodeAt(0))|0; return Math.abs(h)||1; };
function shuffled(n,key){ const R=rnd(hash(key)), a=[...Array(n).keys()]; for (let i=n-1;i>0;i--){ const j=Math.floor(R()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } if (n>1&&a.every((v,i)=>v===i)) a.push(a.shift()); return a; }

/* ---------- áudio: o navegador lê; A = entrevistadora, B = candidata; 0,75× / 1× / 1,5× troca no meio ---------- */
const TTS=typeof speechSynthesis!=='undefined', AUD=[]; let RATE=1, CUR=null;
const audKey=t=>{ let i=AUD.indexOf(t); if (i<0){ AUD.push(t); i=AUD.length-1; } return i; };
const voices=()=>TTS? speechSynthesis.getVoices().filter(v=>/^en/i.test(v.lang)).sort((a,b)=>(['en-US','en-GB'].indexOf(a.lang)+1||9)-(['en-US','en-GB'].indexOf(b.lang)+1||9)) : [];
function stopAudio(){ if (TTS) speechSynthesis.cancel(); CUR=null; document.querySelectorAll('.aud.on').forEach(e=>e.classList.remove('on')); }
function speak(i,from=0){
  if (!TTS){ alert('Este navegador não lê em voz alta. Abra no Chrome ou no Safari.'); return; }
  stopAudio(); const vs=voices(), run={i,at:from}, parts=[];
  for (const ln of AUD[i].split('\n').map(x=>x.trim()).filter(Boolean)){ const m=ln.match(/^([AB]):\s*(.+)$/), who=m&&m[1]==='B'? 1 : 0;
    for (const ch of (m? m[2] : ln).split(/(?<=[.!?…])\s+/)) if (ch.trim()) parts.push([who,ch]); }
  CUR=run; document.querySelectorAll(`.aud[data-a="${i}"]`).forEach(e=>e.classList.add('on'));
  parts.forEach(([who,ch],k)=>{ if (k<from) return; const u=new SpeechSynthesisUtterance(ch); u.lang='en-US';
    if (vs.length) u.voice=vs[Math.min(who,vs.length-1)]; u.pitch= who&&vs.length<2? 1.3 : 1; u.rate=RATE*.95;
    u.onstart=()=>{ if (CUR===run) run.at=k; }; if (k===parts.length-1) u.onend=()=>{ if (CUR===run) stopAudio(); };
    speechSynthesis.speak(u); });
}
const speedHtml=()=>`<span class="spd" role="group" aria-label="Velocidade">${[.75,1,1.5].map(r=>`<button type="button" data-act="rate" data-v="${r}" class="${r===RATE?'on':''}" aria-pressed="${r===RATE}">${String(r).replace('.',',')}×</button>`).join('')}</span>`;
const audioHtml=(text,label='Ouvir')=>{ const i=audKey(text); return TTS? `<div class="aud" data-a="${i}"><button type="button" class="btn primary play" data-act="say" data-a="${i}">${PLAY}${label}</button><button type="button" class="btn stop" data-act="stop">Parar</button>${speedHtml()}</div>` : '<p class="muted" style="margin:0">Este navegador não lê em voz alta. Abra no Chrome ou no Safari.</p>'; };
document.addEventListener('click',e=>{ const b=e.target.closest('[data-act]'); if (!b) return;
  if (b.dataset.act==='say') speak(+b.dataset.a);
  if (b.dataset.act==='stop') stopAudio();
  if (b.dataset.act==='rate'){ RATE=+b.dataset.v; document.querySelectorAll('.spd button').forEach(x=>{ const on=+x.dataset.v===RATE; x.classList.toggle('on',on); x.setAttribute('aria-pressed',on); }); if (CUR) speak(CUR.i,CUR.at); } });

/* ---------- itens: id, resposta e correção ---------- */
const itemsOf=day=>day.parts.flatMap((p,pi)=>p.items.map((it,k)=>({...it,id:`p${pi}i${k}`,part:pi})));
const objetiva=it=>it.t!=='open';
function grade(it,a){
  if (it.t==='mc') return a===it.c? 1 : 0;
  if (it.t==='tf') return a===it.c? 1 : 0;
  if (it.t==='gap') return it.a.split('|').some(x=>norm(x)===norm(a))? 1 : 0;
  if (it.t==='match') return Array.isArray(a)? it.pairs.filter((_,i)=>a[i]===i).length/it.pairs.length : 0;
  return null;
}
const answered=(it,a)=> it.t==='mc'? Number.isInteger(a) : it.t==='tf'? typeof a==='boolean' : it.t==='match'? Array.isArray(a)&&it.pairs.every((_,i)=>Number.isInteger(a[i])) : !!String(a??'').trim();
function scoreOf(items,ans){ const ob=items.filter(objetiva); return {got:ob.reduce((s,it)=>s+grade(it,ans[it.id]),0),n:ob.length}; }
const fmt=n=>Number.isInteger(n)? String(n) : n.toFixed(1).replace('.',',');

/* ---------- resultado (aluna depois de terminar e professora pelo link) ---------- */
function resultHtml(day,ans,who){
  const items=itemsOf(day), sc=scoreOf(items,ans), pct=Math.round(sc.got/sc.n*100);
  const one=it=>{ const a=ans[it.id], g=grade(it,a);
    if (it.t==='open') return `<div class="q"><div class="qh"><b>${esc(it.au||it.p)}</b></div><div class="mine">${a? esc(a) : '<span class="muted">Sem resposta</span>'}</div><p class="meta muted" style="margin:6px 0">${wc(a)} palavras</p>${it.m? `<div class="model"><b>Exemplo de resposta</b>${esc(it.m)}</div>` : ''}</div>`;
    const tag= g===1? '<span class="tag">certa</span>' : g>0? `<span class="tag">${Math.round(g*it.pairs.length)} de ${it.pairs.length}</span>` : `<span class="tag">${answered(it,a)? 'errada' : 'em branco'}</span>`;
    let body='';
    if (it.t==='mc'||it.t==='tf'){ const opts= it.t==='tf'? ['True','False'] : it.o, ci= it.t==='tf'? (it.c? 0 : 1) : it.c, ai= it.t==='tf'? (a===true? 0 : a===false? 1 : null) : a;
      body= g===1? `<small>Marcou <span class="rt">${esc(opts[ci])}</span></small>` : `<small>${ai!=null&&ai!==undefined? `Marcou <span class="mk">${esc(opts[ai])}</span> · ` : ''}certa: <span class="rt">${esc(opts[ci])}</span></small>`; }
    if (it.t==='gap') body= g===1? `<small>Escreveu <span class="rt">${esc(a)}</span></small>` : `<small>${a? `Escreveu <span class="mk">${esc(a)}</span> · ` : ''}certa: <span class="rt">${esc(it.a.split('|').join(' / '))}</span></small>`;
    if (it.t==='match') body=it.pairs.map((p,i)=>{ const ok=Array.isArray(a)&&a[i]===i, ch=Array.isArray(a)&&Number.isInteger(a[i])? it.pairs[a[i]][1] : null;
      return `<small>${esc(p[0])} → ${ok? `<span class="rt">${esc(p[1])}</span>` : `${ch? `<span class="mk">${esc(ch)}</span> · ` : ''}<span class="rt">${esc(p[1])}</span>`}</small>`; }).join('');
    return `<div class="qi ${g===1?'ok':'no'}"><div class="top"><b>${esc(it.p)}</b>${tag}</div>${body}</div>`; };
  return `<div class="panel"><p class="eyebrow">${who==='prof'? 'Resultado da aluna' : 'Seu resultado'}</p><div class="lvl">${fmt(sc.got)}<span style="font-size:28px;color:var(--ink-3)"> / ${sc.n}</span></div>
      <p class="meta" style="margin:0">${pct>=85? 'Excelente! Você está pronta para essa parte da entrevista.' : pct>=60? 'Muito bem! Revise os itens marcados e treine as respostas em voz alta.' : 'Bom começo! Revise os itens marcados e refaça os áudios com calma.'}</p>
      <p class="meta muted" style="margin:0;font-size:13.5px">Questões objetivas certas. As respostas da entrevista a professora lê e comenta.</p></div>
    ${day.parts.map((p,pi)=>`<div class="panel"><h2>${esc(p.title)}</h2>${p.audio? `<details class="qtxt"><summary>Ouvir de novo e ver a transcrição</summary>${audioHtml(p.audio)}<div class="mine" style="margin-top:8px">${esc(p.audio)}</div></details>` : ''}
      <div class="ql">${items.filter(it=>it.part===pi).map(one).join('')}</div></div>`).join('')}`;
}

/* ---------- link de respostas: tudo vai no endereço (comprimido quando o navegador sabe) ---------- */
const b64u=bytes=>{ let s=''; bytes.forEach(x=>s+=String.fromCharCode(x)); return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''); };
const unb64u=s=>{ const b=s.replace(/-/g,'+').replace(/_/g,'/'); return Uint8Array.from(atob(b+'==='.slice((b.length+3)%4)),c=>c.charCodeAt(0)); };
async function pipe(bytes,stream){ const out=await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer(); return new Uint8Array(out); }
async function encodeData(obj){
  const raw=new TextEncoder().encode(JSON.stringify(obj));
  if (typeof CompressionStream!=='undefined'){ try { return 'z'+b64u(await pipe(raw,new CompressionStream('deflate-raw'))); } catch {} }
  return 'j'+b64u(raw);
}
async function decodeData(code){
  const bytes=unb64u(code.slice(1));
  const raw= code[0]==='z'? await pipe(bytes,new DecompressionStream('deflate-raw')) : bytes;
  return JSON.parse(new TextDecoder().decode(raw));
}
const fData=t=>new Intl.DateTimeFormat('pt-BR',{dateStyle:'medium',timeStyle:'short'}).format(new Date(t));
