import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import swaggerUi from 'swagger-ui-express'

import * as config from '../config'
import router from './routes'
import swaggerDocument from '../swagger.json'

mongoose.connect(config.mongoUri)
.then(() => console.log("Connected"))
.catch(err => console.log(err.message))

const app = express();

app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(cors());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api', router)

app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});