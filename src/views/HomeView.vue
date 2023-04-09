<template>
  <div class="page-home">
    <NavigationBar/>
    <SliderComponent/>
    <CarouselComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";
import SliderComponent from "@/components/SliderComponent.vue";
import CarouselComponent from "@/components/CarouselComponent.vue";
export default {
  name: "HomeView",
  components: {
    NavigationBar,
    SliderComponent,
    CarouselComponent
  },
};
</script>
