<template>
  <div v-if="payload" class="admin-content">
    <div class="admin-section-head">
      <h2>Banner 列表</h2>
      <button class="button button--primary" type="button" @click="addBanner">新增 Banner</button>
    </div>
    <table class="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>标题</th>
          <th>位置</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in payload.items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.slot }}</td>
          <td>{{ item.status }}</td>
          <td class="admin-actions">
            <button type="button" @click="toggleStatus(item)">{{ item.status === "published" ? "下线" : "发布" }}</button>
            <button type="button" @click="removeBanner(item.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="status" class="form-status">{{ status }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAdminBanners } from "../composables/useApi";

const payload = ref(null);
const status = ref("");

onMounted(async () => {
  payload.value = await getAdminBanners();
});

const addBanner = () => {
  payload.value.items.unshift({
    id: `b-${Date.now()}`,
    title: "演示新增 Banner",
    slot: "hero",
    status: "draft"
  });
  status.value = "已新增一条演示 Banner。";
};

const toggleStatus = (item) => {
  item.status = item.status === "published" ? "draft" : "published";
  status.value = `Banner 状态已切换为 ${item.status}。`;
};

const removeBanner = (id) => {
  payload.value.items = payload.value.items.filter((item) => item.id !== id);
  status.value = "Banner 已从演示列表移除。";
};
</script>
