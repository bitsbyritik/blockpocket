import { pageState } from "@/store/atoms/pageState";
import { useRecoilValue } from "recoil";
import { SelectNetwork } from "./SelectNetwork";
import { SelectMethod } from "./SelectMethod";

export const ImportWallet = () => {
  const step = useRecoilValue(pageState);

  const steps = [<SelectNetwork key={0} />, <SelectMethod key={1} />];
  return (
    <div className="min-h-screen flex justify-center items-center">
      {steps[step]}
    </div>
  );
};
