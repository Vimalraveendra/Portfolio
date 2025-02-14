import { InputHTMLAttributes,FC } from "react";


  

const FormInputComponent:FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...otherProps }) => {
  return  <input {...otherProps} />
};

export default FormInputComponent;