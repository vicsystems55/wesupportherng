<template>
  <DashboardLayout>
    <div class="space-y-6">
      <section class="flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-primary to-secondary p-7 text-white shadow-xl shadow-primary/15 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.2em] text-white/70">Submissions</p>
          <h2 class="mt-2 font-display text-3xl font-black">Volunteer applications</h2>
          <p class="mt-2 max-w-2xl text-sm text-white/80">Review applications, contact volunteers, and manage their approval status.</p>
        </div>
        <button type="button" class="inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 px-5 py-3 text-sm font-black transition hover:bg-white/25 disabled:opacity-60" :disabled="isLoading" @click="loadApplications">
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
            <input v-model="search" type="search" placeholder="Search by name, email, phone or role..." class="h-12 w-full rounded-xl border border-black/10 bg-cream pl-11 pr-4 text-sm outline-none transition focus:border-secondary focus:bg-white" />
          </div>
          <select v-model="statusFilter" class="h-12 rounded-xl border border-black/10 bg-cream px-4 text-sm font-bold text-dark outline-none focus:border-secondary">
            <option value="">All statuses</option>
            <option v-for="status in statuses" :key="status" :value="status">{{ status }}</option>
          </select>
        </div>

        <div v-if="errorMessage" class="m-5 flex items-start justify-between gap-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
          <span>{{ errorMessage }}</span>
          <button type="button" class="shrink-0 font-black" @click="loadApplications">Try again</button>
        </div>

        <div v-if="isLoading && !applications.length" class="flex min-h-80 items-center justify-center gap-3 text-dark/50">
          <LoaderCircle class="h-6 w-6 animate-spin text-secondary" />
          <span class="text-sm font-bold">Loading applications...</span>
        </div>

        <div v-else-if="!applications.length" class="flex min-h-80 flex-col items-center justify-center px-6 text-center">
          <Inbox class="h-12 w-12 text-dark/20" />
          <h3 class="mt-4 text-xl font-black text-dark">No applications found</h3>
          <p class="mt-2 text-sm text-dark/50">Try changing the search or status filter.</p>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full min-w-[980px] text-left">
            <thead class="bg-cream text-xs font-black uppercase tracking-wider text-dark/45">
              <tr>
                <th class="px-5 py-4">Applicant</th>
                <th class="px-5 py-4">Contact</th>
                <th class="px-5 py-4">Role</th>
                <th class="px-5 py-4">Submitted</th>
                <th class="px-5 py-4">Status</th>
                <th class="px-5 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-black/5">
              <tr v-for="application in applications" :key="application.id" class="transition hover:bg-cream/50">
                <td class="px-5 py-4">
                  <p class="font-black text-dark">{{ application.fullName }}</p>
                  <p class="mt-1 text-xs text-dark/45">{{ application.gender || 'Not specified' }}</p>
                </td>
                <td class="px-5 py-4 text-sm text-dark/65">
                  <p>{{ application.email }}</p>
                  <p class="mt-1">{{ application.phone }}</p>
                </td>
                <td class="px-5 py-4">
                  <p class="text-sm font-bold text-dark">{{ application.position || 'Not specified' }}</p>
                  <p class="mt-1 max-w-52 truncate text-xs text-dark/45">{{ formatList(application.department) }}</p>
                </td>
                <td class="px-5 py-4 text-sm text-dark/55">{{ formatDate(application.createdAt) }}</td>
                <td class="px-5 py-4">
                  <select :value="normaliseStatus(application.status)" class="rounded-full border px-3 py-2 text-xs font-black outline-none" :class="statusClass(application.status)" :disabled="updatingId === application.id" @change="changeStatus(application, $event)">
                    <option v-for="status in statuses" :key="status" :value="status">{{ status }}</option>
                  </select>
                </td>
                <td class="px-5 py-4 text-right">
                  <button type="button" class="inline-flex items-center gap-2 rounded-xl border border-black/10 px-4 py-2 text-xs font-black text-dark transition hover:border-secondary/30 hover:text-secondary" @click="selectedApplication = application">
                    <Eye class="h-4 w-4" /> View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="applications.length" class="flex flex-col gap-3 border-t border-black/5 p-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p class="text-dark/50">Showing page {{ pagination.page }} of {{ pagination.totalPages }} · {{ pagination.total }} applications</p>
          <div class="flex gap-2">
            <button type="button" class="rounded-xl border border-black/10 px-4 py-2 font-bold disabled:cursor-not-allowed disabled:opacity-40" :disabled="pagination.page <= 1 || isLoading" @click="changePage(pagination.page - 1)">Previous</button>
            <button type="button" class="rounded-xl border border-black/10 px-4 py-2 font-bold disabled:cursor-not-allowed disabled:opacity-40" :disabled="pagination.page >= pagination.totalPages || isLoading" @click="changePage(pagination.page + 1)">Next</button>
          </div>
        </div>
      </section>
    </div>

    <div v-if="selectedApplication" class="fixed inset-0 z-[70] flex justify-end bg-dark/50" role="presentation" @click.self="selectedApplication = null">
      <aside class="h-full w-full max-w-2xl overflow-y-auto bg-white shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="application-title">
        <div class="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-black/5 bg-white/95 p-6 backdrop-blur">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">Application #{{ selectedApplication.id }}</p>
            <h2 id="application-title" class="mt-2 text-2xl font-black text-dark">{{ selectedApplication.fullName }}</h2>
          </div>
          <button type="button" aria-label="Close application" class="rounded-xl p-2 text-dark/50 transition hover:bg-cream hover:text-dark" @click="selectedApplication = null"><X class="h-5 w-5" /></button>
        </div>

        <div class="space-y-7 p-6">
          <DetailSection title="Personal information" :items="personalDetails" />
          <DetailSection title="Volunteer role" :items="roleDetails" />

          <section>
            <h3 class="text-sm font-black uppercase tracking-wider text-dark/45">Agreements</h3>
            <ul class="mt-3 space-y-2">
              <li v-for="agreement in selectedApplication.agreements || []" :key="agreement" class="rounded-xl bg-cream p-3 text-sm leading-relaxed text-dark/65">✓ {{ agreement }}</li>
            </ul>
          </section>

          <div class="rounded-2xl bg-soft-orange p-5">
            <label class="text-sm font-black text-dark" for="detail-status">Application status</label>
            <select id="detail-status" :value="normaliseStatus(selectedApplication.status)" class="mt-3 h-12 w-full rounded-xl border border-secondary/20 bg-white px-4 text-sm font-bold outline-none" :disabled="updatingId === selectedApplication.id" @change="changeStatus(selectedApplication, $event)">
              <option v-for="status in statuses" :key="status" :value="status">{{ status }}</option>
            </select>
          </div>
        </div>
      </aside>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { computed, defineComponent, h, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Eye, Inbox, LoaderCircle, RefreshCw, Search, X } from 'lucide-vue-next'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { getVolunteerApplications, updateVolunteerApplicationStatus } from '@/services/adminRecordsService'

const DetailSection = defineComponent({
  props: { title: String, items: Array },
  setup(props) {
    return () => h('section', [
      h('h3', { class: 'text-sm font-black uppercase tracking-wider text-dark/45' }, props.title),
      h('dl', { class: 'mt-3 grid gap-4 rounded-2xl border border-black/5 p-5 sm:grid-cols-2' },
        props.items.map((item) => h('div', { key: item.label }, [
          h('dt', { class: 'text-xs font-bold text-dark/40' }, item.label),
          h('dd', { class: 'mt-1 break-words text-sm font-semibold text-dark/75' }, item.value || 'Not provided'),
        ])),
      ),
    ])
  },
})

const statuses = ['Pending', 'Reviewing', 'Approved', 'Rejected']
const applications = ref([])
const selectedApplication = ref(null)
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
  { label: 'Total applications', value: summary.value.total ?? pagination.value.total, color: 'text-primary' },
  { label: 'Pending review', value: summary.value.pending ?? applications.value.filter((item) => normaliseStatus(item.status) === 'Pending').length, color: 'text-secondary' },
  { label: 'Approved', value: summary.value.approved ?? applications.value.filter((item) => normaliseStatus(item.status) === 'Approved').length, color: 'text-accent' },
])

const personalDetails = computed(() => selectedApplication.value ? [
  { label: 'Email', value: selectedApplication.value.email },
  { label: 'Phone', value: selectedApplication.value.phone },
  { label: 'Date of birth', value: formatDate(selectedApplication.value.dob) },
  { label: 'Gender', value: selectedApplication.value.gender },
  { label: 'Nationality', value: selectedApplication.value.nationality },
  { label: 'Occupation', value: selectedApplication.value.occupation },
  { label: 'Address', value: selectedApplication.value.address },
  { label: 'Emergency contact', value: [selectedApplication.value.emergencyName, selectedApplication.value.emergencyPhone].filter(Boolean).join(' · ') },
] : [])

const roleDetails = computed(() => selectedApplication.value ? [
  { label: 'Position', value: selectedApplication.value.position },
  { label: 'Departments', value: formatList(selectedApplication.value.department) },
  { label: 'Duration', value: selectedApplication.value.duration },
  { label: 'Arrangement', value: selectedApplication.value.arrangement },
  { label: 'Start date', value: formatDate(selectedApplication.value.startDate) },
  { label: 'Supervisor', value: selectedApplication.value.supervisor },
  { label: 'Media consent', value: selectedApplication.value.mediaConsent ? 'Yes' : 'No' },
  { label: 'Signature', value: selectedApplication.value.signature },
] : [])

const normaliseStatus = (status) => {
  const match = statuses.find((item) => item.toLowerCase() === String(status || '').toLowerCase())
  return match || 'Pending'
}

const statusClass = (status) => ({
  Pending: 'border-orange-200 bg-orange-50 text-orange-700',
  Reviewing: 'border-blue-200 bg-blue-50 text-blue-700',
  Approved: 'border-green-200 bg-green-50 text-green-700',
  Rejected: 'border-red-200 bg-red-50 text-red-700',
}[normaliseStatus(status)])

const formatDate = (value) => value ? new Intl.DateTimeFormat('en-NG', { dateStyle: 'medium' }).format(new Date(value)) : ''
const formatList = (value) => Array.isArray(value) ? value.join(', ') || 'Not specified' : value || 'Not specified'

const loadApplications = async () => {
  requestController?.abort()
  requestController = new AbortController()
  isLoading.value = true
  errorMessage.value = ''

  try {
    const result = await getVolunteerApplications({ page: pagination.value.page, limit: pagination.value.limit, search: search.value.trim(), status: statusFilter.value }, { signal: requestController.signal })
    applications.value = result.items
    pagination.value = result.pagination
    summary.value = result.summary
  } catch (error) {
    if (error?.name !== 'AbortError') errorMessage.value = error instanceof Error ? error.message : 'Unable to load volunteer applications.'
  } finally {
    isLoading.value = false
  }
}

const changeStatus = async (application, event) => {
  const previousStatus = normaliseStatus(application.status)
  const status = event.target.value
  updatingId.value = application.id
  errorMessage.value = ''

  try {
    await updateVolunteerApplicationStatus(application.id, status)
    application.status = status
  } catch (error) {
    event.target.value = previousStatus
    errorMessage.value = error instanceof Error ? error.message : 'Unable to update application status.'
  } finally {
    updatingId.value = null
  }
}

const changePage = (page) => {
  pagination.value.page = page
  loadApplications()
}

watch([search, statusFilter], () => {
  window.clearTimeout(searchTimer)
  pagination.value.page = 1
  searchTimer = window.setTimeout(loadApplications, 350)
})

onMounted(loadApplications)
onBeforeUnmount(() => {
  requestController?.abort()
  window.clearTimeout(searchTimer)
})
</script>
