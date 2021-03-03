import styled from "styled-components/macro";

interface WrapperProps {
  showPopup: boolean;
  success?: boolean | null;
  error?: boolean | null;
}

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 1em 2em;
  border-radius: 1em;
  margin: 0 1em 1em 0;
  background-color: #be6a15;
  color: white;
  font-weight: 500;
  transform: ${({ showPopup }) =>
    showPopup ? "translate(0%, 0%)" : "translate(100%, 0%)"};
  opacity: ${({ showPopup }) => (showPopup ? "1" : "0")};
  visibility: ${({ showPopup }) => (showPopup ? "visible" : "hidden")};
  -webkit-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
  transition: all 1s;
  z-index: 1000;
`;
