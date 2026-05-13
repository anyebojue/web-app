<template>
  <RouterLink :to="`/news/${article.id}`" class="news-card">
    <p class="news-card__meta">{{ article.date }} · {{ article.category }}</p>
    <h3>{{ article.title }}</h3>
    <p>{{ article.summary }}</p>
  </RouterLink>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
});
</script>
