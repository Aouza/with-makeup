import React from "react";
import Button from "../Button";
import Input from "./Input";

import { Container } from "./style";

const Form = () => {
  return (
    <Container>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="Seu nome"
        required
      />
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Seu E-mail"
        required
      />
      <Input
        type="text"
        name="telefone"
        id="telefone"
        placeholder="Seu telefone"
        required
      />
      <Input
        type="text"
        name="assunto"
        id="assunto"
        placeholder="Assunto"
        required
      />

      <Button type="submit" value="Enviar" />
    </Container>
  );
};

export default Form;
