const user = {
  id: 1,
  name: "kenzo",
  username: "kenzo",
  password: "123",
  status: "OK",
  token: ""
};

export const Signup = async (name: string, username: string, password: string) => {
  console.log("Signup");

  user.name = name;
  user.username = username;
  user.password = password;

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