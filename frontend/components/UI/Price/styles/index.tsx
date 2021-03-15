import styled from "styled-components";

interface WrapperProps {
  actualFontSize?: string;
  prevFontSize?: string;
  margin?: string;
  fontWeight?: string;
  row?: boolean;
}

export const ActualPrice = styled.p`
  color: #be6a15;
`;

export const PrevPrice = styled.p<{ row }>`
  color: #5f5e5c;
  text-decoration: line-through;
  margin-left: ${({ row }) => (row ? "0.5em" : "")};
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ row }) => (row ? "center" : "")};
  ${ActualPrice} {
    font-size: ${({ actualFontSize }) => (actualFontSize ? actualFontSize : "2rem")};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
  }

  ${PrevPrice} {
    font-size: ${({ prevFontSize }) => (prevFontSize ? prevFontSize : "1.3rem")};
  }

  margin: ${({ margin }) => (margin ? margin : "")};
`;
