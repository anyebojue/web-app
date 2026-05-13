<template>
  <div v-if="page" class="page-shell">
    <Breadcrumbs />
    <PageHero eyebrow="Information" :title="page.title" :description="page.description" />
    <section class="section">
      <div class="container prose">
        <p v-for="(paragraph, index) in page.content" :key="index">{{ paragraph }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getPageByKey } from "../composables/useApi";
import PageHero from "../components/PageHero.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

const props = defineProps({
  pageKey: {
    type: String,
    required: true
  }
});

const page = ref(null);

onMounted(async () => {
  page.value = await getPageByKey(props.pageKey);
});
</script>
