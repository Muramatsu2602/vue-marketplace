<template>
    <div id="nav" class="sticky">
      <router-link to="/">Home </router-link>
      <router-link to="/about">About </router-link>
      <router-link to="/components">Store </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {},

  setup() {
    return {};
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
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>