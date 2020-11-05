import React from "react";
import { menuItems } from "../../services/api";

import { Container } from "./styles";

const MobileMenu = () => {
  return (
    <Container>
      <ul>
        {menuItems.map(({ itemMenu }) => (
          <li>
            <a href="">{itemMenu}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default MobileMenu;
