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
        name: "Marie Curie",
        life: "68",
        attack: "100",
        defence: "40",
        price: 12.33,
        url: "img/cards/marieCurie.jpg"
      },
      {
        id: 2,
        name: "Albert Einstein",
        life: "76",
        attack: "78",
        defence: "99",
        price: 99.33,
        url: "img/cards/albertEinstein.jpg"
      },
      {
        id: 3,
        name: "Isaac Newton",
        life: "53",
        attack: "72",
        defence: "33",
        price: 34.33,
        url: "img/cards/isaacNewton.jpg"
      },
      {
        id: 4,
        name: "Nikola Tesla",
        life: "87",
        attack: "98",
        defence: "23",
        price: 98.33,
        url: "img/cards/nikolaTesla.jpeg"
      },
      {
        id: 5,
        name: "Stephen Hawking",
        life: "76",
        attack: "22",
        defence: "30",
        price: 119.33,
        url: "img/cards/stephenHawking.jpg"
      },
      {
        id: 6,
        name: "Galileo Galilei",
        life: "87",
        attack: "98",
        defence: "23",
        price: 98.33,
        url: "img/cards/galileoGalilei.jpg"
      },
      {
        id: 7,
        name: "Alan Turing",
        life: "41",
        attack: "55",
        defence: "30",
        price: 98.33,
        url: "img/cards/alanTuring.jpg"
      },
      {
        id: 8,
        name: "Noam Chomsky",
        life: "92",
        attack: "87",
        defence: "21",
        price: 1987.33,
        url: "img/cards/noamChomsky.jpg"
      },
      {
        id: 9,
        name: "Richard Feynman",
        life: "70",
        attack: "100",
        defence: "18",
        price: 93.33,
        url: "img/cards/richardFeynman.png"
      },
      {
        id: 10,
        name: "Leonhard Euler",
        life: "76",
        attack: "53",
        defence: "29",
        price: 10.0,
        url: "img/cards/leonhardEuler.jpg"
      },
      {
        id: 11,
        name: "Max Planck",
        life: "89",
        attack: "74",
        defence: "123",
        price: 49.0,
        url: "img/cards/maxPlank.jpg"
      },
      {
        id: 12,
        name: "Avicenna of Persia",
        life: "57",
        attack: "56",
        defence: "72",
        price: 23.0,
        url: "img/cards/avicenna.jpg"
      },
      {
        id: 13,
        name: "Amadeo Avogadro",
        life: "76",
        attack: "12",
        defence: "92",
        price: 299.0,
        url: "img/cards/avogadro.jpg"
      },
      {
        id: 14,
        name: "Dimitri Mendeleev",
        life: "57",
        attack: "56",
        defence: "72",
        price: 23.0,
        url: "img/cards/mendeleev.jpg"
      },
      {
        id: 15,
        name: "Blaise Pascal",
        life: "45",
        attack: "12",
        defence: "2",
        price: 98.0,
        url: "img/cards/pascal.jpg"
      },
      {
        id: 16,
        name: "Archimedes of Syracuse",
        life: "65",
        attack: "1000",
        defence: "12",
        price: 1234.0,
        url: "img/cards/archimedes.jpg"
      },
      {
        id: 17,
        name: "Srinavasa Ramanujan",
        life: "33",
        attack: "23",
        defence: "373",
        price: 376.0,
        url: "img/cards/ramanujan.jpg"
      },
      {
        id: 18,
        name: "Antoine Lavoisier",
        life: "51",
        attack: "23",
        defence: "44",
        price: 56.0,
        url: "img/cards/lavoisier.jpg"
      },
      {
        id: 19,
        name: "Georg Simon Ohm",
        life: "77",
        attack: "34",
        defence: "78",
        price: 734.0,
        url: "img/cards/ohm.jpg"
      },
      {
        id: 20,
        name: "Luigi Galvani",
        life: "67",
        attack: "123",
        defence: "6",
        price: 12.0,
        url: "img/cards/galvani.jpg"
      },
      {
        id: 21,
        name: "Francis Bacon",
        life: "69",
        attack: "231",
        defence: "5",
        price: 34.0,
        url: "img/cards/bacon.jpg"
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
