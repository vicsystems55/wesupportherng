import { api } from './api'

const asNumber = (value) => {
  const number = Number(value)
  return Number.isFinite(number) ? number : 0
}

const unwrap = (response) => response?.data ?? response ?? {}

const withPercentages = (items) => {
  const total = items.reduce((sum, item) => sum + item.visitors, 0)

  return items.map((item) => ({
    ...item,
    percent: Math.min(
      100,
      Math.max(0, asNumber(item.percent ?? (total ? (item.visitors / total) * 100 : 0))),
    ),
  }))
}

const normalizeResponse = (response) => {
  const payload = unwrap(response)
  const overview = payload.overview ?? payload.summary ?? {}
  const changes = overview.changes ?? payload.changes ?? {}
  const realtime = payload.realtime ?? payload.realTime ?? {}

  const trafficSources = (payload.trafficSources ?? payload.sources ?? []).map(
    (source) => ({
      label: source.label ?? source.name ?? source.source ?? 'Unknown',
      visitors: asNumber(source.visitors ?? source.users ?? source.activeUsers),
      percent: source.percent ?? source.percentage,
    }),
  )

  const countries = (payload.countries ?? []).map((country) => ({
    code: String(country.code ?? country.countryCode ?? '--').slice(0, 3).toUpperCase(),
    name: country.name ?? country.country ?? 'Unknown',
    visitors: asNumber(country.visitors ?? country.users ?? country.activeUsers),
    percent: country.percent ?? country.percentage,
  }))

  const devices = (payload.devices ?? payload.deviceCategories ?? []).map(
    (device) => ({
      label: device.label ?? device.name ?? device.deviceCategory ?? 'Unknown',
      visitors: asNumber(device.visitors ?? device.users ?? device.activeUsers),
      percent: device.percent ?? device.percentage,
    }),
  )

  return {
    overview: {
      visitors: asNumber(overview.visitors ?? overview.activeUsers ?? overview.totalUsers),
      pageViews: asNumber(overview.pageViews ?? overview.screenPageViews ?? overview.views),
      sessions: asNumber(overview.sessions),
      bounceRate: asNumber(overview.bounceRate),
      changes: {
        visitors: asNumber(changes.visitors ?? changes.activeUsers),
        pageViews: asNumber(changes.pageViews ?? changes.screenPageViews),
        sessions: asNumber(changes.sessions),
        bounceRate: asNumber(changes.bounceRate),
      },
    },
    trend: (payload.trend ?? payload.visitorTrend ?? []).map((point) => ({
      date: point.date ?? '',
      label: point.label ?? point.date ?? '',
      visitors: asNumber(point.visitors ?? point.activeUsers ?? point.users ?? point.value),
    })),
    realtime: {
      activeVisitors: asNumber(realtime.activeVisitors ?? realtime.activeUsers),
      pages: (realtime.pages ?? realtime.topPages ?? []).map((page) => ({
        path: page.path ?? page.pagePath ?? page.title ?? 'Unknown page',
        visitors: asNumber(page.visitors ?? page.activeUsers ?? page.users),
      })),
    },
    trafficSources: withPercentages(trafficSources),
    countries: withPercentages(countries),
    devices: withPercentages(devices),
    topPages: (payload.topPages ?? payload.pages ?? []).map((page) => ({
      title: page.title ?? page.pageTitle ?? page.path ?? page.pagePath ?? 'Untitled page',
      path: page.path ?? page.pagePath ?? '/',
      views: asNumber(page.views ?? page.pageViews ?? page.screenPageViews),
      visitors: asNumber(page.visitors ?? page.activeUsers ?? page.users),
      averageTimeSeconds: asNumber(
        page.averageTimeSeconds ?? page.averageEngagementTime ?? page.averageSessionDuration,
      ),
      exitRate: asNumber(page.exitRate),
    })),
    generatedAt: payload.generatedAt ?? payload.updatedAt ?? null,
  }
}

export const getWebsiteAnalytics = async (period = 30, options = {}) => {
  const response = await api.get(
    `/api/admin/analytics?period=${encodeURIComponent(period)}`,
    options,
  )

  return normalizeResponse(response)
}

