// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { BASE_URL, getCookieByName } from "../../../mock/data.js";
// import UserContext from "../../contexts/UserContext";
import { Container } from "../../Container/Container";
import { Form, Logo, Main } from "./LoginStyle";
import logo from "../../../Assets/Image/logo.png";
import { Input } from "../../Input/InputStyle";

export default function LoginScreen() {
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
          <button>Acessar</button>
        </Form>
        <p>Primeiro acesso? Crie sua conta!</p>
      </Main>
    </Container>
  );
}
