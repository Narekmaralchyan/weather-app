import {useGetDailyWeatherQuery} from "../../../../ApiSlices/WeatherSlice";
import {useAppSelector} from "../../../../redux/hooks";
import SWeatherDaily from "./WeatherDaily.style";
import DailyWeatherItem from "./DailyWeatherItem";

const WeatherDaily = () => {
    const {temperatureUnit, location} = useAppSelector(state => state.temperature);

    const {data,isError,isFetching} = useGetDailyWeatherQuery({tempUnit: temperatureUnit, location});

    return (
        <SWeatherDaily>
            {
                (!isFetching && !isError ) && !!data?.list &&  (
                    data.list.map(
                        item => (
                            <DailyWeatherItem
                                key={item.id}
                                date={item.dt_txt}
                                temperature={item.main.temp}
                                iconId={item.weather[0].icon}
                            />
                        )
                    )
                )
            }

        </SWeatherDaily>
    )
}
export default WeatherDaily;