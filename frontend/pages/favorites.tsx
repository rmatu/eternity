import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import PageLoader from "../components/PageLoader/PageLoader";
import Favorite from "../components/UI/Favorite/Favorite";
import Heading from "../components/UI/Heading/Heading";
import Popup from "../components/UI/Popup/Popup";
import {
  Content,
  FavoritesWrapper,
  ImageContent,
  ImageWrapper,
  ProductsWrapper,
  SortOptions,
  Product,
  ProductInfo,
  Flex,
  Option,
} from "../layout/favoritesLayout";
import { addToFavorites } from "../redux/favorites/favoritesActions";
import { FavoritesState } from "../redux/favorites/favoritesTypes";
import { AppState } from "../redux/rootReducer";
import { IProduct } from "../types";
import { useRouter } from "next/router";
import Price from "../components/UI/Price/Price";
import { sortByAndReturnArray } from "../utils/helpers";
import Discount from "../components/UI/Discount/Discount";
import Button from "../components/UI/Button/Button";
import { localStorageNames } from "../constants";
import { dispatchToPlace } from "../utils/reduxHelpers";

export enum SortingMethod {
  LOWEST_PRICE = "lowestPrice",
  HIGHEST_PRICE = "highestPrice",
  BIGGEST_DISCOUNT = "biggestDiscount",
}

/*
 TODO: Pagination 
 */

const Favorites = () => {
  const { items }: FavoritesState = useSelector((state: AppState) => state.favorites);
  const [sortingMethod, setSortingMethod] = useState<SortingMethod>(SortingMethod.LOWEST_PRICE);
  const [showPopup, setShowPopup] = useState(false);
  const [addToCartPopup, setAddToCartPopup] = useState(false);
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.post("/api/products/cartItems", {
        data: {
          cartItems: items,
        },
      });
      setProducts([...sortByAndReturnArray(data, SortingMethod.LOWEST_PRICE)]);
    }
    fetchData();
  }, []);

  const removeFromFavorites = (productId) => {
    dispatch(addToFavorites(productId));
    setProducts([...products.filter((el) => el._id !== productId)]);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  useEffect(() => {
    if (products) {
      setProducts([...sortByAndReturnArray(products, sortingMethod)]);
    }
  }, [sortingMethod]);

  if (!products) {
    return <PageLoader />;
  }

  if (items.length === 0) {
    return (
      <>
        <Head>
          <title>Eternity</title>
          <meta name="Favorites" content="User's favorites items" />
        </Head>
        <Header />

        <Flex data-testid="no-favorites-text">
          <Heading size="h1" color="#fff">
            You don't have any favorites items...
          </Heading>
        </Flex>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="Cart" content="User's cart" />
      </Head>
      <Header />
      <Content>
        <SortOptions>
          <Heading size="h4" color="#fff">
            Sorting options
          </Heading>
          <Option
            data-testid="lowest-price"
            active={sortingMethod === SortingMethod.LOWEST_PRICE}
            onClick={() => setSortingMethod(SortingMethod.LOWEST_PRICE)}
          >
            <p>Lowest price</p>
          </Option>
          <Option
            data-testid="highest-price"
            active={sortingMethod === SortingMethod.HIGHEST_PRICE}
            onClick={() => setSortingMethod(SortingMethod.HIGHEST_PRICE)}
          >
            <p>Highest price</p>
          </Option>
          <Option
            data-testid="biggest-discount"
            active={sortingMethod === SortingMethod.BIGGEST_DISCOUNT}
            onClick={() => setSortingMethod(SortingMethod.BIGGEST_DISCOUNT)}
          >
            <p>Biggest discount</p>
          </Option>
        </SortOptions>
        <FavoritesWrapper>
          <Heading size="h1" color="#fff">
            Favorites items
          </Heading>
          <ProductsWrapper>
            {products.map((watch) => (
              <Product key={watch._id} data-testid="product">
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
                      removeFromFavorites(watch._id);
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
      <Popup showPopup={addToCartPopup}>Item removed from favorites!</Popup>
    </>
  );
};

export default Favorites;
