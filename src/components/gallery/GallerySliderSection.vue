<template>
  <section class="relative overflow-hidden bg-cream py-24">
    <div class="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
    <div class="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-5">
      <div class="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl reveal">
          <span
            class="inline-flex rounded-full bg-soft-orange px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
            Featured Moments
          </span>

          <h2 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
            A closer look at
            <span class="text-secondary">WSH in action.</span>
          </h2>

          <p class="mt-5 text-base leading-relaxed text-dark/70">
            Browse selected moments from outreach, advocacy and community activities.
          </p>
        </div>

        <div class="reveal flex gap-3">
          <button type="button"
            class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-secondary shadow-md transition hover:bg-secondary hover:text-white"
            @click="prevSlide">
            ←
          </button>

          <button type="button"
            class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-secondary shadow-md transition hover:bg-secondary hover:text-white"
            @click="nextSlide">
            →
          </button>
        </div>
      </div>

      <div class="reveal overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/10">
        <div class="grid lg:grid-cols-[1.25fr_0.75fr]">
          <div class="relative h-[520px] overflow-hidden">
            <img :src="activeSlide.image" :alt="activeSlide.title"
              class="h-full w-full object-cover object-center transition duration-700" />

            <div class="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent"></div>

            <div class="absolute bottom-8 left-8 right-8 text-white">
              <p class="text-xs font-black uppercase tracking-[0.25em] text-white/75">
                {{ activeSlide.category }}
              </p>

              <h3 class="mt-3 font-display text-4xl font-black leading-tight md:text-5xl">
                {{ activeSlide.title }}
              </h3>
            </div>
          </div>

          <div class="flex flex-col justify-between p-8 md:p-10">
            <div>
              <p class="text-xs font-black uppercase tracking-[0.25em] text-secondary">
                {{ activeSlide.date }}
              </p>

              <h3 class="mt-4 font-display text-3xl font-black text-dark">
                {{ activeSlide.title }}
              </h3>

              <p class="mt-5 text-base leading-relaxed text-dark/70">
                {{ activeSlide.text }}
              </p>
            </div>

            <div class="mt-10">
              <div class="mb-5 flex items-center justify-between text-sm font-bold text-dark/50">
                <span>{{ currentIndex + 1 }} / {{ slides.length }}</span>
                <span>{{ activeSlide.location }}</span>
              </div>

              <div class="h-2 overflow-hidden rounded-full bg-cream">
                <div class="h-full rounded-full bg-secondary transition-all duration-500"
                  :style="{ width: progressWidth }"></div>
              </div>

              <div class="mt-6 grid grid-cols-4 gap-3">
                <button v-for="(slide, index) in slides" :key="slide.title" type="button"
                  class="group h-20 overflow-hidden rounded-xl border-2 transition"
                  :class="index === currentIndex ? 'border-secondary' : 'border-transparent'"
                  @click="currentIndex = index">
                  <img :src="slide.image" :alt="slide.title"
                    class="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const slides = [
  {
    title: 'Community Outreach',
    category: 'Outreach',
    date: 'WSH Gallery',
    location: 'Community',
    image: new URL('@/assets/images/gallery/pix (2).jpeg', import.meta.url).href,
    text: 'Moments from WSH community engagement and outreach activities supporting women and girls.',
  },
  {
    title: 'Advocacy in Action',
    category: 'Advocacy',
    date: 'WSH Gallery',
    location: 'Campaigns',
    image: new URL('@/assets/images/gallery/pix (5).jpeg', import.meta.url).href,
    text: 'Campaign moments that reflect WSH’s commitment to awareness, dignity and representation.',
  },
  {
    title: 'Women Supporting Women',
    category: 'Leadership',
    date: 'WSH Gallery',
    location: 'Events',
    image: new URL('@/assets/images/gallery/pix (8).jpeg', import.meta.url).href,
    text: 'Snapshots of women gathering, learning, sharing and strengthening community bonds.',
  },
  {
    title: 'Impactful Engagements',
    category: 'Impact',
    date: 'WSH Gallery',
    location: 'Programmes',
    image: new URL('@/assets/images/gallery/pix (12).jpeg', import.meta.url).href,
    text: 'Photos that capture the spirit of service, support and action across WSH programmes.',
  },
]

const currentIndex = ref(0)

const activeSlide = computed(() => slides[currentIndex.value])

const progressWidth = computed(() => `${((currentIndex.value + 1) / slides.length) * 100}%`)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? slides.length - 1 : currentIndex.value - 1
}
</script>