import { useState } from "react";
import EmployeeCardStyled from "./style";
import { AiFillEdit } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { getEmployeesList } from "src/api/employees";
import { createPortal } from "react-dom";
import EditEmployee from "../EditEmployee";
import PropTypes from "prop-types"
import Online from "../Online";
import CheckDeleteEmployee from "../CheckDeleteEmployee";

const EmployeeCard = ({ data, setEmployeeData, employeeData}) => {
  const { id, address, avatarSrc, email, fullName, role, isOnline } = data;

  const [isShowModal, setIsShowModal] = useState(false);

  const [dataEdit, setDataEdit]=useState([]); 

  const [isShowCheckDeleteEmployee,setIsShowCheckDeleteEmployee] = useState(false) ;
  
  const [employeeId,setEmployeeId]=useState(0)

  

  const handleUpdateEmployee = async (id) => {
    const response = await getEmployeesList();
    const dataEdit = response.filter((employee) => employee.id === id)
    setIsShowModal(true);
    setDataEdit(dataEdit);
    
  };

  const handleDeleteEmployee = async (id) => {
    setIsShowCheckDeleteEmployee(true)
    setEmployeeId(id)

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
        {isShowModal &&
          createPortal(          
              <EditEmployee 
              setIsShowModal = {setIsShowModal}
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
        </button >
        {isShowCheckDeleteEmployee && createPortal(
          <CheckDeleteEmployee
          setIsShowCheckDeleteEmployee ={setIsShowCheckDeleteEmployee}
          employeeId={employeeId}
          setEmployeeData ={setEmployeeData}
          employeeData={employeeData}
          />,
          document.body,
        )}
        
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
