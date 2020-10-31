import crypto from 'crypto'
/**
 * Referenced from 
 * @author Shahid
 * Encrypt and Decrypt Data in Node.js
 * Oct 31, 2018
 * https://codeforgeek.com/encrypt-and-decrypt-data-in-node-js/
 */
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

export function encrypt(str: string) {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(str);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

export function decrypt(token: {
  iv: any,
  encryptedData: any
}) {

  let iv = Buffer.from(token.iv, 'hex');
  let encryptedText = Buffer.from(token.encryptedData, 'hex');
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}