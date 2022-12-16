import { createContext, useState } from "react";
export const AuthContext = createContext({});
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
