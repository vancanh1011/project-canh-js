import Title from "../title";
import ManagermentEmployeesStyled from "./styles";
import CreateEmployeeButton from "../CreateEmployeeButton";
import EmployeesList from "../EmployeesList";
import { useEffect, useState } from "react";
import { getEmployeesList } from "src/api/employees";

const ManagermentEmployees = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    getEmployeesList().then((employeeData) => setEmployeeData(employeeData));
  }, []);

  const customStyles = {
    textAlign: "center",
  };

  return (
    <ManagermentEmployeesStyled>
      <Title content="Data Center of employee" customStyles={customStyles} />

      <div className="action-bar">
        <CreateEmployeeButton
          btnText="+ New Employee "
          setEmployeeData={setEmployeeData}
        />
      </div>

      <EmployeesList
        employeeData={employeeData}
        setEmployeeData={setEmployeeData}
      />
    </ManagermentEmployeesStyled>
  );
};

export default ManagermentEmployees;
