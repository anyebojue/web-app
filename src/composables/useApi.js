import {
  adminBanners,
  adminCategories,
  adminDashboard,
  adminInquiries,
  adminNews,
  adminPages,
  adminProducts,
  adminSettings,
  articles,
  categories,
  homePayload,
  hotKeywords,
  pages,
  products,
  siteNavigation,
  topics
} from "../data/mockSite";

const wait = (value, ms = 180) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(structuredClone(value)), ms);
  });

export const getHomePayload = () => wait(homePayload);
export const getSitePayload = () => wait({ brand: "Xuping Brand House", categories });
export const getNavigationPayload = () => wait({ items: siteNavigation });
export const getHotKeywords = () => wait({ items: hotKeywords });
export const getProductsPayload = () => wait({ categories, products });
export const getProductById = (id) => wait(products.find((item) => item.id === id));
export const getNewsPayload = () => wait({ articles });
export const getNewsById = (id) => wait(articles.find((item) => item.id === id));
export const getPageByKey = (key) => wait(pages.find((item) => item.key === key));
export const getTopicsPayload = () => wait({ items: topics });
export const getTopicBySlug = (slug) => wait(topics.find((item) => item.slug === slug));
export const submitInquiry = (payload) =>
  wait({
    message: `演示提交成功：已收到 ${payload.name || "客户"} 的询盘信息。`
  });

export const adminLogin = () =>
  wait({
    token: "demo-admin-token",
    user: {
      name: "Admin",
      role: "super_admin"
    }
  });

export const getAdminDashboard = () => wait(adminDashboard);
export const getAdminBanners = () => wait(adminBanners);
export const getAdminProducts = () => wait(adminProducts);
export const getAdminCategories = () => wait(adminCategories);
export const getAdminNews = () => wait(adminNews);
export const getAdminPages = () => wait(adminPages);
export const getAdminInquiries = () => wait(adminInquiries);
export const getAdminSettings = () => wait(adminSettings);
