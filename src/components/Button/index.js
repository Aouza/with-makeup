import React from "react";

import { Container } from "./style";

const Button = ({ type, value }) => {
  return <Container type={type}>{value}</Container>;
};

export default Button;
