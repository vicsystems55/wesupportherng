<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import InitiativesHeroSection from '@/components/initiatives/InitiativesHeroSection.vue'
import InitiativesOverviewSection from '../components/initiatives/InitiativesOverviewSection.vue';

</script>

<template>
  <DefaultLayout>
    <InitiativesHeroSection />
    <InitiativesOverviewSection />
  </DefaultLayout>
</template>