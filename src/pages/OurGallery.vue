<template>
  <DefaultLayout>
    <GalleryHeroSection />
    <GallerySliderSection />
    <GalleryTimelineSection />
    <MasonryGallerySection />
  </DefaultLayout>
</template>

<script setup>
import { useSeoMeta } from '@unhead/vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import GalleryHeroSection from '@/components/gallery/GalleryHeroSection.vue'
import GallerySliderSection from '@/components/gallery/GallerySliderSection.vue'
import GalleryTimelineSection from '@/components/gallery/GalleryTimelineSection.vue'
import MasonryGallerySection from '@/components/gallery/MasonryGallerySection.vue'

useSeoMeta({
  title: 'Gallery | WeSupportHer',
  description:
    'Explore moments from WeSupportHer events, outreach programmes, campaigns and community engagements.',
  ogTitle: 'Gallery | WeSupportHer',
  ogDescription:
    'See WSH in action through photos from our outreach, advocacy and community programmes.',
  ogImage: '/seo/gallery-thumbnail.jpg',
})
</script>