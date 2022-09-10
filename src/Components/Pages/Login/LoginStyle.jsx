import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20%;
  box-sizing: border-box;

  p {
    width: 100%;
    text-align: center;
  }
`;

export const Logo = styled.div`
  width: 100%;
  text-align: center;
  img {
    height: 160px;
  }
  h2 {
    font-family: "Recursive";
    font-weight: 400;
    font-size: 36px;
    color: #0a5286;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin: 30px 0;
  padding-bottom: 30px;
  border-bottom: solid 1px black;

  button {
    width: 100%;
    height: 40px;
    border: 0;
    background-color: #9bfbb0;
  }

  p {
    font-family: "Recursive";
    font-weight: 400;
    width: 100%;
  }
`;
