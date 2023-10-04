import { useState } from "react";
import CreateEmployeeButtonStyled from "./style";
import { createPortal } from "react-dom";
import CreateEmployeeModal from "../CreateEmployeeModal";
import { styled } from "styled-components";

const CreateEmployeeButton = ({ btnText,setEmployeeData }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleclick = () => {
    setIsShowModal(true);
  };
  return (
    <>
      <CreateEmployeeButtonStyled onClick={handleclick}>
        {btnText}
      </CreateEmployeeButtonStyled>
      {isShowModal &&
        createPortal(
          <DivStyled className="blur">
            <CreateEmployeeModal setIsShowModal={setIsShowModal} setEmployeeData = {setEmployeeData} />
          </DivStyled>,
          document.body
        )}
    </>
  );
};

export default CreateEmployeeButton;
const DivStyled = styled.div`
  background-color: #00000078;
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
`
