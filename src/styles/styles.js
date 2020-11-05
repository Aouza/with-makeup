import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body{
      height: 100%;
      background-color: var(--color-main-black);
      color: var(--color-text-white);
      cursor: default;
  }

  h1, h2, h3, h4, h5, h6{
      color: var(--color-main-gold);
  }

  h2{
    font-size: 1.6rem;
    letter-spacing: 1.1px;
    padding-bottom: 2rem;

    &:after {
          content: "";
          display: block;
          width: 2rem;
          height: 2px;
          background-color: var(--color-title-white);
          margin-top: 1rem;
          opacity: 0.2;
        }
  }

  a{
      text-decoration: none;
  }

  input, button{
      outline: none;
      background: none;
      border: 0;
  }

  button{
      cursor: pointer;
  }

  ul {
      list-style: none;
  }

  :root{
      --color-title-white: #ffffffc7;
      --color-text-white: #ffffffc7;

      --color-main-black: #000000;
      --color-dark-gray: #111111;
      --color-main-salmon: #a2524d;
      --color-light-shadow-salmon: #a2524d24;
      --color-main-gold: #a08d53;
      --color-light-background-gold: #a08d531a;
      --color-light-shadow-gold: #a08d5330;

      --color-light-shadow: rgba(0,0,0,.1);



  }
`;
