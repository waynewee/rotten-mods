import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Module, Review } from "../types";
import bookmarkApi from "../api/bookmark";
import plannedModApi from "../api/planned-mod";
import reactionApi from "../api/reaction";
import {
  updatedPersonalPlannedModules,
  updatePersonalBookmarks,
  triggerRequireLoginMessage,
} from "../utils/helpers";

import ModuleSmallDetail from "../components/ModuleSmallDetail";
import UserClockIcon from "../icons/UserClockIcon";
import CoinsFilledIcon from "../icons/CoinsFilledIcon";
import HourGlassHalfFilledIcon from "../icons/HourGlassHalfFilledIcon";
import LayerGroupIcon from "../icons/LayerGroupIcon";
import StarFilledIcon from "../icons/StarFilledIcon";
import LikeFilledIcon from "../icons/LikeFilledIcon";
import StarOutlinedIcon from "../icons/StarOutlinedIcon";
import LikeOutlinedIcon from "../icons/LikeOutlinedIcon";
import UniversityIcon from "../icons/UniversityIcon";
import BookmarkFilledIcon from "../icons/BookmarkFilledIcon";
import BookmarkOutlinedIcon from "../icons/BookmarkOutlinedIcon";
import CheckboxOutlinedIcon from "../icons/CheckboxOutlinedIcon";
import { BookFilled, BookOutlined } from "@ant-design/icons";
import PencilOutlinedIcon from "../icons/PencilOutlinedIcon";
import PencilFilledIcon from "../icons/PencilFilledIcon";
import Button from "./Button";
import {
  codeBlue,
  reviewBlue,
  descriptionGreen,
  ratingsYellow,
} from "../styles/colors";
import AddPlannedModModal from "./AddPlannedModModal";
import { message } from "antd";

interface ModuleInformationProps {
  module: Module;
  setAddReviewModalVisibility: Dispatch<SetStateAction<boolean>>;
  setAddRatingsModalVisibility: Dispatch<SetStateAction<boolean>>;
  reviewByUser?: Review;
  updateModule: () => void;
}

const ModuleInformation: React.FC<ModuleInformationProps> = ({
  module,
  setAddReviewModalVisibility,
  setAddRatingsModalVisibility,
  reviewByUser,
  updateModule,
}) => {
  const [
    isAddPlannedModModalVisible,
    setAddPlannedModModalVisibility,
  ] = useState(false);
  const [likeReactionId, setLikeReactionId] = useState(""); // is true if it is reaction's id

  const userId = useSelector((state) => state.auth.user?._id);
  const bookmarkId = useSelector(
    (state) => state.personalModules.bookmarks
  ).find((bookmark) => bookmark.modId === module?._id)?._id;
  const plannedModId = useSelector(
    (state) => state.personalModules.plannedMods
  ).find((plannedMod) => plannedMod.modId === module?._id)?._id;
  const schools = useSelector((state) => state.schools);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const {
    code,
    workload = 10,
    rating,
    schoolId,
    description,
    title,
    credit = 4,
    semester = [1, 2],
    prereqs,
    _id,
  } = module;
  const university = schools.find((school) => school._id === schoolId)?.name;
  const difficulty = rating?.difficulty?.value || 0;
  const star = rating?.star?.value || 0;

  useEffect(() => {
    fetchIsLikedByUser();
  }, [userId]);

  const fetchIsLikedByUser = async () => {
    try {
      const reaction = await reactionApi.getReaction(
        "mod",
        module._id,
        userId,
        "like"
      );
      setLikeReactionId(reaction._id);
    } catch (err) {
      setLikeReactionId("");
    }
  };

  const toggleBookmark = async () => {
    if (!isLoggedIn) {
      triggerRequireLoginMessage();
      return;
    }

    if (!bookmarkId) {
      await bookmarkApi.addBookmark(userId, _id);
    } else {
      await bookmarkApi.deleteBookmark(bookmarkId);
    }

    updatePersonalBookmarks(userId);
  };

  const togglePlanner = async () => {
    if (!isLoggedIn) {
      triggerRequireLoginMessage();
      return;
    }

    if (!plannedModId) {
      setAddPlannedModModalVisibility(true);
    } else {
      await plannedModApi.removePlannedMod(plannedModId);
      updatedPersonalPlannedModules(userId);
    }
  };

  const toggleAddRatingsModal = () => {
    if (!isLoggedIn) {
      triggerRequireLoginMessage();
      return;
    }

    if (reviewByUser) {
      message.error(
        "You have posted a Review before. Edit your Review instead!"
      );
      return;
    }

    setAddRatingsModalVisibility(true);
  };

  const toggleAddReviewModal = () => {
    if (!isLoggedIn) {
      triggerRequireLoginMessage();
      return;
    }
    setAddReviewModalVisibility(true);
  };

  const toggleLike = async () => {
    if (!isLoggedIn) {
      triggerRequireLoginMessage();
      return;
    }

    if (likeReactionId) {
      await reactionApi.deleteReaction(likeReactionId);
    } else {
      await reactionApi.addReaction("mod", module._id, userId, "like");
    }
    fetchIsLikedByUser();
    updateModule();
  };

  return (
    <div style={styles.container}>
      <div style={styles.moduleMeta}>
        <div style={styles.moduleInformation}>
          <div style={styles.moduleCode}>{code}</div>
          <div style={styles.moduleSmallDetailsColumn}>
            <ModuleSmallDetail
              Icon={UniversityIcon}
              text={`University: ${university ?? "-"}`}
              iconStyle={styles.iconStyle}
            />
            <ModuleSmallDetail
              Icon={HourGlassHalfFilledIcon}
              text={`Semester(s) offered: ${semester.sort().join(", ") || "-"}`}
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
              Icon={CheckboxOutlinedIcon}
              text={`Pre-reqs: ${prereqs.join(", ") || "None"}`}
              iconStyle={styles.iconStyle}
            />
            <ModuleSmallDetail
              Icon={LayerGroupIcon}
              text={`Difficulty: ${
                difficulty.toFixed(1) == "0.0" ? "-" : difficulty.toFixed(1)
              }/5`}
              iconStyle={styles.iconStyle}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignContent: "center",
            height: "100%",
            fontSize: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "10px 10px 10px 0px",
              width: "100%",
              color: "#838383",
            }}
          >
            <div style={{ marginRight: 10 }}>
              <LikeFilledIcon
                style={{
                  height: 20,
                  color: codeBlue,
                  margin: "0px 10px",
                  position: "relative",
                  bottom: -2,
                }}
              />
              {`${module.reaction?.like?.count ?? 0}`}
            </div>
            <div>
              <StarFilledIcon
                style={{
                  height: 20,
                  color: ratingsYellow,
                  margin: "0px 10px",
                  position: "relative",
                  bottom: -2,
                }}
              />
              {`${star.toFixed(1)}`}
            </div>
          </div>

          <div style={styles.actionsBar}>
            <Button onClick={toggleLike}>
              {likeReactionId ? (
                <LikeFilledIcon
                  style={{
                    ...styles.actionIcon,
                    color: codeBlue,
                    fontSize: 25,
                  }}
                />
              ) : (
                <LikeOutlinedIcon
                  style={{
                    ...styles.actionIcon,
                    color: codeBlue,
                    fontSize: 25,
                  }}
                />
              )}
            </Button>
            <Button onClick={togglePlanner}>
              {plannedModId ? (
                <BookFilled
                  style={{
                    ...styles.actionIcon,
                    color: "#76CCB7",
                    fontSize: 25,
                  }}
                />
              ) : (
                <BookOutlined
                  style={{
                    ...styles.actionIcon,
                    color: "#76CCB7",
                    fontSize: 25,
                  }}
                />
              )}
            </Button>
            <Button onClick={toggleBookmark}>
              {bookmarkId ? (
                <BookmarkFilledIcon
                  style={{ ...styles.actionIcon, color: "#289FA7" }}
                />
              ) : (
                <BookmarkOutlinedIcon
                  style={{ ...styles.actionIcon, color: "#289FA7" }}
                />
              )}
            </Button>
            <Button onClick={toggleAddRatingsModal}>
              <StarOutlinedIcon
                style={{ ...styles.actionIcon, color: ratingsYellow }}
              />
            </Button>
            <Button onClick={toggleAddReviewModal}>
              {reviewByUser ? (
                <PencilFilledIcon
                  style={{ ...styles.actionIcon, width: 25, fill: reviewBlue }}
                />
              ) : (
                <PencilOutlinedIcon
                  style={{ ...styles.actionIcon, width: 25, fill: reviewBlue }}
                />
              )}
            </Button>
          </div>
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
    </div>
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
    color: "#B9B9B9",
  },
};

export default ModuleInformation;
