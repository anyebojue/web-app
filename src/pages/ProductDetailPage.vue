<template>
  <div v-if="product" class="page-shell">
    <Breadcrumbs />
    <PageHero eyebrow="Product Detail" :title="product.name" :description="product.description" />
    <section class="section">
      <div class="container detail-grid">
        <div class="detail-gallery">
          <div v-for="(item, index) in product.gallery" :key="index" class="detail-gallery__item" :style="{ background: item }"></div>
        </div>
        <div class="detail-copy">
          <p class="detail-code">款号：{{ product.code }}</p>
          <ul class="detail-points">
            <li>分类：{{ product.category }}</li>
            <li>材质：环保合金 / 镶嵌锆石</li>
            <li>工艺：电镀、抛光、品控质检</li>
            <li>起订：支持按系列询盘</li>
          </ul>
          <RouterLink class="button button--primary" to="/inquiry">提交同款询盘</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getProductById } from "../composables/useApi";
import PageHero from "../components/PageHero.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

const route = useRoute();
const product = ref(null);

onMounted(async () => {
  product.value = await getProductById(route.params.id);
});
</script>
