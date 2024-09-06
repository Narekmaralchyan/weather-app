import SCurrentTimeWeather from "./CurrentTimeWeather.style";
import {useGetCurrentWeatherQuery} from "../../../../ApiSlices/WeatherSlice";
import {useAppSelector} from "../../../../redux/hooks";
import WeatherPreview from "./WeatherPreview";
import Loading from "../../../../components/Loading";
import LocationNotFound from "../../../../components/LocationNotFound";

const CurrentTimeWeather = () => {
    const {temperatureUnit, location} = useAppSelector(state => state.temperature);

    const {data, isFetching, isError} = useGetCurrentWeatherQuery({tempUnit: temperatureUnit, location})

    return (
        <SCurrentTimeWeather>
            {!!data && !isError && !isFetching &&
                <WeatherPreview
                    temperature={data.main.temp}
                    location={data.name}
                    iconId={data.weather[0].icon}
                    mainDescription={data.weather[0].main}
                />
            }
            {
                isFetching && <Loading />
            }
            {
                isError && <LocationNotFound location={location} />
            }
        </SCurrentTimeWeather>
    )
}
export default CurrentTimeWeather;