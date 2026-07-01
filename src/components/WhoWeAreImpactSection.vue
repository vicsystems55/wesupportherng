<template>
  <section class="relative overflow-hidden bg-cream px-5 py-20">
    <div class="mx-auto max-w-7xl">
      <!-- Who We Are Row -->
      <div class="grid gap-8 lg:grid-cols-[1.2fr_2fr]">
        <div class="reveal">
          <SectionLabel title="Who We Are" />

          <p class="mt-6 max-w-lg text-sm font-semibold leading-relaxed text-dark/80">
            WeSupportHer (WSH) was founded in 2024 to advance gender equity by
            promoting girls’ and women’s health, amplifying their voices,
            supporting leadership, and increasing participation in governance
            and decision-making.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <InfoCard
            icon="eye"
            title="Our Vision"
            color="purple"
            text="A world where every girl and woman enjoys equal rights, opportunities, dignity, and representation."
          />

          <InfoCard
            icon="target"
            title="Our Mission"
            color="orange"
            text="To advance gender equity through advocacy, education, partnerships, and action."
          />

          <InfoCard
            icon="diamond"
            title="Our Core Values (ACCEPT)"
            color="green"
          >
            <ul class="space-y-1 text-sm font-medium leading-relaxed text-dark/75">
              <li>Accountability</li>
              <li>Commitment</li>
              <li>Community</li>
              <li>Empathy</li>
              <li>Partnership</li>
              <li>Transparency</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      <!-- Areas of Impact -->
      <div class="mt-20 text-center reveal">
        <h2 class="font-display text-4xl font-bold text-dark">
          Our Areas of Impact
        </h2>
        <p class="mt-2 text-sm font-semibold text-dark/70">
          Focused on health, leadership, representation and empowerment.
        </p>
      </div>

      <div class="mt-12 grid gap-7 lg:grid-cols-3">
        <ImpactCard
          title="Health & Wellbeing"
          subtitle="RedBubble & MenoWise"
          color="pink"
          icon="heart"
          text="Supporting girls and women through menstrual health education, menopause awareness, hygiene support, and wellbeing initiatives."
          image="/src/assets/images/girl.png"
        />

        <ImpactCard
          title="Leadership & Governance"
          subtitle="SheRepresents"
          color="purple"
          icon="building"
          text="Promoting women’s participation in politics, governance and decision-making for a more inclusive and equitable society."
          image="/src/assets/images/girl.png"
        />

        <ImpactCard
          title="Advocacy & Storytelling"
          subtitle="WeSupportHer Platform"
          color="green"
          icon="megaphone"
          text="Amplifying voices, celebrating achievements and raising awareness about issues affecting girls and women."
          image="/src/assets/images/girl.png"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Eye,
  Target,
  Gem,
  Heart,
  Landmark,
  Megaphone,
} from 'lucide-vue-next'

const iconMap = {
  eye: Eye,
  target: Target,
  diamond: Gem,
  heart: Heart,
  building: Landmark,
  megaphone: Megaphone,
}

const colorMap = {
  purple: {
    text: 'text-primary',
    bg: 'bg-soft-purple',
    border: 'border-primary/15',
    iconBg: 'bg-primary/15',
  },
  orange: {
    text: 'text-secondary',
    bg: 'bg-soft-orange',
    border: 'border-secondary/15',
    iconBg: 'bg-secondary/15',
  },
  green: {
    text: 'text-accent',
    bg: 'bg-soft-green',
    border: 'border-accent/15',
    iconBg: 'bg-accent/15',
  },
  pink: {
    text: 'text-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    iconBg: 'bg-pink-100',
  },
}

const SectionLabel = {
  props: ['title'],
  template: `
    <div>
      <h3 class="text-xl font-black uppercase tracking-wide text-secondary">
        {{ title }}
      </h3>
      <div class="mt-3 h-1 w-10 rounded-full bg-secondary"></div>
    </div>
  `,
}

const InfoCard = {
  props: ['icon', 'title', 'text', 'color'],
  components: iconMap,
  computed: {
    theme() {
      return colorMap[this.color]
    },
    IconComponent() {
      return iconMap[this.icon]
    },
  },
  template: `
    <div
      class="reveal rounded-2xl border bg-white/80 p-8 text-center shadow-sm backdrop-blur"
      :class="theme.border"
    >
      <div
        class="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full"
        :class="theme.iconBg"
      >
        <component :is="IconComponent" class="h-10 w-10" :class="theme.text" />
      </div>

      <h4 class="mb-4 text-sm font-black uppercase" :class="theme.text">
        {{ title }}
      </h4>

      <p v-if="text" class="text-sm font-medium leading-relaxed text-dark/75">
        {{ text }}
      </p>

      <slot />
    </div>
  `,
}

const ImpactCard = {
  props: ['title', 'subtitle', 'text', 'icon', 'color', 'image'],
  components: iconMap,
  computed: {
    theme() {
      return colorMap[this.color]
    },
    IconComponent() {
      return iconMap[this.icon]
    },
  },
  template: `
    <div
      class="reveal group relative min-h-[300px] overflow-hidden rounded-3xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
      :class="theme.border"
    >
      <div
        class="absolute -bottom-2 -right-3 h-40 w-40 rounded-full opacity-70 blur-2xl"
        :class="theme.bg"
      ></div>

      <div
        class="absolute -top-8 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full shadow-md"
        :class="theme.iconBg"
      >
        <component :is="IconComponent" class="h-10 w-10" :class="theme.text" />
      </div>

      <div class="relative z-10 pt-10 text-center">
        <h3 class="text-2xl font-black" :class="theme.text">
          {{ title }}
        </h3>
        <p class="mt-1 text-sm font-bold" :class="theme.text">
          {{ subtitle }}
        </p>

        <p class="mx-auto mt-4 max-w-xs text-sm font-medium leading-relaxed text-dark/70">
          {{ text }}
        </p>

        <RouterLink
          to="/our-initiatives"
          class="mt-5 inline-flex rounded-lg border px-5 py-2 text-sm font-bold transition hover:bg-secondary hover:text-white"
          :class="[theme.text, theme.border]"
        >
          Learn More →
        </RouterLink>
      </div>

      <img
        :src="image"
        alt=""
        class="pointer-events-none absolute bottom-0 left-0 max-h-28 w-auto object-contain"
      />

      <img
        :src="image"
        alt=""
        class="pointer-events-none absolute bottom-0 right-0 max-h-28 w-auto object-contain"
      />
    </div>
  `,
}
</script>