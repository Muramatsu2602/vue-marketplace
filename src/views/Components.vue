<template>
  <div v-if="!busy">
    {{ busy }}
    <h1>{{ listOfCards.length }} Pokemons</h1>

    <div v-if="listOfCards.length" class="cardContainer">
      <!-- {{ listOfCards }} -->
      <div v-for="card in listOfCards" :key="card.id" class="card">
        <p>ID: {{ card.id }}</p>
        {{ card.name }}
      </div>
    </div>

    <h1 style="margin-top: 100px">Lesson 2: Yoyo's</h1>
    <options />
    <composition-api />

    <!-- <h1>Lesson 2: Challenge</h1>
    <meu-composition />
    <meu-option /> -->

    <h1>Lesson 3: Yoyo's</h1>
    <div>Hello</div>
    <div>Total: {{ total }}</div>

    <options c="Componente options 1" :total="total" @inc="incHandler" />
    <composition-api text="Componente Composition 1" @inc="incHandler" />
  </div>

  <div v-else>Loading your app...</div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import Options from "@/components/OptionsApi.vue";
import CompositionApi from "@/components/CompositionApi.vue";

import MeuOption from "@/components/desafio-aula2/MeuOption.vue";
import MeuComposition from "@/components/desafio-aula2/MeuComposition.vue";

import useAuth from "@/modules/auth";
import useCards from "@/modules/cards";

export default defineComponent({
  components: {
    Options,
    CompositionApi,
    MeuComposition,
    MeuOption,
  },

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

<style lang="scss" scoped>
.card {
  border: 2px solid black;
  padding: 1rem;
  border-radius: 25px;
  width: 5rem;
  margin: 1rem;
}

.card p {
  background-color: salmon;
  border-radius: 25px;
}

.cardContainer {
  border: 2px solid blue;
  border-radius: 25px;
  padding: 1rem;
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>