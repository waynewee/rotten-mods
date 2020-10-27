import { Button } from "antd";
import "../styles/antd.less";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { codeBlue } from "../styles/colors";
import { User } from "../types";


interface Props {
  isAuthenticated: boolean;
}


const ProfileButton: React.FC<Props> = ({ isAuthenticated }) => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);
  const isLoggedIn: boolean = useSelector(state => state.auth.isLoggedIn);
  const user: User = useSelector(state => state.auth.user);

  const router = useRouter();


  useEffect(()=> {
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
  // return isAuthenticated ? <div>Logout</div> : <button>Login</button>;
  return (
    <>
      {
        isLoggedIn 
        ? <div style= {styles.container} onClick={navigateToProfilePage}> 
            <Button type="text" icon={<UserOutlined style={{ fontSize: 25, color: "#B9B9B9" }} />} />  
            <p style={styles.userName}>{user.fullName}</p>
          </div>
      
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
    alignItems: "center"
  },
  userName : {
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
