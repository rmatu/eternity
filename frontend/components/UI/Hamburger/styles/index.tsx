import styled from "styled-components";

interface BurgerProps {
  open: boolean;
}

export const StyledBurger = styled.button<BurgerProps>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2em;
  height: 2em;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 999;
  span {
    width: 2em;
    height: 0.25em;
    background: white;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    position: relative;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;
