import { useState } from "react";
import { useSelector } from "react-redux";
import { ModalState } from "../types";
import reviewApi from "../api/review";

import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";
import { reviewBlue, submitBlue, crossRed } from "../styles/colors";

interface AddReviewModalProps extends ModalState {
  code: string;
  modId: string;
  updateReviews: () => void;
}

const AddReviewModal: React.FC<AddReviewModalProps> = ({ code, modId, updateReviews, isModalVisible, setModalVisibility }) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const yearShortform = currentYear % 2000; // eg. 2021 => 21
  const currentSemester = currentMonth < 6 ? 2 : 1;
  const currentAYSecondYear = currentSemester === 1 ? yearShortform + 1 : yearShortform;
  const yearMinusOne = currentAYSecondYear - 1;

  const [text, setText] = useState("");
  const [difficulty, setDifficulty] = useState(0);
  const [ratings, setRatings] = useState(0);
  const [workload, setWorkload] = useState(10);
  const [semester, setSemester] = useState(1);
  const [year, setYear] = useState(`${yearMinusOne}/${currentAYSecondYear}`);
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
      acadYearTaken: year,
      workload
    }

    const reviewPromise = reviewApi.addReviewOfModule(reviewToSubmit, modId, userId);
    const difficultyPromise = reviewApi.addRatingOfModule(difficulty, "difficulty", userId, modId, "mod");
    const starPromise = reviewApi.addRatingOfModule(ratings, "star", userId, modId, "mod");

    await Promise.all([reviewPromise, difficultyPromise, starPromise]);
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
      title="Add Review"
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
      {/* <FormModalItem label="Expected Hours" type="hours" value={workload} setValue={setWorkload} /> */}
    </FormModal>
  )
}

export default AddReviewModal;