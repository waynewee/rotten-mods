import SectionTitle from "../components/SectionTitle";
import ProfileCard from "../components/ProfileCard";
import BookmarkedModuleCard from "../components/BookmarkedModuleCard";
import StudyPlanCard from "../components/StudyPlanCard";
import { User } from "../types";
import ReviewedModuleCard from "../components/ReviewedModuleCard";
import SearchModuleList from "../components/SearchModuleList";
import { Module } from "../types";
import recommendationApi from "../api/recommendations";


import { useEffect, useState } from "react";


import { useSelector } from "react-redux";


const Profile: React.FC = () => {
  const [recommendedModules, setRecommendedModules] = useState([]);
  const userId = useSelector((state) => state.auth.user?._id);
  const user = useSelector((state)=>state.auth.user);
  useEffect(() => {
    fetchRecommendedModules();
  });

  const fetchRecommendedModules = async () => {
    try {
      if (userId) {
        const recommendedModules = await recommendationApi.getRecommendedModules(userId);
        setRecommendedModules(recommendedModules);
      }
    } catch (err) {
      console.log("User has insufficient activities to get recommended");
    }
  }

  const renderRecommendedModules = () => {
    if (userId) {
      if (recommendedModules.length > 0) {
        return (
          <>
            <SectionTitle title="Modules you might be interested in" />
            <SearchModuleList modules={recommendedModules} />
          </>
        );
      } else {
        return (
          <>
            <SectionTitle title="Modules you might be interested in" />
            <p style={{ textAlign: "center", paddingTop: "20px" }}>
              Sorry we do not have enough information about you to recommend
              modules for you!
            </p>
          </>
        );
      }
    }
  };

  return (
    <>
      <ProfileCard user={user} />
      <BookmarkedModuleCard />
      <div style={styles.container}>
        <StudyPlanCard />
        <ReviewedModuleCard />
      </div>
      {user && renderRecommendedModules()}
    </>
  );
};

const styles = {
  container: {
    display: "flex"
  }
}
export default Profile;
