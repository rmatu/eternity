import React from "react";
import { StyledInput, IconWrapper, Wrapper, Error } from "./styles";

interface InputProps {
  field: any;
  form: any;
  width?: string;
}

const Input: React.FC<InputProps> = ({
  field,
  form: { touched, errors },
  children,
  ...props
}) => {
  return (
    <Wrapper>
      <StyledInput {...field} {...props} />
      <IconWrapper>{children}</IconWrapper>
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </Wrapper>
  );
};

export default Input;
