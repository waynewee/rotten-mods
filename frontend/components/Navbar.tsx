import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { SEARCH_TERM } from "../redux/constants";

import { Dropdown, Menu, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import LoginButton from "../components/LoginButton";
import "../styles/antd.less";

import { Modal, Button, Form, Divider } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

import Login from "../components/LoginButton";



const { Search } = Input;

const Navbar: React.FC = () => {

  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);

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

  const dispatch = useDispatch();
  const router = useRouter();

  const menu = (
    <Menu>
      <Menu.Item>NUS</Menu.Item>
      <Menu.Item>NTU</Menu.Item>
      <Menu.Item>SMU</Menu.Item>
    </Menu>
  );

  const submitSearch = (value) => {
    // Submit search value to search API
    console.log("Search Bar Value:", value);
    dispatch({ type: SEARCH_TERM, payload: value });
    router.push("/search")
  };

  return (
    <div style={styles.container}>
      <Link href="/">
        <div style={styles.logo}>
          <img src="/RottenMods.png" alt="RottenMods Logo" height="30" />
        </div>
      </Link>

      <div style={styles.searchContainer}>
        <Search
          placeholder="Search for modules"
          onSearch={(value) => submitSearch(value)}
          style={styles.searchBar}
        />
      </div>

      <div style={styles.actionsContainer}>
        <Dropdown overlay={menu}>
          <div style={{ marginRight: 20 }}>
            <a style={{ color: "#595959", marginRight: 6, fontSize: 18 }}>
              NUS
            </a>
            <DownOutlined />
          </div>
        </Dropdown>
        <LoginButton isAuthenticated={true} />
      </div>


      <Button type="text" onClick={toggleLoginModal}>
        Log In
      </Button>
      <Button type="primary" onClick={toggleSignupModal}>
        Sign Up
      </Button>

      {loginModalVisible ? <LoginModal toggles={{toggleLoginModal, switchModals}}/> : null}
      {signupModalVisible ? <SignupModal toggles={{toggleSignupModal, switchModals}}/> : null}
    </div>

  );
};


const styles = {
  loginFormButton: {
    width: "100%",
    backgroundColor: "#2D538C",
  },
  container: {
    display: "flex",
    flexDirection: "row" as "row",
    width: "100%",
    height: "70px",
    padding: "30px 0px",
    justifyContent: "space-between",
    alignItems: "baseline",
    position: "sticky" as "sticky",
  },
  logo: {
    flex: 1,
    cursor: "pointer"
  },
  searchContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },
  searchBar: {
    width: 200
  },
  actionsContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end"
  }
}

export default Navbar;
