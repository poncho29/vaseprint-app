import { useContext } from "react";
import { AuthContext } from "../context/authContext/AuthContext";


export function useAuth() {
  return useContext(AuthContext);
}