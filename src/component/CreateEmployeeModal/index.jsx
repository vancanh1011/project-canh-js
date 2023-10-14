import { useFormik } from "formik";
import Title from "../title";
import { CreateEmployeeModalStyled, ErorrStyled } from "./style";
import { createNewEmployee } from "src/api/employees";
import { showToast } from "src/hoc/withShowNotification";
import { createEmployeeSchema } from "src/schemas/createEmployee.schemas";
import SelectInput from "../SelectInput";
import { useState } from "react";
import PropTypes from "prop-types" 


const CreateEmployeeModal = ({ setIsShowModal, setEmployeeData }) => {
  const [isShowDropdown,setIsShowDropdown] = useState(false)
  const [isSelecting,setIsSelecting] = useState(false)

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

  

  const { handleSubmit, handleChange, values, errors, touched, setFieldValue } =
    formik;


  const handleErrorField = (field) =>
    errors[field] && touched[field] ? (
      <ErorrStyled>{errors[field]}</ErorrStyled>
    ) : null;

  const handleClickRoleField = () => {
      setIsShowDropdown(!isShowDropdown)
  };

  const handleBlurRoleField = (event)=>{
    event.prevntDefault();
    if (isSelecting === false){
      setIsShowDropdown(false)
    }
  }


  return (
    <CreateEmployeeModalStyled>
      <div className="blur"></div>
      <div>
        <Title content={"Create New Employee"} />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <input
          name="role"    
          readOnly
          placeholder="Role*"
          value={values.role}
          onChange={handleChange}
          onBlur={handleBlurRoleField}
          className={errors["role"] && touched["role"] ? "error-field" : "role-field"}
          onClick={handleClickRoleField}
        />
        {handleErrorField("role")}
        {isShowDropdown && (
          <SelectInput
          setFieldValue={setFieldValue}
          setIsShowDropdown={setIsShowDropdown}
          setIsSelecting={setIsSelecting}
          name="role"

          />
        )}

        <input
          type="text"
          name="fullName"
          placeholder="Full Name*"
          autoComplete="off"
          onChange={handleChange}
          value={values.fullName}
          className={
            errors["fullName"] && touched["fullName"] ? "error-field" : ""
          }
        />

        {handleErrorField("fullName")}
        <input
          type="text"
          name="email"
          placeholder="Email*"
          autoComplete="off"
          onChange={handleChange}
          value={values.email}
          className={errors["email"] && touched["email"] ? "error-field" : ""}
        />
        {handleErrorField("email")}
        <input
          type="text"
          name="address"
          placeholder="Address*"
          autoComplete="off"
          onChange={handleChange}
          value={values.address}
          className={
            errors["address"] && touched["address"] ? "error-field" : ""
          }
        />
        {handleErrorField("address")}
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
CreateEmployeeModal.propTypes = {
  setIsShowModal: PropTypes.func,
  setEmployeeData: PropTypes.func

}
export default CreateEmployeeModal;
