import { useState } from "react";
import EmployeeCardStyled from "./style";
import { AiFillEdit } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";
import { deleteEmployee, getEmployeesList } from "src/api/employees";
import { showToast } from "src/hoc/withShowNotification";
import { createPortal } from "react-dom";
import EditEmployee from "../EditEmployee";
import { styled } from "styled-components";
import PropTypes from "prop-types"
import Online from "../Online";


const EmployeeCard = ({ data, setEmployeeData, employeeData}) => {
  const { id, address, avatarSrc, email, fullName, role, isOnline } = data;

  const [isShowButton, setIsShowButton] = useState(false);

  const [dataEdit, setDataEdit]=useState([]);
  
  const [employeeId,setEmployeeId]=useState(0)

  

  const handleUpdateEmployee = async (id) => {
    const response = await getEmployeesList();
    const dataEdit = response.filter((employee) => employee.id === id)
    setIsShowButton(true);
    setDataEdit(dataEdit);
    
  };

  const handleDeleteEmployee = async (id) => {
    const response = await deleteEmployee(id);
    setEmployeeData(response.data);
    showToast("Delete employee suscessfully !");
  };

  return (
    <EmployeeCardStyled>

      {isOnline === true ? <Online/> : <p></p>}
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
        <button className="action-button" 
          onClick={()=>handleUpdateEmployee(id)}>
          <AiFillEdit />
        </button>
        {isShowButton &&
          createPortal(
           
              <EditEmployee 

              setIsShowButton = {setIsShowButton}
              dataEdit = {dataEdit}
              setEmployeeData = {setEmployeeData}

              />
            ,
            document.body
          )}

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

EmployeeCard.propTypes ={
  data : PropTypes.object,
  setEmployeeData : PropTypes.func,
  employeeData : PropTypes.array
};



export default EmployeeCard;
