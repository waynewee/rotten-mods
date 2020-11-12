import { NextPage } from "next";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moduleApi from "../api/module";
import { Module } from "../types";

import ModuleCompareModal from "../components/ModuleCompareModal";
import SectionTitle from "../components/SectionTitle";
import SearchModuleList from "../components/SearchModuleList";
import SeeMoreButton from "../components/SeeMoreButton";
import { descriptionGreen } from "../styles/colors";
import { AutoComplete, Checkbox, InputNumber } from "antd";

interface SearchProps {
  initialSearchResults: Module[];
}

const SEARCH_INTERVAL = 5;

const Search: NextPage<SearchProps> = ({ initialSearchResults = [] }) => {
  const allSchools = useSelector((state) => state.schools);
  const schoolOfUser = useSelector((state) => state.auth.user.schoolName);
  const schoolsAutocompleteOptions = allSchools.map((school) => ({
    value: school.name,
  }));
  const searchTerm = useSelector((state) => state.search.searchTerm);

  const [searchResults, setSearchResults] = useState(initialSearchResults);
  const [numberOfResults, setNumberOfResults] = useState(SEARCH_INTERVAL + 1); // the presence of that n + 1th result is an indicator that there are more than 10 results
  const [schoolFilter, setSchoolFilter] = useState(schoolOfUser);
  const [schoolOptions, setSchoolOptions] = useState(
    schoolsAutocompleteOptions
  );
  const [semestersFilter, setSemestersFilter] = useState([]);
  const [creditsFilter, setCreditsFilter] = useState("");

  useEffect(() => {
    setNumberOfResults(SEARCH_INTERVAL + 1);
  }, [searchTerm, schoolFilter, semestersFilter, creditsFilter]);

  useEffect(() => {
    fetchSearchResults();
  }, [schoolFilter, semestersFilter, creditsFilter]);

  useEffect(() => {
    setSchoolFilter(schoolOfUser);
  }, [schoolOfUser]);

  useEffect(() => {
    setSearchResults(initialSearchResults);
  }, [initialSearchResults]);

  const fetchSearchResults = async () => {
    const schoolNameFilter = allSchools.find(
      (school) => school.name === schoolFilter
    )?._id;
    const results = await moduleApi.searchModule(
      searchTerm,
      numberOfResults,
      1,
      schoolNameFilter,
      semestersFilter.join("_"),
      creditsFilter
    );
    setSearchResults(results);
  };

  const fetchMoreSearchResults = async () => {
    const results = await moduleApi.searchModule(
      searchTerm,
      numberOfResults + SEARCH_INTERVAL
    );
    console.log(results);
    setSearchResults(results);
    setNumberOfResults(numberOfResults + SEARCH_INTERVAL);
  };

  const semesterOptions = [
    {
      label: 1,
      value: 1,
    },
    {
      label: 2,
      value: 2,
    },
    {
      label: 3,
      value: 3,
    },
  ];

  return (
    <>
      <div style={styles.header}>
        <span>{`Search results for "${searchTerm}"`}</span>
        <div style={styles.filterBar}>
          <div>
            <span>School:</span>
            <AutoComplete
              style={styles.autocomplete}
              onSelect={setSchoolFilter}
              options={schoolOptions}
              value={schoolFilter}
              onSearch={(searchText) =>
                setSchoolOptions(
                  schoolsAutocompleteOptions.filter((school) =>
                    school.value
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  )
                )
              }
              onChange={(value) => setSchoolFilter(value)}
              notFoundContent={
                "The school you are looking for isn't here. Perhaps you can add them to the app!"
              }
            />
          </div>
          <div style={{ display: "flex" }}>
            <span>Semester:</span>
            <div style={styles.checkboxes}>
              <Checkbox.Group
                options={semesterOptions}
                onChange={setSemestersFilter}
              />
            </div>
          </div>
          <div>
            <span>Credits:</span>
            <InputNumber
              max={12}
              onChange={(value) => setCreditsFilter(value as string)}
              style={styles.creditsInput}
            />
          </div>
        </div>
      </div>
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

const styles = {
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "8vh",
    fontSize: "1.5em",
    color: "#838383",
    fontFamily: "Mukta",
    paddingLeft: 20,
    margin: "20px 0px",
  },
  filterBar: {
    display: "flex",
    justifyContent: "flex-end",
    fontSize: 15,
    alignItems: "center",
  },
  autocomplete: {
    width: 300,
    margin: "0px 10px",
    position: "relative" as "relative",
    // bottom: 2,
  },
  checkboxes: {
    margin: "0px 10px",
    position: "relative" as "relative",
    // bottom: 2,
  },
  creditsInput: {
    marginLeft: 10,
    position: "relative" as "relative",
    // bottom: 2,
  },
};

Search.getInitialProps = async ({ query }) => {
  const searchTerm = query.s;
  try {
    const initialSearchResults = await moduleApi.searchModule(
      searchTerm,
      SEARCH_INTERVAL + 1
    );
    return { initialSearchResults };
  } catch (err) {
    return { initialSearchResults: [] };
  }
};

export default Search;
