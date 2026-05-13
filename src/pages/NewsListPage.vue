<template>
  <div v-if="payload" class="page-shell">
    <Breadcrumbs />
    <PageHero eyebrow="Newsroom" title="新闻资讯" description="发布新品动态、展会信息、品牌内容和招商更新。" />
    <section class="section">
      <div class="container news-grid">
        <NewsCard v-for="article in payload.articles" :key="article.id" :article="article" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getNewsPayload } from "../composables/useApi";
import PageHero from "../components/PageHero.vue";
import NewsCard from "../components/NewsCard.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

const payload = ref(null);

onMounted(async () => {
  payload.value = await getNewsPayload();
});
</script>
