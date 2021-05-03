const user: { [key: string]: any } = {
  id: 1,
  name: "kenzo",
  username: "kenzo",
  password: "123",
  status: "OK",
  token: "",
  balance: 200,
  cards: []
};

const data = window.localStorage.getItem("tmp_marketplace_vue3");
if (data) {
  const parsedData = JSON.parse(data);

  Object.keys(parsedData).forEach(k => {
    user[k] = parsedData[k];
  });
}

export const Signup = async (name: string, username: string, password: string) => {
  // setting user data
  user.name = name;
  user.username = username;
  user.password = password;
  user.token = "superUltraLongToken";
  user.balance = Math.floor(Math.random() * 1001);

  window.localStorage.setItem("tmp_marketplace_vue33", JSON.stringify(user));

  return {
    status: "OK",
    result: {
      id: user.id,
      name: user.name,
      username: user.username,
      token: user.token
    }
  };
};

export const Login = async (username: string, password: string) => {
  if (username !== user.username) {
    return { status: "WRONG_USER" };
  }
  if (password !== user.password) {
    return { status: "WRONG_PASSWORD" };
  }

  return {
    status: "OK",
    result: {
      id: user.id,
      name: user.name,
      username: user.username,
      token: "superUltraLongToken"
    }
  };
};

export const getMe = async () => ({
  status: "OK",
  result: {
    id: user.id,
    name: user.name,
    username: user.username,
    balance: user.balance,
    cards: user.cards
  }
});

export const buy = async (body: any) => {
  body.cards.forEach((card: any) => {
    user.cards.push(card);
    user.balance -= card.price;
  });

  window.localStorage.setItem("tmp_marketplace_vue33", JSON.stringify(user));

  return {
    status: "OK",
    result: {
      balance: user.balance
    }
  };
};

export const sell = async (body: any) => {
  const idx = user.cards.findIndex((x: any) => x.id === body.card_id);

  user.cards.splice(idx, 1);
  window.localStorage.setItem("tmp_marketplace_vue33", JSON.stringify(user));

  return {
    status: "OK",
    result: {
      balance: user.balance
    }
  };
};
