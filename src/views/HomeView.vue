<template>
  <div class="page-home">
    <main>
      <SliderComponent />
      <GuideProducts />
      <CarouselComponent />
      <ProductsByCategoriesVue />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import SliderComponent from "@/components/SliderComponent.vue";
import CarouselComponent from "@/components/CarouselComponent.vue";
import GuideProducts from "@/components/GuideProducts.vue";
import ProductsByCategoriesVue from '@/components/ProductsByCategories.vue';
export default {
  name: "HomeView",
  components: {
    SliderComponent,
    CarouselComponent,
    GuideProducts,
    ProductsByCategoriesVue
  },
};
</script>
<style>
.page-home main > div:not(.slider) {
  padding: 100px 0;
}



</style>
