import { precacheAndRoute } from 'workbox-precaching'

declare let self: ServiceWorkerGlobalScope
export {}

const cacheName = 'abrechnung-cache'

precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('install', (e: ExtendableEvent) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('caching')
      return cache.addAll(['/user', 'main.ts'])
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (!response) {
        return fetch(event.request).then((networkResponse) => {
          return caches.open('my-cache').then((cache) => {
            cache.put(event.request, networkResponse.clone())
            return networkResponse
          })
        })
      } else {
        return response
      }
    })
  )
})
// self.addEventListener('activate', (e: Event) => {
//   // e.waitUntil(self.clients.claim())
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
