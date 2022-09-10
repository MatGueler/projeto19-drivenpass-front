import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  width: 100%;
  border: 0;
  border-radius: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
  background-color: ${(props) => props.color};
`;
