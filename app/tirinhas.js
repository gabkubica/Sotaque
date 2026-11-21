/* =========================================================
   Sotaque · tirinhas (quadrinhos) no estilo dos quadros
   Formato (o mesmo nos slides, nas atividades e no editor):
     [cena]               cenário dos quadrinhos seguintes (nome de uma imagem, opcional)
     Ana: Hi! How are you?
     Leo (feliz): Great, thanks!
     > Mais tarde…        legenda (caixa no alto)
     ---                  novo quadrinho
   Até 2 personagens por quadrinho. Expressões: feliz, triste, surpreso, bravo, pensando.
   Um balão com ___ fica em branco (para o aluno completar).
   ========================================================= */
const CAST={
  ana:{skin:'#e9b48f',hair:'#3b2414',style:'longo',shirt:'#d25a74'},
  leo:{skin:'#c98b5e',hair:'#1f1715',style:'curto',shirt:'#3f74b8'},
  bia:{skin:'#8d5a3b',hair:'#1f1715',style:'cacheado',shirt:'#d99a2b'},
  tom:{skin:'#f1c7a4',hair:'#c9772f',style:'curto',shirt:'#3a9563'},
  mia:{skin:'#f1c7a4',hair:'#e0b04a',style:'coque',shirt:'#6a5cb3'},
  sam:{skin:'#6b4430',hair:'#1f1715',style:'careca',shirt:'#b85f36'},
};
const CAST_KEYS=Object.keys(CAST);
const castOf=name=>{ const k=String(name||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z]/g,''); return CAST[k]||CAST[CAST_KEYS[hashStr(k)%CAST_KEYS.length]]; };
function pessoa(name,ex,flip){
  const c=castOf(name), W=120, H=130, cx=60, hy=58, r=27; let o='';
  const back= c.style==='longo'? `<path d="M${cx-r-3} ${hy}Q${cx-r-6} ${hy+46} ${cx-r+2} ${hy+52}L${cx+r-2} ${hy+52}Q${cx+r+6} ${hy+46} ${cx+r+3} ${hy}Z" fill="${c.hair}"/>`
    : c.style==='cacheado'? [-24,-12,0,12,24].map(x=>`<circle cx="${cx+x}" cy="${hy-18+Math.abs(x)*.4}" r="13" fill="${c.hair}"/>`).join('')+`<circle cx="${cx-27}" cy="${hy+2}" r="11" fill="${c.hair}"/><circle cx="${cx+27}" cy="${hy+2}" r="11" fill="${c.hair}"/>`
    : c.style==='coque'? `<circle cx="${cx}" cy="${hy-r-6}" r="12" fill="${c.hair}"/>` : '';
  o+=back+`<path d="M${cx-44} ${H}Q${cx-42} ${hy+38} ${cx} ${hy+36}Q${cx+42} ${hy+38} ${cx+44} ${H}Z" fill="${c.shirt}"/><rect x="${cx-9}" y="${hy+18}" width="18" height="20" rx="6" fill="${c.skin}"/>`;
  o+=`<circle cx="${cx}" cy="${hy}" r="${r}" fill="${c.skin}"/>`;
  if (c.style!=='careca'&&c.style!=='cacheado') o+=`<path d="M${cx-r-1} ${hy-2}Q${cx-r} ${hy-r-6} ${cx} ${hy-r-5}Q${cx+r} ${hy-r-6} ${cx+r+1} ${hy-2}Q${cx+8} ${hy-r+4} ${cx-r-1} ${hy-2}Z" fill="${c.hair}"/>`;
  const d=flip? -4 : 4, ey=hy-2, ink='#221c1e';
  const eyes= ex==='surpreso'? `<circle cx="${cx-10+d}" cy="${ey}" r="4.2" fill="#fff"/><circle cx="${cx+10+d}" cy="${ey}" r="4.2" fill="#fff"/><circle cx="${cx-10+d}" cy="${ey}" r="2.2" fill="${ink}"/><circle cx="${cx+10+d}" cy="${ey}" r="2.2" fill="${ink}"/>`
    : ex==='feliz'? `<path d="M${cx-14+d} ${ey+1}q4 -5 8 0M${cx+6+d} ${ey+1}q4 -5 8 0" stroke="${ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`
    : `<circle cx="${cx-10+d}" cy="${ey}" r="2.6" fill="${ink}"/><circle cx="${cx+10+d}" cy="${ey}" r="2.6" fill="${ink}"/>`;
  const brows= ex==='bravo'? `<path d="M${cx-16+d} ${ey-9}l10 4M${cx+16+d} ${ey-9}l-10 4" stroke="${ink}" stroke-width="2.2" stroke-linecap="round"/>` : ex==='triste'||ex==='pensando'? `<path d="M${cx-16+d} ${ey-6}l9 -3M${cx+16+d} ${ey-6}l-9 -3" stroke="${ink}" stroke-width="2" stroke-linecap="round"/>` : '';
  const mouth= ex==='feliz'? `<path d="M${cx-9+d} ${hy+10}Q${cx+d} ${hy+20} ${cx+9+d} ${hy+10}Z" fill="${ink}"/>` : ex==='triste'? `<path d="M${cx-8+d} ${hy+15}Q${cx+d} ${hy+8} ${cx+8+d} ${hy+15}" stroke="${ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`
    : ex==='surpreso'? `<ellipse cx="${cx+d}" cy="${hy+13}" rx="4.5" ry="6" fill="${ink}"/>` : ex==='bravo'? `<path d="M${cx-8+d} ${hy+14}h16" stroke="${ink}" stroke-width="2.2" stroke-linecap="round"/>`
    : ex==='pensando'? `<path d="M${cx-6+d} ${hy+13}q6 -3 12 1" stroke="${ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/>` : `<path d="M${cx-8+d} ${hy+11}Q${cx+d} ${hy+17} ${cx+8+d} ${hy+11}" stroke="${ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
  o+=eyes+brows+mouth+`<circle cx="${cx-17}" cy="${hy+8}" r="4.5" fill="#f08a8a" opacity=".35"/><circle cx="${cx+17}" cy="${hy+8}" r="4.5" fill="#f08a8a" opacity=".35"/>`;
  return `<svg class="tr-who" viewBox="0 0 ${W} ${H}" aria-hidden="true">${o}</svg>`;
}
function tirinhaParse(src){
  const panels=[]; let cur=null, scene='';
  const np=()=>{ cur={scene,lines:[],cap:''}; panels.push(cur); };
  for (const raw of String(src||'').split('\n')){ const l=raw.trim(); if (!l) continue;
    if (/^-{3,}$/.test(l)){ np(); continue; }
    let m;
    if ((m=l.match(/^\[([a-z\-]+)\]$/i))){ scene=m[1].toLowerCase(); if (cur&&!cur.lines.length) cur.scene=scene; continue; }
    if (!cur) np();
    if (l.startsWith('>')){ cur.cap=l.slice(1).trim(); continue; }
    if ((m=l.match(/^([^:()]{1,16}?)\s*(?:\(([a-zà-ú]+)\))?\s*:\s*(.*)$/i))) cur.lines.push({who:m[1].trim(),ex:(m[2]||'').toLowerCase(),say:m[3]});
  }
  return panels.filter(p=>p.lines.length||p.cap);
}
/* fill: texto para o balão em branco (resposta do aluno); mode 'q' marca o balão vazio */
function tirinha(src,o={}){
  const P=tirinhaParse(src); if (!P.length) return '';
  return `<div class="tr ${o.big?'big':''}" style="--n:${Math.min(P.length,4)}">${P.map((p,k)=>{ const who=[...new Set(p.lines.map(x=>x.who))].slice(0,2);
    const bg= p.scene&&typeof SCENES!=='undefined'&&SCENES[p.scene]? `<span class="tr-bg">${quadro(imgPal(p.scene),p.scene,hashStr(p.scene)%97,{w:320,h:240,frame:false})}</span>` : '';
    const pal=PAL[['tomate','ceu','menta','mostarda','lavanda','rosa'][(hashStr(src)+k)%6]];
    return `<div class="tr-p" style="background:${pal.bg}">${bg}${p.cap? `<span class="tr-cap">${esc(p.cap)}</span>` : ''}
      <div class="tr-bubbles">${p.lines.filter(x=>who.includes(x.who)).map(x=>{ const side=who.indexOf(x.who)? 'r' : 'l', blank=/_{3,}/.test(x.say);
        return `<span class="tr-b ${side} ${blank? 'blank' : ''}">${blank? (o.fill? `<b>${esc(x.say.replace(/_{3,}/,o.fill))}</b>` : esc(x.say).replace(/_{3,}/,'<i>?</i>')) : esc(x.say)}</span>`; }).join('')}</div>
      <div class="tr-cast">${who.map((w,i)=>`<span class="tr-c ${i? 'r' : 'l'}">${pessoa(w,p.lines.filter(x=>x.who===w).pop().ex,i===1)}<small>${esc(w)}</small></span>`).join('')}</div></div>`; }).join('')}</div>`;
}
/* questão "Complete a tirinha": a tirinha tem um balão com ___ e o aluno escolhe a fala certa */
Object.assign(TIPOS,{
  comic:{label:'Complete a tirinha',short:'Tirinha',help:'Escreva a tirinha (Nome: fala, uma por linha; --- separa os quadrinhos; [cena] escolhe o fundo). Num dos balões, ponha ___ no lugar da fala. Depois escreva as opções e marque a bolinha da certa.',
    fields:[['strip','Tirinha','[xicara]\nAna: Hi! What can I get you?\nLeo: ___\n---\nAna (feliz): Here you are!\nLeo (feliz): Thanks!',true]],
    blank:()=>({prompt:'Complete a tirinha.',strip:'',options:['','',''],correct:null}),
    mcEditor:true,
    valid:q=>!/_{3,}/.test(q.strip||'')? 'Ponha ___ num dos balões da tirinha.' : q.options.filter(o=>String(o).trim()).length<2? 'Escreva pelo menos 2 opções.' : q.correct==null||!String(q.options[q.correct]||'').trim()? 'Marque a opção certa.' : null,
    answer:(t,q,i)=>`${tirinha(q.strip,{fill:Number.isInteger(t.answers[q.id])? q.options[t.answers[q.id]] : ''})}<div class="opts-col" role="radiogroup" aria-label="Questão ${i+1}">${optOrder(q).map((k,pos)=>`<label class="ans"><input type="radio" name="a-${q.id}" value="${k}" data-ans="${q.id}" ${dt(t)} ${t.answers[q.id]===k?'checked':''}><span class="lt">${LT[pos]}</span><span class="tx">${esc(q.options[k])}</span></label>`).join('')}</div>`,
    answered:(q,a)=>Number.isInteger(a), grade:(q,a)=>a===q.correct? 1 : 0,
    result:(t,q,a,g,mode)=>`${tirinha(q.strip,{fill:q.options[q.correct]})}${mode!=='key'&&a!==q.correct? `<p class="meta" style="margin:0">${Number.isInteger(a)? `Escolheu: <b>${esc(q.options[a])}</b> · ` : ''}Certa: <b>${esc(q.options[q.correct])}</b></p>` : ''}`,
    print:q=>`${tirinha(q.strip)}<ul class="pr-opts">${optOrder(q).map((k,pos)=>`<li><span class="pr-box"></span>${LT[pos]}) ${esc(q.options[k])}</li>`).join('')}</ul>`,
    key:q=>`${LT[optOrder(q).indexOf(q.correct)]}) ${esc(q.options[q.correct])}`,
    solve:q=>q.correct, wrong:q=>(q.correct+1)%q.options.length, said:(q,a)=>Number.isInteger(a)? esc(q.options[a]) : '—'},
});
TIPO_KEEP.comic=['strip','options','correct'];
const COMIC=(strip,options,correct,prompt)=>({type:'comic',prompt:prompt||'Complete a tirinha.',strip,options,correct});
