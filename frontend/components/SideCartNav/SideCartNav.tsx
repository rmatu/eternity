import React from "react";
import { Step, Wrapper, Nav, Ul, StraightLine } from "./styles";

interface SideCartNavProps {}

const SideCartNav: React.FC<SideCartNavProps> = ({}) => {
  return (
    <Wrapper>
      <Nav>
        <Ul>
          <Step active={true}>
            <p>1</p>
          </Step>
          <StraightLine active={false} />
          <Step active={false}>
            <p>2</p>
          </Step>
          <StraightLine active={false} />
          <Step active={false}>
            <p>3</p>
          </Step>
          <StraightLine active={false} />
          <Step active={false}>
            <p>4</p>
          </Step>
        </Ul>
      </Nav>
    </Wrapper>
  );
};
export default SideCartNav;
