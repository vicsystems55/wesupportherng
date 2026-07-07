<template>
  <DefaultLayout>
    <HeroSlider />
    <!-- <div class="pointer-events-none absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
          class="block h-[100px] w-full sm:h-[120px] md:h-[140px]">
          <path
            d="M0,120V74 c47.79,-22.2,103.59,-32.17,158,-28 c70.36,5.37,136.33,33.31,206.8,37.5 c73.84,4.39,147.54,-16.85,218.2,-35.23 c69.27,-18,138.3,-24.88,209.4,-13.08 c36.15,6,69.85,17.84,104.45,29.34 c92.64,30.78,216.15,70.07,303.15,3.33 V120Z"
            fill="#FFF8EE" opacity="0.48" />
          <path
            d="M0,120 V95 c60,-25,120,-20,190,-5 c90,18,170,45,280,28 c120,-18,210,-65,330,-38 c90,20,170,60,400,10 V120Z"
            fill="#7A1F8A" opacity="0.98" />
          <path
            d="M0,120 V105 c90,-35,180,-15,290,8 c110,22,210,12,330,-15 c120,-28,220,-18,350,10 c90,18,160,12,230,-10 V120Z"
            fill="#fff8f2" />
        </svg>
      </div> -->

    <!-- HERO SECTION -->


    <!-- WHO WE ARE SECTION -->
    <!-- =========================
 WHO WE ARE
========================== -->
    <section class="relative overflow-hidden bg-cream py-24">
      <!-- Background Leaves -->
      <img src="@/assets/images/leaves.png" class="absolute left-0 top-10 w-56 opacity-10" alt="" />

      <img src="@/assets/images/leaves.png" class="absolute right-0 bottom-0 w-72 rotate-180 opacity-10" alt="" />

      <div class="relative mx-auto max-w-7xl px-5">

        <!-- Heading -->
        <div class="mx-auto max-w-3xl text-center reveal">

          <span
            class="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-secondary">
            About WeSupportHer
          </span>

          <h2 class="mt-6 font-display text-4xl font-bold leading-tight text-dark md:text-5xl">
            Building a Future where
            <span class="text-secondary">
              Every Woman and Girl
            </span>
            Can Thrive.
          </h2>

          <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
            WeSupportHer (WSH) is a women-led nonprofit committed to advancing
            gender equality through education, advocacy, leadership development,
            health awareness and strategic partnerships that empower women and
            girls to reach their full potential.
          </p>

        </div>

        <!-- Vision + Mission -->
        <div class="mt-16 grid gap-8 lg:grid-cols-2">

          <!-- Vision -->
          <div
            class="group rounded-3xl border border-primary/10 bg-white p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

            <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-soft-purple">

              <Eye class="h-10 w-10 text-primary" />

            </div>

            <h3 class="mt-8 text-3xl font-bold text-primary">
              Our Vision
            </h3>

            <p class="mt-5 text-base leading-relaxed text-dark/75">
              A world where every woman and girl enjoys equal rights,
              opportunities, dignity, leadership, and meaningful representation.
            </p>

          </div>

          <!-- Mission -->
          <div
            class="group rounded-3xl border border-secondary/10 bg-white p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

            <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-soft-orange">

              <Target class="h-10 w-10 text-secondary" />

            </div>

            <h3 class="mt-8 text-3xl font-bold text-secondary">
              Our Mission
            </h3>

            <p class="mt-5 text-base leading-relaxed text-dark/75">
              To advance gender equity through advocacy, education,
              partnerships, innovation and collective action that
              transform communities.
            </p>

          </div>

        </div>

      </div>
    </section>



    <CoreValuesSection />

    <!-- =========================
 OUR AREAS OF IMPACT
========================== -->
    <section class="relative overflow-hidden bg-soft-orange py-24">
      <!-- Background accents -->
      <img src="@/assets/images/leaves.png" alt=""
        class="pointer-events-none absolute -right-20 bottom-20 w-72 rotate-180 opacity-10" />

      <div class="absolute left-0 top-0 h-72 w-72 rounded-full bg-soft-purple/50 blur-3xl"></div>
      <div class="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-soft-green/50 blur-3xl"></div>

      <div class="relative z-10 mx-auto max-w-7xl px-5">
        <!-- Heading -->
        <div class="mx-auto max-w-3xl text-center reveal">
          <span
            class="inline-flex rounded-full bg-soft-purple px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-primary">
            Our Impact Areas
          </span>

          <h2 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
            Focused on the Issues That Matter
            <span class="text-secondary">Most.</span>
          </h2>

          <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
            Our programmes are built around the most important needs of women and girls:
            health, leadership, representation, advocacy, and community empowerment.
          </p>

          <div class="mx-auto mt-5 flex w-32 items-center justify-center gap-2">
            <span class="h-1 w-10 rounded-full bg-primary"></span>
            <span class="h-1 w-10 rounded-full bg-secondary"></span>
            <span class="h-1 w-10 rounded-full bg-accent"></span>
          </div>
        </div>

        <!-- Impact Cards -->
        <div class="mt-16 grid gap-8 lg:grid-cols-3">
          <div v-for="area in impactAreas" :key="area.title"
            class="revea group overflow-hidden rounded-3xl border bg-white shadow-md shadow-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            :class="area.border">
            <!-- Image -->
            <div class="relative h-56 overflow-hidden">
              <img :src="area.image" :alt="area.title"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-110" />

              <div class="absolute inset-0 bg-gradient-to-t from-dark/55 via-dark/10 to-transparent"></div>

              <div
                class="absolute bottom-4 left-5 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide text-white"
                :class="area.badgeBg">
                {{ area.tag }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-7">
              <div class="mb-4 flex items-center justify-between">
                <div class="h-1 w-14 rounded-full" :class="area.lineBg"></div>

                <span class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black"
                  :class="[area.softBg, area.textColor]">
                  {{ area.number }}
                </span>
              </div>

              <h3 class="text-2xl font-black" :class="area.textColor">
                {{ area.title }}
              </h3>

              <p class="mt-1 text-sm font-bold text-dark/60">
                {{ area.subtitle }}
              </p>

              <p class="mt-4 text-sm font-medium leading-relaxed text-dark/70">
                {{ area.description }}
              </p>

              <RouterLink to="/our-initiatives"
                class="mt-6 inline-flex rounded-lg border px-5 py-2 text-sm font-bold transition hover:text-white"
                :class="area.button">
                Learn More →
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- =========================
    OUR KEY INITIATIVES
    ========================== -->
    <section class="relative overflow-hidden bg-soft-purple py-24">
      <!-- Background Decoration -->
      <img src="@/assets/images/leaves.png" alt=""
        class="pointer-events-none absolute -left-16 top-10 w-64 opacity-10" />

      <img src="@/assets/images/leaves.png" alt=""
        class="pointer-events-none absolute -right-16 bottom-10 w-72 rotate-180 opacity-10" />

      <!-- Background Glow -->
      <div class="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/8 blur-3xl">
      </div>

      <div class="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/8 blur-3xl">
      </div>

      <div
        class="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-3xl">
      </div>

      <div class="relative z-10 mx-auto max-w-7xl px-5">

        <!-- Heading -->
        <div class="mx-auto max-w-3xl text-center reveal">

          <span
            class="inline-flex rounded-full bg-soft-orange px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
            Our Key Initiatives
          </span>

          <h2 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
            Creating
            <span class="text-secondary">Impact</span>,
            Changing Lives.
          </h2>

          <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
            Through strategic programmes and community-driven initiatives,
            WeSupportHer addresses some of the most pressing issues affecting
            women and girls.
          </p>

          <div class="mx-auto mt-5 flex w-32 items-center justify-center gap-2">
            <span class="h-1 w-10 rounded-full bg-primary"></span>
            <span class="h-1 w-10 rounded-full bg-secondary"></span>
            <span class="h-1 w-10 rounded-full bg-accent"></span>
          </div>

        </div>

        <!-- Cards -->
        <div class="mt-16 grid gap-8 lg:grid-cols-3">

          <div v-for="item in initiatives" :key="item.title"
            class="revea group overflow-hidden rounded-3xl border bg-white shadow-md shadow-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            :class="item.border">

            <!-- Illustration Area -->
            <div class="relative flex justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 p-8">

              <img src="@/assets/images/leaves.png"
                class="absolute right-0 top-1/2 w-40 -translate-y-1/2 opacity-10 transition duration-500 group-hover:scale-110" />

              <img :src="item.image" :alt="item.title"
                class="relative z-10 h-56 object-contain transition duration-500 group-hover:scale-105" />

              <!-- Icon Badge -->
              <div class="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg"
                :class="item.iconBg">
                <component :is="item.icon" class="h-7 w-7" :class="item.accent" />
              </div>

            </div>

            <!-- Content -->
            <div class="p-8">

              <div class="mb-5 h-1 w-14 rounded-full" :class="item.lineBg"></div>

              <h3 class="text-3xl font-black" :class="item.accent">
                {{ item.title }}
              </h3>

              <p class="mt-2 text-sm font-bold text-dark/60">
                {{ item.tag }}
              </p>

              <ul class="mt-5 space-y-3 text-sm leading-relaxed text-dark/70">

                <li v-for="point in item.points" :key="point" class="flex gap-3">
                  <span class="mt-[7px] h-2 w-2 rounded-full" :class="item.dot"></span>

                  <span>{{ point }}</span>

                </li>

              </ul>

              <RouterLink to="/our-initiatives"
                class="mt-8 inline-flex rounded-xl border px-5 py-3 text-sm font-bold transition hover:text-white"
                :class="item.button">
                Learn More →
              </RouterLink>

            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- IMPACT / FOUNDER / EVENTS / PARTNERS / CTA -->
    <section
      class="relative overflow-hidden bg-[linear-gradient(180deg,#FFF8F2_0%,#FFFFFF_45%,#FFF8F2_100%)] px-4 py-24 sm:px-5">
      <!-- Soft Background Glow -->
      <div class="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div class="absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>
      <div class="absolute left-1/2 bottom-0 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl"></div>

      <div class="relative z-10 mx-auto max-w-7xl">
        <!-- IMPACT STATS -->
        <div
          class="reveal overflow-hidden rounded-[2rem] bg-gradient-to-r from-secondary via-primary to-primary p-8 text-white shadow-2xl shadow-primary/20">
          <div class="mx-auto max-w-3xl text-center">
            <p class="text-xs font-black uppercase tracking-[0.25em] text-white/80">
              Our Impact In Numbers
            </p>

            <h2 class="mt-3 font-display text-3xl font-black sm:text-4xl">
              Creating Real Change
            </h2>
          </div>

          <div class="mt-8 grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="stat in impactStats" :key="stat.label"
              class="rounded-2xl bg-white/10 p-6 backdrop-blur-sm lg:bg-transparent lg:p-0 lg:border-r lg:border-white/20 last:border-r-0">
              <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl" :class="stat.bg">
                <component :is="stat.icon" class="h-8 w-8" :class="stat.color" />
              </div>
              <h3 class="mt-3 text-4xl font-black md:text-5xl">{{ stat.value }}</h3>
              <p class="mt-1 text-sm font-semibold text-white/85">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- FOUNDER + FEATURED EVENTS -->
        <div class="mt-14 grid gap-8 lg:grid-cols-[1fr_1.25fr]">
          <!-- Founder -->
          <div
            class="reveal overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-xl shadow-black/5">
            <div class="grid gap-0 md:grid-cols-[260px_1fr]">
              <div class="relative min-h-[620px] overflow-hidden">
                <img src="@/assets/images/founder.jpeg" alt="Toyin Bashir, Founder of WeSupportHer"
                  class="h-full w-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-dark/35 to-transparent"></div>
              </div>

              <div class="p-8">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                  A Message From Our Founder
                </p>

                <div class="mt-6">
                  <span class="text-6xl font-black leading-none text-secondary">“</span>

                  <p class="-mt-5 text-lg font-medium italic leading-relaxed text-dark/80">
                    WSH was founded from a simple but powerful belief: when girls
                    and women are empowered to thrive, entire communities prosper.
                  </p>
                </div>

                <div class="mt-6 border-l-4 border-secondary pl-4">
                  <p class="font-black text-dark">Toyin Bashir</p>
                  <p class="text-sm text-dark/65">Founder / CEO, WeSupportHer</p>
                </div>

                <RouterLink to="/about-us"
                  class="mt-7 inline-flex rounded-xl bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary">
                  Read Full Message →
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- Events -->
          <div class="reveal">
            <div class="mb-6 flex items-end justify-between gap-4">
              <div>
                <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                  Events & Campaigns
                </p>
                <h3 class="mt-2 font-display text-3xl font-black text-dark">
                  What’s Happening
                </h3>
              </div>

              <RouterLink to="/news-events" class="text-sm font-bold text-secondary">
                See All →
              </RouterLink>
            </div>

            <div class="grid gap-5">
              <article v-for="event in events" :key="event.title"
                class="group grid gap-5 overflow-hidden rounded-3xl border border-black/5 bg-white p-5 shadow-md shadow-black/5 transition hover:-translate-y-1 hover:shadow-xl md:grid-cols-[150px_1fr]">
                <div class="relative h-40 overflow-hidden rounded-2xl md:h-full">
                  <img :src="event.image" :alt="event.title"
                    class="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div class="absolute inset-0 bg-dark/20"></div>
                </div>

                <div class="flex flex-col justify-center">
                  <div class="mb-3 flex items-center gap-3">
                   <div
                      class="flex h-12 w-12 items-center justify-center rounded-xl"
                      :class="event.bg"
                    >
                      <component
                        :is="event.icon"
                        class="h-6 w-6"
                        :class="event.color"
                      />
                    </div>

                    <p class="text-sm font-black" :class="event.color">
                      {{ event.date }}
                    </p>
                  </div>

                  <h4 class="text-xl font-black leading-snug text-dark">
                    {{ event.title }}
                  </h4>

                  <p class="mt-3 text-sm leading-relaxed text-dark/65">
                    {{ event.text }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>

        <!-- PHOTO STRIP -->
        <div class="reveal mt-14">
          <div class="mb-6 flex items-end justify-between gap-4">
            <div>
              <p class="text-xs font-black uppercase tracking-[0.2em] text-primary">
                Impact In Action
              </p>
              <h3 class="mt-2 font-display text-3xl font-black text-dark">
                Moments From Our Work
              </h3>
            </div>

            <RouterLink to="/news-events" class="text-sm font-bold text-secondary">
              View Gallery →
            </RouterLink>
          </div>

          <div class="grid gap-4 md:grid-cols-4">
            <div v-for="photo in galleryPhotos" :key="photo"
              class="group h-56 overflow-hidden rounded-3xl shadow-md shadow-black/5">
              <img :src="photo" alt="WeSupportHer event photo"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            </div>
          </div>
        </div>

        <!-- PARTNERS + JOIN MOVEMENT -->
        <div class="mt-14 grid gap-8 lg:grid-cols-[1fr_1.25fr]">
          <!-- Partners -->
          <article class="reveal rounded-[2rem] border border-black/5 bg-white p-8 shadow-xl shadow-black/5">
            <p class="text-xs font-black uppercase tracking-[0.2em] text-primary">
              Our Partners
            </p>

            <h3 class="mt-2 font-display text-3xl font-black text-dark">
              Working Together
            </h3>

            <p class="mt-4 text-sm leading-relaxed text-dark/65">
              Collaboration is central to our impact. We work with institutions,
              communities, and partners committed to advancing gender equity.
            </p>

            <div class="mt-8 grid grid-cols-3 gap-6 text-center">
              <div v-for="partner in partners" :key="partner.name">
                <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-cream">
                  <img v-if="partner.image" :src="partner.image" :alt="partner.name" class="h-16 w-16 object-contain" />
                  <span v-else class="text-3xl text-dark/35">•••</span>
                </div>

                <p class="mt-4 text-xs font-black leading-snug text-dark">
                  {{ partner.name }}
                </p>
              </div>
            </div>
          </article>

          <!-- CTA -->
          <article
            class="reveal overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-secondary p-8 text-white shadow-2xl shadow-primary/20">
            <p class="text-xs font-black uppercase tracking-[0.2em] text-white/80">
              Join The Movement
            </p>

            <h3 class="mt-3 font-display text-4xl font-black leading-tight">
              Become Part of the Change.
            </h3>

            <p class="mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
              Whether you choose to volunteer, partner, donate or amplify our work,
              your support helps create opportunities for girls and women to thrive.
            </p>

            <div class="mt-8 grid gap-4 md:grid-cols-3">
              <div v-for="action in actions" :key="action.title" class="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <div class="flex h-16 w-16 items-center justify-center rounded-2xl" :class="action.bg">
                  <component :is="action.icon" class="h-8 w-8" :class="action.color" />
                </div>

                <h4 class="mt-4 text-lg font-black">
                  {{ action.title }}
                </h4>

                <p class="mt-2 text-sm leading-relaxed text-white/75">
                  {{ action.text }}
                </p>

                <RouterLink :to="action.link" class="mt-4 inline-flex text-sm font-bold text-white">
                  {{ action.cta }} →
                </RouterLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

  </DefaultLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import gsap from 'gsap'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { Eye, Target, Gem, Heart, Landmark, Megaphone } from 'lucide-vue-next'
import HeroSlider from '@/components/HeroSlider.vue'
import CoreValuesSection from '@/components/CoreValuesSection.vue'

import {
  Users,
  MapPinned,
  Handshake,
  CalendarDays,
  HeartHandshake,
  CircleDollarSign,
  HandHelping,
} from 'lucide-vue-next'

useSeoMeta({
  title: 'WeSupportHer | Empowering Women and Girls',
  description:
    'WeSupportHer advances gender equity through health, leadership, advocacy, and community-driven action.',
  ogTitle: 'WeSupportHer',
  ogDescription: 'Empowering women and girls to thrive.',
  ogImage: '/seo/home-thumbnail.jpg',
})

const impactAreas = [
  {
    number: '01',
    title: 'Health & Wellbeing',
    subtitle: 'RedBubble & MenoWise',
    tag: 'Health',
    image: new URL('@/assets/images/core (1).JPG', import.meta.url).href,
    description:
      'Supporting girls and women through menstrual health education, menopause awareness, hygiene support, and wellbeing initiatives.',
    textColor: 'text-pink-600',
    softBg: 'bg-pink-100',
    badgeBg: 'bg-pink-600',
    lineBg: 'bg-pink-600',
    border: 'border-pink-200',
    button: 'border-pink-500 text-pink-600 hover:bg-pink-600',
  },
  {
    number: '02',
    title: 'Leadership & Governance',
    subtitle: 'SheRepresents',
    tag: 'Leadership',
    image: new URL('@/assets/images/core (2).JPG', import.meta.url).href,
    description:
      'Promoting women’s participation in politics, governance, leadership, and decision-making for a more inclusive society.',
    textColor: 'text-primary',
    softBg: 'bg-soft-purple',
    badgeBg: 'bg-primary',
    lineBg: 'bg-primary',
    border: 'border-purple-200',
    button: 'border-primary text-primary hover:bg-primary',
  },
  {
    number: '03',
    title: 'Advocacy & Storytelling',
    subtitle: 'WeSupportHer Platform',
    tag: 'Advocacy',
    image: new URL('@/assets/images/core (3).JPG', import.meta.url).href,
    description:
      'Amplifying voices, celebrating achievements, raising awareness, and driving conversations around issues affecting women and girls.',
    textColor: 'text-accent',
    softBg: 'bg-soft-green',
    badgeBg: 'bg-accent',
    lineBg: 'bg-accent',
    border: 'border-green-200',
    button: 'border-accent text-accent hover:bg-accent',
  },
]

const initiatives = [
  {
    title: 'RedBubble',
    tag: 'Menstrual Health & Hygiene',
    image: new URL('@/assets/images/red-bubble.png', import.meta.url).href,
    accent: 'text-pink-600',
    border: 'border-pink-200',
    button: 'border-pink-500 text-pink-600 hover:bg-pink-600',
    points: ['Period Poverty Intervention', 'School Outreach', 'Pad Distribution', 'Menstrual Education'],
  },
  {
    title: 'MenoWise',
    tag: 'Menopause Awareness & Support',
    image: new URL('@/assets/images/woman.png', import.meta.url).href,
    accent: 'text-primary',
    border: 'border-purple-200',
    button: 'border-primary text-primary hover:bg-primary',
    points: ['Awareness Campaigns', 'Support Networks', 'Workplace Conversations', 'Educational Resources'],
  },
  {
    title: 'SheRepresents',
    tag: 'Women in Politics & Leadership',
    image: new URL('@/assets/images/preach.png', import.meta.url).href,
    accent: 'text-accent',
    border: 'border-green-200',
    button: 'border-accent text-accent hover:bg-accent',
    points: ['Leadership Training', 'Advocacy', 'Mentorship', 'Governance Inclusion'],
  },
]

const impactStats = [
  {
    icon: Users,
    value: '2,000+',
    label: 'Girls Reached',
    color: 'text-primary',
    bg: 'bg-soft-purple',
  },
  {
    icon: MapPinned,
    value: '5+',
    label: 'Communities',
    color: 'text-secondary',
    bg: 'bg-soft-orange',
  },
  {
    icon: Megaphone,
    value: '9+',
    label: 'Campaigns',
    color: 'text-accent',
    bg: 'bg-soft-green',
  },
  {
    icon: Handshake,
    value: '4+',
    label: 'Partners',
    color: 'text-primary',
    bg: 'bg-soft-purple',
  },
]

const events = [
  {
    icon: CalendarDays,
    title: 'World Menstrual Hygiene Day',
    date: 'May 28',
    text: 'Global observance and community outreach.',
    bg: 'bg-pink-100',
    color: 'text-pink-600',
  },
  {
    icon: Users,
    title: 'Leadership Roundtable',
    date: 'June 2025',
    text: 'Empowering women to lead and influence.',
    bg: 'bg-soft-purple',
    color: 'text-primary',
  },
  {
    icon: HeartHandshake,
    title: 'Community Outreach Program',
    date: 'Ongoing',
    text: 'Reaching communities with support & education.',
    bg: 'bg-soft-green',
    color: 'text-accent',
  },
]

const partners = [
  {
    name: 'Federal Ministry of Women Affairs',
    image: new URL('@/assets/images/partner-1.png', import.meta.url).href,
  },
  {
    name: 'Flow With Pride',
    image: new URL('@/assets/images/partner-2.png', import.meta.url).href,
  },
  {
    name: 'More Partners Coming Soon',
    image: '',
  },
]

const actions = [
  {
    icon: HandHelping,
    title: 'Volunteer',
    text: 'Give your time and skills to create change.',
    cta: 'Get Involved',
    link: '/get-involved',
    bg: 'bg-soft-purple',
    color: 'text-primary',
  },
  {
    icon: Handshake,
    title: 'Partner',
    text: 'Collaborate with us to drive greater impact.',
    cta: 'Partner With Us',
    link: '/get-involved',
    bg: 'bg-soft-orange',
    color: 'text-secondary',
  },
  {
    icon: CircleDollarSign,
    title: 'Donate',
    text: 'Your support helps us transform lives.',
    cta: 'Donate Now',
    link: '/get-involved',
    bg: 'bg-soft-green',
    color: 'text-accent',
  },
]

onMounted(() => {
  gsap.from('.reveal', {
    y: 40,
    opacity: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: 'power3.out',
  })
})
</script>