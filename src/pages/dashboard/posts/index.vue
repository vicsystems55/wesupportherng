<template>
  <DashboardLayout>
    <div class="space-y-6">
      <section class="flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-primary to-secondary p-7 text-white shadow-xl shadow-primary/15 sm:flex-row sm:items-center sm:justify-between">
        <div><p class="text-xs font-black uppercase tracking-[0.2em] text-white/70">Blog management</p><h2 class="mt-2 font-display text-3xl font-black">Blog posts</h2><p class="mt-2 text-sm text-white/80">Create, edit, publish, and manage stories on the WeSupportHer blog.</p></div>
        <RouterLink to="/admin/posts/create" class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-primary"><Plus class="h-4 w-4" /> New post</RouterLink>
      </section>

      <section class="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
        <div class="flex flex-col gap-4 border-b border-black/5 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div class="relative w-full max-w-xl"><Search class="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-dark/35" /><input v-model="search" type="search" placeholder="Search posts..." class="h-12 w-full rounded-xl border border-black/10 bg-cream pl-11 pr-4 text-sm outline-none focus:border-secondary focus:bg-white" /></div>
          <select v-model="statusFilter" class="h-12 rounded-xl border border-black/10 bg-cream px-4 text-sm font-bold outline-none focus:border-secondary"><option value="">All statuses</option><option value="DRAFT">Draft</option><option value="PUBLISHED">Published</option></select>
        </div>

        <div v-if="errorMessage" class="m-5 flex items-center justify-between gap-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert"><span>{{ errorMessage }}</span><button class="font-black" @click="loadPosts">Try again</button></div>
        <div v-if="isLoading && !posts.length" class="flex min-h-80 items-center justify-center gap-3 text-dark/50"><LoaderCircle class="h-6 w-6 animate-spin text-secondary" /> Loading posts…</div>
        <div v-else-if="!posts.length" class="flex min-h-80 flex-col items-center justify-center px-6 text-center"><Newspaper class="h-12 w-12 text-dark/20" /><h3 class="mt-4 text-xl font-black text-dark">No posts found</h3><p class="mt-2 text-sm text-dark/50">Create your first story or change the current filters.</p></div>
        <div v-else class="overflow-x-auto">
          <table class="w-full min-w-[900px] text-left">
            <thead class="bg-cream text-xs font-black uppercase tracking-wider text-dark/45"><tr><th class="px-5 py-4">Post</th><th class="px-5 py-4">Category</th><th class="px-5 py-4">Status</th><th class="px-5 py-4">Published</th><th class="px-5 py-4 text-right">Actions</th></tr></thead>
            <tbody class="divide-y divide-black/5">
              <tr v-for="post in posts" :key="post.id" class="hover:bg-cream/50">
                <td class="px-5 py-4"><div class="flex items-center gap-4"><img :src="post.featuredImage || '/logo.png'" :alt="post.featuredImageAlt" class="h-14 w-20 rounded-xl bg-cream object-cover" /><div class="min-w-0"><p class="max-w-md truncate font-black text-dark">{{ post.title }}</p><p class="mt-1 max-w-md truncate text-xs text-dark/40">{{ post.excerpt }}</p></div></div></td>
                <td class="px-5 py-4 text-sm font-bold text-dark/55">{{ post.category?.name || 'Uncategorised' }}</td>
                <td class="px-5 py-4"><span class="rounded-full px-3 py-2 text-xs font-black" :class="status(post) === 'PUBLISHED' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'">{{ status(post) === 'PUBLISHED' ? 'Published' : 'Draft' }}</span></td>
                <td class="px-5 py-4 text-sm text-dark/50">{{ formatDate(post.publishedAt) }}</td>
                <td class="px-5 py-4"><div class="flex justify-end gap-2"><RouterLink :to="`/admin/posts/${post.id}/edit`" class="rounded-lg border border-black/10 p-2 text-dark/60 hover:text-secondary" aria-label="Edit post"><Pencil class="h-4 w-4" /></RouterLink><button type="button" class="rounded-lg border border-black/10 p-2 text-dark/60 hover:text-accent disabled:opacity-40" :disabled="busyId === post.id" :aria-label="status(post) === 'PUBLISHED' ? 'Unpublish post' : 'Publish post'" @click="togglePublish(post)"><EyeOff v-if="status(post) === 'PUBLISHED'" class="h-4 w-4" /><Eye v-else class="h-4 w-4" /></button><button type="button" class="rounded-lg border border-red-100 p-2 text-red-500 hover:bg-red-50 disabled:opacity-40" :disabled="busyId === post.id" aria-label="Delete post" @click="removePost(post)"><Trash2 class="h-4 w-4" /></button></div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="posts.length" class="flex flex-col gap-3 border-t border-black/5 p-5 text-sm sm:flex-row sm:items-center sm:justify-between"><p class="text-dark/45">Page {{ pagination.page }} of {{ pagination.totalPages }} · {{ pagination.total }} posts</p><div class="flex gap-2"><button class="rounded-xl border border-black/10 px-4 py-2 font-bold disabled:opacity-40" :disabled="pagination.page <= 1 || isLoading" @click="changePage(pagination.page - 1)">Previous</button><button class="rounded-xl border border-black/10 px-4 py-2 font-bold disabled:opacity-40" :disabled="pagination.page >= pagination.totalPages || isLoading" @click="changePage(pagination.page + 1)">Next</button></div></div>
      </section>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Eye, EyeOff, LoaderCircle, Newspaper, Pencil, Plus, Search, Trash2 } from 'lucide-vue-next'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { deletePost, getAdminPosts, publishPost, unpublishPost } from '@/services/adminBlogService'

const posts = ref([])
const search = ref('')
const statusFilter = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const busyId = ref(null)
const pagination = ref({ page: 1, limit: 10, total: 0, totalPages: 1 })
let controller = null
let searchTimer = null
const status = (post) => String(post.status || 'DRAFT').toUpperCase()
const formatDate = (value) => value ? new Intl.DateTimeFormat('en-NG', { dateStyle: 'medium' }).format(new Date(value)) : 'Not published'

const loadPosts = async () => {
  controller?.abort(); controller = new AbortController(); isLoading.value = true; errorMessage.value = ''
  try { const result = await getAdminPosts({ page: pagination.value.page, limit: pagination.value.limit, search: search.value.trim(), status: statusFilter.value }, { signal: controller.signal }); posts.value = result.items; pagination.value = result.pagination }
  catch (error) { if (error?.name !== 'AbortError') errorMessage.value = error instanceof Error ? error.message : 'Unable to load blog posts.' }
  finally { isLoading.value = false }
}
const togglePublish = async (post) => { busyId.value = post.id; errorMessage.value = ''; try { if (status(post) === 'PUBLISHED') await unpublishPost(post.id); else await publishPost(post.id); await loadPosts() } catch (error) { errorMessage.value = error instanceof Error ? error.message : 'Unable to update the post.' } finally { busyId.value = null } }
const removePost = async (post) => { if (!window.confirm(`Delete “${post.title}”?`)) return; busyId.value = post.id; try { await deletePost(post.id); await loadPosts() } catch (error) { errorMessage.value = error instanceof Error ? error.message : 'Unable to delete the post.' } finally { busyId.value = null } }
const changePage = (page) => { pagination.value.page = page; loadPosts() }
watch([search, statusFilter], () => { window.clearTimeout(searchTimer); pagination.value.page = 1; searchTimer = window.setTimeout(loadPosts, 350) })
onMounted(loadPosts)
onBeforeUnmount(() => { controller?.abort(); window.clearTimeout(searchTimer) })
</script>
