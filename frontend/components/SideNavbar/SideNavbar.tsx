import Link from "next/link";
import { Wrapper, Links } from "./styles";

interface SideNavbarProps {
  width?: string;
}

export const SideNavbar: React.FC<SideNavbarProps> = ({ width }) => {
  return (
    <Wrapper width={width} data-testid="side-nav">
      <Links>
        <li>
          <Link href="/men">
            <a>Men</a>
          </Link>
        </li>
        <li>
          <Link href="/women">
            <a>Women</a>
          </Link>
        </li>
        <li>
          <Link href="/kids">
            <a>Kids</a>
          </Link>
        </li>
        <li>
          <Link href="/sale">
            <a>Sale</a>
          </Link>
        </li>
      </Links>
    </Wrapper>
  );
};
