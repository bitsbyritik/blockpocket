import { bufferToBase64, deriveEncryptionKey, encoder } from "./encryption";

export async function encryptData(data: any, password: string) {
  const salt = crypto.getRandomValues(new Uint8Array(16)); // Generate salt
  const iv = crypto.getRandomValues(new Uint8Array(12)); // Generate IV
  const key = await deriveEncryptionKey(password, salt);

  const encryptedData = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoder.encode(JSON.stringify(data)), // Convert data to JSON string before encrypting
  );

  return {
    salt: bufferToBase64(salt),
    iv: bufferToBase64(iv),
    encrypted: bufferToBase64(new Uint8Array(encryptedData)),
  };
}
