// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { BASE_URL, getCookieByName } from "../../../mock/data.js";
// import UserContext from "../../contexts/UserContext";
import { Container } from "../../Container/Container";
import {
  Form,
  Header,
  Icon,
  Logo,
  Main,
  Quantify,
  Record,
  Records,
} from "./MenuStyle";
import logo from "../../../Assets/Image/logo.png";
import { Input } from "../../Input/InputStyle";
import { Button } from "../../Button/ButtonStyle";
import { IoExit } from "react-icons/io5";

export default function MenuScreen() {
  return (
    <Container>
      <Header>
        <Logo>
          <img src={logo} alt="logo" />
          <h2>DrivenPass</h2>
        </Logo>
        <IoExit size={50} color="#0a5286" />
      </Header>
      <Main>
        <h2>Minhas senhas</h2>
        <Records>
          <Record>
            <Icon>
              <IoExit size={50} color="#0a5286" />
            </Icon>
            <h3>Nome do registro</h3>
            <Quantify>
              <p>4</p>
            </Quantify>
          </Record>
          <Record>
            <Icon>
              <IoExit size={50} color="#0a5286" />
            </Icon>
            <h3>Nome do registro</h3>
            <Quantify>
              <p>4</p>
            </Quantify>
          </Record>
        </Records>
      </Main>
    </Container>
  );
}
