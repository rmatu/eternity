import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 7em);
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const BasketWrapper = styled.div`
  width: 100%;
  margin-right: 5em;
`;
