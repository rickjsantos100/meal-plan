const CACHE_NAME = 'healthy-recipes-v2';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './images/icon-192.png',
    './images/icon-512.png',
    './images/chicken-wrap.jpg',
    './images/airfryer-chicken-legs-couscous.jpg',
    './images/bolognese.jpg',
    './images/chicken-curry.jpg',
    './images/veggie-quiche.jpg',
    './images/bacalhau-bras-original.jpg',
    './images/fish-curry.jpg',
    './images/moqueca.jpg',
    './images/airfryer-roast-veggies.jpg',
    './images/yogurt-nuts.jpg',
    './images/hummus.jpg',
    './images/energy-bites.jpg',
    './images/apple-pb.jpg',
    './images/cottage-cheese.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cached => cached || fetch(event.request))
    );
});
