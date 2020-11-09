import { NextPage } from "next";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import modApi from "../api/module";
import { Module } from "../types";

import ModuleCompareModal from "../components/ModuleCompareModal";
import SectionTitle from "../components/SectionTitle";
import SearchModuleList from "../components/SearchModuleList";
import SeeMoreButton from "../components/SeeMoreButton";
import { descriptionGreen } from "../styles/colors";

interface SearchProps {
  initialSearchResults: Module[];
}

const Search: NextPage<SearchProps> = ({ initialSearchResults = [] }) => {
  const [searchResults, setSearchResults] = useState(initialSearchResults);
  const [numberOfResults, setNumberOfResults] = useState(11); // the presence of that 11th result is an indicator that there are more than 10 results
  const searchTerm = useSelector((state) => state.search.searchTerm);

  useEffect(() => {
    setNumberOfResults(10);
  }, [searchTerm]);

  useEffect(() => {
    setSearchResults(initialSearchResults);
  }, [initialSearchResults]);

  const fetchMoreSearchResults = async () => {
    const results = await modApi.searchModule(searchTerm, numberOfResults + 10);
    setSearchResults(results);
    setNumberOfResults(numberOfResults + 10);
  };

  return (
    <>
      <SectionTitle title={`Search results for "${searchTerm}"`} />
      <SearchModuleList modules={searchResults.slice(0, numberOfResults - 1)} />
      {searchResults.length == numberOfResults && (
        <SeeMoreButton
          fetchMoreData={fetchMoreSearchResults}
          style={{ backgroundColor: descriptionGreen }}
        />
      )}

      <SectionTitle title={`Similar results to "${searchTerm}"`} />
      <SearchModuleList modules={[]} />
      <ModuleCompareModal />
    </>
  );
};

Search.getInitialProps = async ({ query }) => {
  const searchTerm = query.s;
  try {
    const initialSearchResults = await modApi.searchModule(searchTerm);
    return { initialSearchResults };
  } catch (err) {
    return { initialSearchResults: [] };
  }
};

export default Search;
