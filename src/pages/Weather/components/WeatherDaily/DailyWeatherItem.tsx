import {FC} from "react";
import Image from "../../../../components/Image";
import useGetTempretureUnit from "../../../../hooks/useGetTempretureUnit";

interface Props {
    date: string,
    temperature: number,
    iconId: string
}

const DailyWeatherItem:FC<Props> = ({iconId,date,temperature,})=>{
    const temperatureUnit = useGetTempretureUnit()
    const dayObj = new Date(date);
    const month = (dayObj.getMonth() + 1).toString().padStart(2, "0");
    const day  = dayObj.getDate().toString().padStart(2, "0");

    return (
        <div className='day-weather-item'>
            <p className='day'>{month}-{day} </p>
            <p>{temperature} {temperatureUnit}</p>
            <Image src={`https://openweathermap.org/img/wn/${iconId}.png`}/>
        </div>
    )
}


export default DailyWeatherItem;