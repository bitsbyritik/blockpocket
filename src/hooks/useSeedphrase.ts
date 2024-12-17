import { seedPhraseAtom } from "@/store/atoms/seedPhraseAtom";
import { useRecoilState } from "recoil";
import { generateMnemonic } from "bip39";

export const useSeedPhrase = () => {
  const [seedPhrase, setSeedPhrase] = useRecoilState(seedPhraseAtom);

  const generateSeedPhrase = () => {
    const mnemonic = generateMnemonic();
    const wordsArray = mnemonic.split(" ");
    setSeedPhrase(wordsArray);
  };

  return { seedPhrase, generateSeedPhrase };
};
