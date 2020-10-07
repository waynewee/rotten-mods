import ModuleInformation from "../components/ModuleInformation";
import ReviewList from "../components/ReviewList";
import { ModuleMeta } from "../types";

const ModuleReview = () => {
  const dummyData: ModuleMeta = {
    code: "CS3219",
    title: "Software Engineering Principles and Patterns",
    description: "This module provides an in-depth, hands-on experience in key aspects of software engineering that accompany the development of software. Based on proven principles and best practices, this module focuses on software architectural design from the perspective of the software process. It covers techniques for requirement elicitation and specification that provide sound base for architectural design. The module covers design decision exploration as well as patterns that explicate principles and best practices in replicable form.",
    expectedHours: 10,
    difficulty: 4.7,
    ratings: 4.7,
    university: "NUS"
  }

  return (
    <>
      <ModuleInformation module={dummyData} />
      <div>Reviews title and sort</div>
      <ReviewList />
    </>
  );
};

export default ModuleReview;