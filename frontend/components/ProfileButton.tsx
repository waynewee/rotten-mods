import { Button, Menu, Dropdown } from "antd";
import { UserOutlined} from '@ant-design/icons';

import "../styles/antd.less";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { useEffect, useState } from 'react';
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { reviewBlue } from "../styles/colors";
import { User } from "../types";
import CustomButton from "./Button";
import authService from '../services/authentication';
import { useDispatch } from "react-redux";



const ProfileButton: React.FC = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);
  const isLoggedIn: boolean = useSelector(state => state.auth.isLoggedIn);
  const user: User = useSelector(state => state.auth.user);

  const router = useRouter();
  const dispatch = useDispatch();


  useEffect(() => {
    isLoggedIn ? setLoginModalVisible(false) : null;
    // console.log("the user is ");
    // console.log(user);
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

  const navigateToProfilePage = () => {
    router.push({
      pathname: "/profile",
    })
  }

  function handleMenuClick(e) {
    console.log('click', e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Button type="text" onClick={navigateToProfilePage}>
          Profile
        </Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button type="text" onClick={() =>authService.logOut(dispatch)}>
          Log Out
        </Button>
      </Menu.Item>
    </Menu>
  );


  
  // return isAuthenticated ? <div>Logout</div> : <button>Login</button>;
  return (
    <>
      {
        isLoggedIn
          ? <>
              <Dropdown overlay={menu} placement="bottomCenter">
                <Button style={styles.container}>
                  {user.fullName}
                </Button>
              </Dropdown>
            </>
        
          : <Button type="primary" onClick={toggleLoginModal}>
            Log In
          </Button>
      }

      {loginModalVisible && !isLoggedIn ? <LoginModal toggles={{ toggleLoginModal, switchModals }} /> : null}
      {signupModalVisible ? <SignupModal toggles={{ toggleSignupModal, switchModals }} /> : null}
    </>

  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    margin: "0px 10px",
    padding: 20,
    backgroundColor: reviewBlue,
    color: "#fff",
    borderRadius: 8
  },
  userName: {
    alignItems: "flex-end",
    paddingLeft: "10px",
    margin: 0,
    fontSize: 15
  }
}

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
