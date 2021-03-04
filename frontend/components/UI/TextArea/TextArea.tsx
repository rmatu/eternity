import React from "react";
import { StyledTextArea, Wrapper, Error } from "./styles";

interface InputProps {
  field: any;
  form: any;
  width?: string;
}

const TextArea: React.FC<InputProps> = ({
  field,
  form: { touched, errors },
  children,
  ...props
}) => {
  return (
    <Wrapper>
      <StyledTextArea {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </Wrapper>
  );
};

export default TextArea;
