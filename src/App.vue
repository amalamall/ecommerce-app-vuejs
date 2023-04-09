<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <HomeView></HomeView>
</template>

<script>
import HomeView from './views/HomeView.vue';
export default {
  name: "AppView",
  components: {
    HomeView,
  },
};

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prata&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Prata&display=swap");

/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}*/

:root {
  --primary-color: #2bcbba;
  --light-color: #d1d8e0;
  --grey-color: #687080;
  --red-color: #ff4757;
  --flashwhite-color: #f1f2f6;
  --white-color: #ffffff;
  --dark-color: #212121;

  --primary-font: "Monstserrat", sans-serif;
  --second-font: "Prata", serif;
  --fs14: 14px;
  --fw600: 600;

  --transition-color: color 0.3;
  --transition-background: background-color 0.3;
  --transition-border: border 0.3;
  --transisition-transform: transform 0.3;

  --shadow: 0px 10px 20px 0px rgb(0 0 0 / 20%);
  --fade: fade-bottom .3s cubic-bezier(0.39,0.575, .0565, 1) both;
}

/* html {
  scroll-behavior: smooth;
  overflow: hidden;
} */

* {
  margin: 0;
  padding: 0;
}

*,
::before,
::after {
  box-sizing: border-box;
}

body {
  font-family: var(--primary-font);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
  color: var(--dark-color);
  background-color: var(--white-color);
}

a {
  text-decoration: none;
  vertical-align: middle;
  color: inherit;

}

ul {
  list-style: none;
}
p {
  margin: 0 0 15px;
}
input,
textarea,
select {
  font: inherit;
  width: 100%;
}

input[type="checkbox"],
input[type="radio"] {
  width: auto;
}
input::placeholder,
textarea::placeholder {
  color: inherit;
}
button {
  font: inherit;
}
strong {
  font-weight: var(--fw600);
}

h1,
h2,
h3,
h4 {
  font-family: var(--second-font);
  font-weight: 400;
  line-height: normal;
}

h1 {
  font-size: 2.75em;
}
h2 {
  font-size: 2.5em;
}
h3 {
  font-size: 2em;
}
h4 {
  font-size: 1em;
}

/* Reused style */
.container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}

.item-floating {
  position: absolute;
  font-size: 10px;
  font-weight: var(--fw600);
  top: -8px;
  right: 0;
  background-color: var(--primary-color);
  color: var(--white-color);
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.button > [class*=-btn]{
  font-size : var(--fs14);
  font-weight: var(--fw600);
  text-transform: uppercase;
  padding: 0px 30px;
  display: inline-block;
  line-height: 42px;
  border-width:2px;
  border-style:solid;
  transition: var(--transition-background),
              var(--transition-color),
              var(--transition-border);
}

.secondary-btn , .primary-btn{
  border-color: var(--dark-color);
}

.primary-btn, .secondary-btn {
  border-color: var(--dark-color);
}

.primary-btn:hover,
.secondary-btn {
  background-color: var(--dark-color);
  color: var(--white-color)
}

.secondary-btn:hover {
  background-color: transparent;
  border-color: var(--dark-color);
  color: var(--dark-color)
}

.title{
  font-size: clamp(30px, -0.875em + 8.333vw, var(--fs-max,40px))
}

.page-home main > div:not(.slider){
  padding : 100px 0;
}

/* end of reused style */
</style>
