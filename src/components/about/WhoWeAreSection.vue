<template>
<section class="relative overflow-hidden bg-cream py-24">
  <img
    src="@/assets/images/leaves.png"
    alt=""
    class="pointer-events-none absolute -left-20 top-16 w-72 opacity-10"
  />

  <img
    src="@/assets/images/leaves.png"
    alt=""
    class="pointer-events-none absolute -right-24 bottom-8 w-80 rotate-180 opacity-10"
  />

  <div class="relative z-10 mx-auto max-w-7xl px-5">
    <div class="grid items-start gap-12 lg:grid-cols-[0.95fr_1.25fr]">
      <!-- Founder Image -->
      <div class="reveal relative lg:sticky lg:top-28">
        <div class="absolute -left-5 -top-5 h-full w-full rounded-[2rem] bg-primary/10"></div>

        <div class="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/10">
          <img
            src="@/assets/images/founder.jpeg"
            alt="Toyin Bashir, Founder of WeSupportHer"
            class="h-[560px] w-full object-cover object-top"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent"></div>

          <div class="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur-md">
            <p class="text-sm font-black uppercase tracking-[0.2em] text-secondary">
              Founder / CEO
            </p>

            <h3 class="mt-2 text-2xl font-black text-dark">
              Toyin Bashir
            </h3>

            <p class="mt-2 text-sm font-semibold leading-relaxed text-dark/75">
              Founder, WeSupportHer (WSH)
            </p>
          </div>
        </div>
      </div>

<!-- Message Content -->
<div class="reveal">
  <span
    class="inline-flex rounded-full bg-soft-orange px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary"
  >
    A Message From The Founder
  </span>

  <h2 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
    Welcome to
    <span class="text-secondary">WeSupportHer</span>
  </h2>

  <div class="mt-8 rounded-[2rem] border border-black/5 bg-white p-7 shadow-xl shadow-black/5 md:p-9">
    <div class="mb-6 flex items-start gap-4">
      <span class="text-6xl font-black leading-none text-secondary">“</span>

      <p class="text-lg font-semibold italic leading-relaxed text-dark/80">
        WSH was founded from a simple but powerful belief: when girls and
        women are empowered to thrive, entire communities prosper.
      </p>
    </div>

    <div class="space-y-5 text-base leading-relaxed text-dark/70">
      <p>
        Dear Friends &amp; Colleagues, welcome to WeSupportHer (WSH).
      </p>

      <p>
        Despite significant progress in recent decades, millions of girls and
        women around the world continue to face barriers to health,
        leadership, representation, and opportunity.
      </p>

      <p>
        At WeSupportHer, we believe that gender equity is not merely a
        women’s issue; it is a societal imperative. It is fundamental to
        sustainable development, economic growth, social justice, and stronger
        communities.
      </p>
    </div>

    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-[1200px]"
      leave-from-class="opacity-100 max-h-[1200px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <div
        v-if="showFullMessage"
        class="mt-5 space-y-5 overflow-hidden text-base leading-relaxed text-dark/70"
      >
        <p>
          Through our programmes, advocacy initiatives, strategic partnerships,
          and community engagement efforts, we are committed to advancing the
          health, wellbeing, leadership, and inclusion of girls and women.
        </p>

        <p>
          We are particularly passionate about promoting menstrual health and
          hygiene, supporting women through menopause, and advancing the
          representation of women in politics, governance, and leadership.
        </p>

        <p>
          Our guiding principle is simple: lasting impact is achieved when
          people come together around a shared purpose. Partnerships,
          collaboration, and community engagement remain central to everything
          we do.
        </p>

        <p>
          Whether you are a student, professional, policymaker, development
          partner, volunteer, donor, or advocate, there is a place for you in
          this movement.
        </p>

        <p>
          Thank you for visiting our website and for your interest in our work.
          I invite you to join us as we continue to support, celebrate, and
          advocate for girls and women everywhere.
        </p>
      </div>
    </Transition>

    <div class="mt-8">
      <button
        type="button"
        @click="showFullMessage = !showFullMessage"
        class="inline-flex items-center gap-2 rounded-full border border-secondary px-6 py-3 text-sm font-bold text-secondary transition hover:bg-secondary hover:text-white"
      >
        {{ showFullMessage ? 'Show Less' : 'Read Full Message' }}

        <svg
          class="h-4 w-4 transition-transform duration-300"
          :class="{ 'rotate-180': showFullMessage }"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>

    <div class="mt-8 border-l-4 border-secondary pl-5">
      <p class="text-lg font-black text-dark">
        Warm regards,
      </p>

      <p class="mt-2 text-2xl font-black text-secondary">
        Toyin Bashir
      </p>

      <p class="text-sm font-semibold text-dark/60">
        Founder, WeSupportHer (WSH)
      </p>
    </div>

    <div class="mt-8 flex flex-wrap gap-4">
      <RouterLink
        to="/our-initiatives"
        class="inline-flex rounded-xl bg-secondary px-6 py-4 text-sm font-bold text-white transition hover:bg-primary"
      >
        Explore Our Work →
      </RouterLink>

      <RouterLink
        to="/get-involved"
        class="inline-flex rounded-xl border border-secondary px-6 py-4 text-sm font-bold text-secondary transition hover:bg-secondary hover:text-white"
      >
        Join The Movement →
      </RouterLink>
    </div>
  </div>
</div>
    </div>
  </div>
</section>
</template>

<script setup>
import {
    UsersRound,
    Handshake,
    Globe,
} from 'lucide-vue-next'


import { ref } from 'vue'

const showFullMessage = ref(false)

const highlights = [
    {
        title: 'Women-led',
        text: 'Built around women’s voices, leadership and lived experiences.',
        icon: UsersRound,
        color: 'text-primary',
        bg: 'bg-soft-purple',
        border: 'border-primary/15',
    },
    {
        title: 'Community Driven',
        text: 'Working alongside communities to create practical and lasting impact.',
        icon: Handshake,
        color: 'text-secondary',
        bg: 'bg-soft-orange',
        border: 'border-secondary/15',
    },
    {
        title: 'SDG Aligned',
        text: 'Supporting health, gender equality, inclusion and sustainable development.',
        icon: Globe,
        color: 'text-accent',
        bg: 'bg-soft-green',
        border: 'border-accent/15',
    },
]
</script>