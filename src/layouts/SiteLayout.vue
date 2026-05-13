<template>
  <div class="site-shell">
    <div class="utility-strip">
      <div class="container utility-strip__inner">
        <div class="utility-tabs">
          <span class="utility-tabs__active">WOMEN</span>
          <span>WHOLESALE</span>
        </div>
        <p>Fashion-led jewelry demo with ASOS-style merchandising structure</p>
      </div>
    </div>

    <header class="site-header">
      <div class="container header-inner">
        <RouterLink to="/" class="brand-mark">
          <span class="brand-mark__name">XUPING</span>
        </RouterLink>

        <nav class="site-nav" :class="{ 'site-nav--open': menuOpen }">
          <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" @click="menuOpen = false">
            {{ item.label }}
          </RouterLink>
        </nav>

        <form class="header-search" @submit.prevent="goSearch">
          <input v-model="search" type="search" placeholder="Search for products, edits and inspiration" />
        </form>

        <button class="menu-toggle" type="button" @click="menuOpen = !menuOpen">
          {{ menuOpen ? "关闭" : "菜单" }}
        </button>
      </div>

      <div class="subnav-strip">
        <div class="container subnav-strip__inner">
          <RouterLink v-for="item in subnavItems" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <p class="footer-kicker">Wholesale-ready brand site</p>
          <h3>Editorial polish for a product-led business.</h3>
        </div>
        <div>
          <p>主营：时尚饰品、套装、耳饰、项链、戒指、手链。</p>
          <p>支持：品牌展示、产品询盘、招商合作、内容运营。</p>
        </div>
        <div>
          <p>邮箱：hello@xupingbrandhouse.com</p>
          <p>电话：+86 400-800-2026</p>
          <p><RouterLink to="/privacy">隐私政策</RouterLink> · <RouterLink to="/terms">服务条款</RouterLink></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getNavigationPayload } from "../composables/useApi";

const menuOpen = ref(false);
const navItems = ref([]);
const search = ref("");
const router = useRouter();

const subnavItems = [
  { label: "NEW IN", to: "/products" },
  { label: "TRENDING", to: "/topics/spring-edit" },
  { label: "STEEL JEWELRY", to: "/products/category/stainless-steel-jewelry" },
  { label: "HAIR & HOLIDAY", to: "/products/category/hair-accessories-holiday-decor" },
  { label: "PVC FIGURES", to: "/products/category/pvc-cartoon-figures" },
  { label: "PACKAGING", to: "/products/category/packaging-boxes" },
  { label: "COFFEE CUPS", to: "/products/category/houhouyi-coffee-cups" },
  { label: "DOWNLOADS", to: "/downloads" }
];

const goSearch = () => {
  router.push({ path: "/search", query: search.value ? { q: search.value } : {} });
};

onMounted(async () => {
  const payload = await getNavigationPayload();
  navItems.value = payload.items;
});
</script>
