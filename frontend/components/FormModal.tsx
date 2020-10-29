import { Dispatch, SetStateAction } from "react";

import CrossIcon from "../icons/CrossIcon";
import Modal from "react-modal";

interface FormModalProps {
  title: string,
  backgroundColor: string,
  isModalVisible: boolean,
  setModalVisibility: Dispatch<SetStateAction<boolean>>,
  submitColor: string,
  onSubmit: () => void,
  submitText?: string
}

const FormModal: React.FC<FormModalProps> = ({
  children,
  title,
  backgroundColor,
  isModalVisible,
  setModalVisibility,
  submitColor,
  onSubmit,
  submitText = "Submit"
}) => {

  return (
    <Modal
      isOpen={isModalVisible}
      style={{
        overlay: styles.overlay,
        content: { ...styles.content, backgroundColor }
      }}
    >
      <div style={styles.header}>
        <span>{title}</span>
        <div onClick={() => setModalVisibility(false)}>
          <CrossIcon style={styles.closeButton} />
        </div>
      </div>
      {children}
      <div
        style={{ ...styles.submitButton, backgroundColor: submitColor }}
        onClick={onSubmit}
      >
        {submitText}
      </div>
    </Modal>
  )
}

const styles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(232, 232, 232, 0.5)",
    zIndex: 10
  },
  content: {
    position: "static",
    width: 600,
    color: "#fff",
    borderRadius: 15,
    borderWidth: 0,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    padding: "30px 30px 20px 30px",
    zIndex: 11
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 25,
    marginBottom: 20
  },
  closeButton: {
    color: "#fff",
    transform: "scale(0.8)",
    cursor: "pointer"
  },
  submitButton: {
    width: "100%",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
    textAlign: "center" as "center",
    padding: 7,
    borderRadius: 8
  }
}

export default FormModal;