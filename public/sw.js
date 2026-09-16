// Keep this URL available for visitors who still have Gatsby's offline worker.
// Removing the file does not remove an already-installed service worker.
self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    await self.clients.claim();

    // Leave unrelated application storage and the visitor's theme untouched.
    const names = await caches.keys().catch(() => []);
    await Promise.allSettled(
      names.filter((name) => name.startsWith("gatsby-plugin-offline"))
        .map((name) => caches.delete(name)),
    );

    await self.registration.unregister();
    const windows = await self.clients.matchAll({ type: "window" });
    await Promise.allSettled(windows.map((client) => client.navigate(client.url)));
  })());
});

// No fetch handler: every request goes to the current website.
