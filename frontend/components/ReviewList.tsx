import { Review } from "../types";

import ReviewCard from "./ReviewCard";

interface ReviewListProps {
  reviews: Review[];
  updateReviews: () => void;
  showActions?: boolean;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews = [], updateReviews, showActions }) => {
  const renderReviews = () => reviews.map((review, index) => {
    return <ReviewCard review={review} key={index} updateReviews={updateReviews} showActions={showActions} />
  })

  return (
    <>{renderReviews()}</>
  )
}

export default ReviewList;