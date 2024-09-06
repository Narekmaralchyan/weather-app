import SWeatherPage from "./Weather.styles";
import Header from "./components/Header";
import WeatherDaily from "./components/WeatherDaily";
import WeatherHourly from "./components/WeatherHourly";
import CurrentTimeWeather from "./components/CurrentTimeWeather";

const WeatherPage = ()=>{

    return (
        <SWeatherPage>
            <Header />
            <div className='dailyWeather'>
                <CurrentTimeWeather />
                <WeatherHourly />
            </div>
            <WeatherDaily />
        </SWeatherPage>
    )
}
export default WeatherPage;