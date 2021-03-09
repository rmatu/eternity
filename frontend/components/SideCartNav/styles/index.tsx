import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 20em;

  @media (max-width: 1000px) {
    margin-top: 0.5em;
    justify-content: center;
    width: 100%;
  }
`;

export const Step = styled.li<{ active: boolean }>`
  border: 2px solid ${({ active }) => (active ? "#be6a15" : "#87888a")};
  border-radius: 50%;
  padding: 0.5em 1.1em;

  p {
    color: ${({ active }) => (active ? "#be6a15" : "#87888a")};
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

export const StraightLine = styled.div<{ active: boolean }>`
  width: 2px;
  height: 1em;
  background-color: ${({ active }) => (active ? "#be6a15" : "#87888a")};
  margin: auto;

  @media (max-width: 1000px) {
    flex-direction: row;
    height: 2px;
    width: 1em;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    flex-direction: row;
  }
`;

export const Nav = styled.nav``;
