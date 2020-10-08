import type { AppProps } from "next/app";
import { wrapper } from "../redux/store";
import NavBar from "../components/Navbar";

const ReduxApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div style={styles.layout}>
      <div style={styles.container}>
        <NavBar />
        <Component {...pageProps} />
      </div>

    </div>
  );
};

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column" as "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    padding: "0px 80px 80px 80px",
    maxWidth: 1280,
  }
}

export default wrapper.withRedux(ReduxApp);
