const CACHE = 'senotajs-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  // icons and local assets can be added here
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // Only cache same-origin requests; let CDN (leaflet/exifr) go to network
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then(res => res || fetch(e.request).then(resp => {
        const respClone = resp.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, respClone));
        return resp;
      }).catch(() => caches.match('./'))) // fallback to app shell
    );
  }
});
