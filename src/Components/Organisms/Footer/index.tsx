import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FooterContainer } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <ul>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p>
        <span>Costs</span> &copy; 2023
      </p>
    </FooterContainer>
  );
};
