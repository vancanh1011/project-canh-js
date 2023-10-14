import styled from "styled-components";

const CheckDeleteEmployeeStyled = styled.div`background: white;
position: absolute;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 8px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding: 15px 30px;
z-index: 2;
color: red;
background:#82ddad;
& > p {
  margin-top: 15px;
}
& > h3 {
  padding: 5px 15px;
  background: rgba(129, 236, 236, 1);
  display: inline-block;
  outline: none;
  border-radius: 12px;
}
.action-buttons {
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
`

export default CheckDeleteEmployeeStyled ;