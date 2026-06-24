<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <RouterLink to="/" class="flex items-center gap-3">
        <img src="@/assets/images/logo.png" alt="WeSupportHer Logo" class="h-14 w-auto" />
      </RouterLink>

      <nav class="hidden items-center gap-8 text-sm font-semibold lg:flex">
        <RouterLink v-for="item in navItems" :key="item.path" :to="item.path" class="nav-link">
          {{ item.label }}
        </RouterLink>
      </nav>

      <RouterLink
        to="/get-involved"
        class="hidden rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-primary lg:inline-flex"
      >
        Donate Now
      </RouterLink>

      <button class="lg:hidden" @click="menuOpen = !menuOpen">
        <span class="text-3xl">☰</span>
      </button>
    </div>

    <div v-if="menuOpen" class="border-t bg-white px-5 py-5 lg:hidden">
      <nav class="flex flex-col gap-4 text-sm font-semibold">
      <RouterLink
  v-for="item in navItems"
  :key="item.path"
  :to="item.path"
  class="relative text-dark transition hover:text-secondary [&.router-link-active]:text-secondary [&.router-link-active::after]:absolute [&.router-link-active::after:-bottom-2 [&.router-link-active::after:left-0 [&.router-link-active::after:h-0.5 [&.router-link-active::after:w-full [&.router-link-active::after:rounded-full [&.router-link-active::after:bg-secondary [&.router-link-active::after:content-['']]"
>
  {{ item.label }}
</RouterLink>

        <RouterLink
          to="/get-involved"
          class="rounded-xl bg-secondary px-5 py-3 text-center text-white"
          @click="menuOpen = false"
        >
          Donate Now
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Our Initiatives', path: '/our-initiatives' },
  { label: 'Impact', path: '/impact' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'News & Events', path: '/news-events' },
  { label: 'Contact Us', path: '/contact-us' },
]
</script>

