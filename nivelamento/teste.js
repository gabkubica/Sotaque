/* Nivelamento rápido avulso: questões, correção e o link de respostas.
   Usado pelo teste (index.html) e pela aba escondida de respostas (respostas.html). */
const LV=['A1','A2','B1','B2','C1'];
function rnd(seed){ let x=seed||1; return ()=>{ x^=x<<13; x^=x>>>17; x^=x<<5; return ((x>>>0)%1e6)/1e6; }; }
/* questões fixas (as 3 primeiras de cada nível), com as alternativas embaralhadas sempre do mesmo jeito */
function montar(LANG){
  const N=NIVELAMENTO[LANG], Q=[];
  LV.forEach((lv,li)=>N.G[lv].slice(0,3).forEach(([p,opts,c],k)=>{ const R=rnd(97*(li+1)+k*13+7), ord=opts.map((_,i)=>i);
    for (let i=ord.length-1;i>0;i--){ const j=Math.floor(R()*(i+1)); [ord[i],ord[j]]=[ord[j],ord[i]]; }
    Q.push({id:'g'+lv+k,part:'G',lv,prompt:p,options:[...ord.map(j=>opts[j]),'Não sei'],correct:ord.indexOf(c)}); }));
  const AUDIOS=['A2','B1','B2'].map(lv=>{ const [title,script,list]=N.O[lv]; return {lv,title,script,qs:list.slice(0,2).map((r,k)=>{
    const q= r[0]==='tf'? {type:'tf',prompt:r[1],options:['True / Vrai','False / Faux'],correct:r[2]? 0 : 1} : {type:'mc',prompt:r[0],options:r[1],correct:r[2]};
    return {id:'o'+lv+k,part:'O',lv,audio:title,...q}; })}; });
  AUDIOS.forEach(a=>Q.push(...a.qs));
  return {Q,AUDIOS,W:{prompt:N.E_CURTO[0],words:N.E_CURTO[1],hint:N.E_CURTO[2]},LANGNAME:LANG==='FR'? 'francês' : 'inglês'};
}
/* um nível conta com 60% de acerto nele e nos de baixo; 40% no seguinte vira "plus" */
function pontuar(Q,ans){
  const ok=q=>ans[q.id]===q.correct;
  const rows=LV.map(lv=>{ const qs=Q.filter(q=>q.lv===lv); return {lv,got:qs.filter(ok).length,n:qs.length}; });
  let r=-1; for (let i=0;i<rows.length;i++){ if (rows[i].got/rows[i].n>=.6) r=i; else break; }
  let est= r<0? 'pré-A1' : LV[r];
  if (r>0&&r<4&&rows[r+1].got/rows[r+1].n>=.4) est+='+';
  const part=p=>{ const qs=Q.filter(q=>q.part===p); return {got:qs.filter(ok).length,n:qs.length}; };
  return {rows,est,G:part('G'),O:part('O')};
}
const wc=s=>(String(s||'').trim().match(/\S+/g)||[]).length;
/* o link leva tudo no endereço: idioma, nome, respostas (um caractere por questão), texto e data */
function codificar(LANG,Q,S){
  const d={v:1,l:LANG,n:S.name.trim(),a:Q.map(q=>Number.isInteger(S.ans[q.id])? String(S.ans[q.id]) : '-').join(''),t:S.text.trim(),d:S.at||Date.now()};
  const b=new TextEncoder().encode(JSON.stringify(d)); let bin=''; b.forEach(x=>bin+=String.fromCharCode(x));
  return btoa(bin).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
}
function decodificar(code){
  const b64=code.replace(/-/g,'+').replace(/_/g,'/'), bin=atob(b64+'==='.slice((b64.length+3)%4));
  return JSON.parse(new TextDecoder().decode(Uint8Array.from(bin,c=>c.charCodeAt(0))));
}
