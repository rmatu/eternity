import styled from "styled-components";

export const Wrapper = styled.ul`
  max-width: 100%;
  font-size: 1.2rem;
  padding: 2em;
  background-color: #1a1a1b;
  border-radius: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  border-bottom: 1px solid #6d6d6d;

  :last-of-type {
    border-bottom: none;
  }
`;

export const Item = styled.li<{ bolder?: any }>`
  font-weight: ${({ bolder }) => (bolder ? "700" : "300")};
  color: ${({ bolder }) => (bolder ? "white" : "#cdd0d3")};
  padding: 0 1em;
`;
