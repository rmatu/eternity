import React from "react";
import { AppState } from "../../redux/rootReducer";
import { Wrapper, Product, InfoContainer, InfoItem } from "./styles";
import { useSelector } from "react-redux";
import { CartState } from "../../redux/cart/cartTypes";

interface BasketProps {}

const Basket: React.FC<BasketProps> = ({}) => {
  const { items }: CartState = useSelector((state: AppState) => state.cart);
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
export default Basket;
