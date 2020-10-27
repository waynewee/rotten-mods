import { Button } from "antd";
import "../styles/antd.less";

import { useDispatch, useSelector } from "react-redux";
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { codeBlue } from "../styles/colors";

interface Props {
  isAuthenticated: boolean;
}


const ProfileButton: React.FC<Props> = ({ isAuthenticated }) => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);
  const isLoggedIn: boolean = useSelector(state => state.auth.isLoggedIn);
  const userId: string = useSelector(state => state.auth.userId);

  useEffect(()=> {
    isLoggedIn ? setLoginModalVisible(false) : null;
    console.log(userId);
  })
  
  const toggleLoginModal = () => {
    setLoginModalVisible(!loginModalVisible);
  }
  
  const toggleSignupModal = () => {
    setSignupModalVisible(!signupModalVisible);
  }
  
  const switchModals = () => {
    setSignupModalVisible(!signupModalVisible);
    setLoginModalVisible(!loginModalVisible);
  }
  // return isAuthenticated ? <div>Logout</div> : <button>Login</button>;
  return (
    <>
      {
        isLoggedIn 
        ? <Button type="text" icon={<UserOutlined style={{ fontSize: 25, color: "#B9B9B9" }} />} /> 
        : <Button type="primary" onClick={toggleLoginModal}>
            Log In
          </Button>
      }

      {loginModalVisible && !isLoggedIn ? <LoginModal toggles={{ toggleLoginModal, switchModals }} /> : null}
      {signupModalVisible ? <SignupModal toggles={{ toggleSignupModal, switchModals }} /> : null}
    </>
    
  );
};

export default ProfileButton;

{
  /* <UserOutlined
          style={{ fontSize: 25, color: "#B9B9B9", marginLeft: 15 }}
        /> */
              // style={{
      //   position: "relative",
      //   top: -1.5,
      //   fontSize: 19,
      //   borderWidth: 0,
      //   marginLeft: 10,
      //   backgroundColor: "#fff",
      // }}
}
