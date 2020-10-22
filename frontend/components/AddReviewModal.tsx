import { useState } from "react";
import { ModalState } from "../types";

import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";

interface AddReviewModalProps extends ModalState {
  code: string;
}

const AddReviewModal: React.FC<AddReviewModalProps> = ({ code, isModalVisible, setModalVisibility }) => {
  const [review, setReview] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [ratings, setRatings] = useState(1);
  const [expectedHours, setExpectedHours] = useState(10);
  const [semester, setSemester] = useState(1);

  const onSubmit = () => {

  }

  return (
    <FormModal
      backgroundColor="#7497CC"
      submitColor="#3E59B9"
      title="Add Review"
      isModalVisible={isModalVisible}
      setModalVisibility={setModalVisibility}
      onSubmit={onSubmit}
    >
      <FormModalItem label="Module Code" type="text" value={code} />
      <FormModalItem label="Review" type="textarea" value={review} setValue={setReview} />
      <FormModalItem label="Semester Taken" type="semester" value={semester} setValue={setSemester} />
      <FormModalItem label="Difficulty" type="difficulty" value={difficulty} setValue={setDifficulty} />
      <FormModalItem label="Ratings" type="rate" value={ratings} setValue={setRatings} />
      <FormModalItem label="Expected Hours" type="hours" value={expectedHours} setValue={setExpectedHours} />
    </FormModal>
  )
}

export default AddReviewModal;