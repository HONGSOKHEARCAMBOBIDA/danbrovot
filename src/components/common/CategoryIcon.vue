<script setup lang="ts">
import { computed } from 'vue'
import { Clock, User, Opportunity, Reading } from '@element-plus/icons-vue'
import type { CategoryIcon } from '@/types'

const props = defineProps<{ name: CategoryIcon }>()
const icons = { clock: Clock, user: User, bulb: Opportunity, book: Reading }
const icon = computed(() => icons[props.name])
</script>

<template>
  <el-icon><component :is="icon" /></el-icon>
</template>
