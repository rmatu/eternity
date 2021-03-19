import React from "react";
import { Wrapper } from "./styles";

interface MessageBoxProps {
  variant: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ children, variant }) => {
  return <Wrapper variant={variant}>{children}</Wrapper>;
};
export default MessageBox;
