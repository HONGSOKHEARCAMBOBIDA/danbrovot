<script setup lang="ts">
import { computed } from 'vue'
import { getCategory } from '@/data/categories'
import type { CategorySlug } from '@/types'

const props = defineProps<{ slug: CategorySlug }>()
const category = computed(() => getCategory(props.slug))
</script>

<template>
  <RouterLink :to="category.path" class="badge">{{ category.title }}</RouterLink>
</template>

<style scoped>
.badge { display: inline-block; font-size: 14px; font-weight: 600; color: var(--c-primary); line-height: 1.5; }
.badge:hover { text-decoration: underline; text-underline-offset: 4px; }
</style>
