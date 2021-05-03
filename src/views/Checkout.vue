<template>
  <div class="container">
    <div class="header-section">
      <h1>Checkout</h1>
      <p>Make sure you got everything!</p>
    </div>

    <div class="card-container">
      <div v-for="card in cart" :key="card.id">
        <card-component :card="card" isCart @on-remove="removeHandler(card)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CardComponent from "@/components/molecules/Card.vue";
import { Card } from "@/modules/cards";
import useMe from "@/modules/me";
import { computed, defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: { CardComponent },
  setup() {
    const me = useMe();

    const cart = computed(() => me.state.cart);

    const removeHandler = (card: Card) => {
      
    };

    return { cart, removeHandler };
  },
});
</script>

<style lang="css" scoped>
h1 {
  text-align: center;
}

.header-section {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

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

.card-container {
  border: 2px solid var(--color-primary-light);
  border-radius: 25px;
  padding: 0.5rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  /* max-height: 70vh;
  overflow-y: auto; */
}
</style>