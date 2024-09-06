import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {TemperatureUnits, WeatherItem} from "../types";

const BASE_URL = `https://api.openweathermap.org/data/2.5/`

interface GetCurrentWeatherParams { location: string, tempUnit: TemperatureUnits };


export const weatherApi = createApi({
    reducerPath: 'weather',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['currentWeather','hourlyWeather'],
    endpoints: (build) => ({
        getCurrentWeather: build.query<WeatherItem, GetCurrentWeatherParams>({
            query: (params) => ({
                url: 'weather',
                params:{
                    appid:process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
                    q:params.location,
                    units:params.tempUnit
                }
            }),
            providesTags:['currentWeather'],
        }),
        getHourlyWeather: build.query<WeatherItem[],GetCurrentWeatherParams>({
            query: (params) => ({
                url: 'forecast/hourly',
                params:{
                    appid:process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
                    q:params.location,
                    units:params.tempUnit,
                }
            }),
            providesTags:['hourlyWeather'],
        }),
        getDailyWeather: build.query<{list:(WeatherItem & {dt_txt:string})[]},GetCurrentWeatherParams>({
            query: (params) => ({
                url: 'forecast',
                params:{
                    appid:process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
                    q:params.location,
                    units:params.tempUnit,
                    cnt:5
                }
            }),
            providesTags:['hourlyWeather'],
        })
    })
})

export const { useGetCurrentWeatherQuery,useLazyGetCurrentWeatherQuery,useGetHourlyWeatherQuery,useGetDailyWeatherQuery} = weatherApi



