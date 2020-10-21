import { useState } from "react";
import { ModalState } from "../types";

import FormModal from "./FormModal"
import FormModalItem from "./FormModalItem";

interface AddCommentModalProps extends ModalState {
  reviewId: string
}

const AddCommentModal: React.FC<AddCommentModalProps> = ({ isModalVisible, setModalVisibility, reviewId }) => {
  const [comment, setComment] = useState("");

  const onSubmit = () => {

  }

  return (
    <FormModal
      title="Add Comment"
      backgroundColor="#69BBCD"
      isModalVisible={isModalVisible}
      setModalVisibility={setModalVisibility}
      submitColor="#3E59B9"
      onSubmit={onSubmit}
    >
      <FormModalItem label="Comment" type="textarea" value={comment} setValue={setComment} />
    </FormModal>
  )
}

export default AddCommentModal;