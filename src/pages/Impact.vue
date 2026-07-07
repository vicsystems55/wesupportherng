<template>
  <DefaultLayout>
    <ImpactHeroSection />
        <ImpactGlanceSection />
  </DefaultLayout>
</template>

<script setup>
import { useSeoMeta } from '@unhead/vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ImpactHeroSection from '@/components/impact/ImpactHeroSection.vue'
import ImpactGlanceSection from '@/components/impact/ImpactGlanceSection.vue'

useSeoMeta({
  title: 'Our Impact | WeSupportHer',
  description:
    'See how WeSupportHer is creating measurable change through health, advocacy, leadership and community-driven programmes.',
  ogTitle: 'Our Impact | WeSupportHer',
  ogDescription:
    'Explore WSH impact across girls reached, products distributed, schools visited and partnerships established.',
  ogImage: '/seo/impact-thumbnail.jpg',
})
</script>