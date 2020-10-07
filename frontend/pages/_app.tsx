import type { AppProps } from "next/app";
import { wrapper } from "../redux/store";
import NavBar from "../components/Navbar";

const ReduxApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div style={{ padding: "0px 80px" }}>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
};

export default wrapper.withRedux(ReduxApp);
