<template>
  <section class="relative overflow-hidden bg-cream py-24">
    <div class="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
    <div class="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-5">
      <div class="mx-auto max-w-3xl text-center reveal">
        <span class="inline-flex rounded-full bg-soft-purple px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-primary">
          Partners & Collaborators
        </span>

        <h2 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
          Working together to create
          <span class="text-secondary">greater impact.</span>
        </h2>

        <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
          Collaboration is central to our mission. We work with government
          institutions, civil society, schools, communities, and development
          partners to advance gender equity.
        </p>

        <div class="mx-auto mt-5 flex w-32 items-center justify-center gap-2">
          <span class="h-1 w-10 rounded-full bg-primary"></span>
          <span class="h-1 w-10 rounded-full bg-secondary"></span>
          <span class="h-1 w-10 rounded-full bg-accent"></span>
        </div>
      </div>

      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="category in partnerCategories"
          :key="category.title"
          class="reveal rounded-3xl border bg-white p-7 text-center shadow-md shadow-black/5 transition hover:-translate-y-2 hover:shadow-xl"
          :class="category.border"
        >
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl"
            :class="category.bg"
          >
            <component :is="category.icon" class="h-8 w-8" :class="category.color" />
          </div>

          <h3 class="mt-5 text-lg font-black text-dark">
            {{ category.title }}
          </h3>

          <p class="mt-3 text-sm leading-relaxed text-dark/65">
            {{ category.text }}
          </p>
        </article>
      </div>

      <div class="reveal mt-14 rounded-[2rem] border border-black/5 bg-white p-8 shadow-xl shadow-black/5">
        <div class="mb-8 flex flex-col gap-3 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">
              Trusted Partners
            </p>
            <h3 class="mt-2 font-display text-3xl font-black text-dark">
              Collaborating for change
            </h3>
          </div>

          <RouterLink
            to="/get-involved"
            class="text-sm font-bold text-secondary"
          >
            Become a Partner →
          </RouterLink>
        </div>

        <div class="grid gap-6 sm:grid-cols-3">
          <div
            v-for="partner in partners"
            :key="partner.name"
            class="rounded-3xl border border-black/5 bg-cream p-6 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
          >
            <div class="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-white">
              <img
                v-if="partner.image"
                :src="partner.image"
                :alt="partner.name"
                class="h-16 w-16 object-contain"
              />
              <span v-else class="text-3xl font-black text-dark/30">•••</span>
            </div>

            <h4 class="mt-5 text-sm font-black leading-snug text-dark">
              {{ partner.name }}
            </h4>

            <p class="mt-2 text-xs font-semibold text-dark/50">
              {{ partner.type }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Building2,
  Handshake,
  School,
  UsersRound,
} from 'lucide-vue-next'

const partnerCategories = [
  {
    title: 'Government Institutions',
    text: 'Working with public institutions to support policies and programmes that advance women and girls.',
    icon: Building2,
    color: 'text-primary',
    bg: 'bg-soft-purple',
    border: 'border-primary/15',
  },
  {
    title: 'Civil Society & NGOs',
    text: 'Collaborating with organisations committed to advocacy, outreach, and social transformation.',
    icon: Handshake,
    color: 'text-secondary',
    bg: 'bg-soft-orange',
    border: 'border-secondary/15',
  },
  {
    title: 'Schools & Communities',
    text: 'Engaging schools and local communities through education, awareness, and support programmes.',
    icon: School,
    color: 'text-accent',
    bg: 'bg-soft-green',
    border: 'border-accent/15',
  },
  {
    title: 'Volunteers & Advocates',
    text: 'Mobilising passionate people who contribute their skills, voices, and time to the movement.',
    icon: UsersRound,
    color: 'text-primary',
    bg: 'bg-soft-purple',
    border: 'border-primary/15',
  },
]

const partners = [
  {
    name: 'Federal Ministry of Women Affairs',
    type: 'Government Partner',
    image: new URL('@/assets/images/partner-1.png', import.meta.url).href,
  },
  {
    name: 'Flow With Pride',
    type: 'Programme Partner',
    image: new URL('@/assets/images/partner-2.png', import.meta.url).href,
  },
  {
    name: 'More Partners Coming Soon',
    type: 'Collaboration',
    image: '',
  },
]
</script>