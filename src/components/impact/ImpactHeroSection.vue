<template>
  <section class="relative isolate overflow-hidden bg-primary">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="@/assets/images/impact-page-bg.jpg"
        alt="WeSupportHer impact"
        class="h-full w-full object-cover object-top sm:object-[50%_12%] lg:object-[50%_15%]"
      />

<!-- Main Warm Overlay -->
<div class="absolute inset-0 bg-gradient-to-r
    from-[#E65A12]/95
    via-[#F07A2A]/70
    to-[#7A1F8A]/20">
</div>

<!-- Soft Warm Light -->
<div class="absolute inset-0 bg-gradient-to-t
    from-[#E65A12]/65
    via-[#F39C5A]/10
    to-transparent">
</div>


    </div>

    <!-- Content -->
    <div class="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-40 pt-28 sm:min-h-[86vh] lg:min-h-[78vh]">
      <div class="max-w-3xl reveal">
        <div class="mb-6 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
          Home <span class="mx-3 opacity-60">/</span> Impact
        </div>

        <p class="mb-6 inline-flex rounded-full bg-secondary px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-white">
          Our Impact
        </p>

        <h1 class="font-display text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
          Transforming lives through
          <span class="text-orange-200">action and advocacy.</span>
        </h1>

        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-white/90">
          Through education, outreach, partnerships and community-driven programmes,
          WeSupportHer is creating meaningful change for women and girls.
        </p>

        <div class="mt-10 flex flex-wrap gap-5">
          <a
            href="#impact-glance"
            class="rounded-xl bg-primary px-7 py-4 font-bold text-white transition hover:scale-105"
          >
            View Our Impact
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