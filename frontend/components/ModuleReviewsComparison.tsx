import { Review } from "../types";

import ReviewList from "./ReviewList";

interface ModuleReviewsComparisonProps {
  firstModuleReviews: Review[],
  secondModuleReviews: Review[]
}

const ModuleReviewsComparison: React.FC<ModuleReviewsComparisonProps> = ({ firstModuleReviews, secondModuleReviews }) => {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.reviewsContainer, borderWidth: "0px 1px 0px 0px" }}>
        <ReviewList reviews={firstModuleReviews} showActions={false} updateReviews={()=>{}} />
      </div>
      <div style={{ ...styles.reviewsContainer, borderWidth: "0px 0px 0px 1px" }}>
        <ReviewList reviews={secondModuleReviews} showActions={false} updateReviews={()=>{}}/>
      </div>
    </div >
  )
}

const styles = {
  container: {
    display: "flex",
  },
  reviewsContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#CFCFCF",
    padding: 20
  }
}

export default ModuleReviewsComparison;