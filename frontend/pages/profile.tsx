import { useSelector } from "react-redux";

import SectionTitle from "../components/SectionTitle";
import ProfileCard from "../components/ProfileCard";
import BookmarkedModuleCard from "../components/BookmarkedModuleCard";
import StudyPlanCard from "../components/StudyPlanCard";
import { User } from "../types";
import ReviewedModuleCard from "../components/ReviewedModuleCard";
import ModuleList from "../components/ModuleList";


const Profile: React.FC = () => {

  const dummyProfile: User = {
    fullName: "Chester Sim",
    studyStatus: "Year 4 Undergraduate in NUS",
    studyCourse: "Computer Science",
    modulesReviewed: 3,
    modulesTaken: 10
  }

  return (
    <>
      <ProfileCard user = {dummyProfile} />
      <BookmarkedModuleCard/>
      <div style={styles.container}>
        <StudyPlanCard/>
        <ReviewedModuleCard/>
      </div>
      <SectionTitle title={`Modules you might be interested in`} />
      <ModuleList />
     
    </>
  );
};

const styles = {
  container: {
    display:"flex",
  }
}
export default Profile;
