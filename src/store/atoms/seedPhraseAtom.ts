import { atom } from "recoil";

export const seedPhraseAtom = atom<string[]>({
  key: "seedPhraseAtom",
  default: [],
});
