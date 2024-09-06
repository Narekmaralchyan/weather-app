import styled from "styled-components";
import {getSpace} from "../../../../styles/cssVariables";

const SWeatherDaily = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${() => getSpace(3)}px;
    .day-weather-item {
        display: flex;
        width: 100px;
        height: 150px;
        flex-direction: column;
        justify-content: center;
        border:1px solid black;
        padding: ${() => getSpace(3)}px;
        .day {
            display: block;
        }
    }
`

export default SWeatherDaily;