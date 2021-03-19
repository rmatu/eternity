import styled from "styled-components";

//#3b5441

export const Wrapper = styled.div<{ variant: string }>`
  color: ${({ variant }) => (variant === "danger" ? "#f53535" : "#2cb978")};
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5em 0;
`;
