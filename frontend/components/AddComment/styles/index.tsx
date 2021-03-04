import styled from "styled-components";
import { Form } from "formik";

export const Wrapper = styled.div<{ visible: boolean }>`
  margin-top: 4em;
  transition: all 0.5s;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  height: ${({ visible }) => (visible ? "auto" : "0")};
  overflow: hidden;
  width: 100%;

  @media (max-width: 500px) {
    margin-top: 1em;
  }
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BottomDiv = styled.div`
  width: 100%;
  margin-top: 0.6em;
  display: flex;
  justify-content: flex-end;
`;

export const StyledForm = styled(Form)``;
