import { useFormik } from "formik";
import Title from "../title";
import {CreateEmployeeModalStyled, ErorrStyled } from "./style";
import { createNewEmployee } from "src/api/employees";
import { showToast } from "src/hoc/withShowNotification";
import { createEmployeeSchema } from "src/schemas/createEmployee.schemas";
import SelectInput from "../SelectInput";

const CreateEmployeeModal = ({ setIsShowModal, setEmployeeData }) => {
  const formik = useFormik({
    initialValues: {
      role: "",
      fullName: "",
      email: "",
      address: "",
      avatarSrc: "",
    },
    validationSchema: createEmployeeSchema,
    onSubmit: async (values) => {
      const response = await createNewEmployee(values);

      setEmployeeData(response.data);

      setIsShowModal(false);

      showToast("Create new employee successful!");
    },
  });

const handleErrorField =(field)=>
 
errors[field] && touched[field] ? (<ErorrStyled>{ errors[field] }</ErorrStyled>) : null;
;

  const { handleSubmit, handleChange, values, errors, touched } = formik;

  console.log(errors, touched);

  return (
    <CreateEmployeeModalStyled>
      <div className="blur"></div>
      <div>
        <Title content={"Create New Employee"} />
      </div>

      <form className="form" onSubmit={handleSubmit}>
      
        <SelectInput/>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name*"
          autoComplete="off"
          onChange={handleChange}
          value={values.fullName}
          className={errors['fullName'] && touched['fullName'] ? "error-field" :''}
        />

        {handleErrorField('fullName')}
        <input
          type="text"
          name="email"
          placeholder="Email*"
          autoComplete="off"
          onChange={handleChange}
          value={values.email}
          className={errors['email'] && touched['email'] ? "error-field" :''}
        />
        {handleErrorField('email')}
        <input
          type="text"
          name="address"
          placeholder="Address*"
          autoComplete="off"
          onChange={handleChange}
          value={values.address}
          className={errors['address'] && touched['address'] ? "error-field" :''}
        />
        {handleErrorField('address')}
        <input
          type="text"
          name="avatarSrc"
          placeholder="Avatar URL"
          autoComplete="off"  
          onChange={handleChange}
          value={values.avatarSrc}
        />
        <div className="action-buttons">
          <button type="submit">Create</button>
          <button onClick={() => setIsShowModal(false)}> Cancel</button>
        </div>
      </form>
    </CreateEmployeeModalStyled>
  );
};

export default CreateEmployeeModal;
