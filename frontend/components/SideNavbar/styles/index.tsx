import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;

  a {
    opacity: 70%;
    margin: 0.7em 0;

    :hover {
      opacity: 100%;
    }
  }
`;
