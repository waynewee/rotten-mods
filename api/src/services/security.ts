import crypto from 'crypto'

/**
 * Referenced from 
 * @author Ahad Birang
 * Hash your passwords with scrypt using Nodejs crypto module
 * May 29, 2020
 * https://dev.to/farnabaz/hash-your-passwords-with-scrypt-using-nodejs-crypto-module-316k
 */
export async function hash(password: string): Promise<string>{
  
  return new Promise((resolve, reject) => {

    const salt = crypto.randomBytes(32).toString("hex")
    
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if(err) {
        reject(err)
      } 
      resolve(salt + ":" + derivedKey.toString('hex'))
    })

  })
}

/**
 * Referenced from 
 * @author Ahad Birang
 * Hash your passwords with scrypt using Nodejs crypto module
 * May 29, 2020
 * https://dev.to/farnabaz/hash-your-passwords-with-scrypt-using-nodejs-crypto-module-316k
 */
export async function verify(password: string, hash: string): Promise<boolean> {
  return new Promise((resolve, reject) => {

      const [salt, key] = hash.split(":")
    
      crypto.scrypt(password, salt, 64, (err, derivedKey) => {
          if (err) {
            reject(err)
          };
          resolve(key == derivedKey.toString('hex'))
      });
  })
}

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