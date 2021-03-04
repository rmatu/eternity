import React from "react";
import { StyledInput, Wrapper, Error } from "./styles";

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
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </Wrapper>
  );
};

export default Input;
