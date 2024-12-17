import { PasswordInput } from "./ui/password-input";
import { Button } from "./ui/button";
import { useRecoilState, useSetRecoilState } from "recoil";
import { passwordAtom } from "@/store/atoms/passwordAtom";
import { retrieveEncryptedWalletsAndMnemonic } from "@/lib/decryptData";
import { walletAtom } from "@/store/atoms/walletAtom";
import { seedPhraseAtom } from "@/store/atoms/seedPhraseAtom";

export const LoginPassword = ({ setAskPassword }) => {
  const [password, setPassword] = useRecoilState(passwordAtom);
  const setWallets = useSetRecoilState(walletAtom);
  const setMnemonics = useSetRecoilState(seedPhraseAtom);

  const nexthandler = async () => {
    try {
      const { wallets, mnemonic } =
        await retrieveEncryptedWalletsAndMnemonic(password);
      setWallets(wallets);
      setMnemonics(mnemonic);
      setAskPassword(false);
      console.log(wallets);
    } catch (err) {
      console.error("Decryption Error", err);
    }
  };

  return (
    <div className="m-80 relative">
      <div className="text-center text-xl font-bold tracking-tighter md:text-2xl xl:text-3xl">
        <span className="bg-gradient-to-b from-primary/90 to-primary/80 bg-clip-text py-1 text-transparent">
          Enter Password to Unlock
        </span>
      </div>
      <form className="mt-4 flex flex-col gap-2">
        <div className="mx-8 my-4 flex flex-col gap-4">
          <PasswordInput
            placeholder={"Password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
          />
        </div>
        <Button
          onClick={nexthandler}
          disabled={!password}
          className="mx-16 p-6 mt-2 text-lg"
        >
          Unlock
        </Button>
      </form>
    </div>
  );
};
