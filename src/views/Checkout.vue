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
  <div class="summary-container">
    <div class="summary">
      <div class="summary-item">
        Total Items: <strong>{{ cart.length }}</strong>
      </div>
      <div class="summary-item">
        Total Value: <strong> {{ total }}</strong>
      </div>
      <div>
        <btn>Checkout <font-awesome-icon size="1x" icon="dollar-sign" /> </btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CardComponent from "@/components/molecules/Card.vue";
import Btn from "@/components/atoms/Btn.vue";
import { Card } from "@/modules/cards";
import useMe from "@/modules/me";
import { computed, defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: { CardComponent, Btn },
  setup() {
    const me = useMe();

    const cart = computed(() => me.state.cart);
    const total = computed(() =>
      me.state.cart.map((x) => x.price).reduce((a, b) => a + b, 0)
    );

    const removeHandler = (card: Card) => {
      me.mutations.removeCardFromCart(card.id);
    };

    return { cart, removeHandler, total };
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

  max-height: 60vh;
  overflow-y: auto;
}

.summary-container {
  display: flex;
  justify-content: space-around;

  width: 100%;
}

.summary {
  display: flex;
  justify-content: space-around;

  border: 3px solid var(--color-primary-light);
  border-radius: 25px;
  background-color: white;

  width: 40%;
  margin: 1rem;

  align-self: center;
}

.summary-item {
  align-self: center;
}
</style>