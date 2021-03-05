import styled from "styled-components";
import { Form } from "formik";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 7em);
  width: 100%;
`;

//#472d2d

export const LoginForm = styled(Form)`
  width: 400px;
  padding: 3em;
  border-radius: 1em;
  background-color: #363333;

  h4 {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 100%;
  height: 5rem;
  width: 5rem;
  margin: 1em auto 1em auto;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

export const BottomTextWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  bottom: 2rem;
  width: 100%;
`;

export const SpanWrapper = styled.div<{ bold?: any; center?: any }>`
  font-weight: 700;
  margin-left: 0.5rem;
  transition: all 0.2s;
  color: #df7c19;

  &:hover {
    cursor: pointer;
    color: #f1881e;
  }
  text-decoration: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
