import { Review } from "../types";

import ReviewCard from "./ReviewCard";

interface ReviewListProps {
  reviews: Review[]
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  const renderReviews = () => reviews.map(review => {
    return <ReviewCard review={review} />
  })

  return (
    <>{renderReviews()}</>
  )
}

export default ReviewList;