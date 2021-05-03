import { reactive, readonly } from "vue";
import { Card } from "./cards";

export interface State {
  list: Card[];
  checkout: Card[];
  balance: number;
}

const state: State = reactive({
  list: [],
  checkout: [],
  //   balance: Math.random() * 100
  balance: Math.floor(Math.random() * 1000)
});

export default function useMe() {
  return readonly({
    state
  });
}
