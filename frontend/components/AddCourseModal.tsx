import { Modal, Button, Form, Input, Divider } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import authService from "../utils/authentication";

import { message } from "antd";
import courseApi from "../api/course";
import { useState, useEffect } from "react";


import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";
import { codeBlue } from "../styles/colors";
import { ModalState } from "../types";





const AddCourseModal: React.FC<ModalState> = ({
  isModalVisible,
  setModalVisibility,
}) => {
  
  
  const [course, setCourse] = useState("");

  const onSubmit = () => {
    courseApi.addCourse(course);
    message.success(`The course ${course} has been added successfully!`);

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
