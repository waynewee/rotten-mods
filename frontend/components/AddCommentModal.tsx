import { useState } from "react";
import { ModalState } from "../types";
import commentApi from "../api/comment";

import FormModal from "./FormModal"
import FormModalItem from "./FormModalItem";

interface AddCommentModalProps extends ModalState {
  reviewId: string;
  fetchComments: () => void;
}

const AddCommentModal: React.FC<AddCommentModalProps> = ({ isModalVisible, setModalVisibility, reviewId, fetchComments }) => {
  const userId = "5f93fe299a31d12bf74a3101"; // TODO: Change to useSelector

  const [comment, setComment] = useState("");

  const onSubmit = async () => {
    await commentApi.addComment(userId, comment, reviewId);
    setComment("");
    setModalVisibility(false);
    fetchComments();
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