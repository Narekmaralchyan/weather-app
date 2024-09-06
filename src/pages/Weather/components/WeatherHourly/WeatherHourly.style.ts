import styled from "styled-components";
import {getSpace} from "../../../../styles/cssVariables";

export const  SWeatherHourly = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${() => getSpace(2)}px;
    .hourlyItem{
        display: flex;
        align-items: center;
        gap: ${() => getSpace(1)}px;
        border-bottom: 1px solid gray;
    }
`