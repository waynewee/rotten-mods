import { useState } from "react";
import { ModalState } from "../types";
import reviewApi from "../api/review";

import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";
import { reviewBlue } from "../styles/colors";

interface AddReviewModalProps extends ModalState {
  code: string;
  modId: string;
}

const AddReviewModal: React.FC<AddReviewModalProps> = ({ code, modId, isModalVisible, setModalVisibility }) => {
  const userId = "5f90feff1821cd195259020f";
  // const userId = useSelector(state => state.auth.id) // TODO: wait for implementation of user redux state

  const [text, setText] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [ratings, setRatings] = useState(1);
  const [workload, setWorkload] = useState(10);
  const [semester, setSemester] = useState(1);
  const [year, setYear] = useState((new Date()).getFullYear() + 1);

  const onSubmit = async () => {
    const reviewToSubmit = {
      text,
      semesterTaken: semester,
      yearTaken: year,
      workload
    }
    const reviewPromise = reviewApi.addReviewOfModule(reviewToSubmit, modId, userId);
    const difficultyPromise = reviewApi.addRatingOfModule(difficulty, "difficulty", userId, modId);
    const starPromise = reviewApi.addRatingOfModule(ratings, "star", userId, modId);

    await Promise.all([reviewPromise, difficultyPromise, starPromise]);
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
      <FormModalItem label="Expected Hours" type="hours" value={workload} setValue={setWorkload} />
    </FormModal>
  )
}

export default AddReviewModal;