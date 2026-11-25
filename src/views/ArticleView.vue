<script setup lang="ts">
import { computed } from "vue";
import ArticleGrid from "@/components/articles/ArticleGrid.vue";
import SectionHeading from "@/components/common/SectionHeading.vue";
import CategoryBadge from "@/components/common/CategoryBadge.vue";
import FacebookIcon from "@/components/common/FacebookIcon.vue";
import NotFoundView from "./NotFoundView.vue";
import { getArticleBySlug } from "@/data/articles";
import { getCategory } from "@/data/categories";
import { settings } from "@/data/settings";
import { useArticles } from "@/composables/useArticles";
import { useSeo } from "@/composables/useSeo";
import { formatDate } from "@/composables/useFormat";

const props = defineProps<{ slug: string }>();
const article = computed(() => getArticleBySlug(props.slug));
const category = computed(() =>
  article.value ? getCategory(article.value.category) : null,
);
const related = computed(() =>
  article.value ? useArticles().related(article.value) : [],
);
const shareUrl = computed(() => {
  const url = `${settings.siteUrl.replace(/\/$/, "")}/article/${props.slug}`;
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
});

// Parses the plain-text `content` field into headings and paragraphs (rendered safely, no v-html).
const blocks = computed(() =>
  (article.value?.content ?? "")
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean)
    .map((b) =>
      b.startsWith("## ")
        ? { type: "h2" as const, text: b.slice(3) }
        : { type: "p" as const, text: b },
    ),
);

useSeo(() =>
  article.value
    ? {
        title: `${article.value.title} | ${settings.name}`,
        description: article.value.description,
        path: `/article/${article.value.slug}`,
        image: settings.ogImage,
        type: "article",
      }
    : {
        title: `រកមិនឃើញ | ${settings.name}`,
        description: settings.description,
        path: `/article/${props.slug}`,
      },
);
</script>

<template>
  <NotFoundView v-if="!article" />
  <template v-else>
    <article class="container wrap">
      <el-breadcrumb separator="/" class="crumbs">
        <el-breadcrumb-item :to="{ path: '/' }">ទំព័រដើម</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: category?.path }">{{
          category?.title
        }}</el-breadcrumb-item>
      </el-breadcrumb>

      <header class="head">
        <CategoryBadge :slug="article.category" />
        <h1>{{ article.title }}</h1>
        <p class="lead">{{ article.description }}</p>
        <div class="meta-row">
          <time class="meta" :datetime="article.publishedAt">{{
            formatDate(article.publishedAt)
          }}</time>
          <a
            :href="shareUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="share"
            ><FacebookIcon /> ចែករំលែកលើ Facebook</a
          >
        </div>
      </header>

      <img
        class="cover"
        :src="article.image"
        :alt="article.title"
        width="1200"
        height="675"
      />

      <div class="content">
        <template v-for="(b, i) in blocks" :key="i">
          <h2 v-if="b.type === 'h2'">{{ b.text }}</h2>
          <p v-else>{{ b.text }}</p>
        </template>
        <ul class="tags" v-if="article.tags.length">
          <li v-for="t in article.tags" :key="t">#{{ t }}</li>
        </ul>
      </div>
    </article>

    <section class="section section--surface related">
      <div class="container">
        <SectionHeading title="អត្ថបទដែលពាក់ព័ន្ធ" />
        <ArticleGrid :articles="related" />
      </div>
    </section>
  </template>
</template>

<style scoped>
.wrap {
  max-width: 860px;
  padding-top: 32px;
  padding-bottom: 72px;
}
.crumbs {
  margin-bottom: 28px;
}
.head {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
}
h1 {
  font-size: clamp(28px, 4.5vw, 42px);
}
.lead {
  font-size: 19px;
  color: var(--c-muted);
}
.meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 14px;
  border-top: 1px solid var(--c-border);
}
.share {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #1877f2;
}
.share:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}
.cover {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--radius);
  margin-bottom: 40px;
}
.content {
  max-width: 720px;
  margin: 0 auto;
}
.content p {
  font-size: 19px;
  line-height: 2.1;
  margin-bottom: 22px;
}
.content h2 {
  font-size: 26px;
  margin: 40px 0 14px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-top: 36px;
  padding-top: 20px;
  border-top: 1px solid var(--c-border);
  color: var(--c-muted);
  font-size: 15px;
}
@media (max-width: 640px) {
  .cover{
    width: 100%;
    height: 200px;
  }
  .content p {
    font-size: 17px;
  }
  .content h2 {
    font-size: 22px;
  }
}
</style>
