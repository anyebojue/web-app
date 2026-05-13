<template>
  <div class="page-shell">
    <Breadcrumbs />
    <PageHero
      eyebrow="Cooperation"
      title="招商加盟 / 合作模式"
      description="把合作流程、扶持政策、打样与订货规则做成清晰的信息页。"
    />
    <section class="section">
      <div class="container steps-grid">
        <article v-for="step in steps" :key="step.title">
          <span>{{ step.index }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "../components/PageHero.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

const steps = [
  { index: "01", title: "选品沟通", description: "确认市场方向、风格偏好与目标渠道。" },
  { index: "02", title: "样品打样", description: "围绕系列感、材质、成本和交期展开。" },
  { index: "03", title: "批量生产", description: "生产、品控、包装、发货节奏统一管理。" }
];
</script>
