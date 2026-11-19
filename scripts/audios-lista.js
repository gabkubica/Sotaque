/* Lista as falas de cada aula pronta (slides) para gerar os áudios: node scripts/audios-lista.js > lista.json
   Usa o próprio app (Playwright), então as chaves batem com as do player. */
const {chromium}=require('playwright'), path=require('path');
(async()=>{ const b=await chromium.launch(), pg=await b.newPage();
  await pg.goto('file://'+path.resolve(__dirname,'../app/index.html')); await pg.evaluate(()=>localStorage.clear()); await pg.reload(); await pg.waitForTimeout(500);
  await pg.fill('#l-email','professora@sotaque.app'); await pg.fill('#l-pass','sotaque123'); await pg.click('form[data-form=login] button.primary'); await pg.waitForTimeout(300); await pg.evaluate(()=>slidesLoad());
  const out=await pg.evaluate(()=>slSeed().map(d=>{ const texts=new Set();
    for (const s of slidesParse(d.src)){
      for (const rev of [false,true]){ const h=slideHtml(s,{lang:d.lang,level:d.level,rev,key:d.id}); for (const m of h.matchAll(/data-k="(a[^"]+)"/g)) if (AUD[m[1]]) texts.add(AUD[m[1]].text); }
      if (s.t==='exercicio') for (const q of exParse(s.body.filter(x=>!x.startsWith('!')))){ const tx=q.type==='dict'? q.text : q.audio; if (tx) texts.add(tx); } }
    const clips={}; for (const t of texts) for (const [who,ch] of audParts(t)) clips[clipKey(d.lang,who,ch)]={who,text:ch.trim()};
    return {id:d.id,lang:d.lang,title:d.title,clips}; }));
  process.stdout.write(JSON.stringify(out)); await b.close(); })();
