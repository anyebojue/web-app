<template>
  <component :is="layoutComponent" />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import SiteLayout from "./layouts/SiteLayout.vue";
import AdminLayout from "./layouts/AdminLayout.vue";

const route = useRoute();

const layoutComponent = computed(() =>
  route.path.startsWith("/admin") ? AdminLayout : SiteLayout
);
</script>
