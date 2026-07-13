<template>
  <DashboardLayout>
    <div class="space-y-6">
      <section class="flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-primary to-secondary p-7 text-white shadow-xl shadow-primary/15 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.2em] text-white/70">Newsletter</p>
          <h2 class="mt-2 font-display text-3xl font-black">Subscribers</h2>
          <p class="mt-2 max-w-2xl text-sm text-white/80">View the mailing audience and manage each subscriber’s status.</p>
        </div>
        <button type="button" class="inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 px-5 py-3 text-sm font-black transition hover:bg-white/25 disabled:opacity-60" :disabled="isLoading" @click="loadSubscribers">
          <RefreshCw class="h-4 w-4" :class="{ 'animate-spin': isLoading }" />
          Refresh
        </button>
      </section>

      <section class="grid gap-4 sm:grid-cols-3">
        <article v-for="card in summaryCards" :key="card.label" class="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
          <p class="text-sm font-bold text-dark/50">{{ card.label }}</p>
          <p class="mt-2 text-3xl font-black" :class="card.color">{{ card.value }}</p>
        </article>
      </section>

      <section class="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
        <div class="flex flex-col gap-4 border-b border-black/5 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div class="relative w-full max-w-xl">
            <Search class="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-dark/35" />
            <input v-model="search" type="search" placeholder="Search by name or email..." class="h-12 w-full rounded-xl border border-black/10 bg-cream pl-11 pr-4 text-sm outline-none transition focus:border-secondary focus:bg-white" />
          </div>
          <select v-model="statusFilter" class="h-12 rounded-xl border border-black/10 bg-cream px-4 text-sm font-bold text-dark outline-none focus:border-secondary">
            <option value="">All statuses</option>
            <option value="ACTIVE">Active</option>
            <option value="UNSUBSCRIBED">Unsubscribed</option>
          </select>
        </div>

        <div v-if="errorMessage" class="m-5 flex items-start justify-between gap-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
          <span>{{ errorMessage }}</span>
          <button type="button" class="shrink-0 font-black" @click="loadSubscribers">Try again</button>
        </div>

        <div v-if="isLoading && !subscribers.length" class="flex min-h-80 items-center justify-center gap-3 text-dark/50">
          <LoaderCircle class="h-6 w-6 animate-spin text-secondary" />
          <span class="text-sm font-bold">Loading subscribers...</span>
        </div>

        <div v-else-if="!subscribers.length" class="flex min-h-80 flex-col items-center justify-center px-6 text-center">
          <MailX class="h-12 w-12 text-dark/20" />
          <h3 class="mt-4 text-xl font-black text-dark">No subscribers found</h3>
          <p class="mt-2 text-sm text-dark/50">New newsletter sign-ups will appear here.</p>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full min-w-[760px] text-left">
            <thead class="bg-cream text-xs font-black uppercase tracking-wider text-dark/45">
              <tr>
                <th class="px-5 py-4">Subscriber</th>
                <th class="px-5 py-4">Email address</th>
                <th class="px-5 py-4">Subscribed</th>
                <th class="px-5 py-4">Status</th>
                <th class="px-5 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-black/5">
              <tr v-for="subscriber in subscribers" :key="subscriber.id" class="transition hover:bg-cream/50">
                <td class="px-5 py-4">
                  <div class="flex items-center gap-3">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft-purple font-black text-primary">{{ initials(subscriber) }}</div>
                    <p class="font-black text-dark">{{ subscriber.fullName || 'Newsletter subscriber' }}</p>
                  </div>
                </td>
                <td class="px-5 py-4"><a :href="`mailto:${subscriber.email}`" class="text-sm font-semibold text-dark/65 transition hover:text-secondary">{{ subscriber.email }}</a></td>
                <td class="px-5 py-4 text-sm text-dark/55">{{ formatDate(subscriber.subscribedAt || subscriber.createdAt) }}</td>
                <td class="px-5 py-4">
                  <span class="inline-flex rounded-full px-3 py-2 text-xs font-black" :class="normaliseStatus(subscriber.status) === 'ACTIVE' ? 'bg-green-50 text-green-700' : 'bg-neutral-100 text-neutral-600'">{{ statusLabel(subscriber.status) }}</span>
                </td>
                <td class="px-5 py-4 text-right">
                  <button type="button" class="rounded-xl border px-4 py-2 text-xs font-black transition disabled:cursor-not-allowed disabled:opacity-50" :class="normaliseStatus(subscriber.status) === 'ACTIVE' ? 'border-red-200 text-red-600 hover:bg-red-50' : 'border-green-200 text-green-700 hover:bg-green-50'" :disabled="updatingId === subscriber.id" @click="toggleStatus(subscriber)">
                    {{ updatingId === subscriber.id ? 'Updating...' : normaliseStatus(subscriber.status) === 'ACTIVE' ? 'Unsubscribe' : 'Reactivate' }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="subscribers.length" class="flex flex-col gap-3 border-t border-black/5 p-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p class="text-dark/50">Showing page {{ pagination.page }} of {{ pagination.totalPages }} · {{ pagination.total }} subscribers</p>
          <div class="flex gap-2">
            <button type="button" class="rounded-xl border border-black/10 px-4 py-2 font-bold disabled:cursor-not-allowed disabled:opacity-40" :disabled="pagination.page <= 1 || isLoading" @click="changePage(pagination.page - 1)">Previous</button>
            <button type="button" class="rounded-xl border border-black/10 px-4 py-2 font-bold disabled:cursor-not-allowed disabled:opacity-40" :disabled="pagination.page >= pagination.totalPages || isLoading" @click="changePage(pagination.page + 1)">Next</button>
          </div>
        </div>
      </section>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { LoaderCircle, MailX, RefreshCw, Search } from 'lucide-vue-next'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { getNewsletterSubscribers, updateNewsletterSubscriberStatus } from '@/services/adminRecordsService'

const subscribers = ref([])
const search = ref('')
const statusFilter = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const updatingId = ref(null)
const pagination = ref({ page: 1, limit: 10, total: 0, totalPages: 1 })
const summary = ref({})
let requestController = null
let searchTimer = null

const summaryCards = computed(() => [
  { label: 'Total subscribers', value: summary.value.total ?? pagination.value.total, color: 'text-primary' },
  { label: 'Active', value: summary.value.active ?? subscribers.value.filter((item) => normaliseStatus(item.status) === 'ACTIVE').length, color: 'text-accent' },
  { label: 'Unsubscribed', value: summary.value.unsubscribed ?? subscribers.value.filter((item) => normaliseStatus(item.status) === 'UNSUBSCRIBED').length, color: 'text-dark/50' },
])

const normaliseStatus = (status) => String(status || 'ACTIVE').toUpperCase() === 'UNSUBSCRIBED' ? 'UNSUBSCRIBED' : 'ACTIVE'
const statusLabel = (status) => normaliseStatus(status) === 'ACTIVE' ? 'Active' : 'Unsubscribed'
const formatDate = (value) => value ? new Intl.DateTimeFormat('en-NG', { dateStyle: 'medium' }).format(new Date(value)) : 'Not available'
const initials = (subscriber) => (subscriber.fullName || subscriber.email || 'S').split(/\s|@/).filter(Boolean).slice(0, 2).map((part) => part[0].toUpperCase()).join('')

const loadSubscribers = async () => {
  requestController?.abort()
  requestController = new AbortController()
  isLoading.value = true
  errorMessage.value = ''

  try {
    const result = await getNewsletterSubscribers({ page: pagination.value.page, limit: pagination.value.limit, search: search.value.trim(), status: statusFilter.value }, { signal: requestController.signal })
    subscribers.value = result.items
    pagination.value = result.pagination
    summary.value = result.summary
  } catch (error) {
    if (error?.name !== 'AbortError') errorMessage.value = error instanceof Error ? error.message : 'Unable to load newsletter subscribers.'
  } finally {
    isLoading.value = false
  }
}

const toggleStatus = async (subscriber) => {
  const status = normaliseStatus(subscriber.status) === 'ACTIVE' ? 'UNSUBSCRIBED' : 'ACTIVE'
  updatingId.value = subscriber.id
  errorMessage.value = ''

  try {
    await updateNewsletterSubscriberStatus(subscriber.id, status)
    subscriber.status = status
    if (status === 'UNSUBSCRIBED') subscriber.unsubscribedAt = new Date().toISOString()
    else subscriber.unsubscribedAt = null
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Unable to update subscriber status.'
  } finally {
    updatingId.value = null
  }
}

const changePage = (page) => {
  pagination.value.page = page
  loadSubscribers()
}

watch([search, statusFilter], () => {
  window.clearTimeout(searchTimer)
  pagination.value.page = 1
  searchTimer = window.setTimeout(loadSubscribers, 350)
})

onMounted(loadSubscribers)
onBeforeUnmount(() => {
  requestController?.abort()
  window.clearTimeout(searchTimer)
})
</script>
