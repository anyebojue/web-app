<template>
  <div class="page-shell">
    <Breadcrumbs />
    <PageHero eyebrow="Contact" title="联系我们" description="为批发客户、渠道合作与商务咨询提供快速入口。" />
    <section class="section">
      <div class="container content-grid">
        <div>
          <h2>商务联系</h2>
          <p>电话：+86 400-800-2026</p>
          <p>邮箱：sales@xupingbrandhouse.com</p>
        </div>
        <div>
          <h2>办公信息</h2>
          <p>地址：广东省广州市饰品产业服务中心 8F</p>
          <p>工作时间：周一至周六 09:30 - 18:30</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "../components/PageHero.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
</script>
