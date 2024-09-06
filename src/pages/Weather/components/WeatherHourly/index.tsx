import {useGetHourlyWeatherQuery} from "../../../../ApiSlices/WeatherSlice";
import {useAppSelector} from "../../../../redux/hooks";
import {SWeatherHourly} from "./WeatherHourly.style";
import HourlyWeatherItem from "./HourlyWeatherItem";

const WeatherHourly = () => {
    const {temperatureUnit, location} = useAppSelector(state => state.temperature);

    //Hourly forecast: unavailable
    // Daily forecast: unavailable
    const {data} = useGetHourlyWeatherQuery({tempUnit: temperatureUnit, location});

    const mockedData :{id:string,iconId:string,temperature:number,date:number}[]= [
        {
            date:4512454545,
            iconId:'04d',
            temperature:25,
            id:'1'
        },
        {
            date:4545544545,
            iconId:'01d',
            temperature:34,
            id:'2'
        },
        {
            date:454545887845,
            iconId:'02d',
            temperature:10,
            id:'4'
        }
    ]

    return (
        <SWeatherHourly>
            {mockedData.map(item => (
                <HourlyWeatherItem
                    key={item.id}
                    iconId={item.iconId}
                    temperature={item.temperature}
                    date={item.date}
                />
            ))}
        </SWeatherHourly>
    )
}
export default WeatherHourly;