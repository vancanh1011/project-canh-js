import CreateEmployeeButtonStyled from "./style";

const CreateEmployeeButton = ({ btnText }) => {
  const handleclick = () => {
    console.log("click");
  };
  return (
    <CreateEmployeeButtonStyled onClick={handleclick}>
      {btnText}
    </CreateEmployeeButtonStyled>
  );
};

export default CreateEmployeeButton;
