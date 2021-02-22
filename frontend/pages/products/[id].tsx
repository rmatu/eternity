import axios from "axios";
import Head from "next/head";
import { Header } from "../../components/Header/Header";
import { SideNavbar } from "../../components/SideNavbar/SideNavbar";
import Heading from "../../components/UI/Heading/Heading";
import Image from "next/image";
import { IProduct } from "../../types";
import {
  MainContent,
  ProductInformationWrapper,
  LeftSection,
  RightSection,
  Content,
  ProductId,
  PriceWrapper,
  Avalibility,
  Id,
  AvalibilityWrapper,
  ImageContent,
  ImageWrapper,
  Specification,
  SpecificationItem,
  SpecificationRow,
} from "../../layout/productLayout";
import Rating from "../../components/UI/Rating/Rating";
import Button from "../../components/UI/Button/Button";
import { splitAndCapitalize, twoDecimals } from "../../utils/format";

interface ProductProps {
  product: IProduct;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${product.mainProductImage}`;

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="description" content="Description of a specific watch" />
      </Head>
      <Header />
      <Content>
        <SideNavbar width="30em" />
        <MainContent>
          <ProductInformationWrapper>
            <LeftSection>
              <Heading color="#fff" size="h1" marginB="">
                {product.name}
              </Heading>
              <Heading color="#fff" size="h3" marginB="0.5em">
                {product.brand}
              </Heading>
              <ProductId>
                <Id>{product._id}</Id>
                <Rating rating={product.rating} rColor margin="0.2em 0 0 0 " />
                <p>({`${product.numReviews}`})</p>
              </ProductId>
            </LeftSection>
            <RightSection>
              <PriceWrapper>
                <Heading size="h2" marginB="0.2em" color="#be6a15">
                  ${twoDecimals(product.price)}
                </Heading>
                <Button margin="0 0 1em 2em" padding="0.3em 3em">
                  Add
                </Button>
              </PriceWrapper>
              <AvalibilityWrapper>
                Avalibility:{" "}
                {product.countInStock > 0 ? (
                  <Avalibility avalible={true}>Avalible</Avalibility>
                ) : (
                  <Avalibility avalible={false}>Not Avalible</Avalibility>
                )}
              </AvalibilityWrapper>
            </RightSection>
          </ProductInformationWrapper>
          <ImageContent>
            <ImageWrapper>
              <Image src={fullUrl} layout="fill" quality={100}></Image>
            </ImageWrapper>
          </ImageContent>
          <Heading color="#fff" size="h1" marginB="">
            SPECIFICATION
          </Heading>
          <Specification>
            {Object.keys(product.specification).map((name) => (
              <SpecificationRow key={name}>
                <SpecificationItem>
                  {splitAndCapitalize(name)}
                </SpecificationItem>
                <SpecificationItem bolder>
                  {product.specification[name]}
                </SpecificationItem>
              </SpecificationRow>
            ))}
          </Specification>
        </MainContent>
      </Content>
    </>
  );
};

export async function getServerSideProps(context) {
  const { data: product } = await axios.get(
    `/api/products/${context.params.id}`
  );

  return {
    props: {
      product,
    },
  };
}

export default Product;
