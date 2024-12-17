import { atom } from "recoil";

export const passwordAtom = atom<string>({
  key: "passwordAtom",
  default: "",
});
