import { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Login from "./login";
import "../styles/styles.module.css";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>RottenMods</title>
      </Head>
      <div style={{ padding: "0px 80px" }}>
        <Navbar />
        {/* <Login /> */}
      </div>
    </>
  );
};

export default Index;
