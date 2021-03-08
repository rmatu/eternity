import React from "react";
import { AppState } from "../../redux/rootReducer";
import {
  Wrapper,
  Row,
  Product,
  InfoContainer,
  InfoItem,
  Info,
  ImageWrapper,
  BottomRow,
} from "./styles";
import { useSelector } from "react-redux";
import { CartState } from "../../redux/cart/cartTypes";
import { twoDecimals } from "../../utils/format";
import Heading from "../UI/Heading/Heading";
import Image from "next/image";
import Button from "../UI/Button/Button";
import { IProduct } from "../../types";

interface BasketProps {
  products: IProduct[];
}

const Basket: React.FC<BasketProps> = ({}) => {
  return (
    <>
      {/* <Heading size="h1" margin="0 0 1em 0" color="#fff">
        My Basket
      </Heading>

      <Info>
        <Product>
          <p>Product</p>
        </Product>
        <InfoContainer>
          <InfoItem>
            <p>Quantity</p>
          </InfoItem>
          <InfoItem>
            <p>Price</p>
          </InfoItem>
          <InfoItem>
            <p>Total</p>
          </InfoItem>
          <InfoItem>
            <p>Remove</p>
          </InfoItem>
        </InfoContainer>
      </Info>

      <Wrapper>
        {items.map((item) => (
          <Row>
            <Product>
              <ImageWrapper>
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${item.product.mainProductImage}`}
                  alt={`${item.product.name} image`}
                  layout="fill"
                  quality={100}
                />
              </ImageWrapper>
            </Product>
            <InfoContainer>
              <InfoItem>
                <p>{item.qty}</p>
              </InfoItem>
              <InfoItem>
                <p>{twoDecimals(item.product.price)}</p>
              </InfoItem>
              <InfoItem>
                <p>{twoDecimals(item.product.price * item.qty)}</p>
              </InfoItem>
              <InfoItem>
                <p>Remove</p>
              </InfoItem>
            </InfoContainer>
          </Row>
        ))}
      </Wrapper>

      <BottomRow>
        <div>
          <Heading size="h1" color="#fff">
            Total:{" "}
            {`$${twoDecimals(
              items
                .map((el) => el.product.price * el.qty)
                .reduce((a, b) => a + b, 0)
            )}`}
            {`(${items.length} items)`}
          </Heading>
        </div>
        <div>
          <Button>Buy</Button>
        </div>
      </BottomRow> */}
    </>
  );
};

export default Basket;
