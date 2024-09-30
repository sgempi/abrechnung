import { precacheAndRoute } from 'workbox-precaching'

declare let self: ServiceWorkerGlobalScope
export {}

precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('install', (e: Event) => {
  // e.waitUntil(self.skipWaiting())
  console.log('triggerd activation')
  // self.skipWaiting()
})

self.addEventListener('activate', (e: Event) => {
  // e.waitUntil(self.clients.claim())
  console.log('triggerd installation')
})

self.addEventListener('fetch', (event: Event) => {
  // event.respondWith(
  //   caches.match(event.request).then((response) => {
  //     // Return cached response if available, otherwise fetch from network
  //     return response || fetch(event.request)
  //   })
  // )
  console.log('triggerd fetch')
})
