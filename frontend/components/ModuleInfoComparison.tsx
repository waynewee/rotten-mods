import { Module } from "../types";
import { useRouter } from "next/router";

import Button from "./Button";
import { codeBlue, descriptionGreen } from "../styles/colors";

interface ModuleInfoComparison {
  firstModule: Module,
  secondModule: Module
}

const ModuleInfoComparison: React.FC<ModuleInfoComparison> = ({ firstModule, secondModule }) => {
  const router = useRouter();

  const navigateToModuleReviewPage = (modId) => {
    router.push({
      pathname: "/module-review",
      query: { id: modId }
    })
  }

  return (
    <div style={styles.container}>
      <div style={styles.moduleInfoContainer}>
        <Button style={styles.moduleCode} onClick={() => navigateToModuleReviewPage(firstModule._id)} >
          {firstModule.code}
        </Button>
        <Button style={styles.moduleCode} onClick={() => navigateToModuleReviewPage(secondModule._id)} >
          {secondModule.code}
        </Button>
        <div style={styles.vsContainer}>
          vs
        </div>
      </div>
      <div style={styles.moduleInfoContainer}>
        <div style={styles.moduleInfo}>
          <div style={styles.moduleTitle}>
            {firstModule.title}
          </div>
          <div style={styles.moduleDescription}>
            {firstModule.description}
          </div>
        </div>
        <div style={styles.moduleInfo}>
          <div style={styles.moduleTitle}>
            {secondModule.title}
          </div>
          <div style={styles.moduleDescription}>
            {secondModule.description}
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: "100%",
    color: "#fff",
    paddingTop: 40
  },
  moduleInfoContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: 20
  },
  moduleCode: {
    height: 60,
    width: 140,
    backgroundColor: codeBlue,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    fontSize: 22,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)"
  },
  vsContainer: {
    position: "absolute" as "absolute",
    color: "#CFCFCF",
    fontSize: 20,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  moduleInfo: {
    width: 500,
    backgroundColor: descriptionGreen,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    padding: 20,
    borderRadius: 15,
    textAlign: "justify" as "justify",
    margin: "0px 10px"
  },
  moduleTitle: {
    fontSize: 20,
    fontWeight: "bold" as "bold",
    lineHeight: 1,
    marginBottom: 5
  },
  moduleDescription: {
    fontSize: 11
  }
}

export default ModuleInfoComparison;