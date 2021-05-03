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

const actions = {
  loadUserData() {
    const item = window.localStorage.getItem(STORAGE_KEY);
    if (item) {
      // put user's data into the right place
      mutations.login(JSON.parse(item));
    }
  },

  logout() {
    window.localStorage.removeItem(STORAGE_KEY);
    mutations.login({});
  },

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
