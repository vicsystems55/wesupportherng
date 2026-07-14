<template>
  <DashboardLayout>
    <div class="space-y-6">
      <section class="flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-primary to-secondary p-7 text-white shadow-xl shadow-primary/15 sm:flex-row sm:items-center sm:justify-between"><div><p class="text-xs font-black uppercase tracking-[0.2em] text-white/70">Blog management</p><h2 class="mt-2 font-display text-3xl font-black">Post categories</h2><p class="mt-2 text-sm text-white/80">Keep the blog organised with a small set of useful categories.</p></div><button type="button" class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-primary" @click="openCreate"><Plus class="h-4 w-4" /> New category</button></section>

      <div v-if="errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700" role="alert">{{ errorMessage }}</div>
      <section class="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
        <div v-if="isLoading" class="flex min-h-72 items-center justify-center gap-3 text-dark/50"><LoaderCircle class="h-6 w-6 animate-spin text-secondary" /> Loading categories…</div>
        <div v-else-if="!categories.length" class="py-20 text-center"><FolderTree class="mx-auto h-12 w-12 text-dark/20" /><h3 class="mt-4 text-xl font-black text-dark">No categories yet</h3><p class="mt-2 text-sm text-dark/45">Create categories such as News, Events, or Success Stories.</p></div>
        <div v-else class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article v-for="category in categories" :key="category.id" class="rounded-2xl border border-black/5 bg-cream p-5"><div class="flex items-start justify-between gap-4"><div><h3 class="text-lg font-black text-dark">{{ category.name }}</h3><p class="mt-1 text-xs font-bold text-secondary">/{{ category.slug }}</p></div><span v-if="category._count?.posts !== undefined || category.postCount !== undefined" class="rounded-full bg-white px-3 py-1 text-xs font-black text-dark/50">{{ category._count?.posts ?? category.postCount }} posts</span></div><p class="mt-4 min-h-10 text-sm leading-relaxed text-dark/55">{{ category.description || 'No category description.' }}</p><div class="mt-5 flex gap-2"><button class="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-black text-dark/60 hover:text-secondary" @click="openEdit(category)"><Pencil class="h-3.5 w-3.5" /> Edit</button><button class="inline-flex items-center gap-2 rounded-lg border border-red-100 bg-white px-3 py-2 text-xs font-black text-red-500 hover:bg-red-50" @click="removeCategory(category)"><Trash2 class="h-3.5 w-3.5" /> Delete</button></div></article>
        </div>
      </section>

      <div v-if="showForm" class="fixed inset-0 z-[70] flex items-center justify-center bg-dark/60 p-5" @click.self="showForm = false"><form class="w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl" @submit.prevent="saveCategory"><div class="flex items-center justify-between"><h3 class="text-2xl font-black text-dark">{{ editingId ? 'Edit category' : 'New category' }}</h3><button type="button" class="text-dark/40" @click="showForm = false"><X class="h-5 w-5" /></button></div><label class="mt-6 block text-sm font-black text-dark">Name<input v-model="form.name" type="text" maxlength="80" class="mt-2 h-12 w-full rounded-xl border border-black/10 bg-cream px-4 font-normal outline-none focus:border-secondary" /></label><label class="mt-5 block text-sm font-black text-dark">Description<textarea v-model="form.description" rows="3" maxlength="300" class="mt-2 w-full resize-none rounded-xl border border-black/10 bg-cream px-4 py-3 font-normal outline-none focus:border-secondary" /></label><div class="mt-6 flex justify-end gap-3"><button type="button" class="rounded-xl border border-black/10 px-5 py-3 text-sm font-black" @click="showForm = false">Cancel</button><button type="submit" class="rounded-xl bg-secondary px-5 py-3 text-sm font-black text-white disabled:opacity-60" :disabled="isSaving">{{ isSaving ? 'Saving…' : 'Save category' }}</button></div></form></div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { FolderTree, LoaderCircle, Pencil, Plus, Trash2, X } from 'lucide-vue-next'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { createCategory, deleteCategory, getAdminCategories, updateCategory } from '@/services/adminBlogService'

const categories = ref([]); const isLoading = ref(false); const isSaving = ref(false); const errorMessage = ref(''); const showForm = ref(false); const editingId = ref(null); const form = reactive({ name: '', description: '' })
const loadCategories = async () => { isLoading.value = true; errorMessage.value = ''; try { categories.value = await getAdminCategories() } catch (error) { errorMessage.value = error instanceof Error ? error.message : 'Unable to load categories.' } finally { isLoading.value = false } }
const openCreate = () => { editingId.value = null; Object.assign(form, { name: '', description: '' }); showForm.value = true }
const openEdit = (category) => { editingId.value = category.id; Object.assign(form, { name: category.name ?? '', description: category.description ?? '' }); showForm.value = true }
const saveCategory = async () => { if (form.name.trim().length < 2) { errorMessage.value = 'Category name must contain at least two characters.'; return } isSaving.value = true; try { const payload = { name: form.name.trim(), description: form.description.trim() || null }; if (editingId.value) await updateCategory(editingId.value, payload); else await createCategory(payload); showForm.value = false; await loadCategories() } catch (error) { errorMessage.value = error instanceof Error ? error.message : 'Unable to save category.' } finally { isSaving.value = false } }
const removeCategory = async (category) => { if (!window.confirm(`Delete “${category.name}”? Categories assigned to posts may not be deletable.`)) return; try { await deleteCategory(category.id); await loadCategories() } catch (error) { errorMessage.value = error instanceof Error ? error.message : 'Unable to delete category.' } }
onMounted(loadCategories)
</script>
