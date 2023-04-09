<template>
  <div class="dotgrid">
                                <div class="wrapper">
                                  <div class="item">
                                    <div class="dot-image">
                                      <a href="" class="product-permalink"></a>
                                      <div class="thumbnail">
                                        <img
                                          src="../assets/images/product_01.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div class="thumbnail hover">
                                        <img
                                          src="../assets/images/product_01b.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div class="actions">
                                        <ul>
                                          <li>
                                            <a href=""
                                              ><i class="ri-star-line"></i
                                            ></a>
                                          </li>
                                          <li>
                                            <a href=""
                                              ><i
                                                class="ri-arrow-left-right-line"
                                              ></i
                                            ></a>
                                          </li>
                                          <li>
                                            <a href=""
                                              ><i class="ri-eye-line"></i
                                            ></a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div class="label"><span>-25%</span></div>
                                    </div>
                                    <div class="dot-info">
                                      <h2 class="dot-title">
                                        <a href="">The Sweater in Tosca</a>
                                      </h2>
                                      <div class="product-price">
                                        <span class="before">$62.00</span>
                                        <span class="current">$45.00</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="item">
                                    <div class="dot-image">
                                      <a href="" class="product-permalink"></a>
                                      <div class="thumbnail">
                                        <img
                                          src="../assets/images/product_02.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div class="thumbnail hover">
                                        <img
                                          src="../assets/images/product_02b.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div class="actions">
                                        <ul>
                                          <li>
                                            <a href=""
                                              ><i class="ri-star-line"></i
                                            ></a>
                                          </li>
                                          <li>
                                            <a href=""
                                              ><i
                                                class="ri-arrow-left-right-line"
                                              ></i
                                            ></a>
                                          </li>
                                          <li>
                                            <a href=""
                                              ><i class="ri-eye-line"></i
                                            ></a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div class="label"><span>-25%</span></div>
                                    </div>
                                    <div class="dot-info">
                                      <h2 class="dot-title">
                                        <a href="">The Sweater in Tosca</a>
                                      </h2>
                                      <div class="product-price">
                                        <span class="before">$62.00</span>
                                        <span class="current">$45.00</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="item">
                                    <div class="dot-image">
                                      <a href="" class="product-permalink"></a>
                                      <div class="thumbnail">
                                        <img
                                          src="../assets/images/product_03.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div class="thumbnail hover">
                                        <img
                                          src="../assets/images/product_03b.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div class="actions">
                                        <ul>
                                          <li>
                                            <a href=""
                                              ><i class="ri-star-line"></i
                                            ></a>
                                          </li>
                                          <li>
                                            <a href=""
                                              ><i
                                                class="ri-arrow-left-right-line"
                                              ></i
                                            ></a>
                                          </li>
                                          <li>
                                            <a href=""
                                              ><i class="ri-eye-line"></i
                                            ></a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div class="label"><span>-25%</span></div>
                                    </div>
                                    <div class="dot-info">
                                      <h2 class="dot-title">
                                        <a href="">The Sweater in Tosca</a>
                                      </h2>
                                      <div class="product-price">
                                        <span class="before">$62.00</span>
                                        <span class="current">$45.00</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
</template>

<script>
export default {};
</script>

<style>
.dotgrid .wrapper {
  display: var(--display, grid);
  --grid-col: 157px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(var(--grid-col), 100%), 1fr)
  );
  grid-template-rows: 1;
  gap: var(--gutter, 30px);
}

.dotgrid .dot-image {
  position: relative;
  margin-bottom: 15px;
  overflow: hidden;
}

.dotgrid .dot-image > a,
.dotgrid .thumbnail.hover,
.dotgrid .actions,
.dotgrid .dot-image .label {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.dotgrid .dot-image > a {
  z-index: 1;
}

.dotgrid .thumbnail.hover {
  opacity: 0;
  transition: opacity 0.75s ease,
    transform 1.1s cubic-bezier(0.15, 0.75.5, 1) 0s;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.dotgrid .dot-image:hover .thumbnail.hover {
  opacity: 1;
  transform: scale3d(1.1, 1.1, 1.1) translateZ(0);
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.dotgrid .actions {
  z-index: 2;
  top: auto;
  bottom: 20px;
  transform: translate3d(0, 100%, 0);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.dot-image:hover .actions {
  opacity: 1;
  transform: translateZ(0);
}

.dotgrid .actions ul,
.dotgrid .dot-image .label {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.dotgrid .actions ul li a,
.dotgrid .dot-image .label span {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background-color: var(--white-color);
  border-radius: 50%;
  transition: var(--transition-background), var(--transition-color);
}
.dotgrid .actions ul li a:hover {
  background-color: var(--dark-color);
  color: var(--white-color);
}

.dotgrid .dot-image .label {
  top: auto;
  bottom: 20px;
}

.dotgrid .dot-image .label span {
  font-size: 12px;
  font-weight: var(--fw600);
  background-color: var(--primary-color);
  color: var(--white-color);
}

.dotgrid .dot-info {
  text-align: center;
}

.dotgrid .product-price .before {
  text-decoration: line-through;
}
</style>
