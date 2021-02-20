import React from "react";
import { StyledBurger } from "./styles";

interface HamburgerProps {
  open: boolean;
  setOpen: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={setOpen}>
      <span></span>
      <span></span>
      <span></span>
    </StyledBurger>
  );
};

export default Hamburger;
