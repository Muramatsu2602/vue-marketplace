import { readonly } from "vue";

interface State {
  id: string;
  name: string;
  token: string;
}

const state: State = {
  id: "",
  name: "",
  token: ""
};

const actions = {
  // ASIA'S PREFFERED
  async login(username: string, password: string) {
    console.log("sou action, vamos logar", username, password);

    return "hello";
  },

  // WEST's Preffered
  async login2(username: string, password: string) {
    return new Promise(resolve => {
      console.log("action, vamos logar", username, password);

      setTimeout(() => {
        resolve("hello");
      }, 3000);
    });
  }
};

export default function useAuth() {
  return readonly({
    state,
    actions
  });
}
