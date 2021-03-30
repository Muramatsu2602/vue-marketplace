import { reactive, readonly } from "vue";

// ---------------------- Interface ------------------
interface Card {
  id: number;
  name: string;
  price: number;
  attack: number;
  defence?: number; // talvez nao venha nada nesse
  // defence: number | undefined; // old syntax
}

interface State {
  list: Card[];
  busy: boolean;
}
// -------------------------------------------
const state: State = reactive({
  list: [],
  busy: false
});

// ----------------Actions--------------------
const actions = {
  loadCards() {
    mutations.setBusy(true);

    const mockData = [
      {
        id: 1,
        name: "Pikachu",
        price: 10,
        attack: 5,
        defence: 10
      },
      {
        id: 2,
        name: "Bulbassaur",
        price: 20,
        attack: 7,
        defence: 34
      },
      {
        id: 3,
        name: "Charmander",
        price: 40,
        attack: 6,
        defence: 51
      },
      {
        id: 4,
        name: "Piplup",
        price: 45,
        attack: 11,
        defence: 98
      },
      {
        id: 5,
        name: "Biduf",
        price: 32,
        attack: 87,
        defence: 22
      }
    ];

    console.log("Vamos carregar os cards");

    setTimeout(() => {
      // API CALLS GOES HERE

      console.log("depois de 0.5s");
      mockData.forEach(card => {
        // console.log(card);
        mutations.processCard(card);
      });

      mutations.setBusy(false);
    }, 500);
  }
};
//-----------------Mutations--------------------------//
const mutations = {
  setBusy(newValue: boolean) {
    state.busy = newValue;
  },

  processCard(card: any) {
    // verifying if it exists
    const idx = state.list.findIndex(x => x.id === card.id);
    console.log("process", card);

    const newCard: Card = {
      id: card.id,
      name: card.name,
      price: card.price,
      attack: card.attack,
      defence: card.defence
    };

    if (idx === -1) {
      // if it doesnt exist, create a new one
      state.list.push(newCard);
    } else {
      // editando o atual, pra evitar duplicidade
      state.list[idx] = newCard;
    }
  }
};
//------------------------------------------------------//

export default function useCards() {
  return readonly({
    state,
    actions
  });
}
