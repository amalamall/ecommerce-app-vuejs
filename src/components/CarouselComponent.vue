<template>
  <div class="carousel">
    <div class="container">
      <div class="wrap">
        <div class="heading">
          <h2 class="title">New Arrivals</h2>
        </div>
        <div class="inner-wrapper">
          <div class="dotgrid carouselbox swiper" ref="swiper2">
            <div class="wrapper swiper-wrapper">
              <ProductSimple
                class="swiper-slide"
                v-for="item in items"
                :key="item.id"
                :item="item"
              />
            </div>

          </div>
          <div class="nav">
              <div class="swiper-button-next">
                <i class="ri-arrow-right-line"> </i>
              </div>
              <div class="swiper-button-prev">
                <i class="ri-arrow-left-line"> </i>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSimple from "./ProductSimple.vue";
import Swiper from "swiper";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "CarouselComponent",
  components: {
    ProductSimple,
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper2, {
      // Swiper 2 options
      slidesPerView: "auto",
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        481: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          centeredSlides: false,
        },
        640: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          centeredSlides: false,
        },
        992: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          centeredSlides: false,
        },
      },
      modules: [EffectFade, Navigation, Pagination, Autoplay],
    });
  },

  data() {
    return {
      swiper: null,
      items: [
        {
          id: 1,
          image: "product_01.jpg",
          imageHover: "product_01b.jpg",
          title: "The Sweater in Tosca",
          priceBefore: "$62.00",
          priceAfter: "$45.00",
        },
        {
          id: 2,
          image: "product_02.jpg",
          imageHover: "product_02b.jpg",
          title: "Ocean Blue LLC2",
          priceBefore: "",
          priceAfter: "$57.00",
        },
        {
          id: 3,
          image: "product_03.jpg",
          imageHover: "product_03b.jpg",
          title: "Inner Sweter at office",
          priceBefore: "$34.00",
          priceAfter: "",
        },
        {
          id: 4,
          image: "product_04.jpg",
          imageHover: "product_04b.jpg",
          title: "XYZ Hoodle 485",
          priceBefore: "$107.00",
          priceAfter: "$89.00",
        },
        {
          id: 5,
          image: "product_05.jpg",
          imageHover: "product_05b.jpg",
          title: "Light Blue Hoodle",
          priceBefore: "$106.00",
          priceAfter: "$79.00",
        },
        {
          id: 6,
          image: "product_06.jpg",
          imageHover: "product_06b.jpg",
          title: "Brown Gold Mix",
          priceBefore: "$99.00",
          priceAfter: "$76.00",
        },
        {
          id: 7,
          image: "product_07.jpg",
          imageHover: "product_07b.jpg",
          title: "The Sweater in Tosca",
          priceBefore: "$62.00",
          priceAfter: "$45.00",
        },
        {
          id: 8,
          image: "product_08.jpg",
          imageHover: "product_08b.jpg",
          title: "The Maroon Four",
          priceBefore: "$76.00",
          priceAfter: "$44.00",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style>
    .carousel .inner-wrapper {
        position : relative;
    }
    .carousel .dotgrid .wrapper{
        display: flex;
        grid-template-columns: unset;
        gap:unset;
    }

    .carousel .nav > div::after {
        content: none;
    }

    .carousel .nav > div {
        width: 40px;
        height: 40px;
        border: 1px solid var(--grey-color);
        border-radius: 50%;
        color: var(--dark-color);
        font-size: 20px;
        --webkit-tap-highlight-color: transparent;
        transition: var(--transition-background),
                    var(--transition-color),
                    var(--transition-border);
    }

    .carousel .nav > div:hover {
        color: var(--white-color);
        background-color: var(--dark-color);
        border-color: var(--dark-color);
    }

    .carousel .nav .swiper-button-disabled {
        opacity: 0;
    }

    @media (max-width: 480px) {
        .carousel .dotgrid .item {
            width: 270px;
        }
    }

    @media (min-width: 1400px) {
        .carousel .inner-wrapper{
            max-width: 1250px;
            margin: 0 auto;
            padding: 0 40px;
        }
        .carousel .nav > .swiper-button-next {
            right: -40px;
        }
        .carousel .nav > .swiper-button-prev {
            left: -40px;
        }
    }
</style>
