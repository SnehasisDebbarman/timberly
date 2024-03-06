import { atom } from "recoil";

export const transactionListDataState = atom({
  key: "transactionListDataState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
