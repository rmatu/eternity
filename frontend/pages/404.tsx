import Head from "next/head";
import { useRouter } from "next/router";

import { Header } from "../components/Header/Header";
import Button from "../components/UI/Button/Button";
import Heading from "../components/UI/Heading/Heading";
import { Content, LogginWrapper } from "../layout/cartLayout";

const Custom404 = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="Cart" content="User's cart" />
      </Head>
      <Header />
      <Content>
        <LogginWrapper>
          <Heading size="h1" color="#fff">
            404
          </Heading>
          <p>The page you were looking for does not exist.</p>
          <div>
            <Button onClick={() => router.push("/")} margin="1em 0 0 0 " bColor="#be6a15">
              Home
            </Button>
          </div>
        </LogginWrapper>
      </Content>
    </>
  );
};

export default Custom404;
