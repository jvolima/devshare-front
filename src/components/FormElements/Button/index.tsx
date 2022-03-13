import { ReactNode } from "react";
import { FormButton } from "./styles";

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <FormButton type="submit">
      {children}
    </FormButton>
  )
}