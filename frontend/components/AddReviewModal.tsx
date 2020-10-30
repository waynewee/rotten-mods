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
  reviewByUser: Review;
}

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const yearShortform = currentYear % 2000; // eg. 2021 => 21
const currentSemester = currentMonth < 6 ? 2 : 1;
const currentAYSecondYear = currentSemester === 1 ? yearShortform + 1 : yearShortform;
const yearMinusOne = currentAYSecondYear - 1;

const initialReviewState = {
  text: "",
  rating: {
    difficulty: 0,
    star: 0
  },
  workload: 10,
  semesterTaken: 1,
  acadYearTaken: `${yearMinusOne}/${currentAYSecondYear}`
}

const AddReviewModal: React.FC<AddReviewModalProps> = ({
  code,
  modId,
  updateReviews,
  isModalVisible,
  setModalVisibility,
  reviewByUser
}) => {
  const initialReview = reviewByUser ?? initialReviewState;

  const [text, setText] = useState(initialReview.text);
  const [difficulty, setDifficulty] = useState(initialReview.rating?.difficulty);
  const [ratings, setRatings] = useState(initialReview.rating?.star);
  const [workload, setWorkload] = useState(initialReview.workload);
  const [semester, setSemester] = useState(initialReview.semesterTaken);
  const [year, setYear] = useState(initialReview.acadYearTaken);
  const [submitText, setSubmitText] = useState("Submit");
  const [submitColor, setSubmitColor] = useState(submitBlue);
  const userId = useSelector(state => state.auth.user?._id);

  const onSubmit = async () => {
    if (!validateForm()) {
      setSubmitText("You have forgotten to fill in at least one of the fields. Once done click this button!");
      setSubmitColor(crossRed);
      return;
    }

    const reviewToSubmit = {
      text,
      semesterTaken: semester,
      acadYearTaken: year as string,
      workload
    }

    if (reviewByUser) {
      const reviewPromise = await reviewApi.updateReviewOfModule(reviewToSubmit, modId, userId, reviewByUser._id);
      // TODO: Wait for implementation of PUT Rating API
      // const difficultyPromise = reviewApi.updateRatingOfModule(difficulty, "difficulty", userId, modId, "mod");
      // const starPromise = reviewApi.updateRatingOfModule(ratings, "star", userId, modId, "mod");

      // await Promise.all([reviewPromise, difficultyPromise, starPromise]);
    } else {
      const reviewPromise = reviewApi.addReviewOfModule(reviewToSubmit, modId, userId);
      const difficultyPromise = reviewApi.addRating(difficulty, "difficulty", userId, modId, "mod");
      const starPromise = reviewApi.addRating(ratings, "star", userId, modId, "mod");

      await Promise.all([reviewPromise, difficultyPromise, starPromise]);
    }

    setModalVisibility(false);
    updateReviews();
    resetState();
  }

  const validateForm = () => ratings !== 0 && difficulty !== 0 && text !== "";

  const resetState = () => {
    setText("");
    setDifficulty(1);
    setRatings(1);
    setWorkload(10);
    setSemester(1);
    setYear(`${yearMinusOne}/${currentAYSecondYear}`);
    setSubmitColor(submitBlue);
    setSubmitText("Submit");
  }

  const closeModal = isToClose => {
    setModalVisibility(isToClose);
    setSubmitColor(submitBlue);
    setSubmitText("Submit");
  }

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
      <FormModalItem label="Review" type="textarea" value={text} setValue={setText} />
      <FormModalItem label="Year Taken" type="annualYear" value={year} setValue={setYear} />
      <FormModalItem label="Semester Taken" type="semester" value={semester} setValue={setSemester} />
      <FormModalItem label="Difficulty" type="difficulty" value={difficulty} setValue={setDifficulty} />
      <FormModalItem label="Ratings" type="rate" value={ratings} setValue={setRatings} />
      {/* <FormModalItem label="Expected Hours" type="number" value={workload} setValue={setWorkload} /> */}
    </FormModal>
  )
}

export default AddReviewModal;