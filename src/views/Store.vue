<template>
  <div class="container">
    <div v-if="!busy">
      <h1>{{ listOfCards.length }} Cientistas</h1>

      <div v-if="listOfCards.length" class="card-container">
        <div v-for="card in listOfCards" :key="card.id">
          <card-component :card="card" @on-buy="buyHandler"/>
        </div>
      </div>

      <!-- When dealing with a real API (pokemon API was used in the course) -->
      <!-- <div @click="loadMoreHandler" class="store-options-container">
        <btn>Carregar Mais</btn>
      </div> -->
    </div>

    <div v-else class="loading">
      <font-awesome-icon size="2x" icon="atom" spin /> Loading cards...
    </div>
  </div>
</template>

<script lang='ts'>
import { ref, defineComponent, computed } from "vue";

import useCards, { Card } from "@/modules/cards";
import Btn from "@/components/atoms/Btn.vue";
import useMe from "@/modules/me";
import CardComponent from "@/components/molecules/Card.vue";

export default defineComponent({
  components: { Btn, CardComponent },
  setup() {
    const cards = useCards();
    const me = useMe();

    const total = ref(0);

    // console.log("Components.cards", cards);

    // Computed Functions
    const listOfCards = computed(() => {
      return cards.state.list;
    }); // this form doesnt require 'return'
    const busy = computed(() => cards.state.busy);

    //functions
    const loadMoreHandler = () => {
      // cards.actions.loadMore();
    };

    const buyHandler = (card: Card) => {
      console.log("ID: ", card.id);
      me.mutations.addCardtoCart(card);
    };

    cards.actions.loadCards();

    return { total, listOfCards, busy, loadMoreHandler, buyHandler };
  },
});
</script>

<style lang='scss' scoped>
.container {
  margin-top: 5rem;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
}

.loading {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: var(--text-big);
  align-self: center;
  font-weight: bold;
}
h1 {
  text-align: center;
}

.card-container {
  border: 2px solid var(--color-primary-light);
  border-radius: 25px;
  padding: 0.5rem;
  margin: 1rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  /* max-height: 70vh;
  overflow-y: auto; */
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

.store-options-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
</style>