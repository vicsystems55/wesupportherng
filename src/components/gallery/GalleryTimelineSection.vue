<template>
  <section class="relative overflow-hidden bg-white py-24">
    <div class="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
    <div class="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-5">
      <div class="mx-auto max-w-3xl text-center reveal">
        <span class="inline-flex rounded-full bg-soft-purple px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-primary">
          Gallery Timeline
        </span>

        <h2 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
          Moments that tell the story of
          <span class="text-secondary">our work.</span>
        </h2>

        <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
          From awareness sessions to community outreach and advocacy moments,
          each photograph captures a part of the WSH journey.
        </p>

        <div class="mx-auto mt-5 flex w-32 items-center justify-center gap-2">
          <span class="h-1 w-10 rounded-full bg-primary"></span>
          <span class="h-1 w-10 rounded-full bg-secondary"></span>
          <span class="h-1 w-10 rounded-full bg-accent"></span>
        </div>
      </div>

      <!-- Desktop Timeline -->
      <div class="relative mt-20 hidden lg:block">
        <div class="absolute left-0 right-0 top-[44px] h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"></div>

        <div class="grid grid-cols-4 gap-8">
          <article
            v-for="item in timeline"
            :key="item.title"
            class="reveal group relative"
          >
            <div
              class="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-[8px] border-white shadow-xl shadow-black/10"
              :class="item.bg"
            >
              <component :is="item.icon" class="h-8 w-8" :class="item.color" />
            </div>

            <div
              class="mt-8 overflow-hidden rounded-3xl border bg-white shadow-md shadow-black/5 transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl"
              :class="item.border"
            >
              <div class="h-48 overflow-hidden">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div class="p-6 text-center">
                <p class="text-xs font-black uppercase tracking-[0.2em]" :class="item.color">
                  {{ item.label }}
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
          <div
            class="absolute left-0 top-2 z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white shadow-lg"
            :class="item.bg"
          >
            <component :is="item.icon" class="h-7 w-7" :class="item.color" />
          </div>

          <div
            class="overflow-hidden rounded-3xl border bg-white shadow-md shadow-black/5"
            :class="item.border"
          >
            <div class="h-56 overflow-hidden">
              <img
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover"
              />
            </div>

            <div class="p-6">
              <p class="text-xs font-black uppercase tracking-[0.2em]" :class="item.color">
                {{ item.label }}
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
  Camera,
  Megaphone,
  HandHeart,
  UsersRound,
} from 'lucide-vue-next'

const timeline = [
  {
    label: 'Outreach',
    title: 'Community Engagement',
    text: 'Connecting directly with communities through support, education and awareness.',
    image: new URL('@/assets/images/gallery/pix (3).jpeg', import.meta.url).href,
    icon: HandHeart,
    color: 'text-primary',
    bg: 'bg-soft-purple',
    border: 'border-primary/15',
  },
  {
    label: 'Campaign',
    title: 'Advocacy Moments',
    text: 'Using public campaigns to raise awareness and spark meaningful conversations.',
    image: new URL('@/assets/images/gallery/pix (6).jpeg', import.meta.url).href,
    icon: Megaphone,
    color: 'text-secondary',
    bg: 'bg-soft-orange',
    border: 'border-secondary/15',
  },
  {
    label: 'People',
    title: 'Women Supporting Women',
    text: 'Moments that reflect unity, support, learning and shared purpose.',
    image: new URL('@/assets/images/gallery/pix (9).jpeg', import.meta.url).href,
    icon: UsersRound,
    color: 'text-accent',
    bg: 'bg-soft-green',
    border: 'border-accent/15',
  },
  {
    label: 'Gallery',
    title: 'Stories Captured',
    text: 'Every image preserves a memory of service, hope and positive change.',
    image: new URL('@/assets/images/gallery/pix (14).jpeg', import.meta.url).href,
    icon: Camera,
    color: 'text-primary',
    bg: 'bg-soft-purple',
    border: 'border-primary/15',
  },
]
</script>