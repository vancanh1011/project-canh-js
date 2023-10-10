import styled from "styled-components";

const CreateEmployeeButtonStyled = styled.button`
  background: #00b894;
  color: white;
  box-shadow: #008494c2 3px 7px 15px 0;
  border-radius: 6px;
  border: none;
  outline: none;
  padding: 5px 15px;
  text-align: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
export default CreateEmployeeButtonStyled;
