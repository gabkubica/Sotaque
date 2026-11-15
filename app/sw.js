/* Sotaque · guarda os arquivos do app no aparelho para abrir sem internet.
   Com internet, busca sempre a versão nova primeiro (assim as atualizações aparecem na hora);
   sem internet, usa a cópia guardada. */
const CACHE = 'sotaque-v15';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(c => fetch(e.request).then(r => { if (r && r.ok) c.put(e.request, r.clone()); return r; })
    .catch(() => c.match(e.request, { ignoreSearch: true }))));
});
