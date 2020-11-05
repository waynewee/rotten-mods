import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import swaggerUi from 'swagger-ui-express'
import cookieParser from 'cookie-parser'

import * as config from '../config'
import router from './routers'
import swaggerDocument from '../docs/swagger.json'

mongoose.connect(config.mongoUri)
.then(() => console.log("Connected"))
.catch(err => console.log(err.message))

const app = express();

app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());
//add corsOpts here
app.use(cors({ 
  origin: config.origin, 
  credentials: true, 
  methods: ['GET', 'PUT', 'POST', 'DELETE'], 
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"] 
}));
app.use(cookieParser());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api', router)

app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});