// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { BASE_URL, getCookieByName } from "../../../mock/data.js";
// import UserContext from "../../contexts/UserContext";
import { Container } from "../../Container/Container";
import { Form, Logo, Main } from "./RegisterStyle";
import logo from "../../../Assets/Image/logo.png";
import { Input } from "../../Input/InputStyle";
import { Button } from "../../Button/ButtonStyle";

export default function RegisterScreen() {
  return (
    <Container>
      <Main>
        <Logo>
          <img src={logo} alt="logo" />
          <h2>DrivenPass</h2>
        </Logo>
        <Form>
          <p>Usuário (e-mail)</p>
          <Input type="text" />
          <p>Senha</p>
          <Input type="text" />
          <Button color="#9bfbb0">Criar</Button>
          <Button color="#FB9B9B">{"< Voltar"}</Button>
        </Form>
      </Main>
    </Container>
  );
}
