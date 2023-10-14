import EmployeesListStyled from "./styles";
import EmployeeCard from "../EmployeeCard";
import PropTypes from "prop-types"

const EmployeesList = ({ employeeData, setEmployeeData, }) => {
  return (
    <EmployeesListStyled className="card-container">
      {employeeData.length ? (
        <>
          {employeeData?.map((employee) => (
            <EmployeeCard
              key={employee.id}
              data={employee}
              setEmployeeData={setEmployeeData}
              employeeData={employeeData}
            />
          ))}
        </>
      ) : (
        <img
          src="https://cdn.vectorstock.com/i/preview-1x/41/65/no-data-empty-file-folder-not-found-information-vector-46334165.jpg"
          alt="No Data"
        />
      )}
    </EmployeesListStyled>
  );
};

EmployeesList.propTypes ={
  employeeData: PropTypes.array,
  setEmployeeData: PropTypes.func
}
export default EmployeesList;
