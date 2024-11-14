if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    registration.onupdatefound = () => {
      const newWorker = registration.installing
      if (newWorker) {
        newWorker.onstatechange = () => {
          if (newWorker.state === 'installed') {
            // Prüfen, ob ein Update vorhanden ist
            if (navigator.serviceWorker.controller) {
              // Neuer Inhalt verfügbar, Nutzer benachrichtigen
              const updateBanner = document.getElementById('update-banner')
              updateBanner?.removeAttribute('hidden')
              // window.location.reload()
            }
          }
        }
      }
    }
  })
}
