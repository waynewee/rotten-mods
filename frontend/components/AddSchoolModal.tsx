import schoolApi from "../api/school";
import { useState } from "react";

import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";
import { codeBlue } from "../styles/colors";
import { ModalState } from "../types";
import { message } from "antd";

const AddSchoolModal: React.FC<ModalState> = ({
  isModalVisible,
  setModalVisibility,
}) => {
  const [school, setSchool] = useState("");

  const onSubmit = async () => {
    if (!validateForm()) {
      message.error("The field cannot be empty!");
      return;
    }

    await schoolApi.addSchool(school);
    setModalVisibility(false);
    message.success(`The school ${school} has been added successfully!`);
  };

  const validateForm = () => {
    return school !== "";
  };

  return (
    <FormModal
      backgroundColor={codeBlue}
      submitColor="#3E59B9"
      title="Add School"
      isModalVisible={isModalVisible}
      setModalVisibility={setModalVisibility}
      onSubmit={onSubmit}
    >
      <FormModalItem
        label="School Name"
        type="input"
        value={school}
        setValue={setSchool}
      />
    </FormModal>
  );
};

const styles = {
  loginFormButton: {
    width: "100%",
    backgroundColor: "#2D538C",
  },
};

export default AddSchoolModal;
