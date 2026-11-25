<script setup lang="ts">
import BrandLogo from '@/components/common/BrandLogo.vue'
import FacebookIcon from '@/components/common/FacebookIcon.vue'
import { settings } from '@/data/settings'
import { navItems } from '@/config/pages'

const year = new Date().getFullYear()
const { contact } = settings
</script>

<template>
  <footer class="footer">
    <div class="container grid">
      <div class="about">
        <BrandLogo light />
        <p>{{ settings.description }}</p>
      </div>
      <nav aria-label="តំណភ្ជាប់ផ្នែកខាងក្រោម">
        <h2>ទំព័រ</h2>
        <ul>
          <li v-for="item in navItems" :key="item.to"><RouterLink :to="item.to">{{ item.label }}</RouterLink></li>
        </ul>
      </nav>
      <div>
        <h2>ទំនាក់ទំនង</h2>
        <ul>
          <li>
            <a :href="settings.facebookUrl" target="_blank" rel="noopener noreferrer" class="fb"><FacebookIcon /> Facebook</a>
          </li>
          <li v-if="contact.email"><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></li>
          <li v-if="contact.phone"><a :href="`tel:${contact.phone}`">{{ contact.phone }}</a></li>
          <li v-if="contact.address">{{ contact.address }}</li>
        </ul>
      </div>
    </div>
    <div class="container copy">© {{ year }} {{ settings.name }}។ រក្សាសិទ្ធិគ្រប់យ៉ាង។</div>
  </footer>
</template>

<style scoped>
.footer { background: var(--c-secondary); color: #d6d6d6; padding-top: 64px; }
.grid { display: grid; grid-template-columns: 2fr 1fr 1.4fr; gap: 48px; padding-bottom: 48px; }
.about p { margin-top: 16px; max-width: 420px; font-size: 15px; color: #b5b5b5; }
h2 { font-family: var(--font-khmer); font-size: 16px; color: #fff; margin-bottom: 12px; }
li { padding: 3px 0; font-size: 15px; }
a:hover { color: #fff; text-decoration: underline; text-underline-offset: 4px; }
.fb { display: inline-flex; align-items: center; gap: 8px; }
.copy { border-top: 1px solid #3a3a3a; padding-block: 20px; font-size: 14px; color: #999; }
@media (max-width: 800px) { .grid { grid-template-columns: 1fr; gap: 32px; } }
</style>
