import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import temperatureReducer from "../slices/temperatureSlice/temperatureSlice";
import {weatherApi} from "../ApiSlices/WeatherSlice";

export const store = configureStore({
    reducer: {
        temperature: temperatureReducer,
        [weatherApi.reducerPath]:weatherApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
