import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { SideNavbar } from "../../components/SideNavbar/SideNavbar";
import { Specification } from "../../components/Specification/Specification";
import Button from "../../components/UI/Button/Button";
import Heading from "../../components/UI/Heading/Heading";
import Rating from "../../components/UI/Rating/Rating";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  Avalibility,
  AvalibilityWrapper,
  ButtonsWrapper,
  Content,
  Id,
  ImageContent,
  ImageWrapper,
  Info,
  LeftSection,
  MainContent,
  PriceWrapper,
  ProductId,
  ProductInformationWrapper,
  Reviews,
  ReviewText,
  RightSection,
  SmallerImageWrapper,
  WatchWrapper,
} from "../../layout/productLayout";
import { IProduct, IReviews } from "../../types";
import { twoDecimals } from "../../utils/format";
import { useRouter } from "next/router";

interface ProductProps {
  product: IProduct;
  relatedProducts: IProduct[];
  reviews: IReviews[];
  productId: string;
}

const Product: React.FC<ProductProps> = ({
  product,
  reviews,
  productId,
  relatedProducts,
}) => {
  const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${product.mainProductImage}`;
  const [mySwiper, setMySwiper] = useState();
  const [reviewLimit, setReviewLimit] = useState(100);
  const [reviewSkip, setReviewSkip] = useState(4);
  const [watchesLimit, setWatchesLimit] = useState(30);
  const [watchesSkip, setWatchesSkip] = useState(4);
  const [watches, setWatches] = useState([...relatedProducts]);
  const [comments, setComments] = useState([...reviews]);
  const [slidesAmmount, setSlidesAmmount] = useState(3);
  const router = useRouter();
  const size = useWindowSize();

  const handleRefetchComments = async (limit, skip) => {
    if (skip > limit) return;

    setReviewSkip(skip + 4);
    const { data } = await axios.get(
      `/api/products/reviews/${productId}?limit=${limit}&skip=${skip}`
    );
    setComments([...comments, ...data]);
  };

  const handleRefetchWatches = async (limit, skip) => {
    if (skip > limit) return;

    setWatchesSkip(skip + 4);
    const { data } = await axios.get(
      `/api/products/${router.query.id}?limit=${limit}&skip=${skip}`
    );
    setWatches([...watches, ...data]);
  };

  // Reseting all the state after route changes
  useEffect(() => {
    setWatches([...relatedProducts]);
    setComments([...reviews]);
    setReviewSkip(4);
    setWatchesSkip(4);
    if (mySwiper) {
      //@ts-ignore
      mySwiper.slideTo(0);
    }
  }, [reviews, relatedProducts]);

  useEffect(() => {
    if (size.width < 976) {
      setSlidesAmmount(2);
    }
    if (size.width < 610) {
      setSlidesAmmount(1);
    }
  }, [size]);

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

          {comments.map((review, index) => (
            <Reviews key={index}>
              <Info>
                <div>
                  <Heading color="#fff" size="h4" margin="0">
                    {review.username}
                  </Heading>
                  <p>
                    <Moment fromNow ago>
                      {review.createdAt}
                    </Moment>{" "}
                    ago
                  </p>
                </div>
                <Rating rating={review.rating} rColor="#be6a15" />
              </Info>
              <ReviewText>{review.body}</ReviewText>
            </Reviews>
          ))}
          <ButtonsWrapper>
            <Button
              onClick={() => handleRefetchComments(reviewLimit, reviewSkip)}
              padding="0.3em 3em"
              bColor="#be6a15"
            >
              More Reviews
            </Button>
            <Button padding="0.3em 3em">Add Comment</Button>
          </ButtonsWrapper>

          <Heading color="#fff" size="h1" margin="1em 0 0.5em 0">
            Related Watches
          </Heading>
          <WatchWrapper>
            <Swiper
              tag="section"
              wrapperTag="ul"
              spaceBetween={0}
              slidesPerView={slidesAmmount}
              navigation
              pagination
              onSwiper={(swiper) => {
                //@ts-ignore
                setMySwiper(swiper);
              }}
              onSlideChange={(e) => {
                if (e.isEnd) {
                  handleRefetchWatches(watchesLimit, watchesSkip);
                }
              }}
            >
              {watches.map((watch) => (
                <SwiperSlide tag="li" key={watch.name}>
                  <ImageContent margin="0 0 3em 0">
                    <SmallerImageWrapper>
                      <Link href={`/products/${watch._id}`}>
                        <a>
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}/${watch.mainProductImage}`}
                            layout="fill"
                            quality={100}
                          />
                        </a>
                      </Link>
                    </SmallerImageWrapper>
                    <Heading color="#fff" size="h3" margin="0 0.5em 0 0">
                      {watch.name}
                    </Heading>
                    <Heading size="h4" margin="0 0.5em 0 0" color="#be6a15">
                      ${twoDecimals(watch.price)}
                    </Heading>

                    <Button
                      bColor="#be6a15"
                      margin="0 0.5em 0 0"
                      padding="0.3em 3em"
                    >
                      Add
                    </Button>
                  </ImageContent>
                </SwiperSlide>
              ))}
            </Swiper>
          </WatchWrapper>

          <Footer />
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
  const { data: relatedProducts } = await axios.get(
    `/api/products/${context.params.id}?limit=4&skip=0`
  );

  return {
    props: {
      product,
      reviews,
      relatedProducts,
      productId: context.params.id,
    },
  };
}

export default Product;
