import styled from "styled-components";

export const Container = styled.header`
  height: 100px;
`;

export const Wrapper = styled.div`
  max-width: 70rem;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button > svg * {
    color: var(--color-main-gold);
  }

  @media (max-width: 72rem) {
    max-width: 50rem;
  }

  @media (max-width: 52rem) {
    max-width: 30rem;
  }
`;

export const Logo = styled.img`
  width: 10rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  > ul {
    display: flex;
    align-items: center;

    > li {
      a {
        padding: 1rem;
        font-weight: 800;
        color: var(--color-main-gold);
        text-transform: uppercase;
        border-radius: 0.2rem;

        &:hover {
          background-color: var(--color-main-gold);
          color: var(--color-text-white);
          box-shadow: 0 0 20px 10px var(--color-light-shadow-gold);
        }
      }
    }
  }
`;
