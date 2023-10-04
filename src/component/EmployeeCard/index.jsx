import EmployeeCardStyled from "./style";
import { AiFillEdit } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";
import { deleteEmployee } from "src/api/employees";
import { showToast } from "src/hoc/withShowNotification";

const EmployeeCard = ({ data, setEmployeeData }) => {
  const { id, address, avatarSrc, email, fullName, isOnline, role } = data;

  const handleEditEmployee = () => {
    console.log("edit");
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
        <button className="action-button" onClick={handleEditEmployee}>
          <AiFillEdit />
        </button>
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

export default EmployeeCard;
