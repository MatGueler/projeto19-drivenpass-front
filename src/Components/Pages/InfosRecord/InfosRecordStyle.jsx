import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  h1 {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    color: #ffffff;
    font-size: 18px;
    background-color: #0a5286;
    box-sizing: border-box;
  }
`;

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;

  h2 {
    margin-bottom: 20px;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const DeleteCredential = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
