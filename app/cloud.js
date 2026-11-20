/* =========================================================
   Sotaque · nuvem (Supabase), só no Sotaque real (aulas/)
   - login: professora cria a conta; aluno só cria se a professora cadastrou o e-mail dele (sq_invites)
   - dados: cada item do Sotaque vira um registro em sq_records (aluno, aula, homework, flashcards…)
   - salvar: o app continua chamando save(); aqui só os registros que mudaram vão para a nuvem
   A chave abaixo é a "publishable": pode ficar no site. Quem protege os dados são as regras do banco
   (supabase/schema.sql).
   ========================================================= */
const SB_URL='https://vxfucdkliednhrgvgslh.supabase.co', SB_KEY='sb_publishable_mlZyy-xefHGYlgLEzhAAnw_FM75XEyY';
const CLOUD={sb:null,user:null,member:null,snap:new Map(),timer:null,syncing:false,again:false,pending:false,failed:false,bank:null};
const ST_KINDS=['task','request','flashp','cando','user'];
const siteUrl=()=>location.origin+location.pathname;
function cloudClient(){
  return CLOUD.sb ||= supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,flowType:'implicit',storageKey:'sotaque-auth'}});
}
const isTeacherCloud=()=>CLOUD.member?.role==='teacher';

/* ---------- do Sotaque para registros e de volta ---------- */
function baseDB(){
  const d=seedReal(); if (CLOUD.bank) d.bank=CLOUD.bank.slice(); else CLOUD.bank=d.bank.slice();
  DB=d; DB.decks=null; ensureFlash(); return DB;
}
function recsFromDB(){
  const out=[], me=CLOUD.member?.app_id;
  const add=(kind,id,student,data)=>out.push({id:kind+':'+id,kind,student_id:student||null,data});
  for (const u of DB.users){ const {pass,...rest}=u; add('user',u.id,u.role==='student'? u.id : null,rest); }
  DB.lessons.forEach(x=>add('lesson',x.id,x.studentId,x));
  DB.tasks.forEach(x=>add('task',x.id,x.studentId,x));
  DB.packages.forEach(x=>add('package',x.id,x.studentId,x));
  DB.requests.forEach(x=>add('request',x.id,x.studentId,x));
  DB.conq.forEach(x=>add('conq',x.studentId+'|'+x.marcoId,x.studentId,x));
  DB.certs.forEach(x=>add('cert',x.id,x.studentId,x));
  for (const [k,v] of Object.entries(DB.cando||{})) add('cando',k,k.split('|')[0],{k,v});
  for (const [k,v] of Object.entries(DB.flashp||{})) add('flashp',k,k.split('|')[0],{k,v});
  for (const [k,v] of Object.entries(DB.settings||{})) add('settings',k,null,{k,v});
  for (const [k,v] of Object.entries(DB.dev||{})) add('dev',k,null,{k,v});
  (DB.decks||[]).filter(d=>d.teacherId===me||d.students?.length).forEach(d=>add('deck',d.id,null,d));
  (DB.aulas||[]).forEach(a=>add('aula',a.id,null,a));
  (DB.pdfs||[]).forEach(p=>add('pdf',p.id,null,p));
  (DB.bank||[]).filter(b=>b.mine).forEach(b=>add('bank',b.id,null,b));
  (DB.slides||[]).forEach(d=>add('slides',d.id,null,d));
  for (const [k,v] of Object.entries(DB.ink||{})) add('ink',k,null,{k,v});
  for (const [k,v] of Object.entries(DB.cad||{})) add('cad',k,k,v);
  for (const [k,v] of Object.entries(DB.cadp||{})) add('cadp',k,v.sid,v);
  (DB.kfiles||[]).forEach(f=>add('kfile',f.id,null,f));
  return out;
}
function dbFromRecords(rows){
  const D=baseDB();
  for (const r of rows){ const d=r.data;
    switch (r.kind){
      case 'user': D.users.push(d); break;
      case 'lesson': D.lessons.push(d); break;
      case 'task': D.tasks.push(d); break;
      case 'package': D.packages.push(d); break;
      case 'request': D.requests.push(d); break;
      case 'conq': D.conq.push(d); break;
      case 'cert': D.certs.push(d); break;
      case 'cando': D.cando[d.k]=d.v; break;
      case 'flashp': D.flashp[d.k]=d.v; break;
      case 'settings': D.settings[d.k]=d.v; break;
      case 'dev': D.dev[d.k]=d.v; break;
      case 'deck': { const i=D.decks.findIndex(x=>x.id===d.id); if (i>=0) D.decks[i]=d; else D.decks.push(d); break; }
      case 'aula': D.aulas.push(d); break;
      case 'pdf': D.pdfs.push(d); break;
      case 'bank': D.bank.push(d); break;
      case 'slides': (D.slides ||= []).push(d); break;
      case 'ink': (D.ink ||= {})[d.k]=d.v; break;
      case 'cad': (D.cad ||= {})[d.sid]=d; break;
      case 'cadp': (D.cadp ||= {})[d.id]=d; break;
      case 'kfile': (D.kfiles ||= []).push(d); break;
    }
  }
  return D;
}
/* assinatura de cada registro para saber o que mudou. As páginas do caderno digital podem ter milhares de pontos:
   em vez de transformar tudo em texto a cada traço, comparam a versão da página (cadSave soma 1 a cada mudança). */
function recSig(r){ if (r.kind==='cadp'){ const d=r.data, L=d.strokes?.[d.strokes.length-1];
    return '#'+(d.v||0)+'|'+(d.strokes?.length||0)+'|'+(d.items?.length||0)+'|'+d.bg+'|'+r.student_id+'|'+(L? L.pts[0]+','+L.pts[1]+','+L.pts.length : ''); }
  return JSON.stringify([r.student_id,r.data]); }
const mineToSync=r=>isTeacherCloud()||(ST_KINDS.includes(r.kind)&&r.student_id===CLOUD.member?.app_id);
function snapOf(){ const m=new Map(); for (const r of recsFromDB()) if (mineToSync(r)) m.set(r.id,recSig(r)); return m; }

/* ---------- carregar ---------- */
/* CLOUD.ver guarda o updated_at de cada registro e CLOUD.rows o conteúdo (texto) como estava na nuvem.
   Assim a atualização periódica pergunta só "id + updated_at" (leve) e baixa de novo só o que mudou. */
CLOUD.ver=new Map(); CLOUD.rows=new Map();
function keepRows(data){ for (const r of data){ CLOUD.ver.set(r.id,r.updated_at); CLOUD.rows.set(r.id,{id:r.id,kind:r.kind,student_id:r.student_id,json:JSON.stringify(r.data)}); } }
const rowsNow=()=>[...CLOUD.rows.values()].map(r=>({id:r.id,kind:r.kind,student_id:r.student_id,data:JSON.parse(r.json)}));
/* cópia local dos registros (IndexedDB, por conta): na próxima visita o Sotaque abre na hora com ela e depois
   confere na nuvem só o que mudou. Sai do aparelho quando a pessoa clica em Sair. */
function snapIdb(){ return CLOUD.idb ||= new Promise((ok,no)=>{ const r=indexedDB.open('sotaque-nuvem',1); r.onupgradeneeded=()=>r.result.createObjectStore('s'); r.onsuccess=()=>ok(r.result); r.onerror=()=>no(r.error); }); }
async function snapGet(uid){ try { const d=await snapIdb(); return await new Promise(ok=>{ const q=d.transaction('s').objectStore('s').get(uid); q.onsuccess=()=>ok(q.result||null); q.onerror=()=>ok(null); }); } catch { return null; } }
function snapPutSoon(){ clearTimeout(CLOUD.snapT); CLOUD.snapT=setTimeout(snapPut,1500); }
async function snapPut(){ if (!CLOUD.user||!CLOUD.member||CLOUD.warm) return;
  try { const d=await snapIdb(), rows=[...CLOUD.rows.values()].map(r=>[r.id,r.kind,r.student_id,CLOUD.ver.get(r.id)??null,r.json]);
    d.transaction('s','readwrite').objectStore('s').put({v:1,t:Date.now(),member:CLOUD.member,rows},CLOUD.user.id); } catch {} }
async function snapDel(uid){ try { const d=await snapIdb(); d.transaction('s','readwrite').objectStore('s').delete(uid); } catch {} }
function snapUse(sn,uid){ CLOUD.user={id:uid}; CLOUD.member=sn.member; CLOUD.ver=new Map(); CLOUD.rows=new Map();
  for (const [id,kind,student_id,ver,json] of sn.rows){ CLOUD.ver.set(id,ver); CLOUD.rows.set(id,{id,kind,student_id,json}); }
  DB=dbFromRecords(rowsNow()); CLOUD.snap=snapOf(); S.me=sn.member.app_id; if (sn.member.role==='teacher') ensureLessons(); }
async function fetchRows(){
  const sb=cloudClient(), rows=[];
  for (let from=0;;from+=1000){
    const {data,error}=await sb.from('sq_records').select('id,kind,student_id,data,updated_at').eq('teacher_id',CLOUD.member.teacher_id).neq('kind','kblob').order('id').range(from,from+999);
    if (error) throw error; rows.push(...data); if (data.length<1000) break;
  }
  CLOUD.ver=new Map(); CLOUD.rows=new Map(); keepRows(rows);
  return rows;
}
/* só o que mudou desde a última vez (novos, alterados e apagados) */
async function fetchChanges(){
  const sb=cloudClient(), T=CLOUD.member.teacher_id, heads=[];
  for (let from=0;;from+=1000){
    const {data,error}=await sb.from('sq_records').select('id,updated_at').eq('teacher_id',T).neq('kind','kblob').order('id').range(from,from+999);
    if (error) throw error; heads.push(...data); if (data.length<1000) break;
  }
  const ids=new Set(heads.map(h=>h.id)), changed=heads.filter(h=>CLOUD.ver.get(h.id)!==h.updated_at).map(h=>h.id), gone=[...CLOUD.ver.keys()].filter(id=>!ids.has(id));
  if (!changed.length&&!gone.length) return false;
  const got=[];
  for (let i=0;i<changed.length;i+=100){
    const {data,error}=await sb.from('sq_records').select('id,kind,student_id,data,updated_at').eq('teacher_id',T).in('id',changed.slice(i,i+100));
    if (error) throw error; got.push(...data);
  }
  gone.forEach(id=>{ CLOUD.ver.delete(id); CLOUD.rows.delete(id); }); keepRows(got);
  return true;
}
async function cloudLoad(warm){
  const sb=cloudClient(), {data:{user},error:ue}=await sb.auth.getUser();
  if (ue&&/fetch|network|Failed/i.test(ue.message||'')) throw ue;          /* sem internet: não é "sem login" */
  if (!user) return false;
  const {data:m,error}=await sb.from('sq_members').select('*').eq('uid',user.id).maybeSingle();
  if (error) throw error;
  if (!m){ await sb.auth.signOut(); return 'nomember'; }
  const same=warm&&CLOUD.user?.id===user.id&&CLOUD.member?.app_id===m.app_id;
  CLOUD.user=user; CLOUD.member=m;
  if (same){ /* abriu com a cópia local: traz só o que mudou na nuvem enquanto o aparelho estava fechado */
    if (await fetchChanges()){ if (CLOUD.pending||S.modal||document.activeElement?.matches('input,textarea,select')) CLOUD.stale=true; else { DB=dbFromRecords(rowsNow()); CLOUD.snap=snapOf(); } }
  } else { DB=dbFromRecords(await fetchRows()); CLOUD.snap=snapOf(); }
  CLOUD.warm=false; snapPutSoon();
  if (m.role==='teacher'&&!DB.users.some(u=>u.id===m.app_id)){
    const md=user.user_metadata||{};
    DB.users.push({id:m.app_id,name:md.name||m.email.split('@')[0],email:m.email,role:'teacher',lang:md.lang||'EN',fem:md.fem!==false});
    settingsOf(m.app_id); if (typeof seedAulasFor==='function') seedAulasFor(m.app_id,md.lang||'EN');
  }
  S.me=m.app_id;
  if (m.role==='teacher') ensureLessons();
  cloudQueue();
  return true;
}
/* recarrega quando a aba volta a ficar visível (ex.: a professora vê a homework que o aluno acabou de entregar) */
async function cloudRefresh(){
  if (!CLOUD.member||CLOUD.warm||CLOUD.syncing||CLOUD.pending||S.modal||document.activeElement?.matches('input,textarea,select')) return;
  try {
    if (await fetchChanges()) CLOUD.stale=true;          /* mudou algo: aplica agora ou, se houver edição pendente, na próxima vez */
    if (!CLOUD.stale||CLOUD.pending||CLOUD.syncing) return; CLOUD.stale=false;
    const keep=DB, D=dbFromRecords(rowsNow()), snap=snapOf();
    const same=snap.size===CLOUD.snap.size&&[...snap].every(([k,v])=>CLOUD.snap.get(k)===v);
    if (same){ DB=keep; return; }
    CLOUD.snap=snap; DB=D; render(); snapPutSoon();
  } catch {}
}

/* ---------- salvar só o que mudou ---------- */
function cloudQueue(){ if (!CLOUD.member) return; CLOUD.pending=true; clearTimeout(CLOUD.timer); CLOUD.timer=setTimeout(cloudSync,600); }
async function cloudSync(){
  if (!CLOUD.member) return;
  if (CLOUD.warm){ CLOUD.pending=true; return; }   /* ainda conferindo a nuvem: salva logo depois */
  if (CLOUD.syncing){ CLOUD.again=true; return; }
  CLOUD.syncing=true;
  const sb=cloudClient(), T=CLOUD.member.teacher_id;
  try {
    const cur=new Map(), up=[];
    for (const r of recsFromDB()){ if (!mineToSync(r)) continue; const s=recSig(r); cur.set(r.id,s); if (CLOUD.snap.get(r.id)!==s) up.push(r); }
    const del=[...CLOUD.snap.keys()].filter(id=>!cur.has(id)&&(isTeacherCloud()||id.startsWith('request:')));
    const stamp=new Date().toISOString();
    for (let i=0;i<up.length;i+=200){
      const {error}=await sb.from('sq_records').upsert(up.slice(i,i+200).map(r=>({teacher_id:T,id:r.id,kind:r.kind,student_id:r.student_id,data:r.data,updated_at:stamp})),{onConflict:'teacher_id,id'});
      if (error) throw error;
    }
    for (let i=0;i<del.length;i+=100){ const {error}=await sb.from('sq_records').delete().eq('teacher_id',T).in('id',del.slice(i,i+100)); if (error) throw error; }
    up.forEach(r=>CLOUD.snap.set(r.id,cur.get(r.id))); del.forEach(id=>CLOUD.snap.delete(id));
    up.forEach(r=>{ CLOUD.rows.set(r.id,{id:r.id,kind:r.kind,student_id:r.student_id,json:JSON.stringify(r.data)}); CLOUD.ver.set(r.id,null); });
    del.forEach(id=>{ CLOUD.rows.delete(id); CLOUD.ver.delete(id); }); snapPutSoon();
    if (CLOUD.failed){ CLOUD.failed=false; toast('Conexão de volta. Tudo salvo.'); }
  } catch (e){
    if (!CLOUD.failed) toast('Sem conexão com a nuvem. Suas mudanças ficam aqui e são salvas quando a internet voltar.');
    CLOUD.failed=true; CLOUD.again=true; setTimeout(cloudQueue,8000);
  } finally {
    CLOUD.syncing=false;
    if (CLOUD.again){ CLOUD.again=false; cloudQueue(); } else CLOUD.pending=!!CLOUD.failed;
  }
}

/* ---------- contas ---------- */
const AUTH_MSG=e=>{ const m=String(e?.message||e||'');
  if (/Invalid login credentials/i.test(m)) return 'E-mail ou senha incorretos.';
  if (/Email not confirmed/i.test(m)) return 'Falta confirmar o seu e-mail: abra a mensagem que o Sotaque mandou e clique no link.';
  if (/Database error saving new user|SOTAQUE_SEM_CONVITE/i.test(m)) return 'Este e-mail ainda não foi cadastrado pelo seu professor ou professora. Peça para te cadastrarem no Sotaque e tente de novo.';
  if (/already registered|already been registered/i.test(m)) return 'Já existe uma conta com este e-mail. Use “Entrar” ou “Esqueci minha senha”.';
  if (/rate limit|too many/i.test(m)) return 'Muitas tentativas agora. Espere alguns minutos e tente de novo.';
  if (/Password should be|weak/i.test(m)) return 'A senha precisa ter pelo menos 6 caracteres.';
  if (/fetch|network/i.test(m)) return 'Sem conexão com a internet.';
  return 'Não deu certo: '+m;
};
async function cloudLogin(email,pass){
  const {error}=await cloudClient().auth.signInWithPassword({email,password:pass});
  if (error) return AUTH_MSG(error);
  const r=await cloudLoad();
  if (r==='nomember') return 'Esta conta não é do Sotaque.';
  return r? null : 'Não deu para entrar. Tente de novo.';
}
async function cloudSignup(email,pass,meta){
  const {data,error}=await cloudClient().auth.signUp({email,password:pass,options:{data:{app:'sotaque',...meta},emailRedirectTo:siteUrl()}});
  if (error&&meta.role==='teacher'&&/Database error saving new user|SOTAQUE_PROF/i.test(error.message)) return {err:'Este e-mail ainda não está autorizado a criar conta de professor. Peça a liberação para quem administra o Sotaque.'};
  if (error) return {err:AUTH_MSG(error)};
  if (data?.user&&Array.isArray(data.user.identities)&&!data.user.identities.length) return {err:AUTH_MSG('already registered')};
  if (data?.session){ await cloudLoad(); return {logged:true}; }
  return {confirm:true};
}
async function cloudLogout(){ const uid=CLOUD.user?.id; if (uid) snapDel(uid); clearTimeout(CLOUD.snapT); try { await cloudClient().auth.signOut(); } catch {} CLOUD.member=null; CLOUD.user=null; CLOUD.snap=new Map(); CLOUD.ver=new Map(); CLOUD.rows=new Map(); clearTimeout(CLOUD.timer); CLOUD.pending=false; baseDB(); }
async function cloudForgot(email){ const {error}=await cloudClient().auth.resetPasswordForEmail(email,{redirectTo:siteUrl()}); return error? AUTH_MSG(error) : null; }
async function cloudNewPass(p){ const {error}=await cloudClient().auth.updateUser({password:p}); return error? AUTH_MSG(error) : null; }
/* convite do aluno: o e-mail que ele vai usar no "Primeiro acesso" */
async function cloudInvite(email,appId){
  if (!isTeacherCloud()) return;
  const sb=cloudClient(), T=CLOUD.member.teacher_id;
  await sb.from('sq_invites').delete().eq('teacher_id',T).eq('app_id',appId);
  const {error}=await sb.from('sq_invites').upsert({email:email.toLowerCase(),teacher_id:T,app_id:appId},{onConflict:'email'});
  if (error) toast(/duplicate|violates|row-level/i.test(error.message)? 'Este e-mail já está cadastrado por outro professor.' : 'Não deu para salvar o convite do aluno. Tente de novo.');
}
async function cloudUninvite(appId){ if (!isTeacherCloud()) return; try { await cloudClient().from('sq_invites').delete().eq('teacher_id',CLOUD.member.teacher_id).eq('app_id',appId); } catch {} }
/* quem já ativou a conta (para a professora ver no caderno) */
async function cloudActivated(){ if (!isTeacherCloud()) return []; const {data}=await cloudClient().from('sq_members').select('app_id').eq('teacher_id',CLOUD.member.teacher_id).eq('role','student'); return (data||[]).map(x=>x.app_id); }

/* ---------- início ---------- */
async function cloudStart(){
  const sb=cloudClient();
  sb.auth.onAuthStateChange(ev=>{ if (ev==='PASSWORD_RECOVERY') setTimeout(()=>ACT['new-pass']?.(),50); });
  /* abre na hora com a cópia local (se houver), antes de falar com a nuvem */
  let warm=false;
  if (!/access_token|type=/.test(location.hash)){
    try { const uid=JSON.parse(localStorage.getItem('sotaque-auth')||'null')?.user?.id, sn=uid? await snapGet(uid) : null;
      if (sn?.member&&Array.isArray(sn.rows)&&sn.rows.length){ snapUse(sn,uid); CLOUD.warm=warm=true; S.cloudLoading=false;
        if (!/^#./.test(location.hash)) location.hash='inicio'; S.route=parseHash(); render(); } } catch { CLOUD.warm=warm=false; }
  }
  await cloudConnect(warm);
  cloudActivated().then(a=>{ S.activated=a; }).catch(()=>{});
}
async function cloudConnect(warm){
  try { const r=await cloudLoad(warm);
    if (r==='nomember') toast('Esta conta não é do Sotaque.');
    if (r!==true&&warm){ const uid=CLOUD.user?.id; if (uid) snapDel(uid); CLOUD.warm=false; CLOUD.member=null; CLOUD.user=null; CLOUD.snap=new Map(); S.me=null; baseDB(); }
    if (r===true&&CLOUD.pending) cloudQueue();
  } catch {
    if (warm){ toast('Sem conexão com a nuvem: você está vendo o que estava salvo neste aparelho. As mudanças vão para a nuvem quando a internet voltar.');
      clearTimeout(CLOUD.retryT); CLOUD.retryT=setTimeout(()=>cloudConnect(true),20000); }
    else toast('Sem conexão com a nuvem. Confira a internet e recarregue a página.');
  }
  S.cloudLoading=false;
  if (/access_token|type=/.test(location.hash)) history.replaceState(null,'',location.pathname+'#inicio');
  if (S.me&&!/^#./.test(location.hash)) location.hash='inicio';
  S.route=parseHash(); if (!warm||!(S.modal||document.activeElement?.matches('input,textarea,select'))) render();
}
window.addEventListener('online',()=>{ if (CLOUD.warm){ clearTimeout(CLOUD.retryT); cloudConnect(true); } });
document.addEventListener('visibilitychange',()=>{ if (document.visibilityState==='visible') cloudRefresh(); });
setInterval(()=>{ if (document.visibilityState==='visible') cloudRefresh(); },60000);
window.addEventListener('beforeunload',e=>{ if (CLOUD.pending||CLOUD.syncing){ e.preventDefault(); e.returnValue=''; } });
