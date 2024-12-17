import { AlignJustify, KeyIcon } from "lucide-react";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { Button } from "./ui/button";

export const SelectMethod = () => {
  return (
    <div className="flex flex-col  gap-6 ">
      <Heading>Import your wallets</Heading>
      <div className="pt-2 flex flex-col gap-1">
        <Text>Choose a method to import your wallets</Text>
      </div>
      <div className="relative flex flex-col gap-4 pt-8">
        <Button variant={"outline"} className="justify-start  py-8 bg-gray-900">
          <div className="flex flex-row gap-4">
            <AlignJustify className="ml-2" />
            <span className="text-left text-xl  text-primary/80">
              Import secret recovery phrase
            </span>
          </div>
        </Button>
        <Button variant={"outline"} className="justify-start py-8 bg-gray-900">
          <div className="flex flex-row gap-4 ">
            <KeyIcon className="ml-2" />
            <span className="text-left text-xl  text-primary/80">
              Import private key
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
};
