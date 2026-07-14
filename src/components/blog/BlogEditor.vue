<template>
  <div class="overflow-hidden rounded-2xl border border-black/10 bg-white focus-within:border-secondary">
    <div v-if="editor" class="flex flex-wrap gap-1 border-b border-black/5 bg-cream p-2">
      <button v-for="item in toolbar" :key="item.label" type="button" :title="item.label" class="rounded-lg px-3 py-2 text-xs font-black transition" :class="item.active?.() ? 'bg-secondary text-white' : 'text-dark/60 hover:bg-white hover:text-secondary'" @click="item.action">{{ item.text }}</button>
      <button type="button" title="Add link" class="rounded-lg px-3 py-2 text-xs font-black text-dark/60 hover:bg-white hover:text-secondary" @click="setLink">Link</button>
      <button type="button" title="Add image by URL" class="rounded-lg px-3 py-2 text-xs font-black text-dark/60 hover:bg-white hover:text-secondary" @click="addImage">Image</button>
      <button type="button" title="Undo" class="rounded-lg px-3 py-2 text-xs font-black text-dark/60 hover:bg-white disabled:opacity-30" :disabled="!editor.can().undo()" @click="editor.chain().focus().undo().run()">Undo</button>
      <button type="button" title="Redo" class="rounded-lg px-3 py-2 text-xs font-black text-dark/60 hover:bg-white disabled:opacity-30" :disabled="!editor.can().redo()" @click="editor.chain().focus().redo().run()">Redo</button>
    </div>
    <EditorContent :editor="editor" class="blog-editor min-h-80" />
  </div>
</template>

<script setup>
import { onBeforeUnmount, watch } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'

const props = defineProps({ modelValue: { type: String, default: '' } })
const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Link.configure({ openOnClick: false, autolink: true }),
    Image.configure({ allowBase64: false }),
  ],
  editorProps: {
    attributes: { class: 'min-h-80 px-5 py-4 outline-none' },
  },
  onUpdate: ({ editor: instance }) => emit('update:modelValue', instance.getHTML()),
})

const toolbar = [
  { label: 'Paragraph', text: 'P', action: () => editor.value.chain().focus().setParagraph().run(), active: () => editor.value.isActive('paragraph') },
  { label: 'Heading 2', text: 'H2', action: () => editor.value.chain().focus().toggleHeading({ level: 2 }).run(), active: () => editor.value.isActive('heading', { level: 2 }) },
  { label: 'Heading 3', text: 'H3', action: () => editor.value.chain().focus().toggleHeading({ level: 3 }).run(), active: () => editor.value.isActive('heading', { level: 3 }) },
  { label: 'Bold', text: 'Bold', action: () => editor.value.chain().focus().toggleBold().run(), active: () => editor.value.isActive('bold') },
  { label: 'Italic', text: 'Italic', action: () => editor.value.chain().focus().toggleItalic().run(), active: () => editor.value.isActive('italic') },
  { label: 'Bulleted list', text: '• List', action: () => editor.value.chain().focus().toggleBulletList().run(), active: () => editor.value.isActive('bulletList') },
  { label: 'Numbered list', text: '1. List', action: () => editor.value.chain().focus().toggleOrderedList().run(), active: () => editor.value.isActive('orderedList') },
  { label: 'Quote', text: 'Quote', action: () => editor.value.chain().focus().toggleBlockquote().run(), active: () => editor.value.isActive('blockquote') },
]

const setLink = () => {
  const previous = editor.value.getAttributes('link').href || ''
  const url = window.prompt('Enter the link URL', previous)
  if (url === null) return
  if (!url.trim()) editor.value.chain().focus().extendMarkRange('link').unsetLink().run()
  else editor.value.chain().focus().extendMarkRange('link').setLink({ href: url.trim() }).run()
}

const addImage = () => {
  const url = window.prompt('Enter a public image URL')
  if (url?.trim()) editor.value.chain().focus().setImage({ src: url.trim() }).run()
}

watch(() => props.modelValue, (value) => {
  if (editor.value && editor.value.getHTML() !== value) editor.value.commands.setContent(value || '', { emitUpdate: false })
})

onBeforeUnmount(() => editor.value?.destroy())
</script>

<style scoped>
.blog-editor :deep(.tiptap p) { margin: 0.75rem 0; line-height: 1.75; }
.blog-editor :deep(.tiptap h2) { margin: 1.4rem 0 0.5rem; font-size: 1.6rem; font-weight: 900; }
.blog-editor :deep(.tiptap h3) { margin: 1.2rem 0 0.5rem; font-size: 1.3rem; font-weight: 900; }
.blog-editor :deep(.tiptap ul) { list-style: disc; padding-left: 1.5rem; }
.blog-editor :deep(.tiptap ol) { list-style: decimal; padding-left: 1.5rem; }
.blog-editor :deep(.tiptap blockquote) { border-left: 4px solid #e65a12; padding-left: 1rem; font-style: italic; }
.blog-editor :deep(.tiptap img) { margin: 1rem auto; max-width: 100%; border-radius: 1rem; }
</style>
