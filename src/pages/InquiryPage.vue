<template>
  <div class="page-shell">
    <Breadcrumbs />
    <PageHero eyebrow="Inquiry" title="提交询盘" description="收集客户需求、款式偏好和合作方式，作为后续转化入口。" />
    <section class="section">
      <div class="container">
        <form class="inquiry-form" @submit.prevent="handleSubmit">
          <input v-model="form.company" type="text" placeholder="公司名称" required />
          <input v-model="form.name" type="text" placeholder="联系人" required />
          <input v-model="form.email" type="email" placeholder="邮箱" required />
          <input v-model="form.phone" type="tel" placeholder="电话 / WhatsApp" required />
          <select v-model="form.interest">
            <option value="necklace">项链系列</option>
            <option value="ring">戒指系列</option>
            <option value="earring">耳饰系列</option>
            <option value="set">套装系列</option>
          </select>
          <textarea v-model="form.message" rows="6" placeholder="请输入需求、起订量、目标市场等信息" required />
          <button class="button button--primary" type="submit">提交需求</button>
          <p v-if="status" class="form-status">{{ status }}</p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { submitInquiry } from "../composables/useApi";
import PageHero from "../components/PageHero.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

const status = ref("");
const form = reactive({
  company: "",
  name: "",
  email: "",
  phone: "",
  interest: "necklace",
  message: ""
});

const handleSubmit = async () => {
  const response = await submitInquiry(form);
  status.value = response.message;
  Object.assign(form, {
    company: "",
    name: "",
    email: "",
    phone: "",
    interest: "necklace",
    message: ""
  });
};
</script>
