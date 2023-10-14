import { useState } from "react";
import Title from "../title";
import EditEmployeeStyled from "./style";
import { createEmployeeSchema } from "src/schemas/createEmployee.schemas";
import { useFormik } from "formik";
import { updateEmployee } from "src/api/employees";
import { ErorrStyled } from "../CreateEmployeeModal/style";
import PropTypes from "prop-types";
import SelectInput from "../SelectInput";

const EditEmployee = ({ setIsShowButton, dataEdit, setEmployeeData, }) => {

  const { id, address, avatarSrc, email, fullName, role } = dataEdit[0];
  const [isSelecting, setIsSelecting] = useState(false);
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const formik = useFormik({
    initialValues: {
      role: role,
      fullName: fullName,
      email: email,
      address: address,
      avatarSrc: avatarSrc,
      id: id,
    },
    validationSchema: createEmployeeSchema,
    onSubmit: async ({ id, ...data }) => {
      const reponse = await updateEmployee(id, data);
      setEmployeeData(reponse.data);
      setIsShowButton(false);
    },
  });
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
    
  } = formik;

  const handleClickCancle = () => {
    setIsShowButton(false);
  };
  const handleClickErrorFiled = (field) => {
    return errors[field] && touched[field] ? (
      <ErorrStyled>{errors[field]}</ErorrStyled>
    ) : (
      <div></div>
    );
  };

  const handleClickRoleField = ()=>{
    setIsShowDropdown(!isShowDropdown)
  };

  const handleBlurRoleField = (event) => {
    event.preventDefault();
    if (isSelecting === false) {
      setIsShowDropdown(false);
    }
  };

  return (
    <EditEmployeeStyled>
      <div className="blur"></div>
      <div>
        <Title content={" Edit Employee"} />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="role"
          placeholder="Role*"
          autoComplete="off"
          onChange={handleChange}
          value={values.role}
          onBlur={handleBlurRoleField}
          className={
          errors["role"] && touched["role"] ? "error-field" : "role-filed"
            
          }
          readOnly
          onClick={handleClickRoleField}
        />{isShowDropdown && (
            <SelectInput
              setIsSelecting = {setIsSelecting}
              setFieldValue= {setFieldValue}
              setIsShowDropdown ={setIsShowDropdown}
              name="role"
            />
        )}
          {handleClickErrorFiled("role")}


        <input
          type="text"
          name="fullName"
          placeholder="Full Name*"
          autoComplete="off"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors["fullName"] && touched["fullName"] ? "error-field" : ""
          }
        />
        {handleClickErrorFiled("fullName")}
        <input
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors["email"] && touched["email"] ? "error-field" : ""}
        />
         {handleClickErrorFiled("email")}
        <input
          type="text"
          name="address"
          placeholder="Address"
          autoComplete="off"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors["address"] && touched["address"] ? "error-field" : ""}
        />
         {handleClickErrorFiled("address")}
        <input
          type="text"
          name="avatarSrc"
          placeholder="Avatar URL"
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.avatarSrc}  
        />
      </form>
      <div className="action-button">
        <button>Edit</button>
        <button onClick={handleClickCancle}>Cancel</button>
      </div>
    </EditEmployeeStyled>
  );
};
EditEmployee.prototype = {
  setIsShowButton: PropTypes.func,
  dataEdit: PropTypes.array,
  setEmployeeData: PropTypes.func,
};
export default EditEmployee;
