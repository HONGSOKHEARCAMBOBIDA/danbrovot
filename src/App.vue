<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <a class="skip-link" href="#main">រំលងទៅមាតិកា</a>
  <AppHeader />
  <main id="main">
    <RouterView />
  </main>
  <AppFooter />
</template>
