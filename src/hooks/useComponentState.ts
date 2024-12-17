import { componentStateAtom } from "@/store/atoms/componentState";
import { useRecoilValue } from "recoil";

export const useComponentState = () => {
  const value = useRecoilValue(componentStateAtom);
  return value;
};
