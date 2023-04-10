<template>
  <div class="page-category">
    <main>
      <div class="section">
        <div class="container wide">
          <div class="wrap">
            <div class="heading">
              <h1 class="title">Sweater</h1>
            </div>
            <div class="content">
              <div id="sidebar-filter" class="sidebar">
                <div class="wrap">
                  <a href="#0" class="close-trigger">
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
                          <input type="range" value="25" min="0" max="500" step="1">
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
              <div class="category-content"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style >
.sidebar-title {
  font-size: 26px;
}

.sidebar .widget {
  margin: 20px 0;
}

.sidebar label,
.sidebar .price-range{
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
  transition:var(--transition-transform)
}


.sidebar .list-block ul {
  padding-left: 15px;
  margin-top: 20px;
  height: 150px;
}

input[type="range"] {
  -webkit-appearance : none;
  width: 100%;
}

input[type="range"]:focus{
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

input[type="range"]::-webkit-slider-thumb{
  z-index:2;
  position: relative;
  height: 18px;
  width: 14px;
  background-color: var(--grey-color);
  cursor: pointer;
  -webkit-appearance : none;
  margin-top : -7px
}


.sidebar .price-range {
  font-size: 18px;
}

.sidebar .widget .accord{
  padding-right: 15px;
  max-height: 0;
  opacity:0;
  visibility: hidden;
  transition: all .3s ease; 
}

.sidebar .widget input:checked ~ div {
  max-height: 1000px;
  opacity: 1;
  visibility: visible;
}

.sidebar .widget input:checked ~ label i {
  transform: rotate(180deg);
}

.sidebar .widget :where(.accord > div,.range-track){
  padding-top: 20px;
}


.scrollto .wrapper:not(.initial){
  --display:grid;
  padding:0;
  overflow: unset;
  scroll-snap-type: unset;
  overscroll-behavior-inline: unset;
}

.scrollto .wrapper .item{
  width: unset;
}


</style>
