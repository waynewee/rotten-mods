import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Review } from "../types";
import commentApi from "../api/comment";
import reactionApi from "../api/reaction";
import reviewApi from "../api/review";
import { triggerRequireLoginMessage, fetchRatings } from "../utils/helpers";

import AddCommentModal from "./AddCommentModal";
import Button from "./Button";
import CommentModal from "./CommentsModal";
import CommentOutlinedIcon from "../icons/CommentOutlinedIcon";
import LikeOutlinedIcon from "../icons/LikeOutlinedIcon";
import { reviewBlue, ratingsYellow } from "../styles/colors";

interface ReviewCardProps {
  review: Review;
  updateReviews: () => void;
  showActions?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  updateReviews,
  showActions = true,
}) => {
  const [isCommentsModalVisible, setCommentsModalVisibility] = useState(false);
  const [isAddCommentModalVisible, setAddCommentModalVisibility] = useState(
    false
  );
  const [comments, setComments] = useState([]);
  const [userLikeReactionId, setUserLikeReactionId] = useState("");
  const [difficulty, setDifficulty] = useState(3);
  const [star, setStar] = useState(3);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userId = useSelector((state) => state.auth.user?._id);

  const {
    user,
    text,
    acadYearTaken,
    semesterTaken,
    reaction,
    _id,
    ratingIds,
  } = review;
  const name = user?.name;
  const like = reaction?.like?.count ?? 0;
  
  useEffect(() => {
    fetchRatings(ratingIds, setStar, setDifficulty);
    fetchComments();
    checkIsLikedByUser();
  }, []);

  const fetchComments = async () => {
    const fetchedComments = await commentApi.getCommentsOfReview(_id);
    setComments(fetchedComments);
  };

  const checkIsLikedByUser = async () => {
    try {
      const likeReaction = await reactionApi.getReaction(
        "review",
        _id,
        userId,
        "like"
      );
      setUserLikeReactionId(likeReaction._id);
    } catch (err) {
      setUserLikeReactionId("");
    }
  };

  const onLikeReview = async () => {
    if (!isLoggedIn) {
      triggerRequireLoginMessage();
      return;
    }

    if (!userLikeReactionId) {
      await reactionApi.addReaction("review", _id, userId, "like");
      updateReviews();
      checkIsLikedByUser();
    } else {
      await reactionApi.deleteReaction(userLikeReactionId);
      updateReviews();
      checkIsLikedByUser();
    }
  };

  const toggleCommentModalVisibility = () => {
    if (!isLoggedIn) {
      triggerRequireLoginMessage();
    } else {
      setAddCommentModalVisibility(true);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.userInformation}>
          <span>{name}</span>
          <span style={styles.divider}>|</span>
          <span>
            AY{acadYearTaken}, Sem {semesterTaken}
          </span>
          <span style={styles.divider}>|</span>
          <span>Difficulty: {difficulty.toFixed(1)}</span>
          <span style={styles.divider}>|</span>
          <span>Rating: {star.toFixed(1)}</span>
        </div>
        {showActions && (
          <div style={styles.actionsBar}>
            <div style={styles.action}>
              <Button onClick={onLikeReview}>
                <LikeOutlinedIcon
                  style={{
                    ...styles.icon,
                    color: userLikeReactionId ? ratingsYellow : "#fff",
                  }}
                />
              </Button>
              <span>{`${like} Likes`}</span>
            </div>
            <span style={{ margin: "0px 10px" }}>|</span>
            <div style={styles.action}>
              <Button onClick={toggleCommentModalVisibility}>
                <CommentOutlinedIcon style={styles.icon} />
              </Button>
              <Button onClick={() => setCommentsModalVisibility(true)}>
                {`${comments.length} Comments`}
              </Button>
            </div>
          </div>
        )}
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
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  userInformation: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
  },
  actionsBar: {
    display: "flex",
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
    textAlign: "justify" as "justify",
  },
  divider: {
    margin: "0px 10px",
  },
};

export default ReviewCard;
