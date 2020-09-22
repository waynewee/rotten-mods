import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import * as userController from './controllers/userController' 
import * as modController from './controllers/modController'

const uri: string = 'mongodb://127.0.0.1:27017/rotten-mods'

mongoose.connect(uri, (err: any) => {
  if( err){
    console.log(err.message)
  } else {
    console.log("Connected to mongodb")
  }
})

const app = express();
app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(cors());

app.get("/user", userController.allUsers);
app.get("/user/:id", userController.getUser);

app.put("/user", userController.addUser);

app.delete("/user/:id", userController.deleteUser);

app.post("/user/:id", userController.updateUser);

app.get("/mod", modController.searchMods);

app.put("/mod", modController.addMod)

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});