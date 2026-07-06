<template>
  <section class="relative overflow-hidden bg-white py-24">
    <div class="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
    <div class="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-5">
      <div class="mx-auto max-w-3xl text-center reveal">
        <span class="inline-flex rounded-full bg-soft-purple px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-primary">
          Our Story
        </span>

        <h2 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
          A journey of purpose, advocacy and impact.
        </h2>

        <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
          From its founding in 2024, WeSupportHer has grown into a movement
          focused on women’s health, leadership, dignity, representation and
          community-driven transformation.
        </p>
      </div>

      <!-- Desktop Timeline -->
      <div class="relative mt-20 hidden lg:block">
        <div class="absolute left-0 right-0 top-[56px] h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"></div>

        <div class="grid grid-cols-5 gap-6">
          <article
            v-for="item in timeline"
            :key="item.title"
            class="reveal group relative"
          >
            <div class="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-white shadow-xl shadow-black/10" :class="item.bg">
              <component :is="item.icon" class="h-9 w-9" :class="item.color" />
            </div>

            <div
              class="mx-auto mt-8 overflow-hidden rounded-3xl border bg-white shadow-md shadow-black/5 transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl"
              :class="item.border"
            >
              <div class="h-36 overflow-hidden">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div class="p-6">
                <p class="text-xs font-black uppercase tracking-[0.2em]" :class="item.color">
                  {{ item.year }}
                </p>

                <h3 class="mt-3 text-xl font-black text-dark">
                  {{ item.title }}
                </h3>

                <p class="mt-3 text-sm leading-relaxed text-dark/65">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Mobile Timeline -->
      <div class="relative mt-16 lg:hidden">
        <div class="absolute left-7 top-0 h-full w-1 rounded-full bg-gradient-to-b from-primary via-secondary to-accent"></div>

        <article
          v-for="item in timeline"
          :key="item.title"
          class="reveal relative mb-8 pl-20 last:mb-0"
        >
          <div class="absolute left-0 top-2 z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white shadow-lg" :class="item.bg">
            <component :is="item.icon" class="h-7 w-7" :class="item.color" />
          </div>

          <div
            class="overflow-hidden rounded-3xl border bg-white shadow-md shadow-black/5"
            :class="item.border"
          >
            <div class="h-44 overflow-hidden">
              <img
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover"
              />
            </div>

            <div class="p-6">
              <p class="text-xs font-black uppercase tracking-[0.2em]" :class="item.color">
                {{ item.year }}
              </p>

              <h3 class="mt-3 text-xl font-black text-dark">
                {{ item.title }}
              </h3>

              <p class="mt-3 text-sm leading-relaxed text-dark/65">
                {{ item.text }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  CalendarHeart,
  Droplets,
  HeartPulse,
  Landmark,
  Sparkles,
} from 'lucide-vue-next'

const image1 = new URL('@/assets/images/core (1).JPG', import.meta.url).href
const image2 = new URL('@/assets/images/core (2).JPG', import.meta.url).href
const image3 = new URL('@/assets/images/core (3).JPG', import.meta.url).href

const timeline = [
  {
    year: '2024',
    title: 'WSH Founded',
    text: 'WeSupportHer was established to advance gender equity and support girls and women.',
    image: image1,
    icon: CalendarHeart,
    color: 'text-primary',
    bg: 'bg-soft-purple',
    border: 'border-primary/15',
  },
  {
    year: 'RedBubble',
    title: 'Menstrual Health',
    text: 'Promoting menstrual hygiene education, dignity, and period poverty intervention.',
    image: image2,
    icon: Droplets,
    color: 'text-pink-600',
    bg: 'bg-pink-100',
    border: 'border-pink-200',
  },
  {
    year: 'MenoWise',
    title: 'Menopause Support',
    text: 'Creating awareness and support for women navigating menopause and midlife health.',
    image: image3,
    icon: HeartPulse,
    color: 'text-secondary',
    bg: 'bg-soft-orange',
    border: 'border-secondary/15',
  },
  {
    year: 'SheRepresents',
    title: 'Women in Leadership',
    text: 'Advancing women’s representation in politics, governance and decision-making.',
    image: image2,
    icon: Landmark,
    color: 'text-accent',
    bg: 'bg-soft-green',
    border: 'border-accent/15',
  },
  {
    year: 'Today',
    title: 'Growing Impact',
    text: 'Building partnerships, amplifying voices, and expanding community-driven action.',
    image: image1,
    icon: Sparkles,
    color: 'text-primary',
    bg: 'bg-soft-purple',
    border: 'border-primary/15',
  },
]
</script>