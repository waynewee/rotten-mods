import { Comment, ModalState } from "../types";
import cssStyle from "../styles/styles.module.css";

import CommentCard from "./CommentCard";
import CrossIcon from "../icons/CrossIcon";
import Modal from "react-modal";
import { reviewBlue } from "../styles/colors";

interface CommentsModalProps extends ModalState {
  comments: Comment[];
}

const CommentsModal: React.FC<CommentsModalProps> = ({
  comments,
  isModalVisible,
  setModalVisibility,
}) => {
  const renderComments = () =>
    comments.map((comment, index) => {
      return <CommentCard comment={comment} key={index} />;
    });

  const renderNoCommentsFeedback = () => (
    <>No comments yet. You can be the first!</>
  );

  return (
    <Modal
      isOpen={isModalVisible}
      style={{
        overlay: styles.overlay,
        content: styles.content,
      }}
    >
      <div style={styles.header}>
        <span>Comments</span>
        <div onClick={() => setModalVisibility(false)}>
          <CrossIcon style={styles.closeButton} />
        </div>
      </div>
      <div
        className={cssStyle.commentModal}
        style={{
          maxHeight: "70vh",
          overflowY: "scroll",
          padding: 10,
        }}
      >
        {comments.length === 0 ? renderNoCommentsFeedback() : renderComments()}
      </div>
    </Modal>
  );
};

const styles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(232, 232, 232, 0.5)",
  },
  content: {
    position: "static",
    width: 600,
    color: "#fff",
    borderRadius: 15,
    borderWidth: 0,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    padding: "30px 30px 20px 30px",
    backgroundColor: reviewBlue,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 25,
    marginBottom: 10,
    padding: "0px 10px",
  },
  closeButton: {
    color: "#fff",
    transform: "scale(0.8)",
    cursor: "pointer",
  },
};

export default CommentsModal;
