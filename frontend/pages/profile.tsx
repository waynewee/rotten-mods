import SectionTitle from "../components/SectionTitle";
import ProfileCard from "../components/ProfileCard";
import BookmarkedModuleCard from "../components/BookmarkedModuleCard";
import StudyPlanCard from "../components/StudyPlanCard";
import { User } from "../types";
import ReviewedModuleCard from "../components/ReviewedModuleCard";
import SearchModuleList from "../components/SearchModuleList";


import { useSelector } from "react-redux";


const Profile: React.FC = () => {

  const user : User = useSelector(state => state.auth.user);

  return (
    <>
      <ProfileCard user={user} />
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
