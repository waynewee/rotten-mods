import { useSelector } from "react-redux";

import SectionTitle from "../components/SectionTitle";
import ModuleList from "../components/ModuleList";

const Search: React.FC = () => {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  console.log("Search Term:", searchTerm);

  return (
    <>
      <SectionTitle title={`Search results for "${searchTerm}"`} />
      <ModuleList />
      <SectionTitle title={`Similar results to "${searchTerm}"`} />
      <ModuleList />
      <div></div>
    </>
  );
};

export default Search;
