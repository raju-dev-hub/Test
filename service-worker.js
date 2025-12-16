const CACHE_NAME = "gift-v1";
const butterflyImages = [
  "butterfly.png",
  "butterfly1.png",
  "butterfly2.png",
  "butterfly3.png",
  "butterfly4.png",
  "butterfly5.png"
];

const FILES = [
  "./",
  "./index.html",
  "./butterfly.png",
  "./orange.png",
  "./pink.png",
  "./pinkwhite.png",
  "./purple.png",
  "./white.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
