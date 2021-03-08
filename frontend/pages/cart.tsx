import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Content, BasketWrapper } from "../layout/cartLayout";
import SideCartNav from "../components/SideCartNav/SideCartNav";
import Basket from "../components/Basket/Basket";
import Heading from "../components/UI/Heading/Heading";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="Cart" content="User's cart" />
      </Head>
      <Header />
      <Content>
        <SideCartNav />
        <BasketWrapper>
          <Heading size="h1" margin="0 0 1em 0" color="#fff">
            My Basket
          </Heading>
          <Basket />
        </BasketWrapper>
      </Content>
    </>
  );
};

export default Cart;
