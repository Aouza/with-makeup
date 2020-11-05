import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import LogoImage from "../../assets/images/logo.jpg";
import { menuItems } from "../../services/api";
import MobileMenu from "../MobileMenu";

import { Container, Wrapper, Nav, Logo } from "./style";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const widthScreen = "(max-width: 72rem)";

  const detectScreenMobile = (widthScreen) => {
    const { matches } = window.matchMedia(widthScreen);
    matches ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    detectScreenMobile(widthScreen);
    window.addEventListener("resize", () => detectScreenMobile(widthScreen));
  }, []);

  return (
    <Container>
      <Wrapper>
        <Logo src={LogoImage} alt="Withney Rodrigues" />
        {isMobile ? (
          <button onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <MdClose size={22} /> : <GiHamburgerMenu size={22} />}
          </button>
        ) : (
          <Nav>
            <ul>
              {menuItems.map(({ itemMenu }, index) => (
                <li key={index}>
                  <a href="!#">{itemMenu}</a>
                </li>
              ))}
            </ul>
          </Nav>
        )}
      </Wrapper>
      <MobileMenu openMenu={openMenu} />
    </Container>
  );
};

export default Header;
