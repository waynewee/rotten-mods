import { useState } from "react";
import { useSelector } from "react-redux";
import { ModalState } from "../types";
import commentApi from "../api/comment";

import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";
import { submitBlue, crossRed, commentBlue } from "../styles/colors";
import { message } from "antd";

interface AddCommentModalProps extends ModalState {
  reviewId: string;
  fetchComments: () => void;
}

const AddCommentModal: React.FC<AddCommentModalProps> = ({
  isModalVisible,
  setModalVisibility,
  reviewId,
  fetchComments,
}) => {
  const [comment, setComment] = useState("");
  const [submitText, setSubmitText] = useState("Submit");
  const [submitColor, setSubmitColor] = useState(submitBlue);
  const userId = useSelector((state) => state.auth.user?._id);

  const onSubmit = async () => {
    if (!validateForm()) {
      message.error("The comment field cannot be empty!");
      return;
    }

    await commentApi.addComment(userId, comment, reviewId);
    setComment("");
    setSubmitText("Submit");
    setSubmitColor(submitBlue);
    setModalVisibility(false);
    fetchComments();
  };

  const validateForm = () => comment.trim() !== "";

  const closeModal = (isToClose) => {
    setModalVisibility(isToClose);
    setSubmitColor(submitBlue);
    setSubmitText("Submit");
  };

  return (
    <FormModal
      title="Add Comment"
      backgroundColor={commentBlue}
      isModalVisible={isModalVisible}
      setModalVisibility={closeModal}
      submitColor={submitColor}
      onSubmit={onSubmit}
      submitText={submitText}
    >
      <FormModalItem
        label="Comment"
        type="textarea"
        value={comment}
        setValue={setComment}
      />
    </FormModal>
  );
};

export default AddCommentModal;
