import styled from "styled-components";
import {getSpace} from "../../styles/cssVariables";

const SInput  = styled.input`
    padding: ${() => getSpace(2)}px;
    border-radius: ${()=>getSpace(2)}px;

`;

export default SInput;