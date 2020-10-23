import type { AppProps } from "next/app";
import { wrapper } from "../redux/store";

import Head from "next/head";
import Modal from "react-modal";
import NavBar from "../components/Navbar";

const ReduxApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  Modal.setAppElement("#body");

  return (
    <>
      <Head>
        <title>RottenMods</title>
      </Head>
      <div id="body" style={styles.layout}>
        <div style={styles.container}>
          <NavBar />
          <Component {...pageProps} />
        </div>
      </div>
    </>

  );
};

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column" as "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    padding: "0px 80px 80px 80px",
    width: "100vw",
    maxWidth: 1280,
    overflowX: "hidden" as "hidden"
  }
}

export default wrapper.withRedux(ReduxApp);