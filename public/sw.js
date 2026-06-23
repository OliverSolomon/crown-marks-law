// Self-destroying service worker.
//
// This project intentionally ships NO service worker. However, a worker left
// behind by a previous app on this origin (e.g. an earlier localhost:3000
// project) stays registered, keeps requesting /sw.js, and can intercept build
// chunks — producing the `GET /sw.js 404` spam and `ChunkLoadError`.
//
// Serving this valid worker lets the browser's update check replace the stale
// registration, then this script clears caches, unregisters itself, and
// reloads any open tabs — removing the rogue worker for good.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      try {
        if (self.caches) {
          const keys = await caches.keys();
          await Promise.all(keys.map((key) => caches.delete(key)));
        }
        await self.registration.unregister();
        const clients = await self.clients.matchAll({ type: "window" });
        clients.forEach((client) => client.navigate(client.url));
      } catch {
        // best-effort cleanup; nothing to recover if it fails
      }
    })(),
  );
});
