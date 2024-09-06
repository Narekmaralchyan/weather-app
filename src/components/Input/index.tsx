import React, {FC} from "react";
import SInput from "./Input.styles";

const Input:FC<React.InputHTMLAttributes<HTMLInputElement>> = (props)=>{
    return (<SInput {...props}/>)
}

export default Input;