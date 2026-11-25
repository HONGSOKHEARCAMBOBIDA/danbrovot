<script setup lang="ts">
import type { Article } from '@/types'
import { formatDate } from '@/composables/useFormat'
import CategoryBadge from '@/components/common/CategoryBadge.vue'

defineProps<{ article: Article }>()
</script>

<template>
  <article class="card">
    <RouterLink :to="`/article/${article.slug}`" class="thumb" tabindex="-1" aria-hidden="true">
      <img :src="article.image" :alt="article.title" loading="lazy" width="1200" height="675" />
    </RouterLink>
    <div class="body">
      <CategoryBadge :slug="article.category" />
      <h3><RouterLink :to="`/article/${article.slug}`">{{ article.title }}</RouterLink></h3>
      <p class="desc">{{ article.description }}</p>
      <div class="foot">
        <time class="meta" :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
        <RouterLink :to="`/ /${article.slug}`" class="link-arrow">អានបន្ត</RouterLink>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card { background: var(--c-surface); border: 1px solid var(--c-border); border-radius: var(--radius); overflow: hidden; display: flex; flex-direction: column; transition: box-shadow 0.2s, border-color 0.2s; }
.card:hover { box-shadow: var(--shadow-hover); border-color: #d4d4d4; }
.thumb { display: block; aspect-ratio: 16 / 9; overflow: hidden; background: var(--c-border); }
.thumb img { width: 100%; height: 100%; object-fit: cover; }
.body { padding: 20px 22px 22px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
h3 { font-size: 20px; }
h3 a:hover { color: var(--c-primary); }
.desc { color: var(--c-muted); font-size: 15px; display: -webkit-box; -webkit-line-clamp: 3; line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.foot { margin-top: auto; padding-top: 14px; display: flex; justify-content: space-between; align-items: center; gap: 12px; }
</style>
