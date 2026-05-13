<template>
  <div v-if="payload" class="admin-content">
    <div class="admin-section-head">
      <h2>单页内容</h2>
      <button class="button button--primary" type="button" @click="simulateSave">保存当前配置</button>
    </div>
    <table class="admin-table">
      <thead>
        <tr>
          <th>页面标识</th>
          <th>标题</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in payload.items" :key="item.key">
          <td>{{ item.key }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="status" class="form-status">{{ status }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAdminPages } from "../composables/useApi";

const payload = ref(null);
const status = ref("");

onMounted(async () => {
  payload.value = await getAdminPages();
});

const simulateSave = () => {
  status.value = "演示保存成功，页面内容配置已更新。";
};
</script>
