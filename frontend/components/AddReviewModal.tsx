import { useState } from "react";
import { ModalState } from "../types";
import reviewApi from "../api/review";

import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";
import { reviewBlue } from "../styles/colors";

interface AddReviewModalProps extends ModalState {
  code: string;
  modId: string;
  updateReviews: () => void;
}

const AddReviewModal: React.FC<AddReviewModalProps> = ({ code, modId, updateReviews, isModalVisible, setModalVisibility }) => {
  const userId = "5f93fe299a31d12bf74a3101";
  // const userId = useSelector(state => state.auth.id) // TODO: wait for implementation of user redux state
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const yearShortform = currentYear % 2000; // eg. 2020 => 20
  const currentSemester = currentMonth < 6 ? 2 : 1;
  const currentAYSecondYear = currentSemester === 1 ? yearShortform + 1 : yearShortform;
  const yearMinusOne = currentAYSecondYear - 1;

  const [text, setText] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [ratings, setRatings] = useState(1);
  const [workload, setWorkload] = useState(10);
  const [semester, setSemester] = useState(1);
  const [year, setYear] = useState(`${yearMinusOne}/${currentAYSecondYear}`);

  const onSubmit = async () => {
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

  const resetState = () => {
    setText("");
    setDifficulty(1);
    setRatings(1);
    setWorkload(10);
    setSemester(1);
    setYear(`${yearMinusOne}/${currentAYSecondYear}`);
  }

  return (
    <FormModal
      backgroundColor={reviewBlue}
      submitColor="#3E59B9"
      title="Add Review"
      isModalVisible={isModalVisible}
      setModalVisibility={setModalVisibility}
      onSubmit={onSubmit}
    >
      <FormModalItem label="Module Code" type="text" value={code} />
      <FormModalItem label="Review" type="textarea" value={text} setValue={setText} />
      <FormModalItem label="Year Taken" type="year" value={year} setValue={setYear} />
      <FormModalItem label="Semester Taken" type="semester" value={semester} setValue={setSemester} />
      <FormModalItem label="Difficulty" type="difficulty" value={difficulty} setValue={setDifficulty} />
      <FormModalItem label="Ratings" type="rate" value={ratings} setValue={setRatings} />
      {/* <FormModalItem label="Expected Hours" type="hours" value={workload} setValue={setWorkload} /> */}
    </FormModal>
  )
}

export default AddReviewModal;