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

interface ModuleReviewProps {
  module: Module;
  reviews: Review[];
}

const ModuleReviewPage: NextPage<ModuleReviewProps> = ({ module, reviews }) => {
  const [reviewsList, setReviewsList] = useState(reviews);
  const [isAddReviewModalVisible, setAddReviewModalVisibility] = useState(false);
  const [isAddRatingsModalVisible, setAddRatingsModalVisibility] = useState(false);
  const userId = useSelector(state => state.auth.user?._id);

  // Analytics
  useEffect(() => {
    eventApi.addEvent(userId, "mod", module._id, "view");
  }, []);

  const updateReviews = async () => {
    const newReviews = await reviewApi.getReviewsOfModule(module._id);
    setReviewsList(newReviews);
  }

  const menu = (
    <Menu>
      <Menu.Item>Newest</Menu.Item>
      <Menu.Item>Oldest</Menu.Item>
      <Menu.Item>Most Likes</Menu.Item>
      <Menu.Item>Most Comments</Menu.Item>
    </Menu>
  );

  const renderPage = () => {
    return module
      ? (
        <>
          <ModuleInformation
            module={module}
            setAddReviewModalVisibility={setAddReviewModalVisibility}
            setAddRatingsModalVisibility={setAddRatingsModalVisibility}
          />
          <div style={styles.reviewsHeader}>
            <span style={styles.reviewsHeaderTitle}>Reviews</span>
            <Dropdown overlay={menu}>
              <div style={{ marginRight: 20 }}>
                <a style={{ color: "#595959", marginRight: 6, fontSize: 18 }}>
                  Sort
                </a>
                <DownOutlined />
              </div>
            </Dropdown>
          </div>
          <ReviewList updateReviews={updateReviews} reviews={reviewsList} />
          <AddReviewModal
            code={module.code}
            modId={module._id}
            updateReviews={updateReviews}
            isModalVisible={isAddReviewModalVisible}
            setModalVisibility={setAddReviewModalVisibility}
          />
          <AddRatingsModal
            code={module.code}
            modId={module._id}
            isModalVisible={isAddRatingsModalVisible}
            setModalVisibility={setAddRatingsModalVisibility}
          />
        </>
      )
      : (
        <div style={styles.moduleNotFoundPage}>
          <span style={{}}>Module not found!</span>
        </div>
      )
  }

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
    color: "#838383"
  },
  reviewsHeaderTitle: {
    fontSize: "26px"
  },
  moduleNotFoundPage: {
    display: "flex",
    height: "80vh",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
}

ModuleReviewPage.getInitialProps = async ({ query }) => {
  const moduleId: string = query.id as string;

  try {
    const module = await moduleApi.getModule(moduleId);

    // TODO: retrieve description and university from API
    module.description = "This module provides an in-depth, hands-on experience in key aspects of software engineering that accompany the development of software. Based on proven principles and best practices, this module focuses on software architectural design from the perspective of the software process. It covers techniques for requirement elicitation and specification that provide sound base for architectural design. The module covers design decision exploration as well as patterns that explicate principles and best practices in replicable form.";
    module.university = "NUS";

    const reviews = await reviewApi.getReviewsOfModule(module._id);

    return { module, reviews };
  } catch (err) {
    return { module: null, reviews: [] };
  }
}

export default ModuleReviewPage;

// const dummyReviews: Review[] = [
//   {
//     userName: "Thomas Tan",
//     likes: 79,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendum purus, sed ultricies nunc. Proin et purus odio. Etiam ex elit, consectetur placerat feugiat non, luctus eu justo. Vestibulum quis accumsan orci. Morbi ante massa, semper in mi eleifend, tempor posuere quam. In odio nulla, tristique et lorem vitae, mollis dictum ipsum. Sed sollicitudin augue quis turpis hendrerit laoreet. Nam facilisis turpis leo, in lobortis lorem lobortis vel. Maecenas scelerisque ante vel elit lobortis lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ac imperdiet erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu purus at urna facilisis eleifend. Ut dapibus, ex vitae vehicula suscipit, enim lacus vulputate tortor, vel convallis diam dui quis est. Duis cursus velit enim, vitae interdum nisi facilisis ut. In porttitor lacus vulputate lacinia semper. Vivamus consectetur felis vitae felis maximus sodales. Sed scelerisque blandit consectetur. Duis nec dictum ligula, quis lobortis ipsum. Ut rhoncus, nulla quis cursus euismod, quam metus pellentesque nulla, sit amet gravida felis libero id urna. Aenean a nunc imperdiet, vestibulum nibh nec, pretium tortor. Mauris magna nisl, porta eget orci eu, sodales gravida nulla. Sed eleifend dapibus libero quis fermentum. Vivamus non hendrerit augue.",
//     yearTaken: 2020,
//     semesterTaken: 1,
//     workload: 10,
//     rating: {
//       difficulty: 5,
//       star: 5
//     },
//     _id: "1"
//   },
//   {
//     userName: "Susan Lim",
//     likes: 24,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendum purus, sed ultricies nunc. Proin et purus odio. Etiam ex elit, consectetur placerat feugiat non, luctus eu justo. Vestibulum quis accumsan orci. Morbi ante massa, semper in mi eleifend, tempor posuere quam. In odio nulla, tristique et lorem vitae, mollis dictum ipsum. Sed sollicitudin augue quis turpis hendrerit laoreet. Nam facilisis turpis leo, in lobortis lorem lobortis vel. Maecenas scelerisque ante vel elit lobortis lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
//     yearTaken: 2020,
//     semesterTaken: 1,
//     workload: 10,
//     rating: {
//       difficulty: 5,
//       star: 5
//     },
//     _id: "2"
//   }
// ]