import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import PageLoader from "../../components/PageLoader/PageLoader";
import Button from "../../components/UI/Button/Button";
import Heading from "../../components/UI/Heading/Heading";
import MessageBox from "../../components/UI/MessageBox/MessageBox";
import {
  BolderSpan,
  Content,
  ImageContent,
  ImageWrapper,
  ItemRow,
  OrderInfoRow,
  OrderInfoWrapper,
  OrderSummary,
  PlaceOrderWrapper,
  ProductName,
  ShippingInfo,
  TotalPrice,
} from "../../layout/ordersLayout";
import { OrderState } from "../../redux/order/orderTypes";
import { AppState } from "../../redux/rootReducer";
import { IOrder } from "../../types";
import { twoDecimals } from "../../utils/format";

interface Props {}

const Order: React.FC<Props> = ({}) => {
  const { orders }: OrderState = useSelector((state: AppState) => state.order);
  const [order, setOrder] = useState<IOrder>();
  const router = useRouter();

  useEffect(() => {
    if (orders) {
      const item = orders.find((el) => el._id === router.query.id);
      setOrder(item);
    }
  }, [orders]);

  if (!orders || !order) {
    return <PageLoader />;
  }

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="order" content="User's order details" />
      </Head>
      <Header />
      <Content>
        <PlaceOrderWrapper>
          <Heading size="h1" margin="0.5em 0 0 0" color="#fff">
            Order Summary
          </Heading>
          <OrderInfoWrapper>
            <div style={{ width: "100%" }}>
              <ShippingInfo>
                <Heading size="h4" margin="0 0 0.5em 0" color="#fff">
                  Shipping
                </Heading>
                <p>
                  <BolderSpan>Full name:</BolderSpan> {order.shippingAddress.fullName}
                </p>
                <p>
                  <BolderSpan>Address:</BolderSpan>{" "}
                  {`${order.shippingAddress.address}, ${order.shippingAddress.postalCode}, ${order.shippingAddress.city}`}
                </p>

                <p>
                  <BolderSpan>Country: </BolderSpan> {order.shippingAddress.country}
                </p>
              </ShippingInfo>
              <ShippingInfo>
                <Heading size="h4" margin="0 0 0.5em 0" color="#fff">
                  Shipping process
                </Heading>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Successfuly delivered on {order.deliveredAt.substring(0, 10)}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">
                    Not delivered - order payed on {order.paidAt.substring(0, 10)}
                  </MessageBox>
                )}
              </ShippingInfo>
              <ShippingInfo>
                <Heading size="h4" margin="0 0 0.5em 0" color="#fff">
                  Ordered Items
                </Heading>

                {order.orderItems.map((el) => (
                  <ItemRow key={el._id}>
                    <ImageContent onClick={() => router.push(`/products/${el.product}`)}>
                      <ImageWrapper>
                        <Image
                          alt={`${el.name} image`}
                          src={`${process.env.NEXT_PUBLIC_API_URL}/${el.image}`}
                          layout="fill"
                          quality={100}
                        />
                      </ImageWrapper>
                    </ImageContent>
                    <ProductName column center>
                      <p>{el.name}</p>
                      {/* <Rating rColor="#be6a15" rating={el.rating} /> */}
                    </ProductName>
                    <TotalPrice>
                      <p>{`${el.qty} x $` + twoDecimals(el.price) + ` = $` + twoDecimals(el.price * el.qty)}</p>
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
                <p>${twoDecimals(order.itemsPrice)}</p>
              </OrderInfoRow>
              <OrderInfoRow>
                <p>
                  <BolderSpan>Shipping:</BolderSpan>
                </p>
                <p>${twoDecimals(order.shippingPrice)}</p>
              </OrderInfoRow>
              <OrderInfoRow>
                <p>
                  <BolderSpan>Total:</BolderSpan>
                </p>
                <p>${twoDecimals(order.totalPrice)}</p>
              </OrderInfoRow>
            </OrderSummary>
          </OrderInfoWrapper>
          <Button bColor="#be6a15" onClick={() => router.push("/account")} margin="2em 0" flex>
            Go Back
          </Button>
        </PlaceOrderWrapper>
      </Content>
    </>
  );
};
export default Order;
