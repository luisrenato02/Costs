import { Link } from "react-router-dom";
import logo192 from "../../../public/logo192.png";
import { Nav } from "./styles";

export const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <img src={logo192} alt="" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/company">Empresa</Link>
        </li>
      </ul>
    </Nav>
  );
};
