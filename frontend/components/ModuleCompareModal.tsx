import { ModuleCompareState } from "../redux/types";
import { useSelector } from "react-redux";

import ArrowRightIcon from "../icons/ArrowRightIcon";
import ModuleCompareCode from "./ModuleCompareCode";
import { FIRST, SECOND } from "../redux/constants";

const ModuleCompareModal: React.FC = () => {
  const firstModuleCode = useSelector(state => state.compare.firstModuleCode);
  const secondModuleCode = useSelector(state => state.compare.secondModuleCode);
  const hasModuleToCompare = firstModuleCode || secondModuleCode ? "visible" : "hidden";

  const onConfirmComparison = () => {

  }

  return (
    <div style={{ visibility: `${hasModuleToCompare}`, ...styles.container }}>
      <div style={styles.modalContainer}>
        <div style={styles.modulesContainer}>
          <ModuleCompareCode code={firstModuleCode} order={FIRST} />
          vs
          {<ModuleCompareCode code={secondModuleCode} order={SECOND} />}
        </div>
        <div style={styles.actionContainer} onClick={onConfirmComparison}>
          <ArrowRightIcon style={styles.arrowIcon} />
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed" as "fixed",
    bottom: "30px",
    left: 0,
    right: 0,
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    color: "#fff"
  },
  modalContainer: {
    width: 360,
    height: 70,
    backgroundColor: "#F2A966",
    borderRadius: 12,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    display: "flex",
  },
  modulesContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",
    fontSize: 20
  },
  actionContainer: {
    width: 40,
    height: "100%",
    display: "flex",
    alignItems: "center"
  },
  arrowIcon: {
    height: 25
  }
};

export default ModuleCompareModal;