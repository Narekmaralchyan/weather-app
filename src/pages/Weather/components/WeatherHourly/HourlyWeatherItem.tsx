import {FC} from "react";
import useGetTempretureUnit from "../../../../hooks/useGetTempretureUnit";
import Image from "../../../../components/Image";

interface Props {
    date: number,
    temperature: number,
    iconId: string
}

const HourlyWeatherItem: FC<Props> = ({iconId, date, temperature}) => {
    const temperatureUnit = useGetTempretureUnit()
    const tempDate = new Date(date);
    const time = `${tempDate.getHours()}:${tempDate.getMinutes()}`;

    return (
        <div className='hourlyItem'>
            <p>{time}</p>
            <p>{temperature} {temperatureUnit}</p>
            <Image  src={`https://openweathermap.org/img/wn/${iconId}.png`}/>
        </div>
    )
}
export default HourlyWeatherItem;