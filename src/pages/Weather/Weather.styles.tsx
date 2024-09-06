import styled from "styled-components";
import {getSpace} from "../../styles/cssVariables";

const SWeatherPage = styled.div`
    background: white;
    height: 100vh;
    .dailyWeather{
        padding: ${()=>getSpace(5)}px;
        display: flex;
        justify-content: center;
        gap: ${()=>getSpace(2)};
    }
`

export default SWeatherPage;