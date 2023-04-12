<template>
  <main>
    <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form" @submit.prevent="handleSubmit">
          <!-- <label for="email">email</label> -->
          <input type="email" placeholder="email" v-model="email" required />
          <!-- <label for="password">password</label> -->
          <input type="password" placeholder="password" v-model="password" required />
          <button>login</button>
          <p class="message">Not registered? <a href="#"><router-link :to="{ name: 'signUp' }">Create an account</router-link></a></p>
          <div v-if="error">{{ error }}</div>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
import { ref } from 'vue'
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup(){
    const email = ref('')
    const password = ref('')

    const router = useRouter()
    const error = ref(null)
    const store = useStore()

    const handleSubmit = async () => {
      console.log(email.value, password.value);
      try {
        await store.dispatch('login',{
          email: email.value,
          password: password.value
        })
        router.push('/')

      } catch (err){
        error.value = err.message
      }
    };

    return {handleSubmit,email,password,error}
  }
};
</script>

<style >

header .header{
  background-color: #fff;
  height: 45px;
}
header a img{
  width: 134px;
margin-top: 4px;
}
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.login-page .form .login{
  margin-top: -31px;
margin-bottom: 26px;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background-color: var(--primary-color);
  /* background-image: linear-gradient(45deg,#328f8a,#08ac4b); */
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: var(--primary-color);
  text-decoration: none;
}

/* .container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
} */

</style>
