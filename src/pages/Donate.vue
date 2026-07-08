<template>
  <DefaultLayout>
    <main class="relative overflow-hidden bg-cream px-5 py-24">
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto max-w-3xl text-center">
          <span class="inline-flex rounded-full bg-soft-orange px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
            Donate Now
          </span>

          <h1 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-6xl">
            Support programmes that help
            <span class="text-secondary">women and girls thrive.</span>
          </h1>

          <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
            Your donation supports WSH’s work in menstrual health, menopause awareness,
            women’s leadership, advocacy and community outreach.
          </p>
        </div>

        <div class="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <!-- Donation Projects -->
          <div class="space-y-6">
            <article
              v-for="project in projects"
              :key="project.title"
              class="rounded-[2rem] border bg-white p-7 shadow-xl shadow-black/5"
              :class="project.border"
            >
              <div class="flex items-start gap-5">
                <div
                  class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
                  :class="project.bg"
                >
                  <component :is="project.icon" class="h-8 w-8" :class="project.color" />
                </div>

                <div>
                  <h2 class="text-2xl font-black" :class="project.color">
                    {{ project.title }}
                  </h2>

                  <p class="mt-3 text-sm leading-relaxed text-dark/70">
                    {{ project.text }}
                  </p>

                  <ul class="mt-5 space-y-2 text-sm text-dark/70">
                    <li v-for="item in project.items" :key="item" class="flex gap-2">
                      <span :class="project.color">●</span>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <!-- Donation Box -->
          <div class="rounded-[2rem] bg-white p-8 shadow-2xl shadow-black/10">
            <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">
              Choose Payment Method
            </p>

            <h2 class="mt-3 font-display text-3xl font-black text-dark">
              Make a Donation
            </h2>

            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <button
                v-for="amount in amounts"
                :key="amount"
                type="button"
                class="rounded-2xl border border-secondary/20 bg-soft-orange px-5 py-4 text-lg font-black text-secondary transition hover:bg-secondary hover:text-white"
              >
                {{ amount }}
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter custom amount"
              class="mt-5 w-full rounded-2xl border border-black/10 bg-cream px-5 py-4 text-sm outline-none focus:border-secondary focus:bg-white"
            />

            <div class="mt-8 rounded-3xl border border-secondary/15 bg-soft-orange p-6">
              <h3 class="text-lg font-black text-secondary">
                Bank Transfer
              </h3>

              <div class="mt-5 space-y-3 text-sm text-dark/75">
                <p><strong>Bank Name:</strong> Add Bank Name</p>
                <p><strong>Account Name:</strong> WeSupportHer</p>
                <p><strong>Account Number:</strong> 0000000000</p>
                <p><strong>Narration:</strong> Donation / Project Name</p>
              </div>
            </div>

            <div class="mt-6 rounded-3xl border border-primary/15 bg-soft-purple p-6">
              <h3 class="text-lg font-black text-primary">
                Pay With Card
              </h3>

              <p class="mt-2 text-sm leading-relaxed text-dark/70">
                Card payment integration can be connected using Paystack, Flutterwave,
                Stripe or your preferred payment provider.
              </p>

              <div class="mt-5 flex flex-wrap gap-3">
                <span class="rounded-lg bg-white px-4 py-2 text-sm font-black text-primary shadow-sm">VISA</span>
                <span class="rounded-lg bg-white px-4 py-2 text-sm font-black text-secondary shadow-sm">Mastercard</span>
                <span class="rounded-lg bg-white px-4 py-2 text-sm font-black text-accent shadow-sm">Verve</span>
                <span class="rounded-lg bg-white px-4 py-2 text-sm font-black text-dark shadow-sm">Paystack</span>
              </div>

              <button
                type="button"
                class="mt-6 w-full rounded-xl bg-secondary px-6 py-4 text-sm font-black text-white transition hover:bg-primary"
              >
                Proceed to Card Payment →
              </button>
            </div>

            <p class="mt-6 text-center text-xs leading-relaxed text-dark/50">
              Donations support WSH’s thematic work in girls’ and women’s health,
              leadership, governance and advocacy.
            </p>
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
</template>

<script setup>
import { useSeoMeta } from '@unhead/vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { Droplets, Landmark } from 'lucide-vue-next'

useSeoMeta({
  title: 'Donate Now | WeSupportHer',
  description:
    'Donate to support WeSupportHer programmes for menstrual health, menopause awareness, women’s leadership and advocacy.',
  ogTitle: 'Donate Now | WeSupportHer',
  ogDescription:
    'Support WSH programmes that empower women and girls through health, dignity, advocacy and leadership.',
  ogImage: '/seo/donate-thumbnail.jpg',
})

const amounts = ['₦5,000', '₦10,000', '₦25,000', '₦50,000']

const projects = [
  {
    title: 'RedBubble Outreach Fund',
    text: 'Support menstrual health education, pad distribution, school outreach and period poverty intervention.',
    items: ['Sanitary product distribution', 'School outreach sessions', 'Menstrual health education'],
    icon: Droplets,
    color: 'text-pink-600',
    bg: 'bg-pink-100',
    border: 'border-pink-200',
  },
  {
    title: 'SheRepresents Leadership Fund',
    text: 'Support women’s participation in leadership, politics, governance and decision-making spaces.',
    items: ['Leadership training', 'Mentorship support', 'Advocacy campaigns'],
    icon: Landmark,
    color: 'text-primary',
    bg: 'bg-soft-purple',
    border: 'border-primary/15',
  },
]
</script>