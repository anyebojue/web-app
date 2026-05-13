<template>
  <div v-if="payload" class="page-shell">
    <Breadcrumbs />
    <PageHero
      eyebrow="Product Center"
      title="产品中心"
      description="按系列、类目、主题组织产品，让客户更快找到适合的款式。"
    />
    <section class="section">
      <div class="container toolbar">
        <input v-model="keyword" type="search" placeholder="搜索产品名称、编号、关键词" />
      </div>
      <div class="container product-grid">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { getProductsPayload } from "../composables/useApi";
import PageHero from "../components/PageHero.vue";
import ProductCard from "../components/ProductCard.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

const payload = ref(null);
const keyword = ref("");

const filteredProducts = computed(() => {
  if (!payload.value) {
    return [];
  }

  const value = keyword.value.trim().toLowerCase();
  if (!value) {
    return payload.value.products;
  }

  return payload.value.products.filter((product) =>
    [product.name, product.code, product.description, product.category].join(" ").toLowerCase().includes(value)
  );
});

onMounted(async () => {
  payload.value = await getProductsPayload();
});
</script>
