import { useState } from 'react';

import { Modal, Button, Form, Input, Divider, Select, ConfigProvider } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, LaptopOutlined, CalendarOutlined, PlusOutlined } from '@ant-design/icons';
import { codeBlue } from "../styles/colors";

import axios from 'axios';




interface SignupModalProps {
  toggles: {
    toggleSignupModal: () => void;
    switchModals: () => void;
  }
}

const SignupModal: React.FC<SignupModalProps> = (toggles) => {

  const [inputUniversityValues, setUniversityInputValues] = useState(["NUS", "SMU"]);
  const [inputCourseValues, setCourseInputValues] = useState(["Computer Science"]);
  const [universityName, setUniversityName] = useState("");
  const [courseName, setCourseName] = useState("");


  const onFormFinish = signUpValues => {
    console.log(signUpValues);


    // axios({
    //     method: 'put',
    //     url: '/user',
    //     baseURL: 'http://localhost:8080/api',
    //     params : {
    //         email : signUpValues.emailaddress,
    //         password: signUpValues.userpassword,
    //         name: signUpValues.fullname,
    //         schoolId: signUpValues.university,
    //         courseId: signUpValues.course,
    //         yearOfStudy: signUpValues.yearofstudy
    //     }
    // }).then(function(response) {
    //     console.log(response);
    // }).catch(function(error) {
    //     console.log(error);
    // })

  }

  const onUniversityChange = event => {
    console.log("changing");
    setUniversityName(event.target.value);
  };

  const onCourseChange = event => {
    setCourseName(event.target.value);
  };

  const addUniversityItem = () => {
    console.log('adduniItem');
    setUniversityName("");
    if (universityName.trim() !== "" && !inputUniversityValues.includes(universityName)) {
      setUniversityInputValues([...inputUniversityValues, universityName.trim()]);
    }
  };

  const addCourseItem = () => {
    console.log('adduniItem');
    setCourseName("");
    if (courseName.trim() !== "" && !inputCourseValues.includes(courseName)) {
      setCourseInputValues([...inputCourseValues, courseName.trim()]);
    }
  };

  function renderAddition(addition) {
    if (addition == "university") {
      return (
        <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
          <Input style={{ flex: 'auto' }} value={universityName} onChange={onUniversityChange} />
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
          <Input style={{ flex: 'auto' }} value={courseName} onChange={onCourseChange} />
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
              <Input prefix={<CalendarOutlined />} placeholder="Year Of Study" />
            </Form.Item>
            <Form.Item
              name="university"
              rules={[{ required: true, message: 'Please enter your University!' }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
            >
              <Select
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
                  <Select.Option key={item} value={item}>{item}</Select.Option>
                ))}
              </Select>

            </Form.Item>
          </Form.Item>
          <Form.Item
            name="course"
            rules={[{ required: true, message: 'Please enter the name of the course you are enrolled in!' }]}
          >
            <Select
              style={{ width: "100%" }}
              placeholder="Course Of Study"
              value = "Default"
              dropdownRender={menu => (
                <>
                  {menu}
                  <Divider style={{ margin: '4px 0' }} />
                  {renderAddition("course")}
                </>
              )}
            >
              {inputCourseValues.map(item => (
                <Select.Option key={item} value={item}>{item}</Select.Option>
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