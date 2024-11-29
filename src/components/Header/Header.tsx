import { DivNavButtons, DivNavIcon, Logo, Nav } from "./HeaderStyle";
import logo from "../../assets/logo.svg";
import { FaCartPlus } from "react-icons/fa6";
import Button from "../Button/Button";

const Header = () => {
  return (
    <>
      <Nav>
        <Logo src={logo} alt="Logo do site" />
        <DivNavButtons>
          <Button>Home</Button>
          <Button>Order now!</Button>
          <Button>Contact us</Button>
        </DivNavButtons>
        <DivNavIcon>
          <Button>
            <FaCartPlus />
          </Button>
        </DivNavIcon>
      </Nav>
    </>
  );
};

export default Header;
