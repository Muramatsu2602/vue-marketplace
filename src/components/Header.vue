<template>
  <div id="nav" class="sticky">
    <router-link to="/">Home </router-link>
    <router-link to="/store">Store </router-link>
    <span v-if="!isLoggedIn">
      <router-link to="/login">Login </router-link>
    </span>
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

    return { isLoggedIn };
  },
});
</script>

<style lang="scss" scoped>
#nav {
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

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>