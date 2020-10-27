import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppProps } from "next/app";
import { wrapper } from "../redux/store";
import authService from "../services/authentication";
import {
  updatePersonalBookmarks,
  updatePersonalReviews,
  updatedPersonalPlannedModules
} from "../utils/helpers";

import Head from "next/head";
import Modal from "react-modal";
import NavBar from "../components/Navbar";

const ReduxApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  Modal.setAppElement("#body");

  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user?._id);

  // Attempt login if login details are stored
  useEffect(() => {
    const email = window.localStorage.getItem("ROTTENMODS_EMAIL");
    const password = window.localStorage.getItem("ROTTENMODS_PASSWORD");

    if (email && password) {
      authService.logIn({
        emailaddress: email,
        password
      }, dispatch);
    }
  }, [])

  // Fetch all personal modules if user is logged in
  useEffect(() => {
    if (userId) {
      updatePersonalBookmarks(userId);
      // updatePersonalReviews(userId); TODO:
      updatedPersonalPlannedModules(userId);
    }
  }, [userId])

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