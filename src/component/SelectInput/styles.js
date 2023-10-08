import styled from "styled-components";


const SelectInputStyled = styled.div`
position: relative;
width: 100%;
input{
    width: 100%;
    padding: 10px 15px;
    border-radius: 12px;
    outline: none;
    border: 1px solid #8080809e;


    &:focus {
        border: 2px solid #808080;
    }
}
.data-dropdown{
    border: 1px solid gray;
    border-radius: 12px;
    box-shadow: 2px 2px 15px gray;
    padding: 10px 15px;
    position: absolute;
    background: white;
    width: 100%;
    margin-top: 5px;

}
.data-item {
    padding: 10px;
    &:hover{
        cursor: pointer;
    background: lightblue;
    border-radius: 12px;
    transition: all 0,4s;
    }

}
`

export default SelectInputStyled;