import { useEffect } from "react";
import Head from "next/head";
import { Header } from "../../components/Header/Header";
import { Content, BasketWrapper } from "../../layout/cartLayout";
import SideCartNav from "../../components/SideCartNav/SideCartNav";

import { AppState } from "../../redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { CartState } from "../../redux/cart/cartTypes";
import { setStep } from "../../redux/cart/cartActions";

const Step2 = () => {
  const { step }: CartState = useSelector((state: AppState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStep(2));
  }, []);

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="Cart" content="User's cart" />
      </Head>
      <Header />
      <Content>
        <SideCartNav step={step} />
        <BasketWrapper></BasketWrapper>
      </Content>
    </>
  );
};

export default Step2;
