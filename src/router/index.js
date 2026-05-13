import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import FactoryPage from "../pages/FactoryPage.vue";
import ProductCenterPage from "../pages/ProductCenterPage.vue";
import ProductCategoryPage from "../pages/ProductCategoryPage.vue";
import ProductDetailPage from "../pages/ProductDetailPage.vue";
import NewsListPage from "../pages/NewsListPage.vue";
import NewsDetailPage from "../pages/NewsDetailPage.vue";
import CooperationPage from "../pages/CooperationPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import InquiryPage from "../pages/InquiryPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import TopicDetailPage from "../pages/TopicDetailPage.vue";
import PolicyPage from "../pages/PolicyPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import AdminLoginPage from "../pages/AdminLoginPage.vue";
import AdminDashboardPage from "../pages/AdminDashboardPage.vue";
import AdminBannerPage from "../pages/AdminBannerPage.vue";
import AdminProductPage from "../pages/AdminProductPage.vue";
import AdminCategoryPage from "../pages/AdminCategoryPage.vue";
import AdminNewsPage from "../pages/AdminNewsPage.vue";
import AdminPageContentPage from "../pages/AdminPageContentPage.vue";
import AdminInquiryPage from "../pages/AdminInquiryPage.vue";
import AdminSettingsPage from "../pages/AdminSettingsPage.vue";

const routes = [
  { path: "/", component: HomePage, meta: { title: "首页" } },
  { path: "/about", component: AboutPage, meta: { title: "关于我们" } },
  { path: "/factory", component: FactoryPage, meta: { title: "品牌实力" } },
  { path: "/products", component: ProductCenterPage, meta: { title: "产品中心" } },
  { path: "/products/category/:slug", component: ProductCategoryPage, meta: { title: "产品分类" } },
  { path: "/products/:id", component: ProductDetailPage, meta: { title: "产品详情" } },
  { path: "/news", component: NewsListPage, meta: { title: "新闻资讯" } },
  { path: "/news/:id", component: NewsDetailPage, meta: { title: "新闻详情" } },
  { path: "/cooperation", component: CooperationPage, meta: { title: "招商合作" } },
  { path: "/contact", component: ContactPage, meta: { title: "联系我们" } },
  { path: "/inquiry", component: InquiryPage, meta: { title: "提交询盘" } },
  { path: "/search", component: SearchResultPage, meta: { title: "搜索结果" } },
  { path: "/topics/:slug", component: TopicDetailPage, meta: { title: "专题活动" } },
  { path: "/privacy", component: PolicyPage, meta: { title: "隐私政策" }, props: { pageKey: "privacy" } },
  { path: "/terms", component: PolicyPage, meta: { title: "服务条款" }, props: { pageKey: "terms" } },
  { path: "/downloads", component: PolicyPage, meta: { title: "下载中心" }, props: { pageKey: "downloads" } },
  { path: "/admin/login", component: AdminLoginPage, meta: { title: "后台登录" } },
  { path: "/admin", redirect: "/admin/dashboard" },
  { path: "/admin/dashboard", component: AdminDashboardPage, meta: { title: "控制台" } },
  { path: "/admin/banners", component: AdminBannerPage, meta: { title: "Banner 管理" } },
  { path: "/admin/products", component: AdminProductPage, meta: { title: "产品管理" } },
  { path: "/admin/categories", component: AdminCategoryPage, meta: { title: "分类管理" } },
  { path: "/admin/news", component: AdminNewsPage, meta: { title: "新闻管理" } },
  { path: "/admin/pages", component: AdminPageContentPage, meta: { title: "页面内容" } },
  { path: "/admin/inquiries", component: AdminInquiryPage, meta: { title: "询盘管理" } },
  { path: "/admin/settings", component: AdminSettingsPage, meta: { title: "系统设置" } },
  { path: "/:pathMatch(.*)*", component: NotFoundPage, meta: { title: "页面不存在" } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

router.beforeEach((to) => {
  if (to.path.startsWith("/admin") && to.path !== "/admin/login") {
    const token = localStorage.getItem("admin-token");
    if (!token) {
      return "/admin/login";
    }
  }

  if (to.path === "/admin/login" && localStorage.getItem("admin-token")) {
    return "/admin/dashboard";
  }

  return true;
});

router.afterEach((to) => {
  document.title = `${to.meta.title || "Xuping Brand House"} | Xuping Brand House`;
});

export default router;
