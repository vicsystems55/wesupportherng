<template>
  <section class="relative isolate overflow-hidden bg-white">
    <!-- Background Image -->
    <div class="absolute inset-0">
<img
  src="@/assets/images/our-initiatives-page-bg.jpg"
  alt="WeSupportHer initiatives"
  class="h-full w-full object-cover object-[50%_15%]"
/>

      <div class="absolute inset-0 bg-gradient-to-r from-dark/90 via-primary/65 to-secondary/35"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 mx-auto flex min-h-[76vh] max-w-7xl items-center px-5 pb-40 pt-28">
      <div class="max-w-3xl reveal">
        <div class="mb-6 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
          Home <span class="mx-3 opacity-60">/</span> Our Initiatives
        </div>

        <p class="mb-6 inline-flex rounded-full bg-secondary px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-white">
          Our Programmes
        </p>

        <h1 class="font-display text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
          Expanding impact through
          <span class="text-orange-300">focused initiatives.</span>
        </h1>

        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-white/90">
          Through RedBubble, MenoWise and SheRepresents, WeSupportHer addresses
          women’s health, dignity, leadership and representation across communities.
        </p>

        <div class="mt-10 flex flex-wrap gap-5">
          <a href="#initiatives" class="rounded-xl bg-secondary px-7 py-4 font-bold text-white transition hover:scale-105">
            Explore Initiatives
          </a>

          <RouterLink
            to="/get-involved"
            class="rounded-xl border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-dark"
          >
            Support Our Work
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Signature Shape Divider -->
    <div class="pointer-events-none absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="block h-[110px] w-full md:h-[140px]"
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
  </section>
</template>

<script setup>
</script>