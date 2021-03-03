import Head from "next/head";
import { Header } from "../components/Header/Header";
import {
  Content,
  ButtonsRow,
  MainContent,
  Description,
  ImageContent,
  ImageWrapper,
  DescriptionContent,
} from "../layout/homeLayout";
import Link from "next/link";
import axios from "axios";
import { IProduct } from "../types";
import Image from "next/image";
import { twoDecimals } from "../utils/format";
import Button from "../components/UI/Button/Button";
import Heading from "../components/UI/Heading/Heading";
import Rating from "../components/UI/Rating/Rating";
import { useDispatch } from "react-redux";
import { SideNavbar } from "../components/SideNavbar/SideNavbar";
import { dispatchToPlace } from "../utils/reduxHelpers";
import { localStorageNames } from "../constants";

const Home = ({ data }) => {
  const {
    mainProductImage,
    brand,
    description,
    price,
    rating,
    name,
    _id,
  }: IProduct = data[0];

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
              <Heading size="h3" margin="0 0 0.2em 0" color="#be6a15">
                ${twoDecimals(price)}
              </Heading>
              <Rating rating={rating} margin="0 0 0.5em 0" />
              <p>{description}</p>
              <ButtonsRow>
                <Button
                  onClick={() =>
                    dispatchToPlace(_id, localStorageNames.CART_ITEMS, dispatch)
                  }
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
              <Image
                src={fullUrl}
                alt={`${name} image`}
                layout="fill"
                quality={100}
              ></Image>
            </ImageWrapper>
          </ImageContent>
        </MainContent>
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
