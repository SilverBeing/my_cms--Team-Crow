import { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";

export const useUser = () => {
  return useContext(UserContext);
};
