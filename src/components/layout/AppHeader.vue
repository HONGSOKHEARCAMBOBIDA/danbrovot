<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Menu } from '@element-plus/icons-vue'
import BrandLogo from '@/components/common/BrandLogo.vue'
import { navItems } from '@/config/pages'

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))
</script>

<template>
  <header class="header">
    <div class="container bar">
      <BrandLogo />
      <nav class="desktop" aria-label="ម៉ឺនុយមេ">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" class="nav-link">{{ item.label }}</RouterLink>
      </nav>
      <el-button class="burger" text :icon="Menu" aria-label="បើកម៉ឺនុយ" @click="open = true" />
    </div>
    <el-drawer v-model="open" direction="rtl" size="min(300px, 85vw)" title="ម៉ឺនុយ" :append-to-body="true">
      <nav class="mobile" aria-label="ម៉ឺនុយទូរស័ព្ទ">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" class="m-link">{{ item.label }}</RouterLink>
      </nav>
    </el-drawer>
  </header>
</template>

<style scoped>
.header { position: sticky; top: 0; z-index: 50; background: var(--c-surface); border-bottom: 1px solid var(--c-border); }
.bar { height: var(--header-h); display: flex; align-items: center; justify-content: space-between; }
.desktop { display: flex; gap: 6px; }
.nav-link { position: relative; padding: 8px 14px; font-weight: 500; font-size: 16px; color: var(--c-text); transition: color 0.15s; }
.nav-link:hover { color: var(--c-primary); }
.nav-link.router-link-exact-active,
.nav-link.router-link-active:not([href='/']) { color: var(--c-primary); font-weight: 600; }
.nav-link.router-link-exact-active::after,
.nav-link.router-link-active:not([href='/'])::after { content: ''; position: absolute; left: 14px; right: 14px; bottom: -13px; height: 3px; background: var(--c-primary); }
.burger { display: none; font-size: 24px; }
.mobile { display: flex; flex-direction: column; }
.m-link { padding: 14px 4px; border-bottom: 1px solid var(--c-border); font-size: 18px; }
.m-link.router-link-exact-active,
.m-link.router-link-active:not([href='/']) { color: var(--c-primary); font-weight: 600; }
@media (max-width: 900px) { .desktop { display: none; } .burger { display: inline-flex; } }
</style>
