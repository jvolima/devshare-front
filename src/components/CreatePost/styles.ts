import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .errorAlert {
    @media (max-width: 500px) {
      max-width: 200px;
      float: right;
      margin: 1rem 1rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    
    border: 1px solid rgba(255,255,255,0.1);
    padding: 1rem;
    height: 200px;
    max-width: 600px;
    width: 100%;

    .containerText {
      width: 100%;
      height: 150px;

      textarea {
        resize: none;
        outline: none;

        background: transparent;
        color: var(--gray-200);
        font-size: 1.125rem;

        border: 0;
        width: 100%;
        height: 100%;
      }
    }

    .containerButton {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      h3 {
        margin-bottom: -1rem;
      }

      button {
        padding: 0.75rem 1.25rem;
        margin-top: 1rem;
        
        background: var(--blue-300);
        color: var(--white);
        font-weight: bold;
        border: 0;
        border-radius: 2rem;
      }
    } 
  }
`