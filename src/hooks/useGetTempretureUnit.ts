import {useAppSelector} from "../redux/hooks";
import {TemperatureUnits} from "../types";

const useGetTempretureUnit = () => {
    const {temperatureUnit} = useAppSelector(state => state.temperature)
    return temperatureUnit === TemperatureUnits.METRIC ? '°C' : '°F';
}

export default useGetTempretureUnit;