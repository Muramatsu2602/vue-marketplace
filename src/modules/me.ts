import { getMe } from "@/mockServer/server";
import { faBuyNLarge } from "@fortawesome/free-brands-svg-icons";
import { computed, reactive, readonly } from "vue";
import { Card } from "./cards";

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
      return true;
    }

    return false;
  },

  async buy() {
    const body = {
      cards: state.cart.map(card => card.id) // IDs array
    };

    // TODO: Aqui foi a chamada pro servidor e voltou ok

    body.cards.forEach(cardId => {
      const cardIdx = state.cart.findIndex(c => c.id === cardId);
      console.log(cardId, state.cart[cardIdx]);

      state.list.push(state.cart[cardIdx]); // adding card to user's list
      state.cart.splice(cardIdx, 1); // removing cards from checkout
    });

    return "OK";
  },

  async sell(card: Card) {
    const body = {
      card_id: card.id
    };

    // TODO: Aqui foi a chamada pro servidor e voltou ok

    const cardIdx = state.list.findIndex(c => c.id === card.id);
    state.list.splice(cardIdx, 1);

    
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
