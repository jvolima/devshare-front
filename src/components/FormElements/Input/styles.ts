import styled from "styled-components";

export const FormInput = styled.input`
  border-radius: 2.5rem;
  border: 0;
  padding: 1.25rem 1rem;
  outline: none;
  font-size: 1.125rem;

  & + input {
    margin-top: 1.5rem;
  }
`