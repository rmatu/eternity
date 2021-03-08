import { useState, useEffect } from "react";
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
import { CartItem } from "../../redux/cart/cartTypes";
import { mergeTwoArraysOfObject } from "../../utils/helpers";

interface BasketProps {
  products: IProduct[];
  cartItems: CartItem[];
}

const Basket: React.FC<BasketProps> = ({ products, cartItems }) => {
  const [basket, setBasket] = useState([]);

  // I'm doing it this way, because i want to make sure, that this is the current price for an item.
  // This shop is supposed to be changing frequently by the Administrator.
  // For example, user adds item to the cart, quits for 2 weeks, than comes back.
  // Whole product info would be stored in redux, and the price might not be current for this item
  // I'm storing the product id and qty in redux, then fetching the data, and merging it with the qty

  useEffect(() => {
    setBasket(mergeTwoArraysOfObject(products, cartItems));
  }, []);

  return (
    <>
      <Heading size="h1" margin="0 0 1em 0" color="#fff">
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
        {basket.map((item) => (
          <Row key={item._id}>
            <Product>
              <ImageWrapper>
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${item.mainProductImage}`}
                  alt={`${item.name} image`}
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
                <p>{twoDecimals(item.price)}</p>
              </InfoItem>
              <InfoItem>
                <p>{twoDecimals(item.price * item.qty)}</p>
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
              basket.map((el) => el.price * el.qty).reduce((a, b) => a + b, 0)
            )}`}
            {`(${basket.length} items)`}
          </Heading>
        </div>
        <div>
          <Button>Buy</Button>
        </div>
      </BottomRow>
    </>
  );
};

export default Basket;
