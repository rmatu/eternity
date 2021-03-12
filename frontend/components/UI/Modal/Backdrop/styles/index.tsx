import styled from "styled-components";

interface WrapperProps {
  opened: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  transition: all 0.1s;
  z-index: 5;
`;
