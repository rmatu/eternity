import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  width: 85%;
  margin-left: 1em;
  padding-right: 1em;
  color: #000;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 1rem;
  padding: 0.5rem;
  font-weight: 400;
  position: relative;
  transition: all 0.1s ease;
  margin-bottom: 2rem;
`;

interface ErrorProps {
  show: string;
}

export const Error = styled.div<ErrorProps>`
  color: #ff5757;
  padding: 0rem 2rem;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: translateY(${({ show }) => (show ? "25px" : "10px")});
  transition: all 0.1s;
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 700;
  font-size: 1rem;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0.3em;
  right: 1em;
  svg {
    fill: #2e3136;
    cursor: pointer;
    height: 2.1rem;
    width: 2.1rem;
  }
`;
