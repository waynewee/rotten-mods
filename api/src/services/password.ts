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