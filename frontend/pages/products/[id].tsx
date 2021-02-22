import Moment from "react-moment";
import axios from "axios";
import Head from "next/head";
import { Header } from "../../components/Header/Header";
import { SideNavbar } from "../../components/SideNavbar/SideNavbar";
import Heading from "../../components/UI/Heading/Heading";
import Image from "next/image";
import { HiPlusSm } from "react-icons/hi";
import { IProduct, IReviews } from "../../types";
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
  Info,
  ReviewText,
  Reviews,
} from "../../layout/productLayout";
import Rating from "../../components/UI/Rating/Rating";
import Button from "../../components/UI/Button/Button";
import { twoDecimals } from "../../utils/format";
import { Specification } from "../../components/Specification/Specification";

interface ProductProps {
  product: IProduct;
  reviews: IReviews[];
}

const Product: React.FC<ProductProps> = ({ product, reviews }) => {
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
              <Heading color="#fff" size="h1" margin="">
                {product.name}
              </Heading>
              <Heading color="#fff" size="h3" margin="0 0 0.5em 0">
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
                <Heading size="h2" margin="0 0 0.4em 0" color="#be6a15">
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

          <Heading color="#fff" size="h1" margin="0 0 0.5em 0">
            SPECIFICATION
          </Heading>
          <Specification product={product} />

          <Heading color="#fff" size="h1" margin="1em 0 0.5em 0">
            Reviews
          </Heading>

          {reviews.map((review, index) => (
            <Reviews key={index}>
              <Info>
                <div>
                  <Heading color="#fff" size="h4" margin="0">
                    {review.username}
                  </Heading>
                  <Moment fromNow ago>
                    {review.createdAt}
                  </Moment>{" "}
                  ago
                </div>
                <Rating rating={review.rating} rColor="#be6a15" />
              </Info>
              <ReviewText>{review.body}</ReviewText>
            </Reviews>
          ))}
        </MainContent>
      </Content>
    </>
  );
};

export async function getServerSideProps(context) {
  const { data: product } = await axios.get(
    `/api/products/${context.params.id}`
  );
  const { data: reviews } = await axios.get(
    `/api/products/reviews/${context.params.id}`
  );

  return {
    props: {
      product,
      reviews,
    },
  };
}

export default Product;
