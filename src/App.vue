<template>
  <div class="container">
    <div v-if="$route.meta.headerShown === true">
      <Header />
    </div>
    <router-view />
  </div>
</template>


<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Header from "@/components/Header.vue";
import useAuth from "./modules/auth";

export default defineComponent({
  components: { Header },

  setup() {
    const auth = useAuth();

    auth.actions.loadUserData();

    return {};
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
