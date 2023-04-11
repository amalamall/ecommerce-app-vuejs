<template>
  <div class="bycats">
    <div class="container">
      <div class="wrap">
        <div v-if="isShowingFilter" class="heading sort-list tabs">
          <span class="grey-color"> in </span>
          <div class="wrap">
            <h3 class="opt-trigger" @click.prevent="show = !show">
              <span class="value"> {{ selectedOption }} </span>
              <i class="ri-arrow-down-s-line"> </i>
            </h3>
            <ul :class="[{ show: show }]">
              <li
                :class="{ active: selectedOption === option }"
                v-for="option in options"
                :key="option"
              >
                <a
                  href=""
                  class="tabbed-trigger"
                  @click.prevent="selectOption(option)"
                  >{{ option }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="tabbed">
          <div id="sweater" class="sort-data active">
            <div class="dotgrid">
              <div class="wrapper">
                <ProductSimple
                  class="swiper-slide"
                  v-for="item in items"
                  :key="item.id"
                  :item="item"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSimple from './ProductSimple.vue';
export default {
  name: "ProductsByCategories",
  props:{
    isShowingFilter : Boolean
  },
  components:{
    ProductSimple
  },
  data() {
    return {
      show: false,
      options: ["Sweater", "Hoodie", "Shirt"],
      selectedOption: "Sweater",
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
          title: "The Sweater in Tosca",
          priceBefore: "$62.00",
          priceAfter: "$45.00",
        },
        {
          id: 4,
          image: "product_04.jpg",
          imageHover: "product_04b.jpg",
          title: "The Sweater in Tosca",
          priceBefore: "$62.00",
          priceAfter: "$45.00",
        },
        {
          id: 5,
          image: "product_05.jpg",
          imageHover: "product_05b.jpg",
          title: "The Sweater in Tosca",
          priceBefore: "$62.00",
          priceAfter: "$45.00",
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
          title: "The Sweater in Tosca",
          priceBefore: "$62.00",
          priceAfter: "$45.00",
        },
      ],
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      this.show = false;
    },
  },
};
</script>

<style>
.bycats .heading {
  display: flex;
  justify-content: center;
}

.bycats .heading > span {
  font-family: var(--second-font);
  font-size: 32px;
  margin-right: 20px;
}

.bycats .heading > span,
.opt-trigger {
  height: 44px;
  display: flex;
  align-items: center;
  gap: 15px;
  --webkit-tap-highlight-color: transparent;
  cursor: pointer;
}

.sort-list .wrap {
  position: relative;
}

.sort-list .wrap ul {
  position: absolute;
  text-align: left;
  top: 50px;
  left: 0;
  right: 0;
  background-color: var(--white-color);
  box-shadow: var(--shadow);
  z-index: 10;
  display: none;
  animation: var(--fade);
}

.sort-list .wrap ul.show {
  display: block;
}

.sort-list ul li a {
  display: block;
  padding: 5px 20px;
  transition: var(--transition-background), var(--transition-color);
}

.sort-list ul li a:hover,
.sort-list ul li.active a {
  background-color: var(--dark-color);
  color: var(--white-color);
}

.sort-data {
    animation: var(--fade);
}
</style>
