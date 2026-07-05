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
  <img
    src="@/assets/images/leaves.png"
    class="absolute left-0 top-10 w-56 opacity-10"
    alt=""
  />

  <img
    src="@/assets/images/leaves.png"
    class="absolute right-0 bottom-0 w-72 rotate-180 opacity-10"
    alt=""
  />

  <div class="relative mx-auto max-w-7xl px-5">

    <!-- Heading -->
    <div class="mx-auto max-w-3xl text-center reveal">

      <span
        class="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-secondary">
        About WeSupportHer
      </span>

      <h2
        class="mt-6 font-display text-4xl font-bold leading-tight text-dark md:text-5xl">
        Building a Future where
        <span class="text-secondary">
          Every Woman and Girl
        </span>
        Can Thrive.
      </h2>

      <p
        class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
        WeSupportHer (WSH) is a women-led nonprofit committed to advancing
        gender equality through education, advocacy, leadership development,
        health awareness and strategic partnerships that empower women and
        girls to reach their full potential.
      </p>

    </div>

    <!-- Vision + Mission -->
    <div
      class="mt-16 grid gap-8 lg:grid-cols-2">

      <!-- Vision -->
      <div
        class="group rounded-3xl border border-primary/10 bg-white p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

        <div
          class="flex h-20 w-20 items-center justify-center rounded-2xl bg-soft-purple">

          <Eye class="h-10 w-10 text-primary"/>

        </div>

        <h3
          class="mt-8 text-3xl font-bold text-primary">
          Our Vision
        </h3>

        <p
          class="mt-5 text-base leading-relaxed text-dark/75">
          A world where every girl and woman enjoys equal rights,
          opportunities, dignity, leadership, and meaningful representation.
        </p>

      </div>

      <!-- Mission -->
      <div
        class="group rounded-3xl border border-secondary/10 bg-white p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

        <div
          class="flex h-20 w-20 items-center justify-center rounded-2xl bg-soft-orange">

          <Target class="h-10 w-10 text-secondary"/>

        </div>

        <h3
          class="mt-8 text-3xl font-bold text-secondary">
          Our Mission
        </h3>

        <p
          class="mt-5 text-base leading-relaxed text-dark/75">
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
<section class="relative overflow-hidden bg-white py-24">
  <!-- Background accents -->
  <img
    src="@/assets/images/leaves.png"
    alt=""
    class="pointer-events-none absolute -right-20 bottom-20 w-72 rotate-180 opacity-10"
  />

  <div class="absolute left-0 top-0 h-72 w-72 rounded-full bg-soft-purple/50 blur-3xl"></div>
  <div class="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-soft-green/50 blur-3xl"></div>

  <div class="relative z-10 mx-auto max-w-7xl px-5">
    <!-- Heading -->
    <div class="mx-auto max-w-3xl text-center reveal">
      <span class="inline-flex rounded-full bg-soft-purple px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-primary">
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
      <div
        v-for="area in impactAreas"
        :key="area.title"
        class="revea group overflow-hidden rounded-3xl border bg-white shadow-md shadow-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        :class="area.border"
      >
        <!-- Image -->
        <div class="relative h-56 overflow-hidden">
          <img
            :src="area.image"
            :alt="area.title"
            class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-dark/55 via-dark/10 to-transparent"></div>

          <div
            class="absolute bottom-4 left-5 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide text-white"
            :class="area.badgeBg"
          >
            {{ area.tag }}
          </div>
        </div>

        <!-- Content -->
        <div class="p-7">
          <div class="mb-4 flex items-center justify-between">
            <div class="h-1 w-14 rounded-full" :class="area.lineBg"></div>

            <span
              class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black"
              :class="[area.softBg, area.textColor]"
            >
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

          <RouterLink
            to="/our-initiatives"
            class="mt-6 inline-flex rounded-lg border px-5 py-2 text-sm font-bold transition hover:text-white"
            :class="area.button"
          >
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
<section class="relative overflow-hidden bg-white py-24">
  <!-- Background Decoration -->
  <img
    src="@/assets/images/leaves.png"
    alt=""
    class="pointer-events-none absolute -left-16 top-10 w-64 opacity-10"
  />

  <img
    src="@/assets/images/leaves.png"
    alt=""
    class="pointer-events-none absolute -right-16 bottom-10 w-72 rotate-180 opacity-10"
  />

  <div class="absolute left-0 top-0 h-72 w-72 rounded-full bg-soft-purple/50 blur-3xl"></div>
  <div class="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-soft-orange/50 blur-3xl"></div>

  <div class="relative z-10 mx-auto max-w-7xl px-5">

    <!-- Heading -->
    <div class="mx-auto max-w-3xl text-center reveal">

      <span
        class="inline-flex rounded-full bg-soft-orange px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
        Our Key Initiatives
      </span>

      <h2
        class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
        Creating
        <span class="text-secondary">Impact</span>,
        Changing Lives.
      </h2>

      <p
        class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
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

      <div
        v-for="item in initiatives"
        :key="item.title"
        class="revea group overflow-hidden rounded-3xl border bg-white shadow-md shadow-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        :class="item.border"
      >

        <!-- Illustration Area -->
        <div class="relative flex justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 p-8">

          <img
            src="@/assets/images/leaves.png"
            class="absolute right-0 top-1/2 w-40 -translate-y-1/2 opacity-10 transition duration-500 group-hover:scale-110"
          />

          <img
            :src="item.image"
            :alt="item.title"
            class="relative z-10 h-56 object-contain transition duration-500 group-hover:scale-105"
          />

          <!-- Icon Badge -->
          <div
            class="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg"
            :class="item.iconBg"
          >
            <component
              :is="item.icon"
              class="h-7 w-7"
              :class="item.accent"
            />
          </div>

        </div>

        <!-- Content -->
        <div class="p-8">

          <div
            class="mb-5 h-1 w-14 rounded-full"
            :class="item.lineBg"
          ></div>

          <h3
            class="text-3xl font-black"
            :class="item.accent"
          >
            {{ item.title }}
          </h3>

          <p class="mt-2 text-sm font-bold text-dark/60">
            {{ item.tag }}
          </p>

          <ul
            class="mt-5 space-y-3 text-sm leading-relaxed text-dark/70">

            <li
              v-for="point in item.points"
              :key="point"
              class="flex gap-3"
            >
              <span
                class="mt-[7px] h-2 w-2 rounded-full"
                :class="item.dot"
              ></span>

              <span>{{ point }}</span>

            </li>

          </ul>

          <RouterLink
            to="/our-initiatives"
            class="mt-8 inline-flex rounded-xl border px-5 py-3 text-sm font-bold transition hover:text-white"
            :class="item.button"
          >
            Learn More →
          </RouterLink>

        </div>

      </div>

    </div>

  </div>
</section>

    <!-- IMPACT / FOUNDER / EVENTS / CTA SECTION -->
    <section class="relative overflow-hidden bg-cream px-4 pb-24 pt-8 sm:px-5">
      <div class="mx-auto max-w-7xl">
        <!-- Impact Stats -->
        <div
          class="reveal rounded-2xl bg-gradient-to-r from-secondary via-primary to-primary px-6 py-6 text-white shadow-lg">
          <p class="text-center text-sm font-black uppercase tracking-wide">
            Creating Real Change
          </p>

          <div class="mt-4 grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="stat in impactStats" :key="stat.label" class="lg:border-r lg:border-white/20 last:border-r-0">
              <div class="text-3xl">{{ stat.icon }}</div>
              <h3 class="mt-2 text-3xl font-black">{{ stat.value }}</h3>
              <p class="text-sm font-medium text-white/85">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- Founder + Events -->
        <div class="mt-8 grid gap-8 lg:grid-cols-[1fr_1.35fr]">
          <div class="reveal rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div class="grid gap-6 sm:grid-cols-[170px_1fr]">
              <img src="@/assets/images/founder.jpeg" alt="Founder" class="mx-auto h-60 w-50 rounded-full object-cover" />

              <div>
                <p class="text-sm font-black uppercase text-secondary">
                  A Message From Our Founder
                </p>

                <div class="mt-5 flex gap-4">
                  <span class="text-5xl font-black leading-none text-secondary">“</span>

                  <div>
                    <p class="text-sm italic leading-relaxed text-dark/80">
                      WSH was founded from a simple but powerful belief: when girls
                      and women are empowered to thrive, entire communities prosper.
                    </p>

                    <p class="mt-4 text-sm font-black text-dark">– Toyin Bashir</p>
                    <p class="text-sm text-dark/70">Founder / CEO, WeSupportHer</p>

                    <RouterLink to="/about-us"
                      class="mt-5 inline-flex rounded-lg bg-secondary px-5 py-3 text-sm font-bold text-white transition hover:bg-primary">
                      Read Full Message →
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="reveal">
            <div class="mb-5 flex items-center justify-between">
              <h3 class="text-lg font-black uppercase text-secondary">
                Events & Campaigns
              </h3>

              <RouterLink to="/news-events" class="text-sm font-bold text-secondary">
                See All →
              </RouterLink>
            </div>

            <div class="grid gap-5 md:grid-cols-3">
              <div v-for="event in events" :key="event.title"
                class="rounded-2xl border border-black/10 bg-white p-6 text-center shadow-sm">
                <div class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full text-2xl"
                  :class="event.bg">
                  {{ event.icon }}
                </div>

                <h4 class="text-base font-black leading-snug text-dark">
                  {{ event.title }}
                </h4>

                <p class="mt-4 text-sm font-bold" :class="event.color">
                  {{ event.date }}
                </p>

                <p class="mt-3 text-sm leading-relaxed text-dark/65">
                  {{ event.text }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Partners + Join Movement -->
        <div class="mt-8 grid gap-8 lg:grid-cols-[1fr_1.35fr]">
          <div class="reveal rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-black uppercase text-dark">
              Our Partners
            </h3>

            <div class="mt-8 grid grid-cols-3 gap-6 text-center">
              <div v-for="partner in partners" :key="partner.name">
                <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cream">
                  <img v-if="partner.image" :src="partner.image" :alt="partner.name" class="h-16 w-16 object-contain" />
                  <span v-else class="text-3xl text-dark/40">•••</span>
                </div>

                <p class="mt-4 text-sm font-black leading-snug text-dark">
                  {{ partner.name }}
                </p>
              </div>
            </div>
          </div>

          <div class="reveal rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-black uppercase text-secondary">
              Join The Movement
            </h3>

            <div class="mt-5 grid gap-5 md:grid-cols-3">
              <div v-for="action in actions" :key="action.title" class="rounded-2xl p-6 text-center"
                :class="action.bg">
                <div class="text-4xl">{{ action.icon }}</div>

                <h4 class="mt-4 text-lg font-black" :class="action.color">
                  {{ action.title }}
                </h4>

                <p class="mt-2 text-sm leading-relaxed text-dark/65">
                  {{ action.text }}
                </p>

                <RouterLink :to="action.link" class="mt-4 inline-flex text-sm font-bold" :class="action.color">
                  {{ action.cta }} →
                </RouterLink>
              </div>
            </div>
          </div>
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
  { icon: '👥', value: '2,000+', label: 'Girls Reached' },
  { icon: '📍', value: '100+', label: 'Communities Engaged' },
  { icon: '📣', value: '20+', label: 'Campaigns Delivered' },
  { icon: '🤝', value: '10+', label: 'Strategic Partnerships' },
]

const events = [
  {
    icon: '📅',
    title: 'World Menstrual Hygiene Day',
    date: 'May 28',
    text: 'Global observance and community outreach.',
    bg: 'bg-pink-100',
    color: 'text-pink-600',
  },
  {
    icon: '👥',
    title: 'Leadership Roundtable',
    date: 'June 2025',
    text: 'Empowering women to lead and influence.',
    bg: 'bg-soft-purple',
    color: 'text-primary',
  },
  {
    icon: '🤲',
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
    icon: '🙌',
    title: 'Volunteer',
    text: 'Give your time and skills to create change.',
    cta: 'Get Involved',
    link: '/get-involved',
    bg: 'bg-soft-purple',
    color: 'text-primary',
  },
  {
    icon: '👥',
    title: 'Partner',
    text: 'Collaborate with us to drive greater impact.',
    cta: 'Partner With Us',
    link: '/get-involved',
    bg: 'bg-soft-orange',
    color: 'text-secondary',
  },
  {
    icon: '💚',
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