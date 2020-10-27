import { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { Module } from "../types";
import bookmarkApi from "../api/bookmark";
import plannedModApi from "../api/planned-mod";
import { updatedPersonalPlannedModules, updatePersonalBookmarks } from "../utils/helpers";

import ModuleSmallDetail from "../components/ModuleSmallDetail";
import UserClockIcon from "../icons/UserClockIcon";
import CoinsFilledIcon from "../icons/CoinsFilledIcon";
import HourGlassHalfFilledIcon from "../icons/HourGlassHalfFilledIcon";
import LayerGroupIcon from "../icons/LayerGroupIcon";
import StarFilledIcon from "../icons/StarFilledIcon";
import StarOutlinedIcon from "../icons/StarOutlinedIcon";
import UniversityIcon from "../icons/UniversityIcon";
import BookmarkFilledIcon from "../icons/BookmarkFilledIcon";
import BookmarkOutlinedIcon from "../icons/BookmarkOutlinedIcon";
import { BookFilled, BookOutlined } from "@ant-design/icons";
import PenFilledIcon from "../icons/PenFilledIcon";
import Button from "./Button";
import { codeBlue, descriptionGreen, ratingsYellow } from "../styles/colors";
import AddPlannedModModal from "./AddPlannedModModal";

interface ModuleInformationProps {
  module: Module;
  setAddReviewModalVisibility: Dispatch<SetStateAction<boolean>>;
  setAddRatingsModalVisibility: Dispatch<SetStateAction<boolean>>;
}

const ModuleInformation: React.FC<ModuleInformationProps> = ({
  module,
  setAddReviewModalVisibility,
  setAddRatingsModalVisibility
}) => {
  const [plannedSemester, setPlannedSemester] = useState(1);
  const [isAddPlannedModModalVisible, setAddPlannedModModalVisibility] = useState(false);

  const userId = useSelector(state => state.auth.user?._id);
  const bookmarkId = useSelector(state => state.personalModules.bookmarks)
    .find(bookmark => bookmark.modId === module?._id)?._id;
  const plannedModId = useSelector(state => state.personalModules.plannedMods)
    .find(mod => mod.plannedMod.modId === module?._id)?._id;
  const plannedMods = useSelector(state => state.personalModules.plannedMods)
  console.log("Planned Mods:", plannedMods);
  console.log("plannedModId:", plannedModId);
  console.log("Module Id:", module?._id);

  const { code, workload = 10, rating, university, description, title, credit = 4, semester = [1, 2], _id } = module;
  const difficulty = rating?.difficulty?.value || 0;
  const star = rating?.star?.value || 0;

  const toggleBookmark = async () => {
    if (!bookmarkId) {
      await bookmarkApi.addBookmark(userId, _id);
    } else {
      await bookmarkApi.deleteBookmark(bookmarkId);
    }

    updatePersonalBookmarks(userId);
  }

  const togglePlanner = async () => {
    if (!plannedModId) {
      setAddPlannedModModalVisibility(true);
    } else {
      await plannedModApi.removePlannedMod(plannedModId)
      updatedPersonalPlannedModules(userId);
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.moduleMeta}>
        <div style={styles.moduleInformation}>
          <div style={styles.moduleCode}>{code}</div>
          <div style={styles.moduleSmallDetailsColumn}>
            <ModuleSmallDetail
              Icon={UniversityIcon}
              text={`University: ${university}`}
              iconStyle={styles.iconStyle}
            />
            <ModuleSmallDetail
              Icon={HourGlassHalfFilledIcon}
              text={`Semester(s) offered: ${semester.sort().join(", ")}`}
              iconStyle={styles.iconStyle}
            />
          </div>
          <div style={styles.moduleSmallDetailsColumn}>
            <ModuleSmallDetail
              Icon={CoinsFilledIcon}
              text={`Credit: ${credit}`}
              iconStyle={styles.iconStyle}
            />
            <ModuleSmallDetail
              Icon={UserClockIcon}
              text={`Workload/Week: ${workload} hours`}
              iconStyle={styles.iconStyle}
            />
          </div>
          <div style={styles.moduleSmallDetailsColumn}>
            <ModuleSmallDetail
              Icon={StarFilledIcon}
              text={`Ratings: ${star.toFixed(1)}`}
              iconStyle={{ color: ratingsYellow }}
            />
            <ModuleSmallDetail
              Icon={LayerGroupIcon}
              text={`Difficulty: ${difficulty.toFixed(1)}/5`}
              iconStyle={styles.iconStyle}
            />
          </div>
        </div>
        <div style={styles.actionsBar}>
          <Button onClick={togglePlanner}>
            {plannedModId
              ? (<BookFilled
                style={{ ...styles.actionIcon, color: "#76CCB7", fontSize: 25 }}
              />)
              : (<BookOutlined
                style={{ ...styles.actionIcon, color: "#76CCB7", fontSize: 25 }}
              />)}
          </Button>
          <Button onClick={toggleBookmark}>
            {bookmarkId
              ? (<BookmarkFilledIcon
                style={{ ...styles.actionIcon, color: "#289FA7" }}
              />)
              : (<BookmarkOutlinedIcon
                style={{ ...styles.actionIcon, color: "#289FA7" }}
              />)}
          </Button>
          <Button onClick={() => setAddRatingsModalVisibility(true)}>
            <StarOutlinedIcon
              style={{ ...styles.actionIcon, color: ratingsYellow }}
            />
          </Button>
          <Button onClick={() => setAddReviewModalVisibility(true)}>
            <PenFilledIcon style={{ ...styles.actionIcon, color: "#7497CC" }} />
          </Button>
        </div>
      </div>
      <div style={styles.infoContainer}>
        <div style={styles.moduleTitle}>{title}</div>
        <div style={styles.moduleDescription}>{description}</div>
      </div>
      <AddPlannedModModal
        isModalVisible={isAddPlannedModModalVisible}
        setModalVisibility={setAddPlannedModModalVisibility}
        modId={_id}
        userId={userId}
        plannedModId={plannedModId}
      />
    </div >
  );
};

const styles = {
  container: {
    fontFamily: "Roboto",
    marginTop: 30,
  },
  moduleMeta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
  },
  moduleInformation: {
    display: "flex",
    justifyContent: "flex-start",
  },
  moduleCode: {
    backgroundColor: codeBlue,
    height: 80,
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "26px",
    color: "white",
    padding: "0px 30px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  moduleSmallDetailsColumn: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
  },
  actionsBar: {
    display: "flex",
  },
  actionIcon: {
    height: 25,
    margin: "0px 10px",
  },
  infoContainer: {
    backgroundColor: descriptionGreen,
    marginTop: 10,
    borderRadius: 15,
    padding: "20px 30px 30px 30px",
    color: "#fff",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
  },
  moduleTitle: {
    fontSize: 30,
    fontWeight: "bold" as "bold",
  },
  moduleDescription: {
    textAlign: "justify" as "justify",
    fontWeight: 300,
  },
  iconStyle: {
    color: "#B9B9B9"
  }
};

export default ModuleInformation;
