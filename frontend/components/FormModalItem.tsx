import { useState, Dispatch, SetStateAction } from "react";

import { Input, InputNumber, Rate, Select, AutoComplete, Tag } from "antd";
const { TextArea } = Input;
const { Option } = Select;

interface FormModalItemProps {
  type:
    | "input"
    | "textarea"
    | "text"
    | "rate"
    | "numerical"
    | "difficulty"
    | "number"
    | "semester"
    | "university"
    | "year"
    | "annualYear"
    | "semesters"
    | "autocomplete"
    | "prereq";
  label: string;
  value: string | number | boolean[] | string[];
  setValue?: Dispatch<SetStateAction<any>>;
  options?: any[];
}

const FormModalItem: React.FC<FormModalItemProps> = ({
  type = "input",
  label,
  value,
  setValue,
  options,
}) => {
  const [firstIsChecked, setFirstIsChecked] = useState(0);
  const [secondIsChecked, setSecondIsChecked] = useState(0);
  const [searchOptions, setSearchOptions] = useState(options ?? []);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCheckbox = (index) => (event) => {
    const newValue = parseInt(event.target.value) === 0 ? 1 : 0;
    console.log(newValue, index);
    const isChecked = newValue === 1;
    if (index === 1) {
      setFirstIsChecked(newValue);
      setValue([isChecked, value[1]]);
    } else {
      setSecondIsChecked(newValue);
      setValue([value[0], isChecked]);
    }
  };

  const renderInput = () => (
    <Input
      style={styles.input}
      value={value as string}
      onChange={(e) => setValue(e.target.value)}
    />
  );

  const renderTextArea = () => (
    <TextArea
      style={styles.input}
      rows={4}
      autoSize={{ minRows: 4, maxRows: 4 }}
      value={value as string}
      onChange={(e) => setValue(e.target.value)}
    />
  );

  const renderText = () => <span style={styles.text}>{value}</span>;

  const renderRate = () => (
    <Rate defaultValue={value as number} onChange={setValue} />
  );

  const renderDifficulty = () => (
    <Rate
      defaultValue={value as number}
      style={styles.rateObjects}
      onChange={setValue}
      character={({ index }) => {
        return <span style={{ marginRight: 9 }}>{index + 1}</span>;
      }}
    />
  );

  const renderNumber = () => (
    <InputNumber
      style={styles.inputNumber}
      value={(value as unknown) as number}
      onChange={(e) => setValue(e as string)}
    />
  );

  const renderYear = () => (
    <Select style={styles.inputNumber} onChange={setValue} defaultValue={value}>
      <Option value={1}>1</Option>
      <Option value={2}>2</Option>
      <Option value={3}>3</Option>
      <Option value={4}>4</Option>
    </Select>
  );

  const renderSemester = () => (
    <Select style={styles.inputNumber} onChange={setValue} defaultValue={value}>
      <Option value={1}>1</Option>
      <Option value={2}>2</Option>
    </Select>
  );

  const renderSemesters = () => (
    <div style={{ display: "flex", alignItems: "center", height: 34 }}>
      <div>
        <input
          id="1"
          type="checkbox"
          value={firstIsChecked}
          onChange={toggleCheckbox(1)}
        />
        <label style={styles.inputCheckboxLabel} htmlFor="1">
          1
        </label>
      </div>
      <div>
        <input
          id="2"
          type="checkbox"
          value={secondIsChecked}
          onChange={toggleCheckbox(2)}
        />
        <label style={styles.inputCheckboxLabel} htmlFor="2">
          2
        </label>
      </div>
    </div>
  );

  const renderAnnualYear = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const yearShortform = currentYear % 2000; // eg. 2020 => 20
    const currentSemester = currentMonth < 6 ? 2 : 1;
    const currentAYSecondYear =
      currentSemester === 1 ? yearShortform + 1 : yearShortform; // if current semester is 2, then the second year of the AY is the current year
    const yearMinusOne = currentAYSecondYear - 1;
    const yearMinusTwo = currentAYSecondYear - 2;
    const yearMinusThree = currentAYSecondYear - 3;
    const yearMinusFour = currentAYSecondYear - 4;
    return (
      <Select
        style={styles.inputNumber}
        onChange={setValue}
        defaultValue={value}
      >
        <Option value={`${yearMinusOne}/${currentAYSecondYear}`}>
          AY{yearMinusOne}/{currentAYSecondYear}
        </Option>
        <Option value={`${yearMinusTwo}/${yearMinusOne}`}>
          AY{yearMinusTwo}/{yearMinusOne}
        </Option>
        <Option value={`${yearMinusThree}/${yearMinusTwo}`}>
          AY{yearMinusThree}/{yearMinusTwo}
        </Option>
        <Option value={`${yearMinusFour}/${yearMinusThree}`}>
          AY{yearMinusFour}/{yearMinusThree}
        </Option>
      </Select>
    );
  };

  const renderUniversity = () => (
    <Select style={styles.inputNumber} onChange={setValue} defaultValue={value}>
      <Option value={"NUS"}>NUS</Option>
      <Option value={"NTU"}>NTU</Option>
      <Option value={"SMU"}>SMU</Option>
    </Select>
  );

  const renderAutoComplete = () => (
    <AutoComplete
      style={styles.input}
      options={searchOptions}
      onSelect={setValue}
      onSearch={(searchText) =>
        setSearchOptions(
          options.filter((item) => item.value.includes(searchText))
        )
      }
    />
  );

  const renderPrereq = () => {
    const removeCode = (removedCode) => {
      const filteredCodes = (value as string[]).filter(
        (code) => code !== removedCode
      );
      setValue(filteredCodes);
    };

    const renderTags = () => {
      return (value as string[]).map((code) => (
        <Tag closable onClose={() => removeCode(code)} key={code}>
          {code}
        </Tag>
      ));
    };

    const addModule = (code) => {
      setValue((value as string[]).concat([code]));
      setSearchTerm("");
    };

    const onSearch = (searchText) =>
      setSearchOptions(
        options.filter((item) => item.value.includes(searchText.toUpperCase()))
      );

    const onChange = (newSearchTerm) => setSearchTerm(newSearchTerm);

    return (
      <div>
        <AutoComplete
          style={styles.input}
          onSelect={addModule}
          options={searchOptions}
          onSearch={onSearch}
          value={searchTerm}
          onChange={onChange}
        />
        <div style={{ marginTop: 10, maxWidth: 390 }}>{renderTags()}</div>
      </div>
    );
  };

  const renderInputType = () => {
    switch (type) {
      case "input":
        return renderInput();
      case "textarea":
        return renderTextArea();
      case "text":
        return renderText();
      case "rate":
        return renderRate();
      case "difficulty":
        return renderDifficulty();
      case "number":
        return renderNumber();
      case "year":
        return renderYear();
      case "semester":
        return renderSemester();
      case "semesters":
        return renderSemesters();
      case "annualYear":
        return renderAnnualYear();
      case "university":
        return renderUniversity();
      case "autocomplete":
        return renderAutoComplete();
      case "prereq":
        return renderPrereq();
      default:
        return renderInput();
    }
  };

  return (
    <div style={styles.labelContainer}>
      <label style={styles.label}>{`${label}:`}</label>
      {renderInputType()}
    </div>
  );
};

const styles = {
  labelContainer: {
    display: "flex",
    marginBottom: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  label: {
    width: 150,
    marginTop: 5,
  },
  input: {
    width: 390,
    maxWidth: 390,
  },
  text: {
    marginTop: 5,
  },
  rateObjects: {
    // color: "#000",
  },
  inputNumber: {
    width: 100,
  },
  inputCheckboxLabel: {
    margin: "0px 20px 0px 10px",
    fontSize: 15,
  },
};

export default FormModalItem;
