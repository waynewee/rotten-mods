import { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Login from "./login";
import Search from "./search";
import "../styles/styles.module.css";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>RottenMods</title>
      </Head>
      <Search />
    </>
  );
};

export default Index;
