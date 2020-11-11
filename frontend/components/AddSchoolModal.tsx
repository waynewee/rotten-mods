import { Modal, Button, Form, Input, Divider } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import authService from "../utils/authentication";

import { message } from "antd";
import schoolApi from "../api/school";
import { useState, useEffect } from "react";


import FormModal from "./FormModal";
import FormModalItem from "./FormModalItem";
import { codeBlue } from "../styles/colors";
import { ModalState } from "../types";


const AddSchoolModal: React.FC<ModalState> = ({
  isModalVisible,
  setModalVisibility,
}) => {
  
  
  const [school, setSchool] = useState("");

  

  const onSubmit = () => {
    schoolApi.addSchool(school);
    message.success(`The school ${school} has been added successfully!`);
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
