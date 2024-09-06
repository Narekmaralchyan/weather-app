import React, {ReactElement} from "react";
import WeatherPage from "../pages/Weather";

export enum ERoutes {
    HOME = '',
    WEATHER = 'weather'
}

export const routesData: { path: ERoutes, element: ReactElement }[] = [
    {
        path: ERoutes.HOME,
        element: <WeatherPage/>

    },
    {
        path: ERoutes.WEATHER,
        element: <WeatherPage/>
    }
]
