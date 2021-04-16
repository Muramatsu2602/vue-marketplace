<template>
  <div class="container">
    <div v-if="!busy">
      <h1>{{ listOfCards.length }} Cientistas</h1>

      <div v-if="listOfCards.length" class="card-container">
        <div v-for="card in listOfCards" :key="card.id" class="card">
          <div class="card-header">{{ card.name }}</div>

          <img :src="require(`@/assets/cards/${card.url}`)" />
          <div class="card-cost">R$ {{ card.price }}</div>

          <div class="card-properties">
            <div class="card-item">Health: {{ card.life }}</div>
            <div class="card-item">Attack: {{ card.attack }}</div>
            <div class="card-item">Defence: {{ card.defence }}</div>
          </div>

          <button>Buy Me</button>
        </div>
      </div>
    </div>

    <div v-else class="loading">Loading your app...</div>
  </div>
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
.container {
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
}

.loading {
  font-size: var(--text-big);
  align-self: center;
  font-weight: bold;
}
h1 {
  text-align: center;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 325px;
  margin: 1rem;
  border-radius: 10px;

  justify-content: space-between;

  background-color: var(--color-white-background);
  color: var(--color-text-title);
  border: 3px solid var(--color-primary-medium);
  font-weight: 500;

  transition: border 0.2s !important;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

.card:hover {
  border-color: var(--color-red);
}

.card-header {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  padding-top: 0.5rem;
  margin-bottom: 0.5rem;
  height: 2rem;
  width: 100%;
  font-weight: bold;

  display: flex;
  justify-content: space-evenly;

  background-color: var(--color-primary-light);
}

.card-properties {
  background-color: var(--color-input-background);
  border-bottom: 2px solid var(--color-primary-light);
  border-top: 2px solid var(--color-primary-light);

  width: 97%;
  display: flex;
  margin: 0.5rem;
  padding: 0.3rem;
  flex-direction: column;
}

.card button {
  background-color: var(--color-primary-light);
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 10px;
  font-weight: bold;
  transition-duration: 0.4s;
  cursor: pointer;
}

.card button:hover {
  background-color: var(--color-green); /* Green */
  color: white;
}

.card-container {
  border: 2px solid var(--color-primary-light);
  border-radius: 25px;
  padding: 0.5rem;
  margin: 1rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  justify-content: space-between;
}

.card-cost {
  background-color: var(--color-red);
  color: var(--color-box-footer);

  margin-top: 0.3rem;
  padding: 0.3rem;
  border-radius: 10px;

  font-size: var(--text-medium);
  font-weight: bold;
}

.card-container img {
  height: 200px;
  width: 200px;
  object-fit: fill;
  border-radius: 8px;
  border: 2px solid var(--color-primary-medium);
  transition: border 0.2s !important;
}

.card-container img:hover {
  border: 2px solid var(--color-red);

  animation: shake 0.5s;
  animation-iteration-count: infinite;
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
</style>