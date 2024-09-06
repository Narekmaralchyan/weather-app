import SButton from "./Button.styles";
import React, {FC} from "react";

const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {

    return <SButton {...props} />
}

export default Button;