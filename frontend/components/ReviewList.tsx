import { Review } from "../types";

import ReviewCard from "./ReviewCard";

interface ReviewListProps {
  reviews: Review[];
  updateReviews: () => void;
  showActions?: boolean;
}

const ReviewList: React.FC<ReviewListProps> = ({
  reviews = [],
  updateReviews,
  showActions,
}) => {
  const renderReviews = () =>
    reviews.map((review, index) => {
      return (
        <ReviewCard
          review={review}
          key={index}
          updateReviews={updateReviews}
          showActions={showActions}
        />
      );
    });

  return (
    <>
      {reviews.length !== 0 ? (
        renderReviews()
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          There are no reviews yet!
        </div>
      )}
    </>
  );
};

export default ReviewList;
