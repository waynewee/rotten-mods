import axios from 'axios';
import { LOG_USER_IN } from "../redux/constants";
import { User } from "../types";
import authApi from "../api/auth";

function signUp(values) {
    console.log("Sign Up Service received");
    console.log(values);
    let createUserConfig = {
        method: 'post',
        url: 'http://localhost:8080/api/user',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
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
        data: {
            "name": values.fullname,
        }
    };

    let createCourseConfig = {
        method: 'post',
        url: 'http://localhost:8080/api/course',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
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


async function logIn(values, dispatch) {
    const { emailaddress, password } = values;
    const data = await authApi.logIn(emailaddress, password);
    const { name, currentYear, courseId, _id } = data;
    const user: User = {
        fullName: name,
        yearOfStudy: currentYear,
        studyCourse: courseId,
        _id
    }

    window.localStorage.setItem("ROTTENMODS_EMAIL", emailaddress);
    window.localStorage.setItem("ROTTENMODS_PASSWORD", password);

    dispatch({
        type: LOG_USER_IN,
        payload: user
    });
}

export default {
    signUp,
    logIn
}