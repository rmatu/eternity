import React from "react";
import { Heading1, Heading2, Heading3, Heading4 } from "./styles";

export interface HeadingProps {
  color: string;
  margin?: string;
  size: string;
}

// Don't really know how to fix this
// @ts-ignore
const Heading: React.FC<HeadingProps> = ({ children, margin, color, size }) => {
  if (size === "h1")
    return (
      <Heading1 color={color} margin={margin}>
        {children}
      </Heading1>
    );
  if (size === "h2")
    return (
      <Heading2 color={color} margin={margin}>
        {children}
      </Heading2>
    );
  if (size === "h3")
    return (
      <Heading3 color={color} margin={margin}>
        {children}
      </Heading3>
    );
  if (size === "h4")
    return (
      <Heading4 color={color} margin={margin}>
        {children}
      </Heading4>
    );
};
export default Heading;
