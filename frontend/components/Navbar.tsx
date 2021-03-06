import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_TERM } from "../redux/constants";
import { triggerRequireLoginMessage } from "../utils/helpers";

import "../styles/antd.less";
import { Dropdown, Menu, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { codeBlue } from "../styles/colors";
import ProfileButton from "./ProfileButton";
import Button from "./Button";
import {fetchSchoolAction} from "../redux/actions/search";

const { Search } = Input;

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const submitSearch = (searchTerm) => {
    dispatch(fetchSchoolAction(searchTerm));
    router.push({
      pathname: "/search",
      query: { s: searchTerm },
    });
  };


  return (
    <div style={styles.container}>
      <Link href="/">
        <div style={styles.logo}>
          <img src="/RottenMods.png" alt="RottenMods Logo" height="30" />
        </div>
      </Link>

      <div style={styles.searchContainer}>
        <Search
          placeholder="Search for modules"
          onSearch={(value) => submitSearch(value)}
          style={styles.searchBar}
        />
      </div>

      <div style={styles.actionsContainer}>
        <ProfileButton />
      </div>
    </div>
  );
};

const styles = {
  loginFormButton: {
    width: "100%",
    backgroundColor: codeBlue,
  },
  container: {
    display: "flex",
    flexDirection: "row" as "row",
    width: "100%",
    height: "70px",
    padding: "30px 0px",
    justifyContent: "space-between",
    alignItems: "baseline",
    position: "sticky" as "sticky",
  },
  logo: {
    flex: 1,
    cursor: "pointer",
  },
  searchContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  searchBar: {
    width: 200,
  },
  actionsContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  addModuleButton: {
    display: "flex",
    alignItems: "center",
    margin: "0px 10px",
    padding: 10,
    backgroundColor: codeBlue,
    color: "#fff",
    borderRadius: 8,
  },
};

export default Navbar;
