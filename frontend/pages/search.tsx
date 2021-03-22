import { useState } from "react";
import Head from "next/head";
import React from "react";
import { Header } from "../components/Header/Header";
import axios from "axios";
import { IProduct } from "../types";
import {
  Content,
  SortOptions,
  Option,
  FavoritesWrapper,
  ProductsWrapper,
  Product,
  ImageWrapper,
  ImageContent,
  ProductInfo,
} from "../layout/searchLayout";
import Heading from "../components/UI/Heading/Heading";
import Image from "next/image";
import { useRouter } from "next/router";
import Discount from "../components/UI/Discount/Discount";
import Favorite from "../components/UI/Favorite/Favorite";
import { addToFavorites, removeFromFavorites } from "../redux/favorites/favoritesActions";
import Price from "../components/UI/Price/Price";
import Button from "../components/UI/Button/Button";
import Popup from "../components/UI/Popup/Popup";
import { dispatchToPlace } from "../utils/reduxHelpers";
import { localStorageNames } from "../constants";
import { useDispatch } from "react-redux";
import { SideNavbar } from "../components/SideNavbar/SideNavbar";
import { addToCart } from "../redux/cart/cartActions";

interface searchProps {
  data: {
    products: IProduct[];
    similarProducts: IProduct[];
    message?: string;
  };
}

export enum SortingMethod {
  LOWEST_PRICE = "lowestPrice",
  HIGHEST_PRICE = "highestPrice",
  BIGGEST_DISCOUNT = "biggestDiscount",
}

const Search: React.FC<searchProps> = ({ data }) => {
  const [sortingMethod, setSortingMethod] = useState<SortingMethod>(SortingMethod.LOWEST_PRICE);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [addToCartPopup, setAddToCartPopup] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="order" content="User's order details" />
      </Head>
      <Header />
      <Content>
        <SideNavbar />

        <FavoritesWrapper>
          <Heading size="h1" color="#fff">
            Searched items
          </Heading>
          <ProductsWrapper>
            {data.products &&
              data.products.map((watch) => (
                <Product key={watch._id}>
                  <ImageWrapper>
                    <ImageContent>
                      <Image
                        onClick={() => router.push(`/products/${watch._id}`)}
                        alt={`${watch.name} image`}
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${watch.mainProductImage}`}
                        layout="fill"
                        quality={100}
                      />
                    </ImageContent>
                    <Discount prevPrice={watch.prevPrice} price={watch.price} />
                    <Favorite
                      productId={watch._id}
                      onClick={() => {
                        dispatchToPlace(watch._id, localStorageNames.FAVORITES, dispatch);
                      }}
                    />
                  </ImageWrapper>
                  <ProductInfo>
                    <Heading color="#fff" size="h4">
                      {watch.name}
                    </Heading>
                    <p>{watch.brand}</p>

                    <Price
                      fontWeight="400"
                      margin="0 0 0.5em 0"
                      price={watch.price}
                      prevPrice={watch.prevPrice || null}
                      row
                    />
                    <Button
                      bColor="#be6a15"
                      margin="0 0.5em 2em 0"
                      padding="0.3em 3em"
                      onClick={() => {
                        setAddToCartPopup(true);
                        setTimeout(() => {
                          setAddToCartPopup(false);
                        }, 5000);
                        dispatchToPlace(watch._id, localStorageNames.CART_ITEMS, dispatch);
                      }}
                    >
                      Add
                    </Button>
                  </ProductInfo>
                </Product>
              ))}
          </ProductsWrapper>
          <Heading size="h1" margin="1em 0" color="#fff">
            Similar Products
          </Heading>
          <ProductsWrapper>
            {data.similarProducts &&
              data.similarProducts.map((watch) => (
                <Product key={watch._id}>
                  <ImageWrapper>
                    <ImageContent>
                      <Image
                        onClick={() => router.push(`/products/${watch._id}`)}
                        alt={`${watch.name} image`}
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${watch.mainProductImage}`}
                        layout="fill"
                        quality={100}
                      />
                    </ImageContent>
                    <Discount prevPrice={watch.prevPrice} price={watch.price} />
                    <Favorite
                      productId={watch._id}
                      onClick={() => {
                        dispatchToPlace(watch._id, localStorageNames.FAVORITES, dispatch);
                      }}
                    />
                  </ImageWrapper>
                  <ProductInfo>
                    <Heading color="#fff" size="h4">
                      {watch.name}
                    </Heading>
                    <p>{watch.brand}</p>

                    <Price
                      fontWeight="400"
                      margin="0 0 0.5em 0"
                      price={watch.price}
                      prevPrice={watch.prevPrice || null}
                      row
                    />
                    <Button
                      bColor="#be6a15"
                      margin="0 0.5em 2em 0"
                      padding="0.3em 3em"
                      onClick={() => {
                        setAddToCartPopup(true);
                        setTimeout(() => {
                          setAddToCartPopup(false);
                        }, 5000);
                        dispatchToPlace(watch._id, localStorageNames.CART_ITEMS, dispatch);
                      }}
                    >
                      Add
                    </Button>
                  </ProductInfo>
                </Product>
              ))}
          </ProductsWrapper>
        </FavoritesWrapper>
      </Content>
      <Popup showPopup={showPopup}>Item removed from favorites!</Popup>
      <Popup showPopup={addToCartPopup}>Item added to cart!</Popup>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { data } = await axios.get(`/api/products/search?q=${ctx.query.q}`);
  return {
    props: {
      data,
    },
  };
}

export default Search;
