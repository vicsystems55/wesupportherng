<template>
    <DefaultLayout>
        <section class="relative overflow-hidden bg-white">
            <!-- Background Hero Image -->
            <div class="absolute inset-0 z-0" aria-hidden="true">
                <img src="@/assets/images/home-hero-bg.png" alt=""
                    class="absolute right-0 top-1/2 h-full max-w-none -translate-y-1/2 object-contain" />

                <!-- Left fade for text readability -->
                <!-- <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-45% to-transparent"></div> -->

                <!-- Bottom fade -->
                <!-- <div class="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-white via-white/85 to-transparent"></div> -->
            </div>

            <!-- Content -->
            <div class="relative z-10 mx-auto max-w-7xl px-5 pb-40 pt-28 lg:pb-48 lg:pt-36">
                <div class="max-w-2xl reveal">
                    <p class="mb-4 inline-flex rounded-full bg-soft-purple px-4 py-2 text-sm font-bold text-primary">
                        Empowering Women. Uplifting Communities. Building Futures.
                    </p>

                    <h1 class="font-display text-5xl font-bold leading-tight text-dark md:text-6xl lg:text-7xl">
                        Empowering Women and Girls to
                        <span class="text-secondary">Thrive.</span>
                    </h1>

                    <p class="mt-6 text-lg leading-relaxed text-dark/75">
                        WeSupportHer is a women-led nonprofit organization committed to
                        advancing gender equity through health, leadership, advocacy,
                        and community-driven action.
                    </p>

                    <div class="mt-8 flex flex-wrap gap-4">
                        <RouterLink to="/about-us"
                            class="rounded-xl bg-secondary px-6 py-4 font-bold text-white transition hover:scale-105">
                            Learn More About Us
                        </RouterLink>

                        <RouterLink to="/impact"
                            class="rounded-xl border border-secondary px-6 py-4 font-bold text-secondary transition hover:bg-secondary hover:text-white">
                            Watch Our Impact
                        </RouterLink>
                    </div>
                </div>
            </div>

            <!-- Curvy Shape Divider -->

            <div class="pointer-events-none absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none" class="block h-[140px] w-full">
                    <!-- Main Cream Layer -->
                    <path d="M0,120V74
                    c47.79,-22.2,103.59,-32.17,158,-28
                    c70.36,5.37,136.33,33.31,206.8,37.5
                    c73.84,4.39,147.54,-16.85,218.2,-35.23
                    c69.27,-18,138.3,-24.88,209.4,-13.08
                    c36.15,6,69.85,17.84,104.45,29.34
                    c92.64,30.78,216.15,70.07,303.15,3.33
                    V120Z" fill="#FFF8EE" opacity="0.48" />

                    <!-- Purple Layer -->
                    <path d="M0,120
                    V95
                    c60,-25,120,-20,190,-5
                    c90,18,170,45,280,28
                    c120,-18,210,-65,330,-38
                    c90,20,170,60,400,10
                    V120Z" fill="#7A1F8A" opacity="0.98" />

                    <!-- Orange Layer -->
                    <path d="M0,120
                    V105
                    c90,-35,180,-15,290,8
                    c110,22,210,12,330,-15
                    c120,-28,220,-18,350,10
                    c90,18,160,12,230,-10
                    V120Z" fill="#fff8f2 " />
                </svg>
            </div>




        </section>

        <section class="relative overflow-hidden bg-cream px-5 pb-24 pt-16">
            <img src="@/assets/images/leaves.png" alt=""
                class="pointer-events-none absolute -left-16 top-16 w-64 opacity-20" />

            <img src="@/assets/images/leaves.png" alt=""
                class="pointer-events-none absolute -right-20 bottom-10 w-72 rotate-180 opacity-20" />

            <div class="relative z-10 mx-auto max-w-7xl">
                <div class="mb-12 text-center">
                    <p class="font-bold uppercase tracking-widest text-secondary">
                        Our Key Initiatives
                    </p>

                    <div class="mx-auto mt-2 h-1 w-14 rounded-full bg-secondary"></div>

                    <h2 class="mt-4 font-display text-4xl font-bold text-dark">
                        Creating Impact. Changing Lives.
                    </h2>
                </div>

                <div class="grid gap-6 lg:grid-cols-3">
                 
<article
  v-for="item in initiatives"
  :key="item.title"
  class="group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  :class="item.border"
>
  <!-- Decorative Leaves -->
  <img
    src="@/assets/images/leaves.png"
    alt=""
    class="pointer-events-none absolute right-0 top-1/2 w-32 -translate-y-1/2 opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110"
  />

  <div class="relative z-10 grid grid-cols-[140px_1fr] gap-5">
    
    <!-- Illustration -->
    <div class="flex items-center justify-center">
      <img
        :src="item.image"
        :alt="item.title"
        class="h-[180px] w-auto object-contain transition duration-300 group-hover:scale-105"
      />
    </div>

    <!-- Content -->
    <div class="pr-8">
      <h3
        class="text-3xl font-bold"
        :class="item.accent"
      >
        {{ item.title }}
      </h3>

      <p class="mt-1 text-sm font-semibold text-dark">
        {{ item.tag }}
      </p>

      <ul class="mt-4 space-y-2 text-sm text-dark/75">
        <li
          v-for="point in item.points"
          :key="point"
          class="flex gap-2"
        >
          <span :class="item.accent">•</span>
          <span>{{ point }}</span>
        </li>
      </ul>

      <RouterLink
        to="/our-initiatives"
        class="mt-5 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-bold transition hover:text-white"
        :class="item.button"
      >
        Learn More →
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

useSeoMeta({
    title: 'WeSupportHer | Empowering Women and Girls',
    description:
        'WeSupportHer advances gender equity through health, leadership, advocacy, and community-driven action.',
    ogTitle: 'WeSupportHer',
    ogDescription: 'Empowering women and girls to thrive.',
    ogImage: '/seo/home-thumbnail.jpg',
})

const initiatives = [
    {
        title: 'RedBubble',
        tag: 'Menstrual Health & Hygiene',
        image: new URL('@/assets/images/red-bubble.png', import.meta.url).href,
        accent: 'text-pink-600',
        border: 'border-pink-200',
        bg: 'from-pink-50 to-white',
        button: 'border-pink-500 text-pink-600 hover:bg-pink-600',
        points: ['Period Poverty Intervention', 'School Outreach', 'Pad Distribution', 'Menstrual Education'],
    },
    {
        title: 'MenoWise',
        tag: 'Menopause Awareness & Support',
        image: new URL('@/assets/images/woman.png', import.meta.url).href,
        accent: 'text-primary',
        border: 'border-purple-200',
        bg: 'from-purple-50 to-white',
        button: 'border-primary text-primary hover:bg-primary',
        points: ['Awareness Campaigns', 'Support Networks', 'Workplace Conversations', 'Educational Resources'],
    },
    {
        title: 'SheRepresents',
        tag: 'Women in Politics & Leadership',
        image: new URL('@/assets/images/preach.png', import.meta.url).href,
        accent: 'text-accent',
        border: 'border-green-200',
        bg: 'from-green-50 to-white',
        button: 'border-accent text-accent hover:bg-accent',
        points: ['Leadership Training', 'Advocacy', 'Mentorship', 'Governance Inclusion'],
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