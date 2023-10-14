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
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
  & > button {
    padding: 7px 15px;
    border-radius: 8px;
    border: none;
    &:hover {
      cursor: pointer;
      transform: scale(0.9);
      transition: all 0.3s;
    }
  }
  & > button:first-child {
    background: #ff6666;
    color: white;
    &:hover {
      box-shadow: 5px 5px 7px #ff6666ad;
    }
  }
  & > button:last-child {
    margin-left: 10px;
    &:hover {
      box-shadow: 5px 5px 7px #8080808c;
    }
  }
}`

export default CheckDeleteEmployeeStyled ;