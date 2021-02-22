import styled from "styled-components";

export const SpecificationWrapper = styled.ul`
  max-width: 100%;
  font-size: 1.2rem;
`;

export const SpecificationRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  border-bottom: 1px solid #6d6d6d;

  :last-of-type {
    border-bottom: none;
  }
`;

export const SpecificationItem = styled.li<{ bolder?: any }>`
  font-weight: ${({ bolder }) => (bolder ? "700" : "300")};
  color: ${({ bolder }) => (bolder ? "white" : "#cdd0d3")};
`;
