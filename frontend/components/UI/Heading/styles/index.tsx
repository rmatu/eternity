import styled, { css } from "styled-components";

export interface Props {
  color: string;
  margin?: string;
  size?: string;
}

const baseStyle = css<Props>`
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;

export const Heading1 = styled.h1`
  font-size: 3.25rem;
  ${baseStyle}
`;

export const Heading2 = styled.h2`
  font-weight: 400;
  font-size: 2.375rem;
  ${baseStyle}
`;

export const Heading3 = styled.h3`
  font-weight: 400;
  font-size: 1.8rem;
  ${baseStyle}
`;

export const Heading4 = styled.h4`
  font-size: 1.5rem;
  ${baseStyle}
`;
