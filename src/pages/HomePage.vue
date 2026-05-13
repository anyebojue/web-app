<template>
  <div v-if="payload" class="home-page">
    <section class="asos-hero">
      <div class="container asos-hero__grid">
        <article class="asos-hero__main">
          <div class="asos-hero__image" :style="{ backgroundImage: `url(${payload.hero.primaryImage})` }"></div>
          <div class="asos-hero__copy">
            <span class="demo-chip">Demo Frontend</span>
            <p class="eyebrow">NEW IN</p>
            <h1>JEWELRY FOR NOW</h1>
            <p class="lede">用更像时尚零售站的模块密度、模特视觉和分类入口，来展示 Xuping 的业务内容。</p>
            <div class="hero-actions">
              <RouterLink class="button button--primary" to="/products">SHOP NEW IN</RouterLink>
              <RouterLink class="button button--ghost" to="/topics/spring-edit">VIEW TREND EDIT</RouterLink>
            </div>
          </div>
        </article>

        <aside class="asos-hero__side">
          <article class="hero-side-card hero-side-card--image">
            <div class="hero-side-card__visual" :style="{ backgroundImage: `url(${payload.hero.secondaryImage})` }"></div>
            <div class="hero-side-card__body">
              <p>WHAT'S TRENDING</p>
              <h2>{{ payload.hero.highlight.title }}</h2>
            </div>
          </article>

          <article class="hero-side-card hero-side-card--copy">
            <p>WHOLESALE READY</p>
            <h3>Layered shine, gifting sets and fast-moving fashion assortments.</h3>
            <RouterLink to="/inquiry">ENQUIRE NOW</RouterLink>
          </article>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Trending Now</p>
          <h2>运营入口</h2>
        </div>
        <div class="trend-grid">
          <RouterLink to="/products/category/necklaces" class="trend-card trend-card--dark">
            <span>SHOP BY PRODUCT</span>
            <h3>Necklaces</h3>
          </RouterLink>
          <RouterLink to="/products/category/earrings" class="trend-card">
            <span>BESTSELLERS</span>
            <h3>Earrings</h3>
          </RouterLink>
          <RouterLink :to="`/topics/${payload.topic.slug}`" class="trend-card trend-card--sand">
            <span>SHOP BY EDIT</span>
            <h3>Spring Edit</h3>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section section--light">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Shop By Category</p>
          <h2>按分类浏览</h2>
        </div>
        <div class="category-grid category-grid--retail">
          <RouterLink
            v-for="category in payload.categories"
            :key="category.slug"
            :to="`/products/category/${category.slug}`"
            class="category-card"
          >
            <span>{{ category.count }} styles</span>
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section section--tinted">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">New In</p>
          <h2>新品主推</h2>
        </div>
        <div class="product-grid">
          <ProductCard v-for="product in payload.featuredProducts" :key="product.id" :product="product" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container edit-grid">
        <RouterLink class="edit-card edit-card--feature" :to="`/topics/${payload.topic.slug}`">
          <span>FEATURED EDIT</span>
          <h2>{{ payload.topic.title }}</h2>
          <p>{{ payload.topic.summary }}</p>
        </RouterLink>
        <RouterLink class="edit-card" to="/factory">
          <span>FACTORY</span>
          <h3>Brand Strength</h3>
        </RouterLink>
        <RouterLink class="edit-card" to="/cooperation">
          <span>BUSINESS</span>
          <h3>Wholesale Program</h3>
        </RouterLink>
        <RouterLink class="edit-card" to="/downloads">
          <span>CATALOG</span>
          <h3>Download Center</h3>
        </RouterLink>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Featured Stories</p>
          <h2>新闻与招商动态</h2>
        </div>
        <div class="news-grid">
          <NewsCard v-for="article in payload.news" :key="article.id" :article="article" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getHomePayload } from "../composables/useApi";
import ProductCard from "../components/ProductCard.vue";
import NewsCard from "../components/NewsCard.vue";

const payload = ref(null);

onMounted(async () => {
  payload.value = await getHomePayload();
});
</script>
