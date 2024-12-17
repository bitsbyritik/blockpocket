import { useSeedPhrase } from "@/hooks/useSeedphrase";
import { Seed } from "./Seed";
import { useState } from "react";

export const SeedPhrase = () => {
  const { seedPhrase }: { seedPhrase: string[] } = useSeedPhrase();
  const [copyBtn, setCopyBtn] = useState(false);

  const copyClipboard = async () => {
    try {
      const seedArray = seedPhrase.join(" ");
      await navigator.clipboard.writeText(seedArray);
      setCopyBtn(true);
    } catch (err) {
      console.error("Copy to clipboard failed", err);
    }
  };
  return (
    <div
      onClick={copyClipboard}
      className="bg-gray-800 text-gray-400 border rounded-md cursor-pointer"
    >
      <div className="m-3 p-4 max-w-80 rounded-lg">
        <div className="grid grid-cols-3 gap-y-8 gap-x-40">
          {seedPhrase.map((seed, index) => (
            <Seed key={index} id={index} seed={seed} />
          ))}
        </div>
      </div>
      <div className="border-t-2 border-gray-700 mx-2">
        <div className="text-sm text-center p-1">
          {!copyBtn ? "Click anywhere on this card to copy" : "Copied!"}
        </div>
      </div>
    </div>
  );
};
