<template>
    <section class="relative isolate overflow-hidden bg-white">

        <!-- Background -->
        <div class="absolute inset-0">
            <img src="@/assets/images/about-hero.jpg" alt="About WeSupportHer" class="h-full w-full object-cover
         object-top
         md:object-[center_15%]
         lg:object-[center_10%]" />

            <!-- Dark Overlay -->
            <div class="absolute inset-0 bg-gradient-to-r
        from-dark/90
        via-dark/65
        to-primary/45" />

            <!-- Soft Purple Glow -->
            <div class="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-primary/20 blur-3xl"></div>

            <div class="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-secondary/20 blur-3xl"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-5 pt-28 pb-40">
            <div class="max-w-3xl reveal">

                <!-- Breadcrumb -->
                <div class="mb-6 inline-flex items-center rounded-full
          bg-white/10 px-5 py-2
          text-sm font-semibold text-white
          backdrop-blur-md">
                    Home
                    <span class="mx-3 opacity-60">/</span>
                    About Us
                </div>

                <!-- Badge -->
                <div class="mb-6 inline-flex rounded-full
          bg-secondary px-5 py-2
          text-xs font-black uppercase tracking-[0.25em]
          text-white">
                    Empowering Women Since 2024
                </div>

                <!-- Heading -->
                <h1 class="font-display text-5xl font-black leading-tight
          text-white md:text-6xl lg:text-7xl">
                    About
                    <span class="text-orange-300">
                        WeSupportHer
                    </span>
                </h1>

                <!-- Intro -->
                <p class="mt-8 max-w-2xl text-lg leading-relaxed
          text-white/90">
                    WeSupportHer is a women-led nonprofit organisation committed to
                    empowering women and girls through advocacy, education,
                    leadership development, health awareness, and community-driven
                    initiatives that create lasting social impact.
                </p>

                <!-- Buttons -->
                <div class="mt-10 flex flex-wrap gap-5">

                    <RouterLink to="/our-initiatives"
                        class="rounded-xl bg-secondary px-7 py-4 font-bold text-white transition hover:scale-105">
                        Explore Our Initiatives
                    </RouterLink>

                    <RouterLink to="/get-involved"
                        class="rounded-xl border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-dark">
                        Join The Movement
                    </RouterLink>

                </div>

            </div>
        </div>

        <!-- Decorative Floating Card -->
        <div class="absolute right-12 top-1/2 hidden -translate-y-1/2 xl:block reveal">
            <div class="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/20">
                <div class="text-center">

                    <h3 class="text-5xl font-black text-white">
                        2,000+
                    </h3>

                    <p class="mt-2 text-sm font-semibold uppercase tracking-wider text-white/80">
                        Girls Reached
                    </p>

                    <div class="my-6 h-px bg-white/20"></div>

                    <h3 class="text-5xl font-black text-orange-300">
                        100+
                    </h3>

                    <p class="mt-2 text-sm font-semibold uppercase tracking-wider text-white/80">
                        Communities
                    </p>

                </div>
            </div>
        </div>

        <!-- Signature Divider -->
        <div class="pointer-events-none absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="block h-[110px] w-full md:h-[140px]">
                <!-- Cream -->
                <path d="M0,120V74
          c47.79,-22.2,103.59,-32.17,158,-28
          c70.36,5.37,136.33,33.31,206.8,37.5
          c73.84,4.39,147.54,-16.85,218.2,-35.23
          c69.27,-18,138.3,-24.88,209.4,-13.08
          c36.15,6,69.85,17.84,104.45,29.34
          c92.64,30.78,216.15,70.07,303.15,3.33
          V120Z" fill="#FFF8F2" opacity=".45" />

                <!-- Purple -->
                <path d="M0,120
          V95
          c60,-25,120,-20,190,-5
          c90,18,170,45,280,28
          c120,-18,210,-65,330,-38
          c90,20,170,60,400,10
          V120Z" fill="#7A1F8A" />

                <!-- Cream -->
                <path d="M0,120
          V105
          c90,-35,180,-15,290,8
          c110,22,210,12,330,-15
          c120,-28,220,-18,350,10
          c90,18,160,12,230,-10
          V120Z" fill="#FFF8F2" />
            </svg>
        </div>

    </section>
</template>

<script setup>
</script>