<template>
  <DashboardLayout>
    <div class="space-y-6">
      <section class="flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-primary to-secondary p-7 text-white shadow-xl shadow-primary/15 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <RouterLink to="/admin/posts" class="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white/70 hover:text-white"><ArrowLeft class="h-4 w-4" /> Blog posts</RouterLink>
          <h2 class="mt-3 font-display text-3xl font-black">{{ isEditing ? 'Edit post' : 'Create post' }}</h2>
          <p class="mt-2 text-sm text-white/80">Write, format, preview, and publish a story for the WeSupportHer blog.</p>
        </div>
        <button type="button" class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-black text-primary disabled:opacity-60" :disabled="isSaving || isLoading || isUploadingImage" @click="savePost"><LoaderCircle v-if="isSaving" class="h-4 w-4 animate-spin" /><Save v-else class="h-4 w-4" />{{ isSaving ? 'Saving…' : 'Save post' }}</button>
      </section>

      <div v-if="errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700" role="alert">{{ errorMessage }}</div>
      <div v-if="successMessage" class="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700" role="status">{{ successMessage }}</div>

      <div v-if="isLoading" class="flex min-h-96 items-center justify-center gap-3 rounded-3xl bg-white text-dark/50"><LoaderCircle class="h-6 w-6 animate-spin text-secondary" /> Loading post…</div>

      <form v-else class="grid gap-6 xl:grid-cols-[1fr_340px]" @submit.prevent="savePost">
        <div class="space-y-6">
          <section class="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <label class="block text-sm font-black text-dark" for="post-title">Post title</label>
            <input id="post-title" v-model="form.title" type="text" maxlength="180" placeholder="Enter a clear and engaging title" class="mt-2 h-14 w-full rounded-xl border border-black/10 bg-cream px-4 text-lg font-bold outline-none focus:border-secondary focus:bg-white" />

            <label class="mt-6 block text-sm font-black text-dark" for="post-excerpt">Short introduction</label>
            <textarea id="post-excerpt" v-model="form.excerpt" rows="3" maxlength="400" placeholder="A short summary shown on the blog listing" class="mt-2 w-full resize-none rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none focus:border-secondary focus:bg-white" />
            <p class="mt-1 text-right text-xs font-semibold text-dark/35">{{ form.excerpt.length }}/400</p>
          </section>

          <section class="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <div class="mb-3"><p class="text-sm font-black text-dark">Post content</p><p class="mt-1 text-xs text-dark/45">Use the toolbar to structure the article. Images require a public HTTPS URL.</p></div>
            <BlogEditor v-model="form.content" />
          </section>

          <section class="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-black text-dark">Search and social preview</h3>
            <div class="mt-5 grid gap-5">
              <label class="text-sm font-black text-dark">SEO title<input v-model="form.seoTitle" type="text" maxlength="70" class="mt-2 h-12 w-full rounded-xl border border-black/10 bg-cream px-4 text-sm font-normal outline-none focus:border-secondary focus:bg-white" /></label>
              <label class="text-sm font-black text-dark">SEO description<textarea v-model="form.seoDescription" rows="3" maxlength="170" class="mt-2 w-full resize-none rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm font-normal outline-none focus:border-secondary focus:bg-white" /></label>
            </div>
          </section>
        </div>

        <aside class="space-y-6">
          <section class="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-black text-dark">Publishing</h3>
            <label class="mt-5 block text-sm font-black text-dark">Status<select v-model="form.status" class="mt-2 h-12 w-full rounded-xl border border-black/10 bg-cream px-4 text-sm font-bold outline-none focus:border-secondary"><option value="DRAFT">Draft</option><option value="PUBLISHED">Published</option></select></label>
            <label class="mt-5 flex items-start gap-3 rounded-xl bg-cream p-4 text-sm font-bold text-dark/65"><input v-model="form.isFeatured" type="checkbox" class="mt-1 accent-secondary" /> Feature this post on the blog page</label>
          </section>

          <section class="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-black text-dark">Category</h3>
            <select v-model="form.categoryId" class="mt-4 h-12 w-full rounded-xl border border-black/10 bg-cream px-4 text-sm font-bold outline-none focus:border-secondary"><option value="">Select category</option><option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option></select>
          </section>

          <section class="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-black text-dark">Featured image</h3>

            <input ref="imageInput" type="file" accept="image/jpeg,image/png,image/webp,image/avif" class="sr-only" @change="handleImageSelection" />

            <button
              v-if="!form.featuredImage"
              type="button"
              class="mt-4 flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed px-5 py-9 text-center transition"
              :class="isDragging ? 'border-secondary bg-soft-orange' : 'border-black/10 bg-cream hover:border-secondary/40 hover:bg-soft-orange/40'"
              :disabled="isUploadingImage"
              @click="imageInput?.click()"
              @dragenter.prevent="isDragging = true"
              @dragover.prevent="isDragging = true"
              @dragleave.prevent="isDragging = false"
              @drop.prevent="handleImageDrop"
            >
              <LoaderCircle v-if="isUploadingImage" class="h-9 w-9 animate-spin text-secondary" />
              <UploadCloud v-else class="h-9 w-9 text-secondary" />
              <span class="mt-3 text-sm font-black text-dark">{{ isUploadingImage ? 'Uploading to Cloudinary…' : 'Click or drag an image here' }}</span>
              <span class="mt-1 text-xs font-semibold text-dark/40">JPG, PNG, WebP or AVIF · maximum 5 MB</span>
              <span class="mt-1 text-xs text-dark/35">Recommended size: 1200 × 630 pixels</span>
            </button>

            <div v-else class="relative mt-4 overflow-hidden rounded-2xl bg-cream">
              <img :src="form.featuredImage" :alt="form.featuredImageAlt" class="aspect-[1.91/1] w-full object-cover" @error="imageError = true" />
              <div class="absolute inset-x-0 bottom-0 flex items-center justify-end gap-2 bg-gradient-to-t from-dark/80 to-transparent p-3 pt-10">
                <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-black text-primary" :disabled="isUploadingImage" @click="imageInput?.click()"><ImagePlus class="h-4 w-4" /> Replace</button>
                <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-xs font-black text-white" :disabled="isUploadingImage" @click="removeFeaturedImage"><Trash2 class="h-4 w-4" /> Remove</button>
              </div>
            </div>

            <p v-if="imageUploadError" class="mt-3 text-xs font-semibold text-red-600" role="alert">{{ imageUploadError }}</p>

            <details class="mt-4">
              <summary class="cursor-pointer text-xs font-black text-dark/45 hover:text-secondary">Use an existing image URL instead</summary>
              <input v-model="form.featuredImage" type="url" placeholder="https://..." class="mt-2 h-12 w-full rounded-xl border border-black/10 bg-cream px-4 text-sm font-normal outline-none focus:border-secondary" />
            </details>

            <label class="mt-4 block text-sm font-black text-dark">Alternative text<input v-model="form.featuredImageAlt" type="text" maxlength="180" class="mt-2 h-12 w-full rounded-xl border border-black/10 bg-cream px-4 text-sm font-normal outline-none focus:border-secondary" /></label>
            <p v-if="imageError" class="mt-2 text-xs font-semibold text-red-600">The image URL could not be previewed.</p>
          </section>
        </aside>
      </form>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, ImagePlus, LoaderCircle, Save, Trash2, UploadCloud } from 'lucide-vue-next'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import BlogEditor from '@/components/blog/BlogEditor.vue'
import { createPost, getAdminCategories, getAdminPost, updatePost, uploadPostImage } from '@/services/adminBlogService'

const route = useRoute()
const router = useRouter()
const isEditing = computed(() => Boolean(route.params.id))
const categories = ref([])
const isLoading = ref(isEditing.value)
const isSaving = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
const imageError = ref(false)
const imageInput = ref(null)
const isDragging = ref(false)
const isUploadingImage = ref(false)
const imageUploadError = ref('')
const form = reactive({ title: '', excerpt: '', content: '', categoryId: '', featuredImage: '', featuredImageAlt: '', status: 'DRAFT', isFeatured: false, seoTitle: '', seoDescription: '' })

watch(() => form.featuredImage, () => { imageError.value = false })

const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/avif']
const maximumImageSize = 5 * 1024 * 1024

const uploadImage = async (file) => {
  imageUploadError.value = ''

  if (!allowedImageTypes.includes(file?.type)) {
    imageUploadError.value = 'Choose a JPG, PNG, WebP, or AVIF image.'
    return
  }

  if (file.size > maximumImageSize) {
    imageUploadError.value = 'The selected image is larger than 5 MB.'
    return
  }

  isUploadingImage.value = true

  try {
    const asset = await uploadPostImage(file)
    form.featuredImage = asset.url
    if (!form.featuredImageAlt.trim()) {
      form.featuredImageAlt = form.title.trim() || file.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ')
    }
    successMessage.value = 'Featured image uploaded successfully.'
  } catch (error) {
    imageUploadError.value = error instanceof Error ? error.message : 'Unable to upload the image.'
  } finally {
    isUploadingImage.value = false
    if (imageInput.value) imageInput.value.value = ''
  }
}

const handleImageSelection = (event) => {
  const [file] = event.target.files ?? []
  if (file) uploadImage(file)
}

const handleImageDrop = (event) => {
  isDragging.value = false
  const [file] = event.dataTransfer?.files ?? []
  if (file) uploadImage(file)
}

const removeFeaturedImage = () => {
  form.featuredImage = ''
  imageUploadError.value = ''
}

const loadData = async () => {
  try {
    const categoryRequest = getAdminCategories()
    if (isEditing.value) {
      const [post, categoryItems] = await Promise.all([getAdminPost(route.params.id), categoryRequest])
      categories.value = categoryItems
      Object.assign(form, {
        title: post.title ?? '', excerpt: post.excerpt ?? '', content: post.content ?? '',
        categoryId: post.categoryId ?? post.category?.id ?? '', featuredImage: post.featuredImage ?? '',
        featuredImageAlt: post.featuredImageAlt ?? '', status: String(post.status ?? 'DRAFT').toUpperCase(),
        isFeatured: Boolean(post.isFeatured), seoTitle: post.seoTitle ?? '', seoDescription: post.seoDescription ?? '',
      })
    } else categories.value = await categoryRequest
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Unable to load the post editor.'
  } finally { isLoading.value = false }
}

const savePost = async () => {
  errorMessage.value = ''
  successMessage.value = ''
  const plainContent = form.content.replace(/<[^>]*>/g, '').trim()
  if (form.title.trim().length < 3 || form.excerpt.trim().length < 10 || plainContent.length < 20 || !form.categoryId) {
    errorMessage.value = 'Add a title, introduction, category, and meaningful post content before saving.'
    return
  }

  isSaving.value = true
  const payload = {
    title: form.title.trim(), excerpt: form.excerpt.trim(), content: form.content,
    categoryId: Number(form.categoryId), featuredImage: form.featuredImage.trim() || null,
    featuredImageAlt: form.featuredImageAlt.trim() || null, status: form.status,
    isFeatured: form.isFeatured, seoTitle: form.seoTitle.trim() || null,
    seoDescription: form.seoDescription.trim() || null,
  }

  try {
    const response = isEditing.value ? await updatePost(route.params.id, payload) : await createPost(payload)
    successMessage.value = 'Post saved successfully.'
    const createdId = response?.data?.id ?? response?.data?.post?.id ?? response?.id ?? response?.post?.id
    if (!isEditing.value && createdId) await router.replace(`/admin/posts/${createdId}/edit`)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Unable to save the post.'
  } finally { isSaving.value = false }
}

onMounted(loadData)
</script>
