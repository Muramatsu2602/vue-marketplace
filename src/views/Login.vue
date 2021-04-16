<template>
  <div class="container">
    <div class="header">
      <h1>Login</h1>
    </div>
    <div class="main">
     
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
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
}

.main {
  border: 5px solid var(--color-primary-light);
  border-radius: 25px;
  margin: 2rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

.container img {
  height: 200px;
  width: 200px;
}
</style>
