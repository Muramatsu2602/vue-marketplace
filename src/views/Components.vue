<template>
  <div v-if="!busy">
    <h1>{{ listOfCards.length }} Cientistas</h1>

    <div v-if="listOfCards.length" class="card-container">
      <div v-for="card in listOfCards" :key="card.id" class="card">
        <p>ID: {{ card.id }}</p>
        {{ card.name }}

        <img :src="require(`@/assets/cards/${card.url}`)" />
      </div>
    </div>
  </div>

  <div v-else>Loading your app...</div>
</template>

<script lang='ts'>
import { ref, defineComponent, computed } from "vue";

import useAuth from "@/modules/auth";
import useCards from "@/modules/cards";

export default defineComponent({
  setup() {
    // const auth = useAuth();
    const cards = useCards();
    const total = ref(0);

    console.log("Components.cards", cards);

    // Computed Functions
    const listOfCards = computed(() => {
      return cards.state.list;
    }); // this form doesnt require 'return'
    const busy = computed(() => cards.state.busy);
    //functions
    const incHandler = () => {
      console.log("total", total.value);
      total.value += 1;
    };

    cards.actions.loadCards();

    return { total, incHandler, listOfCards, busy };
  },
});
</script>

<style lang='scss' scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  width: 300px;
  height: 450px;
  margin: 1rem;
  border-radius: 8px;

  background-color: var(--color-white-background);
  color: var(--color-text-title);
  border: 3px solid var(--color-primary-dark);
  font-weight: 500;

  transition: border 0.2s !important;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

.card p {
  /* background-color: salmon; */
  border-radius: 25px;
}

.card:hover {
  border-color: var(--color-red);
}

.card-container {
  border: 2px solid blue;
  border-radius: 25px;
  padding: 1rem;
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.card-container img {
  height: 300px;
  width: 300px;
  object-fit: fill;
  border-radius: 8px;
}
</style>