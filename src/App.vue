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
import useMe from "./modules/me";

export default defineComponent({
  components: { Header },

  setup() {
    const auth = useAuth();
    const me = useMe();

    auth.actions.loadUserData();

    if (auth.state.token) {
      me.actions.getMe().then((res) => {
        console.log("App.vue", res);
        if (!res) {
          auth.actions.logout();
        }
      });
    }

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
