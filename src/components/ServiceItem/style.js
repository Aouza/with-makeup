import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  grid-template-columns: auto 1fr;
  padding: 1rem;
  background: #111;
  box-shadow: 0px 0px 50px 0px var(--color-light-shadow-salmon);
  border-radius: 0.2rem;
  border-right: 4px solid var(--color-main-salmon);
  transition: all 0.5s;

  &:hover {
    box-shadow: 0px 0px 50px 0px var(--color-light-shadow-gold);
    border-right: 4px solid var(--color-main-gold);
  }

  > img {
    margin-right: 2rem;
  }

  > div {
    > h3 {
      margin-bottom: 1rem;
    }
  }
`;

export const Icon = styled.img`
  width: 1.4rem;
`;
