import React from "react";
import { menuItems } from "../../services/api";

import { Container } from "./styles";

const MobileMenu = ({ openMenu }) => {
  return (
    <Container openMenu={openMenu}>
      <ul>
        {menuItems.map(({ itemMenu }) => (
          <li key={itemMenu}>
            <a href="!#">{itemMenu}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default MobileMenu;
