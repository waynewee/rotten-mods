import { PlannedMods } from "../types";
import { useSelector } from "react-redux";

import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { BookFilled, PlusOutlined } from "@ant-design/icons";
import ModulePill from "./ModulePill";

const StudyPlanCard: React.FC = () => {

  const dummyModuleCodeMenu = (
    <Menu>
      <Menu.Item>CS3203</Menu.Item>
      <Menu.Item>LAK1001</Menu.Item>
      <Menu.Item>GER1000</Menu.Item>
    </Menu>
  );

  const plannedMods = useSelector(state => state.personalModules.plannedMods);

  const renderModuleCodes = () =>
    plannedMods.map(plannedMod => {
      return <ModulePill modId={plannedMod?.plannedMod?.modId} key={plannedMod._id} />;
    });

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.title}>
          <BookFilled style={{ ...styles.actionIcon }} />
          StudyPlan
        </div>
        <div style={styles.selector}>
          <Dropdown overlay={dummyModuleCodeMenu}>
            <div>
              Y1S1
              <DownOutlined />
            </div>
          </Dropdown>
          <PlusOutlined style={{ marginLeft: 10 }} />
        </div>
      </div>
      <div style={styles.moduleList}>{renderModuleCodes()}</div>
    </div>
  );
};

const styles = {
  moduleList: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap" as "wrap",
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#76CCB7",
    color: "#fff",
    borderRadius: 15,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    marginBottom: 15,
    marginRight: 10,
    display: "flex",
    flexDirection: "column" as "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 20,
    alignItems: "center",
    margin: "-5px 0px 10px 0px",
  },
  title: {
    textDecorationLine: "underline",
    fontWeight: "bold" as "bold",
  },
  actionIcon: {
    height: 20,
    marginRight: 10,
    color: "#fff",
  },
  selector: {
    display: "flex",
    alignItems: "center",
    fontSize: 15,
  },
};

export default StudyPlanCard;
