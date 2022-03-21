import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.5rem;
  }

  span {
    color: var(--blue-300);
  }

  ul {
    display: flex;
    list-style: none;

    li {
      & + li {
        margin-left: 2.25rem;
      }

      a {
        font-size: 1.125rem;
        line-height: 1.375rem;

        text-decoration: none;
        color: var(--gray-200);

        
        position: relative;
        padding: 0.3rem 0;
      }

      a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        background: var(--blue-300);
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
      }

      a:hover::after,
      a:focus::after {
        opacity: 1;
        transform: translate3d(0, 0.2em, 0);
      }

      a::after {
        opacity: 1;
        transform: scale(0);
        transform-origin: center;
      }

      a:hover::after,
      a:focus::after{
        transform: scale(1);
      }
    }
  }
`