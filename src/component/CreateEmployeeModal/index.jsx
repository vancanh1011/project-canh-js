import { useFormik } from "formik";
import Title from "../title";
import CreateEmployeeModalStyled from "./style";
import { createNewEmployee } from "src/api/employees";
import { showToast } from "src/hoc/withShowNotification";

const CreateEmployeeModal = ({ setIsShowModal,setEmployeeData }) => {
  const formik = useFormik( { 
      initialValues: {
        role:"",
        fullName:"",
        email:"",
        address:"",
        avatarSrc:"",
    },
    onSubmit: async (values) => {
      const response = await createNewEmployee(values);
    
      setEmployeeData(response.data);

      setIsShowModal(false);

      showToast ("Create new employee successful!")

    }
  }
  );
  const { handleSubmit, handleChange, values } = formik

  return (
    <CreateEmployeeModalStyled>
      <div className="blur"></div>
      <div>
        <Title content={"Create New Employee"} />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="role" placeholder="Role" onChange={handleChange} value={values.role}/>
        <input type="text" name="fullName" placeholder="Full name" onChange={handleChange} value={values.fullName}/>
        <input type="text" name="email" placeholder="Email" onChange={handleChange} value={values.email}/>
        <input type="text" name="address" placeholder="Address" onChange={handleChange} value={values.address}/>
        <input type="text" name="avatarSrc" placeholder="Avatar URL" onChange={handleChange} value={values.avatarSrc}/>
        <div className="action-buttons">
        <button type="submit">Create</button>
        <button onClick={() => setIsShowModal(false)}> Cancel</button>
      </div>
      </form>

      
    </CreateEmployeeModalStyled>
  );
};

export default CreateEmployeeModal;
