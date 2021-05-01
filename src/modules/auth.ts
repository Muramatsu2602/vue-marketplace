import { Signup } from "./../mockServer/server";
import { Login } from "@/mockServer/server";
import { reactive, readonly } from "vue";

const STORAGE_KEY = "vue-marketplace";

interface State {
  id: number;
  name: string;
  username: string;
  token: string;
}

const state: State = reactive({
  id: 0,
  name: "",
  username: "",
  token: ""
});

// poder de editar os states
const mutations = {
  login(obj: any) {
    state.id = obj.id;
    state.name = obj.name;
    state.username = obj.username;
    state.token = obj.token;
  }
};

// Login's backend walkthrough
// 1. Pega o usuario e senha
// 2. Executa um funcao login
// 3. faz chamada API
// 4. trata a respostas
//    1. Ok, faz a mutacao e coloca os dados do login no state
//    2. WRONG_x, mostra que a msg de erro pro usuario

const actions = {
  // ASIA'S PREFFERED
  async login(username: string, password: string) {
    console.log("sou action, vamos logar", username, password);

    const res = await Login(username, password);

    if (res.status === "OK") {
      mutations.login(res.result);

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(res.result));
    }
    return res;
  },

  // WEST's Preffered
  async login2(username: string, password: string) {
    return new Promise(resolve => {
      console.log("action, vamos logar", username, password);

      setTimeout(() => {
        resolve("hello");
      }, 3000);
    });
  },

  async signup(name: string, username: string, password: string) {
    console.log("action, vamos cadastrar", name, username, password);

    const res = await Signup(name, username, password);

    if (res.status === "OK") {
      mutations.login(res.result);

      // like a state, but not as visible as a common cookie
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(res.result));
    }

    return res;
  }
};

export default function useAuth() {
  return readonly({
    state,
    actions
  });
}
