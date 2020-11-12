import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NextPage } from "next";
import { Module, Review } from "../types";
import moduleApi from "../api/module";
import reviewApi from "../api/review";
import eventApi from "../api/event";

import AddReviewModal from "../components/AddReviewModal";
import AddRatingsModal from "../components/AddRatingsModal";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ModuleInformation from "../components/ModuleInformation";
import ReviewList from "../components/ReviewList";
import Button from "../components/Button";
import SeeMoreButton from "../components/SeeMoreButton";

interface ModuleReviewProps {
  initialModule: Module;
  reviews: Review[];
}

const compareNewest = (firstReview: Review, secondReview: Review): number => {
  const firstReviewCreatedAtDate = new Date(firstReview.createdAt);
  const secondReviewCreatedAtDate = new Date(secondReview.createdAt);
  return firstReviewCreatedAtDate < secondReviewCreatedAtDate ? 1 : -1;
};

const ModuleReviewPage: NextPage<ModuleReviewProps> = ({
  initialModule,
  reviews,
}) => {
  const [module, setModule] = useState(initialModule);
  const [reviewsList, setReviewsList] = useState(reviews);
  const [numberOfReviews, setNumberOfReviews] = useState(20);
  const [isAddReviewModalVisible, setAddReviewModalVisibility] = useState(
    false
  );
  const [isAddRatingsModalVisible, setAddRatingsModalVisibility] = useState(
    false
  );
  const [ratingsByUser, setRatingsByUser] = useState(null);
  const [currentSort, setCurrentSort] = useState("Latest");

  const userId = useSelector((state) => state.auth.user?._id);
  const reviewByUser = reviewsList.find((review) => review.userId === userId);

  useEffect(() => {
    checkIsRatedByUser();
    eventApi.addEvent(userId, "mod", module._id, "view");
  }, []);

  const updateReviews = async () => {
    const newReviews = await reviewApi.getReviewsOfModule(module._id);
    if (currentSort === "Latest") {
      newReviews.sort(compareNewest);
    } else if (currentSort === "Oldest") {
      newReviews.sort(compareOldest);
    } else if (currentSort === "Most Likes") {
      newReviews.sort(compareLikes);
    }
    setReviewsList(newReviews);
  };

  const updateModule = async () => {
    const updatedModule = await moduleApi.getModule(module._id);
    updatedModule.prereqs = module.prereqs;
    setModule(updatedModule);
  };

  const checkIsRatedByUser = async () => {
    try {
      const rating = await reviewApi.getRating(
        "mod",
        module._id,
        userId,
        "star"
      );
      setRatingsByUser(rating);
    } catch (err) {
      setRatingsByUser(null);
    }
  };

  const compareOldest = (firstReview: Review, secondReview: Review): number => {
    const firstReviewCreatedAtDate = new Date(firstReview.createdAt);
    const secondReviewCreatedAtDate = new Date(secondReview.createdAt);
    return firstReviewCreatedAtDate > secondReviewCreatedAtDate ? 1 : -1;
  };

  const compareLikes = (firstReview: Review, secondReview: Review): number => {
    const firstReviewLikes = firstReview.reaction?.like?.count ?? 0;
    const secondReviewLikes = secondReview.reaction?.like?.count ?? 0;
    return secondReviewLikes - firstReviewLikes;
  };

  const sortReviews = (compareFunction, sortType) => {
    setCurrentSort(sortType);
    const cloneReviews = reviewsList.concat([]);
    cloneReviews.sort(compareFunction);
    setReviewsList(cloneReviews);
  };

  const fetchMoreReviews = async () => {
    const moreReviews = await reviewApi.getReviewsOfModule(module._id);
    setReviewsList(moreReviews);
    setNumberOfReviews(numberOfReviews + 10);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={() => sortReviews(compareNewest, "Latest")}>
          Latest
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={() => sortReviews(compareOldest, "Oldest")}>
          Oldest
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={() => sortReviews(compareLikes, "Most Likes")}>
          Most Likes
        </Button>
      </Menu.Item>
    </Menu>
  );

  const renderPage = () => {
    return module ? (
      <>
        <ModuleInformation
          module={module}
          setAddReviewModalVisibility={setAddReviewModalVisibility}
          setAddRatingsModalVisibility={setAddRatingsModalVisibility}
          reviewByUser={reviewByUser}
          updateModule={updateModule}
        />
        <div style={styles.reviewsHeader}>
          <span style={styles.reviewsHeaderTitle}>Reviews</span>
          <Dropdown overlay={menu}>
            <div style={{ marginRight: 20 }}>
              <a style={{ color: "#595959", marginRight: 6, fontSize: 18 }}>
                {currentSort}
              </a>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
        <ReviewList updateReviews={updateReviews} reviews={reviewsList} />
        {reviewsList.length >= 10 && (
          <SeeMoreButton fetchMoreData={fetchMoreReviews} />
        )}
        <AddReviewModal
          code={module.code}
          module={module}
          updateReviews={updateReviews}
          isModalVisible={isAddReviewModalVisible}
          setModalVisibility={setAddReviewModalVisibility}
          reviewByUser={reviewByUser}
          updateModule={updateModule}
          ratingsByUser={ratingsByUser}
        />
        <AddRatingsModal
          code={module.code}
          modId={module._id}
          isModalVisible={isAddRatingsModalVisible}
          setModalVisibility={setAddRatingsModalVisibility}
          ratingsByUser={ratingsByUser}
          updateModule={updateModule}
          checkIsRatedByUser={checkIsRatedByUser}
        />
      </>
    ) : (
      <div style={styles.moduleNotFoundPage}>
        <span style={{}}>Module not found!</span>
      </div>
    );
  };

  return renderPage();
};

const styles = {
  reviewsHeader: {
    height: "8vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 10px",
    fontFamily: "Mukta",
    color: "#838383",
  },
  reviewsHeaderTitle: {
    fontSize: "26px",
  },
  moduleNotFoundPage: {
    display: "flex",
    height: "80vh",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
};

ModuleReviewPage.getInitialProps = async ({ query }) => {
  const moduleId: string = query.id as string;
  try {
    const initialModule = await moduleApi.getModule(moduleId);
    const prereqs = await Promise.all(
      initialModule.prereqs.map(async (prereqId) => {
        const mod = await moduleApi.getModule(prereqId);
        return mod.code;
      })
    );
    initialModule.prereqs = prereqs;

    const reviews = await reviewApi.getReviewsOfModule(initialModule._id, 10);
    reviews.sort(compareNewest);

    return { initialModule, reviews };
  } catch (err) {
    return { initialModule: null, reviews: [] };
  }
};

export default ModuleReviewPage;
