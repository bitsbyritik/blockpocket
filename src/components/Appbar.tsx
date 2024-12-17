"use client";

import { useComponentState } from "@/hooks/useComponentState";
import { HomePage } from "./HomePage";
import { CreateWallet } from "./CreateWallet";
import { ImportWallet } from "./ImportWallet";
import { useRecoilValue, useRecoilState } from "recoil";
import { walletAtom } from "@/store/atoms/walletAtom";
import { useEffect, useState } from "react";
import { retrieveEncryptedWalletsAndMnemonic } from "@/lib/decryptData";
import { LoginPassword } from "./LoginPassword";
import { passwordAtom } from "@/store/atoms/passwordAtom";

export const Appbar = () => {
  const currentComponent = useComponentState();
  const [wallets, setWallets] = useRecoilState(walletAtom);
  const [askPassword, setAskPassword] = useState(false);
  const password = useRecoilValue(passwordAtom);

  useEffect(() => {
    const encryptedWallets = localStorage.getItem("encryptedWallets");
    const encryptedMnemonic = localStorage.getItem("encryptedMnemonic");

    if (encryptedMnemonic && encryptedWallets && password === "") {
      setAskPassword(true);
    }
  }, []);

  if (askPassword && wallets.length == 0) {
    return <LoginPassword setAskPassword={setAskPassword} />;
  }

  return (
    <div>
      {currentComponent === "HomePage" && <HomePage />}
      {currentComponent === "CreateWallet" && <CreateWallet />}
      {currentComponent === "ImportWallet" && <ImportWallet />}
    </div>
  );
};
