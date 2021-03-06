import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
  gap: 0.4rem;

  > button {
    margin: 0;
  }

  @media (max-width: 72rem) {
    padding: 2rem 0;
    max-width: 100%;
  }
`;
