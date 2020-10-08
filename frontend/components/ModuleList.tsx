import { Module } from "../types";
import ModuleListCard from "./ModuleListCard";

const ModuleList: React.FC = () => {
  const dummyModuleList: Module[] = [
    {
      code: "CS3219",
      title: "Software Engineering Principles and Patterns",
      description: "This module provides an in-depth, hands-on experience in key aspects of software engineering that accompany the development of software. Based on proven principles and best practices, this module focuses on software architectural design from the perspective of the software process. It covers techniques for requirement elicitation and specification that provide sound base for architectural design. The module covers design decision exploration as well as patterns that explicate principles and best practices in replicable form."
    },
    {
      code: "CS3219",
      title: "Software Engineering Principles and Patterns",
      description: "This module provides an in-depth, hands-on experience in key aspects of software engineering that accompany the development of software. Based on proven principles and best practices, this module focuses on software architectural design from the perspective of the software process. It covers techniques for requirement elicitation and specification that provide sound base for architectural design. The module covers design decision exploration as well as patterns that explicate principles and best practices in replicable form."
    }
  ];

  const renderModuleListItems = (modules: Module[]) => {
    return modules.map(module => {
      return <ModuleListCard module={module} key={module.code} />;
    });
  }

  return <>{renderModuleListItems(dummyModuleList)}</>;
};

export default ModuleList;
