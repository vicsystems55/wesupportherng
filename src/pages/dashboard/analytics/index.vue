<template>
  <DashboardLayout>
    <div class="space-y-6">
      <section class="flex flex-col gap-5 rounded-3xl bg-gradient-to-r from-primary to-secondary p-7 text-white shadow-xl shadow-primary/15 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div class="flex flex-wrap items-center gap-3">
            <p class="text-xs font-black uppercase tracking-[0.2em] text-white/70">Website analytics</p>
            <span class="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider">
              <span class="h-2 w-2 rounded-full" :class="isLoading ? 'animate-pulse bg-white/60' : 'bg-soft-green'" />
              {{ isLoading ? 'Updating' : 'Live GA4 data' }}
            </span>
          </div>
          <h2 class="mt-3 font-display text-3xl font-black sm:text-4xl">Understand your audience</h2>
          <p class="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">Track website reach, visitor behaviour, acquisition channels, locations, devices, and popular content.</p>
        </div>

        <div class="flex shrink-0 items-end gap-3">
          <label class="block">
            <span class="mb-2 block text-xs font-black uppercase tracking-wider text-white/70">Date range</span>
            <select v-model="selectedPeriod" :disabled="isLoading" class="h-12 w-full rounded-xl border border-white/20 bg-white px-4 text-sm font-black text-dark outline-none disabled:cursor-wait disabled:opacity-70 lg:w-48">
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
            </select>
          </label>
          <button type="button" class="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/15 transition hover:bg-white/25 disabled:cursor-wait disabled:opacity-60" :disabled="isLoading" aria-label="Refresh analytics" @click="loadAnalytics">
            <RefreshCw class="h-5 w-5" :class="isLoading ? 'animate-spin' : ''" />
          </button>
        </div>
      </section>

      <div v-if="errorMessage" class="flex flex-col gap-3 rounded-2xl border border-secondary/20 bg-soft-orange p-4 text-sm text-dark sm:flex-row sm:items-center sm:justify-between" role="alert">
        <span class="flex items-center gap-2 font-semibold"><CircleAlert class="h-5 w-5 shrink-0 text-secondary" />{{ errorMessage }}</span>
        <button type="button" class="font-black text-secondary hover:underline" @click="loadAnalytics">Try again</button>
      </div>

      <div v-if="isLoading && !hasLoaded" class="flex min-h-72 items-center justify-center rounded-3xl border border-black/5 bg-white text-dark/55 shadow-sm" role="status">
        <LoaderCircle class="mr-3 h-6 w-6 animate-spin text-primary" /> Loading website analytics…
      </div>

      <template v-else>

      <section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Analytics overview">
        <article v-for="metric in metrics" :key="metric.label" class="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-sm font-bold text-dark/50">{{ metric.label }}</p>
              <p class="mt-3 text-3xl font-black text-dark">{{ metric.value }}</p>
              <p class="mt-2 text-xs font-bold" :class="metric.positive ? 'text-accent' : 'text-secondary'">{{ metric.change }} vs previous period</p>
            </div>
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" :class="metric.bg">
              <component :is="metric.icon" class="h-6 w-6" :class="metric.color" />
            </div>
          </div>
        </article>
      </section>

      <section class="grid gap-6 xl:grid-cols-[1.55fr_0.45fr]">
        <article class="min-w-0 rounded-3xl border border-black/5 bg-white p-5 shadow-sm sm:p-6">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">Traffic trend</p>
              <h3 class="mt-2 text-2xl font-black text-dark">Visitors over time</h3>
            </div>
            <div class="flex items-center gap-2 text-xs font-bold text-dark/45"><span class="h-2.5 w-2.5 rounded-full bg-primary" /> Unique visitors</div>
          </div>

          <div v-if="chartPoints.length" class="mt-7 w-full overflow-hidden">
            <svg class="h-auto w-full" viewBox="0 0 760 270" role="img" aria-labelledby="traffic-chart-title traffic-chart-desc">
              <title id="traffic-chart-title">Unique visitor trend</title>
              <desc id="traffic-chart-desc">Unique visitor counts returned by Google Analytics for the selected reporting period.</desc>
              <defs>
                <linearGradient id="visitor-area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="#7a1f8a" stop-opacity="0.28" />
                  <stop offset="100%" stop-color="#7a1f8a" stop-opacity="0.02" />
                </linearGradient>
              </defs>

              <g v-for="tick in chartTicks" :key="tick.value">
                <line x1="48" x2="735" :y1="tick.y" :y2="tick.y" stroke="currentColor" class="text-dark/10" />
                <text x="40" :y="tick.y + 4" text-anchor="end" fill="currentColor" class="text-[11px] text-dark/40">{{ compactNumber(tick.value) }}</text>
              </g>

              <path :d="areaPath" fill="url(#visitor-area)" />
              <polyline :points="linePoints" fill="none" stroke="#7a1f8a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />

              <g v-for="(point, index) in chartPoints" :key="point.label">
                <circle :cx="point.x" :cy="point.y" r="5" fill="white" stroke="#7a1f8a" stroke-width="3">
                  <title>{{ point.label }}: {{ point.value.toLocaleString() }} visitors</title>
                </circle>
                <text v-if="showChartLabel(index)" :x="point.x" y="258" text-anchor="middle" fill="currentColor" class="text-[11px] text-dark/40">{{ point.label }}</text>
              </g>
            </svg>
          </div>
          <p v-else class="mt-8 rounded-2xl bg-cream p-8 text-center text-sm font-semibold text-dark/45">No visitor trend data is available for this period.</p>
        </article>

        <article class="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-xs font-black uppercase tracking-[0.2em] text-accent">Right now</p>
              <h3 class="mt-2 text-xl font-black text-dark">Active visitors</h3>
            </div>
            <span class="inline-flex h-3 w-3 rounded-full bg-accent" aria-label="Live data indicator" />
          </div>
          <p class="mt-8 text-5xl font-black text-dark">{{ formatNumber(analytics.realtime.activeVisitors) }}</p>
          <p class="mt-2 text-sm font-semibold text-dark/45">Visitors in the last 30 minutes</p>

          <div class="mt-8 space-y-4">
            <div v-for="page in analytics.realtime.pages" :key="page.path" class="flex items-center justify-between gap-3">
              <p class="min-w-0 truncate text-sm font-bold text-dark/65">{{ page.path }}</p>
              <span class="rounded-full bg-soft-green px-3 py-1 text-xs font-black text-accent">{{ page.visitors }}</span>
            </div>
            <p v-if="!analytics.realtime.pages.length" class="text-sm font-semibold text-dark/40">No active page data right now.</p>
          </div>
        </article>
      </section>

      <section class="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <article class="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
          <p class="text-xs font-black uppercase tracking-[0.2em] text-primary">Acquisition</p>
          <h3 class="mt-2 text-xl font-black text-dark">Traffic sources</h3>
          <div class="mt-6 space-y-5">
            <div v-for="(source, index) in analytics.trafficSources" :key="source.label">
              <div class="mb-2 flex items-center justify-between gap-3 text-sm"><span class="font-bold text-dark/65">{{ source.label }}</span><span class="font-black text-dark">{{ formatPercent(source.percent) }}</span></div>
              <div class="h-2 overflow-hidden rounded-full bg-black/5"><div class="h-full rounded-full" :class="sourceColors[index % sourceColors.length]" :style="{ width: `${source.percent}%` }" /></div>
            </div>
            <p v-if="!analytics.trafficSources.length" class="text-sm font-semibold text-dark/40">No acquisition data for this period.</p>
          </div>
        </article>

        <article class="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
          <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">Geography</p>
          <h3 class="mt-2 text-xl font-black text-dark">Top countries</h3>
          <div class="mt-6 space-y-4">
            <div v-for="country in analytics.countries" :key="`${country.code}-${country.name}`" class="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3">
              <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-cream text-xs font-black text-dark/55">{{ country.code }}</span>
              <div class="min-w-0">
                <div class="flex justify-between gap-2 text-sm"><span class="truncate font-bold text-dark/65">{{ country.name }}</span><span class="font-black text-dark">{{ formatPercent(country.percent) }}</span></div>
                <div class="mt-2 h-1.5 overflow-hidden rounded-full bg-black/5"><div class="h-full rounded-full bg-secondary" :style="{ width: `${country.percent}%` }" /></div>
              </div>
              <span class="text-xs font-semibold text-dark/40">{{ formatNumber(country.visitors) }}</span>
            </div>
            <p v-if="!analytics.countries.length" class="text-sm font-semibold text-dark/40">No country data for this period.</p>
          </div>
        </article>

        <article class="rounded-3xl border border-black/5 bg-white p-6 shadow-sm lg:col-span-2 xl:col-span-1">
          <p class="text-xs font-black uppercase tracking-[0.2em] text-accent">Technology</p>
          <h3 class="mt-2 text-xl font-black text-dark">Devices</h3>
          <div class="mt-6 flex flex-col items-center gap-6 sm:flex-row xl:flex-col">
            <div class="relative h-44 w-44 shrink-0">
              <svg class="h-full w-full -rotate-90" viewBox="0 0 42 42" role="img" :aria-label="deviceAriaLabel">
                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#f1edf2" stroke-width="6" />
                <circle v-for="device in deviceSegments" :key="device.label" cx="21" cy="21" r="15.9" fill="none" :stroke="device.stroke" stroke-width="6" pathLength="100" :stroke-dasharray="`${device.value} ${100 - device.value}`" :stroke-dashoffset="device.offset" />
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center"><Smartphone class="h-6 w-6 text-primary" /><span class="mt-1 text-2xl font-black text-dark">{{ formatPercent(primaryDevice.percent) }}</span><span class="text-xs font-bold text-dark/40">{{ primaryDevice.label }}</span></div>
            </div>
            <div class="grid w-full gap-3">
              <div v-for="device in devices" :key="device.label" class="flex items-center justify-between gap-4 rounded-xl bg-cream p-3 text-sm">
                <span class="flex items-center gap-2 font-bold text-dark/65"><span class="h-2.5 w-2.5 rounded-full" :style="{ background: device.stroke }" />{{ device.label }}</span>
                <span class="font-black text-dark">{{ formatPercent(device.percent) }}</span>
              </div>
              <p v-if="!devices.length" class="text-center text-sm font-semibold text-dark/40">No device data for this period.</p>
            </div>
          </div>
        </article>
      </section>

      <section class="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
        <div class="border-b border-black/5 p-6">
          <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">Content performance</p>
          <h3 class="mt-2 text-xl font-black text-dark">Top pages</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full min-w-[720px] text-left">
            <thead class="bg-cream text-xs font-black uppercase tracking-wider text-dark/45"><tr><th class="px-6 py-4">Page</th><th class="px-6 py-4">Views</th><th class="px-6 py-4">Visitors</th><th class="px-6 py-4">Avg. time</th><th class="px-6 py-4">Exit rate</th></tr></thead>
            <tbody class="divide-y divide-black/5">
              <tr v-for="page in analytics.topPages" :key="page.path" class="hover:bg-cream/50"><td class="px-6 py-4"><p class="font-black text-dark">{{ page.title }}</p><p class="mt-1 text-xs text-dark/40">{{ page.path }}</p></td><td class="px-6 py-4 text-sm font-bold text-dark/65">{{ formatNumber(page.views) }}</td><td class="px-6 py-4 text-sm font-bold text-dark/65">{{ formatNumber(page.visitors) }}</td><td class="px-6 py-4 text-sm text-dark/55">{{ formatDuration(page.averageTimeSeconds) }}</td><td class="px-6 py-4 text-sm text-dark/55">{{ formatPercent(page.exitRate) }}</td></tr>
              <tr v-if="!analytics.topPages.length"><td colspan="5" class="px-6 py-10 text-center text-sm font-semibold text-dark/40">No page performance data for this period.</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <p v-if="lastUpdated" class="text-right text-xs font-semibold text-dark/35">Last updated {{ lastUpdated }}</p>
      </template>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import {
  Activity,
  CircleAlert,
  Eye,
  LoaderCircle,
  MousePointerClick,
  RefreshCw,
  Smartphone,
  Users,
} from 'lucide-vue-next'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { getWebsiteAnalytics } from '@/services/adminAnalyticsService'

const emptyAnalytics = () => ({
  overview: {
    visitors: 0,
    pageViews: 0,
    sessions: 0,
    bounceRate: 0,
    changes: { visitors: 0, pageViews: 0, sessions: 0, bounceRate: 0 },
  },
  trend: [],
  realtime: { activeVisitors: 0, pages: [] },
  trafficSources: [],
  countries: [],
  devices: [],
  topPages: [],
  generatedAt: null,
})

const selectedPeriod = ref('30')
const analytics = ref(emptyAnalytics())
const isLoading = ref(false)
const hasLoaded = ref(false)
const errorMessage = ref('')
let requestController = null

const formatNumber = (value) => Intl.NumberFormat('en-NG').format(Number(value) || 0)
const compactNumber = (value) => Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value)
const formatPercent = (value) => `${(Number(value) || 0).toFixed(1).replace('.0', '')}%`
const formatChange = (value) => `${value > 0 ? '+' : ''}${formatPercent(value)}`
const formatDuration = (seconds) => {
  const total = Math.max(0, Math.round(Number(seconds) || 0))
  const minutes = Math.floor(total / 60)
  const remainingSeconds = total % 60
  return minutes ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`
}

const lastUpdated = computed(() => {
  if (!analytics.value.generatedAt) return ''
  const date = new Date(analytics.value.generatedAt)
  return Number.isNaN(date.getTime()) ? '' : date.toLocaleString('en-NG')
})

const metrics = computed(() => {
  const { overview } = analytics.value
  return [
    { label: 'Unique visitors', value: formatNumber(overview.visitors), change: formatChange(overview.changes.visitors), positive: overview.changes.visitors >= 0, icon: Users, color: 'text-primary', bg: 'bg-soft-purple' },
    { label: 'Page views', value: formatNumber(overview.pageViews), change: formatChange(overview.changes.pageViews), positive: overview.changes.pageViews >= 0, icon: Eye, color: 'text-secondary', bg: 'bg-soft-orange' },
    { label: 'Sessions', value: formatNumber(overview.sessions), change: formatChange(overview.changes.sessions), positive: overview.changes.sessions >= 0, icon: MousePointerClick, color: 'text-accent', bg: 'bg-soft-green' },
    { label: 'Bounce rate', value: formatPercent(overview.bounceRate), change: formatChange(overview.changes.bounceRate), positive: overview.changes.bounceRate <= 0, icon: Activity, color: 'text-primary', bg: 'bg-soft-purple' },
  ]
})

const chartWidth = 760
const chartHeight = 270
const chartPadding = { left: 48, right: 25, top: 20, bottom: 35 }
const chartMax = computed(() => {
  const maximum = Math.max(...analytics.value.trend.map((point) => point.visitors), 1)
  const magnitude = 10 ** Math.floor(Math.log10(maximum))
  return Math.ceil(maximum / magnitude) * magnitude
})
const chartPoints = computed(() => analytics.value.trend.map((point, index, points) => ({
  value: point.visitors,
  label: point.label,
  x: points.length === 1
    ? (chartWidth + chartPadding.left - chartPadding.right) / 2
    : chartPadding.left + index * ((chartWidth - chartPadding.left - chartPadding.right) / (points.length - 1)),
  y: chartHeight - chartPadding.bottom - (point.visitors / chartMax.value) * (chartHeight - chartPadding.top - chartPadding.bottom),
})))
const linePoints = computed(() => chartPoints.value.map((point) => `${point.x},${point.y}`).join(' '))
const areaPath = computed(() => {
  if (!chartPoints.value.length) return ''
  return `M ${chartPoints.value[0].x} ${chartHeight - chartPadding.bottom} L ${linePoints.value.replaceAll(' ', ' L ')} L ${chartPoints.value.at(-1).x} ${chartHeight - chartPadding.bottom} Z`
})
const chartTicks = computed(() => [0, 0.25, 0.5, 0.75, 1].map((ratio) => ({ value: chartMax.value * ratio, y: chartHeight - chartPadding.bottom - ratio * (chartHeight - chartPadding.top - chartPadding.bottom) })))
const showChartLabel = (index) => index === 0 || index === chartPoints.value.length - 1 || index % Math.max(1, Math.ceil(chartPoints.value.length / 5)) === 0

const sourceColors = ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-dark/40']
const deviceColors = ['#7a1f8a', '#e65a12', '#6a9f32', '#6b7280']
const devices = computed(() => analytics.value.devices.map((device, index) => ({
  ...device,
  stroke: deviceColors[index % deviceColors.length],
})))
const deviceSegments = computed(() => {
  let used = 0
  return devices.value.map((device) => {
    const segment = { ...device, value: device.percent, offset: -used }
    used += device.percent
    return segment
  })
})
const primaryDevice = computed(() => devices.value[0] ?? { label: 'No data', percent: 0 })
const deviceAriaLabel = computed(() => devices.value.length
  ? `Device distribution: ${devices.value.map((device) => `${device.label} ${formatPercent(device.percent)}`).join(', ')}`
  : 'No device distribution data available')

const loadAnalytics = async () => {
  requestController?.abort()
  const controller = new AbortController()
  requestController = controller
  isLoading.value = true
  errorMessage.value = ''

  try {
    analytics.value = await getWebsiteAnalytics(selectedPeriod.value, {
      signal: controller.signal,
    })
    hasLoaded.value = true
  } catch (error) {
    if (error?.name !== 'AbortError') {
      errorMessage.value = error?.message || 'Unable to load analytics. Please try again.'
    }
  } finally {
    if (requestController === controller) {
      isLoading.value = false
    }
  }
}

watch(selectedPeriod, loadAnalytics)
onMounted(loadAnalytics)
onBeforeUnmount(() => requestController?.abort())
</script>
