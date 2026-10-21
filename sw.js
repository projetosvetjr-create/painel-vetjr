// Service worker do painel VetJr: guarda a "casca" do app pra abrir rápido e instalar.
// Os dados NUNCA ficam no cache — sempre vêm do servidor (Google Sheets).
var VERSAO = 'vetjr-v1';
var CASCA = ['./', './index.html', './config.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSAO).then(function (c) { return c.addAll(CASCA); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== VERSAO; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
// arquivos do próprio app: tenta a internet primeiro (pra pegar atualização) e cai pro guardado se estiver sem rede
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // servidor do Google, fontes e bibliotecas: o navegador cuida
  e.respondWith(
    fetch(req).then(function (res) {
      if (res && res.ok) { var cp = res.clone(); caches.open(VERSAO).then(function (c) { c.put(req, cp); }); }
      return res;
    }).catch(function () { return caches.match(req).then(function (r) { return r || caches.match('./index.html'); }); })
  );
});
