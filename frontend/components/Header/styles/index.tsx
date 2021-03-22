import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  position: -webkit-sticky;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 2em 0;
  height: 7em;
  z-index: 10;
  background-color: #000;
  -webkit-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
  svg {
    height: 2em;
    width: 2em;
  }
`;

export const Logo = styled.p`
  font-size: 2.4rem;
  font-weight: lighter;
  letter-spacing: 0.3rem;

  :hover {
    cursor: pointer;
  }
`;

export const Special = styled.span`
  color: #be6a15;
`;

export const SvgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .user {
    svg {
      fill: #fff;
    }
  }

  svg {
    margin: 0 1em;
    height: 2em;
    width: 2em;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ShippingInfo = styled.div`
  margin-left: 5em;
  font-size: 1.1rem;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export interface UlProps {
  open: boolean;
}

export const Li = styled.li`
  padding: 16px 10px;
  cursor: pointer;
  transition: all 0.1s;
  color: white;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: none;
  :not(:last-child) {
    margin-right: 2em;
  }
  &:hover {
  }
  svg {
    margin-right: 0.6rem;
  }
  @media (max-width: 764px) {
    border: none !important;
    margin-right: 0;
    width: 16em;
    padding: 0 2em;
    padding-top: 18px;
    padding-bottom: 18px;
    border-bottom: none;
    :not(:last-child) {
      margin-right: 0;
    }
    :last-child {
      border-top: 1px solid white !important;
      margin-top: 2em;
    }
    :first-child {
      margin-top: 5em;
    }
    svg {
      height: 100%;
      display: inline-block;
      margin-right: 0.4em;
    }
  }
`;

export const Ul = styled.ul<UlProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 764px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    background: rgb(45, 52, 54);
    background: linear-gradient(180deg, rgba(45, 52, 54, 1) 0%, rgba(0, 0, 0, 1) 100%);
    position: fixed;
    transform: ${({ open }) => (open ? "translateY(0%)" : "translateY(-100%)")};
    top: 0;
    right: 0;
    height: 60vh;
    width: 100%;
    padding-top: 3.5em;
    transition: transform 0.3s ease-in-out;
    -webkit-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
    box-shadow: ${({ open }) => (open ? "0px 3px 19px 0px rgba(0, 0, 0, 0.75)" : "none")};
    z-index: 998;
    ${Li} {
      transition: opacity 0.5s ease-in-out;
      opacity: ${({ open }) => (open ? "1" : "0")};
    }
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

export const Qty = styled.div<{ cart?: boolean }>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: ${({ cart }) => (cart ? "#be6a15" : "#bb1e1e")};
  border-radius: 50%;
  width: 17px;
  height: 17px;
  top: -0.8em;
  right: 0;

  p {
    color: #fff;
    font-size: 80%;
    font-weight: 700;
  }
`;

export const SvgContainer = styled.div`
  position: relative;
  svg {
    :hover {
      cursor: pointer;
    }
  }
  .check {
    stroke: #fff;
    fill: #fff;
    width: 20px;
    height: 20px;
    position: absolute;
    top: -0.8em;
    right: -1.1em;
    stroke: transparent;
  }
`;

export const MobileQty = styled.div<{ cart?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ cart }) => (cart ? "#fe5000" : "#d72323")};
  width: 18px;
  height: 18px;
  margin-left: 0.25em;
  font-weight: 500;
`;

export const Input = styled.input<{ open: boolean; margin?: string }>`
  border-radius: 1em;
  transition: all 0.2s;
  width: ${({ open }) => (open ? "15em" : "0")};
  padding: ${({ open }) => (open ? "0.2em 1em" : "0")};
  border: ${({ open }) => (open ? "1em" : "0")};

  @media (max-width: 684px) {
    width: ${({ open }) => (open ? "10em" : "0")};
  }

  @media (max-width: 600px) {
    width: 12em;
    margin: ${({ margin }) => margin};
  }
`;

export const DesktopInputWrapper = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;
