<script setup lang="ts">
import { settings } from '@/data/settings'
</script>

<template>
  <section class="hero">
    <div class="container inner">
      <div class="text">
        <h1>{{ settings.slogan }}</h1>
        <p class="en">{{ settings.sloganEn }}</p>
        <p class="desc">ស្វែងយល់ពីប្រវត្តិសាស្ត្រ បុគ្គលល្បីៗ និងចំណេះដឹងថ្មីៗ ដែលអ្នកប្រហែលជាមិនធ្លាប់បានដឹង។</p>
        <div class="actions">
          <el-button size="large" color="#ffffff" @click="$router.push('/history')"><span class="primary-label">ស្វែងយល់បន្ថែម</span></el-button>
          <el-button size="large" plain class="ghost" tag="a" :href="settings.facebookUrl" target="_blank" rel="noopener noreferrer">តាមដាន Facebook</el-button>
        </div>
      </div>
      <img class="logo" :src="settings.logo" alt="និមិត្តសញ្ញាឥន្ទ្រី" width="320" height="320" />
    </div>
  </section>
</template>

<style scoped>
.hero { background: #78151b; color: #fff; padding: 104px 0; }
.inner { display: grid; grid-template-columns: 1.6fr 1fr; gap: 56px; align-items: center; }
h1 { color: #fff; font-size: clamp(38px, 6vw, 68px); line-height: 1.4; }
.en { font-family: var(--font-latin); font-size: 22px; color: #efd0d2; margin-top: 4px; }
.desc { margin-top: 24px; max-width: 540px; font-size: 18px; color: #f6e4e5; }
.actions { margin-top: 36px; display: flex; gap: 14px; flex-wrap: wrap; }
.primary-label { color: #78151b; }
.ghost { background: transparent; color: #fff; border-color: rgba(255, 255, 255, 0.55); }
.ghost:hover { background: rgba(255, 255, 255, 0.1); color: #fff; border-color: #fff; }
.logo { width: min(320px, 100%); justify-self: center; border-radius: 50%; border: 6px solid rgba(255, 255, 255, 0.16); }
@media (max-width: 800px) {
  .hero { padding: 64px 0; }
  .inner { grid-template-columns: 1fr; }
  .logo { order: -1; width: 300px; justify-self: start; border-width: 4px; }
  .actions .el-button { flex: 1 1 100%; margin: 0; }
}
</style>
