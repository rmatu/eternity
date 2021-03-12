import styled from "styled-components/macro";

interface WrappedModalProps {
  opened: boolean;
}

export const WrappedModal = styled.div<WrappedModalProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ opened }) =>
    opened ? "translate(-50%, -50%)" : "translate(-50%, -150%)"};
  z-index: 10;
  width: 90%;
  max-width: 36em;
  max-height: 90vh;
  display: flex;
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.5em 3.5em var(--shadow);
  border-radius: 1em;
  padding: 3em 3em 4em 3em;
  background: white;
  transition: all 0.1s;
  color: black;
  padding: 1em 0;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
    background: #0d141f;
    border-radius: 0 8px 8px 0;
  }
  ::-webkit-scrollbar-thumb {
    background: #525861;
    border-radius: 0 8px 8px 0;
  }

  .cancel {
    position: absolute;
    height: 1em;
    width: 1em;
    top: 1em;
    left: 1em;
    fill: black;
    :hover {
      cursor: pointer;
    }
  }
`;
