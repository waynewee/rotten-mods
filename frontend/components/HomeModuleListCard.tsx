import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Module } from "../types";
import { ADD_MODULE_FOR_COMPARISON } from "../redux/constants";

import StarFilledIcon from "../icons/StarFilledIcon";

interface HomeModuleListCardProps {
  module: Module
}

const HomeModuleListCard: React.FC<HomeModuleListCardProps> = ({ module }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { code, title, ratings } = module;

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
      <div style={styles.upperContainer}>
        <div style={styles.moduleCode} onClick={navigateToModuleReviewPage}>
          {code}
        </div>
        <div style={styles.compareButton} onClick={onCompare}>
          vs
      </div>
      </div>
      <div style={styles.lowerContainer} onClick={navigateToModuleReviewPage}>
        <div style={styles.moduleTitle}>
          {title}
        </div>
        <div style={styles.ratings}>
          <StarFilledIcon style={styles.ratingsIcon} /> {ratings}
        </div>
      </div>
    </div>
  )
};

const styles = {
  container: {
    flex: 1,
    width: 300,
    height: 150,
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "#fff",
    margin: "0px 10px",
    cursor: "pointer"
  },
  upperContainer: {
    position: "relative" as "relative",
    left: 15,
    height: 20,
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20
  },
  moduleCode: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 100,
    backgroundColor: "#2D538C",
    fontSize: 16,
    borderRadius: 10,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)"
  },
  compareButton: {
    position: "relative" as "relative",
    left: 40,
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#F2A966",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    cursor: "pointer"
  },
  lowerContainer: {
    width: 300,
    height: 130,
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    backgroundColor: "#9CB6BA",
    fontFamily: "Roboto",
    borderRadius: 15,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  },
  moduleTitle: {
    display: "flex",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" as "center",
    fontWeight: "bold" as "bold",
    fontSize: 20,
    marginTop: 25,
    padding: "0px 20px",
  },
  ratings: {
    // backgroundColor: "red",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20
  },
  ratingsIcon: {
    height: 20,
    color: "#F2E143",
    marginBottom: 4,
    marginRight: 10
  }
}

export default HomeModuleListCard;