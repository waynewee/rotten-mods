
import { Modal, Button, Form, Input, Divider } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import authService from '../services/authentication';
import { useDispatch } from "react-redux";

import { message } from 'antd';


interface LoginModalProps {
  toggles :{
    toggleLoginModal : () => void;
    switchModals: () => void;
  }
}

const LoginModal: React.FC<LoginModalProps> = (toggles) => {

  const dispatch = useDispatch();

  const onFormFinish = loginValues => {
      authService.logIn(loginValues, dispatch).then((response) => {
        message.success("Successfully Logged in!")
      }).catch((error) => {
        message.error("The email address or password provided is invalid!");
      })
    
  }

  return (
    <>
      <Modal
        visible={true}
        title={
          <div style={{ textAlign: "center" }}>
            LOGIN
            </div>
        }
        centered
        onCancel={() => toggles.toggles.toggleLoginModal()}
        footer={null}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{}}
          onFinish={onFormFinish}>
          <Form.Item
            name="emailaddress"
            rules={[{ required: true, message: 'Please enter an email address!' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter a password!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={styles.loginFormButton}>LOG IN</Button>
          </Form.Item>
        </Form>
        <Divider />
        <div style={{ textAlign: "center" }}>
          Dont have an account? Sign Up <a onClick={() => toggles.toggles.switchModals()}> here</a>
        </div>

      </Modal>
    </>
  );


};

const styles = {
  loginFormButton: {
    width: "100%",
    backgroundColor: "#2D538C",
  }
}


export default LoginModal;