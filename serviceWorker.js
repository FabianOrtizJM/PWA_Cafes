const staticDevCoUee = "dev-coUee-site-v1"
const assets = [
 "/",
 "/index.html",
 "/css/style.css",
 "/js/app.js",
 "/images/coUee1.jpg",
 "/images/coUee2.jpg",
 "/images/coUee3.jpg",
 "/images/coUee4.jpg",
 "/images/coUee5.jpg",
 "/images/coUee6.jpg",
 "/images/coUee7.jpg",
 "/images/coUee8.jpg",
 "/images/coUee9.jpg",
]
self.addEventListener("install", installEvent => {
 installEvent.waitUntil(
 caches.open(staticDevCoUee).then(cache => {
 cache.addAll(assets)
 })
 )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
    return res || fetch(fetchEvent.request)
    })
    )
   })