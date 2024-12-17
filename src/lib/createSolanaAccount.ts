import { derivePath } from "ed25519-hd-key";
import { mnemonicToSeedSync } from "bip39";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";

export function createSolanaAccount({
  mnemonic,
  pathType,
  walletIndex,
}: {
  mnemonic: string;
  pathType: number;
  walletIndex: number;
}) {
  const seed = mnemonicToSeedSync(mnemonic);
  const path = `m/44'/${pathType}'/${walletIndex}'/0'`;
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const keyPair = Keypair.fromSecretKey(secret);

  const newWallet = {
    publicKey: keyPair.publicKey.toBase58(),
    privateKey: keyPair.secretKey.toString(),
    path: pathType,
  };

  return newWallet;
}
