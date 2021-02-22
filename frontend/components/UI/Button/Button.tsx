import React from "react";
import { Wrapper, StyledButton } from "./styles";

interface ButtonProps {
  children: React.ReactNode[] | React.ReactNode;
  margin?: string;
  disabled?: boolean;
  padding?: string;
  bColor?: string;
  // For future loader
  loading?: any;
  flex?: any;
  bFlex?: any;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  margin,
  disabled,
  padding,
  flex,
  bColor,
  loading,
  bFlex,
  ...rest
}) => {
  return (
    <Wrapper margin={margin} flex={flex}>
      <StyledButton
        bFlex={bFlex}
        bColor={bColor}
        padding={padding}
        disabled={disabled}
        {...rest}
      >
        {loading ? loading : children}
      </StyledButton>
    </Wrapper>
  );
};
export default Button;
