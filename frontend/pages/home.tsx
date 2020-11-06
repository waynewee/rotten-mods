import { NextPage } from "next";

import HomeModuleList from "../components/HomeModuleList";
import SectionTitle from "../components/SectionTitle";
import ModuleCompareModal from "../components/ModuleCompareModal";
import { useSelector } from "react-redux";
import recommendationApi from "../api/recommendations";
import { Module, Review } from "../types";
import moduleApi from "../api/module";

import { useEffect, useState } from "react";






const Home: NextPage = ({}) => {

  const userId = useSelector((state) => state.auth.user?._id);
  
  const [trendingModules, setTrendingModules] = useState([]); 
  const [popularModules, setPopularModules] = useState([]); 
  const [recommendedModules, setRecommendedModules] = useState([]); 


  useEffect(() => {
    fetchAllRecommendations();
  }, [userId]);


  const fetchAllRecommendations = async () => {
    recommendationApi.getRecommendedModules(userId)
    .then(response => {
      console.log("the response is " + response);
      setRecommendedModules(response.mods);
    })
    .catch(error => {
      console.log("the error is" + error)
    })

    const mostRatedModules = await recommendationApi.getMostRatedModules();
    setPopularModules(mostRatedModules.mods);
    const mostViewedModules = await recommendationApi.getMostViewedModules();
    setTrendingModules(mostViewedModules.mods);


  }
  
  const renderRecommendedModules = () => {
    if (userId) {
      if (recommendedModules.length > 0) {
        console.log(recommendedModules);
        return (
          <>
            <SectionTitle title="Recommended For You" />  
            <HomeModuleList modules ={recommendedModules} /> 
          </>)

      } else {
        return (<>
          <SectionTitle title="Recommended For You" />  
          <p style={{textAlign : "center", paddingTop: "20px"}}>Sorry we do not have enough information to recommend modules for you!</p> 
          </>
        )
       
      }
    }
  }



  return (
    <>
      <ModuleCompareModal />
      <SectionTitle title="Trending Modules" />
      <HomeModuleList modules ={trendingModules}/>
      <SectionTitle title="Popular Modules" />
      <HomeModuleList modules ={popularModules}/>
      {renderRecommendedModules()}
    </>
  );
};

export default Home;
