import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../components/Header/Header";
import { SideNavbar } from "../components/SideNavbar/SideNavbar";
import Button from "../components/UI/Button/Button";
import Heading from "../components/UI/Heading/Heading";
import Popup from "../components/UI/Popup/Popup";
import Price from "../components/UI/Price/Price";
import Rating from "../components/UI/Rating/Rating";
import { localStorageNames } from "../constants";
import {
  ButtonsRow,
  Content,
  Description,
  DescriptionContent,
  ImageContent,
  ImageWrapper,
  MainContent,
} from "../layout/homeLayout";
import { IProduct } from "../types";
import { dispatchToPlace } from "../utils/reduxHelpers";

const Home = ({ data }) => {
  const { mainProductImage, brand, description, price, rating, name, _id }: IProduct = data[0];
  const [showPopup, setShowPopup] = useState(false);

  const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${mainProductImage}`;
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="description" content="Main page of this website" />
      </Head>
      <Header />
      <Content>
        <SideNavbar />
        <MainContent>
          <Description>
            <DescriptionContent>
              <Heading size="h1" color="#fff">
                {name}
              </Heading>
              <Heading size="h2" color="#fff;">
                {brand}
              </Heading>
              <Price margin="0 0 0.5em 0" price={price} prevPrice={data[0].prevPrice || null} />
              <Rating rColor="#be6a15" rating={rating} margin="0 0 0.5em 0" />
              <p>{description}</p>
              <ButtonsRow>
                <Button
                  onClick={() => {
                    dispatchToPlace(_id, localStorageNames.CART_ITEMS, dispatch);
                    setShowPopup(true);
                    setTimeout(() => {
                      setShowPopup(false);
                    }, 5000);
                  }}
                  margin="2em 0 0 0"
                  bColor="#be6a15"
                >
                  Add
                </Button>
                <Link href={`/products/${_id}`}>
                  <a>
                    <Button margin="2em">Details</Button>
                  </a>
                </Link>
              </ButtonsRow>
            </DescriptionContent>
          </Description>
          <ImageContent>
            <ImageWrapper>
              <Image src={fullUrl} alt={`${name} image`} layout="fill" quality={100}></Image>
            </ImageWrapper>
          </ImageContent>
        </MainContent>
        <Popup showPopup={showPopup}>Item added to cart!</Popup>
      </Content>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get("/api/products/main-product");

  return {
    props: {
      data,
    },
  };
}

export default Home;
