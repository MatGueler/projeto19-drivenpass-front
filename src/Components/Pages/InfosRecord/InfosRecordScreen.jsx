// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { BASE_URL, getCookieByName } from "../../../mock/data.js";
// import UserContext from "../../contexts/UserContext";
import { Container } from "../../Container/Container";
import { Main, DeleteCredential, Infos, Info } from "./InfosRecordStyle";
import { Header2 } from "../../Templates/Header/Header";
import { TiDelete } from "react-icons/ti";

export default function InfoRecordScreen() {
  return (
    <Container>
      <Header2 />
      <Main>
        <h1>Credenciais</h1>
        <Infos>
          <h2>Site 1</h2>
          <Info>
            <h3>URL</h3>
            <p>https://linux.com.br</p>
          </Info>
          <Info>
            <h3>URL</h3>
            <p>https://linux.com.br</p>
          </Info>
        </Infos>
        <DeleteCredential>
          <TiDelete size={60} color="red" cursor="pointer" />
        </DeleteCredential>
      </Main>
    </Container>
  );
}
