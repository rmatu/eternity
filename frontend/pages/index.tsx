import Head from "next/head";
import { Header } from "../components/Header/Header";
import {
  SideNavbar,
  Links,
  Content,
  SocialLinks,
  MainContent,
  Description,
  ImageContent,
  ImageWrapper,
} from "../layout/homeLayout";
import Link from "next/link";
import axios from "axios";
import { IProduct } from "../types";
import Image from "next/image";

const Home = ({ data }) => {
  const { mainProductImage, brand }: IProduct = data[0];
  const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${mainProductImage}`;

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="description" content="Main page of this website" />
      </Head>
      <Header />
      <Content>
        <SideNavbar>
          <Links>
            <Link href="/men">
              <a>Men</a>
            </Link>
            <Link href="/women">
              <a>Women</a>
            </Link>
            <Link href="/kids">
              <a>Kids</a>
            </Link>
            <Link href="/sale">
              <a>Sale</a>
            </Link>
          </Links>
          <SocialLinks>Explore</SocialLinks>
        </SideNavbar>
        <MainContent>
          <Description>
            <h2>{brand}</h2>
          </Description>
          <ImageContent>
            <ImageWrapper>
              <Image src={fullUrl} layout="fill" quality={100}></Image>
            </ImageWrapper>
          </ImageContent>
        </MainContent>
      </Content>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get("/api/products");

  return {
    props: {
      data,
    },
  };
}

export default Home;
