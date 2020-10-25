import { FC, useState } from "react";
import { Module } from "../types";
import ArrowButton from "./ArrowButton";
import HomeModuleListCard from "./HomeModuleListCard";

const HomeModuleList: FC = () => {
  const numberOfModuleCardsInView = 3;
  const [index, setIndex] = useState(0);

  const dummyData: Module[] = [
    {
      code: "CS3219",
      title: "Software Engineering Principles and Patterns",
      description:
        "This module provides an in-depth, hands-on experience in key aspects of software engineering that accompany the development of software. Based on proven principles and best practices, this module focuses on software architectural design from the perspective of the software process. It covers techniques for requirement elicitation and specification that provide sound base for architectural design. The module covers design decision exploration as well as patterns that explicate principles and best practices in replicable form.",
      difficulty: 4.7,
      ratings: 4.8,
      workload: 10,
      university: "NUS",
      _id: "5f93fe299a31d12bf74a3518"
    },
    {
      code: "CS3203",
      title: "Software Engineering Project",
      description:
        "This module provides students with hands-on experience in working in project groups through a complete SDLC to develop a well-designed, well-tested, large-scaled software system. The students will apply the current best software engineering practices on the analysis, design, implementation, and testing of software system. Through the project, students will practise analysis of user’s needs, formulation of computing requirements to meet the user’s needs, modelling and design of the computer systems according to the requirements, evaluation of the design, efficient implementation of software components, system integration, software version control, and rigorous testing.",
      difficulty: 5,
      ratings: 4.7,
      workload: 20,
      university: "NUS",
      _id: "5f93fe299a31d12bf74a3513"
    },
    {
      code: "CS2103T",
      title: "Software Engineering",
      description:
        "This module introduces the necessary conceptual and analytical tools for systematic and rigorous development of software systems. It covers four main areas of software development, namely object-oriented system analysis, object-oriented system modelling and design, implementation, and testing, with emphasis on system modelling and design and implementation of software modules that work cooperatively to fulfill the requirements of the system. Tools and techniques for software development, such as Unified Modelling Language (UML), program specification, and testing methods, will be taught. Major software engineering issues such as modularisation criteria, program correctness, and software quality will also be covered.",
      difficulty: 4.5,
      ratings: 4.3,
      workload: 10,
      university: "NUS",
      _id: "5f93fe299a31d12bf74a3505"
    },
    {
      code: "CS3219",
      title: "Software Engineering Principles and Patterns1",
      description:
        "This module provides an in-depth, hands-on experience in key aspects of software engineering that accompany the development of software. Based on proven principles and best practices, this module focuses on software architectural design from the perspective of the software process. It covers techniques for requirement elicitation and specification that provide sound base for architectural design. The module covers design decision exploration as well as patterns that explicate principles and best practices in replicable form.",
      difficulty: 4.7,
      ratings: 4.8,
      workload: 10,
      university: "NUS",
      _id: "5f93fe299a31d12bf74a3518"
    },
    {
      code: "CS3203",
      title: "Software Engineering Project1",
      description:
        "This module provides students with hands-on experience in working in project groups through a complete SDLC to develop a well-designed, well-tested, large-scaled software system. The students will apply the current best software engineering practices on the analysis, design, implementation, and testing of software system. Through the project, students will practise analysis of user’s needs, formulation of computing requirements to meet the user’s needs, modelling and design of the computer systems according to the requirements, evaluation of the design, efficient implementation of software components, system integration, software version control, and rigorous testing.",
      difficulty: 5,
      ratings: 4.7,
      workload: 20,
      university: "NUS",
      _id: "5f93fe299a31d12bf74a3513"
    },
    {
      code: "CS2103T",
      title: "Software Engineering1",
      description:
        "This module introduces the necessary conceptual and analytical tools for systematic and rigorous development of software systems. It covers four main areas of software development, namely object-oriented system analysis, object-oriented system modelling and design, implementation, and testing, with emphasis on system modelling and design and implementation of software modules that work cooperatively to fulfill the requirements of the system. Tools and techniques for software development, such as Unified Modelling Language (UML), program specification, and testing methods, will be taught. Major software engineering issues such as modularisation criteria, program correctness, and software quality will also be covered.",
      difficulty: 4.5,
      ratings: 4.3,
      workload: 10,
      university: "NUS",
      _id: "5f93fe299a31d12bf74a3505"
    },
    {
      code: "CS3219",
      title: "Software Engineering Principles and Patterns2",
      description:
        "This module provides an in-depth, hands-on experience in key aspects of software engineering that accompany the development of software. Based on proven principles and best practices, this module focuses on software architectural design from the perspective of the software process. It covers techniques for requirement elicitation and specification that provide sound base for architectural design. The module covers design decision exploration as well as patterns that explicate principles and best practices in replicable form.",
      difficulty: 4.7,
      ratings: 4.8,
      workload: 10,
      university: "NUS",
      _id: "5f93fe299a31d12bf74a3518"

    },
    {
      code: "CS3203",
      title: "Software Engineering Project2",
      description:
        "This module provides students with hands-on experience in working in project groups through a complete SDLC to develop a well-designed, well-tested, large-scaled software system. The students will apply the current best software engineering practices on the analysis, design, implementation, and testing of software system. Through the project, students will practise analysis of user’s needs, formulation of computing requirements to meet the user’s needs, modelling and design of the computer systems according to the requirements, evaluation of the design, efficient implementation of software components, system integration, software version control, and rigorous testing.",
      difficulty: 5,
      ratings: 4.7,
      workload: 20,
      university: "NUS",
      _id: "5f93fe299a31d12bf74a3513"
    },
    {
      code: "CS2103T",
      title: "Software Engineering2",
      description:
        "This module introduces the necessary conceptual and analytical tools for systematic and rigorous development of software systems. It covers four main areas of software development, namely object-oriented system analysis, object-oriented system modelling and design, implementation, and testing, with emphasis on system modelling and design and implementation of software modules that work cooperatively to fulfill the requirements of the system. Tools and techniques for software development, such as Unified Modelling Language (UML), program specification, and testing methods, will be taught. Major software engineering issues such as modularisation criteria, program correctness, and software quality will also be covered.",
      difficulty: 4.5,
      ratings: 4.3,
      expectedHours: 10,
      university: "NUS",
      _id: "5f93fe299a31d12bf74a3505"
    },
  ];

  const allModuleCards = dummyData.map((module, index) => <HomeModuleListCard module={module} key={index} />);
  const moduleCardsInThrees = allModuleCards.slice(index, index + 3);
  const scrollLeft = () => {
    if (index - numberOfModuleCardsInView <= 0) {
      setIndex(0);
    } else {
      setIndex(index - numberOfModuleCardsInView);
    }
  }

  const scrollRight = () => {
    if (index + numberOfModuleCardsInView > allModuleCards.length - numberOfModuleCardsInView) {
      setIndex(allModuleCards.length - numberOfModuleCardsInView);
    } else {
      setIndex(index + numberOfModuleCardsInView);
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
      <ArrowButton direction="left" onClick={scrollLeft} />
      {moduleCardsInThrees}
      <ArrowButton direction="right" onClick={scrollRight} />
    </div >
  );
}

export default HomeModuleList;

// For scrolling

// const widthOfModuleCard = 350;
// const numberOfModules = 6;
// const maxWidthOfList = widthOfModuleCard * (numberOfModules - 3);

// const [offset, setOffset] = useState(widthOfModuleCard);
// const carouselRef = useRef(null);


// const scrollToRef = (offset: number) => carouselRef.current.scrollTo(offset, 0);

// const scrollRight = () => {
//   if (offset >= maxWidthOfList) {
//     scrollToRef(maxWidthOfList);
//   } else {
//     scrollToRef(offset);
//     setOffset(offset + widthOfModuleCard);
//   }
// }

// const scrollLeft = () => {
//   scrollToRef(offset - widthOfModuleCard);
//   if (offset - widthOfModuleCard <= 0) {
//     setOffset(widthOfModuleCard);
//   } else {
//     setOffset(offset - widthOfModuleCard)
//   }
// }

// return (
//   <div style={{ display: "flex" }}>
//     <div style={{ display: "flex", alignItems: "center", marginRight: 5, cursor: "pointer" }} onClick={scrollLeft}>{"<"}</div>
//     <div
//       className={stylesheet.horizontalCardCarousel}
//       style={{
//         display: "flex",
//         overflowY: "hidden",
//         overflowX: "auto",
//         paddingLeft: 5,
//       }}
//     >
//       {menu}
//     </div>
//     <div style={{ display: "flex", alignItems: "center", marginLeft: 10, cursor: "pointer" }} onClick={scrollRight}>{">"}</div>

//   </div >


// );