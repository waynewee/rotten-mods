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

  const onSubmit = () => {
    if (!validateForm()) {
      message.error("The field cannot be empty!");
      return;
    }
    schoolApi
      .addSchool(school)
      .then((response) => {
        setSchool("");
        setModalVisibility(false);
        message.success(`The school ${school} has been added successfully!`);
      })
      .catch((error) => {
        console.log("the error is");
        console.log(error.response);
        if (error.response.status == "409") {
          message.error(`The school ${school} is already in the database!`);
        }
      });
  };

  const validateForm = () => {
    return school.trim() !== "";
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
