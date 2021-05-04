import { getMe, sell } from "@/mockServer/server";
import { buy } from "@/mockServer/server";

import { computed, reactive, readonly } from "vue";
import useCards, { Card } from "./cards";

const cards = useCards();

export interface State {
  list: Card[];
  cart: Card[];
  balance: number;
}

// ---------------------- State ----------------------

const state: State = reactive({
  list: [],
  cart: [],
  balance: 0
});

// ---------------------- Mutations -------------------
const mutations = {
  setBalance(newBalance: number) {
    state.balance = newBalance;
  },

  async setUserCards(newCards: any) {
    for (let i = 0; i < newCards.length; i++) {
      const _card = newCards[i];

      // searches for card in State
      let card = cards.state.list.find(x => x.id === _card.id);
      if (!card) {
        // if not found, search for cards in API (not my case)
        await cards.actions.loadCards();
        card = cards.state.list.find(x => x.id === _card.id);
      }

      state.list.push({
        ...card,
        price: _card.price
      } as Card);
    }
  },

  addCardtoCart(card: Card) {
    state.cart.push(card);
  },

  removeCardFromCart(cardId: number) {
    const idx = state.cart.findIndex(card => card.id === cardId);
    if (idx > -1) {
      state.cart.splice(idx, 1);
    }
  }
};

// ---------------------- Action ----------------------

const actions = {
  async getMe() {
    // lets get the updated data in server
    const res = await getMe();

    if (res.status === "OK") {
      mutations.setBalance(res.result.balance);
      // mutations.setUserCards(res.result.cards);

      return true;
    }

    return false;
  },

  async buy() {
    const body = {
      cards: state.cart.map(card => ({
        id: card.id,
        price: card.price
      }))
    };

    const res = await buy(body);
    if (res.status === "OK") {
      body.cards.forEach(card => {
        const cardIdx = state.cart.findIndex(c => c.id === card.id);

        if (state.cart[cardIdx]) {
          state.list.push(state.cart[cardIdx]); // adding card to user's list
          state.cart.splice(cardIdx, 1); // removing cards from checkout
        }
      });
      mutations.setBalance(res.result.balance);
    }

    return res.status;
  },

  async sell(card: Card) {
    const body = {
      card_id: card.id
    };

    const res = await sell(body);
    if (res.status === "OK") {
      const cardIdx = state.list.findIndex(c => c.id === card.id);

      state.list.splice(cardIdx, 1);
      mutations.setBalance(res.result.balance);
    }
  }
};

// ---------------------- Getter ----------------------
const getters = {
  sortedList() {
    return computed(() => state.list.sort((a, b) => a.id - b.id));
  }
};

// ---------------------- Export ----------------------
export default function useMe() {
  return readonly({
    state,
    mutations,
    actions,
    getters
  });
}
