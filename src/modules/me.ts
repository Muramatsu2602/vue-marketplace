import { getMe } from "@/mockServer/server";
import { reactive, readonly } from "vue";
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
  }
};

// ---------------------- Export ----------------------
export default function useMe() {
  return readonly({
    state,
    mutations,
    actions
  });
}
