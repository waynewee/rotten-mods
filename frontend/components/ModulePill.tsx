import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moduleApi from "../api/module";
import { Module } from "../types";

import Button from "./Button";
import { codeBlue } from "../styles/colors";

interface ModulePillProps {
  modId: string;
}

const ModulePill: React.FC<ModulePillProps> = ({ modId }) => {
  const router = useRouter();
  const [code, setCode] = useState("");

  useEffect(() => {
    getModuleCode();
  }, [])

  const getModuleCode = async () => {
    if (modId) {
      const module: Module = await moduleApi.getModule(modId);
      setCode(module.code);
    }
  }

  const navigateToModuleReview = () => {
    router.push({
      pathname: "/module-review",
      query: {
        id: modId
      }
    })
  }

  return (
    <Button style={styles.container} onClick={navigateToModuleReview}>
      {code}
    </Button>
  )
};

const styles = {
  container: {
    padding: 12,
    backgroundColor: codeBlue,
    color: "#fff",
    borderRadius: 15,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    marginRight: 10
  }
}

export default ModulePill;