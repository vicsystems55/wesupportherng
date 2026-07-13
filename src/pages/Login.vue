<template>
  <main class="min-h-screen w-full max-w-full overflow-x-hidden bg-cream">
    <div class="grid min-h-screen w-full min-w-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <!-- Brand / Image Panel -->
      <div class="relative hidden min-w-0 overflow-hidden bg-primary lg:block">
        <img
          src="@/assets/images/about-hero.jpg"
          alt="WeSupportHer"
          class="absolute inset-0 h-full w-full object-cover object-top"
        />

        <div
          class="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-secondary/65"
        />

        <div
          class="absolute -left-28 top-16 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />

        <div
          class="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-secondary/25 blur-3xl"
        />

        <div class="relative z-10 flex h-full flex-col justify-between p-12">
          <RouterLink to="/" class="inline-flex w-fit items-center gap-3">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2 shadow-xl"
            >
              <img
                src="@/assets/images/logo.png"
                alt="WeSupportHer logo"
                class="h-full w-full object-contain"
              />
            </div>

            <div>
              <p class="text-xl font-black text-white">
                WeSupportHer
              </p>

              <p
                class="text-xs font-bold uppercase tracking-[0.2em] text-white/60"
              >
                Administration
              </p>
            </div>
          </RouterLink>

          <div class="max-w-xl">
            <p
              class="text-xs font-black uppercase tracking-[0.28em] text-orange-200"
            >
              WSH Admin Portal
            </p>

            <h1
              class="mt-5 font-display text-5xl font-black leading-tight text-white xl:text-6xl"
            >
              Manage content and community impact from one place.
            </h1>

            <p class="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
              Access blog management, volunteer submissions, newsletter
              subscribers, contact messages and website analytics.
            </p>
          </div>

          <p class="text-sm font-semibold text-white/50">
            © {{ currentYear }} WeSupportHer
          </p>
        </div>
      </div>

      <!-- Login Panel -->
      <div class="relative flex min-h-screen min-w-0 items-center justify-center overflow-hidden px-5 py-12 sm:px-8">
        <div
          class="absolute -right-24 top-10 h-72 w-72 rounded-full bg-soft-purple blur-3xl"
        />

        <div
          class="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-soft-orange blur-3xl"
        />

        <div class="relative z-10 w-full min-w-0 max-w-md">
          <!-- Mobile Logo -->
          <RouterLink
            to="/"
            class="mb-10 flex items-center justify-center gap-3 lg:hidden"
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2 shadow-lg"
            >
              <img
                src="@/assets/images/logo.png"
                alt="WeSupportHer logo"
                class="h-full w-full object-contain"
              />
            </div>

            <div>
              <p class="text-lg font-black text-dark">
                WeSupportHer
              </p>

              <p
                class="text-[10px] font-bold uppercase tracking-[0.2em] text-dark/45"
              >
                Admin Portal
              </p>
            </div>
          </RouterLink>

          <div
            class="rounded-[2rem] border border-black/5 bg-white p-7 shadow-2xl shadow-black/10 sm:p-9"
          >
            <div>
              <span
                class="inline-flex rounded-full bg-soft-orange px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-secondary"
              >
                Secure Login
              </span>

              <h2 class="mt-5 font-display text-4xl font-black text-dark">
                Welcome back
              </h2>

              <p class="mt-3 text-sm leading-relaxed text-dark/55">
                Enter your administrator account details to continue.
              </p>
            </div>

            <!-- General Error -->
            <div
              v-if="errorMessage"
              class="mt-6 flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
              role="alert"
            >
              <CircleAlert class="mt-0.5 h-5 w-5 shrink-0" />

              <p class="leading-relaxed">
                {{ errorMessage }}
              </p>
            </div>

            <form class="mt-8 space-y-5" @submit.prevent="handleLogin">
              <!-- Email -->
              <div>
                <label
                  for="email"
                  class="mb-2 block text-sm font-black text-dark"
                >
                  Email address
                </label>

                <div class="relative">
                  <Mail
                    class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-dark/30"
                  />

                  <input
                    id="email"
                    v-model.trim="form.email"
                    type="email"
                    autocomplete="email"
                    required
                    placeholder="admin@wesupporther.org"
                    class="h-14 w-full rounded-2xl border border-black/10 bg-cream pl-12 pr-4 text-sm text-dark outline-none transition placeholder:text-dark/30 focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"
                    :disabled="isLoading"
                  />
                </div>

                <p v-if="errors.email" class="mt-2 text-xs font-semibold text-red-600">
                  {{ errors.email }}
                </p>
              </div>

              <!-- Password -->
              <div>
                <div class="mb-2 flex items-center justify-between gap-4">
                  <label
                    for="password"
                    class="block text-sm font-black text-dark"
                  >
                    Password
                  </label>

                  <RouterLink
                    to="/forgot-password"
                    class="text-xs font-bold text-secondary transition hover:text-primary"
                  >
                    Forgot password?
                  </RouterLink>
                </div>

                <div class="relative">
                  <LockKeyhole
                    class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-dark/30"
                  />

                  <input
                    id="password"
                    v-model="form.password"
                    :type="showPassword ? 'text' : 'password'"
                    autocomplete="current-password"
                    required
                    placeholder="Enter your password"
                    class="h-14 w-full rounded-2xl border border-black/10 bg-cream pl-12 pr-14 text-sm text-dark outline-none transition placeholder:text-dark/30 focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"
                    :disabled="isLoading"
                  />

                  <button
                    type="button"
                    class="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl text-dark/40 transition hover:bg-white hover:text-secondary"
                    :aria-label="showPassword ? 'Hide password' : 'Show password'"
                    @click="showPassword = !showPassword"
                  >
                    <EyeOff v-if="showPassword" class="h-5 w-5" />
                    <Eye v-else class="h-5 w-5" />
                  </button>
                </div>

                <p
                  v-if="errors.password"
                  class="mt-2 text-xs font-semibold text-red-600"
                >
                  {{ errors.password }}
                </p>
              </div>

              <!-- Remember -->
              <label class="flex cursor-pointer items-center gap-3">
                <input
                  v-model="form.remember"
                  type="checkbox"
                  class="h-4 w-4 rounded border-black/20 accent-secondary"
                  :disabled="isLoading"
                />

                <span class="text-sm font-semibold text-dark/60">
                  Keep me signed in
                </span>
              </label>

              <button
                type="submit"
                class="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-secondary px-6 text-sm font-black text-white shadow-lg shadow-secondary/20 transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60"
                :disabled="isLoading"
              >
                <LoaderCircle
                  v-if="isLoading"
                  class="h-5 w-5 animate-spin"
                />

                <LogIn v-else class="h-5 w-5" />

                {{ isLoading ? 'Signing in...' : 'Sign In to Dashboard' }}
              </button>
            </form>

            <div class="mt-7 border-t border-black/5 pt-6 text-center">
              <RouterLink
                to="/"
                class="inline-flex items-center gap-2 text-sm font-bold text-dark/50 transition hover:text-secondary"
              >
                <ArrowLeft class="h-4 w-4" />
                Return to website
              </RouterLink>
            </div>
          </div>

          <p class="mt-6 text-center text-xs leading-relaxed text-dark/40">
            This area is restricted to authorised WSH administrators.
          </p>

          <p class="mt-2 text-center text-xs leading-relaxed text-dark/40">
            Developed by
            <a
              href="https://vicsystems.us"
              target="_blank"
              rel="noopener noreferrer"
              class="font-bold text-dark/60 transition hover:text-secondary"
            >
              Vicsystems Technologies Ltd.
            </a>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSeoMeta } from '@unhead/vue'
import { login } from '@/services/authService'
import {
  ArrowLeft,
  CircleAlert,
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  LogIn,
  Mail,
} from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()

const currentYear = new Date().getFullYear()

const isLoading = ref(false)
const showPassword = ref(false)
const errorMessage = ref('')

const form = reactive({
  email: '',
  password: '',
  remember: false,
})

const errors = reactive({
  email: '',
  password: '',
})

useSeoMeta({
  title: 'Admin Login | WeSupportHer',
  description: 'Secure administrator login for the WeSupportHer website.',
  robots: 'noindex, nofollow',
})

const validateForm = () => {
  errors.email = ''
  errors.password = ''
  errorMessage.value = ''

  let isValid = true

  if (!form.email) {
    errors.email = 'Email address is required.'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.'
    isValid = false
  }

  if (!form.password) {
    errors.password = 'Password is required.'
    isValid = false
  } else if (form.password.length < 6) {
    errors.password = 'Password must contain at least 6 characters.'
    isValid = false
  }

  return isValid
}

const handleLogin = async () => {
  if (!validateForm()) {
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    await login({
      email: form.email.trim(),
      password: form.password,
      remember: form.remember,
    })

    const redirectPath =
      typeof route.query.redirect === 'string' &&
      route.query.redirect.startsWith('/admin')
        ? route.query.redirect
        : '/admin'

    await router.replace(redirectPath)
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred while signing in.'
  } finally {
    isLoading.value = false
  }
}
</script>
