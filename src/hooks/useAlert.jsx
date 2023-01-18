import { useContext } from "react";
import { AlertContext } from "../context/alertContext/AlertContext";


export function useAlert() {
  return useContext(AlertContext);
}