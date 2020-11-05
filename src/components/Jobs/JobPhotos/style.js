import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: var(--color-main-black);
  height: 200px;
  margin: 0 0.5rem;
  width: 100%;

  ${({ backgroundImage }) => css`
    background-image: url("${backgroundImage}");
    background-size: cover;
    background-position: center;
  `};
`;
