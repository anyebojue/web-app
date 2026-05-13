<template>
  <div v-if="payload" class="admin-content">
    <div class="admin-section-head">
      <h2>分类管理</h2>
    </div>
    <table class="admin-table">
      <thead>
        <tr>
          <th>名称</th>
          <th>标识</th>
          <th>款式数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in payload.items" :key="item.slug">
          <td>{{ item.name }}</td>
          <td>{{ item.slug }}</td>
          <td>{{ item.count }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAdminCategories } from "../composables/useApi";

const payload = ref(null);

onMounted(async () => {
  payload.value = await getAdminCategories();
});
</script>
