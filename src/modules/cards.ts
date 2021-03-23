import { readonly } from "vue";

interface State {
  list: [];
}


// the cards will go here!
const state: State = {
  list: []
};

export default function useCards() {
  return readonly({
    state
  });
}
