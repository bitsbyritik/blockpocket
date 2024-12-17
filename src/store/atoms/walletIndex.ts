import { atom } from "recoil";

export const currentWalletIndex = atom<number>({
  key: "currentWalletIndex",
  default: 0,
});
