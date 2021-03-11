import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Wrapper,
  Row,
  Product,
  InfoContainer,
  InfoItem,
  Info,
  ImageWrapper,
  BottomRow,
  ProductInfo,
  ItemsCount,
  PriceWrapper,
  HeaderWrapper,
  BottomRowInfo,
  MobileInfo,
  QtyWrapper,
} from "./styles";
import { twoDecimals } from "../../utils/format";
import Heading from "../UI/Heading/Heading";
import Image from "next/image";
import Button from "../UI/Button/Button";
import { IProduct } from "../../types";
import { CartItem } from "../../redux/cart/cartTypes";
import { mergeTwoArraysOfObject } from "../../utils/helpers";
import { GoTrashcan } from "react-icons/go";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Rating from "../UI/Rating/Rating";
import { addQty, removeItem, subQty } from "../../redux/cart/cartActions";
interface BasketProps {
  products: IProduct[];
  cartItems: CartItem[];
}

const Basket: React.FC<BasketProps> = ({ products, cartItems }) => {
  const [basket, setBasket] = useState([]);
  const dispatch = useDispatch();

  // I'm doing it this way, because i want to make sure, that this is the current price for an item.
  // This shop is supposed to be changing frequently by the Administrator.
  // For example, user adds item to the cart, quits for 2 weeks, than comes back.
  // Whole product info would be stored in redux, and the price might not be current for this item
  // I'm storing the product id and qty in redux, then fetching the data, and merging it with the qty

  useEffect(() => {
    setBasket(mergeTwoArraysOfObject(products, cartItems));
  }, [products, cartItems]);

  return (
    <>
      <HeaderWrapper>
        <Heading size="h1" margin="0 0 0.5em 0" color="#fff">
          My Basket
        </Heading>
      </HeaderWrapper>

      <Info>
        <Product mLeft="3em">
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
              <Link href={`/products/${item._id}`}>
                <a>
                  <ImageWrapper>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}/${item.mainProductImage}`}
                      alt={`${item.name} image`}
                      layout="fill"
                      quality={100}
                    />
                  </ImageWrapper>
                </a>
              </Link>
              <ProductInfo>
                <Heading size="h4" color="#fff">
                  {item.name}
                </Heading>
                <Rating rColor="#be6a15" rating={item.rating} />
              </ProductInfo>
            </Product>
            <InfoContainer>
              <InfoItem>
                <MobileInfo>
                  <p>Quantity</p>
                </MobileInfo>
                <QtyWrapper>
                  <FaMinus onClick={() => dispatch(subQty(item._id))} />
                  <p>{item.qty}</p>
                  <FaPlus onClick={() => dispatch(addQty(item._id))} />
                </QtyWrapper>
              </InfoItem>
              <InfoItem weight="300">
                <MobileInfo>
                  <p>Price</p>
                </MobileInfo>
                <p>${twoDecimals(item.price)}</p>
              </InfoItem>
              <InfoItem>
                <MobileInfo>
                  <p>Total</p>
                </MobileInfo>
                <p>${twoDecimals(item.price * item.qty)}</p>
              </InfoItem>
              <InfoItem trash>
                <MobileInfo>
                  <p>Remove</p>
                </MobileInfo>
                <GoTrashcan onClick={() => dispatch(removeItem(item._id))} />
              </InfoItem>
            </InfoContainer>
          </Row>
        ))}
      </Wrapper>

      <BottomRow>
        <BottomRowInfo>
          <Heading size="h1" color="#fff">
            Total:
          </Heading>
          <PriceWrapper>
            {`$${twoDecimals(
              basket.map((el) => el.price * el.qty).reduce((a, b) => a + b, 0)
            )}`}
          </PriceWrapper>
          <ItemsCount>{`(${basket
            .map((el) => el.qty)
            .reduce((a, b) => a + b, 0)} items)`}</ItemsCount>
        </BottomRowInfo>
        <div>
          <Link href="/cart/step-2">
            <a>
              <Button>Buy</Button>
            </a>
          </Link>
        </div>
      </BottomRow>
    </>
  );
};

export default Basket;
