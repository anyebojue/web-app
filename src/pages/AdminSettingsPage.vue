<template>
  <div v-if="payload" class="admin-content">
    <section class="admin-grid-two">
      <article class="admin-card">
        <p class="eyebrow">SEO</p>
        <h2>{{ payload.seo.title }}</h2>
        <p>{{ payload.seo.description }}</p>
        <p class="admin-inline-meta">关键词：{{ payload.seo.keywords }}</p>
      </article>
      <article class="admin-card">
        <p class="eyebrow">Contact</p>
        <h2>站点联系信息</h2>
        <p>电话：{{ payload.contact.phone }}</p>
        <p>邮箱：{{ payload.contact.email }}</p>
      </article>
    </section>
    <div class="admin-section-head">
      <button class="button button--primary" type="button" @click="saveSettings">保存设置</button>
    </div>
    <p v-if="status" class="form-status">{{ status }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAdminSettings } from "../composables/useApi";

const payload = ref(null);
const status = ref("");

onMounted(async () => {
  payload.value = await getAdminSettings();
});

const saveSettings = () => {
  status.value = "演示保存成功，系统设置已更新。";
};
</script>
