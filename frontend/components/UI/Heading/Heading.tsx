import React from "react";
import { Heading1, Heading2, Heading3, Heading4 } from "./styles";

export interface HeadingProps {
  color: string;
  marginB: string;
  size: string;
}

// Don't really know how to fix this
// @ts-ignore
const Heading: React.FC<HeadingProps> = ({
  children,
  color,
  marginB,
  size,
}) => {
  if (size === "h1")
    return (
      <Heading1 color={color} marginB={marginB}>
        {children}
      </Heading1>
    );
  if (size === "h2")
    return (
      <Heading2 color={color} marginB={marginB}>
        {children}
      </Heading2>
    );
  if (size === "h3")
    return (
      <Heading3 color={color} marginB={marginB}>
        {children}
      </Heading3>
    );
  if (size === "h4")
    return (
      <Heading4 color={color} marginB={marginB}>
        {children}
      </Heading4>
    );
};
export default Heading;
