<template>
  <DefaultLayout>
    <main class="relative overflow-hidden bg-cream">
      <div class="absolute -left-32 top-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"></div>
      <div class="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>

      <div class="relative z-10 mx-auto max-w-7xl px-5 py-24">
        <div class="mx-auto max-w-3xl text-center reveal">
          <span class="inline-flex rounded-full bg-soft-orange px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
            Contact Us
          </span>

          <h1 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-6xl">
            Let’s connect and build
            <span class="text-secondary">lasting impact.</span>
          </h1>

          <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
            Reach out to WeSupportHer for enquiries, partnerships, volunteering,
            sponsorships, or programme support.
          </p>

          <div class="mx-auto mt-5 flex w-32 items-center justify-center gap-2">
            <span class="h-1 w-10 rounded-full bg-primary"></span>
            <span class="h-1 w-10 rounded-full bg-secondary"></span>
            <span class="h-1 w-10 rounded-full bg-accent"></span>
          </div>
        </div>

        <div class="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <!-- Contact Details -->
          <div class="reveal rounded-[2rem] bg-white p-8 shadow-xl shadow-black/5">
            <h2 class="font-display text-3xl font-black text-dark">
              Get in Touch
            </h2>

            <p class="mt-3 text-sm leading-relaxed text-dark/65">
              We would love to hear from you. Use any of the contact details
              below or send us a quick message.
            </p>

            <div class="mt-8 space-y-5">
              <a
                v-for="item in contactDetails"
                :key="item.title"
                :href="item.href"
                class="group flex gap-5 rounded-2xl border border-black/5 bg-cream p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <div
                  class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                  :class="item.bg"
                >
                  <component :is="item.icon" class="h-7 w-7" :class="item.color" />
                </div>

                <div>
                  <p class="text-xs font-black uppercase tracking-[0.18em] text-dark/45">
                    {{ item.title }}
                  </p>

                  <p class="mt-1 text-base font-black leading-snug text-dark">
                    {{ item.value }}
                  </p>
                </div>
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <form class="reveal rounded-[2rem] bg-white p-8 shadow-xl shadow-black/5">
            <h2 class="font-display text-3xl font-black text-dark">
              Send a Message
            </h2>

            <div class="mt-8 grid gap-5">
              <input
                type="text"
                placeholder="Full Name"
                class="rounded-2xl border border-black/10 px-5 py-4 text-sm outline-none transition focus:border-secondary"
              />

              <input
                type="email"
                placeholder="Email Address"
                class="rounded-2xl border border-black/10 px-5 py-4 text-sm outline-none transition focus:border-secondary"
              />

              <input
                type="text"
                placeholder="Subject"
                class="rounded-2xl border border-black/10 px-5 py-4 text-sm outline-none transition focus:border-secondary"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                class="resize-none rounded-2xl border border-black/10 px-5 py-4 text-sm outline-none transition focus:border-secondary"
              ></textarea>

              <button
                type="button"
                class="inline-flex justify-center rounded-xl bg-secondary px-7 py-4 text-sm font-bold text-white transition hover:bg-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <!-- Map -->
        <div class="reveal mt-10 overflow-hidden rounded-[2rem] bg-white p-4 shadow-xl shadow-black/5">
          <div class="mb-4 flex items-center gap-3 px-2">
            <MapPin class="h-6 w-6 text-secondary" />
            <p class="font-bold text-dark">
              No. 14 Negro Crescent, Maitama, Abuja
            </p>
          </div>

          <div class="relative h-[420px] overflow-hidden rounded-[1.5rem]">
            <iframe
              class="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=No.%2014%20Negro%20Crescent%20Maitama%20Abuja%20Wesupporther&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            ></iframe>

            <div class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
              <div class="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-xl">
                <MapPin class="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
</template>

<script setup>
import { useSeoMeta } from '@unhead/vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import {
  Phone,
  Mail,
  MapPin,
  Globe,
} from 'lucide-vue-next'

useSeoMeta({
  title: 'Contact Us | WeSupportHer',
  description:
    'Contact WeSupportHer for enquiries, partnerships, volunteering and programme support.',
  ogTitle: 'Contact Us | WeSupportHer',
  ogDescription:
    'Reach WeSupportHer by phone, email, website or visit us in Maitama, Abuja.',
  ogImage: '/seo/contact-thumbnail.jpg',
})

const contactDetails = [
  {
    title: 'Phone',
    value: '09112200110',
    href: 'tel:09112200110',
    icon: Phone,
    color: 'text-primary',
    bg: 'bg-soft-purple',
  },
  {
    title: 'Email',
    value: 'info@wesupporther.org',
    href: 'mailto:info@wesupporther.org',
    icon: Mail,
    color: 'text-secondary',
    bg: 'bg-soft-orange',
  },
  {
    title: 'Address',
    value: 'No. 14 Negro Crescent, Maitama, Abuja',
    href: 'https://maps.google.com/?q=No.14+Negro+Crescent+Maitama+Abuja',
    icon: MapPin,
    color: 'text-accent',
    bg: 'bg-soft-green',
  },
  {
    title: 'Website',
    value: 'www.wesupporther.org',
    href: 'https://www.wesupporther.org',
    icon: Globe,
    color: 'text-primary',
    bg: 'bg-soft-purple',
  },
]
</script>