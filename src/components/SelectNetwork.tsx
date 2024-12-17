import { useRecoilState, useSetRecoilState } from "recoil";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { Button } from "./ui/button";
import { pageState } from "@/store/atoms/pageState";
import { pathTypeAtom } from "@/store/atoms/pathTypeAtom";

export const SelectNetwork = () => {
  const [step, setStep] = useRecoilState(pageState);
  const setPathType = useSetRecoilState(pathTypeAtom);

  const clickHandler = (value: number) => {
    setPathType(value);
    setStep(step + 1);
  };

  return (
    <div className="flex flex-col  gap-6 ">
      <Heading>Select Network</Heading>
      <div className="pt-2 flex flex-col gap-1">
        <Text>Blockpocket supports currently</Text>
        <Text>Solana and Ethereum</Text>
      </div>
      <div className="relative flex flex-col gap-3 pt-8">
        <Button
          onClick={() => clickHandler(501)}
          variant={"outline"}
          className="py-8"
        >
          <span className="text-left text-2xl font-semibold text-primary/80">
            Solana
          </span>
        </Button>
        <Button
          onClick={() => clickHandler(60)}
          variant={"outline"}
          className="py-8"
        >
          <span className="text-left text-2xl font-semibold text-primary/80">
            Ethereum
          </span>
        </Button>
      </div>
    </div>
  );
};
