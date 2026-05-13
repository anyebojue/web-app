<template>
  <div v-if="payload" class="page-shell">
    <Breadcrumbs />
    <PageHero
      eyebrow="Search"
      title="搜索结果"
      :description="`围绕关键词 “${keyword || '全部'}” 的产品结果与热门搜索建议。`"
    />
    <section class="section">
      <div class="container search-toolbar">
        <input v-model="keywordInput" type="search" placeholder="搜索产品名称、编号、分类" @keyup.enter="applySearch" />
        <button class="button button--primary" type="button" @click="applySearch">搜索</button>
      </div>
      <div class="container hot-keywords">
        <span>热门搜索</span>
        <button v-for="item in hotKeywords" :key="item" type="button" @click="quickSearch(item)">{{ item }}</button>
      </div>
      <div class="container">
        <p class="results-meta">共 {{ filteredProducts.length }} 条结果</p>
      </div>
      <div class="container product-grid">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getHotKeywords, getProductsPayload } from "../composables/useApi";
import PageHero from "../components/PageHero.vue";
import ProductCard from "../components/ProductCard.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

const route = useRoute();
const router = useRouter();
const payload = ref(null);
const hotKeywords = ref([]);
const keywordInput = ref(route.query.q || "");
const keyword = ref(route.query.q || "");

const filteredProducts = computed(() => {
  const list = payload.value?.products || [];
  const value = keyword.value.toString().trim().toLowerCase();
  if (!value) {
    return list;
  }
  return list.filter((product) =>
    [product.name, product.code, product.description, product.category].join(" ").toLowerCase().includes(value)
  );
});

const applySearch = () => {
  router.replace({ path: "/search", query: keywordInput.value ? { q: keywordInput.value } : {} });
};

const quickSearch = (value) => {
  keywordInput.value = value;
  applySearch();
};

watch(
  () => route.query.q,
  (value) => {
    keyword.value = value || "";
    keywordInput.value = value || "";
  }
);

onMounted(async () => {
  const [products, hot] = await Promise.all([getProductsPayload(), getHotKeywords()]);
  payload.value = products;
  hotKeywords.value = hot.items;
});
</script>
