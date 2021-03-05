import styled from "styled-components";

interface WrapperProps {
  width?: string;
}

export const Wrapper = styled.nav<WrapperProps>`
  display: flex;
  position: sticky;
  top: 90px;
  position: -webkit-sticky;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: ${({ width }) => (width ? width : "")};

  @media (max-width: 1320px) {
    display: none;
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;

  a {
    transition: all 0.1s;
    opacity: 70%;
  }

  li {
    margin: 0.7em 0;
  }

  a {
    :hover {
      opacity: 100%;
    }
  }
`;
