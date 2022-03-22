import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      margin-right: 1.5rem;
      background: transparent;
      border: 0;
    }

    h2 {
      color: var(--blue-800);
      font-size: 2rem;
    }
  }

  .fakeInput {
    margin-top: 2rem;
    padding: 0.5rem;

    border: 2px solid var(--gray-500);
    border-radius: 0.4rem;

    display: flex;
    align-items: flex-start;
    flex-direction: column;

    label {
      font-size: 1.25rem;
      color: #343434;
    }

    textarea {
      outline: none;
      resize: none;

      background: transparent;
      color: #606060;
      font-size: 1.125rem;
      border: 0;
      
      margin-top: 0.2rem;

      width: 100%;
      height: 70px;
    }

    input {
      outline: none;
      border: 0;

      font-size: 1.125rem;
      color: #606060;

      width: 100%;
      height: 30px;
    }

    &:focus-within {
      border: 2px solid var(--blue-300);

      label {
        color: var(--blue-300);
      }
    }
  }

  .containerSalvar {
    display: flex;
    justify-content: center;

    button {
      background: var(--blue-800);
      color: var(--white);
      border: 0;
      border-radius: 3rem;

      width: 50%;
      margin-top: 2rem;
      height: 3rem;
    }
  }
`