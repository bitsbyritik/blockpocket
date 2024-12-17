"use client";

import { componentStateAtom } from "@/store/atoms/componentState";
import { Button } from "./ui/button";
import { useSetRecoilState } from "recoil";

export const ConnectButton = () => {
  const setCurrentComponent = useSetRecoilState(componentStateAtom);
  return (
    <div className="relative flex flex-col gap-6 mt-28 mx-24 px-24">
      <Button
        variant={"default"}
        className="px-4"
        onClick={() => setCurrentComponent("CreateWallet")}
      >
        <span className="text-center text-xl font-bold dark:text-blue-800 light:text-primary/80">
          Create Wallet
        </span>
      </Button>

      <Button
        variant={"outline"}
        onClick={() => setCurrentComponent("ImportWallet")}
      >
        <span className="text-xl text-center font-bold text-primary/80">
          Import Wallet
        </span>
      </Button>
    </div>
  );
};
