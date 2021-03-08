import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Content, BasketWrapper } from "../layout/cartLayout";
import SideCartNav from "../components/SideCartNav/SideCartNav";
import Basket from "../components/Basket/Basket";
import { AppState } from "../redux/rootReducer";
import { useSelector } from "react-redux";
import { CartState } from "../redux/cart/cartTypes";
import { IProduct } from "../types";
import PageLoader from "../components/PageLoader/PageLoader";

// BIG DISCLAIMER
// Because localStorage can't be red from the server side this page has to be
// Client Side Rendered. I know i could use Cookies for this, but it's already
// to late. I will try it in my next project (－‸ლ)

const Cart = () => {
  const { items }: CartState = useSelector((state: AppState) => state.cart);
  const [products, setProducts] = useState<IProduct[]>([]);
  console.log(products);

  useEffect(() => {
    async function fetchData() {
      const cartItems = items.map((el) => el.productId);
      const { data } = await axios.post("/api/products/cartItems", {
        data: {
          cartItems,
        },
      });
      setProducts([...data]);
    }
    fetchData();
  }, []);

  if (products.length === 0) {
    return <PageLoader />;
  }

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
          <Basket products={products} />
        </BasketWrapper>
      </Content>
    </>
  );
};

export default Cart;
