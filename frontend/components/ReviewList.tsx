import { Review } from "../types";

import ReviewCard from "./ReviewCard";

interface ReviewListProps {
  reviews: Review[]
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews = [] }) => {
  const renderReviews = () => reviews.map((review, index) => {
    return <ReviewCard review={review} key={index} />
  })

  return (
    <>{renderReviews()}</>
  )
}

export default ReviewList;