import { useSelector } from "react-redux";

import SectionTitle from "../components/SectionTitle";
import ProfileCard from "../components/ProfileCard";
import BookmarkedModuleCard from "../components/BookmarkedModuleCard";
import StudyPlanCard from "../components/StudyPlanCard";
import { User } from "../types";
import ReviewedModuleCard from "../components/ReviewedModuleCard";
import SearchModuleList from "../components/SearchModuleList";


const Profile: React.FC = () => {

  const dummyProfile: User = {
    fullName: "Chester Sim",
    studyCourse: "Computer Science",
    yearOfStudy: 3,
    _id: "string"

  }

  return (
    <>
      <ProfileCard user={dummyProfile} />
      <BookmarkedModuleCard />
      <div style={styles.container}>
        <StudyPlanCard />
        <ReviewedModuleCard />
      </div>
      <SectionTitle title={`Modules you might be interested in`} />
      <SearchModuleList />
    </>
  );
};

const styles = {
  container: {
    display: "flex"
  }
}
export default Profile;
