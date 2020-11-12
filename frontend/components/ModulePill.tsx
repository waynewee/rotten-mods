import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moduleApi from "../api/module";
import { Module } from "../types";

import { Tooltip } from "antd";
import Button from "./Button";
import { codeBlue, crossRed } from "../styles/colors";

interface ModulePillProps {
  modId: string;
  missingPrereqs?: Module[];
  moduleCode?: string;
}

const ModulePill: React.FC<ModulePillProps> = ({
  modId,
  missingPrereqs,
  moduleCode = "",
}) => {
  const router = useRouter();
  const [code, setCode] = useState(moduleCode);

  useEffect(() => {
    if (!moduleCode) {
      getModuleCode();
    }
  }, []);

  const getModuleCode = async () => {
    if (modId) {
      const module: Module = await moduleApi.getModule(modId);
      setCode(module.code);
    }
  };

  const navigateToModuleReview = () => {
    router.push({
      pathname: "/module-review",
      query: {
        id: modId,
      },
    });
  };

  return code !== "" && (
      <Button style={styles.container} onClick={navigateToModuleReview}>
        {code}
        {missingPrereqs && missingPrereqs.length !== 0 && (
          <Tooltip
            title={`Missing prereqs: ${missingPrereqs
              .map((mod) => mod.code)
              .join(", ")}`}
          >
            <div style={styles.warningButton} onClick={() => {}}>
              i
            </div>
          </Tooltip>
        )}
      </Button>
    );
  
};

const styles = {
  container: {
    padding: 12,
    backgroundColor: codeBlue,
    color: "#fff",
    borderRadius: 10,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    marginRight: 10,
    position: "relative" as "relative",
  },
  warningButton: {
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
    cursor: "pointer",
  },
};

export default ModulePill;
