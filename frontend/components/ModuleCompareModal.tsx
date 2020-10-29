import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import ArrowRightIcon from "../icons/ArrowRightIcon";
import ModuleCompareCode from "./ModuleCompareCode";
import { FIRST, SECOND } from "../redux/constants";
import { compareOrange } from "../styles/colors";

const ModuleCompareModal: React.FC = () => {
  const router = useRouter();
  const firstModuleId: string = useSelector(
    (state) => state.compare.firstModuleId
  );
  const firstModuleCode: string = useSelector(
    (state) => state.compare.firstModuleCode
  );
  const secondModuleId: string = useSelector(
    (state) => state.compare.secondModuleId
  );
  const secondModuleCode: string = useSelector(
    (state) => state.compare.secondModuleCode
  );
  const hasModuleToCompare =
    firstModuleId || secondModuleId ? "visible" : "hidden";

  const navigateToModuleComparisonPage = () => {
    if (firstModuleId && secondModuleId) {
      router.push({
        pathname: "/module-comparison",
        query: { firstModuleId, secondModuleId },
      });
    }
  };

  return (
    <div style={{ visibility: `${hasModuleToCompare}`, ...styles.container }}>
      <div style={styles.modalContainer}>
        <div style={styles.modulesContainer}>
          <ModuleCompareCode code={firstModuleCode} order={FIRST} />
          vs
          {<ModuleCompareCode code={secondModuleCode} order={SECOND} />}
        </div>
        <div
          style={styles.actionContainer}
          onClick={navigateToModuleComparisonPage}
        >
          <ArrowRightIcon style={styles.arrowIcon} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed" as "fixed",
    bottom: "30px",
    left: 0,
    right: 0,
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    color: "#fff",
  },
  modalContainer: {
    width: 360,
    height: 70,
    backgroundColor: compareOrange,
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
    fontSize: 20,
  },
  actionContainer: {
    width: 40,
    height: "100%",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  arrowIcon: {
    height: 25,
  },
};

export default ModuleCompareModal;
