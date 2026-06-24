<template>
  <section class="min-h-[70vh] bg-cream px-5 py-24">
    <div class="mx-auto max-w-5xl text-center">
      <p class="mb-4 inline-flex rounded-full bg-soft-purple px-4 py-2 text-sm font-bold text-primary">
        WeSupportHer
      </p>

      <h1 class="font-display text-5xl font-bold text-dark md:text-6xl">
        {{ title }}
      </h1>

      <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-dark/70">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
})
</script>