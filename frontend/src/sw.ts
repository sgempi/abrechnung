import { precacheAndRoute } from 'workbox-precaching'

declare let self: ServiceWorkerGlobalScope
export {}

precacheAndRoute([{"revision":"31345a8a7005df3c31cffb6d8ff884b3","url":"assets/index-Da2g3eYO.js"},{"revision":"4f2d65c1d8170a7f378f4d15e7af0264","url":"assets/index-qHrIqlk0.css"},{"revision":"a4742e6468d7d8b2fa5fc20a74e7d85d","url":"index.html"}])

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
