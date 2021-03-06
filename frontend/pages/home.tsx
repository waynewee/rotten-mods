import { NextPage } from "next";

import HomeModuleList from "../components/HomeModuleList";
import SectionTitle from "../components/SectionTitle";
import ModuleCompareModal from "../components/ModuleCompareModal";
import { useSelector } from "react-redux";
import recommendationApi from "../api/recommendations";
import moduleApi from "../api/module";

import { useEffect, useState } from "react";

const Home: NextPage = ({ }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userId = useSelector((state) => state.auth.user?._id);

  const [trendingModules, setTrendingModules] = useState([]);
  const [popularModules, setPopularModules] = useState([]);
  const [recommendedModules, setRecommendedModules] = useState([]);
  const [topModules, setTopModules] = useState([]);

  useEffect(() => {
    fetchAllRecommendations();
  }, [userId]);

  const fetchAllRecommendations = async () => {
    const backupModules = await moduleApi.searchModule("cs1");

    const concatBackup = (modulesToRecommend, setModulesMethod) => {
      if (modulesToRecommend.length < 3) {
        const sufficientModules = modulesToRecommend.concat(backupModules);
        setModulesMethod(sufficientModules);
      } else {
        setModulesMethod(modulesToRecommend);
      }
    };


    recommendationApi.getMostRatedModules()
      .then((response) => {
        concatBackup(response.mods, setPopularModules);
      })
      .catch((error) => {
        // no modules
        concatBackup([], setPopularModules);
      })
    recommendationApi.getMostViewedModules()
      .then((response) => {
        concatBackup(response.mods, setTrendingModules);
      })
      .catch((error) => {
        // no modules
        concatBackup([], setTrendingModules);
      })

    recommendationApi.getTopRatedModules()
      .then((response) => {
        concatBackup(response.mods, setTopModules);
      })
      .catch((error) => {
        // no modules
        concatBackup([], setTopModules);
      })


    try {
      if (userId) {
        const recommendedModules = await recommendationApi.getRecommendedModules(
          userId
        );
        concatBackup(recommendedModules.mods, setRecommendedModules);
      }
    } catch (err) {
      console.log("User has insufficient activities to get recommended");
    }
  };

  const renderRecommendedModules = () => {
    if (userId) {
      if (recommendedModules.length > 0) {
        console.log("Recommended:", recommendedModules);
        return (
          <>
            <SectionTitle title="Recommended For You" />
            <HomeModuleList modules={recommendedModules} />
          </>
        );
      } else {
        return (
          <>
            <SectionTitle title="Recommended For You" />
            <p style={{ textAlign: "center", paddingTop: "20px" }}>
              Sorry we do not have enough information about you yet to recommend
              modules for you!
            </p>
          </>
        );
      }
    }
  };

  return (
    <>
      <ModuleCompareModal />
      <SectionTitle title="Trending Modules" />
      <HomeModuleList modules={trendingModules} />
      <SectionTitle title="Popular Modules" />
      <HomeModuleList modules={popularModules} />
      <SectionTitle title="Top Modules" />
      <HomeModuleList modules={topModules} />
      {isLoggedIn && renderRecommendedModules()}
    </>
  );
};

export default Home;
