import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiCart, BiCheck, BiSearch } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import User from "../../assets/user.svg";
import { CartState } from "../../redux/cart/cartTypes";
import { cleanUp, toggleNavbar } from "../../redux/navbar/navbarActions";
import { NavbarState } from "../../redux/navbar/navbarTypes";
import { AppState } from "../../redux/rootReducer";
import { UserState } from "../../redux/user/userTypes";
import Button from "../UI/Button/Button";
import { Dropdown } from "../UI/Dropdown/Dropdown";
import Hamburger from "../UI/Hamburger/Hamburger";
import {
  DesktopInputWrapper,
  Form,
  Input,
  LeftWrapper,
  Li,
  Logo,
  Nav,
  Qty,
  SvgContainer,
  SvgWrapper,
  Ul,
} from "./styles";

export const Header = () => {
  const { items: cartItems }: CartState = useSelector((state: AppState) => state.cart);
  const { items: favoritesItems }: CartState = useSelector((state: AppState) => state.favorites);
  const { user }: UserState = useSelector((state: AppState) => state.user);
  const { open }: NavbarState = useSelector((state: AppState) => state.navbar);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const router = useRouter();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setSearchOpen(false);
    dispatch(cleanUp());
    router.push(`/search?q=${searchQuery}`);
  };

  return (
    <>
      <Nav>
        <LeftWrapper>
          <Link href="/">
            <Logo>ETERNITY</Logo>
          </Link>
        </LeftWrapper>
        <SvgWrapper>
          <Dropdown />
          <DesktopInputWrapper>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Input
                open={searchOpen}
                value={searchQuery}
                placeholder="Search product..."
                onChange={(e) => handleInputChange(e)}
              />
            </Form>
          </DesktopInputWrapper>
          <DesktopInputWrapper>
            <BiSearch onClick={() => setSearchOpen(!searchOpen)} />
          </DesktopInputWrapper>
          <Link href="/cart/step-1">
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
                <HiOutlineHeart />
                {favoritesItems.length > 0 && (
                  <Qty>
                    <p>{favoritesItems.length}</p>
                  </Qty>
                )}
              </a>
            </SvgContainer>
          </Link>
          <Link href={user ? "/account" : "/login"}>
            <a>
              <SvgContainer>
                <div className="user">
                  <User />
                  {user && <BiCheck className="check" />}
                </div>
              </SvgContainer>
            </a>
          </Link>
        </SvgWrapper>
        <Hamburger
          open={open}
          setOpen={() => {
            dispatch(toggleNavbar());
          }}
        />
        <Ul open={open}>
          <Link href="/cart/step-1">
            <Li>
              <a onClick={() => dispatch(cleanUp())}>Cart</a>
            </Li>
          </Link>
          <Link href="/favorites">
            <Li>
              <a onClick={() => dispatch(cleanUp())}>Favorites</a>
            </Li>
          </Link>
          <Li>Sale</Li>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Input
                margin="0 0.5em 0 0"
                open={true}
                placeholder="Search product..."
                onChange={(e) => handleInputChange(e)}
              />
            </Form>
            <BiSearch type="submit" onClick={(e) => handleSubmit(e)} />
          </div>
          <Li>
            <Link href={user ? "/account" : "/login"}>
              <Button onClick={() => dispatch(cleanUp())} margin="1em 0" bColor="">
                {user ? "Account" : "Sign in"}
              </Button>
            </Link>
          </Li>
        </Ul>
      </Nav>
    </>
  );
};
