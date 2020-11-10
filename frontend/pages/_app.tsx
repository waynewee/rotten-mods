import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppProps } from "next/app";
import { wrapper } from "../redux/store";
import authService from "../utils/authentication";
import {
  updatePersonalBookmarks,
  updatePersonalReviews,
  updatedPersonalPlannedModules,
} from "../utils/helpers";
import schoolApi from "../api/school";
import { FETCH_SCHOOLS } from "../redux/constants";

import Head from "next/head";
import Modal from "react-modal";
import NavBar from "../components/Navbar";

const ReduxApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  Modal.setAppElement("#body");

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?._id);

  useEffect(() => {
    attemptLogin();
    fetchAllSchools();
  }, []);

  // Fetch all personal modules if user is logged in
  useEffect(() => {
    if (userId) {
      updatePersonalBookmarks(userId);
      updatePersonalReviews(userId);
      updatedPersonalPlannedModules(userId);
    }
  }, [userId]);

  /**
   *  Attempt login if login details are stored
   */
  const attemptLogin = () => {
    const email = window.localStorage.getItem("ROTTENMODS_EMAIL");
    const password = window.localStorage.getItem("ROTTENMODS_PASSWORD");

    if (email && password) {
      authService.logIn({
        emailaddress: email,
        password,
      });
    }
  };

  /**
   * Fetch all available schools
   */
  const fetchAllSchools = async () => {
    const schools = await schoolApi.searchSchools("");
    dispatch({
      type: FETCH_SCHOOLS,
      payload: schools,
    });
  };

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
    overflowX: "hidden" as "hidden",
  },
};

export default wrapper.withRedux(ReduxApp);
