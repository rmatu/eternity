import { BiCart, BiHeart, BiSearch } from "react-icons/bi";
import { Logo, Nav, Special, SvgWrapper, LeftWrapper } from "./styles";
import Link from "next/link";
//@ts-ignore
import User from "../../assets/user.svg";

export const Header = () => {
  return (
    <Nav>
      <LeftWrapper>
        <Logo>ETERNITY</Logo>
      </LeftWrapper>
      <SvgWrapper>
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
