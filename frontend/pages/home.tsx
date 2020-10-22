import { NextPage } from "next";

import HomeModuleList from "../components/HomeModuleList";
import SectionTitle from "../components/SectionTitle";
import ModuleCompareModal from "../components/ModuleCompareModal";

const Home: NextPage = () => {
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