<template>
  <div class="guide">
    <div class="container">
      <div class="wrap">
        <div class="heading">
          <h2 class="title">Products Guide</h2>
        </div>
        <div class="dotgrid scrollto">
          <div class="wrapper">
            <div class="item">
              <div class="dot-image">
                <div class="thumbnail hover">
                  <img :src="getImageSrc('guide_01.png')" alt="elt" />
                </div>
              </div>
              <div class="dot-info">
                <h3 class="dot-title">The Blue Ocean MX</h3>
                <div class="p grey-color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, natus quis incidunt fuga amet molestias fugit, earum
                  omnis quasi eveniet quas rerum autem dolor aut quidem
                  asperiores! Fuga, alias velit.
                </div>
              </div>
            </div>
            <div class="item">
              <div class="dot-image">
                <div class="thumbnail hover">
                  <img :src="getImageSrc('guide_02.png')" alt="elt" />
                </div>
              </div>
              <div class="dot-info">
                <h3 class="dot-title">The Blue Ocean MX</h3>
                <div class="p grey-color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, natus quis incidunt fuga amet molestias fugit, earum
                  omnis quasi eveniet quas rerum autem dolor aut quidem
                  asperiores! Fuga, alias velit.
                </div>
              </div>
            </div>
            <div class="item">
              <div class="dot-image">
                <div class="thumbnail hover">
                  <img :src="getImageSrc('guide_03.png')" alt="elt" />
                </div>
              </div>
              <div class="dot-info">
                <h3 class="dot-title">The Blue Ocean MX</h3>
                <div class="p grey-color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, natus quis incidunt fuga amet molestias fugit, earum
                  omnis quasi eveniet quas rerum autem dolor aut quidem
                  asperiores! Fuga, alias velit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuideProducts",
  methods: {
    getImageSrc(image) {
      return require(`../assets/images/${image}`);
    },
  },
};
</script>

<style>
.guide {
  background-color: var(--flashwhite-color);
}

main > div .heading {
  text-align: center;
  margin-bottom: 60px;
}

.guide .dotgrid .wrapper {
  --grid-col: 260px;
}

:is(.guide) .dot-image .thumbnail {
  position: relative;
  opacity: unset;
}

.guide .dot-image .thumbnail img {
  width: 100%;
}

.guide .dot-title {
  --fs14: 18px;
  --fw600: 400;
  padding: 10px 0;
}

.guide .dot-info p {
  line-height: 1.4;
}

.guide .wrapper .item {
  width: 290px;
  scroll-snap-align: start;
  flex-shrink: 0;
}

.guide .scrollto .wrapper::wrapper::-webkit-scrollbar-thumb {
  --border-color: #f0f9f8;
}

@media (min-width: 992px) {
  .guide .wrapper {
    display: flex;
    justify-content: center;
  }
}
</style>
