<template>
  <div v-if="payload" class="admin-content">
    <div class="admin-section-head">
      <h2>询盘管理</h2>
      <button class="button button--primary" type="button" @click="markAllProcessed">批量处理</button>
    </div>
    <table class="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>联系人</th>
          <th>公司</th>
          <th>邮箱</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in payload.items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.company }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.status }}</td>
          <td class="admin-actions">
            <button type="button" @click="advanceStatus(item)">推进状态</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="status" class="form-status">{{ status }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAdminInquiries } from "../composables/useApi";

const payload = ref(null);
const status = ref("");
const flow = ["new", "processing", "quoted", "closed"];

onMounted(async () => {
  payload.value = await getAdminInquiries();
});

const advanceStatus = (item) => {
  const index = flow.indexOf(item.status);
  item.status = flow[(index + 1) % flow.length];
  status.value = `${item.name} 的询盘状态已更新为 ${item.status}。`;
};

const markAllProcessed = () => {
  payload.value.items.forEach((item) => {
    item.status = "processing";
  });
  status.value = "已将全部询盘切换为处理中。";
};
</script>
