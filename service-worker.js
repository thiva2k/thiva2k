const CACHE = 'bookverse-v1';
const ASSETS = [
  'index.html', 'explorer.html', 'progress.html', 'recommender.html', 'flow.html', 'feedback.html',
  'styles.css', 'manifest.webmanifest', 'js/main.js', 'js/data.js', 'js/utils.js'
];

self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS))));
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
