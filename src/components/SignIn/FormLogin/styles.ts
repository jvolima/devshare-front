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