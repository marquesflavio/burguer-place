import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./ButtonStyle";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
