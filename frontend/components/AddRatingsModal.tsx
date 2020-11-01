import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ModalState } from "../types";
import reviewApi from "../api/review";

import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";
import { reviewBlue, submitBlue, crossRed } from "../styles/colors";

interface AddRatingsModalProps extends ModalState {
  code: string;
  modId: string;
  ratingsByUser?: { value: number; _id: string };
  updateModule: () => void;
}

const AddRatingsModal: React.FC<AddRatingsModalProps> = ({
  code,
  modId,
  ratingsByUser,
  isModalVisible,
  setModalVisibility,
  updateModule,
}) => {
  const userId = useSelector((state) => state.auth.user?._id);
  const [ratings, setRatings] = useState(ratingsByUser?.value ?? 3);
  const [submitText, setSubmitText] = useState("Submit");
  const [submitColor, setSubmitColor] = useState(submitBlue);

  useEffect(() => {
    setRatings(ratingsByUser?.value ?? 0);
  }, [ratingsByUser]);

  const onSubmit = async () => {
    if (!validateForm()) {
      setSubmitText(
        "You did not rate the module. Once done click this button!"
      );
      setSubmitColor(crossRed);
      return;
    }

    if (ratingsByUser) {
      await reviewApi.updateRating(
        ratings,
        "star",
        userId,
        modId,
        "mod",
        ratingsByUser._id
      );
    } else {
      await reviewApi.addRating(ratings, "star", userId, modId, "mod");
    }

    updateModule();
    setModalVisibility(false);
  };

  const validateForm = (): boolean => ratings !== 0;

  const closeModal = (isToClose) => {
    setModalVisibility(isToClose);
    setSubmitColor(submitBlue);
    setSubmitText("Submit");
  };

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
      <FormModalItem
        label="Ratings"
        type="rate"
        value={ratings}
        setValue={setRatings}
      />
    </FormModal>
  );
};

export default AddRatingsModal;
