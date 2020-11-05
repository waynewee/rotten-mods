import e from "express";

const production = process.env.NODE_ENV === 'production'

let mongoUri

if( production ){
  mongoUri = 'mongodb://18.141.176.139/rotten-mods';
} else {
  mongoUri = 'mongodb://127.0.0.1:27017/rotten-mods';
}

export {
  mongoUri
}
