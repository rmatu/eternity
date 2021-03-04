import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  padding: 1em;
  background-color: #1a1a1b;
  border-radius: 1em;
  border-color: #1a1a1b;
  width: 100%;
  height: 7em;
  color: white;
  resize: none;

  ::-webkit-scrollbar {
    width: 8px;
    background: #0d141f;
    border-radius: 0 8px 8px 0;
  }
  ::-webkit-scrollbar-thumb {
    background: #525861;
    border-radius: 0 8px 8px 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
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
  display: none;
  font-weight: 700;
  font-size: 1rem;
`;
