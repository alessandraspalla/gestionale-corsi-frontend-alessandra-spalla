import { AuthContext } from "./AuthContext";
import Cookies from "js-cookie";
import { useState } from "react";

export function AuthContextProvider({ children }) {
  const [userContext, setUserContext] = useState({
    nome: "",
    cognome: "",
    email: "",
    ruoli: [],
    isLogged: false,
  });

  return (
    <AuthContext.Provider value={{ userContext, setUserContext }}>
      {children}
    </AuthContext.Provider>
  );
}
