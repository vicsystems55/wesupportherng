<template>
  <section id="gallery" class="relative overflow-hidden bg-cream py-24">
    <div class="absolute -left-32 top-20 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>
    <div class="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-5">
      <div class="mx-auto max-w-3xl text-center reveal">
        <span class="inline-flex rounded-full bg-soft-orange px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
          Photo Gallery
        </span>

        <h2 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
          Explore more moments from
          <span class="text-secondary">our activities.</span>
        </h2>

        <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
          A visual collection of WSH outreach, advocacy, learning sessions,
          campaigns, and community engagements.
        </p>

        <div class="mx-auto mt-5 flex w-32 items-center justify-center gap-2">
          <span class="h-1 w-10 rounded-full bg-primary"></span>
          <span class="h-1 w-10 rounded-full bg-secondary"></span>
          <span class="h-1 w-10 rounded-full bg-accent"></span>
        </div>
      </div>

      <div class="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
        <button
          v-for="photo in galleryPhotos"
          :key="photo.image"
          type="button"
          class="reveal group mb-5 block w-full overflow-hidden rounded-3xl bg-white shadow-md shadow-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          @click="openPhoto(photo)"
        >
          <div :class="photo.height" class="relative overflow-hidden">
            <img
              :src="photo.image"
              :alt="photo.title"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>

            <div class="absolute bottom-5 left-5 right-5 translate-y-4 text-left opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p class="text-xs font-black uppercase tracking-[0.2em] text-white/75">
                {{ photo.category }}
              </p>
              <h3 class="mt-2 text-lg font-black text-white">
                {{ photo.title }}
              </h3>
            </div>
          </div>
        </button>
      </div>
    </div>

    <!-- Lightbox -->
    <div
      v-if="selectedPhoto"
      class="fixed inset-0 z-[999] flex items-center justify-center bg-dark/90 px-5 py-8"
      @click.self="selectedPhoto = null"
    >
      <button
        type="button"
        class="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl font-black text-dark"
        @click="selectedPhoto = null"
      >
        ×
      </button>

      <div class="max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl">
        <img
          :src="selectedPhoto.image"
          :alt="selectedPhoto.title"
          class="max-h-[75vh] w-full object-contain bg-dark"
        />

        <div class="p-6">
          <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">
            {{ selectedPhoto.category }}
          </p>
          <h3 class="mt-2 text-2xl font-black text-dark">
            {{ selectedPhoto.title }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedPhoto = ref(null)

const openPhoto = (photo) => {
  selectedPhoto.value = photo
}

const heightClasses = [
  'h-64',
  'h-80',
  'h-72',
  'h-96',
  'h-60',
  'h-[420px]',
]

const categories = [
  'Outreach',
  'Advocacy',
  'Community',
  'Campaign',
  'Leadership',
  'Impact',
]

const titles = [
  'Community Outreach',
  'Advocacy in Action',
  'Women Supporting Women',
  'Moments of Impact',
  'Health Awareness',
  'Leadership Conversation',
  'Stories of Dignity',
  'Campaign Moments',
]

const galleryPhotos = Array.from({ length: 28 }, (_, index) => {
  const number = index + 1

  return {
    image: new URL(`../../assets/images/gallery/pix (${number}).jpeg`, import.meta.url).href,
    title: titles[index % titles.length],
    category: categories[index % categories.length],
    height: heightClasses[index % heightClasses.length],
  }
})
</script>