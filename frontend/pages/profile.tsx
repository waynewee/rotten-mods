import { useState, useEffect } from "react";
import { User } from "../types";
import { useSelector } from "react-redux";
import recommendationApi from "../api/recommendations";
import {
  updatePersonalBookmarks,
  updatePersonalReviews,
  updatedPersonalPlannedModules,
} from "../utils/helpers";

import SectionTitle from "../components/SectionTitle";
import ProfileCard from "../components/ProfileCard";
import BookmarkedModuleCard from "../components/BookmarkedModuleCard";
import StudyPlanCard from "../components/StudyPlanCard";
import ReviewedModuleCard from "../components/ReviewedModuleCard";
import SearchModuleList from "../components/SearchModuleList";

const Profile: React.FC = () => {
  const user: User = useSelector((state) => state.auth.user);
  const [recommendedModules, setRecommendedModules] = useState([]);

  useEffect(() => {
    fetchRecommendedMods();
    updatePersonalBookmarks(user._id);
    updatePersonalReviews(user._id);
    updatedPersonalPlannedModules(user._id);
  }, []);

  const fetchRecommendedMods = async () => {
    const mods = await recommendationApi.getMostViewedModules(); // TODO: to change to Similarity
    setRecommendedModules(mods.mods);
  };

  return (
    <>
      <ProfileCard user={user} />
      <BookmarkedModuleCard />
      <div style={styles.container}>
        <StudyPlanCard />
        <ReviewedModuleCard />
      </div>
      <SectionTitle title={`Modules you might be interested in`} />
      <SearchModuleList modules={recommendedModules} />
    </>
  );
};

const styles = {
  container: {
    display: "flex",
  },
};
export default Profile;
