import {FC} from "react";

const Title: FC<{ children: string }> = ({children}) => {
    return (
        <h1>
            {children}
        </h1>
    )
}

export default Title;