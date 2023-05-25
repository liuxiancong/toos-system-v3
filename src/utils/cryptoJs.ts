import CryptoJS from 'crypto-js'

 /**
 * AES加密
 * @param plaintext 明文
 * @param key 密钥
 * @param iv 初始向量
 * @returns 密文
 */
export function aesEncrypt(plaintext: string, key: string, iv: string): string {
  const keyBytes = CryptoJS.enc.Utf8.parse(key)
  const ivBytes = CryptoJS.enc.Utf8.parse(iv)
  const encrypted = CryptoJS.AES.encrypt(plaintext, keyBytes, { iv: ivBytes, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return encrypted.toString()
}

 /**
 * AES解密
 * @param ciphertext 密文
 * @param key 密钥
 * @param iv 初始向量
 * @returns 明文
 */
export function aesDecrypt(ciphertext: string, key: string, iv: string): string {
  const keyBytes = CryptoJS.enc.Utf8.parse(key)
  const ivBytes = CryptoJS.enc.Utf8.parse(iv)
  const decrypted = CryptoJS.AES.decrypt(ciphertext, keyBytes, { iv: ivBytes, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return decrypted.toString(CryptoJS.enc.Utf8)
}

/**
 * MD5加密
 * @param plaintext 明文
 * @returns 密文
 */
 export function md5(plaintext: string): string {
  const hash = CryptoJS.MD5(plaintext)
  return hash.toString()
}
