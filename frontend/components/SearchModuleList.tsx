import { Module } from "../types";
import SearchModuleListCard from "./SearchModuleListCard";

const SearchModuleList: React.FC = () => {
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
    },
    {
      code: "CS2103T",
      title: "Software Engineering",
      description:
        "This module introduces the necessary conceptual and analytical tools for systematic and rigorous development of software systems. It covers four main areas of software development, namely object-oriented system analysis, object-oriented system modelling and design, implementation, and testing, with emphasis on system modelling and design and implementation of software modules that work cooperatively to fulfill the requirements of the system. Tools and techniques for software development, such as Unified Modelling Language (UML), program specification, and testing methods, will be taught. Major software engineering issues such as modularisation criteria, program correctness, and software quality will also be covered.",
      difficulty: 4.5,
      ratings: 4.3,
      expectedHours: 10,
      university: "NUS"
    },
    {
      code: "CS3219",
      title: "Software Engineering Principles and Patterns1",
      description:
        "This module provides an in-depth, hands-on experience in key aspects of software engineering that accompany the development of software. Based on proven principles and best practices, this module focuses on software architectural design from the perspective of the software process. It covers techniques for requirement elicitation and specification that provide sound base for architectural design. The module covers design decision exploration as well as patterns that explicate principles and best practices in replicable form.",
      difficulty: 4.7,
      ratings: 4.8,
      expectedHours: 10,
      university: "NUS"
    },
    {
      code: "CS3203",
      title: "Software Engineering Project1",
      description:
        "This module provides students with hands-on experience in working in project groups through a complete SDLC to develop a well-designed, well-tested, large-scaled software system. The students will apply the current best software engineering practices on the analysis, design, implementation, and testing of software system. Through the project, students will practise analysis of user’s needs, formulation of computing requirements to meet the user’s needs, modelling and design of the computer systems according to the requirements, evaluation of the design, efficient implementation of software components, system integration, software version control, and rigorous testing.",
      difficulty: 5,
      ratings: 4.7,
      expectedHours: 20,
      university: "NUS"
    },
    {
      code: "CS2103T",
      title: "Software Engineering1",
      description:
        "This module introduces the necessary conceptual and analytical tools for systematic and rigorous development of software systems. It covers four main areas of software development, namely object-oriented system analysis, object-oriented system modelling and design, implementation, and testing, with emphasis on system modelling and design and implementation of software modules that work cooperatively to fulfill the requirements of the system. Tools and techniques for software development, such as Unified Modelling Language (UML), program specification, and testing methods, will be taught. Major software engineering issues such as modularisation criteria, program correctness, and software quality will also be covered.",
      difficulty: 4.5,
      ratings: 4.3,
      expectedHours: 10,
      university: "NUS"
    },
    {
      code: "CS3219",
      title: "Software Engineering Principles and Patterns2",
      description:
        "This module provides an in-depth, hands-on experience in key aspects of software engineering that accompany the development of software. Based on proven principles and best practices, this module focuses on software architectural design from the perspective of the software process. It covers techniques for requirement elicitation and specification that provide sound base for architectural design. The module covers design decision exploration as well as patterns that explicate principles and best practices in replicable form.",
      difficulty: 4.7,
      ratings: 4.8,
      expectedHours: 10,
      university: "NUS"
    },
    {
      code: "CS3203",
      title: "Software Engineering Project2",
      description:
        "This module provides students with hands-on experience in working in project groups through a complete SDLC to develop a well-designed, well-tested, large-scaled software system. The students will apply the current best software engineering practices on the analysis, design, implementation, and testing of software system. Through the project, students will practise analysis of user’s needs, formulation of computing requirements to meet the user’s needs, modelling and design of the computer systems according to the requirements, evaluation of the design, efficient implementation of software components, system integration, software version control, and rigorous testing.",
      difficulty: 5,
      ratings: 4.7,
      expectedHours: 20,
      university: "NUS"
    },
    // {
    //   code: "CS2103T",
    //   title: "Software Engineering2",
    //   description:
    //     "This module introduces the necessary conceptual and analytical tools for systematic and rigorous development of software systems. It covers four main areas of software development, namely object-oriented system analysis, object-oriented system modelling and design, implementation, and testing, with emphasis on system modelling and design and implementation of software modules that work cooperatively to fulfill the requirements of the system. Tools and techniques for software development, such as Unified Modelling Language (UML), program specification, and testing methods, will be taught. Major software engineering issues such as modularisation criteria, program correctness, and software quality will also be covered.",
    //   difficulty: 4.5,
    //   ratings: 4.3,
    //   expectedHours: 10,
    //   university: "NUS"
    // },
  ];

  const renderModuleListItems = (modules: Module[]) => {
    return modules.map((module, index) => {
      return <SearchModuleListCard module={module} key={index} />;
    });
  };

  return <>{renderModuleListItems(dummyData)}</>;
};

export default SearchModuleList;
