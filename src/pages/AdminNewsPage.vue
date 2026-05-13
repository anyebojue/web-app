<template>
  <div v-if="payload" class="admin-content">
    <div class="admin-section-head">
      <h2>新闻管理</h2>
      <button class="button button--primary" type="button" @click="addArticle">新增新闻</button>
    </div>
    <table class="admin-table">
      <thead>
        <tr>
          <th>标题</th>
          <th>分类</th>
          <th>日期</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in payload.items" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.date }}</td>
          <td class="admin-actions">
            <button type="button" @click="promoteArticle(item)">推荐</button>
            <button type="button" @click="removeArticle(item.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="status" class="form-status">{{ status }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAdminNews } from "../composables/useApi";

const payload = ref(null);
const status = ref("");

onMounted(async () => {
  payload.value = await getAdminNews();
});

const addArticle = () => {
  payload.value.items.unshift({
    id: `n-${Date.now()}`,
    title: "演示新增新闻内容",
    category: "品牌内容",
    date: "2026-05-13"
  });
  status.value = "已新增一篇演示新闻。";
};

const promoteArticle = (item) => {
  item.category = `${item.category} · 推荐`;
  status.value = `${item.title} 已标记为推荐内容。`;
};

const removeArticle = (id) => {
  payload.value.items = payload.value.items.filter((item) => item.id !== id);
  status.value = "新闻已从演示列表移除。";
};
</script>
