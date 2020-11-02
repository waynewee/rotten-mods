import crypto from 'crypto'

export async function verify(value: string, hash: string): Promise<boolean> {
  return new Promise((resolve, reject) => {

      const [salt, key] = hash.split(":")
    
      crypto.scrypt(value, salt, 64, (err, derivedKey) => {
          if (err) {
            reject(err)
          };
          resolve(key == derivedKey.toString('hex'))
      });
  })
}