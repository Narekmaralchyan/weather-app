import styled from "styled-components";
import {getSpace} from "../../styles/cssVariables";

const SNotFound = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: ${()=>getSpace(4)}px;
`
export default SNotFound;