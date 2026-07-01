<template>
  <DefaultLayout>
    <!-- HERO SECTION -->
    <section class="relative overflow-hidden bg-white">
      <div class="absolute inset-0 z-0 hidden md:block" aria-hidden="true">
        <img src="@/assets/images/home-hero-bg.png" alt=""
          class="absolute right-0 top-1/2 h-full max-w-none -translate-y-1/2 object-contain" />
      </div>

      <div class="relative z-10 mx-auto max-w-7xl px-4 pb-32 pt-20 sm:px-5 sm:pb-40 sm:pt-28 lg:pb-48 lg:pt-36">
        <div class="max-w-2xl reveal">
          <p
            class="mb-4 inline-flex rounded-full bg-soft-purple px-3 py-1.5 text-xs font-bold text-primary sm:px-4 sm:py-2 sm:text-sm">
            Empowering Women. Uplifting Communities. Building Futures.
          </p>

          <h1 class="font-display text-4xl font-bold leading-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering Women and Girls to
            <span class="text-secondary">Thrive.</span>
          </h1>

          <p class="mt-4 text-base leading-relaxed text-dark/75 sm:mt-6 sm:text-lg">
            WeSupportHer is a women-led nonprofit organization committed to
            advancing gender equity through health, leadership, advocacy,
            and community-driven action.
          </p>

          <div class="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            <RouterLink to="/about-us"
              class="rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-white transition hover:scale-105 sm:px-6 sm:py-4 sm:text-base">
              Learn More About Us
            </RouterLink>

            <RouterLink to="/impact"
              class="rounded-xl border border-secondary px-5 py-3 text-sm font-bold text-secondary transition hover:bg-secondary hover:text-white sm:px-6 sm:py-4 sm:text-base">
              Watch Our Impact
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="pointer-events-none absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none">
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
      </div>
    </section>

    <!-- WHO WE ARE + IMPACT AREAS SECTION -->
    <section class="relative overflow-hidden bg-cream px-4 py-20 sm:px-5">
      <img src="@/assets/images/leaves.png" alt=""
        class="pointer-events-none absolute -left-16 top-24 w-56 opacity-20" />

      <img src="@/assets/images/leaves.png" alt=""
        class="pointer-events-none absolute -right-20 bottom-20 w-72 rotate-180 opacity-20" />

      <div class="relative z-10 mx-auto max-w-7xl">
        <div class="grid gap-8 lg:grid-cols-[1.2fr_2fr]">
          <div class="reveal">
            <p class="text-xl font-black uppercase tracking-wide text-secondary">
              Who We Are
            </p>
            <div class="mt-3 h-1 w-12 rounded-full bg-secondary"></div>

            <p class="mt-6 max-w-lg text-sm font-semibold leading-relaxed text-dark/80">
              WeSupportHer (WSH) was founded in 2024 to advance gender equity by
              promoting girls’ and women’s health, amplifying their voices,
              supporting leadership, and increasing participation in governance
              and decision-making.
            </p>
          </div>

          <div class="grid gap-5 md:grid-cols-3">
            <div class="reveal rounded-2xl border border-primary/15 bg-white/80 p-7 text-center shadow-sm">
              <div class="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-soft-purple">
                <Eye class="h-10 w-10 text-primary" />
              </div>
              <h3 class="mb-4 text-sm font-black uppercase text-primary">
                Our Vision
              </h3>
              <p class="text-sm font-medium leading-relaxed text-dark/75">
                A world where every girl and woman enjoys equal rights,
                opportunities, dignity, and representation.
              </p>
            </div>

            <div class="reveal rounded-2xl border border-secondary/15 bg-white/80 p-7 text-center shadow-sm">
              <div class="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-soft-orange">
                <Target class="h-10 w-10 text-secondary" />
              </div>
              <h3 class="mb-4 text-sm font-black uppercase text-secondary">
                Our Mission
              </h3>
              <p class="text-sm font-medium leading-relaxed text-dark/75">
                To advance gender equity through advocacy, education,
                partnerships, and action.
              </p>
            </div>

            <div class="reveal rounded-2xl border border-accent/15 bg-white/80 p-7 text-center shadow-sm">
              <div class="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-soft-green">
                <Gem class="h-10 w-10 text-accent" />
              </div>
              <h3 class="mb-4 text-sm font-black uppercase text-accent">
                Our Core Values (ACCEPT)
              </h3>
              <ul class="space-y-1 text-sm font-medium leading-relaxed text-dark/75">
                <li>Accountability</li>
                <li>Commitment</li>
                <li>Community</li>

              </ul>
            </div>
          </div>
        </div>

        <div class="mt-20 text-center reveal">
          <h2 class="font-display text-3xl font-bold text-dark sm:text-4xl">
            Our Areas of Impact
          </h2>
          <p class="mt-2 text-sm font-semibold text-dark/70">
            Focused on health, leadership, representation and empowerment.
          </p>
        </div>

        <div class="mt-12 grid gap-7 lg:grid-cols-3">
          <div v-for="area in impactAreas" :key="area.title"
            class="reveal group relative min-h-[320px] overflow-hidden rounded-3xl border bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            :class="area.border">
            <div
              class="absolute -top-1 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full shadow-md"
              :class="area.iconBg">
              <component :is="area.icon" class="h-10 w-10" :class="area.textColor" />
            </div>

            <div class="relative z-10 pt-10">
              <h3 class="text-2xl font-black" :class="area.textColor">
                {{ area.title }}
              </h3>

              <p class="mt-1 text-sm font-bold" :class="area.textColor">
                {{ area.subtitle }}
              </p>

              <p class="mx-auto mt-4 max-w-xs text-sm font-medium leading-relaxed text-dark/70">
                {{ area.description }}
              </p>

              <RouterLink to="/our-initiatives"
                class="mt-5 inline-flex rounded-lg border px-5 py-2 text-sm font-bold transition hover:bg-secondary hover:text-white"
                :class="[area.button, area.border]">
                Learn More →
              </RouterLink>
            </div>

            <img src="@/assets/images/girl.png" alt=""
              class="pointer-events-none absolute bottom-0 left-0 max-h-28 w-auto object-contain" />

            <img src="@/assets/images/girl.png" alt=""
              class="pointer-events-none absolute bottom-0 right-0 max-h-28 w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>

    <!-- OUR INITIATIVES SECTION -->
    <section class="relative overflow-hidden bg-white px-4 pb-12 pt-12 sm:px-5 sm:pb-16 sm:pt-16 md:pb-24">
      <div class="relative z-10 mx-auto max-w-7xl">
        <div class="mb-8 text-center sm:mb-10 md:mb-12">
          <p class="text-xs font-bold uppercase tracking-widest text-secondary sm:text-sm">
            Our Key Initiatives
          </p>

          <div class="mx-auto mt-2 h-1 w-12 rounded-full bg-secondary sm:w-14"></div>

          <h2 class="mt-3 px-2 font-display text-2xl font-bold text-dark sm:mt-4 sm:text-3xl md:text-4xl">
            Creating Impact. Changing Lives.
          </h2>
        </div>

        <div class="grid gap-4 sm:gap-5 md:gap-6 lg:grid-cols-3">
          <div v-for="item in initiatives" :key="item.title"
            class="group relative overflow-hidden rounded-2xl border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-5 md:p-6"
            :class="item.border">
            <img src="@/assets/images/leaves.png" alt=""
              class="pointer-events-none absolute right-0 top-1/2 w-24 -translate-y-1/2 opacity-10 transition-all duration-500 group-hover:scale-110 group-hover:opacity-20 sm:w-28 md:w-32" />

            <div
              class="relative z-10 flex flex-col gap-4 sm:grid sm:grid-cols-[120px_1fr] sm:gap-5 md:grid-cols-[140px_1fr]">
              <div class="mb-2 flex items-center justify-center sm:mb-0 sm:justify-start">
                <img :src="item.image" :alt="item.title"
                  class="h-[140px] w-auto object-contain transition duration-300 group-hover:scale-105 sm:h-[160px] md:h-[180px]" />
              </div>

              <div class="sm:pr-6 md:pr-8">
                <h3 class="text-2xl font-bold sm:text-3xl" :class="item.accent">
                  {{ item.title }}
                </h3>

                <p class="mt-1 text-xs font-semibold text-dark sm:text-sm">
                  {{ item.tag }}
                </p>

                <ul class="mt-3 space-y-1.5 text-xs text-dark/75 sm:mt-4 sm:space-y-2 sm:text-sm">
                  <li v-for="point in item.points" :key="point" class="flex gap-2">
                    <span :class="item.accent" class="flex-shrink-0">•</span>
                    <span>{{ point }}</span>
                  </li>
                </ul>

                <RouterLink to="/our-initiatives"
                  class="mt-4 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition hover:text-white sm:mt-5 sm:px-4 sm:text-sm"
                  :class="item.button">
                  Learn More →
                </RouterLink>
              </div>
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
              <img src="@/assets/images/girl.png" alt="Founder" class="mx-auto h-44 w-44 rounded-full object-cover" />

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
    title: 'Health & Wellbeing',
    subtitle: 'RedBubble & MenoWise',
    description:
      'Supporting girls and women through menstrual health education, menopause awareness, hygiene support, and wellbeing initiatives.',
    icon: Heart,
    textColor: 'text-pink-600',
    iconBg: 'bg-pink-100',
    border: 'border-pink-200',
    button: 'text-pink-600 hover:border-secondary',
  },
  {
    title: 'Leadership & Governance',
    subtitle: 'SheRepresents',
    description:
      'Promoting women’s participation in politics, governance and decision-making for a more inclusive and equitable society.',
    icon: Landmark,
    textColor: 'text-primary',
    iconBg: 'bg-soft-purple',
    border: 'border-purple-200',
    button: 'text-primary hover:border-secondary',
  },
  {
    title: 'Advocacy & Storytelling',
    subtitle: 'WeSupportHer Platform',
    description:
      'Amplifying voices, celebrating achievements and raising awareness about issues affecting girls and women.',
    icon: Megaphone,
    textColor: 'text-accent',
    iconBg: 'bg-soft-green',
    border: 'border-green-200',
    button: 'text-accent hover:border-secondary',
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