<template>
  <RouterLink :to="`/products/${product.id}`" class="product-card">
    <div class="product-card__media" :style="mediaStyle">
      <span>{{ product.badge }}</span>
    </div>
    <div class="product-card__body">
      <p class="product-card__code">{{ product.code }}</p>
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
    </div>
  </RouterLink>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const mediaStyle = computed(() => ({
  backgroundImage: `linear-gradient(145deg, rgba(0,0,0,0.05), rgba(0,0,0,0.2)), url(${props.product.image})`,
  backgroundSize: "cover",
  backgroundPosition: "center"
}));
</script>
