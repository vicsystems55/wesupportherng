const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

let isInitialised = false

const isAnalyticsAvailable = () =>
  import.meta.env.PROD &&
  typeof window !== 'undefined' &&
  Boolean(measurementId)

const initialiseAnalytics = () => {
  if (!isAnalyticsAvailable() || isInitialised) {
    return isInitialised
  }

  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments)
    }

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    send_page_view: false,
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)

  isInitialised = true
  return true
}

export const trackPageView = (route) => {
  if (!initialiseAnalytics()) {
    return
  }

  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: route.fullPath,
  })
}
