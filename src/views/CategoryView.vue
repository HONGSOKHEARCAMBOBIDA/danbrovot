<script setup lang="ts">
import { computed } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import ArticleGrid from '@/components/articles/ArticleGrid.vue'
import { getCategory } from '@/data/categories'
import { useArticles } from '@/composables/useArticles'
import { useSeo } from '@/composables/useSeo'
import { staticPages } from '@/config/pages'
import type { CategorySlug } from '@/types'

const props = defineProps<{ slug: CategorySlug }>()
const category = computed(() => getCategory(props.slug))
const list = computed(() => useArticles().byCategory(props.slug))
useSeo(() => staticPages.find((p) => p.path === category.value.path) ?? staticPages[0])
</script>

<template>
  <PageHeader :title="category.title" :subtitle="category.titleEn" :description="category.description" />
  <section class="section">
    <div class="container"><ArticleGrid :articles="list" /></div>
  </section>
</template>
