<template>
  <main>
    <div class="slider">
      <div class="sliderbox">
        <swiper class="wrap"     navigation
    :pagination="{ clickable: true }"  :modules="modules" effect="fade" :loop="true" :slides-per-view="1" @swiper="onSwiper">
          <swiper-slide>
            <div class="image">
              <div class="ob-cover">
                <img src="../assets/images/slider_01.jpg" />
              </div>
              <div class="title-info">
                <div class="container wide">
                  <div class="wrap">
                    <span class="price">$39</span>
                    <h3 class="title">Feel the tosca color</h3>
                    <div class="button">
                      <a href="" class="primary-btn">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="image">
              <div class="ob-cover">
                <img src="../assets/images/slider_02.jpg" />
              </div>
              <div class="title-info">
                <div class="container wide">
                  <div class="wrap">
                    <span class="price">$65</span>
                    <h3 class="title">Inner world of brown</h3>
                    <div class="button">
                      <a href="" class="primary-btn">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
              <div class="image">
                <div class="ob-cover">
                  <img src="../assets/images/slider_03.jpg" />
                </div>
                <div class="title-info">
                  <div class="container wide">
                    <div class="wrap">
                      <span class="price">$95</span>
                      <h3 class="title">What a mix of colors</h3>
                      <div class="button">
                        <a href="" class="primary-btn">Shop Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div></swiper-slide>
        </swiper>
      </div>
      <div class="custom-pagination">
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!-- <button @click="handleSlideTo">slide to 4</button> -->
  </main>
</template>

<script>
import { EffectFade,Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  name: "SliderComponent",

  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      swiper: null,
    };
  },

  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },

    handleSlideTo() {
      this.swiper.slideTo(3);
    },
  },
  setup() {
      return {
        modules: [EffectFade,Navigation, Pagination],
      };
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