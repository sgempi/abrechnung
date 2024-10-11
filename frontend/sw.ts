import { precacheAndRoute } from 'workbox-precaching'

declare let self: ServiceWorkerGlobalScope
export {}

const cacheName = 'abrechnung-cache'

precacheAndRoute([{"revision":"d5daea810dc3fb67c68f9276a94a8f54","url":"assets/index-DVtBfwwi.js"},{"revision":"4f2d65c1d8170a7f378f4d15e7af0264","url":"assets/index-qHrIqlk0.css"},{"revision":"c818467c827154f0dd0eab9273b9b0c7","url":"index.html"}])

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName).then((cache) => cache.add('user'))
      // Setting {cache: 'reload'} in the new request will ensure that the response
      // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
      // await cache.put(new Request('/backend/settings'), await fetch('/backend/settings'))
      console.log('installevent triggerd')
    })()
  )
})
self.addEventListener('activate', (event) => {
  console.log('Claiming control')

  return self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request).then((networkResponse) => {
        return caches.open(cacheName).then((cache) => {
          // cache.put(event.request, networkResponse.clone())
          return networkResponse
        })
      })
    })
  )
})

// self.addEventListener('activate', (e: any) => {
//   e.waitUntil(self.clients.claim())
//   console.log('triggerd installation')
// })

// self.addEventListener('fetch', (event: Event) => {
// event.respondWith(
//   caches.match(event.request).then((response) => {
//     // Return cached response if available, otherwise fetch from network
//     return response || fetch(event.request)
//   })
// )
//   console.log('triggerd fetch')
// })

// self.addEventListener('fetch', (event) => {
//   if (event.request.url.includes('/user')) {
//     console.log('Fetching User - Event Listener')
//     event.respondWith(
//       caches.open('entryPoint').then((cache) => {
//         return cache.match(event.request).then((response) => {
//           return (
//             response ||
//             fetch(event.request).then((networkResponse) => {
//               cache.put(event.request, networkResponse.clone())
//               return networkResponse
//             })
//           )
//         })
//       })
//     )
//   }
// })

// self.addEventListener('clients.openWindow', (event) => {
//   caches.open('entryPoint').then((cache) => {
//     cache.match(new Request('/user')).then((response) => {
//       return response || fetch(new Request('/user'))
//     })
//   })
// })
