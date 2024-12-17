import { base64ToBuffer, decoder, deriveEncryptionKey } from "./encryption";

export async function decryptData(
  encryptedData: { encrypted: string; salt: string; iv: string },
  password: string,
) {
  const salt = base64ToBuffer(encryptedData.salt);
  const iv = base64ToBuffer(encryptedData.iv);
  const key = await deriveEncryptionKey(password, new Uint8Array(salt));

  const decryptedContent = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: new Uint8Array(iv) },
    key,
    base64ToBuffer(encryptedData.encrypted),
  );

  return JSON.parse(decoder.decode(decryptedContent));
}

export async function retrieveEncryptedWalletsAndMnemonic(password: string) {
  const encryptedWallets = JSON.parse(
    localStorage.getItem("encryptedWallets") || "{}",
  );
  const encryptedMnemonic = JSON.parse(
    localStorage.getItem("encryptedMnemonic") || "{}",
  );

  const wallets = await decryptData(encryptedWallets, password);
  const mnemonic = await decryptData(encryptedMnemonic, password);

  return { wallets, mnemonic };
}
