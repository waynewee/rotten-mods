import { useState } from "react";
import { ModalState } from "../types";
import reviewApi from "../api/review";

import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";
import { reviewBlue, submitBlue, crossRed } from "../styles/colors";

interface AddRatingsModalProps extends ModalState {
  code: string;
  modId: string;
}

const AddRatingsModal: React.FC<AddRatingsModalProps> = ({ code, modId, isModalVisible, setModalVisibility }) => {
  const userId = "5f93fe299a31d12bf74a3101"; // TODO: Change to useSelector

  const [ratings, setRatings] = useState(0);
  const [submitText, setSubmitText] = useState("Submit");
  const [submitColor, setSubmitColor] = useState(submitBlue);

  const onSubmit = async () => {
    if (!validateForm()) {
      setSubmitText("You did not rate the module. Once done click this button!");
      setSubmitColor(crossRed);
      return;
    }

    await reviewApi.addRatingOfModule(ratings, "star", userId, modId, "mod");
    setModalVisibility(false);
  }

  const validateForm = (): boolean => ratings !== 0;

  const closeModal = isToClose => {
    setModalVisibility(isToClose);
    setSubmitColor(submitBlue);
    setSubmitText("Submit");
  }

  return (
    <FormModal
      backgroundColor={reviewBlue}
      submitColor={submitColor}
      title="Rate the Module"
      isModalVisible={isModalVisible}
      setModalVisibility={closeModal}
      onSubmit={onSubmit}
      submitText={submitText}
    >
      <FormModalItem label="Module Code" type="text" value={code} />
      <FormModalItem label="Ratings" type="rate" value={ratings} setValue={setRatings} />
    </FormModal>
  )
}

export default AddRatingsModal;