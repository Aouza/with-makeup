import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 0%;
  background-color: #000;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  overflow: hidden;

  > ul {
    > li > a {
      color: #fff;
    }
  }
`;
