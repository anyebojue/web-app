<template>
  <div class="page-shell">
    <Breadcrumbs />
    <PageHero
      eyebrow="Capability"
      title="品牌实力 / 工厂展示"
      description="把工厂、打样、质检、交付能力做成更有品牌感的内容模块。"
    />
    <section class="section">
      <div class="container stats-grid">
        <article>
          <strong>18+</strong>
          <span>多年饰品制造经验</span>
        </article>
        <article>
          <strong>50,000+</strong>
          <span>月产能承接定制与批发需求</span>
        </article>
        <article>
          <strong>7</strong>
          <span>从选样到发货的关键协同节点</span>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "../components/PageHero.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
</script>
