<script setup lang="ts">
import { categories } from '@/data/categories'
import CategoryIcon from '@/components/common/CategoryIcon.vue'
</script>

<template>
  <ul class="cats">
    <li v-for="c in categories" :key="c.slug">
      <RouterLink :to="c.path" class="cat">
        <span class="icon"><CategoryIcon :name="c.icon" /></span>
        <h3>{{ c.title }}</h3>
        <span class="en">{{ c.titleEn }}</span>
        <p>{{ c.description }}</p>
        <span class="link-arrow">មើលអត្ថបទទាំងអស់</span>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.cats { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid var(--c-border); background: var(--c-surface); }
.cats li + li { border-left: 1px solid var(--c-border); }
.cat { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 32px 28px; height: 100%; transition: background 0.2s; }
.cat:hover { background: #fbf5f5; }
.icon { display: grid; place-items: center; width: 48px; height: 48px; border-radius: 50%; background: var(--c-primary); color: #fff; font-size: 22px; margin-bottom: 10px; }
h3 { font-size: 20px; }
.en { font-family: var(--font-latin); font-size: 14px; color: var(--c-muted); }
p { color: var(--c-muted); font-size: 15px; margin: 8px 0 14px; }
.link-arrow { margin-top: auto; }
@media (max-width: 1000px) {
  .cats { grid-template-columns: repeat(2, 1fr); }
  .cats li:nth-child(3) { border-left: 0; }
  .cats li:nth-child(n + 3) { border-top: 1px solid var(--c-border); }
}
@media (max-width: 560px) {
  .cats { grid-template-columns: 1fr; }
  .cats li + li { border-left: 0; border-top: 1px solid var(--c-border); }
}
</style>
