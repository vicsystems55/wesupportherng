<template>
  <div class="min-h-screen bg-cream text-dark">
    <Header />

    <main>
      <slot />
    </main>

    <Footer />

    <!-- Newsletter popup -->
    <div
      v-if="showNewsletterPopup"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 py-6 sm:px-6"
      @click.self="closePopup"
    >
      <div class="w-full max-w-md rounded-[32px] border border-primary/10 bg-white p-6 shadow-2xl">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.24em] text-secondary">Join Our Newsletter</p>
            <h2 class="mt-3 text-2xl font-black text-dark">Stay connected with WSH</h2>
          </div>
          <button
            type="button"
            class="rounded-full border border-neutral-200 bg-white p-2 text-dark transition hover:bg-neutral-100"
            @click="closePopup"
            aria-label="Close newsletter popup"
          >
            ✕
          </button>
        </div>

        <div class="mt-6">
          <template v-if="showSuccess">
            <div class="rounded-3xl bg-soft-green p-5 text-center text-sm font-semibold text-accent">
              Thank you for joining our newsletter! Your details are safe with us.
            </div>
          </template>

          <template v-else>
            <p class="text-sm leading-relaxed text-dark/75">
              Enter your full name and email to receive our latest stories, events, and impact updates.
            </p>

            <form class="mt-6 space-y-4" @submit.prevent="submitNewsletter">
              <label class="block">
                <span class="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-dark/70">Full Name</span>
                <input
                  v-model="newsletterForm.fullName"
                  @focus="handleInteraction"
                  type="text"
                  placeholder="Jane Doe"
                  class="w-full rounded-3xl border border-primary/20 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/10"
                  required
                />
              </label>

              <label class="block">
                <span class="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-dark/70">Email</span>
                <input
                  v-model="newsletterForm.email"
                  @focus="handleInteraction"
                  type="email"
                  placeholder="you@example.com"
                  class="w-full rounded-3xl border border-primary/20 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/10"
                  required
                />
              </label>

              <div class="flex items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  class="inline-flex items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-bold text-white transition hover:bg-primary"
                >
                  Subscribe
                </button>
                <button
                  type="button"
                  class="text-sm font-semibold text-dark/70 transition hover:text-dark"
                  @click="closePopup"
                >
                  Maybe later
                </button>
              </div>
            </form>
          </template>
        </div>
      </div>
    </div>

    <!-- WhatsApp floating button -->
    <a
      :href="whatsappLink"
      target="_blank"
      rel="noreferrer noopener"
      class="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#25d366] px-4 py-3 text-sm font-bold text-white shadow-[0_20px_60px_-30px_rgba(37,211,102,0.8)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#128c7e]"
      @click="handleInteraction"
    >
      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48a11.92 11.92 0 0 0-16.72 0 11.85 11.85 0 0 0 0 16.72l-1.05 3.83 3.94-1.03a11.92 11.92 0 0 0 5.16 1.2h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.21-3.48-8.48Zm-8.54 16.15a9.77 9.77 0 0 1-4.97-1.37l-.36-.22-2.34.61.61-2.28-.23-.37a9.78 9.78 0 1 1 7.29 3.63Zm5.12-6.26c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.69.9-.85 1.08-.16.18-.32.2-.6.07-.28-.14-1.19-.44-2.27-1.39-.84-.75-1.41-1.68-1.57-1.96-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.28.28-.47.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.29 0 1.34.98 2.64 1.12 2.82.14.18 1.94 2.97 4.7 4.17 1.31.56 1.85.65 2.5.55.76-.11 2.37-.97 2.7-1.91.33-.94.33-1.75.23-1.92-.1-.18-.36-.28-.75-.42Z" />
      </svg>
      WhatsApp
    </a>
  </div>
</template>

<script setup>
import { computed, ref, onBeforeUnmount, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const showNewsletterPopup = ref(false)
const showSuccess = ref(false)
const newsletterForm = ref({ email: '', fullName: '' })
const interactionLogged = ref(false)
let autoOpenTimer = null
let autoCloseTimer = null
let successCloseTimer = null

const whatsappLink = computed(
  () =>
    'https://wa.me/2348135519887?text=' +
    encodeURIComponent('Hello WeSupportHer! I would like to connect via WhatsApp.')
)

const openPopup = () => {
  if (!showNewsletterPopup.value && !showSuccess.value) {
    showNewsletterPopup.value = true
    console.log('Newsletter popup displayed')
    autoCloseTimer = window.setTimeout(() => {
      if (!showSuccess.value) {
        closePopup()
      }
    }, 30000)
  }
}

const closePopup = () => {
  if (showNewsletterPopup.value) {
    showNewsletterPopup.value = false
    console.log('Newsletter popup dismissed')
  }
}

const handleInteraction = () => {
  if (!interactionLogged.value) {
    interactionLogged.value = true
    console.log('User interacted with newsletter popup or WhatsApp button')
  }
}

const submitNewsletter = () => {
  if (!newsletterForm.value.email || !newsletterForm.value.fullName) {
    return
  }

  showSuccess.value = true
  handleInteraction()
  console.log('Newsletter signup submitted:', {
    fullName: newsletterForm.value.fullName,
    email: newsletterForm.value.email,
  })

  if (autoCloseTimer) {
    window.clearTimeout(autoCloseTimer)
  }

  successCloseTimer = window.setTimeout(() => {
    showNewsletterPopup.value = false
  }, 2000)
}

onMounted(() => {
  autoOpenTimer = window.setTimeout(() => {
    openPopup()
  }, 10000)
})

onBeforeUnmount(() => {
  if (autoOpenTimer) window.clearTimeout(autoOpenTimer)
  if (autoCloseTimer) window.clearTimeout(autoCloseTimer)
  if (successCloseTimer) window.clearTimeout(successCloseTimer)
})
</script>
