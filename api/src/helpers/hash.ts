import crypto from 'crypto'

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