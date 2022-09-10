// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { BASE_URL, getCookieByName } from "../../../mock/data.js";
// import UserContext from "../../contexts/UserContext";
import { Container } from "../../Container/Container";
import {
  Icon,
  Main,
  NewCredential,
  Quantify,
  Record,
  Records,
} from "./CredentialsStyle";
import { Header2 } from "../../Templates/Header/Header";
import { IoExit } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

export default function CredentialScreen() {
  return (
    <Container>
      <Header2 />
      <Main>
        <h2>Credenciais</h2>
        <Records>
          <Record>
            <Icon>
              <IoExit size={50} color="#0a5286" />
            </Icon>
            <h3>Site 1</h3>
          </Record>
          <Record>
            <Icon>
              <IoExit size={50} color="#0a5286" />
            </Icon>
            <h3>Site 2</h3>
          </Record>
        </Records>
        <NewCredential>
          <IoIosAddCircle size={60} color="#0a5286" cursor="pointer" />
        </NewCredential>
      </Main>
    </Container>
  );
}
