<template>
  <DashboardLayout>
    <section class="space-y-6">
      <header
        class="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-6 text-white shadow-lg sm:p-8"
      >
        <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Admin inbox
            </p>
            <h1 class="mt-2 font-display text-3xl font-black sm:text-4xl">
              Contact submissions
            </h1>
            <p class="mt-2 max-w-2xl text-sm text-white/80 sm:text-base">
              Review enquiries sent through the website and keep track of your responses.
            </p>
          </div>

          <button
            type="button"
            class="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-primary shadow-sm transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="isLoading"
            @click="loadSubmissions"
          >
            <svg
              class="h-4 w-4"
              :class="{ 'animate-spin': isLoading }"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M20 11a8.1 8.1 0 0 0-15.5-2M4 4v5h5" />
              <path d="M4 13a8.1 8.1 0 0 0 15.5 2M20 20v-5h-5" />
            </svg>
            Refresh
          </button>
        </div>
      </header>

      <div class="grid gap-4 sm:grid-cols-3">
        <article
          v-for="card in summaryCards"
          :key="card.label"
          class="rounded-2xl border border-dark/5 bg-white p-5 shadow-sm"
        >
          <p class="text-sm font-semibold text-dark/55">{{ card.label }}</p>
          <p class="mt-2 text-3xl font-black text-dark">{{ card.value }}</p>
        </article>
      </div>

      <div class="rounded-3xl border border-dark/5 bg-white shadow-sm">
        <div class="flex flex-col gap-3 border-b border-dark/10 p-4 sm:flex-row sm:p-5">
          <label class="relative flex-1">
            <span class="sr-only">Search messages</span>
            <svg
              class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-dark/40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              v-model="search"
              type="search"
              placeholder="Search by sender, email, subject or message"
              class="w-full rounded-xl border border-dark/15 bg-light/40 py-3 pl-12 pr-4 text-sm text-dark outline-none transition placeholder:text-dark/40 focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </label>

          <label>
            <span class="sr-only">Filter by status</span>
            <select
              v-model="statusFilter"
              class="w-full rounded-xl border border-dark/15 bg-white px-4 py-3 text-sm font-semibold text-dark outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 sm:w-44"
            >
              <option value="">All messages</option>
              <option v-for="status in statusOptions" :key="status.value" :value="status.value">
                {{ status.label }}
              </option>
            </select>
          </label>
        </div>

        <div v-if="errorMessage" class="m-5 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <span>{{ errorMessage }}</span>
            <button type="button" class="font-bold underline" @click="loadSubmissions">
              Try again
            </button>
          </div>
        </div>

        <div v-else-if="isLoading" class="space-y-3 p-5">
          <div v-for="item in 5" :key="item" class="h-20 animate-pulse rounded-xl bg-dark/5" />
        </div>

        <div v-else-if="submissions.length === 0" class="px-6 py-16 text-center">
          <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M4 4h16v16H4z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </div>
          <h2 class="mt-4 text-lg font-black text-dark">No messages found</h2>
          <p class="mt-1 text-sm text-dark/55">
            {{ search || statusFilter ? 'Try changing your filters.' : 'New contact messages will appear here.' }}
          </p>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full min-w-[850px] text-left">
            <thead class="bg-light/70 text-xs font-bold uppercase tracking-wider text-dark/50">
              <tr>
                <th class="px-5 py-4">Sender</th>
                <th class="px-5 py-4">Message</th>
                <th class="px-5 py-4">Received</th>
                <th class="px-5 py-4">Status</th>
                <th class="px-5 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-dark/5">
              <tr
                v-for="submission in submissions"
                :key="submission.id"
                class="cursor-pointer transition hover:bg-primary/[0.03]"
                :class="{ 'bg-primary/[0.025]': normalizeStatus(submission.status) === 'NEW' }"
                @click="openSubmission(submission)"
              >
                <td class="px-5 py-4">
                  <div class="flex items-center gap-3">
                    <span
                      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-black text-primary"
                    >
                      {{ initials(submission.fullName || submission.name) }}
                    </span>
                    <div class="min-w-0">
                      <div class="flex items-center gap-2">
                        <span
                          v-if="normalizeStatus(submission.status) === 'NEW'"
                          class="h-2 w-2 shrink-0 rounded-full bg-primary"
                          title="Unread"
                        />
                        <p class="max-w-[190px] truncate text-sm font-bold text-dark">
                          {{ submission.fullName || submission.name || 'Unknown sender' }}
                        </p>
                      </div>
                      <p class="max-w-[210px] truncate text-xs text-dark/50">
                        {{ submission.email || 'No email address' }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="max-w-sm px-5 py-4">
                  <p class="truncate text-sm font-bold text-dark">
                    {{ submission.subject || 'No subject' }}
                  </p>
                  <p class="mt-1 truncate text-xs text-dark/50">
                    {{ submission.message || 'No message content' }}
                  </p>
                </td>
                <td class="whitespace-nowrap px-5 py-4 text-sm text-dark/60">
                  {{ formatDate(submission.createdAt) }}
                </td>
                <td class="px-5 py-4" @click.stop>
                  <select
                    :value="normalizeStatus(submission.status)"
                    class="rounded-full border-0 px-3 py-1.5 text-xs font-bold outline-none ring-1 ring-inset"
                    :class="statusClass(submission.status)"
                    :disabled="updatingId === submission.id"
                    @change="changeStatus(submission, $event.target.value)"
                  >
                    <option v-for="status in statusOptions" :key="status.value" :value="status.value">
                      {{ status.label }}
                    </option>
                  </select>
                </td>
                <td class="px-5 py-4 text-right">
                  <button
                    type="button"
                    class="rounded-lg px-3 py-2 text-sm font-bold text-primary transition hover:bg-primary/10"
                    @click.stop="openSubmission(submission)"
                  >
                    Review
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <footer
          v-if="!isLoading && pagination.totalPages > 1"
          class="flex flex-col gap-3 border-t border-dark/10 px-5 py-4 text-sm sm:flex-row sm:items-center sm:justify-between"
        >
          <p class="text-dark/55">
            Page {{ pagination.page }} of {{ pagination.totalPages }} · {{ pagination.total }} messages
          </p>
          <div class="flex gap-2">
            <button
              type="button"
              class="rounded-lg border border-dark/15 px-4 py-2 font-bold text-dark transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
              :disabled="pagination.page <= 1"
              @click="goToPage(pagination.page - 1)"
            >
              Previous
            </button>
            <button
              type="button"
              class="rounded-lg border border-dark/15 px-4 py-2 font-bold text-dark transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
              :disabled="pagination.page >= pagination.totalPages"
              @click="goToPage(pagination.page + 1)"
            >
              Next
            </button>
          </div>
        </footer>
      </div>
    </section>

    <Teleport to="body">
      <div v-if="selectedSubmission" class="fixed inset-0 z-50 flex justify-end">
        <button
          type="button"
          class="absolute inset-0 bg-dark/45 backdrop-blur-[1px]"
          aria-label="Close message"
          @click="closeSubmission"
        />

        <aside
          class="relative z-10 flex h-full w-full max-w-2xl flex-col bg-white shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="message-title"
        >
          <header class="flex items-start justify-between gap-4 border-b border-dark/10 p-5 sm:p-6">
            <div class="min-w-0">
              <p class="text-xs font-bold uppercase tracking-wider text-primary">Contact message</p>
              <h2 id="message-title" class="mt-1 truncate font-display text-2xl font-black text-dark">
                {{ selectedSubmission.subject || 'No subject' }}
              </h2>
            </div>
            <button
              type="button"
              class="rounded-full p-2 text-dark/50 transition hover:bg-dark/5 hover:text-dark"
              aria-label="Close message"
              @click="closeSubmission"
            >
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </header>

          <div v-if="isLoadingDetail" class="space-y-4 p-6">
            <div v-for="item in 4" :key="item" class="h-14 animate-pulse rounded-xl bg-dark/5" />
          </div>

          <div v-else class="flex-1 overflow-y-auto p-5 sm:p-6">
            <div v-if="detailError" class="mb-5 rounded-xl bg-amber-50 p-3 text-sm text-amber-800">
              {{ detailError }} Showing the information available in the message list.
            </div>

            <div class="flex flex-col gap-4 rounded-2xl bg-light/60 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex min-w-0 items-center gap-3">
                <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-black text-primary">
                  {{ initials(selectedSubmission.fullName || selectedSubmission.name) }}
                </span>
                <div class="min-w-0">
                  <p class="truncate font-black text-dark">
                    {{ selectedSubmission.fullName || selectedSubmission.name || 'Unknown sender' }}
                  </p>
                  <a
                    v-if="selectedSubmission.email"
                    class="block truncate text-sm font-semibold text-primary hover:underline"
                    :href="`mailto:${selectedSubmission.email}`"
                  >
                    {{ selectedSubmission.email }}
                  </a>
                </div>
              </div>
              <p class="shrink-0 text-xs font-semibold text-dark/50">
                {{ formatDateTime(selectedSubmission.createdAt) }}
              </p>
            </div>

            <div class="mt-6">
              <p class="text-xs font-bold uppercase tracking-wider text-dark/45">Message</p>
              <p class="mt-3 whitespace-pre-wrap break-words text-[15px] leading-7 text-dark/80">
                {{ selectedSubmission.message || 'No message content was provided.' }}
              </p>
            </div>
          </div>

          <footer class="border-t border-dark/10 bg-white p-5 sm:p-6">
            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <label class="flex items-center gap-3 text-sm font-bold text-dark/60">
                Status
                <select
                  :value="normalizeStatus(selectedSubmission.status)"
                  class="rounded-lg border border-dark/15 bg-white px-3 py-2 text-sm font-bold text-dark outline-none focus:border-primary"
                  :disabled="updatingId === selectedSubmission.id"
                  @change="changeStatus(selectedSubmission, $event.target.value)"
                >
                  <option v-for="status in statusOptions" :key="status.value" :value="status.value">
                    {{ status.label }}
                  </option>
                </select>
              </label>

              <a
                v-if="selectedSubmission.email"
                :href="replyUrl(selectedSubmission)"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-primary/90"
                @click="markAsReplied"
              >
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m9 17-5-5 5-5" />
                  <path d="M4 12h10a6 6 0 0 1 6 6v1" />
                </svg>
                Reply by email
              </a>
            </div>
          </footer>
        </aside>
      </div>
    </Teleport>
  </DashboardLayout>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import {
  getContactSubmission,
  getContactSubmissions,
  updateContactSubmissionStatus,
} from '@/services/adminRecordsService'

const statusOptions = [
  { value: 'NEW', label: 'New' },
  { value: 'READ', label: 'Read' },
  { value: 'REPLIED', label: 'Replied' },
  { value: 'ARCHIVED', label: 'Archived' },
]

const submissions = ref([])
const summary = ref({})
const pagination = ref({ page: 1, limit: 10, total: 0, totalPages: 1 })
const search = ref('')
const statusFilter = ref('')
const isLoading = ref(false)
const isLoadingDetail = ref(false)
const errorMessage = ref('')
const detailError = ref('')
const selectedSubmission = ref(null)
const updatingId = ref(null)

let listController
let detailController
let searchTimer

const countStatusOnPage = (status) =>
  submissions.value.filter((item) => normalizeStatus(item.status) === status).length

const summaryCards = computed(() => [
  {
    label: 'Total messages',
    value: Number(summary.value.total ?? pagination.value.total ?? 0),
  },
  {
    label: 'New messages',
    value: Number(summary.value.new ?? summary.value.unread ?? countStatusOnPage('NEW')),
  },
  {
    label: 'Replied',
    value: Number(summary.value.replied ?? countStatusOnPage('REPLIED')),
  },
])

const normalizeStatus = (status) => {
  const value = String(status || 'NEW').toUpperCase()
  return statusOptions.some((option) => option.value === value) ? value : 'NEW'
}

const statusClass = (status) => {
  const classes = {
    NEW: 'bg-blue-50 text-blue-700 ring-blue-200',
    READ: 'bg-slate-100 text-slate-700 ring-slate-200',
    REPLIED: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    ARCHIVED: 'bg-amber-50 text-amber-700 ring-amber-200',
  }

  return classes[normalizeStatus(status)]
}

const initials = (name) => {
  const parts = String(name || '?').trim().split(/\s+/).filter(Boolean)
  return parts.slice(0, 2).map((part) => part[0]).join('').toUpperCase() || '?'
}

const parseDate = (value) => {
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : date
}

const formatDate = (value) => {
  const date = parseDate(value)
  if (!date) return 'Unknown'
  return new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

const formatDateTime = (value) => {
  const date = parseDate(value)
  if (!date) return 'Date unavailable'
  return new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(date)
}

const getErrorMessage = (error, fallback) =>
  error?.data?.message || error?.message || fallback

const loadSubmissions = async () => {
  listController?.abort()
  const controller = new AbortController()
  listController = controller
  isLoading.value = true
  errorMessage.value = ''

  try {
    const result = await getContactSubmissions(
      {
        page: pagination.value.page,
        limit: pagination.value.limit,
        search: search.value.trim(),
        status: statusFilter.value,
      },
      { signal: controller.signal },
    )

    submissions.value = result.items
    pagination.value = result.pagination
    summary.value = result.summary
  } catch (error) {
    if (error?.name !== 'AbortError') {
      errorMessage.value = getErrorMessage(error, 'Unable to load contact messages.')
    }
  } finally {
    if (listController === controller) isLoading.value = false
  }
}

const updateLocalStatus = (id, status) => {
  const item = submissions.value.find((submission) => submission.id === id)
  if (item) item.status = status
  if (selectedSubmission.value?.id === id) selectedSubmission.value.status = status
}

const changeStatus = async (submission, status, { silent = false } = {}) => {
  const nextStatus = normalizeStatus(status)
  const previousStatus = normalizeStatus(submission.status)
  if (nextStatus === previousStatus || updatingId.value === submission.id) return

  updatingId.value = submission.id
  updateLocalStatus(submission.id, nextStatus)

  try {
    await updateContactSubmissionStatus(submission.id, nextStatus)
  } catch (error) {
    updateLocalStatus(submission.id, previousStatus)
    if (!silent) {
      errorMessage.value = getErrorMessage(error, 'Unable to update the message status.')
    }
  } finally {
    updatingId.value = null
  }
}

const openSubmission = async (submission) => {
  selectedSubmission.value = { ...submission }
  detailError.value = ''

  if (normalizeStatus(submission.status) === 'NEW') {
    changeStatus(submission, 'READ', { silent: true })
  }

  detailController?.abort()
  const controller = new AbortController()
  detailController = controller
  isLoadingDetail.value = true

  try {
    const detail = await getContactSubmission(submission.id, {
      signal: controller.signal,
    })
    const currentStatus = selectedSubmission.value?.status
    selectedSubmission.value = {
      ...selectedSubmission.value,
      ...detail,
      status: currentStatus || detail?.status,
    }
  } catch (error) {
    if (error?.name !== 'AbortError') {
      detailError.value = getErrorMessage(error, 'The full message could not be loaded.')
    }
  } finally {
    if (detailController === controller) isLoadingDetail.value = false
  }
}

const closeSubmission = () => {
  detailController?.abort()
  selectedSubmission.value = null
  isLoadingDetail.value = false
  detailError.value = ''
}

const replyUrl = (submission) => {
  const subject = submission.subject ? `Re: ${submission.subject}` : 'Re: Your website enquiry'
  return `mailto:${submission.email}?subject=${encodeURIComponent(subject)}`
}

const markAsReplied = () => {
  if (selectedSubmission.value) {
    changeStatus(selectedSubmission.value, 'REPLIED', { silent: true })
  }
}

const goToPage = (page) => {
  pagination.value.page = page
  loadSubmissions()
}

const handleEscape = (event) => {
  if (event.key === 'Escape' && selectedSubmission.value) closeSubmission()
}

watch(statusFilter, () => {
  pagination.value.page = 1
  loadSubmissions()
})

watch(search, () => {
  clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    pagination.value.page = 1
    loadSubmissions()
  }, 350)
})

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
  loadSubmissions()
})

onBeforeUnmount(() => {
  clearTimeout(searchTimer)
  listController?.abort()
  detailController?.abort()
  window.removeEventListener('keydown', handleEscape)
})
</script>
