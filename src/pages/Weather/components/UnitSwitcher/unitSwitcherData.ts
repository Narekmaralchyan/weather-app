import {TemperatureUnits} from "../../../../types";

export interface TemperatureDataItem {
    label: string;
    value: TemperatureUnits
}

export const temperatureData:TemperatureDataItem[] = [
    {
        label: '°C',
        value: TemperatureUnits.METRIC
    },
    {
        label: '°F',
        value: TemperatureUnits.STANDARD,
    }
]