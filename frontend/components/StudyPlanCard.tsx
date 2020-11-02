import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { PlannedMods } from "../types";

import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { BookFilled, PlusOutlined } from "@ant-design/icons";
import ModulePill from "./ModulePill";
import Button from "./Button";

const semesterToYSMap = [
  "",
  "Y1S1",
  "Y1S2",
  "Y2S1",
  "Y2S2",
  "Y3S1",
  "Y3S2",
  "Y4S1",
  "Y4S2",
]; // Starts with empty so the index corresponds to semester

const StudyPlanCard: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState(1);
  const plannedMods: PlannedMods[] = useSelector(
    (state) => state.personalModules.plannedMods
  );
  const [viewablePlannedMods, setViewablePlannedMods] = useState(
    plannedMods.filter((plannedMod) => plannedMod.semester === selectedSemester)
  );

  useEffect(() => {
    setViewablePlannedMods(
      plannedMods.filter(
        (plannedMod) => plannedMod.semester === selectedSemester
      )
    );
  }, [selectedSemester]);

  const menu = (
    <Menu>
      <Menu.Item key={1}>
        <Button onClick={() => setSelectedSemester(1)}>
          {semesterToYSMap[1]}
        </Button>
      </Menu.Item>
      <Menu.Item key={2}>
        <Button onClick={() => setSelectedSemester(2)}>
          {semesterToYSMap[2]}
        </Button>
      </Menu.Item>
      <Menu.Item key={3}>
        <Button onClick={() => setSelectedSemester(3)}>
          {semesterToYSMap[3]}
        </Button>
      </Menu.Item>
      <Menu.Item key={4}>
        <Button onClick={() => setSelectedSemester(4)}>
          {semesterToYSMap[4]}
        </Button>
      </Menu.Item>
      <Menu.Item key={5}>
        <Button onClick={() => setSelectedSemester(5)}>
          {semesterToYSMap[5]}
        </Button>
      </Menu.Item>
      <Menu.Item key={6}>
        <Button onClick={() => setSelectedSemester(6)}>
          {semesterToYSMap[6]}
        </Button>
      </Menu.Item>
      <Menu.Item key={7}>
        <Button onClick={() => setSelectedSemester(7)}>
          {semesterToYSMap[7]}
        </Button>
      </Menu.Item>
      <Menu.Item key={8}>
        <Button onClick={() => setSelectedSemester(8)}>
          {semesterToYSMap[8]}
        </Button>
      </Menu.Item>
    </Menu>
  );

  const renderModuleCodes = () =>
    viewablePlannedMods.map((plannedMod) => {
      return (
        <ModulePill
          modId={plannedMod.modId}
          key={plannedMod._id}
          missingPrereqs={plannedMod.missingPrereqs}
        />
      );
    });

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.title}>
          <BookFilled style={{ ...styles.actionIcon }} />
          StudyPlan
        </div>
        <div style={styles.selector}>
          <Dropdown overlay={menu}>
            <div style={{ cursor: "pointer" }}>
              {semesterToYSMap[selectedSemester]}
              <DownOutlined />
            </div>
          </Dropdown>
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
    minHeight: 150,
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
