<template>
  <section class="relative overflow-hidden bg-white px-4 py-24 sm:px-5">
    <!-- Soft background accents -->
     
    <div class="absolute left-0 top-0 h-72 w-72 rounded-full bg-soft-purple/70 blur-3xl"></div>
    <div class="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-soft-orange/70 blur-3xl"></div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center reveal">
        <p class="inline-flex rounded-full bg-soft-purple px-5 py-2 text-sm font-black uppercase tracking-widest text-primary">
          Our Values
        </p>

        <h2 class="mt-5 font-display text-4xl font-black text-dark sm:text-5xl">
          Our Core Values
        </h2>

        <div class="mx-auto mt-4 flex w-32 items-center justify-center gap-2">
          <span class="h-1 w-10 rounded-full bg-primary"></span>
          <span class="h-1 w-10 rounded-full bg-secondary"></span>
          <span class="h-1 w-10 rounded-full bg-accent"></span>
        </div>

        <p class="mt-6 text-base font-medium leading-relaxed text-dark/70 sm:text-lg">
          At WeSupportHer, our values guide our mission and shape how we
          empower women and girls to thrive and create lasting change.
        </p>
      </div>

      <!-- Values Grid -->
      <div class="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="value in values"
          :key="value.title"
          class="revea group overflow-hidden rounded-3xl border bg-white shadow-md shadow-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          :class="value.border"
        >
          <div class="relative h-56 overflow-hidden">
            <img
              :src="value.image"
              :alt="value.title"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-dark/45 via-dark/5 to-transparent"></div>

            <div
              class="absolute bottom-4 left-5 flex h-14 w-14 items-center justify-center rounded-full text-lg font-black text-white shadow-lg"
              :class="value.badgeBg"
            >
              {{ value.number }}
            </div>
          </div>

          <div class="relative p-7">
            <div
              class="mb-4 h-1 w-14 rounded-full"
              :class="value.lineBg"
            ></div>

            <h3 class="text-2xl font-black uppercase" :class="value.textColor">
              {{ value.title }}
            </h3>

            <p class="mt-4 text-sm font-medium leading-relaxed text-dark/70">
              {{ value.text }}
            </p>
          </div>
        </div>
      </div>

      <!-- Closing Banner -->
      <div class="reveal mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary to-secondary p-6 text-white shadow-xl shadow-primary/20 md:p-8">
        <div class="grid items-center gap-6 md:grid-cols-[220px_1fr]">
          <img
            src="@/assets/images/core (1).JPG"
            alt="WeSupportHer community"
            class="h-40 w-full rounded-2xl object-cover"
          />

          <div>
            <p class="text-xl font-semibold leading-relaxed md:text-2xl">
              Through these values, WSH is committed to
              <span class="font-black text-orange-200">inspiring transformation</span>,
              strengthening women’s leadership, and building stronger, more
              inclusive and equitable communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const core1 = new URL('@/assets/images/core (1).JPG', import.meta.url).href
const core2 = new URL('@/assets/images/core (2).JPG', import.meta.url).href
const core3 = new URL('@/assets/images/core (3).JPG', import.meta.url).href
const empower = new URL('@/assets/images/empower.jpg', import.meta.url).href
const motivate = new URL('@/assets/images/motivate.jpg', import.meta.url).href
const encourage = new URL('@/assets/images/encourage.jpg', import.meta.url).href
const awareness = new URL('@/assets/images/awareness.jpg', import.meta.url).href
const galvanized = new URL('@/assets/images/stakeholders.jpg', import.meta.url).href
const voices = new URL('@/assets/images/voices.jpg', import.meta.url).href







const values = [
  {
    number: '01',
    title: 'Empower',
    image: empower,
    text: 'We equip women and girls with knowledge, resources, and opportunities to reach their full potential and lead with confidence.',
    textColor: 'text-primary',
    badgeBg: 'bg-primary',
    lineBg: 'bg-primary',
    border: 'border-primary/15',
  },
  {
    number: '02',
    title: 'Motivate',
    image: motivate,
    text: 'We inspire women and girls to believe in their abilities, pursue their goals, and strive for excellence.',
    textColor: 'text-secondary',
    badgeBg: 'bg-secondary',
    lineBg: 'bg-secondary',
    border: 'border-secondary/15',
  },
  {
    number: '03',
    title: 'Encourage',
    image: encourage,
    text: 'We promote support, mentorship, and collaboration so women can uplift one another and grow together.',
    textColor: 'text-accent',
    badgeBg: 'bg-accent',
    lineBg: 'bg-accent',
    border: 'border-accent/15',
  },
  {
    number: '04',
    title: 'Raise Awareness',
    image: awareness,
    text: 'We highlight issues affecting women and girls, challenge harmful norms, and promote informed dialogue for gender equality.',
    textColor: 'text-primary',
    badgeBg: 'bg-primary',
    lineBg: 'bg-primary',
    border: 'border-primary/15',
  },
  {
    number: '05',
    title: 'Galvanize Action',
    image: galvanized,
    text: 'We mobilize communities, partners, and stakeholders to take bold action that advances women’s rights and inclusion.',
    textColor: 'text-secondary',
    badgeBg: 'bg-secondary',
    lineBg: 'bg-secondary',
    border: 'border-secondary/15',
  },
  {
    number: '06',
    title: 'Elevate Voices',
    image: voices,
    text: 'We create safe platforms for women and girls to speak, lead, and influence decisions that impact their lives.',
    textColor: 'text-accent',
    badgeBg: 'bg-accent',
    lineBg: 'bg-accent',
    border: 'border-accent/15',
  },
]
</script>