import React, {useState} from "react";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";
import {useAppDispatch} from "../../../../../redux/hooks";
import {changeLocation} from "../../../../../slices/temperatureSlice/temperatureSlice";
import { useLazyGetCurrentWeatherQuery} from "../../../../../ApiSlices/WeatherSlice";


const Search = () => {
    // const {location,temperatureUnit} = useAppSelector(state => state.temperature)
    const [inputValue, setInputValue] = useState('Yerevan')
    const [, {isFetching,}] = useLazyGetCurrentWeatherQuery()
    const dispatch = useAppDispatch()

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    const onSearch = () => {
        dispatch(changeLocation(inputValue))
    }

    return (
        <div className='searchBar'>
            <Input value={inputValue} onChange={onInputChange} placeholder='Type city'/>
            <Button disabled={isFetching} onClick={onSearch}>Search City</Button>
        </div>
    )
}
export default Search;