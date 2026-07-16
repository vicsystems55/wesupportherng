<template>
  <header class="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <RouterLink to="/" class="flex items-center gap-3" aria-label="WeSupportHer home">
        <img src="@/assets/images/logo.png" alt="WeSupportHer Logo" class="h-14 w-auto" />
      </RouterLink>

      <nav class="hidden items-center gap-5 text-xs font-semibold lg:flex xl:gap-7 xl:text-sm" aria-label="Main navigation">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="group relative py-2 transition-colors"
          :class="isActive(item.path) ? 'text-secondary' : 'text-dark hover:text-secondary'"
          :aria-current="isActive(item.path) ? 'page' : undefined"
        >
          {{ item.label }}
          <span
            class="absolute inset-x-0 -bottom-1 h-0.5 origin-center rounded-full bg-secondary transition-transform duration-300"
            :class="isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
            aria-hidden="true"
          />
        </RouterLink>
      </nav>

      <RouterLink
        to="/donate"
        class="hidden rounded-xl px-5 py-3 text-sm font-bold text-white shadow-lg transition lg:inline-flex"
        :class="isActive('/donate') ? 'bg-primary shadow-primary/25 ring-2 ring-primary/20 ring-offset-2' : 'bg-secondary shadow-orange-500/20 hover:bg-primary'"
        :aria-current="isActive('/donate') ? 'page' : undefined"
      >
        Donate Now
      </RouterLink>

      <button
        type="button"
        class="flex h-11 w-11 items-center justify-center rounded-xl text-dark transition hover:bg-cream hover:text-secondary lg:hidden"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation menu"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" class="h-6 w-6" />
        <Menu v-else class="h-6 w-6" />
      </button>
    </div>

    <div v-if="menuOpen" class="border-t bg-white px-5 py-5 lg:hidden">
      <nav class="flex flex-col gap-2 text-sm font-semibold" aria-label="Mobile navigation">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="rounded-xl border-l-4 px-4 py-3 transition"
          :class="isActive(item.path) ? 'border-secondary bg-soft-orange text-secondary' : 'border-transparent text-dark hover:bg-cream hover:text-secondary'"
          :aria-current="isActive(item.path) ? 'page' : undefined"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </RouterLink>

        <RouterLink
          to="/donate"
          class="mt-2 rounded-xl px-5 py-3 text-center text-white"
          :class="isActive('/donate') ? 'bg-primary ring-2 ring-primary/20' : 'bg-secondary'"
          :aria-current="isActive('/donate') ? 'page' : undefined"
          @click="menuOpen = false"
        >
          Donate Now
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const route = useRoute()
const menuOpen = ref(false)

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Our Initiatives', path: '/our-initiatives' },
  { label: 'Impact', path: '/impact' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'Our Blog', path: '/our-blog' },
  { label: 'Our Gallery', path: '/our-gallery' },
  { label: 'Contact Us', path: '/contact-us' },
]

const isActive = (path) => path === '/'
  ? route.path === '/'
  : route.path === path || route.path.startsWith(`${path}/`)

watch(() => route.fullPath, () => { menuOpen.value = false })
</script>
