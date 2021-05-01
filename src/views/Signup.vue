<template>
  <div class="container">
    <div class="form-container">
      <div class="header">
        <h1>Sign Up</h1>
      </div>
      <div class="login-form">
        <div class="logo">
          <img src="../assets/website/addUser.svg" alt="" />
        </div>
        <div class="signup-section">
          <div class="form-field">
            <label for="username">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              class="hide-me input"
              placeholder="Insert your name..."
              v-model="name"
              @keyup="nameHandler"
            />
            <span class="border"></span>
          </div>
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
          <span v-if="error.type === 'USERNAME'" class="signup-error"
            >Error: {{ error.msg }}</span
          >
          <div class="form-field">
            <label for="password">Password</label>
            <input
              type="Password"
              name="password"
              id="password"
              class="hide-me input"
              placeholder="Insert your password..."
              v-model="password1"
              @keyup="passwordHandler($event, 1)"
            />
            <span class="border"></span>
          </div>

          <div class="form-field">
            <label for="password">Confirm Password</label>
            <input
              type="Password"
              name="confirmPassword"
              id="confirmPassword"
              class="hide-me input"
              placeholder="Insert your password..."
              ref=""
              v-model="password2"
              @keyup="passwordHandler($event, 2)"
            />
            <span class="border"></span>
          </div>
          <span v-if="error.type === 'PASSWORD'" class="signup-error"
            >Error: {{ error.msg }}</span
          >
        </div>

        <div class="signup-button">
          <button @click="signup">Create Account</button>
        </div>

        <div class="signup">
          Already got an account?
          <router-link to="/login">sign in here</router-link>!
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
    const password1El = ref();
    const password2El = ref();

    const state = reactive({
      name: "",
      username: "",
      password1: "",
      password2: "",
      error: {
        type: "",
        msg: "",
      },
    });

    const signup = async () => {
      state.error.type = "";
      state.error.msg = "";

      if (!state.username) {
        state.error.type = "USERNAME";
        state.error.msg = "Please Enter your username";
        return;
      }

      if (!state.password1) {
        state.error.type = "PASSWORD";
        state.error.msg = "Please Enter your password";
        return;
      }

      if (state.password1 !== state.password2) {
        state.error.type = "PASSWORD";
        state.error.msg = "Password mismatch";
        return;
      }

      console.log("Sign up, bora!");
      const res = await auth.actions.signup(
        state.name,
        state.username,
        state.password1
      );

      if (res.status === "OK") {
        console.log("Let's go in!");
        router.push("/");
      } else {
        // verifica se tem erro e mostra na tela
      }
    };

    const nameHandler = (e: KeyboardEvent) => {
      // console.log(e)
      if (e.key === "Enter" && state.name) {
        usernameEl.value.focus();
      }
    };

    const usernameHandler = (e: KeyboardEvent) => {
      // console.log(e)
      if (e.key === "Enter" && state.username) {
        password1El.value.focus();
      }
    };

    const passwordHandler = (e: KeyboardEvent, x: number) => {
      if (e.key !== "Enter" || !state.username) {
        return;
      }

      if (x === 1) {
        password2El.value.focus();
      } else if (x === 2 && state.password1 && state.password2) {
        signup();
      }
    };

    return {
      // spread operator
      ...toRefs(state),
      signup,
      nameHandler,
      usernameHandler,
      passwordHandler,
      usernameEl,
      password1El,
      password2El,
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

.signup-section {
  align-self: center;
  margin-bottom: 11%;
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
  width: 100%;
  margin-top: 5%;
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo img {
  height: 80px;
}

.signup-button {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.signup-button button {
  background-color: var(--color-primary-medium);
  color: var(--color-box-base);

  width: 12rem;
  padding: 0.5rem;
  border-radius: 10px;
  font-weight: bold;

  margin-bottom: 1rem;

  cursor: pointer;
}

.signup-button button:hover {
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

.signup-error {
  color: red;
}
</style>
