import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { User } from "../types";
// import authService from "../services/authentication";
import authUtils from "../utils/authentication";

import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { reviewBlue } from "../styles/colors";
import CustomButton from "./Button";
import { Button, Menu, Dropdown } from "antd";
import "../styles/antd.less";

const ProfileButton: React.FC = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);
  const isLoggedIn: boolean = useSelector((state) => state.auth.isLoggedIn);
  const user: User = useSelector((state) => state.auth.user);

  const router = useRouter();

  useEffect(() => {
    isLoggedIn ? setLoginModalVisible(false) : null;
  });

  const toggleLoginModal = () => {
    setLoginModalVisible(!loginModalVisible);
  };

  const toggleSignupModal = () => {
    setSignupModalVisible(!signupModalVisible);
  };

  const switchModals = () => {
    setSignupModalVisible(!signupModalVisible);
    setLoginModalVisible(!loginModalVisible);
  };

  const navigateToProfilePage = () => {
    router.push({
      pathname: "/profile",
    });
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Button type="text" onClick={navigateToProfilePage}>
          Profile
        </Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button type="text" onClick={authUtils.logOut}>
          Log Out
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {isLoggedIn ? (
        <>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button style={styles.container}>{user.fullName}</Button>
          </Dropdown>
        </>
      ) : (
        <CustomButton style={styles.loginButton} onClick={toggleLoginModal}>
          Log In
        </CustomButton>
      )}

      {loginModalVisible && !isLoggedIn ? (
        <LoginModal toggles={{ toggleLoginModal, switchModals }} />
      ) : null}
      {signupModalVisible ? (
        <SignupModal toggles={{ toggleSignupModal, switchModals }} />
      ) : null}
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
    borderRadius: 8,
  },
  userName: {
    alignItems: "flex-end",
    paddingLeft: "10px",
    margin: 0,
    fontSize: 15,
  },
  loginButton: {
    display: "flex",
    alignItems: "center",
    margin: "0px 10px",
    padding: 10,
    backgroundColor: reviewBlue,
    color: "#fff",
    borderRadius: 8,
  },
};

export default ProfileButton;
