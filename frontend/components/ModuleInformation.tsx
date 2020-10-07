import { ModuleMeta } from "../types";

import ModuleSmallDetail from "../components/ModuleSmallDetail";
import UserClockIcon from "../icons/UserClockIcon";
import LayerGroupIcon from "../icons/LayerGroupIcon";
import StarFilledIcon from "../icons/StarFilledIcon";
import UniversityIcon from "../icons/UniversityIcon";
import BookmarkFilledIcon from "../icons/BookmarkFilledIcon";
import BookmarkOutlinedIcon from "../icons/BookmarkOutlinedIcon";
import { BookFilled, BookOutlined } from "@ant-design/icons";
import PenIcon from "../icons/PenIcon";

interface ModuleInformationProps {
  module: ModuleMeta
}

const ModuleInformation: React.FC<ModuleInformationProps> = ({ module }) => {
  const { code, expectedHours, difficulty, ratings, university, description, title } = module;

  return (
    <div style={styles.container}>
      <div style={styles.moduleMeta}>
        <div style={styles.moduleInformation}>
          <div style={styles.moduleCode}>
            {code}
          </div>
          <div style={styles.moduleSmallDetailsColumn}>
            <ModuleSmallDetail Icon={UserClockIcon} text={`Expected Workload/Week: ${expectedHours} hours`} iconStyle={{ color: "#B9B9B9" }} />
            <ModuleSmallDetail Icon={LayerGroupIcon} text={`Difficulty: ${difficulty}/5`} iconStyle={{ color: "#B9B9B9" }} />
          </div>
          <div style={styles.moduleSmallDetailsColumn}>
            <ModuleSmallDetail Icon={StarFilledIcon} text={`Ratings: ${ratings}`} iconStyle={{ color: "#F2E143" }} />
            <ModuleSmallDetail Icon={UniversityIcon} text={`University: ${university}`} iconStyle={{ color: "#B9B9B9" }} />
          </div>
        </div>
        <div style={styles.actionsBar}>
          <BookOutlined style={{ ...styles.actionIcon, color: "#76CCB7", fontSize: 35 }} />
          <BookmarkOutlinedIcon style={{ ...styles.actionIcon, color: "#289FA7" }} />
          <PenIcon style={{ ...styles.actionIcon, color: "#7497CC" }} />
        </div>
      </div>
      <div style={styles.infoContainer}>
        <div style={styles.moduleTitle}>{title}</div>
        <div style={styles.moduleDescription}>{description}</div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: "Roboto",
    marginTop: 30,
  },
  moduleMeta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80
  },
  moduleInformation: {
    display: "flex",
    justifyContent: "flex-start"
  },
  moduleCode: {
    backgroundColor: "#2D538C",
    height: 80,
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "26px",
    color: "white",
    padding: "0px 45px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  },
  moduleSmallDetailsColumn: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between"
  },
  actionsBar: {
    display: "flex"
  },
  actionIcon: {
    height: 35,
    margin: "0px 10px"
  },
  infoContainer: {
    backgroundColor: "#9CB6BA",
    marginTop: 10,
    borderRadius: 15,
    padding: "35px 45px",
    color: "#fff",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)"
  },
  moduleTitle: {
    fontSize: 30,
    fontWeight: "bold" as "bold"
  },
  moduleDescription: {
    textAlign: "justify" as "justify",
    fontWeight: 300
  },
}

export default ModuleInformation;