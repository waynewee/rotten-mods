import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { SEARCH_TERM } from "../redux/constants";

import { Dropdown, Menu, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import LoginButton from "../components/LoginButton";
import "../styles/antd.less";

const { Search } = Input;

const Navbar: NextPage = () => {
  const dispatch = useDispatch();

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
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "70px",
        padding: "30px 0px",
        justifyContent: "space-between",
        alignItems: "baseline",
        position: "sticky",
      }}
    >
      <div style={{ flex: 1 }}>
        <img src="/RottenMods.png" alt="RottenMods Logo" height="30" />
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Search
          placeholder="Search for modules"
          onSearch={(value) => submitSearch(value)}
          style={{ width: 200 }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
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
    </div>
  );
};

export default Navbar;
