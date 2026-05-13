<template>
  <section class="section not-found">
    <div class="container">
      <p class="eyebrow">404</p>
      <h1>页面不存在</h1>
      <p class="lede">当前地址没有对应内容，你可以返回首页或进入产品中心继续浏览。</p>
      <div class="hero-actions">
        <RouterLink class="button button--primary" to="/">回到首页</RouterLink>
        <RouterLink class="button button--ghost" to="/products">进入产品中心</RouterLink>
      </div>
    </div>
  </section>
</template>
