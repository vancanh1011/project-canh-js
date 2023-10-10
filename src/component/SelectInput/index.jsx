import { useState } from "react";
import SelectInputStyled from "./styles";
import { SELECT_INPUT_DATA } from "src/data/SelectInputData";

const SelectInput = ({ className, name, value, onChange, setFieldValue }) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const handleClick = () => {
    setIsShowDropdown(!isShowDropdown);
  };
  const handleBlur = () => {
    if (!isSelecting) {
      setIsShowDropdown(false);
      setIsSelecting(false);
    }
  };
  const handleSelect = (value) => {
    setFieldValue(name, value);
  };
  const onMouseOver = () => {
    setIsSelecting(true);
  };
  const onMouseLeave = () => {
    setIsSelecting(false);
  };

  return (
    <SelectInputStyled onClick={handleClick}>
      <input
        readOnly
        placeholder="Role*"
        name="role"
        onBlur={handleBlur}
        className={className}
        value={value}
        onChange={onChange}
      />
      {isShowDropdown && (
        <div className="data-dropdown">
          {SELECT_INPUT_DATA.map(({ key, value }) => (
            <div
              className="data-item"
              key={key}
              onClick={() => handleSelect(value)}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </SelectInputStyled>
  );
};

export default SelectInput;
function setFieldValue(name, value) {
  throw new Error("Function not implemented.");
}
