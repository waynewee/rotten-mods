import axios from 'axios';
import { LOG_USER_IN } from "../redux/constants";

import {store} from "../redux/store.ts";


function signUp(values) {
    console.log("Sign Up Service received");
    console.log(values);
    let createUserConfig = {
        method: 'post',
        url: 'http://localhost:8080/api/user',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : {
            "name": values.fullname,
            "email": values.emailaddress,
            "password": values.userpassword,
            "schoolId": values.university,
            "courseId": values.course,
            "currentYear": values.yearofstudy
        }
    };

    let createSchoolConfig = {
        method: 'post',
        url: 'http://localhost:8080/api/school',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : {
            "name": values.fullname,
        }
    };

    let createCourseConfig = {
        method: 'post',
        url: 'http://localhost:8080/api/course',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : {
            "name": values.fullname,
        }
    };


      // if schoolId is user created, then create a new school in the system

    if (values.course !== "userCreated" && values.school !== "userCreated") {
        axios(createUserConfig)
        .then(function (response) {
            console.log("post is successful");
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

}


function logIn(values, dispatch) {
    console.log("LogIn Service received");
    let logInUserConfig = {
        method: 'post',
        url: 'http://localhost:8080/api/login',
        headers: { 
          'Content-Type': 'application/json',
        },
        data : {
            "email": values.emailaddress,
            "password": values.password,
        }
    };

    axios(logInUserConfig)
    .then(function (response) {
        console.log("login is successful");
        console.log(response);
        dispatch({
            type: LOG_USER_IN,
            userId: "testing"
        });
    })
    .catch(function (error) {
        console.log(error);
    });

    
}

export default {
    signUp,
    logIn
}