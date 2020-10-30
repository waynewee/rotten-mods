import { useSelector } from "react-redux";
import { Review } from "../types";

import PenIcon from "../icons/PenFilledIcon";
import ModulePill from "./ModulePill";

const ReviewedModuleCard: React.FC = () => {
  const personalReviews: Review[] = useSelector((state) => state.personalModules.reviews);

  const renderModuleCodes = () =>
    personalReviews.map((review) => {
      return <ModulePill modId={review.modId} key={review._id} />;
    });

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <PenIcon style={{ ...styles.actionIcon }} />
        Reviewed Modules
      </div>
      <div style={styles.moduleList}>{renderModuleCodes()}</div>
    </div>
  );
};

const styles = {
  moduleList: {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "flex-start",
    flexWrap: "wrap" as "wrap",
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#289FA7",
    color: "#fff",
    borderRadius: 15,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    marginBottom: 15,
    display: "flex",
    flexDirection: "column" as "column",
    minHeight: 150
  },
  header: {
    display: "flex",
    justifyContent: "flex-start",
    fontSize: 20,
    textDecorationLine: "underline",
    fontWeight: "bold" as "bold",
    alignItems: "center",
    margin: "-5px 0px 10px 0px",
  },
  actionIcon: {
    height: 20,
    marginRight: 10,
    color: "#fff",
  },
};

export default ReviewedModuleCard;
