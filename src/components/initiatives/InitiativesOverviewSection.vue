<template>
  <section id="initiatives" class="relative overflow-hidden bg-cream py-24">
    <div class="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
    <div class="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-5">
      <div class="mx-auto max-w-3xl text-center reveal">
        <span class="inline-flex rounded-full bg-soft-orange px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
          Three Core Initiatives
        </span>

        <h2 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
          Strategic programmes designed to
          <span class="text-secondary">meet real needs.</span>
        </h2>

        <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
          Each WSH initiative responds to a specific challenge affecting women
          and girls, from menstrual health and menopause support to leadership,
          governance and advocacy.
        </p>

        <div class="mx-auto mt-5 flex w-32 items-center justify-center gap-2">
          <span class="h-1 w-10 rounded-full bg-primary"></span>
          <span class="h-1 w-10 rounded-full bg-secondary"></span>
          <span class="h-1 w-10 rounded-full bg-accent"></span>
        </div>
      </div>

      <div class="mt-16 space-y-12">
        <article
          v-for="(item, index) in initiatives"
          :key="item.title"
          :id="item.id"
          class="reveal overflow-hidden rounded-[2rem] border bg-white shadow-xl shadow-black/5"
          :class="item.border"
        >
          <div
            class="grid items-center lg:grid-cols-2"
            :class="{ 'lg:[&>*:first-child]:order-2': index % 2 === 1 }"
          >
            <div class="relative flex min-h-[430px] items-end justify-center overflow-hidden p-8" :class="item.softBg">
              <img
                src="@/assets/images/leaves.png"
                alt=""
                class="pointer-events-none absolute -right-12 top-10 w-56 opacity-10"
              />

              <img
                :src="item.image"
                :alt="item.title"
                class="relative z-10 max-h-[360px] w-auto object-contain drop-shadow-2xl transition duration-700 hover:scale-105"
              />

              <div
                class="absolute left-8 top-8 rounded-full px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-white"
                :class="item.badgeBg"
              >
                {{ item.tag }}
              </div>
            </div>

            <div class="p-8 md:p-10">
              <div class="mb-5 h-1 w-16 rounded-full" :class="item.lineBg"></div>

              <h3 class="font-display text-4xl font-black leading-tight md:text-5xl" :class="item.textColor">
                {{ item.title }}
              </h3>

              <p class="mt-3 text-sm font-black uppercase tracking-[0.18em] text-dark/50">
                {{ item.subtitle }}
              </p>

              <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
                {{ item.description }}
              </p>

              <div class="mt-8 grid gap-4 sm:grid-cols-2">
                <div
                  v-for="focus in item.focusAreas"
                  :key="focus"
                  class="rounded-2xl border bg-white p-4 text-sm font-semibold text-dark/70"
                  :class="item.border"
                >
                  <span class="mr-2" :class="item.textColor">●</span>
                  {{ focus }}
                </div>
              </div>

              <div class="mt-8 rounded-2xl p-5" :class="item.highlightBg">
                <p class="text-sm font-black uppercase tracking-[0.18em]" :class="item.textColor">
                  Key Goal
                </p>
                <p class="mt-3 text-sm leading-relaxed text-dark/70">
                  {{ item.goal }}
                </p>
              </div>

              <RouterLink
                :to="item.link"
                class="mt-8 inline-flex rounded-xl border px-6 py-3 text-sm font-bold transition hover:text-white"
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
</template>

<script setup>
const initiatives = [
  {
    id: 'redbubble',
    title: 'RedBubble',
    subtitle: 'Menstrual Health & Hygiene',
    tag: 'Flagship Initiative',
    image: new URL('@/assets/images/red-bubble.png', import.meta.url).href,
    description:
      'RedBubble is WSH’s flagship menstrual health advocacy initiative dedicated to promoting menstrual health, hygiene education and dignity. It addresses period poverty, breaks stigma and supports girls and women with accurate information and essential hygiene products.',
    focusAreas: [
      'Menstrual health and hygiene education',
      'Period poverty intervention',
      'Pad distribution and outreach',
      'Menstrual stigma reduction',
    ],
    goal:
      'To ensure that no girl misses opportunities because of her period, and that every girl can menstruate with dignity, confidence and access to support.',
    textColor: 'text-pink-600',
    softBg: 'bg-pink-50',
    highlightBg: 'bg-pink-50',
    badgeBg: 'bg-pink-600',
    lineBg: 'bg-pink-600',
    border: 'border-pink-200',
    button: 'border-pink-500 text-pink-600 hover:bg-pink-600',
    link: '/our-initiatives#redbubble',
  },
  {
    id: 'menowise',
    title: 'MenoWise',
    subtitle: 'Menopause Awareness & Support',
    tag: 'Women’s Health',
    image: new URL('@/assets/images/woman.png', import.meta.url).href,
    description:
      'MenoWise creates awareness around menopause and promotes informed conversations about women’s midlife health. The initiative provides education, resources, support conversations and safe spaces for women navigating this important life stage.',
    focusAreas: [
      'Menopause education',
      'Awareness campaigns',
      'Workplace conversations',
      'Community support and resources',
    ],
    goal:
      'To help women better understand and manage menopause with confidence, dignity, reliable information and supportive community conversations.',
    textColor: 'text-primary',
    softBg: 'bg-soft-purple',
    highlightBg: 'bg-soft-purple',
    badgeBg: 'bg-primary',
    lineBg: 'bg-primary',
    border: 'border-purple-200',
    button: 'border-primary text-primary hover:bg-primary',
    link: '/our-initiatives#menowise',
  },
  {
    id: 'sherepresents',
    title: 'SheRepresents',
    subtitle: 'Women in Leadership, Politics & Governance',
    tag: 'Leadership',
    image: new URL('@/assets/images/preach.png', import.meta.url).href,
    description:
      'SheRepresents advances women’s participation in politics, governance and public decision-making. It equips women with knowledge, confidence, mentorship and advocacy support needed to step into leadership and influence policy processes.',
    focusAreas: [
      'Leadership development',
      'Political participation advocacy',
      'Mentorship and capacity building',
      'Inclusive governance campaigns',
    ],
    goal:
      'To build a future where women are fully represented in leadership and decision-making spaces, and where governance reflects the diversity of the communities it serves.',
    textColor: 'text-accent',
    softBg: 'bg-soft-green',
    highlightBg: 'bg-soft-green',
    badgeBg: 'bg-accent',
    lineBg: 'bg-accent',
    border: 'border-green-200',
    button: 'border-accent text-accent hover:bg-accent',
    link: '/our-initiatives#sherepresents',
  },
]
</script>