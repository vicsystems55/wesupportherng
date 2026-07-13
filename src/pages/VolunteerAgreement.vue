<template>
  <DefaultLayout>
    <main class="relative overflow-hidden bg-cream py-24">
      <div class="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div class="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>

      <div class="relative z-10 mx-auto max-w-6xl px-5">
        <!-- Header -->
        <div class="mx-auto max-w-3xl text-center reveal">
          <span class="inline-flex rounded-full bg-soft-orange px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
            Volunteer Agreement
          </span>

          <h1 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-6xl">
            Join WeSupportHer as a
            <span class="text-secondary">volunteer.</span>
          </h1>

          <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
            Complete this agreement form to confirm your volunteer details,
            preferred role, consent, and commitment to WSH values and policies.
          </p>

          <div class="mx-auto mt-5 flex w-32 items-center justify-center gap-2">
            <span class="h-1 w-10 rounded-full bg-primary"></span>
            <span class="h-1 w-10 rounded-full bg-secondary"></span>
            <span class="h-1 w-10 rounded-full bg-accent"></span>
          </div>
        </div>

        <!-- Form Card -->
        <div
          v-if="isSubmitted"
          class="reveal mx-auto mt-16 max-w-3xl rounded-[2rem] border border-accent/20 bg-white p-8 text-center shadow-2xl shadow-black/10 md:p-12"
          role="status"
        >
          <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-soft-green text-3xl text-accent">✓</div>
          <h2 class="mt-6 font-display text-3xl font-black text-dark">Application submitted</h2>
          <p class="mt-4 leading-relaxed text-dark/65">
            Thank you for volunteering with WeSupportHer. Our team will review
            your application and contact you about the next steps.
          </p>
        </div>

        <form
          v-else
          ref="formCard"
          class="reveal mt-16 rounded-[2rem] border border-black/5 bg-white p-6 shadow-2xl shadow-black/10 md:p-10"
          novalidate
          @submit.prevent="handleSubmit"
        >
          <!-- Progress -->
          <div class="mb-10 border-b border-black/10 pb-8">
            <div class="mb-5 flex items-center justify-between gap-4">
              <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                Step {{ currentStep + 1 }} of {{ steps.length }}
              </p>
              <p class="text-sm font-bold text-dark/55">
                {{ steps[currentStep].title }}
              </p>
            </div>

            <div class="h-2 overflow-hidden rounded-full bg-black/5" aria-hidden="true">
              <div
                class="h-full rounded-full bg-secondary transition-all duration-300"
                :style="{ width: `${stepProgress}%` }"
              />
            </div>

            <ol class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5" aria-label="Application progress">
              <li v-for="(step, index) in steps" :key="step.title">
                <button
                  type="button"
                  class="flex w-full items-center gap-2 rounded-xl p-2 text-left text-xs font-bold transition"
                  :class="index === currentStep
                    ? 'bg-soft-orange text-secondary'
                    : index < currentStep
                      ? 'text-accent hover:bg-soft-green'
                      : 'cursor-default text-dark/35'"
                  :disabled="index >= currentStep || isSubmitting"
                  :aria-current="index === currentStep ? 'step' : undefined"
                  @click="goToStep(index)"
                >
                  <span
                    class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border"
                    :class="index <= currentStep ? 'border-current' : 'border-black/10'"
                  >
                    {{ index < currentStep ? '✓' : index + 1 }}
                  </span>
                  <span class="hidden xl:inline">{{ step.shortTitle }}</span>
                </button>
              </li>
            </ol>
          </div>
          <!-- Volunteer Information -->
          <div v-show="currentStep === 0">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">01</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Volunteer Information</h2>
            </div>

            <div class="grid gap-5 md:grid-cols-2">
              <!-- Full Name -->
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Full Name</label>
                <input 
                  v-model="form.fullName"
                  type="text" 
                  placeholder="Enter full name" 
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                />
              </div>

              <!-- Date of Birth -->
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Date of Birth</label>
                <input 
                  v-model="form.dob"
                  type="date" 
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                />
              </div>

              <!-- Gender -->
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Gender</label>
                <select 
                  v-model="form.gender"
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                >
                  <option value="">Select option</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

              <!-- Nationality -->
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Nationality</label>
                <input 
                  v-model="form.nationality"
                  type="text" 
                  placeholder="Nationality" 
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                />
              </div>

              <!-- Occupation -->
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Occupation (optional)</label>
                <input 
                  v-model="form.occupation"
                  type="text" 
                  placeholder="Occupation" 
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                />
              </div>

              <!-- Phone Number -->
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Phone Number</label>
                <input 
                  v-model="form.phone"
                  type="tel" 
                  placeholder="Phone number" 
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                />
              </div>

              <!-- Email Address -->
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Email Address</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  placeholder="Email address" 
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                />
              </div>

              <!-- Emergency Contact Name -->
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Emergency Contact Name</label>
                <input 
                  v-model="form.emergencyName"
                  type="text" 
                  placeholder="Emergency contact name" 
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                />
              </div>

              <!-- Emergency Contact Number -->
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Emergency Contact Number</label>
                <input 
                  v-model="form.emergencyPhone"
                  type="tel" 
                  placeholder="Emergency contact number" 
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                />
              </div>

              <!-- Residential Address -->
              <div class="md:col-span-2">
                <label class="mb-2 block text-sm font-bold text-dark">Residential Address</label>
                <textarea 
                  v-model="form.address"
                  rows="3" 
                  placeholder="Enter residential address" 
                  class="w-full resize-none rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Role Details -->
          <div v-show="currentStep === 1">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">02</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Volunteer Role Details</h2>
            </div>

            <div class="grid gap-5 md:grid-cols-2">
              <!-- Volunteer Position -->
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Volunteer Position / Role</label>
                <input 
                  v-model="form.position"
                  type="text" 
                  placeholder="Preferred role" 
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                />
              </div>

              <!-- Start Date -->
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Volunteer Start Date</label>
                <input 
                  v-model="form.startDate"
                  type="date" 
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                />
              </div>

              <!-- Department -->
              <div>
                <label class="mb-3 block text-sm font-bold text-dark">Department / Initiative</label>
                <div class="grid gap-3 sm:grid-cols-2">
                  <label 
                    v-for="dept in departments" 
                    :key="dept"
                    class="flex cursor-pointer items-start gap-3 rounded-2xl border border-black/10 bg-white p-4 text-sm font-medium leading-relaxed text-dark/70 transition hover:border-secondary/40"
                  >
                    <input 
                      v-model="form.department"
                      type="checkbox" 
                      :value="dept"
                      class="mt-1 accent-secondary"
                    />
                    <span>{{ dept }}</span>
                  </label>
                </div>
              </div>

              <!-- Duration -->
              <div>
                <label class="mb-3 block text-sm font-bold text-dark">Expected Duration</label>
                <div class="grid gap-3 sm:grid-cols-2">
                  <label 
                    v-for="duration in durations" 
                    :key="duration"
                    class="flex cursor-pointer items-start gap-3 rounded-2xl border border-black/10 bg-white p-4 text-sm font-medium leading-relaxed text-dark/70 transition hover:border-secondary/40"
                  >
                    <input 
                      v-model="form.duration"
                      type="radio" 
                      :value="duration"
                      name="duration"
                      class="mt-1 accent-secondary"
                    />
                    <span>{{ duration }}</span>
                  </label>
                </div>
              </div>

              <!-- Work Arrangement -->
              <div>
                <label class="mb-3 block text-sm font-bold text-dark">Work Arrangement</label>
                <div class="grid gap-3 sm:grid-cols-3">
                  <label 
                    v-for="arrangement in arrangements" 
                    :key="arrangement"
                    class="flex cursor-pointer items-start gap-3 rounded-2xl border border-black/10 bg-white p-4 text-sm font-medium leading-relaxed text-dark/70 transition hover:border-secondary/40"
                  >
                    <input 
                      v-model="form.arrangement"
                      type="radio" 
                      :value="arrangement"
                      name="arrangement"
                      class="mt-1 accent-secondary"
                    />
                    <span>{{ arrangement }}</span>
                  </label>
                </div>
              </div>

              <!-- Supervisor -->
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Immediate Supervisor / Programme Coordinator</label>
                <input 
                  v-model="form.supervisor"
                  type="text" 
                  placeholder="Optional" 
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                />
              </div>
            </div>
          </div>

          <!-- Agreement -->
          <div v-show="currentStep === 2">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">03</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Volunteer Agreement</h2>
            </div>

            <div class="rounded-3xl bg-cream p-6">
              <p class="text-sm leading-relaxed text-dark/70">
                I agree to serve as a volunteer with WeSupportHer (WSH) and acknowledge
                that my engagement is voluntary. I understand that my participation does
                not create an employment, agency, partnership, consultancy, or contractor
                relationship between me and WSH.
              </p>

              <div class="mt-5 space-y-3">
                <label 
                  v-for="item in agreementItems" 
                  :key="item"
                  class="flex cursor-pointer items-start gap-3 rounded-2xl border border-black/10 bg-white p-4 text-sm font-medium leading-relaxed text-dark/70 transition hover:border-secondary/40"
                >
                  <input 
                    v-model="form.agreements"
                    type="checkbox" 
                    :value="item"
                    class="mt-1 accent-secondary"
                  />
                  <span>{{ item }}</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Media Consent -->
          <div v-show="currentStep === 3">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">04</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Photo and Media Consent</h2>
            </div>

            <p class="mb-5 text-sm leading-relaxed text-dark/70">
              I grant WeSupportHer permission to use photographs, videos,
              recordings, or other media containing my image or likeness for
              organisational, educational, promotional, advocacy, and reporting purposes.
            </p>

            <div class="grid gap-4 sm:grid-cols-2">
              <label class="flex cursor-pointer items-start gap-3 rounded-2xl border border-black/10 bg-white p-4 text-sm font-medium leading-relaxed text-dark/70 transition hover:border-secondary/40">
                <input 
                  v-model="form.mediaConsent"
                  type="radio" 
                  value="yes"
                  name="media_consent"
                  class="mt-1 accent-secondary"
                />
                <span>Yes, I consent</span>
              </label>
              <label class="flex cursor-pointer items-start gap-3 rounded-2xl border border-black/10 bg-white p-4 text-sm font-medium leading-relaxed text-dark/70 transition hover:border-secondary/40">
                <input 
                  v-model="form.mediaConsent"
                  type="radio" 
                  value="no"
                  name="media_consent"
                  class="mt-1 accent-secondary"
                />
                <span>No, I do not consent</span>
              </label>
            </div>
          </div>

          <!-- Declaration -->
          <div v-show="currentStep === 4">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">05</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Declaration</h2>
            </div>

            <div class="space-y-4">
              <label class="flex cursor-pointer items-start gap-3 rounded-2xl border border-black/10 bg-white p-4 text-sm font-medium leading-relaxed text-dark/70 transition hover:border-secondary/40">
                <input 
                  v-model="form.declaration1"
                  type="checkbox" 
                  class="mt-1 accent-secondary"
                />
                <span>I confirm that the information provided in this form is accurate and complete.</span>
              </label>
              <label class="flex cursor-pointer items-start gap-3 rounded-2xl border border-black/10 bg-white p-4 text-sm font-medium leading-relaxed text-dark/70 transition hover:border-secondary/40">
                <input 
                  v-model="form.declaration2"
                  type="checkbox" 
                  class="mt-1 accent-secondary"
                />
                <span>I have read and understood the terms of this Volunteer Agreement.</span>
              </label>
              <label class="flex cursor-pointer items-start gap-3 rounded-2xl border border-black/10 bg-white p-4 text-sm font-medium leading-relaxed text-dark/70 transition hover:border-secondary/40">
                <input 
                  v-model="form.declaration3"
                  type="checkbox" 
                  class="mt-1 accent-secondary"
                />
                <span>I agree to abide by the policies, procedures, and values of WeSupportHer throughout my period of volunteer service.</span>
              </label>
            </div>

            <div class="mt-8 grid gap-5 md:grid-cols-3">
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Volunteer Name</label>
                <input 
                  v-model="form.volunteerName"
                  type="text" 
                  placeholder="Full name" 
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                />
              </div>
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Signature</label>
                <input 
                  v-model="form.signature"
                  type="text" 
                  placeholder="Type your full name" 
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                />
              </div>
              <div>
                <label class="mb-2 block text-sm font-bold text-dark">Date</label>
                <input 
                  v-model="form.declarationDate"
                  type="date" 
                  class="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary focus:bg-white"
                />
              </div>
            </div>
          </div>

          <!-- Navigation -->
          <div class="mt-10 border-t border-black/10 pt-8">
            <div
              v-if="stepError"
              class="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700"
              role="alert"
            >
              {{ stepError }}
            </div>

            <div class="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                v-if="currentStep > 0"
                type="button"
                class="rounded-xl border border-black/10 px-7 py-4 text-sm font-black text-dark transition hover:border-primary/30 hover:text-primary disabled:opacity-50"
                :disabled="isSubmitting"
                @click="goBack"
              >
                ← Previous
              </button>
              <span v-else />

              <button
                v-if="currentStep < steps.length - 1"
                type="button"
                class="rounded-xl bg-secondary px-8 py-4 text-sm font-black text-white transition hover:bg-primary"
                @click="goNext"
              >
                Next step →
              </button>

              <button
                v-else
                type="submit"
                class="rounded-xl bg-secondary px-8 py-4 text-sm font-black text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Submitting...' : 'Submit Agreement →' }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  </DefaultLayout>
</template>

<script setup>
import { computed, nextTick, reactive, ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useSeoMeta } from '@unhead/vue'
import { submitVolunteerApplication } from '@/services/publicFormsService'

useSeoMeta({
  title: 'Volunteer Agreement | WeSupportHer',
  description:
    'Complete the WeSupportHer volunteer agreement form to join WSH as a volunteer.',
})

// Form data
const form = reactive({
  // Volunteer Information
  fullName: '',
  dob: '',
  gender: '',
  nationality: '',
  occupation: '',
  phone: '',
  email: '',
  emergencyName: '',
  emergencyPhone: '',
  address: '',
  
  // Role Details
  position: '',
  startDate: '',
  department: [],
  duration: '',
  arrangement: '',
  supervisor: '',
  
  // Agreement
  agreements: [],
  
  // Media Consent
  mediaConsent: '',
  
  // Declaration
  declaration1: false,
  declaration2: false,
  declaration3: false,
  volunteerName: '',
  signature: '',
  declarationDate: '',
})

const formCard = ref(null)
const currentStep = ref(0)
const stepError = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const steps = [
  { title: 'Volunteer information', shortTitle: 'Information' },
  { title: 'Role details', shortTitle: 'Role' },
  { title: 'Agreement', shortTitle: 'Agreement' },
  { title: 'Media consent', shortTitle: 'Consent' },
  { title: 'Declaration', shortTitle: 'Declaration' },
]

const stepProgress = computed(() =>
  ((currentStep.value + 1) / steps.length) * 100,
)

// Options arrays
const departments = [
  'Communications',
  'Programmes',
  'Partnerships',
  'Administration',
  'Media',
  'Other',
]

const durations = [
  'Project-based',
  'Fixed-term',
  'Ongoing',
  'Other',
]

const arrangements = [
  'On-site',
  'Remote',
  'Hybrid',
]

const agreementItems = [
  'I understand that my volunteer service is unpaid.',
  'I agree to support the mission, vision, and values of WeSupportHer.',
  'I agree to conduct myself in a professional, respectful, and ethical manner.',
  'I agree to comply with WSH policies and supervisor instructions.',
  'I agree to maintain confidentiality of organisational and beneficiary information.',
  'I agree to promote safeguarding, dignity, and wellbeing of all beneficiaries and stakeholders.',
  'I agree not to represent WSH publicly without prior authorization.',
  'I agree to obtain approval before sharing sensitive information, stories, photographs, or organisational content.',
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateCurrentStep = () => {
  const validators = [
    () => {
      if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
        return 'Full name, email address, and phone number are required.'
      }

      if (!emailPattern.test(form.email)) {
        return 'Enter a valid email address.'
      }

      return ''
    },
    () => {
      if (!form.position.trim()) {
        return 'Enter your preferred volunteer position or role.'
      }

      if (!form.department.length || !form.duration || !form.arrangement) {
        return 'Select at least one department, a duration, and a work arrangement.'
      }

      return ''
    },
    () =>
      form.agreements.length === agreementItems.length
        ? ''
        : 'Please review and accept every volunteer agreement item.',
    () =>
      form.mediaConsent
        ? ''
        : 'Select whether or not you consent to photo and media use.',
    () => {
      if (!form.declaration1 || !form.declaration2 || !form.declaration3) {
        return 'All declarations must be confirmed before submission.'
      }

      if (
        !form.volunteerName.trim() ||
        !form.signature.trim() ||
        !form.declarationDate
      ) {
        return 'Volunteer name, signature, and declaration date are required.'
      }

      return ''
    },
  ]

  stepError.value = validators[currentStep.value]()
  return !stepError.value
}

const scrollToForm = async () => {
  await nextTick()
  formCard.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const goNext = () => {
  if (!validateCurrentStep()) return

  currentStep.value += 1
  stepError.value = ''
  scrollToForm()
}

const goBack = () => {
  currentStep.value -= 1
  stepError.value = ''
  scrollToForm()
}

const goToStep = (step) => {
  if (step >= currentStep.value) return

  currentStep.value = step
  stepError.value = ''
  scrollToForm()
}

const optionalValue = (value) => value?.trim() || null
const optionalDate = (value) =>
  value ? new Date(`${value}T00:00:00.000Z`).toISOString() : null

const buildApplicationPayload = () => ({
  fullName: form.fullName.trim(),
  email: form.email.trim().toLowerCase(),
  phone: form.phone.trim(),
  dob: optionalDate(form.dob),
  gender: optionalValue(form.gender),
  nationality: optionalValue(form.nationality),
  occupation: optionalValue(form.occupation),
  address: optionalValue(form.address),
  emergencyName: optionalValue(form.emergencyName),
  emergencyPhone: optionalValue(form.emergencyPhone),
  position: optionalValue(form.position),
  department: [...form.department],
  duration: optionalValue(form.duration),
  arrangement: optionalValue(form.arrangement),
  startDate: optionalDate(form.startDate),
  supervisor: optionalValue(form.supervisor),
  agreements: [...form.agreements],
  mediaConsent: form.mediaConsent === 'yes',
  volunteerName: optionalValue(form.volunteerName),
  signature: optionalValue(form.signature),
  declarationDate: optionalDate(form.declarationDate),
})

const handleSubmit = async () => {
  if (!validateCurrentStep() || isSubmitting.value) return

  isSubmitting.value = true
  stepError.value = ''

  try {
    await submitVolunteerApplication(buildApplicationPayload())
    isSubmitted.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (error) {
    stepError.value =
      error instanceof Error
        ? error.message
        : 'We could not submit your application. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
