import { BiCart, BiHeart, BiSearch } from "react-icons/bi";

import { Logo, Nav, Special, SvgWrapper, LeftWrapper } from "./styles";
import Link from "next/link";
//@ts-ignore
import User from "../../assets/user.svg";
import { Dropdown } from "../UI/Dropdown/Dropdown";

export const Header = () => {
  return (
    <Nav>
      <LeftWrapper>
        <Link href="/">
          <Logo>ETERNITY</Logo>
        </Link>
      </LeftWrapper>
      <SvgWrapper>
        <Dropdown />
        <BiSearch />
        <Link href="/cart">
          <a>
            <BiCart />
          </a>
        </Link>
        <Link href="/favorites">
          <a>
            <BiHeart />
          </a>
        </Link>
        <Link href="/account">
          <a>
            <User />
          </a>
        </Link>
      </SvgWrapper>
    </Nav>
  );
};
