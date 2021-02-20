import styled from "styled-components";

export const StyledDropdown = styled.div`
  display: inline-block;
  position: relative;
  transition: all 500ms;
  :hover {
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  z-index: 10;
  position: absolute;
  border-radius: 10px;
  left: 10px;
  top: 50px;
  width: 200px;
  background-color: rgba(20, 20, 20, 1);
  box-shadow: 0 6px 5px -5px rgba(0, 0, 0, 0.3);
`;

export const Li = styled.li`
  padding: 0.5em 0 0.5em 2em;
  :first-of-type {
    padding: 1em 0 0.5em 2em;
  }
  :last-of-type {
    padding: 0.5em 0 1em 2em;
  }
  :hover {
    cursor: pointer;
    background-color: rgba(30, 30, 30, 1);
    border-radius: 10px;
  }
`;
