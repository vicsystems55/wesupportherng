<template>
  <DefaultLayout>
    <main class="min-h-screen bg-cream">
      <section class="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary px-5 py-20 text-white">
        <div class="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div class="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />
        <div class="relative mx-auto max-w-7xl text-center">
          <p class="text-xs font-black uppercase tracking-[0.25em] text-white/70">Stories · News · Impact</p>
          <h1 class="mt-4 font-display text-4xl font-black sm:text-5xl md:text-6xl">Our Blog</h1>
          <p class="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Follow WeSupportHer’s programmes, advocacy, partnerships, events, and stories of change.
          </p>
        </div>
      </section>

      <div class="mx-auto max-w-7xl px-5 py-14">
        <section class="flex flex-col gap-4 rounded-3xl border border-black/5 bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div class="relative w-full lg:max-w-md">
            <Search class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-dark/35" />
            <input v-model="search" type="search" placeholder="Search stories..." class="h-12 w-full rounded-xl border border-black/10 bg-cream pl-12 pr-4 text-sm outline-none transition focus:border-secondary focus:bg-white" />
          </div>
          <div class="flex gap-2 overflow-x-auto pb-1" aria-label="Blog categories">
            <button type="button" class="shrink-0 rounded-full px-4 py-2.5 text-xs font-black transition" :class="!selectedCategory ? 'bg-secondary text-white' : 'bg-cream text-dark/60 hover:text-secondary'" @click="selectCategory('')">All posts</button>
            <button v-for="category in categories" :key="category.slug" type="button" class="shrink-0 rounded-full px-4 py-2.5 text-xs font-black transition" :class="selectedCategory === category.slug ? 'bg-secondary text-white' : 'bg-cream text-dark/60 hover:text-secondary'" @click="selectCategory(category.slug)">{{ category.name }}</button>
          </div>
        </section>

        <div v-if="errorMessage" class="mt-8 flex flex-col gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700 sm:flex-row sm:items-center sm:justify-between" role="alert">
          <span>{{ errorMessage }}</span>
          <button type="button" class="font-black hover:underline" @click="loadPosts">Try again</button>
        </div>

        <div v-if="isLoading && !posts.length" class="flex min-h-96 items-center justify-center gap-3 text-dark/45" role="status">
          <LoaderCircle class="h-7 w-7 animate-spin text-secondary" />
          <span class="font-bold">Loading stories…</span>
        </div>

        <template v-else-if="posts.length">
          <RouterLink v-if="featuredPost && pagination.page === 1 && !search && !selectedCategory" :to="`/our-blog/${featuredPost.slug}`" class="group mt-10 grid overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-black/5 lg:grid-cols-[1.15fr_0.85fr]">
            <div class="h-72 overflow-hidden bg-soft-purple lg:h-[430px]">
              <img :src="featuredPost.featuredImage || fallbackImage" :alt="featuredPost.featuredImageAlt" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div class="flex flex-col justify-center p-7 sm:p-10">
              <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">Featured story</p>
              <span v-if="featuredPost.category" class="mt-5 w-fit rounded-full bg-soft-orange px-3 py-2 text-xs font-black text-secondary">{{ featuredPost.category.name }}</span>
              <h2 class="mt-4 font-display text-3xl font-black leading-tight text-dark sm:text-4xl">{{ featuredPost.title }}</h2>
              <p class="mt-4 line-clamp-3 text-sm leading-relaxed text-dark/60">{{ featuredPost.excerpt }}</p>
              <div class="mt-7 flex items-center justify-between gap-4 text-sm">
                <span class="font-semibold text-dark/40">{{ formatDate(featuredPost.publishedAt) }}</span>
                <span class="inline-flex items-center gap-2 font-black text-secondary">Read story <ArrowRight class="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </div>
            </div>
          </RouterLink>

          <section class="mt-12">
            <div class="flex items-end justify-between gap-4">
              <div>
                <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">Latest updates</p>
                <h2 class="mt-2 font-display text-3xl font-black text-dark">Stories from our work</h2>
              </div>
              <span class="text-sm font-bold text-dark/40">{{ pagination.total }} posts</span>
            </div>

            <div class="mt-7 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              <article v-for="post in gridPosts" :key="post.id ?? post.slug" class="group flex overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <RouterLink :to="`/our-blog/${post.slug}`" class="flex w-full flex-col">
                  <div class="h-56 overflow-hidden bg-soft-purple">
                    <img :src="post.featuredImage || fallbackImage" :alt="post.featuredImageAlt" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div class="flex flex-1 flex-col p-6">
                    <div class="flex items-center justify-between gap-3 text-xs">
                      <span class="rounded-full bg-soft-orange px-3 py-1.5 font-black text-secondary">{{ post.category?.name || 'Our Blog' }}</span>
                      <time class="font-semibold text-dark/40">{{ formatDate(post.publishedAt) }}</time>
                    </div>
                    <h3 class="mt-4 text-2xl font-black leading-snug text-dark transition group-hover:text-secondary">{{ post.title }}</h3>
                    <p class="mt-3 line-clamp-3 text-sm leading-relaxed text-dark/60">{{ post.excerpt }}</p>
                    <span class="mt-6 inline-flex items-center gap-2 text-sm font-black text-secondary">Read more <ArrowRight class="h-4 w-4 transition group-hover:translate-x-1" /></span>
                  </div>
                </RouterLink>
              </article>
            </div>
          </section>

          <nav v-if="pagination.totalPages > 1" class="mt-10 flex items-center justify-center gap-3" aria-label="Blog pagination">
            <button type="button" class="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-black text-dark disabled:cursor-not-allowed disabled:opacity-40" :disabled="pagination.page <= 1 || isLoading" @click="changePage(pagination.page - 1)">Previous</button>
            <span class="text-sm font-bold text-dark/45">Page {{ pagination.page }} of {{ pagination.totalPages }}</span>
            <button type="button" class="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-black text-dark disabled:cursor-not-allowed disabled:opacity-40" :disabled="pagination.page >= pagination.totalPages || isLoading" @click="changePage(pagination.page + 1)">Next</button>
          </nav>
        </template>

        <section v-else class="mt-10 rounded-3xl border border-black/5 bg-white px-6 py-20 text-center shadow-sm">
          <Newspaper class="mx-auto h-14 w-14 text-dark/20" />
          <h2 class="mt-5 text-2xl font-black text-dark">No stories found</h2>
          <p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-dark/50">Try a different search or category. New WeSupportHer stories will appear here when published.</p>
        </section>
      </div>
    </main>
  </DefaultLayout>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import { ArrowRight, LoaderCircle, Newspaper, Search } from 'lucide-vue-next'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { getPostCategories, getPublishedPosts } from '@/services/blogService'

useSeoMeta({
  title: 'Our Blog | WeSupportHer',
  description: 'Read WeSupportHer news, programme updates, advocacy stories, events, and stories of impact.',
  ogTitle: 'Our Blog | WeSupportHer',
  ogDescription: 'Read WeSupportHer news, programme updates, advocacy stories, events, and stories of impact.',
  ogType: 'website',
})

const fallbackImage = '/logo.png'
const posts = ref([])
const categories = ref([])
const search = ref('')
const selectedCategory = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const pagination = ref({ page: 1, limit: 9, total: 0, totalPages: 1 })
let requestController = null
let searchTimer = null

const featuredPost = computed(() => posts.value.find((post) => post.isFeatured) ?? posts.value[0] ?? null)
const gridPosts = computed(() => featuredPost.value && pagination.value.page === 1 && !search.value && !selectedCategory.value
  ? posts.value.filter((post) => post !== featuredPost.value)
  : posts.value)

const formatDate = (value) => value
  ? new Intl.DateTimeFormat('en-NG', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(value))
  : 'Recently published'

const loadPosts = async () => {
  requestController?.abort()
  const controller = new AbortController()
  requestController = controller
  isLoading.value = true
  errorMessage.value = ''

  try {
    const result = await getPublishedPosts({
      page: pagination.value.page,
      limit: pagination.value.limit,
      search: search.value.trim(),
      category: selectedCategory.value,
    }, { signal: controller.signal })
    posts.value = result.items
    pagination.value = result.pagination
  } catch (error) {
    if (error?.name !== 'AbortError') {
      errorMessage.value = error instanceof Error ? error.message : 'Unable to load blog posts.'
    }
  } finally {
    if (requestController === controller) isLoading.value = false
  }
}

const loadCategories = async () => {
  try {
    categories.value = await getPostCategories()
  } catch {
    categories.value = []
  }
}

const selectCategory = (slug) => {
  selectedCategory.value = slug
  pagination.value.page = 1
}

const changePage = (page) => {
  pagination.value.page = page
  loadPosts()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

watch(selectedCategory, loadPosts)
watch(search, () => {
  window.clearTimeout(searchTimer)
  pagination.value.page = 1
  searchTimer = window.setTimeout(loadPosts, 350)
})

onMounted(() => {
  loadPosts()
  loadCategories()
})
onBeforeUnmount(() => {
  requestController?.abort()
  window.clearTimeout(searchTimer)
})
</script>
