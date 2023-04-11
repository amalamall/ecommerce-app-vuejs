<template>
  <div class="page-home">
    <main>
      <SliderComponent />
      <GuideProducts />
      <CarouselComponent />
      <ProductsByCategoriesVue isShowingFilter />
      <BannerComponent/>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import SliderComponent from "@/components/SliderComponent.vue";
import CarouselComponent from "@/components/CarouselComponent.vue";
import GuideProducts from "@/components/GuideProducts.vue";
import ProductsByCategoriesVue from '@/components/ProductsByCategories.vue';
import BannerComponent from "@/components/BannerComponent.vue";
export default {
  name: "HomeView",
  components: {
    SliderComponent,
    CarouselComponent,
    GuideProducts,
    ProductsByCategoriesVue,
    BannerComponent,
  },
};
</script>
<style>
.page-home main > div:not(.slider) {
  padding: 100px 0;
}



</style>
