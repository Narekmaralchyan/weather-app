import styled from "styled-components";
import {getSpace} from "../../../../styles/cssVariables";

const SUnitSwitcher = styled.div`
    background: white;
    padding: ${()=>getSpace(2)}px;
    display: flex;
    align-items: center;
    border-radius:${()=>getSpace(5)}px ;
    gap: ${()=>getSpace(3)}px;
    .radio_label {
        display: flex;
        align-items: center;
        gap: ${()=>getSpace(1)}px;
    }
`

export default SUnitSwitcher;