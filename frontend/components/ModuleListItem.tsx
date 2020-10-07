import { Module } from "../types";
import Link from "next/link";

import StarIcon from "../components/StarIcon";

interface ModuleListItemProps {
  module: Module
}

const ModuleListItem: React.FC<ModuleListItemProps> = ({ module }) => {
  const { moduleCode, moduleName, moduleDescription } = module;
  const navigateToModule = (code: string) => {

  }
  return (
    <Link href="module-review">
      <div style={styles.container} onClick={() => navigateToModule(moduleCode)}>
        <div style={styles.moduleCode}>
          {moduleCode}
        </div>
        <div style={styles.infoContainer}>
          <div style={styles.moduleInfoContainer}>
            <div style={styles.moduleName}>{moduleName}</div>
            <div style={styles.moduleDescription}>{moduleDescription}</div>
          </div>
          <div style={styles.reviewStarContainer}>
            <StarIcon height="30" color="yellow" />
            <span style={{ marginTop: 15, fontSize: 20 }}>152</span>
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
    height: 60,
    width: 120,
    position: "absolute" as "absolute", // workaround for TS bug
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "23px"
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
  moduleName: {
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
}

export default ModuleListItem;
