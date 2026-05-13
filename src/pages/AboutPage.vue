<template>
  <div class="page-shell">
    <Breadcrumbs />
    <PageHero
      eyebrow="About"
      title="关于我们"
      description="围绕品牌感、产品组织与询盘转化来搭建内容，不走复杂电商平台路线。"
    />
    <section class="section">
      <div class="container content-grid">
        <div>
          <h2>品牌定位</h2>
          <p>面向饰品品牌商、经销商与渠道客户，展示系列、工艺能力与合作模式。</p>
        </div>
        <div>
          <h2>网站目标</h2>
          <p>让访客快速理解品牌调性、产品优势、工厂实力和合作入口。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "../components/PageHero.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
</script>
