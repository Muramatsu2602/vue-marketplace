<template>
  <div class="container">
    <div class="form-container">
      <div class="header">
        <h1>Login</h1>
      </div>
      <div class="login-form">
        <div class="logo">
          <img class="make-it-spin" src="../assets/website/atom.svg" alt="" />
          <h3>SciDeck 2.0</h3>
        </div>
        <!-- <span v-if="error.type === 'PASSWORD'" class="signup-error"
          >Error: {{ error.msg }}</span
        > -->
        <div class="input-section">
          <div class="form-field">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              class="hide-me input"
              placeholder="Insert your username..."
              v-model="username"
              @keyup="usernameHandler"
            />
            <span class="border"></span>
          </div>
          <div class="form-field">
            <label for="password">Password</label>
            <input
              type="Password"
              name="password"
              id="password"
              class="hide-me input"
              placeholder="Insert your password..."
              v-model="password"
              @keyup="passwordHandler"
            />
            <span class="border"></span>
          </div>
        </div>

        <div class="login-button">
          <button @click="login">Login</button>
        </div>

        <div class="signup">
          Don't have an account,
          <router-link to="/signup">sign up here</router-link>!
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useAuth from "@/modules/auth";
import { defineComponent, reactive, ref, toRefs } from "vue";
import router from "@/router/";

export default defineComponent({
  components: {},

  setup() {
    const auth = useAuth();
    const usernameEl = ref();
    const passwordEl = ref();

    const state = reactive({
      username: "",
      password: "",
    });

    const login = async () => {
      console.log("vamos fazer o login", state.username, state.password);

      if (state.username && state.password) {
        const res = await auth.actions.login(state.username, state.password);

        if (res.status === "WRONG_USER") {
          alert("Usuário inserido não existe!");
        } else if (res.status === "WRONG_PASSWORD") {
          alert("Senha digitada está incorreta!");
        } else if (res.status === "OK") {
          console.log("Let's go in!");
          router.push("/");
        }
      }
    };

    const usernameHandler = (e: KeyboardEvent) => {
      // console.log(e)
      if (e.key === "Enter" && state.username) {
        passwordEl.value.focus();
      }
    };

    const passwordHandler = (e: KeyboardEvent) => {
      if (e.key === "Enter" && state.username && state.password) {
        login();
      }
    };

    return {
      // spread operator
      ...toRefs(state),
      login,
      usernameHandler,
      passwordHandler,
      usernameEl,
      passwordEl,
    };
  },
});
</script>

<style lang='scss' scoped>
.header {
  margin-top: 5rem !important;
}

.container {
  background-image: url("../assets/website/background.jpg");
  background-repeat: no-repeat;

  background-position: center;
  background-size: cover;

  height: 100vh;
  width: 100vw;
}

.form-container {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
}

.login-form {
  width: 400px;

  border: 5px solid var(--color-primary-light);
  background-color: var(--color-white-background);
  border-radius: 25px;

  margin-top: 1rem;
  padding: 1rem 1rem 1rem 1rem;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  // inwards
  /* box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset; */
}

.input-section {
  align-self: center;
  margin-bottom: 15%;
  width: 80%;
}

.form-field {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0rem 1rem 1rem 0rem;
}

.form-field label {
  font-size: var(--text-big);
  font-weight: bold;
}

.form-field input {
  background-color: var(--color-input-background);

  border: 0;
  border-bottom: 2px solid #ccc;
  border-radius: 10px;

  font-size: var(--size-medium);

  padding: 0.3rem;
}

:focus {
  outline: none;
}

.input ~ .border {
  position: absolute;
  bottom: 1px;
  left: 5px;
  width: 0;
  height: 2px;
  background-color: var(--color-primary-light);
}

.input:focus ~ .border {
  width: 95%;
  transition: 0.5s;
}

// dissapearing placeholder
::-webkit-input-placeholder {
  color: var(--color-text-complement);
}
.hide-me:focus::-webkit-input-placeholder {
  opacity: 0;
  transition: 0.7s ease-in-out;
  /*    color: transparent*/
}
.logo {
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 5%;
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login h3 {
  margin-top: 1rem;
}

.logo img {
  height: 80px;
}

.login-button {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-button button {
  background-color: var(--color-primary-medium);
  color: var(--color-box-base);

  width: 8rem;
  padding: 0.4rem;
  border-radius: 10px;
  font-weight: bold;

  margin-bottom: 1rem;

  cursor: pointer;
}

.login-button button:hover {
  background-color: var(--color-primary-light);

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.signup {
  width: 100%;
  text-align: center;

  font-size: var(--text-small);
  color: var(--color-text-base);

  margin-top: 0.3rem;
}

.signup a {
  color: var(--color-primary-medium);
  text-decoration: none;
}

.signup a:hover {
  text-decoration: underline;
}

.make-it-spin {
  overflow: hidden;
  transition-duration: 0.9s;
  transition-property: transform;

  animation: rotation 8s infinite linear;
}
.make-it-spin:hover {
  transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
}
</style>
