import { Wallet } from "@/store/atoms/walletAtom";
import { encryptData } from "./encryptedData";

export async function storeEncryptedWalletsAndMnemonic(
  wallets: Wallet[],
  mnemonic: string[],
  password: string,
) {
  const encryptedWallets = await encryptData(wallets, password);
  const encryptedMnemonic = await encryptData(mnemonic, password);

  // Store each item in localStorage
  localStorage.setItem("encryptedWallets", JSON.stringify(encryptedWallets));
  localStorage.setItem("encryptedMnemonic", JSON.stringify(encryptedMnemonic));
}
