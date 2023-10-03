import TitleStyled from "./styles";

const Title = ({ content, customStyles }) => {
    return (  <TitleStyled>
        <h1 style={customStyles}>{content}</h1>
    </TitleStyled>);
}
 
export default Title;