const CACHE_NAME = "iqraa-pwa-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",

  "./iqraa/AthkarAlsabah.html",
  "./iqraa/AthkarAlmasaa.html",
  "./iqraa/WakingUpDua.html",
  "./iqraa/ClothesDua.html",
  "./iqraa/LeavingHouseDua.html",
  "./iqraa/EnteringPlacesDua.html",
  "./iqraa/AthanDua.html",
  "./iqraa/SleepDua.html",
  "./iqraa/NightmareDua.html",
  "./iqraa/FamilyAthkar.html",
  "./iqraa/HaramAthkar.html",
  "./iqraa/AthkarAlsalah.html",
  "./iqraa/DailySurah.html"
];

/* ===== Install ===== */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

/* ===== Activate ===== */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

/* ===== Fetch ===== */
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
