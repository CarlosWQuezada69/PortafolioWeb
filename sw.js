const CACHE = 'cq-portfolio-v1'
const ASSETS = [
  '/PortafolioWeb/',
  '/PortafolioWeb/index.html',
  '/PortafolioWeb/assets/css/styles.css',
  '/PortafolioWeb/assets/js/render.js',
  '/PortafolioWeb/assets/js/main.js',
  '/PortafolioWeb/data/content.json',
  '/PortafolioWeb/assets/img/perfil.webp',
  '/PortafolioWeb/assets/img/favicon.svg',
  '/PortafolioWeb/assets/img/icon-192.png',
  '/PortafolioWeb/assets/img/icon-512.png',
  '/PortafolioWeb/404.html'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  )
  event.waitUntil(clients.claim())
})

self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)

  // Only handle same-origin requests
  if (url.origin !== location.origin) return

  // HTML: network-first (always serve fresh HTML)
  if (request.mode === 'navigate' || request.headers.get('Accept').includes('text/html')) {
    event.respondWith(
      fetch(request).catch(() => caches.match('/PortafolioWeb/index.html'))
    )
    return
  }

  // Assets: cache-first (fast load, update on next install)
  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request).then(response => {
      const cloned = response.clone()
      if (response.ok && request.method === 'GET') {
        caches.open(CACHE).then(cache => cache.put(request, cloned))
      }
      return response
    }))
  )
})
