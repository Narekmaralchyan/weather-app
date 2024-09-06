import Image from "../../../../components/Image";
import {FC} from "react";
import {useAppSelector} from "../../../../redux/hooks";
import {TemperatureUnits} from "../../../../types";

interface Props {
    location: string,
    temperature: number,
    iconId: string,
    mainDescription: string
}

const WeatherPreview: FC<Props> = ({location, temperature, iconId, mainDescription}) => {
    const {temperatureUnit} = useAppSelector(state => state.temperature)
    const unit = temperatureUnit ===  TemperatureUnits.METRIC ? '°C': '°F';
    return (
        <div className='weatherPreview'>
            <h1>{location}</h1>
            <h1>{temperature} {unit}</h1>
            <Image height={100} width={100} src={`https://openweathermap.org/img/wn/${iconId}.png`}/>
            <h2>{mainDescription}</h2>
        </div>
    )
}

export default WeatherPreview;