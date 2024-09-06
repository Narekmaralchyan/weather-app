import styled from "styled-components";
import {getSpace} from "../../styles/cssVariables";

const SButton = styled.button`
    padding: ${() => getSpace(2)}px;
    border-radius: ${()=>getSpace(2)}px;
    background: aqua;
    border-color: cadetblue;
`

export default SButton;