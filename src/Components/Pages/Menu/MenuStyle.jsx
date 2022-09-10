import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  h2 {
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

  p {
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin: 5px 0;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  img {
    height: 60px;
  }
  h2 {
    font-family: "Righteous", cursive;
    font-weight: 400;
    font-size: 36px;
    color: #0a5286;
    margin-left: 20px;
  }
`;

export const Records = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  box-sizing: border-box;
`;

export const Record = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 20px;
  h3 {
    width: 100%;
    text-align: start;
    box-sizing: border-box;
    margin: 0 10px;
  }
  p {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: #0a5286;
    right: 0;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const Quantify = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;
