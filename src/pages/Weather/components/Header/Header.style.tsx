import styled from "styled-components";
import {getSpace} from "../../../../styles/cssVariables";

const SHeader  = styled.div`
    background: blue;;
    display: flex;
    justify-content: space-between;
    padding: ${()=>getSpace(5)}px;
    .searchBar {
        display: flex;
        margin-inline: auto;
        gap: ${()=>getSpace(2)}px;;
    }
    
`

export default SHeader;