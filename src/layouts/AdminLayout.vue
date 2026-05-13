<template>
  <div v-if="isLoginPage" class="admin-login-shell">
    <RouterView />
  </div>
  <div v-else class="admin-shell">
    <aside class="admin-sidebar">
      <RouterLink to="/admin/dashboard" class="admin-brand">
        <span>Admin CMS</span>
        <strong>Xuping Brand House</strong>
      </RouterLink>
      <nav class="admin-nav">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
      </nav>
    </aside>
    <section class="admin-main">
      <header class="admin-topbar">
        <div>
          <p class="eyebrow">Admin</p>
          <h1>{{ route.meta.title }}</h1>
        </div>
        <div class="admin-topbar__actions">
          <RouterLink to="/" class="button button--ghost">返回前台</RouterLink>
          <button class="button button--primary" type="button" @click="logout">退出登录</button>
        </div>
      </header>
      <RouterView />
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const isLoginPage = computed(() => route.path === "/admin/login");

const navItems = [
  { label: "控制台", to: "/admin/dashboard" },
  { label: "Banner 管理", to: "/admin/banners" },
  { label: "产品管理", to: "/admin/products" },
  { label: "分类管理", to: "/admin/categories" },
  { label: "新闻管理", to: "/admin/news" },
  { label: "页面内容", to: "/admin/pages" },
  { label: "询盘管理", to: "/admin/inquiries" },
  { label: "系统设置", to: "/admin/settings" }
];

const logout = () => {
  localStorage.removeItem("admin-token");
  router.push("/admin/login");
};
</script>
