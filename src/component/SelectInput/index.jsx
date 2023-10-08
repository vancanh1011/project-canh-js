import { useState } from "react";
import SelectInputStyled from "./styles";
import { SELECT_INPUT_DATA } from "src/data/SelectInputData";




const SelectInput = () => {
  const [isShowDropdown,setIsShowDropdown] = useState(false);
  const handleClick = () =>{
    setIsShowDropdown(true);
  };
  const handleBlur = ()=> {
    setIsShowDropdown(false);
  }
  return (
    <SelectInputStyled onClick={handleClick}>
        <input readOnly placeholder="Role*" name= "role" onBlur={handleBlur}/>
        {isShowDropdown &&
          <div className="data-dropdown">
            {SELECT_INPUT_DATA.map(({key,value})=>(
            <div className="data-item" key={key}>{value}</div>
          ))}
          </div>
        }
    </SelectInputStyled>
  )
}

export default SelectInput