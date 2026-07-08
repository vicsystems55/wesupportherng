<template>
  <DefaultLayout>
    <main class="relative overflow-hidden bg-cream">
      <!-- HERO -->
      <div class="relative isolate overflow-hidden bg-secondary">
        <div class="absolute inset-0">
          <img
            src="@/assets/images/get-involved-bg.jpg"
            alt="Get involved with WeSupportHer"
            class="h-full w-full object-cover object-top sm:object-[50%_12%] lg:object-[50%_15%]"
          />

          <div class="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-primary/35"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent"></div>
        </div>

        <div class="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-40 pt-28 sm:min-h-[86vh] lg:min-h-[78vh]">
          <div class="max-w-3xl reveal">
            <div class="mb-6 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
              Home <span class="mx-3 opacity-60">/</span> Get Involved
            </div>

            <p class="mb-6 inline-flex rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
              Join The Movement
            </p>

            <h1 class="font-display text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
              Be part of the change
              <span class="text-orange-100">women and girls need.</span>
            </h1>

            <p class="mt-8 max-w-2xl text-lg leading-relaxed text-white/90">
              Volunteer, donate, sponsor a programme, or collaborate with WSH
              to advance health, dignity, leadership and opportunity for women and girls.
            </p>

            <div class="mt-10 flex flex-wrap gap-5">
              <a
                href="#interest-form"
                class="rounded-xl bg-white px-7 py-4 font-bold text-secondary transition hover:scale-105"
              >
                Get Started
              </a>

              <a
                href="#ways"
                class="rounded-xl border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-dark"
              >
                Ways To Help
              </a>
            </div>
          </div>
        </div>

        <!-- Shape Divider -->
        <div class="pointer-events-none absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            class="block h-[120px] w-full sm:h-[140px] md:h-[160px]"
          >
            <path
              d="M0,120V74 c47.79,-22.2,103.59,-32.17,158,-28 c70.36,5.37,136.33,33.31,206.8,37.5 c73.84,4.39,147.54,-16.85,218.2,-35.23 c69.27,-18,138.3,-24.88,209.4,-13.08 c36.15,6,69.85,17.84,104.45,29.34 c92.64,30.78,216.15,70.07,303.15,3.33 V120Z"
              fill="#FFF8F2"
              opacity=".45"
            />
            <path
              d="M0,120 V95 c60,-25,120,-20,190,-5 c90,18,170,45,280,28 c120,-18,210,-65,330,-38 c90,20,170,60,400,10 V120Z"
              fill="#7A1F8A"
            />
            <path
              d="M0,120 V105 c90,-35,180,-15,290,8 c110,22,210,12,330,-15 c120,-28,220,-18,350,10 c90,18,160,12,230,-10 V120Z"
              fill="#FFF8F2"
            />
          </svg>
        </div>
      </div>

      <!-- CONTENT -->
      <div id="ways" class="relative overflow-hidden px-5 py-24">
        <div class="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div class="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>

        <div class="relative z-10 mx-auto max-w-7xl">
          <div class="mx-auto max-w-3xl text-center reveal">
            <span class="inline-flex rounded-full bg-soft-orange px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
              Ways To Get Involved
            </span>

            <h2 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
              Your support can create
              <span class="text-secondary">lasting impact.</span>
            </h2>

            <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
              Whether through time, resources, partnership or sponsorship,
              every contribution helps us reach more girls and women.
            </p>

            <div class="mx-auto mt-5 flex w-32 items-center justify-center gap-2">
              <span class="h-1 w-10 rounded-full bg-primary"></span>
              <span class="h-1 w-10 rounded-full bg-secondary"></span>
              <span class="h-1 w-10 rounded-full bg-accent"></span>
            </div>
          </div>

          <div class="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            <article
              v-for="item in ways"
              :key="item.title"
              class="reveal rounded-3xl border bg-white p-7 shadow-md shadow-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              :class="item.border"
            >
              <div
                class="flex h-16 w-16 items-center justify-center rounded-2xl"
                :class="item.bg"
              >
                <component :is="item.icon" class="h-8 w-8" :class="item.color" />
              </div>

              <h3 class="mt-6 text-2xl font-black text-dark">
                {{ item.title }}
              </h3>

              <p class="mt-4 text-sm leading-relaxed text-dark/65">
                {{ item.text }}
              </p>

              <a
                href="#interest-form"
                class="mt-6 inline-flex rounded-xl border px-5 py-3 text-sm font-bold transition hover:text-white"
                :class="item.button"
              >
                {{ item.cta }} →
              </a>
            </article>
          </div>

          <!-- PHOTO + VOLUNTEER CONTENT -->
          <div class="mt-20 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div class="reveal grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div class="group relative overflow-hidden rounded-[2rem] shadow-xl shadow-black/10">
                <img
                  src="@/assets/images/involved1.jpg"
                  alt="Volunteers supporting WSH outreach"
                  class="h-[420px] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent"></div>
                <div class="absolute bottom-7 left-7 right-7">
                  <span class="inline-flex rounded-full bg-secondary px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                    Volunteer
                  </span>
                  <h3 class="mt-4 text-2xl font-black leading-tight text-white">
                    Give your time. Share your skills. Create change.
                  </h3>
                </div>
              </div>
            </div>

            <div class="reveal rounded-[2rem] border border-black/5 bg-white p-8 shadow-xl shadow-black/5 md:p-10">
              <span class="inline-flex rounded-full bg-soft-purple px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-primary">
                Volunteer With Us
              </span>

              <h3 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
                Join our community of
                <span class="text-secondary">advocates and changemakers.</span>
              </h3>

              <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
                WSH welcomes individuals who are passionate about women’s health,
                gender equity, leadership, advocacy and community outreach.
              </p>

              <div class="mt-8 grid gap-4 sm:grid-cols-2">
                <div
                  v-for="role in volunteerRoles"
                  :key="role"
                  class="rounded-2xl border border-black/5 bg-cream p-4 text-sm font-semibold text-dark/70"
                >
                  <span class="mr-2 text-secondary">●</span>
                  {{ role }}
                </div>
              </div>
            </div>
          </div>

          <!-- FORM AREA -->
          <div id="interest-form" class="mt-20 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div class="reveal overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-secondary text-white shadow-2xl shadow-primary/20">
              <img
                src="@/assets/images/involved2.jpg"
                alt="Community impact through WeSupportHer"
                class="h-72 w-full object-cover grayscale opacity-80"
              />

              <div class="p-8 md:p-10">
                <p class="text-xs font-black uppercase tracking-[0.25em] text-white/75">
                  Let’s Work Together
                </p>

                <h3 class="mt-4 font-display text-4xl font-black leading-tight">
                  Ready to support women and girls?
                </h3>

                <p class="mt-5 text-base leading-relaxed text-white/80">
                  Fill the interest form and tell us how you would like to get
                  involved. Our team can follow up with the next steps.
                </p>

                <div class="mt-8 space-y-4 text-sm text-white/85">
                  <p>📧 info@wesupporther.org</p>
                  <p>📞 09112200110</p>
                  <p>🌐 https://wesupporther.org</p>
                </div>
              </div>
            </div>

            <form class="reveal rounded-[2rem] border border-black/5 bg-white p-8 shadow-xl shadow-black/5 md:p-10">
              <div>
                <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                  Interest Form
                </p>

                <h3 class="mt-3 font-display text-3xl font-black text-dark">
                  Tell us how you want to help
                </h3>
              </div>

              <div class="mt-8 grid gap-5 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-bold text-dark">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-secondary focus:bg-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-bold text-dark">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-secondary focus:bg-white"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-bold text-dark">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-secondary focus:bg-white"
                    placeholder="Phone number"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-bold text-dark">
                    Area of Interest
                  </label>
                  <select
                    class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-secondary focus:bg-white"
                  >
                    <option>Volunteer</option>
                    <option>Donate</option>
                    <option>Partner With Us</option>
                    <option>Sponsor a Programme</option>
                    <option>Media / Advocacy</option>
                  </select>
                </div>

                <div class="md:col-span-2">
                  <label class="mb-2 block text-sm font-bold text-dark">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-secondary focus:bg-white"
                    placeholder="Optional"
                  />
                </div>

                <div class="md:col-span-2">
                  <label class="mb-2 block text-sm font-bold text-dark">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    class="w-full resize-none rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-secondary focus:bg-white"
                    placeholder="Tell us how you would like to get involved..."
                  ></textarea>
                </div>
              </div>

              <button
                type="button"
                class="mt-8 w-full rounded-xl bg-secondary px-6 py-4 text-sm font-black text-white transition hover:bg-primary md:w-auto"
              >
                Submit Interest →
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
</template>

<script setup>
import { useSeoMeta } from '@unhead/vue'
import {
  HandHelping,
  Handshake,
  Heart,
  BadgeDollarSign,
} from 'lucide-vue-next'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

useSeoMeta({
  title: 'Get Involved | WeSupportHer',
  description:
    'Volunteer, donate, partner or sponsor a programme with WeSupportHer to support women and girls through health, leadership and advocacy initiatives.',
  ogTitle: 'Get Involved | WeSupportHer',
  ogDescription:
    'Join WeSupportHer and help create opportunities for girls and women to thrive.',
  ogImage: '/seo/get-involved-thumbnail.jpg',
})

const ways = [
  {
    title: 'Volunteer',
    text: 'Support outreaches, campaigns, events, mentorship and community engagement.',
    cta: 'Volunteer',
    icon: HandHelping,
    color: 'text-primary',
    bg: 'bg-soft-purple',
    border: 'border-primary/15',
    button: 'border-primary text-primary hover:bg-primary',
  },
  {
    title: 'Partner',
    text: 'Collaborate with WSH to expand advocacy, outreach and programme impact.',
    cta: 'Partner',
    icon: Handshake,
    color: 'text-secondary',
    bg: 'bg-soft-orange',
    border: 'border-secondary/15',
    button: 'border-secondary text-secondary hover:bg-secondary',
  },
  {
    title: 'Donate',
    text: 'Help fund menstrual products, outreach materials, education and support activities.',
    cta: 'Donate',
    icon: Heart,
    color: 'text-accent',
    bg: 'bg-soft-green',
    border: 'border-accent/15',
    button: 'border-accent text-accent hover:bg-accent',
  },
  {
    title: 'Sponsor',
    text: 'Sponsor school outreaches, awareness campaigns, workshops or programme resources.',
    cta: 'Sponsor',
    icon: BadgeDollarSign,
    color: 'text-secondary',
    bg: 'bg-soft-orange',
    border: 'border-secondary/15',
    button: 'border-secondary text-secondary hover:bg-secondary',
  },
]

const volunteerRoles = [
  'Community outreach support',
  'Event support',
  'Mentorship',
  'Advocacy campaigns',
  'Communications and media',
  'Fundraising support',
]
</script>