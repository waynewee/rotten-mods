import { useEffect, useState } from "react";
import { Comment } from "../types";
import userApi from "../api/user";

import { commentBlue } from "../styles/colors";

interface CommentCardProps {
  comment: Comment
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    getUserName();
  }, [])

  const getUserName = async () => {
    const user = await userApi.getUser(comment.userId);
    setName(user.name);
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        {name}
      </div>
      <div style={styles.comment}>
        {comment.text}
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