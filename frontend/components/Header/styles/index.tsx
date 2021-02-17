import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 2em 0;
  height: 7em;
`;

export const Logo = styled.p`
  font-size: 2.4rem;
  font-weight: lighter;
  letter-spacing: 0.3rem;
`;

export const Special = styled.span`
  color: #be6a15;
`;

export const SvgWrapper = styled.div`
  svg {
    fill: #fff;
    margin: 0 1em;
    height: 2em;
    width: 2em;
  }
`;

export const ShippingInfo = styled.div`
  margin-left: 5em;
  font-size: 1.1rem;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
