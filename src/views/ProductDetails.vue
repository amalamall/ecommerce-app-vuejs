<template>
  <main>
    <div class="section">
      <div class="container">
        <div class="wrap">
          <!-- breadcrumb -->
          <div class="container">
            <div class="wrap">
              <div class="breadcrumb list-inline">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Sweater</a></li>
                  <li>
                    <span>The sweater in Tosca</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="product dotgrid">
            <div class="wrapper">
              <div class="image">
                <div class="outer-main">
                  <div class="main-image swiper" ref="mainImage">
                    <div class="wrap swiper-wrapper">
                      <div class="item swiper-slide">
                        <img
                          :src="require('../assets/images/product_01.jpg')"
                          alt=""
                        />
                      </div>
                      <div class="item swiper-slide">
                        <img
                          :src="require('../assets/images/product_01b.jpg')"
                          alt=""
                        />
                      </div>
                      <div class="item swiper-slide">
                        <img
                          :src="require('../assets/images/product_06.jpg')"
                          alt=""
                        />
                      </div>
                      <div class="item swiper-slide">
                        <img
                          :src="require('../assets/images/product_06b.jpg')"
                          alt=""
                        />
                      </div>
                      <div class="item swiper-slide">
                        <img
                          :src="require('../assets/images/product_02.jpg')"
                          alt=""
                        />
                      </div>
                      <div class="item swiper-slide">
                        <img
                          :src="require('../assets/images/product_02b.jpg')"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div class="custom-pagination">
                    <div class="swiper-pagination"></div>
                  </div>
                </div>
                <div class="outer-thumb ob-cover">
                  <div class="thumbnail-image swiper" ref="thumbnailImage">
                    <div class="wrap swiper-wrapper">
                      <div class="item swiper-slide">
                        <div class="thumb-wrap">
                          <img
                            :src="require('../assets/images/product_01.jpg')"
                            alt=""
                          />
                        </div>
                      </div>

                      <div class="item swiper-slide">
                        <div class="thumb-wrap">
                          <img
                            :src="require('../assets/images/product_01b.jpg')"
                            alt=""
                          />
                        </div>
                      </div>

                      <div class="item swiper-slide">
                        <div class="thumb-wrap">
                          <img
                            :src="require('../assets/images/product_06.jpg')"
                            alt=""
                          />
                        </div>
                      </div>

                      <div class="item swiper-slide">
                        <div class="thumb-wrap">
                          <img
                            :src="require('../assets/images/product_06b.jpg')"
                            alt=""
                          />
                        </div>
                      </div>

                      <div class="item swiper-slide">
                        <div class="thumb-wrap">
                          <img
                            :src="require('../assets/images/product_02.jpg')"
                            alt=""
                          />
                        </div>
                      </div>

                      <div class="item swiper-slide">
                        <div class="thumb-wrap">
                          <img
                            :src="require('../assets/images/product_02b.jpg')"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="summary">
                <div class="entry">
                  <h1 class="title">The Sweeater in Tosca</h1>
                  <div class="product-group">
                    <div class="product-price">
                      <span class="current"> $45.00 </span>
                      <div class="wrap">
                        <span class="before"> $62.00 </span>
                        <span class="discount"> 25% </span>
                      </div>
                    </div>
                    <div class="product-rating">
                      <span>
                        <i class="ri-star-fill"></i>
                        <span>4.8</span>
                      </span>
                      <a href="">3 Reviews</a>
                    </div>
                  </div>
                  <div class="product-color">
                    <span>Colors</span>
                    <div class="wrap">
                      <button class="tosca selected"></button>
                      <button class="brown"></button>
                      <button class="ocean"></button>
                    </div>
                  </div>
                  <div class="product-size">
                    <span>Colors</span>
                    <div class="wrap">
                      <button disabled>S</button>
                      <button>M</button>
                      <button class="selected">L</button>
                      <button>XL</button>
                    </div>
                  </div>
                  <div class="product-stock">
                    <div class="wrap">
                      <strong>201</strong>
                      <span class="grey-color">in stock</span>
                      <i class="ri-checkbox-circle-line"></i>
                    </div>
                  </div>
                  <div class="product-action">
                    <div class="qty">
                      <button class="decrease">-</button>
                      <input type="text" value="1" />
                      <button class="increase">+</button>
                    </div>
                    <div class="addcart button">
                      <button type="submit" class="primary-btn">
                        Add to cart
                      </button>
                    </div>
                    <div class="buynow button">
                      <button type="submit" class="secondary-btn">
                        Buy Now
                      </button>
                    </div>
                  </div>

                  <div class="product-control list-inline">
                    <ul>
                      <li>
                        <a href=""
                          ><i class="ri-heart-line"></i
                          ><span>Add to wishlist</span></a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><i class="ri-arrow-left-right-line"></i
                          ><span>compare</span></a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><i class="ri-share-forward-line"></i
                          ><span>Share</span></a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><i class="ri-question-line"></i
                          ><span>Ask Question</span></a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="shipping">
                    <ul>
                      <li>
                        <i class="ri-gift-line"></i>
                        <span>Free shipping & return: </span>
                        <span class="grey-color">On orders over $100</span>
                      </li>
                      <li>
                        <i class="ri-truck-line"></i>
                        <span>Estimate Delivery: </span>
                        <span class="grey-color">01 - 07 Jan, 2030</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="product detail"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { Pagination } from "swiper";
import Swiper from "swiper";

import "swiper/swiper-bundle.css";

export default {
  name: "ProductDetails",
  mounted() {
    const thumbImage = new Swiper(this.$refs.thumbnailImage, {
      //   loop: true,
      direction: "vertical",
      spaceBetween: 15,
      slidesPerView: 1,
      freeMode: true,
      watchSlidesProgress: true,
    });
    // eslint-disable-next-line
    new Swiper(this.$refs.mainImage, {
      loop: true,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      thumbs: {
        swiper: thumbImage,
      },
      modules: [Pagination],
    });
  },
};
</script>

<style >
.product .wrapper {
  --grid-col: 331px;
}
.product .main-image img {
  width: 100%;
}

.product .outer-thumb {
  display: none;
}

.product .outer-thumb .item {
  height: fit-content !important;
  cursor: pointer;
}

.product .thumb-wrap {
  position: relative;
  width: 70px;
  height: 90px;
}

.product .outer-thumb img {
  transition: var(--transition-transform);
}

.product .outer-thumb .swiper-slide-thumb-active > div,
.product .outer-thumb .item:hover > div {
  border: 1px solid var(--grey-color);
}

.product .outer-thumb .swiper-slide-thumb-active img,
.product .outer-thumb .item:hover img {
  transform: scale3d(0.85, 0.85, 0.85);
}

.product .custom-pagination {
  position: relative;
  height: 50px;
}

/* summary entry */

.summary .entry {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.summary .product-group {
  display: flex;
  justify-content: space-between;
}

.summary .product-price {
  display: flex;
  align-items: center;
}

.summary .product-price .current {
  font-size: 30px;
}

.summary .product-price .wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
}

.summary .product-price .wrap::before {
  content: "";
  position: absolute;
  top: 0;
  left: 12px;
  height: 100%;
  width: 1px;
  background-color: var(--grey-color);
  transform: skewX(-25deg);
}

.summary .product-price .discount {
  display: inline-block;
  width: 44px;
  font-size: var(--fs14);
  padding: 5px;
  background-color: var(--primary-color);
  color: var(--white-color);
  margin-left: -10px;
  text-align: center;
  border-radius: 5px;
  line-height: 1;
}

.summary .product-rating {
  line-height: initial;
  text-align: right;
}

.summary .product-rating a {
  font-size: var(--fs14);
  padding-left: 10px;
  color: var(--grey-color);
  text-decoration: dotted;
  text-decoration-line: underline;
  white-space: nowrap;
  transition: var(--transition-color);
}

.summary .product-rating a:hover {
  color: var(--dark-color);
}

.summary .wrap:has(button) {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.summary button {
  border-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
}

.summary .wrap > button,
.summary .qty button {
  width: 40px;
  height: 40px;
  transition: box-shadow 0.3s, var(--transition-border),
    var(--transition-background), var(--transition-color);
}

.summary .product-color button {
  border-radius: 50%;
}

.summary .product-color button.tosca {
  background-color: #a9cdcc;
}
.summary .product-color button.brown {
  background-color: #966548;
}
.summary .product-color button.ocean {
  background-color: #81b8cc;
}

.summary .product-color button.selected,
.summary .product-color button:hover:not(.selected) {
  box-shadow: inset 0 0 0 4px var(--white-color);
}

.summary .product-size button {
  font-size: var(--fs14);
  line-height: 44px;
  border: 1px solid var(--light-color);
  border-radius: 5px;
  background-color: transparent;
}

.summary .product-size button.selected {
  background-color: var(--dark-color);
  color: var(--white-color);
  border-color: var(--dark-color);
}

.summary .product-size button:hover:not(.selected, [disabled]) {
  border-color: var(--dark-color);
}

.summary .product-size button:disabled {
  pointer-events: none;
}

.summary .product-stock .wrap,
.summary .product-control a {
  display: flex;
  gap: 5px;
}

.summary .product-stock .wrap i {
  color: var(--primary-color);
  padding-left: 10px;
}

.summary .qty {
  display: flex;
  font-size: 18px;
  min-width: 110px;
  height: 50px;
  margin: 0 20px 20px 0;
  background-color: var(--flashwhite-color);
}

.summary .qty input {
  text-align: center;
  border: 0;
  outline: 0;
  background-color: transparent;
}

.summary .qty button {
  font-size: 22px;
  height: 100%;
  background-color: transparent;
}

.summary .qty button:hover {
  color: var(--grey-color);
}

.summary .product-action {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.summary .product-action .buynow {
  grid-column-start: 1;
  grid-column-end: 3;
}

.summary .product-action :where(.addcart, .buynow) button {
  width: 100%;
  height: 50px;
  border-color: var(--dark-color);
  padding: 0;
}

.summary .product-action .addcart button {
  background-color: var(--white-color);
}

.summary .product-action .addcart button:hover {
  background-color: var(--dark-color);
}

.summary .product-control ul {
  align-items: flex-start;
  flex-flow: wrap;
  gap: 20px;
}

.summary .product-control span {
  font-size: var(--fs14);
}

.summary .product-control a {
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
}

.summary .product-control ul li:first-child a:hover i {
  color: var(--red-color);
}

.product .summary .shipping {
  padding-top: 30px;
  border-top: 1px solid var(--flashwhite-color);
}

.product .summary .shipping li {
  position: relative;
  padding-left: 35px;
  margin-top: 10px;
  line-height: 1.5;
}

.product .summary .shipping li i {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 24px;
  line-height: 1;
}

@media (min-width: 481px) {
  .product .wrapper {
    --gutter: 60px;
  }

  .product.dotgrid .image {
    position: relative;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    height: min-content;
    overflow: hidden;
  }
  .product .outer-main {
    width: calc(100% - 85px);
    height: 100%;
    margin: 0 0 0 85px;
  }

  .product .outer-thumb {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  .custom-pagination {
    display: none;
  }
}

@media (min-width: 768px) {
  .product.dotgrid .image {
    max-width: 100%;
    margin: 0;
    position: sticky;
    top: 30px;
  }
}

@media (min-width: 1400px) {
  .product .outer-main {
    width: 100%;
    margin: 0;
  }

  .product .image .outer-thumb {
    position: absolute;
    top: 0;
    left: -100px;
    height: 100%;
  }

  .product.dotgrid .image {
    overflow: unset;
  }
}
</style>
