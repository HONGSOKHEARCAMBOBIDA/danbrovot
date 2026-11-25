<script setup lang="ts">
import type { Article } from '@/types'
import { formatDate } from '@/composables/useFormat'
import CategoryBadge from '@/components/common/CategoryBadge.vue'

defineProps<{ article: Article }>()
</script>

<template>
  <article class="row">
    <RouterLink :to="`/article/${article.slug}`" class="thumb" tabindex="-1" aria-hidden="true">
      <img :src="article.image" :alt="article.title" loading="lazy" width="1200" height="675" />
    </RouterLink>
    <div class="body">
      <div class="top">
        <CategoryBadge :slug="article.category" />
        <time class="meta" :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
      </div>
      <h3><RouterLink :to="`/article/${article.slug}`">{{ article.title }}</RouterLink></h3>
      <p class="desc">{{ article.description }}</p>
      <el-button size="small" plain @click="$router.push(`/article/${article.slug}`)">អានបន្ត</el-button>
    </div>
  </article>
</template>

<style scoped>
.row { display: grid; grid-template-columns: 300px 1fr; gap: 28px; padding: 28px 0; border-bottom: 1px solid var(--c-border); }
.row:first-child { padding-top: 0; }
.thumb { aspect-ratio: 16 / 9; overflow: hidden; border-radius: var(--radius); background: var(--c-border); align-self: start; }
.thumb img { width: 100%; height: 100%; object-fit: cover; }
.top { display: flex; gap: 16px; align-items: baseline; flex-wrap: wrap; }
.body { display: flex; flex-direction: column; align-items: flex-start; gap: 4px; }
h3 { font-size: 22px; }
h3 a:hover { color: var(--c-primary); }
.desc { color: var(--c-muted); margin-bottom: 10px; }
@media (max-width: 760px) { .row { grid-template-columns: 1fr; gap: 16px; } }
</style>
