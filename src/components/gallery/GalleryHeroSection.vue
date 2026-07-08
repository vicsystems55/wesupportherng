<template>
  <section class="relative isolate overflow-hidden bg-secondary">
    <div class="absolute inset-0">
      <img
        src="@/assets/images/gallery/pix (1).jpeg"
        alt="WeSupportHer gallery"
        class="h-full w-full object-cover object-top sm:object-[50%_12%] lg:object-[50%_15%]"
      />

      <div class="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-primary/35"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent"></div>
    </div>

    <div class="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-40 pt-28 sm:min-h-[86vh] lg:min-h-[78vh]">
      <div class="max-w-3xl reveal">
        <div class="mb-6 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
          Home <span class="mx-3 opacity-60">/</span> Gallery
        </div>

        <p class="mb-6 inline-flex rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
          Moments In Action
        </p>

        <h1 class="font-display text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
          Stories of impact,
          <span class="text-orange-100">captured in moments.</span>
        </h1>

        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-white/90">
          Explore photos from WeSupportHer outreach programmes, advocacy
          campaigns, community engagements, and events.
        </p>

        <div class="mt-10 flex flex-wrap gap-5">
          <a
            href="#gallery"
            class="rounded-xl bg-white px-7 py-4 font-bold text-secondary transition hover:scale-105"
          >
            View Gallery
          </a>

          <RouterLink
            to="/get-involved"
            class="rounded-xl border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-dark"
          >
            Join The Movement
          </RouterLink>
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
  </section>
</template>

<script setup>
</script>