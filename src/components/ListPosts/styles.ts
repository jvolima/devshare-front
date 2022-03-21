import styled from "styled-components";

export const Container = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;  
  flex-direction: column;

  .publicationContainer {
    margin-top: 3rem;
    max-width: 600px;
    width: 100%;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;

      h3 {
        font-size: 1.25rem;
      }

      span {
        margin: 0 0.5rem;
      }

      time {
        color: var(--gray-500);
      }
    }

    p {
      margin-top: 0.2rem;
      font-size: 1.125rem;
      color: var(--gray-200);
    }
  }
`