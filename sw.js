self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!="GET"||r.mode!="navigate")return;
 e.respondWith(fetch(r.url,{cache:"no-store"}).then(x=>{const c=x.clone();caches.open("gb").then(h=>h.put(r.url,c));return x}).catch(()=>caches.open("gb").then(h=>h.match(r.url))))});
