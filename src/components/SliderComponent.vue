<template>
    <div class="slider">
      <div
        class="sliderbox swiper"
        ref="swiper1"
        @swiper="onSwiper"
        @click="onSwiperClick"
      >
        <div class="wrap swiper-wrapper">
          <div
            class="image swiper-slide"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="ob-cover">
              <img :src="getImageSrc(item?.image)" :alt="item.title" />
            </div>
            <div class="title-info">
              <div class="container wide">
                <div class="wrap">
                  <span class="price">{{ item?.price }}</span>
                  <h3 class="title">{{ item?.title }}</h3>
                  <div class="button">
                    <a href="" class="primary-btn">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-pagination">
            <div class="swiper-pagination"></div>
          </div>
      </div>
    </div>
</template>

<script>
import { EffectFade, Pagination, Autoplay } from "swiper";
import Swiper from "swiper";

import "swiper/swiper-bundle.css";

export default {
  name: "SliderComponent",
  mounted() {
    new Swiper(this.$refs.swiper1, {
      // Swiper 1 options
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      modules: [EffectFade, Pagination, Autoplay],
    });
    this.$refs.swiper1.addEventListener('click', () => {
      this.$refs.swiper1?.swiper.slideNext();
    });
  },
  components: {},

  data() {
    return {
      items: [
        {
          id: 1,
          image: "slider_01.jpg",
          title: "Feel the tosca color",
          price: "$39",
        },
        {
          id: 2,
          image: "slider_02.jpg",
          title: "Inner world of brown",
          price: "$65",
        },
        {
          id: 3,
          image: "slider_03.jpg",
          title: "What a mix of colors",
          price: "$95",
        },
      ],
    };
  },

  methods: {
    // handleSlideTo() {
    //   this.swiper.slideTo(3);
    // },
    getImageSrc(image) {
      return require(`../assets/images/${image}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.slider :where(.image, .ob-cover) {
  position: relative;
}
.slider .ob-cover {
  height: 430px;
}

.ob-cover img {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.slider .title-info {
  background-color: var(--white-color);
}

.slider .title-info .wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-bottom: 5vw;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.slider .title-info .price {
  position: relative;
  font-size: 30px;
  width: 80px;
  height: 80px;
  margin-top: -40px;
  background-color: var(--dark-color);
  color: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.slider .custom-pagination {
  position: absolute;
  right: 30px;
  top: 50%;
  bottom: 50%;
  background-color: black;
}

.slider .custom-pagination .swiper-pagination {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.custom-pagination .swiper-pagination-bullet {
  position: relative;
  width: 24px;
  height: 24px;
  opacity: 1;
  background-color: transparent;
}

.custom-pagination .swiper-pagination-bullet::before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  top: 50%;
  left: 50%;
  background-color: var(--dark-color);
  border: 1px solid var(--dark-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s, transform 0.2s;
}

.custom-pagination .swiper-pagination-bullet-active::before {
  background-color: transparent;
  width: 15px;
  height: 15px;
}

.slider .title-info :where(span, h3, .button) {
  transform: translateY(30px);
  opacity: 0;
  visibility: hidden;
  transition: transform 0.75s, opacity 0.75s, visibility 0.75s;
}

.slider .swiper-slide-active .title-info :where(span, h3, .button) {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.slider .swiper-slide-active .title-info h3 {
  transition-delay: 0.5s;
}

.slider .swiper-slide-active .title-info .button {
  transition-delay: 0.75s;
}

@media (min-width: 992px) {
  .slider .ob-cover {
    height: calc(100vh - 80px);
  }
  .slider .title-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
  }
  .slider h3 {
    --fs-max: 80px;
    color: var(--white-color);
  }

  .slider .button a {
    border-color: var(--white-color);
    color: var(--white-color);
  }
  .slider .button a:hover {
    border-color: var(--dark-color);
  }
}
</style>
