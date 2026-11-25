<script setup lang="ts">
import type { Article } from "@/types";
import ArticleCard from "./ArticleCard.vue";

defineProps<{ articles: Article[] }>();
</script>

<template>
  <div v-if="articles.length" class="grid">
    <ArticleCard v-for="a in articles" :key="a.id" :article="a" />
  </div>
  <el-empty
    v-else
    description="មិនទាន់មានអត្ថបទក្នុងប្រភេទនេះនៅឡើយទេ។ សូមត្រឡប់មកមើលម្តងទៀតឆាប់ៗនេះ។"
  />
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
@media (max-width: 1000px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }
}
</style>
