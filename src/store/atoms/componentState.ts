import { atom } from "recoil";

export const componentStateAtom = atom<string>({
  key: "componentState",
  default: "HomePage",
});
