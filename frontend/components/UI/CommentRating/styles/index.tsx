import styled from "styled-components";

interface RatingProps {
  rColor?: any;
  margin?: any;
}

export const Wrapper = styled.div``;

export const RatingWrapper = styled.div<RatingProps>`
  display: flex;
  flex-direction: row;
  margin: ${({ margin }) => (margin ? margin : null)};
  svg {
    height: 1.5em;
    width: 1.5em;
    fill: ${({ rColor }) => (rColor ? "#be6a15" : "")};
    cursor: pointer;
  }
`;
