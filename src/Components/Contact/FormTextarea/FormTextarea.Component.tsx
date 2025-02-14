import {FC, TextareaHTMLAttributes } from "react";


  

const FormTextareaComponent:FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ ...otherProps }) => {
  return  <textarea {...otherProps} />
};

export default FormTextareaComponent;