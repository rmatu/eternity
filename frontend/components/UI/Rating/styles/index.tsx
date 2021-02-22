import styled from "styled-components";

interface RatingProps {
  rColor?: any;
  margin?: any;
}

export const Wrapper = styled.div``;

export const RatingWrapper = styled.div<RatingProps>`
  margin: ${({ margin }) => (margin ? margin : null)};
  svg {
    fill: ${({ rColor }) => (rColor ? "#be6a15" : "")};
  }
`;
