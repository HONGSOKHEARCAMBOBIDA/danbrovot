<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
  linkText?: string;
  linkTo?: string;
}>();
</script>

<template>
  <header class="heading">
    <div>
      <h2>{{ title }}</h2>
      <p v-if="subtitle" class="muted">{{ subtitle }}</p>
    </div>
    <RouterLink v-if="linkTo" :to="linkTo" class="link-arrow">{{
      linkText
    }}</RouterLink>
  </header>
</template>

<style scoped>
.heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  padding-bottom: 16px;
  margin-bottom: 36px;
  border-bottom: 2px solid var(--c-secondary);
}
h2 {
  font-size: 30px;
}
@media (max-width: 640px) {
  h2 {
    font-size: 24px;
  }
  .heading {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
