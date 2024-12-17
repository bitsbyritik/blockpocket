"use client";

import { Checkbox } from "./ui/checkbox";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { Button } from "./ui/button";
import { useState } from "react";
import { SeedPhrase } from "./SeedPhrase";
import { useRecoilState } from "recoil";
import { pageState } from "@/store/atoms/pageState";

export const SeedPhrasePage = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [step, setStep] = useRecoilState(pageState);

  const nextHandler = () => {
    setStep(step + 1);
  };

  return (
    <div className="m-10 flex flex-col relative gap-6 ">
      <Heading>Secret Recovery Phrase</Heading>
      <div className="pt-2 px-20">
        <Text className="text-gray-600">Save these words in a safe place</Text>
      </div>

      <div>
        <SeedPhrase />
      </div>
      <div className=" ml-20 items-top flex space-x-2">
        <Checkbox
          id="terms1"
          onCheckedChange={() => setTermsAccepted(!termsAccepted)}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="absolute mr-10 cursor-pointer text-sm font-medium text-gray-500 tracking-tight text-primary/90 md:text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I saved my secret recovery phrase
          </label>
        </div>
      </div>
      <Button
        onClick={nextHandler}
        disabled={!termsAccepted}
        className="mx-16 p-6 mt-2 text-lg"
      >
        Next
      </Button>
    </div>
  );
};
