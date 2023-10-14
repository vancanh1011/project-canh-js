import SelectInputStyled from "./styles";
import { SELECT_INPUT_DATA } from "src/data/SelectInputData";
import PropTypes from "prop-types" 

const SelectInput = ({ setIsSelecting, setFieldValue,setIsShowDropdown,name }) => {

  const handleSelect = (value) => {
    setFieldValue(name, value);
    setIsShowDropdown(false)
    setIsSelecting(false)

  };
  const onMouseOver = () => {
    setIsSelecting(true);
  };
  const onMouseLeave = () => {
    setIsSelecting(false);
  };

  return (
    <SelectInputStyled> 
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
    </SelectInputStyled>
  );
};
SelectInput.propTypes = {
  setIsSelecting: PropTypes.func,
  setFieldValue: PropTypes.func,
  setIsShowDropdown: PropTypes.func,
  name : PropTypes.string,
}
export default SelectInput;