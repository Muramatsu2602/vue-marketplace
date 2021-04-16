<template>
  <div class="container">
    <div class="login-form">
      <div class="header">
        <h1>Login</h1>
      </div>
      <div class="main">
        <div class="form-field">
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            class="hide-me input"
            placeholder="Insert your username..."
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
          />
          <span class="border"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>

<style lang='scss' scoped>
.container {
  background-image: url("../assets/website/background.jpg");
  background-repeat: no-repeat;

  background-position: center;
  background-size: cover;

  height: 100vh;
  width: 100vw;
}

.login-form {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
}

.main {
  height: 500px;
  width: 400px;

  border: 5px solid var(--color-primary-light);
  background-color: var(--color-white-background);
  border-radius: 25px;

  margin-top: 1rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  // inwards
  /* box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset; */
}

.header {
  margin-top: 5rem !important;
}

.form-field {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0rem 1rem 1rem 0rem;
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
  background-color:  var(--color-primary-light);
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
</style>
