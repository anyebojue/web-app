<template>
  <div v-if="payload" class="admin-content">
    <section class="admin-metrics">
      <article v-for="item in payload.metrics" :key="item.label" class="admin-card">
        <span>{{ item.label }}</span>
        <strong>{{ item.value }}</strong>
      </article>
    </section>
    <section class="admin-table-wrap">
      <div class="admin-section-head">
        <h2>最近询盘</h2>
      </div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>联系人</th>
            <th>公司</th>
            <th>邮箱</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in payload.recentInquiries" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.company }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAdminDashboard } from "../composables/useApi";

const payload = ref(null);

onMounted(async () => {
  payload.value = await getAdminDashboard();
});
</script>
