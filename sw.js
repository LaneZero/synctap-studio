/* SyncTap Studio V4.9: cache only static, same-origin files. Never cache audio or user content. */
'use strict';
const CACHE = 'synctap-shell-v4.9.0';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './favicon.svg', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('synctap-shell-') && key !== CACHE).map(key => caches.delete(key)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !['http:', 'https:'].includes(url.protocol)) return;
  const pathname = url.pathname;
  const eligible = ASSETS.some(path => new URL(path, self.registration.scope).pathname === pathname);
  if (!eligible) return;
  // Network first for app HTML to avoid leaving an obsolete app installed after updates.
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(response => {
      if (response.ok) { const copy = response.clone(); caches.open(CACHE).then(c => c.put('./', copy)).catch(() => {}); }
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
