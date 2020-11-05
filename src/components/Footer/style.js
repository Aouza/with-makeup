import styled from "styled-components";

export const Container = styled.footer`
  padding: 2rem 0;
  background-color: var(--color-dark-gray);
`;

export const Wrapper = styled.div`
  max-width: 70rem;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 0.9rem;
    letter-spacing: 1.2px;
  }
`;
