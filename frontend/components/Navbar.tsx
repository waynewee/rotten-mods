import { NextPage } from "next";
import { Dropdown, Menu, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import LoginButton from "../components/LoginButton";
import "../styles/antd.less";

const { Search } = Input;

const Navbar: NextPage = () => {
  const menu = (
    <Menu>
      <Menu.Item>NUS</Menu.Item>
      <Menu.Item>NTU</Menu.Item>
      <Menu.Item>SMU</Menu.Item>
    </Menu>
  );

  const submitSearch = (value) => {
    // Submit search value to search API
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 3,
        flexDirection: "row",
        height: "70px",
        padding: "30px 0px",
        justifyContent: "space-between",
        alignItems: "baseline",
        position: "sticky",
      }}
    >
      <img src="/RottenMods.png" alt="RottenMods Logo" height="30" />
      <Search
        placeholder="Search for modules"
        onSearch={(value) => submitSearch(value)}
        style={{ width: 200 }}
      />
      <div
        style={{
          display: "flex",
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
