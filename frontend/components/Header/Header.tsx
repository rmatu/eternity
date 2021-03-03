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
  SvgContainer,
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
  const { items: cartItems }: CartState = useSelector(
    (state: AppState) => state.cart
  );
  const { items: favoritesItems }: CartState = useSelector(
    (state: AppState) => state.favorites
  );
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
          <SvgContainer>
            <a>
              <BiCart />
            </a>
            {cartItems.length > 0 && (
              <Qty cart>
                <p>{cartItems.length}</p>
              </Qty>
            )}
          </SvgContainer>
        </Link>
        <Link href="/favorites">
          <SvgContainer>
            <a>
              <BiHeart />
              {favoritesItems.length > 0 && (
                <Qty>
                  <p>{favoritesItems.length}</p>
                </Qty>
              )}
            </a>
          </SvgContainer>
        </Link>
        <Link href="/account">
          <a>
            <User />
          </a>
        </Link>
      </SvgWrapper>
      <Hamburger open={open} setOpen={() => setOpen(!open)} />
      <Ul open={open}>
        <Link href="/cart">
          <Li>
            <a>Cart</a>
          </Li>
        </Link>
        <Link href="/favorites">
          <Li>
            <a>Favorites</a>
          </Li>
        </Link>
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
