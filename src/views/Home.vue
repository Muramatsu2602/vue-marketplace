<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
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
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
}

.container img {
  height: 200px;
  width: 200px;
}
</style>
