const production = process.env.NODE_ENV === 'production'

let mongoUri = 'mongodb://127.0.0.1:27017/rotten-mods'
let origin

if( production ){
  origin = 'http://ec2-52-77-214-145.ap-southeast-1.compute.amazonaws.com'
} else {
  origin = 'http://localhost:3000'
}

export {
  mongoUri,
  origin
}
