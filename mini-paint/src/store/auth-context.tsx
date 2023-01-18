import React from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  //   eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (token: string) => {},
  logout: () => {},
});

export default AuthContext;
