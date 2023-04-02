import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";
import { Nav } from "./styles";

export const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="" />
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
        <li>
          <Link to="/newproject">Novo Projeto</Link>
        </li>
      </ul>
    </Nav>
  );
};
