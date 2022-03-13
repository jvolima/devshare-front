import { InputHTMLAttributes } from "react";
import { FormInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  placeholder: string;
}

export function Input({ type, name, placeholder, ...rest }: InputProps) {
  return (
    <FormInput
      type={type}
      name={name}
      placeholder={placeholder}
      {...rest}
    />
  )
}