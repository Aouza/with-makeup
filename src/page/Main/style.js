import styled from "styled-components";
import CallingBackground from "../../assets/images/background-calling.jpg";

export const Container = styled.div`
  max-width: 70rem;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  position: relative;

  @media (max-width: 72rem) {
    max-width: 50rem;
  }

  @media (max-width: 52rem) {
    max-width: 30rem;
  }
`;

export const Calling = styled.section`
  width: 100%;
  height: calc(100vh - 100px);
  padding-bottom: 4rem;
`;

export const BackgroundImageProfessional = styled.div`
  background-image: url("${CallingBackground}");
  background-position: center top;
  background-size: cover;
  max-width: 30rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;

  &:after {
    content: "WR MAKEUP";
    width: 100%;
    display: block;
    color: #fff;
    font-size: 7rem;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    -webkit-transform: translateX(-70%);
    -ms-transform: translateX(-70%);
    -webkit-transform: translateX(-70%);
    -ms-transform: translateX(-70%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    text-shadow: -11px -20px #a2524d;
    font-family: "Playfair Display", serif;
    font-weight: 800;
    line-height: 1.1;
    text-align: center;
    opacity: 0.9;

    @media (max-width: 52rem) {
      font-size: 4rem;
      bottom: 6rem;
    }
  }
`;

export const About = styled.section`
  background-color: var(--color-dark-gray);
  padding: 4rem 0;
  color: var(--color-main-white);

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;

    div {
      padding: 2rem;

      p {
        font-size: 0.8rem;
        opacity: 0.6;
        line-height: 1.8;
        -webkit-letter-spacing: 0.4px;
        -moz-letter-spacing: 0.4px;
        -ms-letter-spacing: 0.4px;
        letter-spacing: 0.4px;
        font-family: "Open Sans", sans-serif;
      }
    }

    > img {
      width: 20rem;
      border: 0.7rem solid var(--color-main-gold);
      box-shadow: 20px 17px 35px var(--color-light-shadow),
        -30px -25px 0px var(--color-main-black);
      margin: 2rem auto;
    }
  }

  @media (max-width: 72rem) {
    > div {
      grid-template-columns: 1fr;

      > div {
        padding: 2rem 0;
      }

      > img {
        margin: 2rem 0;
        width: 100%;
      }
    }
  }
`;

export const Services = styled.section`
  padding: 6rem 0;
  color: var(--color-main-white);

  > div {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  @media (max-width: 72rem) {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;

export const CardServices = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding-right: 2rem;

  @media (max-width: 72rem) {
    order: 2;
    padding-top: 4rem;
    padding-right: 0;
  }

  @media (max-width: 52rem) {
    grid-template-columns: 1fr;
  }
`;

export const AboutServices = styled.div`
  padding-left: 2rem;

  > h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 72rem) {
    padding-left: 0;
  }
`;

export const Portfolio = styled.section`
  background-color: var(--color-dark-gray);
  padding: 5rem 0;

  > div > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      color: var(--color-text-white);
      font-size: 0.7rem;
      text-transform: uppercase;
      opacity: 0.5;
      letter-spacing: 1.4px;
    }
  }

  @media (max-width: 52rem) {
    > div > div:first-child {
      align-items: baseline;
      flex-direction: column;
    }
  }
`;

export const Contato = styled.section`
  padding: 5rem 0;

  > div > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      color: var(--color-text-white);
      font-size: 0.7rem;
      text-transform: uppercase;
      opacity: 0.5;
      letter-spacing: 1.4px;
      line-height: 1.4;
    }
  }

  @media (max-width: 52rem) {
    > div > div:first-child {
      align-items: baseline;
      flex-direction: column;
    }
  }
`;
