import { Module } from "../types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ADD_MODULE_FOR_COMPARISON } from "../redux/constants";

import StarOutlinedIcon from "../icons/StarOutlinedIcon";

interface ModuleListCardProps {
  module: Module;
}

const ModuleListCard: React.FC<ModuleListCardProps> = ({ module }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { code, title, description } = module;

  const navigateToModuleReviewPage = () => {
    router.push({
      pathname: "/module-review",
      query: { module: JSON.stringify(module) }
    })
  }

  const onCompare = () => {
    dispatch({
      type: ADD_MODULE_FOR_COMPARISON,
      payload: code
    })
  }

  return (
    <div style={styles.container}>
      <div style={styles.moduleCode} onClick={navigateToModuleReviewPage}>{code}</div>
      <div style={styles.infoContainer} onClick={navigateToModuleReviewPage}>
        <div style={styles.moduleInfoContainer}>
          <div style={styles.moduleTitle}>{title}</div>
          <div style={styles.moduleDescription}>{description}</div>
        </div>
        <div style={styles.reviewStarContainer}>
          <StarOutlinedIcon style={styles.starIcon} />
          <span style={styles.reviewNumber}>4.7</span>
        </div>
      </div>
      <div style={styles.compareButton} onClick={onCompare}>vs</div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative" as "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    color: "#fff",
    fontFamily: "Roboto",
    margin: "10px 0px 30px 0px",
    padding: "0px 20px",
    cursor: "pointer",
  },
  moduleCode: {
    backgroundColor: "#2D538C",
    height: 70,
    width: 120,
    position: "absolute" as "absolute", // workaround for TS bug
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "23px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    zIndex: 1
  },
  compareButton: {
    position: "absolute" as "absolute",
    right: 50,
    top: -20,
    bottom: 65,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#F2A966",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
    zIndex: 1,
    fontSize: 18
  },
  infoContainer: {
    backgroundColor: "#9CB6BA",
    display: "flex",
    flexDirection: "row" as "row",
    borderRadius: 15,
    marginLeft: 60,
    padding: "25px 20px 25px 60px",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  },
  moduleInfoContainer: {
    padding: "0px 30px",
  },
  moduleTitle: {
    fontSize: 30,
    fontWeight: "bold" as "bold",
  },
  moduleDescription: {
    textAlign: "justify" as "justify",
    fontWeight: 300,
  },
  reviewStarContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  starIcon: {
    height: 30,
    color: "#F2E143",
  },
  reviewNumber: {
    marginTop: 15,
    fontSize: 20,
  },
};

export default ModuleListCard;
