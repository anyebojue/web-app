<template>
  <div v-if="topic" class="page-shell">
    <Breadcrumbs />
    <PageHero :eyebrow="topic.eyebrow" :title="topic.title" :description="topic.summary" />
    <section class="section">
      <div class="container prose">
        <p v-for="(paragraph, index) in topic.content" :key="index">{{ paragraph }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getTopicBySlug } from "../composables/useApi";
import PageHero from "../components/PageHero.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

const route = useRoute();
const topic = ref(null);

onMounted(async () => {
  topic.value = await getTopicBySlug(route.params.slug);
});
</script>
