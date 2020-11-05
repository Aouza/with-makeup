import React from "react";
import { services } from "../../services/api";
import { Container, Icon } from "./style";

const ServiceItem = () => {
  return services.map(({ title, icon, description }, index) => (
    <Container>
      <Icon src={icon} />

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Container>
  ));
};

export default ServiceItem;
