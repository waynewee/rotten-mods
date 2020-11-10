import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { User } from "../types";
import authUtils from "../utils/authentication";

import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { reviewBlue, codeBlue } from "../styles/colors";
import CustomButton from "./Button";
import AddCourseModal from "./AddCourseModal";
import AddSchoolModal from "./AddSchoolModal";
import AddModuleModal from "./AddModuleModal";

import { Button, Menu, Dropdown } from "antd";
import "../styles/antd.less";

const ProfileButton: React.FC = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);
  const [addCourseModalVisible, setAddCourseModalVisible] = useState(false);
  const [addSchoolModalVisible, setAddSchoolModalVisible] = useState(false);
  const [addModuleModalVisible, setModuleModalVisible] = useState(false);


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

  const logoutUser = () => {
    authUtils.logOut();
    router.push({
      pathname: "/home",
    });
  }

  const userMenu = (
    <Menu>
      <Menu.Item key="1">
        <Button type="text" onClick={navigateToProfilePage}>
          Profile
        </Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button type="text" onClick={logoutUser}>
          Log Out
        </Button>
      </Menu.Item>
    </Menu>
  );

  const addMenu = (
    <Menu>
      <Menu.Item key="1">
      <Button type="text" onClick = {() => {setAddCourseModalVisible(true)}}> 
            Add Course
          </Button>
      </Menu.Item>
      <Menu.Item key="2">
      <Button type="text" onClick = {() => {setAddSchoolModalVisible(true)}}> 
            Add School
          </Button>
      </Menu.Item>
      <Menu.Item key="3">
      <Button type="text" onClick = {() => {setModuleModalVisible(true)}}> 
            Add Module
          </Button>
      </Menu.Item>
    </Menu>
  );
   

  return (
    <>
      {isLoggedIn ? (
        <>
          <Dropdown overlay={addMenu} placement="bottomCenter">
            <Button style={styles.addModuleButton}>Add</Button>
          </Dropdown>
          <Dropdown overlay={userMenu} placement="bottomLeft">
            <Button style={styles.userButton}>{user.fullName}</Button>
          </Dropdown>
          

{/* 
          <Button onClick = {() => {setAddCourseModalVisible(true)}}> 
            Add Course
          </Button>
          <Button onClick = {() => {setAddSchoolModalVisible(true)}}> 
            Add School
          </Button> */}
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
        <AddCourseModal isModalVisible={addCourseModalVisible} setModalVisibility={setAddCourseModalVisible} />
        <AddSchoolModal isModalVisible={addSchoolModalVisible} setModalVisibility={setAddSchoolModalVisible} />
        <AddModuleModal isModalVisible={addModuleModalVisible} setModalVisibility={setModuleModalVisible} />
    </>
  );
};

const styles = {
  userButton: {
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
  addModuleButton: {
    display: "flex",
    alignItems: "center",
    margin: "0px 10px",
    padding: 20,
    backgroundColor: codeBlue,
    color: "#fff",
    borderRadius: 8,
  },
};

export default ProfileButton;
