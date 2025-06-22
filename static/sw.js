// Service Worker pro Křížovna PWA
const CACHE_NAME = 'krizovna-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/img/logo.svg',
  '/img/favicon.ico',
  // Přidejte další důležité soubory podle potřeby
];

// Instalace service workera
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Aktivace service workera
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptování fetch požadavků
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Vrátit cached verzi nebo fetch z network
        return response || fetch(event.request);
      }
    )
  );
}); 