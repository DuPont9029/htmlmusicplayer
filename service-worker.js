const CACHE_NAME = 'music-player-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  // Aggiungi qui altri file che desideri memorizzare nella cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});