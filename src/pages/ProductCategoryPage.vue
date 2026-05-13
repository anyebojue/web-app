<template>
  <div v-if="category" class="page-shell">
    <Breadcrumbs />
    <PageHero eyebrow="Category" :title="category.name" :description="category.description" />
    <section class="section">
      <div class="container product-grid">
        <ProductCard v-for="product in categoryProducts" :key="product.id" :product="product" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getProductsPayload } from "../composables/useApi";
import PageHero from "../components/PageHero.vue";
import ProductCard from "../components/ProductCard.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

const route = useRoute();
const payload = ref(null);

const category = computed(() => payload.value?.categories.find((item) => item.slug === route.params.slug));
const categoryProducts = computed(() =>
  payload.value?.products.filter((item) => item.categorySlug === route.params.slug) || []
);

onMounted(async () => {
  payload.value = await getProductsPayload();
});
</script>
