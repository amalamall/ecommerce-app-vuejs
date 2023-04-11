<template>
  <div class="page-category">
    <main>
      <div class="section">
        <div class="container wide">
          <div class="wrap">
                      <!-- breadcrumb -->
          <div class="container">
            <div class="wrap">
              <div class="breadcrumb list-inline">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Sweater</a></li>
                </ul>
              </div>
            </div>
          </div>
            <div class="heading">
              
              <h1 class="title">Sweater</h1>
            </div>
            <div class="content">
              <div id="sidebar-filter" class="sidebar" :class="['sidebar', { active: isActiveMenu }]">
                <div class="wrap">
                  <a href="#0" class="close-trigger"  @click.prevent="isActiveMenu = !isActiveMenu">
                    <i class="ri-close-line"></i>
                  </a>
                  <div class="sidebar-content">
                    <div class="sidebar-title">Filter</div>
                    <div class="widget">
                      <div class="summary">
                        <input type="checkbox" name="cats" id="aaa" checked />
                        <label for="aaa">
                          <span>Size</span>
                          <i class="ri-arrow-down-s-line"></i>
                        </label>
                        <div class="accord product-size">
                          <div class="wrap">
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XXl</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="widget">
                      <div class="summary">
                        <input type="checkbox" name="cats" id="aab" checked />
                        <label for="aab">
                          <span>Colors</span>
                          <i class="ri-arrow-down-s-line"></i>
                        </label>
                        <div class="accord product-color">
                          <div class="wrap">
                            <button class="tosca"></button>
                            <button class="brown"></button>
                            <button class="ocena"></button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="widget cats">
                      <div class="summary">
                        <input type="checkbox" name="cats" id="aac" checked />
                        <label for="aac">
                          <span>Categories</span>
                          <i class="ri-arrow-down-s-line"></i>
                        </label>
                        <div class="accord list-block scrollto">
                          <ul class="wrapper initial">
                            <li><a href="">Active Wear</a></li>
                            <li><a href="">Beauty</a></li>
                            <li><a href="">Candles</a></li>
                            <li><a href="">Fashion</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="widget">
                      <div class="summary">
                        <input type="checkbox" name="cats" id="aad" checked />
                        <label for="aad">
                          <span>Brands</span>
                          <i class="ri-arrow-down-s-line"></i>
                        </label>
                        <div class="accord list-block scrollto">
                          <ul class="wrapper initial">
                            <li><a href="">Adidas</a></li>
                            <li><a href="">Chanel</a></li>
                            <li><a href="">Dolce & Gabbana</a></li>
                            <li><a href="">Guicci</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="widget">
                      <div class="summary">
                        <label for="price"><span>Price</span></label>
                        <div class="range-track">
                          <input
                            type="range"
                            value="25"
                            min="0"
                            max="500"
                            step="1"
                          />
                        </div>
                        <div class="price-range grey-color">
                          <span>$30</span>
                          <span>$500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="category-content">
                <div class="sorter">
                  <a href="#0" class="menu-trigger"  @click.prevent="isActiveMenu = !isActiveMenu"
                    ><i class="ri-filter-line"></i
                  ></a>
                  <div class="left">
                    <span class="grey-color"> Showing 9 of 35 results </span>
                  </div>
                  <div class="right">
                    <div class="sort-list">
                      <div class="wrap">
                        <div class="opt-trigger" @click.prevent="show = !show">
                          <span class="value">{{ selectedOption }}</span>
                          <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <ul :class="[{ show: show }]">
                          <li
                            :class="{ active: selectedOption === option }"
                            v-for="option in options"
                            :key="option"
                          >
                            <a
                              href=""
                              @click.prevent="selectOption(option)"
                              >{{ option }}</a
                            >
                          </li>
                        </ul>

                      </div>
                    </div>
                    <div class="list-inline">
                      <ul>
                        <li>
                          <a href=""><i class="ri-pause-line"></i></a>
                        </li>
                        <li>
                          <a href=""><i class="ri-list-check-2"></i></a>
                        </li>
                        <li>
                          <a href=""><i class="ri-layout-grid-line"></i></a>
                        </li>
                        <li>
                          <a href=""><i class="ri-layout-masonry-line"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="dotgrid">
                  <ProductsByCategories />
                </div>
                <div class="button">
                  <a href="" class="primary-btn">Load More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="['overlay', { active: isActiveMenu }]"></div>

    </main>
  </div>
</template>

<script>
import ProductsByCategories from '@/components/ProductsByCategories.vue';
export default {
  name: "ShopView",
  components:{
    ProductsByCategories
  },
  data() {
    return {
      show: false,
      isActiveMenu:false,
      options: [
        "Default",
        "Popular",
        "Rating",
        "Latest",
        "Price : low to hight",
        "Price : hight to low",
      ],
      selectedOption: "Default Sorting",
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
.sidebar-title {
  font-size: 26px;
  padding-top: 100px;
}

.sidebar .widget {
  margin: 20px 0;
}

.sidebar label,
.sidebar .price-range {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.sidebar label span {
  font-weight: var(--fw600);
}

.sidebar label i {
  font-size: 26px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-transform);
}

.sidebar .list-block ul {
  padding-left: 15px;
  margin-top: 20px;
  height: 150px;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  background-color: var(--light-color);
  box-shadow: none;
  border: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  height: 18px;
  width: 14px;
  background-color: var(--grey-color);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}

.sidebar .price-range {
  font-size: 18px;
}

.sidebar .widget .accord {
  padding-right: 15px;
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.sidebar .widget input:checked ~ div {
  max-height: 1000px;
  opacity: 1;
  visibility: visible;
}

.sidebar .widget input:checked ~ label i {
  transform: rotate(180deg);
}

.sidebar .widget :where(.accord > div, .range-track) {
  padding-top: 20px;
}

/* .scrollto .wrapper:not(.initial) {
  --display: grid;
  padding: 0;
  overflow: unset;
  scroll-snap-type: unset;
  overscroll-behavior-inline: unset;
}

.scrollto .wrapper .item {
  width: unset;
} */

/* product category */

.category-content .button {
  margin: 60px 0 100px;
  text-align: center;
}

.category-content :where(.sorter, .right) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.category-content .sorter {
  margin: 0 0 30px;
}

.category-content .sorter > a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  background-color: var(--dark-color);
  color: var(--white-color);
  border-radius: 50%;
  position: fixed;
  top: calc(50% - 20px);
  left: 0;
  z-index: 10;
  opacity: 0.5;
  transition: opacity 0.3s, var(--transition-transform);
}

.category-content .sorter > a:hover {
  transform: scale(1.2);
  opacity: 1;
}

.category-content .opt-trigger {
  gap: 5px;
  margin-right: 15px;
  line-height: 1.4;
}

.category-content .opt-trigger span {
  font-size: var(--fs14);
  font-weight: var(--fw600);
}

.category-content .opt-trigger i {
  font-size: 24px;
}

.category-content .sort-list ul {
  width: 180px;
}

.category-content .opt-trigger i {
  font-size: 24px;
}

.category-content .right .list-inline a {
  display: flex;
  padding: 7px;
  background-color: var(--flashwhite-color);
  margin-left: 10px;
  border-radius: 3px;
}

.category-content .left span {
  display: none;
}

.category-content .left span {
  --grid-col : 221px;
}

@media (min-width: 768px) {
  .category-content .left span {
    display: block;
  }
}

@media (min-width: 992px) {
  /* category */

  .page-category .content {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 60px;
  }

  .sidebar-title,
  .sidebar-content {
    padding: 0;
  }

  .sidebar,
  .sidebar > .wrap {
    all : unset;
  }

  .menu-trigger{
    display: none;
  }

  .category-content .sorter > a {
    display: none;
  }
}
</style>
