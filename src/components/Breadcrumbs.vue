<template>
  <div class="container" v-if="items.length > 1">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <RouterLink to="/">首页</RouterLink>
      <span v-for="(item, index) in items" :key="`${item.path}-${index}`">
        <span class="breadcrumbs__divider">/</span>
        <RouterLink v-if="index < items.length - 1" :to="item.path">{{ item.label }}</RouterLink>
        <strong v-else>{{ item.label }}</strong>
      </span>
    </nav>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const items = computed(() =>
  route.matched
    .filter((record) => record.path !== "/")
    .map((record) => ({
      path: record.path.includes(":") ? route.path : record.path,
      label: record.meta?.title || "页面"
    }))
);
</script>
