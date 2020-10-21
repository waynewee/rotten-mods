import { NextPage } from "next";
import { Module, Review } from "../types";

import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ModuleInformation from "../components/ModuleInformation";
import ReviewList from "../components/ReviewList";

interface ModuleReviewProps {
  module: Module
}

// const dummyData: ModuleMeta = {
//   code: "CS3218",
//   title: "Software Engineering Principles and Patterns",
//   description: "This module provides an in-depth, hands-on experience in key aspects of software engineering that accompany the development of software. Based on proven principles and best practices, this module focuses on software architectural design from the perspective of the software process. It covers techniques for requirement elicitation and specification that provide sound base for architectural design. The module covers design decision exploration as well as patterns that explicate principles and best practices in replicable form.",
//   expectedHours: 10,
//   difficulty: 4.7,
//   ratings: 4.7,
//   university: "NUS"
// }

const dummyReviews: Review[] = [
  {
    userName: "Thomas Tan",
    userDisplayPicture: "",
    likes: 79,
    userReview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendum purus, sed ultricies nunc. Proin et purus odio. Etiam ex elit, consectetur placerat feugiat non, luctus eu justo. Vestibulum quis accumsan orci. Morbi ante massa, semper in mi eleifend, tempor posuere quam. In odio nulla, tristique et lorem vitae, mollis dictum ipsum. Sed sollicitudin augue quis turpis hendrerit laoreet. Nam facilisis turpis leo, in lobortis lorem lobortis vel. Maecenas scelerisque ante vel elit lobortis lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ac imperdiet erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu purus at urna facilisis eleifend. Ut dapibus, ex vitae vehicula suscipit, enim lacus vulputate tortor, vel convallis diam dui quis est. Duis cursus velit enim, vitae interdum nisi facilisis ut. In porttitor lacus vulputate lacinia semper. Vivamus consectetur felis vitae felis maximus sodales. Sed scelerisque blandit consectetur. Duis nec dictum ligula, quis lobortis ipsum. Ut rhoncus, nulla quis cursus euismod, quam metus pellentesque nulla, sit amet gravida felis libero id urna. Aenean a nunc imperdiet, vestibulum nibh nec, pretium tortor. Mauris magna nisl, porta eget orci eu, sodales gravida nulla. Sed eleifend dapibus libero quis fermentum. Vivamus non hendrerit augue.",
    comments: []
  },
  {
    userName: "Susan Lim",
    userDisplayPicture: "",
    likes: 24,
    userReview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget bibendum purus, sed ultricies nunc. Proin et purus odio. Etiam ex elit, consectetur placerat feugiat non, luctus eu justo. Vestibulum quis accumsan orci. Morbi ante massa, semper in mi eleifend, tempor posuere quam. In odio nulla, tristique et lorem vitae, mollis dictum ipsum. Sed sollicitudin augue quis turpis hendrerit laoreet. Nam facilisis turpis leo, in lobortis lorem lobortis vel. Maecenas scelerisque ante vel elit lobortis lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    comments: []
  }
]

const ModuleReviewPage: NextPage<ModuleReviewProps> = ({ module }) => {

  const menu = (
    <Menu>
      <Menu.Item>Newest</Menu.Item>
      <Menu.Item>Oldest</Menu.Item>
      <Menu.Item>Most Likes</Menu.Item>
      <Menu.Item>Most Comments</Menu.Item>
    </Menu>
  );

  return (
    <>
      <ModuleInformation module={module} />
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
      <ReviewList reviews={dummyReviews} />
    </>
  );
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
  }
}

ModuleReviewPage.getInitialProps = async ({ query }) => {
  const moduleString: string = query.module as string;
  const module = JSON.parse(moduleString);
  // query for reviews here
  return { module };
}

export default ModuleReviewPage;