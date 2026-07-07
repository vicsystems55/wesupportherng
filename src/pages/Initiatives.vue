<script setup>
import { useSeoMeta } from '@unhead/vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import InitiativesHeroSection from '@/components/initiatives/InitiativesHeroSection.vue'
import InitiativesOverviewSection from '../components/initiatives/InitiativesOverviewSection.vue';

useSeoMeta({
  title: 'Our Initiatives | WeSupportHer',
  description:
    'Explore WeSupportHer initiatives including RedBubble, MenoWise and SheRepresents, focused on women’s health, dignity, leadership and governance.',
  ogTitle: 'Our Initiatives | WeSupportHer',
  ogDescription:
    'RedBubble, MenoWise and SheRepresents are WSH programmes advancing health, dignity and representation for women and girls.',
  ogImage: '/seo/initiatives-thumbnail.jpg',
})

</script>

<template>
  <DefaultLayout>
    <InitiativesHeroSection />
    <InitiativesOverviewSection />
  </DefaultLayout>
</template>