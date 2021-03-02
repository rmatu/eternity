import { useState } from "react";
import { BiCart, BiHeart, BiSearch } from "react-icons/bi";
import {
  Logo,
  Nav,
  SvgWrapper,
  LeftWrapper,
  Ul,
  Li,
  Qty,
  CartContainer,
} from "./styles";
import Link from "next/link";
import { useSelector } from "react-redux";
//@ts-ignore
import User from "../../assets/user.svg";
import { Dropdown } from "../UI/Dropdown/Dropdown";
import Hamburger from "../UI/Hamburger/Hamburger";
import Button from "../UI/Button/Button";
import { CartState } from "../../redux/cart/cartTypes";
import { AppState } from "../../redux/rootReducer";

export const Header = () => {
  const { items }: CartState = useSelector((state: AppState) => state.cart);
  const [open, setOpen] = useState<boolean>(false);
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
          <CartContainer>
            <a>
              <BiCart />
            </a>
            {items.length > 0 && (
              <Qty>
                <p>{items.length}</p>
              </Qty>
            )}
          </CartContainer>
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
      <Hamburger open={open} setOpen={() => setOpen(!open)} />
      <Ul open={open}>
        <Li>Cart</Li>
        <Li>Favorites</Li>
        <Li>Sale</Li>
        <Li>
          <Link href="/account">
            <Button margin="1em 0" bColor="">
              Account
            </Button>
          </Link>
        </Li>
      </Ul>
    </Nav>
  );
};
