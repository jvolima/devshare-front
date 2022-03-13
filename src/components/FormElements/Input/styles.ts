import styled from "styled-components";

export const FormInput = styled.input`
  border-radius: 2.5rem;
  border: 0;
  padding: 1.5rem 1.5rem;
  outline: none;
  font-size: 1.125rem;

  & + input {
    margin-top: 1.5rem;
  }
`