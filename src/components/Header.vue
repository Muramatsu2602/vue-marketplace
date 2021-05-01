<template>
  <div id="nav" class="sticky">
    <div>
      <router-link to="/">Home </router-link>
      <router-link to="/store">Store </router-link>
      <span v-if="!isLoggedIn">
        <router-link to="/login">Login </router-link>
      </span>
    </div>
    <div id="exit" v-if="isLoggedIn">
      <span id="exit-text" @click="logOutHandler">
        {{ username }}, Sign Out...</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import useAuth from "@/modules/auth";
import { computed, defineComponent } from "@vue/runtime-core";
import router from "@/router/";

export default defineComponent({
  components: {},

  setup() {
    const auth = useAuth();

    const isLoggedIn = computed(() => auth.state.token);
    const username = computed(() => auth.state.username);

    const logOutHandler = () => {
      auth.actions.logout();
      router.push("/login");
    };

    return { isLoggedIn, username, logOutHandler };
  },
});
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  justify-content: space-between;
  padding: 25px;
  height: 20px;
  background-color: var(--color-primary-medium);

  a {
    font-weight: bold;
    color: #2c3e50;

    margin: 0.5rem;
    text-decoration: none;

    &.router-link-exact-active {
      color: var(--color-hover);
    }
  }

  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}

#exit {
  margin-right: 3rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}

#exit-text {
  color: #2c3e50;
  font-weight: 600;

  transition: color 0.4s !important;
}

#exit-text:hover {
  color: white;
  cursor: pointer;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>