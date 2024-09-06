import {FC} from "react";

const LocationNotFound: FC<{ location: string }> = ({location}) => {
    return (
        <h2>
            Location with name {location} not found.
        </h2>
    )
}

export default LocationNotFound;