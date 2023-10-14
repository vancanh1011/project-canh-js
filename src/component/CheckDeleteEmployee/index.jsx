import CheckDeleteEmployeeStyled from './styles'
import Title from '../title'
import { deleteEmployee } from 'src/api/employees'
import { showToast } from 'src/hoc/withShowNotification'

const CheckDeleteEmployee = ({setEmployeeData,employeeData,employeeId,setIsShowCheckDeleteEmployee}) => {
    

    const handleClickDelete = async () => {
        const response = await deleteEmployee(employeeId)
        setEmployeeData(response.data);
        showToast("Delete employee succesfully");

    }
    const handleClickCancel = async () => {
        setIsShowCheckDeleteEmployee(false);

    }
    const nameEmployee = employeeData.filter(
      (employee) => employee.id === employeeId
    )


  return (
    <CheckDeleteEmployeeStyled>
        <Title content =  "Confirm Delete" customStyles={undefined} />
        <p>Do you want to delete employee :</p>
        <p>{nameEmployee[0].fullName}</p>
        <button onClick={()=>handleClickDelete()}>Delete</button>
        <button onClick={handleClickCancel}>Cancel</button>

    </CheckDeleteEmployeeStyled>
  )
}

export default CheckDeleteEmployee