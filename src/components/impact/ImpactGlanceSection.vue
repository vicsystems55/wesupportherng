<template>
  <section id="impact-glance" class="relative overflow-hidden bg-cream py-24">
    <div class="absolute -left-32 top-20 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>
    <div class="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-5">
      <div class="mx-auto max-w-3xl text-center reveal">
        <span class="inline-flex rounded-full bg-soft-orange px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
          Impact at a Glance
        </span>

        <h2 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
          Measuring progress through
          <span class="text-secondary">real community action.</span>
        </h2>

        <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
          Our impact is reflected in the girls reached, communities engaged,
          schools visited, products distributed, and partnerships established.
        </p>

        <div class="mx-auto mt-5 flex w-32 items-center justify-center gap-2">
          <span class="h-1 w-10 rounded-full bg-primary"></span>
          <span class="h-1 w-10 rounded-full bg-secondary"></span>
          <span class="h-1 w-10 rounded-full bg-accent"></span>
        </div>
      </div>

      <div class="mt-16 grid gap-8 lg:grid-cols-[360px_1fr]">
        <!-- Left Portrait -->
        <div class="reveal">
          <div class="group relative overflow-hidden rounded-[2rem] shadow-xl shadow-black/10 lg:sticky lg:top-28">
            <img
              src="@/assets/images/impact1.jpg"
              alt="Women empowered through WeSupportHer"
              class="h-[420px] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0 lg:h-[640px]"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/10 to-transparent"></div>

            <div class="absolute bottom-8 left-8 right-8">
              <span class="inline-flex rounded-full bg-secondary px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                Real Impact
              </span>

              <h3 class="mt-4 text-2xl font-black leading-tight text-white">
                Every outreach creates another story of dignity.
              </h3>
            </div>
          </div>
        </div>

        <!-- Stats + Story -->
        <div>
          <div class="grid gap-6 md:grid-cols-2">
            <article
              v-for="item in stats"
              :key="item.label"
              class="reveal rounded-3xl border bg-white p-7 shadow-md shadow-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              :class="item.border"
            >
              <div
                class="flex h-16 w-16 items-center justify-center rounded-2xl"
                :class="item.bg"
              >
                <component :is="item.icon" class="h-8 w-8" :class="item.color" />
              </div>

              <h3 class="mt-6 font-display text-4xl font-black" :class="item.color">
                {{ item.value }}
              </h3>

              <p class="mt-2 text-sm font-black uppercase tracking-wide text-dark/60">
                {{ item.label }}
              </p>

              <p class="mt-4 text-sm leading-relaxed text-dark/65">
                {{ item.text }}
              </p>
            </article>
          </div>

          <!-- Bottom Story Card -->
          <div class="reveal mt-8 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-xl shadow-black/5">
            <div class="grid md:grid-cols-[240px_1fr]">
              <img
                src="@/assets/images/impact2.jpg"
                alt="Community outreach"
                class="h-72 w-full object-cover grayscale md:h-full"
              />

              <div class="flex flex-col justify-center p-8">
                <span class="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                  Community Transformation
                </span>

                <h3 class="mt-4 font-display text-3xl font-black leading-tight text-dark">
                  Behind every number is a person, a school, and a community.
                </h3>

                <p class="mt-5 text-base leading-relaxed text-dark/70">
                  Through education, advocacy, partnerships and leadership
                  development, WeSupportHer continues to create pathways for
                  girls and women to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Impact Note -->
      <div class="reveal mt-14 overflow-hidden rounded-[2rem] bg-gradient-to-r from-secondary via-secondary to-primary p-8 text-white shadow-2xl shadow-secondary/20">
        <div class="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.2em] text-white/80">
              Impact Note
            </p>

            <h3 class="mt-3 font-display text-3xl font-black leading-tight md:text-4xl">
              Behind every number is a girl, a woman, a school, a community, and a story of dignity.
            </h3>
          </div>

          <div class="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
            <p class="text-sm leading-relaxed text-white/85">
              As WSH grows, this section can be updated with verified programme
              data including girls reached, sanitary products distributed,
              schools visited and partnerships established.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  UsersRound,
  PackageCheck,
  School,
  Handshake,
} from 'lucide-vue-next'

const stats = [
  {
    value: '2,000+',
    label: 'Girls Reached',
    text: 'Girls impacted through education, outreach and support programmes.',
    icon: UsersRound,
    color: 'text-primary',
    bg: 'bg-soft-purple',
    border: 'border-primary/15',
  },
  {
    value: '—',
    label: 'Products Distributed',
    text: 'Sanitary and hygiene products provided through community interventions.',
    icon: PackageCheck,
    color: 'text-secondary',
    bg: 'bg-soft-orange',
    border: 'border-secondary/15',
  },
  {
    value: '—',
    label: 'Schools Visited',
    text: 'Schools engaged through awareness sessions and outreach programmes.',
    icon: School,
    color: 'text-accent',
    bg: 'bg-soft-green',
    border: 'border-accent/15',
  },
  {
    value: '2+',
    label: 'Partnerships',
    text: 'Collaborations supporting advocacy, outreach and programme delivery.',
    icon: Handshake,
    color: 'text-primary',
    bg: 'bg-soft-purple',
    border: 'border-primary/15',
  },
]
</script>