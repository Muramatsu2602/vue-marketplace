<template>
  <div class="btn" @click="clickHandler">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {},

  setup(props, { emit }) {
    const clickHandler = () => {
      emit("click");
    };
    return {
      clickHandler,
    };
  },
});
</script>

<style lang="css" scoped>
.btn {
  width: 8rem;
  background-color: var(--color-primary-light);
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 10px;
  font-weight: bold;
  transition-duration: 0.4s;
  cursor: pointer;
}

.btn:hover {
  background-color: var(--color-green); /* Green */
  color: white;
}
</style>