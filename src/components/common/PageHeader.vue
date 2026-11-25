<script setup lang="ts">
defineProps<{ title: string; subtitle?: string; description?: string }>()
</script>

<template>
  <section class="page-header">
    <div class="container">
      <p v-if="subtitle" class="sub">{{ subtitle }}</p>
      <h1>{{ title }}</h1>
      <p v-if="description" class="desc">{{ description }}</p>
    </div>
  </section>
</template>

<style scoped>
.page-header { background: var(--c-primary-dark); color: #fff; padding: 64px 0 56px; }
h1 { color: #fff; font-size: 40px; }
.sub { font-family: var(--font-latin); color: #e9c9cb; font-size: 16px; }
.desc { margin-top: 12px; max-width: 640px; color: #f2dcdd; }
@media (max-width: 640px) { h1 { font-size: 30px; } .page-header { padding: 44px 0 40px; } }
</style>
