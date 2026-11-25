<script setup lang="ts">
import { settings } from '@/data/settings'
import FacebookIcon from '@/components/common/FacebookIcon.vue'
</script>

<template>
  <section class="cta">
    <div class="container inner">
      <span class="fb"><FacebookIcon /></span>
      <div class="text">
        <h2>{{ settings.facebookPageName }}</h2>
        <p>តាមដានទំព័រ Facebook របស់យើង ដើម្បីទទួលបានអត្ថបទ និងវីដេអូថ្មីៗរាល់ថ្ងៃ។</p>
      </div>
      <el-button type="primary" size="large" tag="a" :href="settings.facebookUrl" target="_blank" rel="noopener noreferrer">
        តាមដាន Facebook
      </el-button>
    </div>
  </section>
</template>

<style scoped>
.cta { background: var(--c-surface); border-block: 1px solid var(--c-border); padding: 56px 0; }
.inner { display: flex; align-items: center; gap: 28px; }
.fb { flex: none; display: grid; place-items: center; width: 64px; height: 64px; border-radius: 50%; background: #1877f2; color: #fff; font-size: 32px; }
.text { flex: 1; }
h2 { font-size: 26px; }
p { color: var(--c-muted); }
@media (max-width: 760px) { .inner { flex-direction: column; align-items: flex-start; } .inner .el-button { width: 100%; } }
</style>
