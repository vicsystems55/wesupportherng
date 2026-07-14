<template>
  <DefaultLayout>
    <main class="min-h-screen bg-cream">
      <div v-if="isLoading" class="flex min-h-[65vh] items-center justify-center gap-3 text-dark/45" role="status">
        <LoaderCircle class="h-7 w-7 animate-spin text-secondary" />
        <span class="font-bold">Loading story…</span>
      </div>

      <section v-else-if="errorMessage" class="mx-auto max-w-3xl px-5 py-24 text-center">
        <FileQuestion class="mx-auto h-16 w-16 text-dark/20" />
        <h1 class="mt-5 font-display text-4xl font-black text-dark">Story unavailable</h1>
        <p class="mt-3 text-dark/55">{{ errorMessage }}</p>
        <RouterLink to="/our-blog" class="mt-7 inline-flex rounded-xl bg-secondary px-6 py-3 text-sm font-black text-white">Return to Our Blog</RouterLink>
      </section>

      <template v-else-if="post">
        <section class="relative overflow-hidden bg-gradient-to-br from-primary to-secondary px-5 py-16 text-white sm:py-20">
          <div class="absolute -right-28 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div class="relative mx-auto max-w-4xl text-center">
            <RouterLink to="/our-blog" class="inline-flex items-center gap-2 text-sm font-black text-white/70 transition hover:text-white"><ArrowLeft class="h-4 w-4" /> Our Blog</RouterLink>
            <p v-if="post.category" class="mt-7 text-xs font-black uppercase tracking-[0.2em] text-white/70">{{ post.category.name }}</p>
            <h1 class="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl md:text-6xl">{{ post.title }}</h1>
            <p v-if="post.excerpt" class="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">{{ post.excerpt }}</p>
            <div class="mt-7 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-white/65">
              <span class="inline-flex items-center gap-2"><CalendarDays class="h-4 w-4" /> {{ formatDate(post.publishedAt) }}</span>
              <span v-if="readingTime" class="inline-flex items-center gap-2"><Clock3 class="h-4 w-4" /> {{ readingTime }} min read</span>
            </div>
          </div>
        </section>

        <article class="mx-auto max-w-5xl px-5 pb-16">
          <div class="relative -mt-1 overflow-hidden rounded-b-[2rem] bg-soft-purple shadow-xl shadow-black/5 sm:-mt-8 sm:rounded-[2rem]">
            <img :src="post.featuredImage || fallbackImage" :alt="post.featuredImageAlt" class="max-h-[580px] w-full object-cover" />
          </div>

          <div class="mt-10 grid gap-8 lg:grid-cols-[1fr_8rem]">
            <div class="rounded-[2rem] bg-white p-6 shadow-sm sm:p-10">
              <div class="blog-content text-dark/75" v-html="post.content" />
            </div>

            <aside class="order-first lg:order-last">
              <div class="flex items-center gap-2 lg:sticky lg:top-28 lg:flex-col">
                <span class="mr-2 text-xs font-black uppercase tracking-wider text-dark/40 lg:mb-2 lg:mr-0">Share</span>
                <a :href="facebookShareUrl" target="_blank" rel="noopener noreferrer" class="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-sm transition hover:-translate-y-1" aria-label="Share on Facebook"><Facebook class="h-5 w-5" /></a>
                <a :href="whatsappShareUrl" target="_blank" rel="noopener noreferrer" class="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-accent shadow-sm transition hover:-translate-y-1" aria-label="Share on WhatsApp"><MessageCircle class="h-5 w-5" /></a>
                <button type="button" class="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-secondary shadow-sm transition hover:-translate-y-1" :aria-label="copied ? 'Link copied' : 'Copy article link'" @click="copyLink"><Check v-if="copied" class="h-5 w-5" /><Link2 v-else class="h-5 w-5" /></button>
              </div>
            </aside>
          </div>
        </article>

        <section v-if="relatedPosts.length" class="border-t border-black/5 bg-white px-5 py-16">
          <div class="mx-auto max-w-7xl">
            <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">Keep reading</p>
            <h2 class="mt-2 font-display text-3xl font-black text-dark">Related stories</h2>
            <div class="mt-7 grid gap-6 md:grid-cols-3">
              <RouterLink v-for="item in relatedPosts" :key="item.id ?? item.slug" :to="`/our-blog/${item.slug}`" class="group overflow-hidden rounded-3xl border border-black/5 bg-cream">
                <img :src="item.featuredImage || fallbackImage" :alt="item.featuredImageAlt" class="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div class="p-5"><p class="text-xs font-black text-secondary">{{ item.category?.name || 'Our Blog' }}</p><h3 class="mt-2 text-xl font-black leading-snug text-dark group-hover:text-secondary">{{ item.title }}</h3></div>
              </RouterLink>
            </div>
          </div>
        </section>
      </template>
    </main>
  </DefaultLayout>
</template>

<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useSeoMeta } from '@unhead/vue'
import { ArrowLeft, CalendarDays, Check, Clock3, Facebook, FileQuestion, Link2, LoaderCircle, MessageCircle } from 'lucide-vue-next'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { getPublishedPost, getPublishedPosts } from '@/services/blogService'

const route = useRoute()
const siteUrl = 'https://www.wesupporther.org'
const fallbackImage = '/logo.png'
const post = ref(null)
const relatedPosts = ref([])
const isLoading = ref(true)
const errorMessage = ref('')
const copied = ref(false)
let requestController = null
let copiedTimer = null

const currentUrl = computed(() => `${siteUrl}/our-blog/${route.params.slug}`)
const readingTime = computed(() => {
  if (!post.value?.content) return 0
  const words = post.value.content.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 220))
})
const whatsappShareUrl = computed(() => `https://wa.me/?text=${encodeURIComponent(`${post.value?.title ?? ''} ${currentUrl.value}`)}`)
const facebookShareUrl = computed(() => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`)

useSeoMeta({
  title: computed(() => post.value?.seoTitle || (post.value ? `${post.value.title} | WeSupportHer` : 'Our Blog | WeSupportHer')),
  description: computed(() => post.value?.seoDescription || post.value?.excerpt || 'Read the latest stories from WeSupportHer.'),
  ogTitle: computed(() => post.value?.seoTitle || post.value?.title || 'Our Blog | WeSupportHer'),
  ogDescription: computed(() => post.value?.seoDescription || post.value?.excerpt || 'Read the latest stories from WeSupportHer.'),
  ogType: 'article',
  ogUrl: currentUrl,
  ogImage: computed(() => post.value?.featuredImage || `${siteUrl}/logo.png`),
  twitterCard: 'summary_large_image',
  twitterTitle: computed(() => post.value?.seoTitle || post.value?.title || 'Our Blog | WeSupportHer'),
  twitterDescription: computed(() => post.value?.seoDescription || post.value?.excerpt || ''),
  twitterImage: computed(() => post.value?.featuredImage || `${siteUrl}/logo.png`),
})

const formatDate = (value) => {
  if (!value) return 'Recently published'
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? 'Recently published' : new Intl.DateTimeFormat('en-NG', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
}

const loadPost = async () => {
  requestController?.abort()
  const controller = new AbortController()
  requestController = controller
  isLoading.value = true
  errorMessage.value = ''
  post.value = null

  try {
    const result = await getPublishedPost(route.params.slug, { signal: controller.signal })
    post.value = result
    const related = await getPublishedPosts({ category: result.category?.slug ?? '', limit: 4 }, { signal: controller.signal })
    relatedPosts.value = related.items.filter((item) => item.slug !== result.slug).slice(0, 3)
  } catch (error) {
    if (error?.name !== 'AbortError') {
      errorMessage.value = error?.status === 404 ? 'This story could not be found or is no longer published.' : error instanceof Error ? error.message : 'Unable to load this story.'
    }
  } finally {
    if (requestController === controller) isLoading.value = false
  }
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    copied.value = true
    window.clearTimeout(copiedTimer)
    copiedTimer = window.setTimeout(() => { copied.value = false }, 2000)
  } catch {
    copied.value = false
  }
}

watch(() => route.params.slug, loadPost, { immediate: true })
onBeforeUnmount(() => {
  requestController?.abort()
  window.clearTimeout(copiedTimer)
})
</script>

<style scoped>
.blog-content :deep(h2),
.blog-content :deep(h3),
.blog-content :deep(h4) {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #211827;
  font-weight: 900;
  line-height: 1.25;
}
.blog-content :deep(h2) { font-size: 1.75rem; }
.blog-content :deep(h3) { font-size: 1.4rem; }
.blog-content :deep(p) { margin: 1rem 0; line-height: 1.85; }
.blog-content :deep(ul), .blog-content :deep(ol) { margin: 1rem 0; padding-left: 1.5rem; }
.blog-content :deep(ul) { list-style: disc; }
.blog-content :deep(ol) { list-style: decimal; }
.blog-content :deep(li) { margin: 0.5rem 0; line-height: 1.7; }
.blog-content :deep(a) { color: #e65a12; font-weight: 700; text-decoration: underline; }
.blog-content :deep(blockquote) { margin: 1.5rem 0; border-left: 4px solid #e65a12; background: #fff8ee; padding: 1rem 1.25rem; font-style: italic; }
.blog-content :deep(img) { margin: 1.75rem auto; max-width: 100%; border-radius: 1rem; }
</style>
