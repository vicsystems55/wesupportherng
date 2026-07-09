<template>
  <section class="relative overflow-hidden bg-white py-24">
    <div class="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
    <div class="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-5">
      <div class="mx-auto max-w-3xl text-center reveal">
        <span class="inline-flex rounded-full bg-soft-orange px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
          Meet Us
        </span>

        <h2 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
          The people driving the
          <span class="text-secondary">WSH mission.</span>
        </h2>

        <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
          WeSupportHer is led by passionate women committed to advancing health,
          leadership, advocacy, and opportunities for girls and women.
        </p>

        <div class="mx-auto mt-5 flex w-32 items-center justify-center gap-2">
          <span class="h-1 w-10 rounded-full bg-primary"></span>
          <span class="h-1 w-10 rounded-full bg-secondary"></span>
          <span class="h-1 w-10 rounded-full bg-accent"></span>
        </div>
      </div>

      <!-- Founder Feature -->
      <div class="reveal mt-16 overflow-hidden rounded-[2rem] border border-secondary/10 bg-cream shadow-xl shadow-black/5">
        <div class="grid items-center gap-8 lg:grid-cols-[360px_1fr]">
          <div class="relative h-[430px] overflow-hidden lg:h-full">
            <img
              :src="staffImage"
              alt="Founder of WeSupportHer"
              class="h-full w-full object-cover object-top"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-dark/45 via-transparent to-transparent"></div>

            <div class="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-3 backdrop-blur">
              <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                Founder
              </p>
            </div>
          </div>

          <div class="p-8 lg:p-10">
            <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">
              Founder / Chief Executive Officer
            </p>

            <h3 class="mt-4 font-display text-4xl font-black text-dark md:text-5xl">
              Toyin Bashir
            </h3>

            <p class="mt-5 text-base leading-relaxed text-dark/70 md:text-lg">
              Founder of WeSupportHer, Toyin Bashir leads the organisation’s
              vision to advance gender equity, amplify women’s voices, and
              create practical pathways for girls and women to thrive.
            </p>

            <div class="mt-8 grid gap-4 sm:grid-cols-3">
              <div
                v-for="item in founderHighlights"
                :key="item.title"
                class="rounded-2xl bg-white p-5 shadow-sm"
              >
                <p class="text-2xl font-black" :class="item.color">
                  {{ item.value }}
                </p>
                <p class="mt-1 text-xs font-bold uppercase tracking-wide text-dark/60">
                  {{ item.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Grid -->
      <div class="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="member in team"
          :key="member.name"
          class="reveal group overflow-hidden rounded-3xl border bg-white shadow-md shadow-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          :class="member.border"
        >
          <div class="relative h-72 overflow-hidden bg-cream">
            <img
              :src="member.image"
              :alt="member.name"
              class="h-full w-full object-cover object-top-center transition duration-700 group-hover:scale-110"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-dark/45 via-transparent to-transparent"></div>

            <div
              class="absolute bottom-4 left-4 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide text-white"
              :class="member.badge"
            >
              {{ member.unit }}
            </div>
          </div>

          <div class="p-6">
            <div class="mb-4 h-1 w-12 rounded-full" :class="member.line"></div>

            <h3 class="text-xl font-black text-dark">
              {{ member.name }}
            </h3>

            <p class="mt-2 text-sm font-bold" :class="member.color">
              {{ member.role }}
            </p>

            <p class="mt-4 text-sm leading-relaxed text-dark/65">
              {{ member.text }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const staffImage = new URL('@/assets/images/founder.jpeg', import.meta.url).href

const staff1 = new URL('@/assets/images/tosin.png', import.meta.url).href

const staff2 = new URL('@/assets/images/tosin.png', import.meta.url).href
const staff3 = new URL('@/assets/images/tosin.png', import.meta.url).href


const founderHighlights = [
  {
    value: '2024',
    title: 'Founded WSH',
    color: 'text-primary',
  },
  {
    value: '2,000+',
    title: 'Girls Reached',
    color: 'text-secondary',
  },
  {
    value: 'EMERGE',
    title: 'Guiding Values',
    color: 'text-accent',
  },
]

const team = [
  {
    name: 'Dr. Mutiat Mojibola Salawu',
    role: 'Director / Thematic Lead',
    unit: 'Health',
    text: 'Leads RedBubble and MenoWise thematic areas focused on women’s health and wellbeing.',
    color: 'text-pink-600',
    badge: 'bg-pink-600',
    line: 'bg-pink-600',
    border: 'border-pink-200',
    image: staff1,
  },
  {
    name: 'Ms. Tosin Abdul',
    role: 'Director legal , policy and advocacy',
    unit: 'Leadership',
    text: 'Supports SheRepresents and women’s participation in politics, governance, and decision-making.',
    color: 'text-primary',
    badge: 'bg-primary',
    line: 'bg-primary',
    border: 'border-primary/15',
    image: staff2,
  },
  {
    name: 'Ms. Tolu Abdul',
    role: 'Director / Co-Thematic Lead',
    unit: 'Advocacy',
    text: 'Supports RedBubble and SheRepresents through advocacy, mobilisation, and community action.',
    color: 'text-secondary',
    badge: 'bg-secondary',
    line: 'bg-secondary',
    border: 'border-secondary/15',
    image: staff3,
  }
  
]
</script>