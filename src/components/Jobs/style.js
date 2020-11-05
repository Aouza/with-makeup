import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 0;

  display: grid;
  grid-template-columns: 0.8fr 2fr;
  gap: 1rem;
  align-items: center;

  > div:first-child {
    padding: 1rem;
    border-left: 6px solid var(--color-main-salmon);

    > h3 {
      margin-bottom: 1rem;
    }

    > button {
      color: var(--color-main-gold);
      padding: 1rem 2rem;
      background-color: var(--color-light-background-gold);
      font-size: 0.7rem;
      border: 2px solid var(--color-main-gold);
      margin: 2rem 0;
      border-radius: 0.2rem;
      font-weight: 900;
      box-shadow: 10px 10px 15px var(--color-light-shadow);
    }
  }

  &:nth-child(odd) {
    grid-template-columns: 2fr 0.8fr;
    text-align: right;

    > div:first-child {
      border-left: 0;
      border-right: 6px solid var(--color-main-salmon);
      order: 2;
    }

    @media (max-width: 52rem) {
      grid-template-columns: 1fr;

      > div:first-child {
        order: initial;
      }
    }
  }

  > div:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0 1rem;
  }

  @media (max-width: 52rem) {
    grid-template-columns: 1fr;
  }
`;
