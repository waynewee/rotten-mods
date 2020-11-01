import { useState } from "react";
import { useSelector } from "react-redux";
import { ModalState, Review } from "../types";
import reviewApi from "../api/review";

import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";
import { reviewBlue, submitBlue, crossRed } from "../styles/colors";

interface AddReviewModalProps extends ModalState {
  code: string;
  modId: string;
  updateReviews: () => void;
  updateModule: () => void;
  reviewByUser: Review;
  ratingsByUser: { _id: string };
}

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const yearShortform = currentYear % 2000; // eg. 2021 => 21
const currentSemester = currentMonth < 6 ? 2 : 1;
const currentAYSecondYear =
  currentSemester === 1 ? yearShortform + 1 : yearShortform;
const yearMinusOne = currentAYSecondYear - 1;

const initialReviewState = {
  text: "",
  rating: {
    difficulty: 3,
    star: 3,
  },
  workload: 10,
  semesterTaken: 1,
  acadYearTaken: `${yearMinusOne}/${currentAYSecondYear}`,
};

const AddReviewModal: React.FC<AddReviewModalProps> = ({
  code,
  modId,
  updateReviews,
  updateModule,
  isModalVisible,
  setModalVisibility,
  reviewByUser,
  ratingsByUser,
}) => {
  const initialReview = reviewByUser ?? initialReviewState;

  const [text, setText] = useState(initialReview.text);
  const [difficulty, setDifficulty] = useState(
    initialReview.rating?.difficulty
  );
  const [ratings, setRatings] = useState(initialReview.rating?.star);
  const [semester, setSemester] = useState(initialReview.semesterTaken);
  const [year, setYear] = useState(initialReview.acadYearTaken);
  const [submitText, setSubmitText] = useState("Submit");
  const [submitColor, setSubmitColor] = useState(submitBlue);
  const userId = useSelector((state) => state.auth.user?._id);

  const onSubmit = async () => {
    if (!validateForm()) {
      setSubmitText(
        "You have forgotten to fill in at least one of the fields. Once done click this button!"
      );
      setSubmitColor(crossRed);
      return;
    }

    const reviewToSubmit = {
      text,
      semesterTaken: semester,
      acadYearTaken: year as string,
    };

    if (reviewByUser) {
      const reviewPromise = await reviewApi.updateReviewOfModule(
        reviewToSubmit,
        modId,
        userId,
        reviewByUser._id
      );
      const difficultyPromise = reviewApi.updateRating(
        difficulty,
        "difficulty",
        userId,
        modId,
        "mod",
        ratingsByUser._id //TODO: change to difficulty rating _id
      );
      const starPromise = reviewApi.updateRating(
        ratings,
        "star",
        userId,
        modId,
        "mod",
        ratingsByUser._id
      );

      await Promise.all([reviewPromise, difficultyPromise, starPromise]);
    } else {
      const reviewPromise = reviewApi.addReviewOfModule(
        reviewToSubmit,
        modId,
        userId
      );
      const difficultyPromise = reviewApi.addRating(
        difficulty,
        "difficulty",
        userId,
        modId,
        "mod"
      );
      const starPromise = ratingsByUser
        ? reviewApi.updateRating(
            ratings,
            "star",
            userId,
            modId,
            "mod",
            ratingsByUser._id
          )
        : reviewApi.addRating(ratings, "star", userId, modId, "mod");

      await Promise.all([reviewPromise, difficultyPromise, starPromise]);
    }

    setModalVisibility(false);
    updateReviews();
    updateModule();
  };

  const validateForm = () => ratings !== 0 && difficulty !== 0 && text !== "";

  const closeModal = (isToClose) => {
    setModalVisibility(isToClose);
    setSubmitColor(submitBlue);
    setSubmitText("Submit");
  };

  return (
    <FormModal
      backgroundColor={reviewBlue}
      submitColor={submitColor}
      title={`${reviewByUser ? "Edit" : "Add"} Review`}
      isModalVisible={isModalVisible}
      setModalVisibility={closeModal}
      onSubmit={onSubmit}
      submitText={submitText}
    >
      <FormModalItem label="Module Code" type="text" value={code} />
      <FormModalItem
        label="Review"
        type="textarea"
        value={text}
        setValue={setText}
      />
      <FormModalItem
        label="Year Taken"
        type="annualYear"
        value={year}
        setValue={setYear}
      />
      <FormModalItem
        label="Semester Taken"
        type="semester"
        value={semester}
        setValue={setSemester}
      />
      <FormModalItem
        label="Difficulty"
        type="difficulty"
        value={difficulty}
        setValue={setDifficulty}
      />
      <FormModalItem
        label="Ratings"
        type="rate"
        value={ratings}
        setValue={setRatings}
      />
    </FormModal>
  );
};

export default AddReviewModal;
