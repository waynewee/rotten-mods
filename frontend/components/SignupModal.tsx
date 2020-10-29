import { useState, useEffect } from 'react';

import { Modal, Button, Form, Input, Divider, Select, DatePicker } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, LaptopOutlined, CalendarOutlined, PlusOutlined } from '@ant-design/icons';
import { codeBlue } from "../styles/colors";

import axios from 'axios';
import authService from '../services/authentication';



interface SignupModalProps {
  toggles: {
    toggleSignupModal: () => void;
    switchModals: () => void;
  }
}

const SignupModal: React.FC<SignupModalProps> = (toggles) => {

  const [inputUniversityValues, setUniversityInputValues] = useState([{"schoolId": "", "schoolName": "",}]);
  const [inputCourses, setInputCourses] = useState([{"courseId": "", "courseName": ""}]);
  const [newSchoolName, setSchoolName] = useState("");
  const [newCourseName, setCourseName] = useState("");

  useEffect(() => {
    populateSchools();
    populateCourses();
  }, []);

  const populateSchools = () => {
    axios({
      method: 'get',
      url: '/school',
      baseURL: 'http://localhost:8080/api',
    }).then(function (response) {
      const schoolsInDatabase = response.data.map(obj => {
        const universityValue = {"schoolId": "", "schoolName": ""};
        universityValue.schoolId = obj._id;
        universityValue.schoolName = obj.name;
        return universityValue;
      });
      setUniversityInputValues(schoolsInDatabase);
      console.log('Now uni has these values');
      console.log(inputUniversityValues);
    }).then(function (error) {
      console.log(error);
    })
  }

  const populateCourses = () => {
    axios({
      method: 'get',
      url: '/course',
      baseURL: 'http://localhost:8080/api',
    }).then(function (response) {
      const coursesInDatabase = response.data.map(obj => {
        const course = {"courseId": "", "courseName": ""};
        course.courseId = obj._id;
        course.courseName = obj.name;
        return course;
      });
      setInputCourses(coursesInDatabase);
    }).then(function (error) {
      console.log(error);
    })
  }

  const onFormFinish = signUpValues => {
    console.log(signUpValues);
    authService.signUp(signUpValues);
    toggles.toggles.switchModals();
  }

  const onUniversityChange = event => {
    console.log("changing");
    setSchoolName(event.target.value);
  };

  const onCourseChange = event => {
    setCourseName(event.target.value);
  };

  const addUniversityItem = () => {
    setSchoolName("");
    if (newSchoolName.trim() !== "" && !inputUniversityValues.some(e => e.schoolName === newSchoolName)) {
      console.log('adduniItem');
      setUniversityInputValues([...inputUniversityValues, {"schoolId" : "userCreated", "schoolName" : newSchoolName}]);
    }
  };

  const addCourseItem = () => {
    console.log('adduniItem');
    setCourseName("");
    if (newCourseName.trim() !== "" && !inputCourses.some(e => e.courseName === newCourseName)) {
      setInputCourses([...inputCourses,  {"courseId": "userCreated", "courseName": newCourseName}]);
    }
  };

  function renderAddition(addition) {
    if (addition == "university") {
      return (
        <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
          <Input style={{ flex: 'auto' }} value={newSchoolName} onChange={onUniversityChange} />
          <a
            style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
            onClick={addUniversityItem}>
            ADD
            </a>
        </div>
      );
    } else {
      return (
        <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
          <Input style={{ flex: 'auto' }} value={newCourseName} onChange={onCourseChange} />
          <a
            style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
            onClick={addCourseItem}>
            ADD
            </a>
        </div>
      );
    }
  }


  return (
    <>

      <Modal
        visible={true}
        title={
          <div style={{ textAlign: "center" }}> SIGNUP </div>
        }
        centered
        onCancel={toggles.toggles.toggleSignupModal}
        footer={null}>
        <Form
          name="normal_signup"
          className="signup-form"
          initialValues={{}}
          onFinish={onFormFinish}>
          <Form.Item
            name="fullname"
            rules={[{ required: true, message: 'Please enter your full name!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="emailaddress"
            rules={[{ required: true, message: 'Please enter an email address!' }]}
          >
            <Input
              prefix={<MailOutlined />} placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="userpassword"
            rules={[{ required: true, message: 'Please enter a password!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Form.Item
              name="yearofstudy"
              rules={[{ required: true, message: 'Please enter your Year of Study!' }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
            >
              <Input type="number" prefix={<CalendarOutlined />} placeholder="Year Of Study" />
            </Form.Item>
          </Form.Item>


          <Form.Item
            name="university"
            rules={[{ required: true, message: 'Please enter your University!' }]}
          >
            <Select
              showSearch
              style={{ width: "100%" }}
              placeholder="University"
              dropdownRender={menu => (
                <>
                  {menu}
                  <Divider style={{ margin: '4px 0' }} />
                  {renderAddition("university")}
                </>
              )}
            >
              {inputUniversityValues.map(item => (
                <Select.Option key={item.schoolName} value={item.schoolId}>{item.schoolName}</Select.Option>
              ))}
            </Select>

          </Form.Item>

          <Form.Item
            name="course"
            rules={[{ required: true, message: 'Please enter the name of the course you are enrolled in!' }]}
          >
            <Select
              style={{ width: "100%" }}
              placeholder="Course Of Study"
              value="Default"
              dropdownRender={menu => (
                <>
                  {menu}
                  <Divider style={{ margin: '4px 0' }} />
                  {renderAddition("course")}
                </>
              )}
            >
              {inputCourses.map(item => (
                <Select.Option key={item.courseName} value={item.courseId}>{item.courseName}</Select.Option>
              ))}
            </Select>

          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={styles.loginFormButton}>SIGN UP</Button>
          </Form.Item>


        </Form>
        <Divider />
        <div style={{ textAlign: "center" }}>
          Already have an account? Log in <a onClick={() => toggles.toggles.switchModals()}> here</a>
        </div>

      </Modal>
    </>
  );


};

const styles = {
  loginFormButton: {
    width: "100%",
    backgroundColor: codeBlue,
  }
}


export default SignupModal;