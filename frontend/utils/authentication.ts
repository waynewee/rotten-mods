import axios from "axios";
import { LOG_USER_IN, LOG_USER_OUT } from "../redux/constants";
import { User } from "../types";
import authApi from "../api/auth";
import courseApi from "../api/course";
import { store } from "../redux/store";

import { message } from "antd";

async function signUp(values) {
  const {
    fullname,
    emailaddress,
    userpassword,
    university,
    course,
    yearofstudy,
  } = values;

  // let createUserConfig = {
  //     method: 'post',
  //     url: 'http://localhost:8080/api/user',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     data: {
  //         "name": values.fullname,
  //         "email": values.emailaddress,
  //         "password": values.userpassword,
  //         "schoolId": values.university,
  //         "courseId": values.course,
  //         "currentYear": values.yearofstudy
  //     }
  // };

  // let createSchoolConfig = {
  //     method: 'post',
  //     url: 'http://localhost:8080/api/school',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     data: {
  //         "name": values.fullname,
  //     }
  // };

  // let createCourseConfig = {
  //     method: 'post',
  //     url: 'http://localhost:8080/api/course',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     data: {
  //         "name": values.fullname,
  //     }
  // };

  // if schoolId is user created, then create a new school in the system

  if (course !== "userCreated" && university !== "userCreated") {
    const data = await authApi
      .signUp(
        fullname,
        emailaddress,
        userpassword,
        university,
        course,
        yearofstudy
      )
      .catch((error) => {
        throw error;
      });
    if (data) {
      console.log("sign up success");
    }
  }
}

async function logIn(values) {
  const { emailaddress, password } = values;
  const data = await authApi.logIn(emailaddress, password).catch((error) => {
    throw error;
  });
  if (data) {
    const { name, currentYear, courseId, _id } = data;
    const courseData = await courseApi.getCourse(courseId);
    const user: User = {
      fullName: name,
      yearOfStudy: currentYear,
      studyCourse: courseData.name,
      _id,
    };

    window.localStorage.setItem("ROTTENMODS_EMAIL", emailaddress);
    window.localStorage.setItem("ROTTENMODS_PASSWORD", password);

    store.dispatch({
      type: LOG_USER_IN,
      payload: user,
    });
  }
}

async function logOut() {
  const response = await authApi.logOut().catch((error) => {
    throw error;
  });

    window.localStorage.removeItem("ROTTENMODS_EMAIL");
    window.localStorage.removeItem("ROTTENMODS_PASSWORD");

    message.success("Successfully Logged Out!");

    store.dispatch({
      type: LOG_USER_OUT,
    });

  

};

export default {
  signUp,
  logIn,
  logOut,
};
