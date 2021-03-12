import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import PageLoader from "../../components/PageLoader/PageLoader";
import SideCartNav from "../../components/SideCartNav/SideCartNav";
import Heading from "../../components/UI/Heading/Heading";
import Rating from "../../components/UI/Rating/Rating";
import {
  Content,
  PlaceOrderWrapper,
  ShippingInfo,
  TotalPrice,
  BolderSpan,
  OrderSummary,
  OrderInfoWrapper,
  OrderInfoRow,
  ItemRow,
  PaypalInfo,
  ImageContent,
  ProductName,
  ImageWrapper,
} from "../../layout/cartLayout";
import { setStep } from "../../redux/cart/cartActions";
import { CartState } from "../../redux/cart/cartTypes";
import { AppState } from "../../redux/rootReducer";
import { IProduct, IBasket } from "../../types";
import { twoDecimals } from "../../utils/format";
import { mergeTwoArraysOfObject } from "../../utils/helpers";
import { PayPalButton } from "react-paypal-button-v2";
import Loader from "../../components/UI/Loader/Loader";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";

const Step4 = () => {
  const {
    step,
    shippingAddress,
    items,
    shippingPrice,
  }: CartState = useSelector((state: AppState) => state.cart);
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [basket, setBasket] = useState<IBasket[] | null>([]);
  const [sdkReady, setSdkReady] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!window.paypal) {
      addPayPalScript();
    } else {
      setSdkReady(true);
    }
  }, [dispatch, sdkReady]);

  const successPaymentHandler = (paymentResult) => {
    setOpenModal(false);
    console.log(paymentResult);
  };

  // To make sure, that at this step every product has current price
  useEffect(() => {
    async function fetchData() {
      const cartItems = items.map((el) => el.productId);
      const { data } = await axios.post("/api/products/cartItems", {
        data: {
          cartItems,
        },
      });
      //@ts-ignore
      setProducts([...data]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (products) {
      setBasket(mergeTwoArraysOfObject(products, items));
    }
  }, [products, items]);

  useEffect(() => {
    dispatch(setStep(4));
  }, []);

  if (!products) {
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
        <SideCartNav step={step} />

        <PlaceOrderWrapper>
          <Heading size="h1" color="#fff">
            Place Order
          </Heading>
          <OrderInfoWrapper>
            <div style={{ width: "100%" }}>
              <ShippingInfo>
                <Heading size="h4" margin="0 0 0.5em 0" color="#fff">
                  Shipping
                </Heading>
                <p>
                  <BolderSpan>Full name:</BolderSpan> {shippingAddress.fullName}
                </p>
                <p>
                  <BolderSpan>Address:</BolderSpan>{" "}
                  {`${shippingAddress.address}, ${shippingAddress.postalCode}, ${shippingAddress.city}`}
                </p>
                <p>
                  <p>
                    <BolderSpan>Country: </BolderSpan> {shippingAddress.country}
                  </p>
                  <BolderSpan>Email:</BolderSpan> {shippingAddress.email}
                </p>
              </ShippingInfo>
              <ShippingInfo>
                <Heading size="h4" margin="0 0 0.5em 0" color="#fff">
                  Ordered Items
                </Heading>

                {basket.map((el) => (
                  <ItemRow key={el._id}>
                    <ImageContent>
                      <ImageWrapper>
                        <Image
                          alt={`${el.name} image`}
                          src={`${process.env.NEXT_PUBLIC_API_URL}/${el.mainProductImage}`}
                          layout="fill"
                          quality={100}
                        />
                      </ImageWrapper>
                    </ImageContent>
                    <ProductName column center>
                      <p>{el.name}</p>
                      <Rating rColor="#be6a15" rating={el.rating} />
                    </ProductName>
                    <TotalPrice>
                      <p>
                        {`${el.qty} x $` +
                          twoDecimals(el.price) +
                          ` = $` +
                          twoDecimals(el.price * el.qty)}
                      </p>
                    </TotalPrice>
                  </ItemRow>
                ))}
              </ShippingInfo>
            </div>
            <OrderSummary>
              <Heading size="h4" margin="0 0 0.5em 0" color="#fff">
                Order Summary
              </Heading>
              <OrderInfoRow>
                <p>
                  <BolderSpan>Items price:</BolderSpan>
                </p>
                <p>
                  $
                  {twoDecimals(
                    basket
                      .map((el) => el.price * el.qty)
                      .reduce((a, b) => a + b, 0)
                  )}
                </p>
              </OrderInfoRow>
              <OrderInfoRow>
                <p>
                  <BolderSpan>Shipping:</BolderSpan>
                </p>
                <p>${twoDecimals(shippingPrice)}</p>
              </OrderInfoRow>
              <OrderInfoRow>
                <p>
                  <BolderSpan>Total:</BolderSpan>
                </p>
                <p>
                  $
                  {twoDecimals(
                    basket
                      .map((el) => el.price * el.qty)
                      .reduce((a, b) => a + b, 0) + shippingPrice
                  )}
                </p>
              </OrderInfoRow>

              {!sdkReady ? (
                <OrderInfoRow margin="3em 0 0 0" center>
                  <Loader />
                </OrderInfoRow>
              ) : (
                <OrderInfoRow center>
                  <Button
                    onClick={() => setOpenModal(true)}
                    margin="1.5em 0 0 0"
                    bColor="#be6a15"
                  >
                    Proceed the payment
                  </Button>
                </OrderInfoRow>
              )}
            </OrderSummary>
          </OrderInfoWrapper>
        </PlaceOrderWrapper>
      </Content>
      <Modal opened={openModal} close={() => setOpenModal(false)}>
        {!sdkReady ? (
          <OrderInfoRow margin="3em 0 0 0" center>
            <Loader />
          </OrderInfoRow>
        ) : (
          <PaypalInfo>
            <PayPalButton
              amount={twoDecimals(
                basket
                  .map((el) => el.price * el.qty)
                  .reduce((a, b) => a + b, 0) + shippingPrice
              )}
              onSuccess={successPaymentHandler}
              style={{
                size: "responsive",
                height: 40,
              }}
            />
          </PaypalInfo>
        )}
      </Modal>
    </>
  );
};

export default Step4;
