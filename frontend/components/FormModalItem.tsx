import { useState, useEffect, Dispatch, SetStateAction } from "react";

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
  value: string | number | boolean[] | string[] | SearchOption[];
  setValue?: Dispatch<SetStateAction<any>>;
  options?: any[];
  searchTerm?: string;
  setSearchTerm?: Dispatch<SetStateAction<any>>;
}

interface SearchOption {
  value: string;
  id: string;
}

const FormModalItem: React.FC<FormModalItemProps> = ({
  type = "input",
  label,
  value,
  setValue,
  options,
  searchTerm,
  setSearchTerm,
}) => {
  const [firstIsChecked, setFirstIsChecked] = useState(0);
  const [secondIsChecked, setSecondIsChecked] = useState(0);
  const [searchOptions, setSearchOptions] = useState<SearchOption[]>(
    options ?? []
  );

  useEffect(() => {
    setSearchOptions(options);
  }, [options]);

  const toggleCheckbox = (index) => (event) => {
    const newValue = parseInt(event.target.value) === 0 ? 1 : 0;
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
      <Option value={3}>3</Option>
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
      <div>
        <input
          id="3"
          type="checkbox"
          value={secondIsChecked}
          onChange={toggleCheckbox(3)}
        />
        <label style={styles.inputCheckboxLabel} htmlFor="3">
          3
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
      defaultValue={value as string}
      onSearch={(searchText) =>
        setSearchOptions(
          options.filter((item) => item.value.toLowerCase().includes(searchText.toLowerCase()))
        )
      }
    />
  );

  const renderPrereq = () => {
    const removeCode = (removedMod) => {
      const filteredCodes = (value as SearchOption[]).filter(
        (mod) => mod.id !== removedMod.id
      );
      setValue(filteredCodes);
    };

    const renderTags = () => {
      return (value as SearchOption[]).map((mod) => (
        <Tag closable onClose={() => removeCode(mod)} key={mod.id}>
          {mod.value}
        </Tag>
      ));
    };

    const addModule = (code) => {
      const modArr = searchOptions.filter((mod) => mod.value === code);
      setValue((value as SearchOption[]).concat(modArr));
      setSearchTerm("");
    };

    const onChange = (newSearchTerm) => setSearchTerm(newSearchTerm);

    return (
      <div>
        <AutoComplete
          style={styles.input}
          onSelect={addModule}
          options={searchOptions}
          value={searchTerm}
          onChange={onChange}
        />
        <div style={{ marginTop: 10, maxWidth: 390 }}>{renderTags()}</div>
      </div>
    );
  };

  const renderInputType = {
    "input": renderInput,
    "textarea": renderTextArea,
    "text": renderText,
    "rate": renderRate,
    "difficulty": renderDifficulty,
    "number": renderNumber,
    "year": renderYear,
    "semester": renderSemester,
    "semesters": renderSemesters,
    "annualYear": renderAnnualYear,
    "university": renderUniversity,
    "autocomplete": renderAutoComplete,
    "prereq": renderPrereq,
  }

  return (
    <div style={styles.labelContainer}>
      <label style={styles.label}>{`${label}:`}</label>
      {renderInputType[type]()}
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
