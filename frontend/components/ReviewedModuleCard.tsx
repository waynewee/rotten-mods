import BookmarkIcon from "../icons/BookmarkFilledIcon";
import PenIcon from "../icons/PenIcon";
import { codeBlue } from "../styles/colors";

const ReviewedModuleCard: React.FC = () => {
  const dummyModuleCodes: string[] = [
    "CS1101s",
    "CS2030",
    "CS2040",
    "CS1231",
    "CS3219",
  ];

  const renderModuleCodes = () =>
    dummyModuleCodes.map((moduleCode) => {
      return <div style={styles.moduleCode}>{moduleCode}</div>;
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
  moduleCode: {
    padding: 12,
    backgroundColor: codeBlue,
    color: "#fff",
    borderRadius: 15,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    margin: 5,
  },
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
