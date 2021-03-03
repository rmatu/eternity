import styled from "styled-components";

export const Wrapper = styled.div<{ visible: boolean }>`
  margin-top: 4em;
  transition: all 0.5s;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  height: ${({ visible }) => (visible ? "auto" : "0")};
  overflow: hidden;
  width: 100%;

  @media (max-width: 500px) {
    margin-top: 0;
  }

  button {
    margin-left: 100%;
  }
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextArea = styled.textarea`
  padding: 1em;
  background-color: #1a1a1b;
  border-radius: 1em;
  border-color: #1a1a1b;
  width: 100%;
  height: 5em;
  color: white;
`;
