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
  login(username: string, password: string) {
    console.log("sou action, vamos logar", username, password);
  }
};

export default function useAuth() {
  return readonly({
    state,
    actions
  });
}
