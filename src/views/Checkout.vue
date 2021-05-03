<template>
  <div class="container"></div>
  {{ cart }}
</template>

<script lang="ts">
import useMe from "@/modules/me";
import { computed, defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    const me = useMe();

    const cart = computed(() => me.state.cart);

    return { cart };
  },
});
</script>

<style lang="css" scoped>
.container {
  /* border: 2px solid var(--color-primary-light);
  border-radius: 25px; */
  margin: 4rem 2rem 2rem 2rem;

  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;
}
</style>