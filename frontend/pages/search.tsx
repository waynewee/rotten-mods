import { NextPage } from "next";
import { useSelector } from "react-redux";

import SectionTitle from "../components/SectionTitle";
import SearchModuleList from "../components/SearchModuleList";

const Search: NextPage = () => {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  console.log("Search Term:", searchTerm);

  return (
    <>
      <SectionTitle title={`Search results for "${searchTerm}"`} />
      <SearchModuleList />
      <SectionTitle title={`Similar results to "${searchTerm}"`} />
      <SearchModuleList />
      <div></div>
    </>
  );
};

export default Search;
