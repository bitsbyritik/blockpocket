import { atom } from "recoil";

export interface Wallet {
  publicKey: string;
  privateKey: string;
  path: number;
}

export const walletAtom = atom<Wallet[]>({
  key: "walletAtom",
  default: [],
});
