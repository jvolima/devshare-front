import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 0.75rem 1.5rem;

      border: 1px solid #ccc;
      border-radius: 5rem; 

      background: transparent;
      color: var(--white);
      font-weight: bold;
      font-size: 1.125rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`