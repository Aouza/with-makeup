import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  right: 1rem;
  bottom: 3rem;

  > svg {
    color: white;
    font-size: 1.4rem;
    opacity: 0.9;
    cursor: pointer;
  }

  @media (max-width: 52rem) {
    position: initial;
    bottom: 0;
    right: 0;
    flex-direction: row;
    justify-content: center;
    height: 0;

    > svg {
      & + svg {
        margin-left: 2rem;
      }
    }
  }
`;
