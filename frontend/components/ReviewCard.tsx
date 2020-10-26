import { useState, useEffect } from "react";
import { Review } from "../types";
import eventApi from "../api/event";
import commentApi from "../api/comment";

import AddCommentModal from "./AddCommentModal";
import Button from "./Button";
import CommentModal from "./CommentsModal";
import CommentOutlinedIcon from "../icons/CommentOutlinedIcon";
import LikeOutlinedIcon from "../icons/LikeOutlinedIcon";
import { reviewBlue } from "../styles/colors";

interface ReviewCardProps {
  review: Review & { user: { name: string, _id: string } };
  updateReviews: () => void;
  showActions?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, updateReviews, showActions = true }) => {
  const [isCommentsModalVisible, setCommentsModalVisibility] = useState(false);
  const [isAddCommentModalVisible, setAddCommentModalVisibility] = useState(false);
  const [comments, setComments] = useState([]);

  const { user, text, acadYearTaken, semesterTaken, event, _id } = review;
  const { name } = user;
  const like = event?.like?.count ?? 0;

  useEffect(() => {
    fetchComments();
  }, [])

  const fetchComments = async () => {
    const fetchedComments = await commentApi.getCommentsOfReview(review._id);
    setComments(fetchedComments);
  }

  const onLikeReview = async () => {
    // TODO: Uncomment
    // if (userId == user._id) return;

    await eventApi.addEvent(user._id, "review", _id, "like");
    updateReviews();
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.userInformation}>
          <span>{name}</span>
          <span style={styles.divider}>|</span>
          <span>AY{acadYearTaken}, Sem {semesterTaken}</span>
          <span style={styles.divider}>|</span>
          <span>Difficulty: </span>
          <span style={styles.divider}>|</span>
          <span>Rating: </span>
        </div>
        {showActions && (<div style={styles.actionsBar}>
          <div style={styles.action}>
            <Button onClick={onLikeReview}>
              <LikeOutlinedIcon style={styles.icon} />
            </Button>
            <span>{`${like} Likes`}</span>
          </div>
          <span style={{ margin: "0px 10px" }}>|</span>
          <div style={styles.action}>
            <Button onClick={() => setAddCommentModalVisibility(true)}>
              <CommentOutlinedIcon style={styles.icon} />
            </Button>
            <Button onClick={() => setCommentsModalVisibility(true)}>
              {`${comments.length} Comments`}
            </Button>
          </div>
        </div>)}
      </div>
      <div style={styles.review}>{text}</div>
      <AddCommentModal
        fetchComments={fetchComments}
        reviewId={_id}
        isModalVisible={isAddCommentModalVisible}
        setModalVisibility={setAddCommentModalVisibility}
      />
      <CommentModal
        comments={comments}
        isModalVisible={isCommentsModalVisible}
        setModalVisibility={setCommentsModalVisibility}
      />
    </div>
  );
};

const styles = {
  container: {
    padding: 30,
    backgroundColor: reviewBlue,
    color: "#fff",
    borderRadius: 15,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    marginBottom: 15,
    width: "100%"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  userInformation: {
    display: "flex",
    flexWrap: "wrap"
  },
  actionsBar: {
    display: "flex",
    flexWrap: "wrap"
  },
  action: {
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    marginRight: 10,
  },
  review: {
    marginTop: 10,
    textAlign: "justify" as "justify"
  },
  divider: {
    margin: "0px 10px"
  }
};

export default ReviewCard;
