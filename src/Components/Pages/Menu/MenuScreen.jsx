// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { BASE_URL, getCookieByName } from "../../../mock/data.js";
// import UserContext from "../../contexts/UserContext";
import { Container } from "../../Container/Container";
import { Icon, Main, Quantify, Record, Records } from "./MenuStyle";
import { IoExit } from "react-icons/io5";
import { Header2 } from "../../Templates/Header/Header";

export default function MenuScreen() {
  return (
    <Container>
      <Header2 />
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
