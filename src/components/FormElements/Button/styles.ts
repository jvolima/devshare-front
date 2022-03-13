import styled from "styled-components";

export const FormButton = styled.button`
  margin-top: 2rem;
  border-radius: 2.5rem;
  padding: 1rem 1rem;
  background: var(--blue-300);
  border: 0;
  color: var(--white);
  font-weight: bold;
  font-size: 1.25rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8)
  }
`