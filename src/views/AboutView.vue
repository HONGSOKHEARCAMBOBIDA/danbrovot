<script setup lang="ts">
import PageHeader from '@/components/common/PageHeader.vue'
import CategoryIcon from '@/components/common/CategoryIcon.vue'
import FacebookCta from '@/components/home/FacebookCta.vue'
import { categories } from '@/data/categories'
import { useSeo } from '@/composables/useSeo'
import { staticPages } from '@/config/pages'

const page = staticPages.find((p) => p.path === '/about')!
useSeo(page)
</script>

<template>
  <PageHeader title="អំពីយើង" subtitle="About" description="ចំណេះដឹងគឺជាអំណាច — Knowledge is Power" />
  <section class="section">
    <div class="container narrow">
      <p>យើងបង្កើតគេហទំព័រនេះឡើងក្នុងគោលបំណងចែករំលែកចំណេះដឹង ប្រវត្តិសាស្ត្រ ប្រវត្តិបុគ្គលល្បីៗ និងរឿងរ៉ាវដែលមានតម្លៃសម្រាប់ការសិក្សា និងការស្វែងយល់។ យើងជឿជាក់ថា ចំណេះដឹងគឺជាមូលដ្ឋានគ្រឹះនៃការអភិវឌ្ឍខ្លួន និងសង្គម។</p>
      <h2>អ្វីដែលអ្នកនឹងរកឃើញនៅទីនេះ</h2>
      <ul class="list">
        <li v-for="c in categories" :key="c.slug">
          <span class="ic"><CategoryIcon :name="c.icon" /></span>
          <div>
            <h3><RouterLink :to="c.path">{{ c.title }}</RouterLink></h3>
            <p class="muted">{{ c.description }}</p>
          </div>
        </li>
      </ul>
      <h2>របៀបដែលយើងធ្វើការ</h2>
      <p>យើងខិតខំសរសេរខ្លឹមសារជាភាសាខ្មែរដែលងាយយល់ ដោយផ្អែកលើប្រភពដែលអាចទុកចិត្តបាន។ ប្រសិនបើអ្នកសង្កេតឃើញកំហុស សូមទាក់ទងមកយើងតាមទំព័រ Facebook ដើម្បីឱ្យយើងកែតម្រូវ។</p>
    </div>
  </section>
  <FacebookCta />
</template>

<style scoped>
.narrow { max-width: 780px; }
.narrow > p { font-size: 19px; }
h2 { font-size: 26px; margin: 48px 0 16px; }
.list { display: flex; flex-direction: column; }
.list li { display: flex; gap: 18px; padding: 18px 0; border-bottom: 1px solid var(--c-border); }
.list li:first-child { border-top: 1px solid var(--c-border); }
.ic { flex: none; display: grid; place-items: center; width: 44px; height: 44px; border-radius: 50%; background: var(--c-primary); color: #fff; font-size: 20px; }
h3 { font-size: 19px; }
h3 a:hover { color: var(--c-primary); }
</style>
