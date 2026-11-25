<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import CategoriesSection from '@/components/home/CategoriesSection.vue'
import FacebookCta from '@/components/home/FacebookCta.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import ArticleGrid from '@/components/articles/ArticleGrid.vue'
import ArticleRow from '@/components/articles/ArticleRow.vue'
import VideoCard from '@/components/videos/VideoCard.vue'
import { useArticles } from '@/composables/useArticles'
import { useSeo } from '@/composables/useSeo'
import { staticPages } from '@/config/pages'
import { videos } from '@/data/videos'
import { settings } from '@/data/settings'

const { featured, latest } = useArticles()
const featuredList = featured.slice(0, 3)
const latestList = latest(5)
useSeo(staticPages[0])
</script>

<template>
  <HeroSection />

  <section class="section">
    <div class="container">
      <SectionHeading title="អត្ថបទពិសេស" subtitle="ជម្រើសរបស់យើងសម្រាប់អ្នកអាន" />
      <ArticleGrid :articles="featuredList" />
    </div>
  </section>

  <section class="section section--surface">
    <div class="container">
      <SectionHeading title="ប្រភេទខ្លឹមសារ" subtitle="ជ្រើសរើសប្រធានបទដែលអ្នកចាប់អារម្មណ៍" />
      <CategoriesSection />
    </div>
  </section>

  <section class="section">
    <div class="container">
      <SectionHeading title="អត្ថបទថ្មីៗ" link-text="មើលអត្ថបទទាំងអស់" link-to="/history" />
      <ArticleRow v-for="a in latestList" :key="a.id" :article="a" />
    </div>
  </section>

  <section class="section section--surface">
    <div class="container">
      <SectionHeading title="វីដេអូអប់រំ" subtitle="វីដេអូពីទំព័រ Facebook របស់យើង" link-text="មើលវីដេអូទាំងអស់" link-to="/videos" />
      <div class="videos"><VideoCard v-for="v in videos" :key="v.id" :video="v" /></div>
    </div>
  </section>

  <section class="section">
    <div class="container about">
      <h2>អំពីយើង</h2>
      <div>
        <p>យើងបង្កើតគេហទំព័រនេះឡើងក្នុងគោលបំណងចែករំលែកចំណេះដឹង ប្រវត្តិសាស្ត្រ ប្រវត្តិបុគ្គលល្បីៗ និងរឿងរ៉ាវដែលមានតម្លៃសម្រាប់ការសិក្សា និងការស្វែងយល់។ យើងជឿជាក់ថា ចំណេះដឹងគឺជាមូលដ្ឋានគ្រឹះនៃការអភិវឌ្ឍខ្លួន និងសង្គម។</p>
        <RouterLink to="/about" class="link-arrow">អានបន្ថែមអំពី{{ settings.name }}</RouterLink>
      </div>
    </div>
  </section>

  <FacebookCta />
</template>

<style scoped>
.videos { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.about { display: grid; grid-template-columns: 1fr 2fr; gap: 48px; }
.about h2 { font-size: 30px; }
.about p { font-size: 19px; margin-bottom: 14px; max-width: 720px; }
@media (max-width: 1000px) { .videos { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 760px) { .videos { grid-template-columns: 1fr; } .about { grid-template-columns: 1fr; gap: 16px; } .about h2 { font-size: 24px; } }
</style>
