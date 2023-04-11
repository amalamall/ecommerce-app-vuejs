<template>
  <div>
    <header>
      <div class="inner-header">
        <div class="container wide">
          <div class="wrap">
            <div class="header-left">
              <div class="menu-bar">
                <a
                  href=""
                  @click.prevent="isActiveMenu = !isActiveMenu"
                  class="menu-trigger"
                  ><i class="ri-menu-line"></i
                ></a>
              </div>
              <div class="list-inline">
                <ul>
                  <li>
                    <a href=""><i class="ri-user-line"></i></a>
                  </li>
                  <li>
                    <a href=""
                      ><span class="item-floating">7</span
                      ><i class="ri-star-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="header-center">
              <nav class="menu">
                <ul>
                  <li>
                    <a href="#"><span>Home</span></a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Products</span>
                      <i class="ri-arrow-down-s-line"></i>
                    </a>
                    <ul class="sub-mega">
                      <li>
                        <div class="container">
                          <div class="wrapper">
                            <div class="mega-content">
                              <div class="dotgrid">
                                <div class="wrapper">
                                  <ProductSimple
                                    v-for="item in items"
                                    :key="item.id"
                                    :item="item"
                                  />
                                </div>
                              </div>
                              <div class="links">
                                <div class="list-block">
                                  <h3 class="dot-title">Apparel</h3>
                                  <ul>
                                    <li><a href="#">Dolce & Gabbana</a></li>
                                    <li><a href="#">Luis Vuitton</a></li>
                                    <li><a href="#">Versace</a></li>
                                    <li><a href="#">Dior</a></li>
                                  </ul>
                                </div>
                                <div class="list-block">
                                  <h3 class="dot-title">Shoes</h3>
                                  <ul>
                                    <li><a href="#">Dolce & Gabbana</a></li>
                                    <li><a href="#">Luis Vuitton</a></li>
                                    <li><a href="#">Versace</a></li>
                                    <li><a href="#">Dior</a></li>
                                  </ul>
                                </div>
                                <div class="list-block">
                                  <h3 class="dot-title">Shoes</h3>
                                  <ul>
                                    <li><a href="#">Dolce & Gabbana</a></li>
                                    <li><a href="#">Luis Vuitton</a></li>
                                    <li><a href="#">Versace</a></li>
                                    <li><a href="#">Dior</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><span>Disc</span></a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">
                      <span>Special</span>
                      <i class="ri-arrow-down-s-line"></i>
                    </a>
                    <ul class="sub-menu list-block">
                      <li><a href="#">Dolce & Gabbana</a></li>
                      <li><a href="#">Luis Vuitton</a></li>
                      <li><a href="#">Versace</a></li>
                      <li><a href="#">Dior</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><span>Sale</span></a>
                  </li>
                </ul>
              </nav>
              <div class="branding"><a href="#">Theshop</a></div>
            </div>
            <div class="header-right">
              <div class="list-inline">
                <ul>
                  <li>
                    <a href="#" @click="isActiveSelect = !isActiveSelect"
                      ><i class="ri-search-line"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#"
                      ><span class="item-floating">0</span
                      ><i class="ri-shopping-bag-line"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- breadcrumb -->

        <div
          id="search-float"
          :class="['search-float', { active: isActiveSelect }]"
        >
          <div class="wide">
            <form action="" class="search">
              <i class="ri-search-line"></i>
              <input
                type="search"
                class="input"
                id=""
                placeholder="Search products"
              />
              <i
                class="ri-close-line"
                @click.prevent="isActiveSelect = !isActiveSelect"
              ></i>
            </form>
          </div>
        </div>
      </div>
    </header>
    <div :class="['overlay', { active: isActiveSelect || isActiveMenu }]"></div>
    <div id="mobile-menu" :class="['mobile-menu', { active: isActiveMenu }]">
      <div class="wrap">
        <a
          href="#"
          @click.prevent="isActiveMenu = !isActiveMenu"
          class="close-trigger"
        >
          <i class="ri-close-line"></i>
        </a>
        <div class="main-menu scrollto">
          <nav class="wrapper">
            <ul>
              <li>
                <a href="#"><span>Home</span></a>
              </li>
              <li :class="['has-child', { active: isActiveFirsttMenu }]">
                <a href="#">
                  <span>Products</span>
                  <span
                    class="child-trigger"
                    @click.prevent="isActiveFirsttMenu = !isActiveFirsttMenu"
                    ><i class="ri-arrow-down-s-line"></i>
                  </span>
                </a>
                <ul class="sub-menu list-block">
                  <li><a href="#">Adidas</a></li>
                  <li><a href="#">Chanel</a></li>
                  <li><a href="#">Dolce & Gabbana</a></li>
                  <li><a href="#">Gani</a></li>
                  <li><a href="#">Gucci</a></li>
                  <li><a href="#">Luis Vuitton</a></li>
                  <li><a href="#">Nike</a></li>
                  <li><a href="#">Prada</a></li>
                  <li><a href="#">Puma</a></li>
                  <li><a href="#">Zara</a></li>
                  <li><a href="#">Adidas</a></li>
                  <li><a href="#">Chanel</a></li>
                </ul>
              </li>
              <li>
                <a href="#"><span>Discount</span></a>
              </li>
              <li :class="['has-child', { active: isActiveSecondMenu }]">
                <a href="#">
                  <span>Specials</span>
                  <span
                    class="child-trigger"
                    @click.prevent="isActiveSecondMenu = !isActiveSecondMenu"
                    ><i class="ri-arrow-down-s-line"></i
                  ></span>
                </a>
                <ul class="sub-menu list-block">
                  <li><a href="#">Dior</a></li>
                  <li><a href="#">Chanel</a></li>
                  <li><a href="#">Dolce & Gabbana</a></li>
                  <li><a href="#">Gani</a></li>
                </ul>
              </li>
              <li>
                <a href="#"><span>Sale</span></a>
              </li>
            </ul>
          </nav>
          <div class="button">
            <a href="#" class="secondary-btn">Login</a>
            <a href="#" class="primary-btn">Register</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductSimple from "./ProductSimple.vue";

export default {
  components: {
    ProductSimple,
  },
  data() {
    return {
      isActiveSelect: false,
      isActiveMenu: false,
      isActiveFirsttMenu: false,
      isActiveSecondMenu: false,
      isOnSpecificPage : false,
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
      ],
    };
  },
  // mounted() {
  //   this.isOnSpecificPage = this.$route.name == "productDetails"
  //   console.log(this.$route.name)
  // },
  // updated() {
  //   if (this.$route.name) {
  //     console.log(this.$route.name)
  //   }
  // }
};
</script>
<style>
/* breaddcrumb */
.breadcrumb {
  width: 100%;
  line-height: initial;
  padding: 30px 0 50px;
}

.breadcrumb ul {
  justify-content: center;
}

.breadcrumb ul li {
  position: relative;
  margin-right: 10px;
}

.breadcrumb ul li:not(:first-child) {
  padding-left: 25px;
}

.breadcrumb ul li:not(:first-child)::before {
  content: '';
  position: absolute;
  left: 0;
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cG9seWdvbiBwb2ludHM9IjE2MCwxMTUuNCAxODAuNyw5NiAzNTIsMjU2IDE4MC43LDQxNiAxNjAsMzk2LjcgMzEwLjUsMjU2ICIvPjwvc3ZnPg==");
  background-repeat: no-repeat;
  background-size: cover;
}

.breadcrumb ul :where(li,li a){
  font-size: var(--fs14) !important;
  padding-right:  0 !important;
  padding-left: 0.1 !important;
}

.breadcrumb ul li:last-child{
  color: var(--grey-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* breaddcrumb */

@keyframes fade-bottom {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

.dot-title {
  font-family: var(--primary-font);
  font-size: var(--fs14);
  font-weight: var(--fw600);
  line-height: 34px;
}

.dot-title a {
  transition: var(--transition-color);
}

.dot-title a:hover,
.dotgrid .product-price .before {
  color: var(--light-color);
}

/* Grouped selctor */
.item-floating,
.header-center .branding {
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-block a {
  position: relative;
  font-size: var(--fs14);
  color: var(--grey-color);
  padding: 5px 0;
  display: inline-block;
  transition: var(--transition-color);
}
.list-block a:hover {
  color: var(--dark-color);
}

.list-block a::before {
  content: "";
  position: absolute;
  width: 0px;
  height: 0px;
  background-color: var(--dark-color);
  left: -15px;
  top: 50%;
  border-radius: 50%;
  transform: translateY(-50%);
  transition: width 0.3s, height 0.3s;
}

.list-block a:hover::before {
  width: 8px;
  height: 8px;
}

.scrollto > .wrapper {
  --display: flex;
  padding-bottom: 20px;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
}

.scrollto .wrapper::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

.scrollto .wrapper::-webkit-scrollbar-thumb {
  --border-color: var(var(--white-color));
  background-color: var(--light-color);
  border: 3px solid var(--border-color);
  border-radius: 20px;
}

.scrollto .wrapper:hover::-webkit-scrolbar-thumb {
  background-color: var(--grey-color);
}

.scrollto .wrapper::-webkit-scrolbar-thumb:hover {
  background-color: var(--grey-color);
}

/* header */

.inner-header {
  line-height: 80px;
}

.inner-header :where(.wrap, .menu > ul),
.list-inline > ul {
  display: flex;
  align-items: center;
}

.header-left {
  flex-grow: 1;
}
.header-right {
  flex-grow: 1;
}

.header-center nav {
  display: none;
  grid-template-columns: 1fr 1fr;
  gap: 180px;
  max-width: 720px;
}

.header-center .branding {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  pointer-events: none;
}

.header-center .branding a {
  font-family: var(--second-font);
  font-size: 30px;
  line-height: inherit;
  pointer-events: auto;
}

.header-center .menu > ul > li > a {
  font-size: var(--fs14);
  font-weight: var(--fw600);
  text-transform: uppercase;
  padding: 0 15px;
  display: flex;
  gap: 5px;
}

.header-right ul {
  justify-content: end;
}

.list-inline a,
.menu-trigger,
.close-trigger {
  position: relative;
  font-size: 24px;
  padding: 0 10px;
  line-height: 1;
  display: flex;
  transition: var(--transition-color);
}

.list-inline a:hover,
.menu-trigger:hover {
  color: var(--light-color);
}

.header-left .list-inline,
.sidebar .widget input[type="checkbox"] {
  display: none;
}

.header-right .list-inline {
  display: block;
}

:where(.header-left, .header-right) li {
  display: flex;
  align-items: center;
  height: 80px;
}


/* SEarch */

.inner-header .search-float {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  height: 80px;
  background-color: var(--white-color);
  z-index: 1000;
  display: none;
}

form.search {
  position: relative;
}

form.search :where(i) {
  position: absolute;
  left: 0;
  top: 0;
}

form.search .input {
  outline: 0;
  padding: 15px 50px;
}

.inner-header .search .input {
  display: flex;
  border: 0;
  height: 80px;
  font-size: 18px;
}

form.search i {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
  cursor: pointer;
}

form.search :where(i:last-child) {
  left: auto;
  right: 0;
}

.search-float.active {
  display: block;
}

/* overlay */

.overlay,
.mobile-menu,
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.overlay {
  background-color: var(--dark-color);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 999;
  transition: opacity 0.3s, visibility 0.3s;
}

.overlay.active {
  opacity: 0.75;
  visibility: visible;
  pointer-events: all;
}

/* Navigation Bar Mobile */
.mobile-menu,
.sidebar {
  z-index: 1001;
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
}
.mobile-menu.active,
.sidebar.active {
  visibility: visible;
  opacity: 1;
}
.mobile-menu .wrap,
.sidebar > .wrap {
  position: relative;
  max-width: calc(100% - 40px);
  width: 360px;
  height: 100%;
  background-color: var(--white-color);
  pointer-events: auto;
  transform: translateX(var(--transX, -100%));
  transition: var(--transition-transform);
}

.mobile-menu.active .wrap ,
.sidebar.active .wrap{
  transform: translateX(0);
}

.mobile-menu .close-trigger,
.mobile-menu .child-trigger,
.sidebar .close-trigger {
  position: absolute;
  top: 0;
  right: -40px;
  width: 40px;
  height: 40px;
  color: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu .main-menu,
.sidebar-content {
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
}

.mobile-menu nav > ul {
  padding: 20px 0;
}

.mobile-menu nav > ul > li > a {
  position: relative;
  padding: 12px 0;
  font-weight: 500;
  transition: var(--transition-color);
}

.mobile-menu nav li :where(li, a) {
  display: block;
}

.mobile-menu nav > ul > li > a:hover {
  color: var(--grey-color);
}

.mobile-menu .child-trigger {
  color: var(--dark-color);
  font-size: 20px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  transition: var(--transition-background);
  z-index: 1;
}

.mobile-menu .child-trigger:hover {
  background-color: var(--light-color);
}

.mobile-menu nav .sub-menu {
  padding-left: 15px;
  max-height: 0;
  overflow: hidden;
  visibility: hidden;
  transition: 0.3s ease-in-out;
}

.mobile-menu nav li.active .sub-menu {
  max-height: 1000px;
  visibility: visible;
}

.mobile-menu .button {
  margin-top: auto;
  padding: 20px 0 40px;
  text-align: center;
}

.mobile-menu .button a {
  display: block;
  margin-top: 10px;
}

@media (min-width: 992px) {
  .menu-trigger,
  .sidebar .close-trigger,
  .category-content .sorter > a {
    display: none;
  }
  .header-center nav {
    display: grid;
  }
  .header-left .list-inline {
    display: block;
  }

  .mega-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
  }

  .mega-content .links {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
    gap: 15px;
  }

  nav.menu .sub-mega {
    left: 0;
    right: 0;
    padding: 50px 0;
  }
  nav.menu :where(.sub-menu, .sub-mega) {
    position: absolute;
    top: auto;
    line-height: initial;
    background-color: var(--white-color);
    box-shadow: var(--shadow);
    z-index: 1000;
    display: none;
    animation: var(--fade);
  }

  nav.menu li:hover :where(.sub-menu, .sub-mega) {
    display: block;
  }

  nav.menu .sub-menu {
    padding: 10px 0px;
  }

  nav.menu .sub-menu li {
    padding: 5px 30px;
  }
}

@media (min-width: 1200px) {
  .container.wide {
    --mx-width: 1720px;
    --gutter: 40px;
  }
}

@media (min-width: 1400px) {
  .mega-content {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
