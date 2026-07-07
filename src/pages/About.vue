<template>
  <DefaultLayout>
    <!-- <PagePlaceholder title="About Us" subtitle="Learn about WeSupportHer, our mission, vision, values, and leadership." /> -->
    <AboutHeaderSection />
    <WhoWeAreSection />
    <!-- <OurStoryTimeline /> -->
    <CoreValuesSection/>
    <MeetUsSection />
    <PartnersSection />
   

  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PagePlaceholder from '@/components/PagePlaceholder.vue'
import AboutHeaderSection from '@/components/about/AboutHeroSection.vue'
import WhoWeAreSection from '@/components/about/WhoWeAreSection.vue'
import OurStoryTimeline from '@/components/about/OurStoryTimeline.vue'
import CoreValuesSection from '@/components/CoreValuesSection.vue'
import MeetUsSection from '@/components/about/MeetUsSection.vue'
import PartnersSection from '../components/about/PartnersSection.vue'
</script>