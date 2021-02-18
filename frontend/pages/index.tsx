import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header/Header";
import {
  SideNavbar,
  Links,
  Content,
  SocialLinks,
  SocialIconsWrapper,
  MainContent,
  Description,
  ImageWrapper,
} from "../Layout/homeLayout";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Home = () => {
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
          <SocialLinks>
            <SocialIconsWrapper>
              <a href="https://facebook.com">
                <FaFacebookF />
              </a>
            </SocialIconsWrapper>
            <SocialIconsWrapper>
              <a href="https://twitter.com">
                <FaTwitter />
              </a>
            </SocialIconsWrapper>
            <SocialIconsWrapper>
              <a href="https://instagram.com">
                <FaInstagram />
              </a>
            </SocialIconsWrapper>
          </SocialLinks>
        </SideNavbar>
        <MainContent>
          <Description>
            <h2>Le Locle Tissot </h2>
          </Description>
          <ImageWrapper>
            <Image src="/watch.png" width={550} height={550} />
          </ImageWrapper>
        </MainContent>
      </Content>
    </>
  );
};

export default Home;
