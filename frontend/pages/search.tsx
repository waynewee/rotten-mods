import { NextPage } from "next";
import { useSelector } from "react-redux";
import modApi from "../api/module";
import { Module } from "../types";

import ModuleCompareModal from "../components/ModuleCompareModal";
import SectionTitle from "../components/SectionTitle";
import SearchModuleList from "../components/SearchModuleList";

interface SearchProps {
  searchResults: Module[];
}

const Search: NextPage<SearchProps> = ({ searchResults }) => {
  const searchTerm = useSelector((state) => state.search.searchTerm);

  console.log("Search Results:", searchResults);

  return (
    <>
      <SectionTitle title={`Search results for "${searchTerm}"`} />
      <SearchModuleList modules={searchResults} />
      <SectionTitle title={`Similar results to "${searchTerm}"`} />
      <SearchModuleList />
      <ModuleCompareModal />
    </>
  );
};

Search.getInitialProps = async ({ query }) => {
  const searchTerm = query.s;
  try {
    const searchResults = await modApi.searchModule(searchTerm);
    return { searchResults };
  } catch (err) {
    return { searchResults: [] }
  }

}

export default Search;
