import styled from "styled-components";
import {getSpace} from "../../../../styles/cssVariables";

const SCurrentTimeWeather = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .weatherPreview{
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${()=>getSpace(1)}px;   
    }
`;

export default SCurrentTimeWeather;