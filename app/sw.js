/* Sotaque · guarda os arquivos do app no aparelho para abrir rápido (e sem internet).
   - Páginas (index.html) e dados sem versão: busca a versão nova primeiro; sem internet (ou rede lenta), usa a cópia guardada.
   - Código e estilo com ?v=...: cada publicação muda o ?v, então o que já está guardado pode ser usado direto,
     sem esperar a rede (abrir de novo fica instantâneo). Versões antigas do mesmo arquivo são apagadas.
   - Áudios, livrinhos e imagens: ficam num cache à parte, que NÃO é apagado a cada atualização do app
     (antes, cada publicação fazia o aparelho baixar tudo de novo). */
const CACHE = 'sotaque-v39';
const MEDIA = 'sotaque-media-1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== MEDIA).map(k => caches.delete(k)))).then(() => self.clients.claim())); });

const FIXO = /\/audio\/k\/[^/]+\.mp3$|\/livros\/[^/]+\.json$/;            // não mudam: guarda e usa sempre
const MIDIA = /\/audio\/|\.(?:mp3|png|jpe?g|webp|gif|svg|woff2?)$/;     // usa o guardado e atualiza por trás

function guardar(c, req, r) { if (r && r.ok && r.type === 'basic') c.put(req, r.clone()).catch(() => {}); return r; }
async function cacheFirst(name, req) {
  const c = await caches.open(name), hit = await c.match(req);
  return hit || fetch(req).then(r => guardar(c, req, r));
}
async function staleWhileRevalidate(name, req, ev) {
  const c = await caches.open(name), hit = await c.match(req);
  const net = fetch(req).then(r => guardar(c, req, r)).catch(() => hit);
  if (hit) { ev.waitUntil(net.catch(() => {})); return hit; }
  return net;
}
async function versioned(req) {
  const c = await caches.open(CACHE), hit = await c.match(req);
  if (hit) return hit;
  const r = await fetch(req);
  if (r && r.ok) {
    const u = new URL(req.url);
    c.keys().then(ks => ks.forEach(k => { const ku = new URL(k.url); if (ku.pathname === u.pathname && ku.search !== u.search) c.delete(k); }));
    guardar(c, req, r);
  }
  return r;
}
async function networkFirst(req) {
  const c = await caches.open(CACHE);
  const net = fetch(req).then(r => guardar(c, req, r));
  const slow = new Promise(ok => setTimeout(ok, 4000)).then(() => c.match(req, { ignoreSearch: true }));
  try {
    const r = await Promise.race([net, slow.then(h => h || net)]);
    return r || await net;
  } catch {
    const hit = await c.match(req, { ignoreSearch: true });
    if (hit) return hit;
    throw new Error('offline');
  }
}

self.addEventListener('fetch', e => {
  const req = e.request, u = new URL(req.url);
  if (req.method !== 'GET' || u.origin !== location.origin || req.headers.has('range')) return;
  if (FIXO.test(u.pathname)) e.respondWith(cacheFirst(MEDIA, req).catch(() => fetch(req)));
  else if (MIDIA.test(u.pathname)) e.respondWith(staleWhileRevalidate(MEDIA, req, e).catch(() => fetch(req)));
  else if (/[?&]v=\d/.test(u.search) && /\.(?:js|css)$/.test(u.pathname)) e.respondWith(versioned(req).catch(() => caches.match(req, { ignoreSearch: true })));
  else e.respondWith(networkFirst(req));
});
