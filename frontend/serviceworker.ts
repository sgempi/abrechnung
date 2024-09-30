import { precacheAndRoute } from 'workbox-precaching'

declare var self: ServiceWorkerGlobalScope
export {}

precacheAndRoute(self.__WB_MANIFEST)
