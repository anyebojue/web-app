<template>
  <div v-if="article" class="page-shell">
    <Breadcrumbs />
    <PageHero :eyebrow="article.category" :title="article.title" :description="article.summary" />
    <section class="section">
      <div class="container prose">
        <p v-for="(paragraph, index) in article.content" :key="index">{{ paragraph }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getNewsById } from "../composables/useApi";
import PageHero from "../components/PageHero.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

const route = useRoute();
const article = ref(null);

onMounted(async () => {
  article.value = await getNewsById(route.params.id);
});
</script>
