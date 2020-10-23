import { Comment } from "../types";

import { commentBlue } from "../styles/colors";

interface CommentCardProps {
  comment: Comment
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        {comment.userName}
      </div>
      <div style={styles.comment}>
        {comment.comment}
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: commentBlue,
    borderRadius: 10,
    width: "100%",
    padding: 15,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    marginTop: 20,
  },
  header: {
    marginBottom: 10
  },
  comment: {
  }
}

export default CommentCard;