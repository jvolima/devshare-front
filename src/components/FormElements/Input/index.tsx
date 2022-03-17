import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { Container, FormInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  placeholder: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ 
  name, 
  type, 
  placeholder, 
  error,
  ...rest 
  }, ref) => {
  return (
    <Container>
      <FormInput
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
      {
        !!error && (
          <span>
            {error.message}
          </span>
        )
      }
    </Container>
  )
}

export const Input = forwardRef(InputBase);