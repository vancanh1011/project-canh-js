import TitleStyled from "./styles";
import PropTypes from "prop-types" 

const Title = ({ content, customStyles }) => {
  return (
    <TitleStyled>
      <h1 style={customStyles}>{content}</h1>
    </TitleStyled>
  );
};
Title.propTypes = {
  content: PropTypes.string,
  customStyles: PropTypes.object
}
export default Title;
