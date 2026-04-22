const CACHE = "robotixacademy-v1";

const PRECACHE = [
  "/",
  "/programs",
  "/kits",
  "/about",
  "/gallery",
  "/contact",
  "/manifest.json",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

// Install — precache shell pages
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// Activate — remove old caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch strategy
self.addEventListener("fetch", (e) => {
  const { request } = e;
  const url = new URL(request.url);

  // Never intercept API calls, admin routes, or non-GET requests
  if (
    request.method !== "GET" ||
    url.pathname.startsWith("/api/") ||
    url.pathname.startsWith("/admin")
  ) {
    return;
  }

  // Cache-first for static assets (JS, CSS, images, fonts)
  if (/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff2?|ttf)$/.test(url.pathname)) {
    e.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((res) => {
            const clone = res.clone();
            caches.open(CACHE).then((c) => c.put(request, clone));
            return res;
          })
      )
    );
    return;
  }

  // Network-first for pages — fallback to cache when offline
  e.respondWith(
    fetch(request)
      .then((res) => {
        const clone = res.clone();
        caches.open(CACHE).then((c) => c.put(request, clone));
        return res;
      })
      .catch(() => caches.match(request))
  );
});
