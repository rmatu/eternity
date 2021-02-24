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
          <Link href="/men">
            <a>
              <Li>Men</Li>
            </a>
          </Link>
          <Link href="/women">
            <a>
              <Li>Women</Li>
            </a>
          </Link>
          <Link href="/kids">
            <a>
              <Li>Kids</Li>
            </a>
          </Link>
          <Link href="/sale">
            <a>
              <Li>Sale</Li>
            </a>
          </Link>
        </Ul>
      )}
    </StyledDropdown>
  );
};
