<template>
  <div>
    <NavigationBar/>
    <SliderComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";
import SliderComponent from "@/components/SliderComponent.vue";
export default {
  name: "HomeView",
  components: {
    NavigationBar,
    SliderComponent
  },
};
</script>
