import { NextPage } from "next";
import { Module, Review } from "../types";

import ModuleInfoComparison from "../components/ModuleInfoComparison";
import ModuleMetaComparison from "../components/ModuleMetaComparison";
import ModuleReviewsComparison from "../components/ModuleReviewsComparison";

interface ModuleComparisonProps {
  firstModule: Module,
  secondModule: Module,
  firstModuleReviews: Review[],
  secondModuleReviews: Review[]
}

const dummyData: Module[] = [
  {
    code: "CS3219",
    title: "Software Engineering Principles and Patterns",
    description:
      "This module provides an in-depth, hands-on experience in key aspects of software engineering that accompany the development of software. Based on proven principles and best practices, this module focuses on software architectural design from the perspective of the software process. It covers techniques for requirement elicitation and specification that provide sound base for architectural design. The module covers design decision exploration as well as patterns that explicate principles and best practices in replicable form.",
    difficulty: 4.7,
    ratings: 4.8,
    expectedHours: 10,
    university: "NUS"
  },
  {
    code: "CS3203",
    title: "Software Engineering Project",
    description:
      "This module provides students with hands-on experience in working in project groups through a complete SDLC to develop a well-designed, well-tested, large-scaled software system. The students will apply the current best software engineering practices on the analysis, design, implementation, and testing of software system. Through the project, students will practise analysis of user’s needs, formulation of computing requirements to meet the user’s needs, modelling and design of the computer systems according to the requirements, evaluation of the design, efficient implementation of software components, system integration, software version control, and rigorous testing.",
    difficulty: 5,
    ratings: 4.7,
    expectedHours: 20,
    university: "NUS"
  }
]

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

const ModuleComparison: NextPage<ModuleComparisonProps> = ({ 
  firstModule = dummyData[0], 
  secondModule = dummyData[1], 
  firstModuleReviews = dummyReviews, 
  secondModuleReviews = dummyReviews 
}) => {
  return (
    <>
      <ModuleInfoComparison firstModule={firstModule} secondModule={secondModule} />
      <ModuleMetaComparison firstModule={firstModule} secondModule={secondModule} />
      <ModuleReviewsComparison firstModuleReviews={firstModuleReviews} secondModuleReviews={secondModuleReviews} />
    </>
  );
}

// ModuleComparison.getInitialProps = async ({ query }) => {
//   const firstModuleCode: string = query.firstModuleCode as string;
//   const secondModuleCode: string = query.secondModuleCode as string;

//   /** Get data from server here */

//   return { firstModule, secondModule, firstModuleReviews, secondModuleReviews };
// }

export default ModuleComparison;