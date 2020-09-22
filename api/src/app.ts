import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import * as userController from './controllers/userController'
import mongoose from 'mongoose'

// Mongoose config 
const uri: string = 'mongodb://127.0.0.1:27017/rotten-mods'

mongoose.connect(uri, (err: any) => {
  if( err){
    console.log(err.message)
  } else {
    console.log("Connected to mongodb")
  }
})

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(cors());

// API Endpoints
app.get("/users", userController.allUsers);
app.get("/user/:id", userController.getUser);
app.put("/user", userController.addUser);
app.delete("/user/:id", userController.deleteUser);
app.post("/user/:id", userController.updateUser);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});