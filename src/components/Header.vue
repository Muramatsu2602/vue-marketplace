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
      <router-link to="/login">{{ username }}, Sign Out... </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import useAuth from "@/modules/auth";
import { computed, defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {},

  setup() {
    const auth = useAuth();

    const isLoggedIn = computed(() => auth.state.token);
    const username = computed(() => auth.state.username);

    return { isLoggedIn, username };
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
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>