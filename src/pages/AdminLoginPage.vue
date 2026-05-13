<template>
  <section class="admin-login">
    <form class="admin-login__card" @submit.prevent="handleSubmit">
      <p class="eyebrow">Admin Access</p>
      <h1>后台登录</h1>
      <input v-model="form.username" type="text" placeholder="账号" required />
      <input v-model="form.password" type="password" placeholder="密码" required />
      <button class="button button--primary" type="submit">登录后台</button>
      <p class="admin-login__hint">演示账号：`admin` / `123456`</p>
      <p v-if="status" class="form-status">{{ status }}</p>
    </form>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { adminLogin } from "../composables/useApi";

const router = useRouter();
const status = ref("");
const form = reactive({
  username: "admin",
  password: "123456"
});

const handleSubmit = async () => {
  const response = await adminLogin(form);
  localStorage.setItem("admin-token", response.token);
  status.value = `登录成功：${response.user.name}`;
  router.push("/admin/dashboard");
};
</script>
