import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {TemperatureUnits} from "../../types";

export interface TemperatureState {
    temperatureUnit: TemperatureUnits;
    location:string
}

const initialState: TemperatureState = {
    temperatureUnit: TemperatureUnits.METRIC,
    location:'Yerevan'
};


export const temperatureSlice = createSlice({
    name: 'temperature',
    initialState,
    reducers: {
        changeUnit:(state,action:PayloadAction<TemperatureUnits>)=>{
            state.temperatureUnit = action.payload
        },
        changeLocation:(state,action:PayloadAction<string>) =>{
            state.location = action.payload
        }
    },

});

export const { changeUnit,changeLocation } = temperatureSlice.actions;


export default temperatureSlice.reducer;
