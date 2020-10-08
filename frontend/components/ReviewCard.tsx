import { Review } from "../types";

import LikeOutlinedIcon from "../icons/LikeOutlinedIcon";
import CommentOutlinedIcon from "../icons/CommentOutlinedIcon";

interface ReviewCardProps {
  review: Review
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const { userName, userDisplayPicture, likes, comments, userReview } = review;
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.userInformation}>
          <div>Img</div>
          <div>{userName}</div>
        </div>
        <div style={styles.actionsBar}>
          <div style={styles.action}>
            <LikeOutlinedIcon style={styles.icon} />
            <span>{`${likes} Likes`}</span>
          </div>
          <span style={{ margin: "0px 10px" }}>|</span>
          <div style={styles.action}>
            <CommentOutlinedIcon style={styles.icon} />
            <span>{`${comments.length} Comments`}</span>
          </div>
        </div>
      </div>
      <div style={styles.review}>
        {userReview}
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: 30,
    backgroundColor: "#7497CC",
    color: "#fff",
    borderRadius: 15,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    marginBottom: 15
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  userInformation: {
    display: "flex",
  },
  actionsBar: {
    display: "flex",
  },
  action: {
    display: "flex",
    justifyContent: "center"
  },
  icon: {
    height: 20,
    marginRight: 10
  },
  review: {
    marginTop: 10
  }
}

export default ReviewCard;