import styled from "styled-components";

interface RatingProps {
  color?: any;
  margin?: any;
}

export const Wrapper = styled.div``;

export const RatingWrapper = styled.div<RatingProps>`
  margin: ${({ margin }) => (margin ? margin : null)};
  svg {
    fill: ${({ color }) => (color ? "#be6a15" : null)};
  }
`;
