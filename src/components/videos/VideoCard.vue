<script setup lang="ts">
import { VideoPlay } from '@element-plus/icons-vue'
import type { Video } from '@/types'
import { formatDate } from '@/composables/useFormat'

defineProps<{ video: Video }>()
</script>

<template>
  <article class="video">
    <a :href="video.facebookUrl" target="_blank" rel="noopener noreferrer" class="thumb" :aria-label="`មើលវីដេអូ៖ ${video.title}`">
      <img :src="video.thumbnail" :alt="video.title" loading="lazy" width="1200" height="675" />
      <span class="play"><el-icon :size="30"><VideoPlay /></el-icon></span>
    </a>
    <time class="meta" :datetime="video.publishedAt">{{ formatDate(video.publishedAt) }}</time>
    <h3>{{ video.title }}</h3>
    <p class="muted desc">{{ video.description }}</p>
    <a :href="video.facebookUrl" target="_blank" rel="noopener noreferrer" class="link-arrow">មើលនៅលើ Facebook</a>
  </article>
</template>

<style scoped>
.video { display: flex; flex-direction: column; gap: 4px; }
.thumb { position: relative; display: block; aspect-ratio: 16 / 9; overflow: hidden; border-radius: var(--radius); background: var(--c-secondary); margin-bottom: 10px; }
.thumb img { width: 100%; height: 100%; object-fit: cover; transition: opacity 0.2s; }
.thumb:hover img { opacity: 0.85; }
.play { position: absolute; inset: 0; margin: auto; width: 64px; height: 64px; border-radius: 50%; background: var(--c-primary); color: #fff; display: grid; place-items: center; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); }
h3 { font-size: 19px; }
.desc { font-size: 15px; margin-bottom: 6px; }
</style>
