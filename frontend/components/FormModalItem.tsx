import { Dispatch, SetStateAction } from "react";

import { Input, InputNumber, Rate, Select } from "antd";
const { TextArea } = Input;
const { Option } = Select;

interface FormModalItemProps {
  type: "input" | "textarea" | "text" | "rate" | "numerical" | "difficulty" | "hours" | "semester" | "university",
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
        return <Rate />
      case "difficulty":
        return <Rate style={styles.rateObjects} character={({ index }) => {
          return <span style={{ marginRight: 9 }}>{index + 1}</span>;
        }} />
      case "hours":
        return <InputNumber
          style={styles.inputNumber}
          value={value as unknown as number}
          onChange={e => setValue(e as string)}
        />
      case "semester":
        return <Select style={styles.inputNumber}>
          <Option value={1}>Y1S1</Option>
          <Option value={2}>Y1S2</Option>
          <Option value={3}>Y2S1</Option>
          <Option value={4}>Y2S2</Option>
          <Option value={5}>Y3S1</Option>
          <Option value={6}>Y3S2</Option>
          <Option value={7}>Y4S1</Option>
          <Option value={8}>Y4S2</Option>
        </Select>
      case "university":
        return <Select style={styles.inputNumber}>
          <Option value="NUS">NUS</Option>
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