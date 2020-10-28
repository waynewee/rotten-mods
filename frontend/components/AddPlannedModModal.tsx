import { useState } from "react";
import { ModalState } from "../types";
import plannedModApi from "../api/planned-mod";
import { updatedPersonalPlannedModules } from "../utils/helpers";

import FormModal from "./FormModal"
import FormModalItem from "./FormModalItem"
import { submitBlue, plannedModGreen } from "../styles/colors";

interface AddPlannedModModalProps extends ModalState {
  userId: string;
  modId: string;
  plannedModId?: string;
}

const AddPlannedModModal: React.FC<AddPlannedModModalProps> = ({ userId, modId, plannedModId, isModalVisible, setModalVisibility }) => {
  const [year, setYear] = useState(1);
  const [semester, setSemester] = useState(1);

  const onSubmit = async () => {
    const numberOfSemesters = (year - 1) + semester;
    await plannedModApi.addPlannedMod(userId, modId, numberOfSemesters);
    updatedPersonalPlannedModules(userId);
    setModalVisibility(false);
  }

  return (
    <FormModal
      title="Add to Study Planner"
      backgroundColor={plannedModGreen}
      isModalVisible={isModalVisible}
      setModalVisibility={setModalVisibility}
      submitColor={submitBlue}
      onSubmit={onSubmit}
    >
      <FormModalItem label="Year" type="year" value={semester} setValue={setYear} />
      <FormModalItem label="Semester" type="semester" value={semester} setValue={setSemester} />
    </FormModal>
  )
}

export default AddPlannedModModal;