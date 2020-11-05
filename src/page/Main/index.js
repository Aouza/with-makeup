import React from "react";
import AboutImage from "../../assets/images/about.jpg";
import { services } from "../../services/api";
import Jobs from "../../components/Jobs";
import ServiceItem from "../../components/ServiceItem";
import SocialMedia from "../../components/SocialMedia";

import {
  Container,
  Calling,
  BackgroundImageProfessional,
  About,
  Services,
  CardServices,
  AboutServices,
  Portfolio,
  Contato,
} from "./style";
import Button from "../../components/Button";
import Form from "../../components/Form";

const Main = () => {
  return (
    <>
      <Calling>
        <Container>
          <BackgroundImageProfessional />
          <SocialMedia />
        </Container>
      </Calling>
      <About>
        <Container>
          <div>
            <h2>SOBRE MIM</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              quibusdam tempore accusantium sunt cupiditate obcaecati, non
              soluta maxime inventore maiores nihil unde, veniam dolorum? Neque
              voluptatibus facilis dolores veniam eius. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Impedit, quibusdam tempore
              accusantium sunt cupiditate obcaecati, non soluta maxime inventore
              maiores nihil unde, veniam dolorum? Neque voluptatibus facilis
              dolores veniam eius. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Impedit, quibusdam tempore accusantium sunt
              cupiditate obcaecati, non soluta maxime inventore maiores nihil
              unde, veniam dolorum? Neque voluptatibus facilis dolores veniam
              eius.
            </p>
            <Button type="button" value="Veja meus trabalhos" />
          </div>

          <img src={AboutImage} alt="" />
        </Container>
      </About>
      <Services>
        <Container>
          <CardServices>
            <ServiceItem />
          </CardServices>
          <AboutServices>
            <h2>Lorem ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum hic dolor incidunt tempore labore, ullam commodi,
              accusantium illum officia doloribus tempora suscipit debitis magni
              quos, impedit aspernatur perspiciatis ipsam omnis!
            </p>
          </AboutServices>
        </Container>
      </Services>
      <Portfolio>
        <Container>
          <div>
            <h2>PORTFÓLIO</h2>
            <p>Veja alguns dos meus trabalhos.</p>
          </div>

          {services.map((job) => (
            <Jobs data={job} />
          ))}
        </Container>
      </Portfolio>
      <Contato>
        <Container>
          <div>
            <h2>CONTATO</h2>
            <p>
              Possui alguma dúvida? Entre em contato. <br />
              ficarei feliz em te responder.
            </p>
          </div>

          <Form />
        </Container>
      </Contato>
    </>
  );
};

export default Main;
