import styled from "styled-components";

const EditEmployeeStyled = styled.div`
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .form {
    display: flex;
    flex-direction: column;
    margin: 20px;

    & > input {
      margin-top: 35px;
      padding: 10px 15px;
      border-radius: 12px;
      outline: none;
      border: 1px solid #8080808a;
      width: 500px;

      &:focus {
        border: 2px solid #808080;
      }
    }
  }
  .action-button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 20px;

    & > button {
      border: none;
      outline: none;
      padding: 10px 15px;
      box-shadow: 1px 1px 10px gray;
      border-radius: 12px;
      margin-top: 30px;
      transition: all 0, 3s;

      &:hover {
        cursor: pointer;
        transform: scale(0.9);
      }
    }
    & > button:first-child {
      background-color: #00b894;
      color: white;
    }
    & > button:last-child {
      margin-left: 15px;
      background-color: red;
      color: white;
    }
  }
`;
export default EditEmployeeStyled;
