import { Modal, Button, Form, Input, Select } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { User } from "../types";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { store } from "../redux/store";
import { logInAction, logOutAction } from './../redux/actions/auth';
import authService from "../utils/authentication";



import { message } from "antd";
import userApi from "../api/user";
import schoolApi from "../api/school";
import courseApi from "../api/course";
import { useRouter } from "next/router";





interface EditProfileModalProps {
  user: User,
  toggleEditProfileModal: () => void
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  user,
  toggleEditProfileModal,
}) => {

  const [inputSchoolValues, setSchoolInputValues] = useState([
    { schoolId: "", schoolName: "" },
  ]);
  const [inputCourseValues, setInputCourseValues] = useState([
    { courseId: "", courseName: "" },
  ]);

  useEffect(() => {
    populateSchools();
    populateCourses();
  }, []);

  const populateSchools = () => {
    schoolApi.getAllSchools()
      .then((response) => {
        const schoolsInDatabase = response.map((obj) => {
          const universityValue = { schoolId: "", schoolName: "" };
          universityValue.schoolId = obj._id;
          universityValue.schoolName = obj.name;
          return universityValue;
        });
        setSchoolInputValues(schoolsInDatabase);
      })
      .catch(error => console.log(error));
  }
  const populateCourses = () => {
    courseApi.getAllCourses()
      .then((response) => {
        const coursesInDatabase = response.map((obj) => {
          const course = { courseId: "", courseName: "" };
          course.courseId = obj._id;
          course.courseName = obj.name;
          return course;
        });
        setInputCourseValues(coursesInDatabase);
      })
      .catch(error => console.log(error));
  }

  const router = useRouter();



  const onFormFinish = (profileValues) => {
    console.log("profile valus are");
    console.log(profileValues);
    const newSchoolId = inputSchoolValues.find(element => element.schoolName == profileValues.newSchoolName).schoolId;
    const newCourseId = inputCourseValues.find(element => element.courseName == profileValues.newCourseName).courseId;
    const newUserDetails = {
      "name" : profileValues.fullname,
      "email": user.email,
      "password": user.password,
      "schoolId": newSchoolId,
      "courseId": newCourseId,
      "currentYear": profileValues.newYearOfStudy,
    }
    // if (originalSchoolName == user.schoolName) {
    //   delete newUserDetails["schoolId"];
    // } 
    // if (originalCourseName == user.schoolName) {
    //   delete newUserDetails["courseId"];
    // }

    userApi.updateUser(newUserDetails, user._id)
      .then((response) => {
        toggleEditProfileModal();
        authService.logIn({"emailaddress": newUserDetails.email, "password": newUserDetails.password})
        router.push({
          pathname: "/profile",
        });
        message.success(`Your profile has been updated successfully`);

      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <Modal
      visible={true}
      title={<div style={{ textAlign: "center" }}> SIGNUP </div>}
      centered
      onCancel={toggleEditProfileModal}
      footer={null}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{}}
        onFinish={onFormFinish}
      >
        <Form.Item
          name="fullname"
          label="Full Name"
          initialValue={user.fullName}
          rules={[
            { required: true, message: "Please enter your full name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="newYearOfStudy"
          label="Year of Study"
          initialValue={user.yearOfStudy}
          rules={[
            {
              validator: (_, value) => {
                if (value < 1 || value > 8) {
                  return Promise.reject(
                    "Your Year of Study should only be between 1 to 8"
                  );
                } else {
                  return Promise.resolve();
                }
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="newCourseName"
          label="Your Course"
          initialValue={user.courseName}
        >
          <Select>
            {inputCourseValues.map((item) => (
              <Select.Option key={item.courseId} value={item.courseName}>
                {item.courseName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="newSchoolName"
          label="Your University"
          initialValue={user.schoolName}
        >
          <Select>
            {inputSchoolValues.map((item) => (
              <Select.Option key={item.schoolId} value={item.schoolName}>
                {item.schoolName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={styles.loginFormButton}
          >
            SAVE PROFILE
           </Button>
        </Form.Item>
      </Form>

    </Modal>
  );
};

const styles = {
  loginFormButton: {
    width: "100%",
    backgroundColor: "#2D538C",
  },
};

export default EditProfileModal;
