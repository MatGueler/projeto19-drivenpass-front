import logo from "../../../Assets/Image/logo.png";
import { IoExit } from "react-icons/io5";
import { Header, Logo } from "../Header/HeaderStyle";
export function Header2() {
  return (
    <Header>
      <Logo>
        <img src={logo} alt="logo" />
        <h2>DrivenPass</h2>
      </Logo>
      <IoExit size={50} color="#0a5286" />
    </Header>
  );
}
