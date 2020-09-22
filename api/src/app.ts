import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'

import * as userController from './controllers/userController' 
import * as modController from './controllers/modController' 
import * as courseController from './controllers/courseController'
import * as eventController from './controllers/eventController'
import * as ratingController from './controllers/ratingController'
import * as reviewController from './controllers/reviewController'
import * as schoolController from './controllers/schoolController'

import * as config from '../config'

mongoose.connect(config.mongoUri)
.then(() => console.log("Connected"))
.catch(err => console.log(err.message))

const app = express();
app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(cors());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get("/user", userController.allUsers);
app.get("/user/:id", userController.getUser);
app.put("/user", userController.addUser);
app.delete("/user/:id", userController.deleteUser);
app.post("/user/:id", userController.updateUser);

app.get("/mod", modController.searchMods);
app.put("/mod", modController.addMod)

app.get("/course", courseController.allCourses);
app.get("/course/:id", courseController.getCourse);
app.put("/course", courseController.addCourse);
app.delete("/course/:id", courseController.deleteCourse);
app.post("/course/:id", courseController.updateCourse);

app.put("/event", eventController.addEvent);

app.get("/rating/:id", ratingController.getRating);
app.put("/rating", ratingController.addRating);
app.delete("/rating/:id", ratingController.deleteRating);
app.post("/rating/:id", ratingController.updateRating);

app.get("/review", reviewController.allReviews);
app.get("/review/:id", reviewController.getReview);
app.put("/review", reviewController.addReview);
app.delete("/review/:id", reviewController.deleteReview);
app.post("/review/:id", reviewController.updateReview);

app.get("/school", schoolController.allSchools);
app.get("/school/:id", schoolController.getSchool);
app.put("/school", schoolController.addSchool);
app.delete("/school/:id", schoolController.deleteSchool);
app.post("/school/:id", schoolController.updateSchool);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});