import React from "react";
import { Step, Wrapper, Nav, Ul, StraightLine } from "./styles";
import { useRouter } from "next/router";
interface SideCartNavProps {
  step: number;
}

const SideCartNav: React.FC<SideCartNavProps> = ({ step }) => {
  const router = useRouter();

  const handleClick = (x: number) => {
    if (x > step) {
      return;
    } else {
      router.push(`/cart/step-${x}`);
    }
  };

  return (
    <Wrapper>
      <Nav>
        <Ul>
          <Step active={step >= 1} onClick={() => handleClick(1)}>
            <p>1</p>
          </Step>

          <StraightLine active={step >= 2} />

          <Step active={step >= 2} onClick={() => handleClick(2)}>
            <p>2</p>
          </Step>

          <StraightLine active={step >= 3} />

          <Step active={step >= 3} onClick={() => handleClick(3)}>
            <p>3</p>
          </Step>

          <StraightLine active={step >= 4} />

          <Step active={step >= 4} onClick={() => handleClick(4)}>
            <p>4</p>
          </Step>
        </Ul>
      </Nav>
    </Wrapper>
  );
};
export default SideCartNav;
