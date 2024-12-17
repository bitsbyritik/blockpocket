"use client";

import { Checkbox } from "./ui/checkbox";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { TextCard } from "./ui/TextCard";
import { LockKeyholeIcon, TriangleAlert } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useSeedPhrase } from "@/hooks/useSeedphrase";
import { useRecoilState } from "recoil";
import { pageState } from "@/store/atoms/pageState";

export const PhraseWarning = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { generateSeedPhrase } = useSeedPhrase();
  const [step, setStep] = useRecoilState(pageState);

  const nextHandler = () => {
    generateSeedPhrase();
    setStep(step + 1);
  };

  return (
    <div className="m-10 flex flex-col relative gap-6 ">
      <Heading>Secret Recovery Phrase Warning</Heading>
      <div className="pt-2 px-20">
        <Text>On the next page, you will receive your</Text>
        <Text>secret recovery phrase.</Text>
      </div>
      <div className="flex flex-col gap-3 mx-28">
        <TextCard>
          <div className="flex flex-row gap-6">
            <TriangleAlert className="mt-3" color="yellow" />
            <div className="text-md font-medium">
              <p>This is the ONLY way to recover your account</p>
              <p>if you lose access to your device or password.</p>{" "}
            </div>
          </div>
        </TextCard>
        <TextCard>
          <div className="flex flex-row gap-6">
            <LockKeyholeIcon className="mt-3" color="green" />
            <div className="text-md font-medium">
              <p>Write it down, store it in a safe place, and</p>
              <p>NEVER share it with anyone.</p>{" "}
            </div>
          </div>
        </TextCard>
      </div>
      <div className=" ml-28 items-top flex space-x-2">
        <Checkbox
          id="terms1"
          onCheckedChange={() => setTermsAccepted(!termsAccepted)}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="absolute mr-20 cursor-pointer text-sm font-medium text-gray-500 tracking-tight text-primary/90 md:text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I understand that I am responsible for saving my secret recovery
            phrase, and that it is the only way to recover my wallet.
          </label>
        </div>
      </div>
      <Button
        disabled={!termsAccepted}
        className="mx-36 p-6 mt-20 text-lg"
        onClick={nextHandler}
      >
        Next
      </Button>
    </div>
  );
};
