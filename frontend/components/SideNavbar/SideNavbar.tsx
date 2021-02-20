import Link from "next/link";
import { Wrapper, Links } from "./styles";

export const SideNavbar = () => {
  return (
    <Wrapper>
      <Links>
        <Link href="/men">
          <a>Men</a>
        </Link>
        <Link href="/women">
          <a>Women</a>
        </Link>
        <Link href="/kids">
          <a>Kids</a>
        </Link>
        <Link href="/sale">
          <a>Sale</a>
        </Link>
      </Links>
    </Wrapper>
  );
};
