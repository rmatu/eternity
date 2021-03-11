import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import PageLoader from "../../components/PageLoader/PageLoader";
import SideCartNav from "../../components/SideCartNav/SideCartNav";
import Heading from "../../components/UI/Heading/Heading";
import {
  Content,
  PlaceOrderWrapper,
  ShippingInfo,
  BolderSpan,
  OrderSummary,
  OrderInfoWrapper,
  OrderInfoRow,
  ItemRow,
  ImageContent,
  ImageWrapper,
} from "../../layout/cartLayout";
import { setStep } from "../../redux/cart/cartActions";
import { CartState } from "../../redux/cart/cartTypes";
import { AppState } from "../../redux/rootReducer";
import { IProduct, IBasket } from "../../types";
import { twoDecimals } from "../../utils/format";
import { mergeTwoArraysOfObject } from "../../utils/helpers";

const Step3 = () => {
  const {
    step,
    shippingAddress,
    items,
    shippingPrice,
  }: CartState = useSelector((state: AppState) => state.cart);
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [basket, setBasket] = useState<IBasket[] | null>([]);
  const dispatch = useDispatch();
  const router = useRouter();

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
    dispatch(setStep(3));
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
                  <BolderSpan>Name:</BolderSpan> {shippingAddress.fullName}
                </p>
                <p>
                  <BolderSpan>Email:</BolderSpan> {shippingAddress.email}
                </p>
                <p>
                  <BolderSpan>Address:</BolderSpan>{" "}
                  {`${shippingAddress.address}, ${shippingAddress.postalCode}, ${shippingAddress.city}`}
                </p>
                <p>
                  <BolderSpan>Country: </BolderSpan> {shippingAddress.country}
                </p>
              </ShippingInfo>
              <ShippingInfo>
                <Heading size="h4" margin="0 0 0.5em 0" color="#fff">
                  Ordered Items
                </Heading>
                {basket.map((el) => (
                  <ItemRow>
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
            </OrderSummary>
          </OrderInfoWrapper>
        </PlaceOrderWrapper>
      </Content>
    </>
  );
};

export default Step3;
