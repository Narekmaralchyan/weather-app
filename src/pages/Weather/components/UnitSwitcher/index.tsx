import SUnitSwitcher from "./UnitSwitcher.styles";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {temperatureData} from "./unitSwitcherData";
import {TemperatureUnits} from "../../../../types";
import {changeUnit} from "../../../../slices/temperatureSlice/temperatureSlice";
import UnitSwitcherItem from "./UnitSwitcherItem";

const UnitSwitcher = () => {

    const {temperatureUnit} = useAppSelector(state => state.temperature)
    const dispatch = useAppDispatch()

    const onUnitChange = (unit: TemperatureUnits) => {
        dispatch(changeUnit(unit))
    }

    return (<SUnitSwitcher>
        {
            temperatureData.map(item => {
                return (
                    <UnitSwitcherItem
                        key={item.label}
                        unitItem={item}
                        onChange={onUnitChange}
                        checked={item.value === temperatureUnit}
                    />)
            })
        }
    </SUnitSwitcher>)
}

export default UnitSwitcher;