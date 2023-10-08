import { useState } from "react";
import EmployeeCardStyled from "./style";
import { AiFillEdit } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";
import { deleteEmployee} from "src/api/employees";
import { showToast } from "src/hoc/withShowNotification";
import { createPortal } from "react-dom";
import EditEmployee from "../EditEmployee";
import { styled } from "styled-components";

const EmployeeCard = ({ data, setEmployeeData }) => {
  const { id, address, avatarSrc, email, fullName, isOnline, role } = data;




  const [isShowButton, setIsShowButton] = useState(false);


  const handleUpdateEmployee = async() => {
    
    setIsShowButton(true);
    
  };






  const handleDeleteEmployee = async (id) => {
    const response = await deleteEmployee(id);
    setEmployeeData(response.data);
    showToast( "Delete employee suscessfully !")
  };


  return (
    <EmployeeCardStyled>
      <div className="main-container">
        <section className="employee-avatar">
          <img src={avatarSrc} alt="avatar.png" />
        </section>
        <section className="employee-information">
          <span>{fullName}</span>
          <p>{role}</p>
          <p>{email}</p>
          <p>{address}</p>
        </section>
      </div>
      <section className="employee-action">
        <button className="action-button" onClick={handleUpdateEmployee}>
          <AiFillEdit />
        </button>
        {isShowButton && (createPortal(
        <BlurStyled className="blur "><EditEmployee setIsShowButton ={setIsShowButton}/></BlurStyled>
        ,
        document.body))}


        <button
          className="action-button"
          onClick={() => handleDeleteEmployee(id)}
        >
          <BiTrash />
        </button>
      </section>
    </EmployeeCardStyled>
  );
};

const BlurStyled = styled.div`
  background-color: #00000078;
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
`

export default EmployeeCard;    
