import { useEffect } from "react";
import { NextPage } from "next";

import HomeModuleList from "../components/HomeModuleList";
import SectionTitle from "../components/SectionTitle";
import ModuleCompareModal from "../components/ModuleCompareModal";
import axios from "axios";

const Home: NextPage = ({ }) => {

  // Mock Login API call
  useEffect(() => {
    axios.post("http://localhost:8080/api/login", {
      email: "xnZZLvmrjsqrNFJd@email.edu",
      password: "12345"
    }, {
      withCredentials: true
    }).then(res => {
      console.log("res:", res)
    })
      .catch(err => console.log("err:", err))
  }, []);

  return (
    <>
      <ModuleCompareModal />
      <SectionTitle title="Trending Modules" />
      <HomeModuleList />
      <SectionTitle title="Popular Modules" />
      <HomeModuleList />
      <SectionTitle title="Recommended For You" />
      <HomeModuleList />
    </>
  );
};

export default Home;