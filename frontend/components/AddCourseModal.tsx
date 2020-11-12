import courseApi from "../api/course";
import { useState, useEffect } from "react";

import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";
import { codeBlue } from "../styles/colors";
import { ModalState } from "../types";
import { message } from "antd";

const AddCourseModal: React.FC<ModalState> = ({
  isModalVisible,
  setModalVisibility,
}) => {
  const [course, setCourse] = useState("");

  const onSubmit = () => {
    if (!validateForm()) {
      message.error("The field cannot be empty!");
      return;
    }
    courseApi.addCourse(course)
      .then((response) => {
        setCourse("");
        setModalVisibility(false);
        message.success(`The course ${course} has been added successfully!`);
      })
      .catch((error) => {
        console.log("the error is");
        console.log(error.response);
        if (error.response.status == "409") {
          message.error(`The course ${course} is already in the database!`);
        }
      })

  };

  const validateForm = () => {
    return course !== "";
  };

  return (
    <FormModal
      backgroundColor={codeBlue}
      submitColor="#3E59B9"
      title="Add Course"
      isModalVisible={isModalVisible}
      setModalVisibility={setModalVisibility}
      onSubmit={onSubmit}
    >
      <FormModalItem
        label="Course Name"
        type="input"
        value={course}
        setValue={setCourse}
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

export default AddCourseModal;
