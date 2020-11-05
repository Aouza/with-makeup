import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 9;
  width: 0%;
  height: 100%;
  background-color: #000;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  overflow: hidden;
  transition: all 1s cubic-bezier(0.79, 0.14, 0.15, 0.86);

  ${({ openMenu }) =>
    openMenu &&
    css`
      width: 100%;
    `}

  > ul {
    > li > a {
      color: #fff;
    }
  }
`;
