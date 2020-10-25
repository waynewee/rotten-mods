import { useState } from "react";
import { Comment, Review } from "../types";

import AddCommentModal from "./AddCommentModal";
import Button from "./Button";
import CommentModal from "./CommentsModal";
import CommentOutlinedIcon from "../icons/CommentOutlinedIcon";
import LikeOutlinedIcon from "../icons/LikeOutlinedIcon";
import { reviewBlue } from "../styles/colors";

interface ReviewCardProps {
  review: Review;
  comments: Comment[];
}

const dummyComments: Comment[] = [
  {
    userName: "Chester Sim",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibend"
  },
  {
    userName: "Jeremy Low",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibend"
  },
  {
    userName: "Chester Sim",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibend"
  },
  {
    userName: "Jeremy Low",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibend"
  }
]

const ReviewCard: React.FC<ReviewCardProps> = ({ review, comments = dummyComments }) => {
  const [isCommentsModalVisible, setCommentsModalVisibility] = useState(false);
  const [isAddCommentModalVisible, setAddCommentModalVisibility] = useState(false);

  const { userName, likes = 0, text, _id } = review;

  const onLikeReview = () => {

  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.userInformation}>
          <div>Img</div>
          <div>{userName}</div>
        </div>
        <div style={styles.actionsBar}>
          <div style={styles.action}>
            <Button onClick={onLikeReview}>
              <LikeOutlinedIcon style={styles.icon} />
            </Button>
            <span>{`${likes} Likes`}</span>
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
        </div>
      </div>
      <div style={styles.review}>{text}</div>
      <AddCommentModal
        reviewId={""}
        isModalVisible={isAddCommentModalVisible}
        setModalVisibility={setAddCommentModalVisibility}
      />
      <CommentModal
        comments={dummyComments}
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
    textAlign: "justify" as "justify"
  },
};

export default ReviewCard;
