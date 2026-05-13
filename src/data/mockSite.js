import heroOne from "../assets/editorial-hero-1.svg";
import heroTwo from "../assets/editorial-hero-2.svg";
import cardOne from "../assets/editorial-card-1.svg";
import cardTwo from "../assets/editorial-card-2.svg";

export const siteNavigation = [
  { label: "首页", to: "/" },
  { label: "关于我们", to: "/about" },
  { label: "品牌实力", to: "/factory" },
  { label: "产品中心", to: "/products" },
  { label: "新闻资讯", to: "/news" },
  { label: "招商合作", to: "/cooperation" },
  { label: "联系我们", to: "/contact" },
  { label: "提交询盘", to: "/inquiry" }
];

export const hotKeywords = ["layered necklace", "gift set", "hoop earrings", "bridal jewelry", "editorial ring"];

export const categories = [
  { name: "不锈钢首饰", slug: "stainless-steel-jewelry", description: "主打耐用、时尚、适合长期陈列与跨境零售。", count: 320 },
  { name: "发饰节日装饰品", slug: "hair-accessories-holiday-decor", description: "覆盖节庆、派对、礼赠和快消型造型配件场景。", count: 210 },
  { name: "PVC卡通手办", slug: "pvc-cartoon-figures", description: "偏二次元、潮玩与礼品零售方向，适合主题专题页。", count: 145 },
  { name: "包装盒类", slug: "packaging-boxes", description: "用于礼盒、首饰包装、展示盒和品牌出货包装。", count: 96 },
  { name: "厚厚遗咖啡杯", slug: "houhouyi-coffee-cups", description: "偏生活方式周边，可作为联名或礼赠衍生品展示。", count: 72 }
];

export const products = [
  {
    id: "p-1001",
    code: "XP-NK-1024",
    name: "Aurora Layer Necklace",
    description: "适合新品主推区的多层项链，强调光泽与搭配延展。",
    category: "不锈钢首饰",
    categorySlug: "stainless-steel-jewelry",
    badge: "New Arrival",
    image: heroOne,
    gallery: [
      "linear-gradient(135deg, #f8e1b7, #a85a27)",
      "linear-gradient(135deg, #f9f2e5, #d0ab71)",
      "linear-gradient(135deg, #dec5ad, #9c4e1a)",
      "linear-gradient(135deg, #fff2dc, #ba7c4a)"
    ]
  },
  {
    id: "p-1002",
    code: "XP-ER-7612",
    name: "Sculpt Hoop Earrings",
    description: "以轮廓感和高频销量为目标的耳饰核心款。",
    category: "发饰节日装饰品",
    categorySlug: "hair-accessories-holiday-decor",
    badge: "Best Seller",
    image: heroTwo,
    gallery: [
      "linear-gradient(135deg, #f3d6c4, #81452b)",
      "linear-gradient(135deg, #f9eee7, #b67b5c)",
      "linear-gradient(135deg, #e7c3b0, #6b3f28)",
      "linear-gradient(135deg, #f7e7df, #94583e)"
    ]
  },
  {
    id: "p-1003",
    code: "XP-RG-2388",
    name: "Mirror Cut Ring",
    description: "强调精致度和系列延展，适合打造主图视觉。",
    category: "PVC卡通手办",
    categorySlug: "pvc-cartoon-figures",
    badge: "Editorial Pick",
    image: cardOne,
    gallery: [
      "linear-gradient(135deg, #e8dfd8, #746153)",
      "linear-gradient(135deg, #f5f2ee, #a18d7d)",
      "linear-gradient(135deg, #d2c2b7, #5f4b3f)",
      "linear-gradient(135deg, #f0ebe6, #867261)"
    ]
  },
  {
    id: "p-1004",
    code: "XP-ST-5301",
    name: "Celeste Gift Set",
    description: "面向礼品渠道和陈列场景的成套组合产品。",
    category: "包装盒类",
    categorySlug: "packaging-boxes",
    badge: "Wholesale Set",
    image: cardTwo,
    gallery: [
      "linear-gradient(135deg, #f4e7d0, #9f8054)",
      "linear-gradient(135deg, #fff5e8, #c4a072)",
      "linear-gradient(135deg, #e8dbc6, #8e6d45)",
      "linear-gradient(135deg, #f3eadf, #ad8b63)"
    ]
  },
  {
    id: "p-1005",
    code: "XP-ER-9102",
    name: "Lustre Drop Earrings",
    description: "更适合礼赠与轻奢通勤场景的耳饰长销款。",
    category: "厚厚遗咖啡杯",
    categorySlug: "houhouyi-coffee-cups",
    badge: "Retail Favorite",
    image: heroTwo,
    gallery: [
      "linear-gradient(135deg, #f1dfd1, #8f5c42)",
      "linear-gradient(135deg, #fff3e6, #b58568)",
      "linear-gradient(135deg, #ecd6c5, #77523d)",
      "linear-gradient(135deg, #f5e7dc, #a46e50)"
    ]
  },
  {
    id: "p-1006",
    code: "XP-NK-5521",
    name: "Contour Chain Set",
    description: "突出层叠视觉与礼盒搭配的品牌主推系列。",
    category: "不锈钢首饰",
    categorySlug: "stainless-steel-jewelry",
    badge: "Campaign Hero",
    image: heroOne,
    gallery: [
      "linear-gradient(135deg, #f6e7cf, #9b6f45)",
      "linear-gradient(135deg, #fff6ea, #b88f62)",
      "linear-gradient(135deg, #ead5bc, #7a5734)",
      "linear-gradient(135deg, #f4e7d7, #9c7652)"
    ]
  }
];

export const articles = [
  {
    id: "n-1001",
    title: "2026 春夏主推系列发布",
    summary: "围绕轻奢金属感和层叠搭配趋势，更新首页主推区与招商素材。",
    category: "新品动态",
    date: "2026-04-28",
    content: [
      "本次系列聚焦年轻化造型和更强的陈列表现，适合线上选款与线下渠道同步推进。",
      "网站上建议把新品作为首页一级视觉内容，同时关联到产品中心和询盘入口。"
    ]
  },
  {
    id: "n-1002",
    title: "展会合作与渠道招商节奏说明",
    summary: "整理展会现场素材、招商政策和合作流程，统一对外表达。",
    category: "招商合作",
    date: "2026-03-17",
    content: [
      "建议把招商内容做成单独页面，而不是散落在新闻里，便于渠道客户快速判断合作门槛。",
      "前台内容应突出流程、起订规则、支持政策和对接方式。"
    ]
  },
  {
    id: "n-1003",
    title: "官网改版方向：业务结构不变，视觉系统升级",
    summary: "把企业官网从信息堆叠式表达，升级为更有品牌节奏的编辑型页面。",
    category: "品牌内容",
    date: "2026-02-09",
    content: [
      "在保留分类、详情、询盘、合作等核心路径的前提下，通过排版和视觉节奏提升专业感。",
      "这类升级最适合外贸、批发和品牌展示场景，而不是重交易商城。"
    ]
  }
];

export const pages = [
  {
    key: "privacy",
    title: "隐私政策",
    description: "说明站点如何处理询盘信息、联系信息和基础访问数据。",
    content: [
      "我们仅在业务沟通、报价、样品确认和招商合作场景下收集必要信息。",
      "提交询盘的联系人信息将仅用于销售跟进、报价反馈和后续商务对接。",
      "如需删除相关信息，可通过站点联系方式发起处理请求。"
    ]
  },
  {
    key: "terms",
    title: "服务条款",
    description: "规范站点内容使用、询盘提交与资料下载的基础规则。",
    content: [
      "本网站展示内容主要用于品牌介绍、产品展示和商务沟通。",
      "所有产品图片、文案和品牌资料未经授权不得复制用于商业用途。",
      "提交询盘并不构成最终订单，实际合作以双方确认的商务条款为准。"
    ]
  },
  {
    key: "downloads",
    title: "下载中心",
    description: "集中管理产品画册、招商资料和品牌介绍文件。",
    content: [
      "可提供季度产品画册、招商资料包和品牌介绍 PDF。",
      "正式版本可接入后台上传和下载权限控制。"
    ]
  }
];

export const topics = [
  {
    slug: "spring-edit",
    title: "Spring Edit 2026",
    eyebrow: "Editorial Topic",
    summary: "以层叠金属感、礼赠组合和年轻化陈列为重点的季度专题页。",
    content: [
      "专题页适合承接首页 Banner、社媒投放和展会推广流量。",
      "内容结构通常包括主视觉、系列说明、核心单品、招商入口和询盘 CTA。",
      "这一类页面可以后台持续新增，作为运营位资产长期使用。"
    ]
  }
];

export const adminDashboard = {
  metrics: [
    { label: "产品数量", value: 1286 },
    { label: "分类数量", value: 18 },
    { label: "新闻数量", value: 36 },
    { label: "待处理询盘", value: 27 }
  ],
  recentInquiries: [
    { id: "iq-1001", name: "Mia Chen", company: "Lune Retail", email: "mia@lune.com", status: "new" },
    { id: "iq-1002", name: "David Wong", company: "Aura Trading", email: "david@aura.com", status: "processing" },
    { id: "iq-1003", name: "Sophia Lee", company: "Maison Edit", email: "sophia@maison.com", status: "quoted" }
  ]
};

export const adminBanners = {
  items: [
    { id: "b-1", title: "首页主视觉", slot: "hero", status: "published" },
    { id: "b-2", title: "新品专区横幅", slot: "featured", status: "draft" },
    { id: "b-3", title: "招商合作横幅", slot: "cooperation", status: "published" }
  ]
};

export const adminProducts = {
  items: products.map((item, index) => ({
    ...item,
    status: index % 2 === 0 ? "published" : "draft"
  }))
};

export const adminCategories = {
  items: categories
};

export const adminNews = {
  items: articles
};

export const adminPages = {
  items: pages
};

export const adminInquiries = {
  items: adminDashboard.recentInquiries
};

export const adminSettings = {
  seo: {
    title: "Xuping Brand House",
    keywords: "fashion jewelry, wholesale, brand site",
    description: "Editorial brand site for jewelry wholesale and product inquiry."
  },
  contact: {
    phone: "+86 400-800-2026",
    email: "sales@xupingbrandhouse.com"
  }
};

export const homePayload = {
  hero: {
    eyebrow: "ASOS-inspired visual direction",
    title: "A sharper fashion identity for a wholesale-ready jewelry site.",
    description:
      "前台延续 Xuping 这类站点的业务结构，但以更强的编辑感和时尚排版来承载首页、新品、合作和询盘转化。",
    highlight: {
      title: "Spring / Summer 2026",
      subtitle: "Layered shine, modern gifting, premium merchandising"
    },
    primaryImage:
      "https://gd-hbimg.huaban.com/fcd4cf79261fab484cbe54ce30935a5a85c281172074e1-899wrY_fw658webp",
    secondaryImage: heroTwo
  },
  categories,
  featuredProducts: products.slice(0, 4),
  news: articles,
  topic: topics[0]
};
