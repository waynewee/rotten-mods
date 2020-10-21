import { useState } from "react";
import { ModalState } from "../types";

import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";

const AddModuleModal: React.FC<ModalState> = ({ isModalVisible, setModalVisibility }) => {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [university, setUniversity] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [expectedHours, setExpectedHours] = useState(10);

  const onSubmit = () => {

  }

  return (
    <FormModal
      backgroundColor="#2D538C"
      submitColor="#3E59B9"
      title="Add Module"
      isModalVisible={isModalVisible}
      setModalVisibility={setModalVisibility}
      onSubmit={onSubmit}
    >
      <FormModalItem label="Module Code" type="input" value={code} setValue={setCode} />
      <FormModalItem label="Title" type="input" value={title} setValue={setTitle} />
      <FormModalItem label="Description" type="textarea" value={description} setValue={setDescription} />
      <FormModalItem label="University" type="university" value={university} setValue={setUniversity} />
      <FormModalItem label="Difficulty" type="difficulty" value={difficulty} setValue={setDifficulty} />
      <FormModalItem label="Expected Hours" type="hours" value={expectedHours} setValue={setExpectedHours} />
    </FormModal>
  )
}

export default AddModuleModal;