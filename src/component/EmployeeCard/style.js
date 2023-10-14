import styled from "styled-components";
const EmployeeCardStyled = styled.div`
  border: 1px;
  padding: 25px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  margin: 15px;
  position: relative;
  .employee-avatar {
    width: 100px;
    height: 100px;
    display: inline-block;
    over-flow: hidden;
    border-radius: 50%;

    & > img {
      border: 2px solid #80808040;
      padding: 2px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-position: center;
      object-fit: cover;
      trainsition: all 0.4s;
      &:hover {
        transform: scale(1.4);
      }
    }
  }

  .main-container {
    display: flex;
  }
  .employee-information {
    margin-left: 15px;
    span {
      font-weght: bold;
      font-size: 25px;
    }
    & > p:nth-child(3) {
      magin-top: 15px;
    }
  }

  .employee-action {
    justify-content: flex-end;
    display: flex;
    align-items: center;

    & > button:first-child {
      &:hover {
        background: #40739e;
        color: white;
        box-shadow: 5px 5px 7px #40739ba1;
      }
    }
    & > button:last-child {
      margin-left: 10px;

      &:hover {
        background: #ed4c67;
        color: white;
        box-shadow: 5px 5px 7px #ed4c678a;
      }
    }
  }
  .action-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 25px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: all 0.2s;
    font-size: 1em;
    font-weight: 500;
    &:hover {
      cursor: pointer;
      transform: scale(0.9);
    }
  }
`;
export default EmployeeCardStyled;
