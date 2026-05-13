<template>
  <div v-if="payload" class="admin-content">
    <div class="admin-section-head">
      <h2>产品列表</h2>
      <button class="button button--primary" type="button" @click="addProduct">新增产品</button>
    </div>
    <table class="admin-table">
      <thead>
        <tr>
          <th>编号</th>
          <th>名称</th>
          <th>分类</th>
          <th>标签</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in payload.items" :key="item.id">
          <td>{{ item.code }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.badge }}</td>
          <td>{{ item.status }}</td>
          <td class="admin-actions">
            <button type="button" @click="toggleStatus(item)">切换状态</button>
            <button type="button" @click="pinProduct(item)">设为推荐</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="status" class="form-status">{{ status }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAdminProducts } from "../composables/useApi";

const payload = ref(null);
const status = ref("");

onMounted(async () => {
  payload.value = await getAdminProducts();
});

const addProduct = () => {
  payload.value.items.unshift({
    id: `p-${Date.now()}`,
    code: `XP-DEMO-${payload.value.items.length + 1}`,
    name: "Demo Showcase Product",
    category: "项链系列",
    badge: "Demo",
    status: "draft"
  });
  status.value = "已新增一条演示产品。";
};

const toggleStatus = (item) => {
  item.status = item.status === "published" ? "draft" : "published";
  status.value = `${item.name} 已切换为 ${item.status}。`;
};

const pinProduct = (item) => {
  item.badge = "Pinned Demo";
  status.value = `${item.name} 已设为推荐展示。`;
};
</script>
