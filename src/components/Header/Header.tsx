import { DivNavButtons, DivNavIcon, Logo, Nav } from "./HeaderStyle";
import logo from "../../assets/logo.svg";
import { FaCartPlus } from "react-icons/fa6";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Nav>
      <Link to="/"><Logo src={logo} alt="Logo do site" /></Link> 
        <DivNavButtons>
          <Link to="/"><Button>Home</Button></Link> 
          <Link to="/order"> <Button>Order now!</Button></Link> 
          <Link to="/contact"> <Button>Contact us</Button></Link> 
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
