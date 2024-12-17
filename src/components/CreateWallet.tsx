import { useRecoilValue } from "recoil";
import { CreatePassword } from "./CreatePassword";
import { PhraseWarning } from "./PhraseWarning";
import { SeedPhrasePage } from "./SeedPhrasePage";
import { SelectNetwork } from "./SelectNetwork";
import { pageState } from "@/store/atoms/pageState";

export const CreateWallet = () => {
  const step = useRecoilValue(pageState);

  const steps = [
    <SelectNetwork key={0} />,
    <PhraseWarning key={1} />,
    <SeedPhrasePage key={2} />,
    <CreatePassword key={3} />,
  ];

  return (
    <div className="min-h-screen flex justify-center items-center">
      {steps[step]}
    </div>
  );
};
