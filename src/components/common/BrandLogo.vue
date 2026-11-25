<script setup lang="ts">
import { settings } from '@/data/settings'
defineProps<{ light?: boolean }>()
</script>

<template>
  <RouterLink to="/" class="brand" :class="{ 'brand--light': light }" :aria-label="settings.name">
    <img :src="settings.logo" alt="" width="40" height="40" />
    <span>{{ settings.name }}</span>
  </RouterLink>
</template>

<style scoped>
.brand { display: inline-flex; align-items: center; gap: 12px; font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--c-secondary); }
.brand img { width: 40px; height: 40px; border-radius: 50%; }
.brand--light { color: #fff; }
</style>
