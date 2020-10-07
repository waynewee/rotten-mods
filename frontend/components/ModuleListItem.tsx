import { Module } from "../types";
import Link from "next/link";

import StarOutlinedIcon from "../icons/StarOutlinedIcon";

interface ModuleListItemProps {
  module: Module
}

const ModuleListItem: React.FC<ModuleListItemProps> = ({ module }) => {
  const { code, title, description } = module;

  return (
    <Link href="module-review">
      <div style={styles.container}>
        <div style={styles.moduleCode}>
          {code}
        </div>
        <div style={styles.infoContainer}>
          <div style={styles.moduleInfoContainer}>
            <div style={styles.moduleTitle}>{title}</div>
            <div style={styles.moduleDescription}>{description}</div>
          </div>
          <div style={styles.reviewStarContainer}>
            <StarOutlinedIcon style={styles.starIcon} />
            <span style={styles.reviewNumber}>4.7</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    color: "#fff",
    fontFamily: "Roboto",
    fontWeight: 300,
    margin: "15px 0px",
    cursor: "pointer"
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
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  },
  infoContainer: {
    backgroundColor: "#9CB6BA",
    display: "flex",
    flexDirection: "row" as "row",
    borderRadius: 15,
    marginLeft: 60,
    padding: "25px 20px 25px 60px",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)"
  },
  moduleInfoContainer: {
    padding: "0px 30px"
  },
  moduleTitle: {
    fontSize: 30,
    fontWeight: "bold" as "bold"
  },
  moduleDescription: {
    textAlign: "justify" as "justify",
  },
  reviewStarContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  starIcon: {
    height: 30,
    color: "#F2E143"
  },
  reviewNumber: {
    marginTop: 15,
    fontSize: 20
  }
}

export default ModuleListItem;
