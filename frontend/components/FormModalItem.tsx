import { Dispatch, SetStateAction } from "react";

import { Input, InputNumber, Rate, Select } from "antd";
const { TextArea } = Input;
const { Option } = Select;

interface FormModalItemProps {
  type: "input" | "textarea" | "text" | "rate" | "numerical" | "difficulty" | "hours" | "semester" | "university" | "year" | "annualYear",
  label: string,
  value: string | number,
  setValue?: Dispatch<SetStateAction<any>>
}

const FormModalItem: React.FC<FormModalItemProps> = ({ type = "input", label, value, setValue }) => {
  const renderRightElement = () => {
    switch (type) {
      case "input":
        return <Input style={styles.input} value={value} onChange={e => setValue(e.target.value)} />
      case "textarea":
        return <TextArea
          style={styles.input}
          rows={6}
          autoSize={{ minRows: 6, maxRows: 6 }}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      case "text":
        return <span style={styles.text}>{value}</span>
      case "rate":
        return <Rate defaultValue={value as number} onChange={setValue} />
      case "difficulty":
        return <Rate
          defaultValue={value as number}
          style={styles.rateObjects}
          onChange={setValue}
          character={({ index }) => {
            return <span style={{ marginRight: 9 }}>{index + 1}</span>;
          }}
        />
      case "hours":
        return <InputNumber
          style={styles.inputNumber}
          value={value as unknown as number}
          onChange={e => setValue(e as string)}
        />
      case "year":
        return <Select style={styles.inputNumber} onChange={setValue} defaultValue={value}>
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
          <Option value={3}>3</Option>
          <Option value={4}>4</Option>
        </Select>
      case "semester":
        return <Select style={styles.inputNumber} onChange={setValue} defaultValue={value}>
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
        </Select>
      case "annualYear":
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const yearShortform = currentYear % 2000; // eg. 2020 => 20
        const currentSemester = currentMonth < 6 ? 2 : 1;
        const currentAYSecondYear = currentSemester === 1 ? yearShortform + 1 : yearShortform; // if current semester is 2, then the second year of the AY is the current year
        const yearMinusOne = currentAYSecondYear - 1;
        const yearMinusTwo = currentAYSecondYear - 2;
        const yearMinusThree = currentAYSecondYear - 3;
        const yearMinusFour = currentAYSecondYear - 4;
        return <Select style={styles.inputNumber} onChange={setValue} defaultValue={value}>
          <Option value={`${yearMinusOne}/${currentAYSecondYear}`}>AY{yearMinusOne}/{currentAYSecondYear}</Option>
          <Option value={`${yearMinusTwo}/${yearMinusOne}`}>AY{yearMinusTwo}/{yearMinusOne}</Option>
          <Option value={`${yearMinusThree}/${yearMinusTwo}`}>AY{yearMinusThree}/{yearMinusTwo}</Option>
          <Option value={`${yearMinusFour}/${yearMinusThree}`}>AY{yearMinusFour}/{yearMinusThree}</Option>
        </Select>
      case "university":
        return <Select style={styles.inputNumber} onChange={setValue} defaultValue={value}>
          <Option value={"NUS"}>NUS</Option>
          <Option value={"NTU"}>NTU</Option>
          <Option value={"SMU"}>SMU</Option>
        </Select>
      default:
        return <Input value={value} onChange={e => setValue(e.target.value)} />
    }
  }

  return (
    <div style={styles.labelContainer}>
      <label style={styles.label}>{`${label}:`}</label>
      {renderRightElement()}
    </div>
  )
}

const styles = {
  labelContainer: {
    display: "flex",
    marginBottom: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  label: {
    width: 150,
    marginTop: 5
  },
  input: {
    width: 390
  },
  text: {
    marginTop: 5
  },
  rateObjects: {
    // color: "#000",
  },
  inputNumber: {
    width: 100
  }
}

export default FormModalItem;