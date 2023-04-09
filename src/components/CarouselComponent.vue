<template>
  <div class="carousel">
    <div class="container">
        <div class="wrap">
            <div class="heading">
                <h2 class="title">
                    New Arrivals
                </h2>
            </div>
            <div class="inner-wrapper">
                <div class="dotgrid carouselbox">
                    <ProductSimple></ProductSimple>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ProductSimple from './ProductSimple.vue';
export default {
 name: "CarouselComponent",
    components:{
        ProductSimple
    }
}
</script>

<style>

</style>