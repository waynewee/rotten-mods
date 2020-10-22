import { useState } from "react";
import { ModalState } from "../types";
import reviewApi from "../api/review";

import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";
import { reviewBlue } from "../styles/colors";

interface AddRatingsModalProps extends ModalState {
  code: string;
  modId: string;
}

const AddRatingsModal: React.FC<AddRatingsModalProps> = ({ code, modId, isModalVisible, setModalVisibility }) => {

  const [text, setText] = useState("");
  const [ratings, setRatings] = useState(1);

  const onSubmit = () => {

  }

  return (
    <FormModal
      backgroundColor={reviewBlue}
      submitColor="#3E59B9"
      title="Rate the Module"
      isModalVisible={isModalVisible}
      setModalVisibility={setModalVisibility}
      onSubmit={onSubmit}
    >
      <FormModalItem label="Module Code" type="text" value={code} />
      <FormModalItem label="Ratings" type="rate" value={ratings} setValue={setRatings} />
    </FormModal>
  )
}

export default AddRatingsModal;