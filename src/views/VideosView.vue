<script setup lang="ts">
import PageHeader from '@/components/common/PageHeader.vue'
import VideoCard from '@/components/videos/VideoCard.vue'
import FacebookCta from '@/components/home/FacebookCta.vue'
import { videos } from '@/data/videos'
import { useSeo } from '@/composables/useSeo'
import { staticPages } from '@/config/pages'

const page = staticPages.find((p) => p.path === '/videos')!
useSeo(page)
</script>

<template>
  <PageHeader title="វីដេអូអប់រំ" subtitle="Videos" :description="page.description" />
  <section class="section">
    <div class="container grid"><VideoCard v-for="v in videos" :key="v.id" :video="v" /></div>
  </section>
  <FacebookCta />
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
@media (max-width: 1000px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
</style>
