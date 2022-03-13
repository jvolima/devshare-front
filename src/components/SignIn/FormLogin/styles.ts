import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  h1 {
    font-size: 2.5rem;
  }

  form {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    
    input {
      border-radius: 2.5rem;
      border: 0;
      padding: 1.25rem 1rem;
      outline: none;
      font-size: 1.125rem;

      &:first-child {
        margin-bottom: 1.5rem;
      }
    }

    button {
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
    }
  }

  p {
    margin-top: 4rem;
    font-size: 1.125rem;
    color: var(--gray-200);

    a {
      color: var(--yellow-500);
      text-decoration: none;
    }
  }
`