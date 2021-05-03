<template>
  <div class="container">
    <div class="header-section">
      <h1>Welcome to Your Collection!</h1>
      <p>You gotta catch them all!</p>
    </div>

    <div class="card-container" v-if="myList.length">
      <div v-for="card in myList" :key="card.id">
        <card-component :card="card" @on-buy="sellHandler" />
      </div>
    </div>
    <div v-else class="empty-collection">
      <font-awesome-icon size="2x" icon="gem" />
      <h3>Your Collection is empty. For now...</h3>
    </div>
  </div>
  <div v-if="myList.length" class="summary-container">
    <div class="summary">
      Options?
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { computed, defineComponent } from "@vue/runtime-core";
import useCards, { Card } from "@/modules/cards";
import Btn from "@/components/atoms/Btn.vue";
import useMe from "@/modules/me";
import CardComponent from "@/components/molecules/Card.vue";
import { ref } from "vue";

export default defineComponent({
  components: { Btn, CardComponent },
  setup() {
    const cards = useCards();
    const me = useMe();
    const total = ref(0);

    // Computed Functions
    const myList = me.getters.sortedList();

    const busy = computed(() => cards.state.busy);

    cards.actions.loadCards();

    return { total, myList, busy, };
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
.empty-collection {
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 2px solid var(--color-primary-light);
  border-radius: 25px;
  padding: 2rem;
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