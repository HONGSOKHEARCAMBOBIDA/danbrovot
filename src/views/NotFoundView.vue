<script setup lang="ts">
import { useSeo } from '@/composables/useSeo'
import { settings } from '@/data/settings'

useSeo({ title: `រកមិនឃើញទំព័រ | ${settings.name}`, description: settings.description, path: '/404' })
</script>

<template>
  <section class="section">
    <div class="container box">
      <h1>រកមិនឃើញទំព័រនេះទេ</h1>
      <p class="muted">ទំព័រដែលអ្នកស្វែងរកប្រហែលជាត្រូវបានលុប ឬផ្លាស់ប្តូរទីតាំង។</p>
      <el-button type="primary" size="large" @click="$router.push('/')">ត្រឡប់ទៅទំព័រដើម</el-button>
    </div>
  </section>
</template>

<style scoped>
.box { display: flex; flex-direction: column; align-items: flex-start; gap: 16px; min-height: 40vh; justify-content: center; }
h1 { font-size: 32px; }
</style>
