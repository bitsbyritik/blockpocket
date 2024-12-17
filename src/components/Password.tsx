"use client";

import { useEffect, useState } from "react";
import { PasswordInput } from "./ui/password-input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { useRecoilState, useRecoilValue } from "recoil";
import { passwordAtom } from "@/store/atoms/passwordAtom";
import { Wallet, walletAtom } from "@/store/atoms/walletAtom";
import { createSolanaAccount } from "@/lib/createSolanaAccount";
import { seedPhraseAtom } from "@/store/atoms/seedPhraseAtom";
import { pathTypeAtom } from "@/store/atoms/pathTypeAtom";
import { storeEncryptedWalletsAndMnemonic } from "@/lib/storeEncryptedWallets";
import { currentWalletIndex } from "@/store/atoms/walletIndex";

export const Password = () => {
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [confPassword, setConfPassword] = useState("");
  const [isMatch, setIsMatch] = useState(true);
  const [wallets, setWallets] = useRecoilState(walletAtom);
  const mnemonicArr = useRecoilValue(seedPhraseAtom);
  const pathType = useRecoilValue(pathTypeAtom);
  const mnemonic = mnemonicArr.join("");
  const [walletIndex, setWalletIndex] = useRecoilState(currentWalletIndex);

  useEffect(() => {
    if (confPassword) {
      setIsMatch(password === confPassword);
    }
  }, [password, confPassword]);

  const nextHandler = async () => {
    try {
      const newWallet = createSolanaAccount({
        mnemonic,
        pathType,
        walletIndex,
      });
      if (newWallet) {
        setWalletIndex(walletIndex + 1);
        setWallets([...wallets, newWallet]);
      }
      await storeEncryptedWalletsAndMnemonic(wallets, mnemonicArr, password);
      console.log(newWallet.publicKey);
    } catch (err) {
      console.log("Error in wallet creation ", err);
    }
  };

  return (
    <form className="flex flex-col gap-2">
      <div className="mx-8 my-4 flex flex-col gap-4">
        <PasswordInput
          placeholder={"Password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />
        <PasswordInput
          placeholder={"Confirm Password"}
          id="confPassword"
          onChange={(e) => setConfPassword(e.target.value)}
          onPaste={(e) => {
            e.preventDefault();
          }}
          onBlur={() => setIsMatch(password === confPassword)}
          required
          minLength={8}
          className={`${isMatch ? "" : "border-2 border-red-500"}`}
        />
        {!isMatch && (
          <span className="text-red-500 text-md">Password do not match.</span>
        )}
      </div>
      <div className=" ml-24 items-top flex space-x-2">
        <Checkbox
          id="terms1"
          onCheckedChange={() => setTermsAccepted(!termsAccepted)}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="absolute mx-2 cursor-pointer text-sm font-medium text-gray-500 tracking-tight text-primary/90 md:text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to Terms of Service
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
    </form>
  );
};
