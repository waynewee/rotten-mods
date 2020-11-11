import { useDispatch } from "react-redux";
import { deleteModuleAction } from "../redux/actions/compare";
import { DELETE_MODULE_FOR_COMPARISON } from "../redux/constants";

import { codeBlue, crossRed } from "../styles/colors";

interface ModuleCompareCodeProps {
  code: string,
  order: string
}

const ModuleCompareCode: React.FC<ModuleCompareCodeProps> = ({ code, order }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteModuleAction(order));
  }

  const renderModuleCode = () => (
    <div style={styles.container}>
      {code}
      <div style={styles.deleteButton} onClick={onDelete}>
        x
      </div>
    </div>
  );

  const renderEmpty = () => (
    <div style={styles.emptyContainer} />
  );

  return code
    ? renderModuleCode()
    : renderEmpty();
}

const styles = {
  container: {
    position: "relative" as "relative",
    height: 45,
    width: 100,
    backgroundColor: codeBlue,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    fontSize: 20
  },
  deleteButton: {
    position: "absolute" as "absolute",
    top: -8,
    right: -8,
    backgroundColor: crossRed,
    height: 20,
    width: 20,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    cursor: "pointer"
  },
  emptyContainer: {
    height: 45,
    width: 100,
    border: "dashed #000",
    borderWidth: 1,
    borderRadius: 10
  }
}

export default ModuleCompareCode;