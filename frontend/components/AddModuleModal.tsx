import { useState, useEffect } from "react";
import { ModalState } from "../types";
import { useSelector } from "react-redux";
import { School, Module } from "../types";
import moduleApi from "../api/module";

import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";
import { codeBlue } from "../styles/colors";

const AddModuleModal: React.FC<ModalState> = ({
  isModalVisible,
  setModalVisibility,
}) => {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [university, setUniversity] = useState("");
  const [credit, setCredit] = useState(4);
  const [semesters, setSemesters] = useState([false, false]);
  const [workload, setWorkload] = useState(10);
  const [modulePrereqs, setModulePrereqs] = useState([]);
  const [allModules, setAllModules] = useState([]);

  const schools: School[] = useSelector((state) => state.schools);
  const schoolsAutocompleteOptions = schools.map((school) => ({
    value: school.name,
  }));

  useEffect(() => {
    getAllModules();
  }, []);

  const getAllModules = async () => {
    const modules = await moduleApi.searchModule("", 6000);
    const moduleCodes = modules.map((mod) => ({
      value: mod.code,
      id: mod._id,
    }));
    setAllModules(moduleCodes);
  };

  const onSubmit = () => {
    const schoolId = schools.find((school) => school.name === university)?._id;
    const prereqs = modulePrereqs.map((code) => {
      return allModules.find((mod) => mod.value === code)?.id;
    });
    const semester = semesters.reduce((acc, sem, index) => {
      if (sem) acc.push(index + 1);
      return acc;
    }, []);

    const newModule = {
      code,
      title,
      schoolId,
      semester,
      description,
      credit,
      workload,
      prereqs,
    };
    
    moduleApi.addModule(newModule);
    setModalVisibility(false);
    resetState();
  };

  const resetState = () => {
    setCode("");
    setTitle("");
    setDescription("");
    setUniversity("");
    setCredit(4);
    setSemesters([false, false]);
    setWorkload(10);
    setModulePrereqs([]);
  };

  return (
    <FormModal
      backgroundColor={codeBlue}
      submitColor="#3E59B9"
      title="Add Module"
      isModalVisible={isModalVisible}
      setModalVisibility={setModalVisibility}
      onSubmit={onSubmit}
    >
      <FormModalItem
        label="Module Code"
        type="input"
        value={code}
        setValue={setCode}
      />
      <FormModalItem
        label="Title"
        type="input"
        value={title}
        setValue={setTitle}
      />
      <FormModalItem
        label="Description"
        type="textarea"
        value={description}
        setValue={setDescription}
      />
      <FormModalItem
        label="University"
        type="autocomplete"
        options={schoolsAutocompleteOptions}
        value={university}
        setValue={setUniversity}
      />
      <FormModalItem
        label="Workload/Week"
        type="number"
        value={workload}
        setValue={setWorkload}
      />
      <FormModalItem
        label="Credit"
        type="number"
        value={credit}
        setValue={setCredit}
      />
      <FormModalItem
        label="Semester"
        type="semesters"
        value={semesters}
        setValue={setSemesters}
      />
      <FormModalItem
        label="Pre-requisites"
        type="prereq"
        value={modulePrereqs}
        setValue={setModulePrereqs}
        options={allModules}
      />
    </FormModal>
  );
};

export default AddModuleModal;
