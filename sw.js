const CACHE_NAME = 'my-cache-v1'; const CACHE_URLS = [ './', './index.html', './stylesheets/stylesheet.css', ]; self.addEventListener('install', (event) => { console.log('[Service Worker] Installing'); event.waitUntil( caches.open(CACHE_NAME).then((cache) => { console.log('[Service Worker] Caching resources'); return cache.addAll(CACHE_URLS); }) ); }); self.addEventListener('activate', (event) => { console.log('[Service Worker] Activating'); event.waitUntil( caches.keys().then((cacheNames) => { return Promise.all( cacheNames.map((cache) => { if (cache !== CACHE_NAME) { console.log(`[Service Worker] Deleting old cache: ${cache}`); return caches.delete(cache); } }) ); }) ); });
self.addEventListener('fetch', (event) => { console.log(`[Service Worker] Fetching: ${event.request.url}`); event.respondWith( caches.match(event.request).then((cachedResponse) => { return cachedResponse || fetch(event.request).then((networkResponse) => { return caches.open(CACHE_NAME).then((cache) => { cache.put(event.request, networkResponse.clone()); return networkResponse; }); }); }) ); });
