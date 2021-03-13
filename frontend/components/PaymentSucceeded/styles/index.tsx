import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  min-height: calc(100vh - 7em);
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
  }

  svg {
    fill: #be6a15;
    width: 10em;
    height: 10em;
  }
`;
