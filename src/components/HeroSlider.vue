<!-- src/components/HeroSlider.vue -->
<template>
  <div class="relative overflow-hidden">
    <!-- Swiper Container -->
    <swiper
      :modules="[Autoplay, EffectFade, Pagination, Navigation]"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :speed="1000"
      :autoplay="{
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      :pagination="{
        clickable: true,
        dynamicBullets: true,
        renderBullet: (index, className) => {
          return `<span class='${className} custom-bullet'></span>`;
        }
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :fade-effect="{
        crossFade: true
      }"
      @slideChange="onSlideChange"
      class="hero-slider h-[600px] md:h-[700px] lg:h-[800px]"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="relative w-full h-full">
          <!-- Background Image with Parallax -->
          <div class="absolute inset-0 bg-cover bg-top transform scale-105 transition-transform duration-1000"
               :style="{ backgroundImage: `url(${slide.image})`, backgroundPosition: 'center top' }"
               :class="{ 'scale-100': activeIndex === index }">
            <!-- Dark Overlay for Text Readability -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            
            <!-- Gradient Overlay for Bottom -->
            <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          <!-- Text Content with Animations -->
          <div class="relative h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
            <div class="max-w-4xl mx-auto w-full">
              <div class="slide-content relative z-10"
                   :class="{ 'slide-active': activeIndex === index }">
                
                <!-- Badge -->
                <div class="slide-item delay-100">
                  <span class="inline-block bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-white/30">
                    {{ slide.badge }}
                  </span>
                </div>

                <!-- Title -->
                <h2 class="slide-item delay-200 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4">
                  <span v-html="slide.title"></span>
                </h2>

                <!-- Description -->
                <p class="slide-item delay-300 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-6 leading-relaxed">
                  {{ slide.description }}
                </p>

                <!-- Buttons -->
                <div class="slide-item delay-400 flex flex-wrap gap-4">
                  <RouterLink :to="slide.primaryLink"
                    class="group relative overflow-hidden rounded-xl bg-secondary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <span class="relative z-10">{{ slide.primaryButton }}</span>
                    <span class="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </RouterLink>

                  <RouterLink :to="slide.secondaryLink"
                    class="group relative overflow-hidden rounded-xl border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-secondary">
                    <span class="relative z-10">{{ slide.secondaryButton }}</span>
                    <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative Element -->
          <div class="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="100" fill="#fff" />
            </svg>
          </div>
        </div>
      </swiper-slide>

      <!-- Navigation Buttons -->
      <div class="swiper-button-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/40 hover:scale-110 border border-white/30">
        <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
      <div class="swiper-button-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/40 hover:scale-110 border border-white/30">
        <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </div>
    </swiper>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 animate-bounce hidden md:flex">
      <span class="text-xs uppercase tracking-widest font-medium">Scroll</span>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const activeIndex = ref(0)

const slides = [
  {
    image: new URL('@/assets/images/home-hero-bg.png', import.meta.url).href,
    badge: '✨ Empowering Women & Girls',
    title: 'Creating a World Where<br><span class="text-secondary">Every Woman Thrives</span>',
    description: 'WeSupportHer is a women-led nonprofit advancing gender equity through health, leadership, advocacy, and community-driven action.',
    primaryButton: 'Get Involved',
    secondaryButton: 'Learn More',
    primaryLink: '/get-involved',
    secondaryLink: '/about-us'
  },
  {
    image: new URL('@/assets/images/home-hero-bg-2.png', import.meta.url).href,
    badge: '🌟 Our Mission',
    title: 'Advancing Gender Equity<br><span class="text-secondary">Through Action</span>',
    description: 'Together, we\'re building a future where every girl and woman has equal rights, opportunities, and representation.',
    primaryButton: 'Join Us',
    secondaryButton: 'Our Impact',
    primaryLink: '/join',
    secondaryLink: '/impact'
  },
  {
    image: new URL('@/assets/images/home-hero-bg-3.png', import.meta.url).href,
    badge: '💪 Making a Difference',
    title: 'Empowering Communities<br><span class="text-secondary">One Life at a Time</span>',
    description: 'Through health education, leadership training, and advocacy, we\'re creating lasting change for women and girls worldwide.',
    primaryButton: 'Support Us',
    secondaryButton: 'Our Initiatives',
    primaryLink: '/donate',
    secondaryLink: '/our-initiatives'
  }
]

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex
}
</script>

<style scoped>
/* Swiper Container Styling */
.hero-slider {
  position: relative;
}

.hero-slider :deep(.swiper-wrapper) {
  height: 100%;
}

.hero-slider :deep(.swiper-slide) {
  height: 100%;
}

/* Custom Pagination Bullets */
.custom-bullet {
  width: 0.75rem;
  height: 0.75rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 9999px;
  transition: all 300ms ease;
  cursor: pointer;
  margin: 0 0.25rem;
}

.custom-bullet.swiper-pagination-bullet-active {
  background-color: var(--color-secondary, #e65a12);
  width: 2rem;
  border-radius: 9999px;
}

/* Slide Content Animation */
.slide-content {
  opacity: 0;
  transform: translateY(2rem);
  transition: all 700ms ease-out;
}

.slide-content.slide-active {
  opacity: 1;
  transform: translateY(0);
}

.slide-item {
  opacity: 0;
  transform: translateY(1.5rem);
  transition: all 700ms ease-out;
}

.slide-active .slide-item {
  opacity: 1;
  transform: translateY(0);
}

.slide-active .slide-item.delay-100 { transition-delay: 100ms; }
.slide-active .slide-item.delay-200 { transition-delay: 200ms; }
.slide-active .slide-item.delay-300 { transition-delay: 300ms; }
.slide-active .slide-item.delay-400 { transition-delay: 400ms; }

/* Navigation Buttons - Hide default */
.hero-slider :deep(.swiper-button-next::after),
.hero-slider :deep(.swiper-button-prev::after) {
  display: none;
}

/* Hide default pagination */
.hero-slider :deep(.swiper-pagination) {
  bottom: 1.5rem;
}

/* Responsive Adjustments */
@media (max-width: 640px) {
  .hero-slider {
    height: 500px !important;
  }
}

@media (min-width: 640px) and (max-width: 768px) {
  .hero-slider {
    height: 550px !important;
  }
}

/* Parallax Effect on Background */
.hero-slider :deep(.swiper-slide-active) .bg-cover {
  transform: scale(1) !important;
}

/* Smooth Transition for Background */
.bg-cover {
  transition: transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Navigation Hover Effects */
.swiper-button-next,
.swiper-button-prev {
  transition: all 300ms ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
}

/* Gradient Overlay Animation */
.absolute.inset-0.bg-gradient-to-r {
  background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%);
}
</style>