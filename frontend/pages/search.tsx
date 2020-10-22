import { NextPage } from "next";
import { useSelector } from "react-redux";

import ModuleCompareModal from "../components/ModuleCompareModal";
import SectionTitle from "../components/SectionTitle";
import SearchModuleList from "../components/SearchModuleList";

const Search: NextPage = () => {
  const searchTerm = useSelector((state) => state.search.searchTerm);

  return (
    <>
      <SectionTitle title={`Search results for "${searchTerm}"`} />
      <SearchModuleList />
      <SectionTitle title={`Similar results to "${searchTerm}"`} />
      <SearchModuleList />
      <ModuleCompareModal />
    </>
  );
};

export default Search;
