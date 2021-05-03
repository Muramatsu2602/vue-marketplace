<template>
  <div class="card">
    <div class="card-header">{{ card.name }}</div>

    <img :src="require(`@/assets/cards/${card.url}`)" />
    <div class="card-cost">R$ {{ card.price }}</div>

    <div class="card-properties">
      <div class="card-item">Health: {{ card.life }}</div>
      <div class="card-item">Attack: {{ card.attack }}</div>
      <div class="card-item">Defence: {{ card.defence }}</div>
    </div>

    <button @click="$emit('on-buy',card)">Buy Me</button>
  </div>
</template>

<script lang="ts">
import useMe from "@/modules/me";
import { defineComponent } from "@vue/runtime-core";
import Btn from "../atoms/Btn.vue";

export default defineComponent({
  components: { Btn },

  props: {
    card: { type: Object, required: true },
  },

  setup() {

   

    return {  };
  },
});
</script>

<style lang="css" scoped>
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

.card-cost {
  background-color: var(--color-red);
  color: var(--color-box-footer);

  margin-top: 0.3rem;
  padding: 0.3rem;
  border-radius: 10px;

  font-size: var(--text-medium);
  font-weight: bold;
}

.card img {
  height: 200px;
  width: 200px;
  object-fit: fill;
  border-radius: 8px;
  border: 2px solid var(--color-primary-medium);
  transition: border 0.2s !important;
}

.card img:hover {
  border: 2px solid var(--color-red);

  animation: shake 0.5s;
  animation-iteration-count: infinite;
}
</style>