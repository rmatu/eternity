import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/Ti";
import { StyledDropdown, Ul, Li } from "./styles";
import Link from "next/link";

export const Dropdown = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <StyledDropdown>
      <TiArrowSortedDown onClick={() => setClicked(!clicked)} />
      {clicked && (
        <Ul>
          <Link href="#">
            <Li>Men</Li>
          </Link>
          <Link href="#">
            <Li>Women</Li>
          </Link>
          <Link href="#">
            <Li>Kids</Li>
          </Link>
          <Link href="#">
            <Li>Sale</Li>
          </Link>
        </Ul>
      )}
    </StyledDropdown>
  );
};
