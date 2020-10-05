import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "../styles/antd.less";

interface Props {
  isAuthenticated: boolean;
}

const Login: React.FC<Props> = ({ isAuthenticated }) => {
  // return isAuthenticated ? <div>Logout</div> : <button>Login</button>;
  return (
    <Button
      // style={{
      //   position: "relative",
      //   top: -1.5,
      //   fontSize: 19,
      //   borderWidth: 0,
      //   marginLeft: 10,
      //   backgroundColor: "#fff",
      // }}
      type="text"
      icon={<UserOutlined style={{ fontSize: 25, color: "#B9B9B9" }} />}
    ></Button>
  );
};

export default Login;

{
  /* <UserOutlined
          style={{ fontSize: 25, color: "#B9B9B9", marginLeft: 15 }}
        /> */
}
