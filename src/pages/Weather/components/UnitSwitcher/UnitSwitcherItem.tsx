import Input from "../../../../components/Input";
import {FC} from "react";
import {TemperatureUnits} from "../../../../types";
import {TemperatureDataItem} from "./unitSwitcherData";

const UnitSwitcherItem: FC<{
    unitItem: TemperatureDataItem,
    onChange: (unit: TemperatureUnits) => void,
    checked: boolean
}> = ({onChange, unitItem, checked}) => {

    return (
        <div className='radio_label'>
            <Input
                type='radio'
                checked={checked}
                onChange={() => {
                    onChange(unitItem.value)
                }}
            />
            <label>{unitItem.label}</label>
        </div>
    )
}

export default UnitSwitcherItem;